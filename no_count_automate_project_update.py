
import os
from termcolor import colored as c

os.system("clear")

# MODIFY THE PATH HERE AS NECESSARY
path_to_local_project = "../top-bar"


print(c("Updates successfully pushed to Github. Now updating your prismjs library in your project.", "cyan"))
os.chdir(path=path_to_local_project)
os.system("rm -rf node_modules/prismjs")

print(c('\nSuccessfully deleted the outdated prismjs library in your project!', 'green'))
print(c('\nDownloading new prismjs library in your project. This will probably take 20-40 seconds...', 'blue'))


os.system("npm install prismjs@https://github.com/MichaelT-178/prism.git")


print(c('\n\nSuccessfully updated your "prismjs" library in your project!\n', 'green'))




