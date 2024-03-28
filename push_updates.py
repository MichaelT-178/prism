import os
from termcolor import colored as c
import time

os.system("git add .")

print(c('✅ git add completed successfully', 'green'))


message = input(c("\nWhat's your commit message? : ", 'cyan'))

os.system(f'git commit -m "{message.strip()}"')

print(c('✅ git commit completed successfully\n', 'green'))



os.system("git push")

print(c('✅ git push completed successfully', 'green'))

time.sleep(2)

os.system("python3 no_count_automate_project_update.py")
