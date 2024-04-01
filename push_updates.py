import os
import pyautogui
from termcolor import colored as c
import time

def save_all_changes_in_files():
    """
    Saves all changed unsaved files in folder.
    command + option + s
    """
    pyautogui.keyDown('command')
    pyautogui.keyDown('option')
    pyautogui.press('s')
    pyautogui.keyUp('option')
    pyautogui.keyUp('command')

    print(c("All files with changes saved successfully!\n", 'green'))

save_all_changes_in_files()

os.system("git add .")

print(c('✅ git add completed successfully', 'green'))


message = input(c("\nWhat's your commit message? : ", 'cyan'))

os.system(f'git commit -m "{message.strip()}"')

print(c('✅ git commit completed successfully\n', 'green'))



os.system("git push")

print(c('✅ git push completed successfully', 'green'))

time.sleep(1.5)

os.system("python3 automate_project_update.py")
