#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для обновления фронтмэттера в заметках Obsidian
Удаляет свойство cssclasses и добавляет свойство banner
"""

import os
import re
import glob
from pathlib import Path

def process_frontmatter(content):
    """
    Обрабатывает фронтмэттер файла:
    - Удаляет cssclasses и его значения
    - Добавляет banner если его нет
    """
    lines = content.split('\n')
    
    # Найти границы фронтмэттера
    frontmatter_start = -1
    frontmatter_end = -1
    
    for i, line in enumerate(lines):
        if line.strip() == '---':
            if frontmatter_start == -1:
                frontmatter_start = i
            else:
                frontmatter_end = i
                break
    
    if frontmatter_start == -1 or frontmatter_end == -1:
        print("Фронтмэттер не найден")
        return content
    
    # Извлечь фронтмэттер
    frontmatter_lines = lines[frontmatter_start + 1:frontmatter_end]
    before_frontmatter = lines[:frontmatter_start + 1]
    after_frontmatter = lines[frontmatter_end:]
    
    # Обработать фронтмэттер
    new_frontmatter_lines = []
    skip_next = False
    has_banner = False
    
    i = 0
    while i < len(frontmatter_lines):
        line = frontmatter_lines[i]
        
        # Проверить наличие banner
        if line.startswith('banner:'):
            has_banner = True
            new_frontmatter_lines.append(line)
        # Пропустить cssclasses и его значения
        elif line.startswith('cssclasses:'):
            # Пропустить строку с cssclasses
            i += 1
            # Пропустить все следующие строки с отступом (значения cssclasses)
            while i < len(frontmatter_lines) and frontmatter_lines[i].startswith('  '):
                i += 1
            i -= 1  # Вернуться на одну позицию назад, так как цикл увеличит i
        else:
            new_frontmatter_lines.append(line)
        
        i += 1
    
    # Добавить banner если его нет
    if not has_banner:
        new_frontmatter_lines.append('banner:')
    
    # Собрать результат
    result_lines = before_frontmatter + new_frontmatter_lines + after_frontmatter
    return '\n'.join(result_lines)

def process_file(file_path):
    """Обработать один файл"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = process_frontmatter(content)
        
        # Записать изменения только если контент изменился
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✓ Обновлен: {os.path.basename(file_path)}")
            return True
        else:
            print(f"- Без изменений: {os.path.basename(file_path)}")
            return False
            
    except Exception as e:
        print(f"✗ Ошибка при обработке {file_path}: {e}")
        return False

def main():
    """Основная функция"""
    creatures_dir = "/Users/h4rakiri/Documents/Obsidian/DND-Master/99 - Общие ресурсы/01 - Бестиарий/Существа"
    
    if not os.path.exists(creatures_dir):
        print(f"Папка не найдена: {creatures_dir}")
        return
    
    # Найти все .md файлы
    md_files = glob.glob(os.path.join(creatures_dir, "*.md"))
    
    if not md_files:
        print("Файлы .md не найдены в папке")
        return
    
    print(f"Найдено {len(md_files)} файлов для обработки")
    print("-" * 50)
    
    updated_count = 0
    
    for file_path in sorted(md_files):
        if process_file(file_path):
            updated_count += 1
    
    print("-" * 50)
    print(f"Обработка завершена!")
    print(f"Всего файлов: {len(md_files)}")
    print(f"Обновлено: {updated_count}")
    print(f"Без изменений: {len(md_files) - updated_count}")

if __name__ == "__main__":
    main()
