# MichaelT-178 Comment 

I forked this repo to add syntax highlighting for certain languages. 


## Setup

Do the following before pushing changes to this repo.

1. Clone this project.

``` 
git clone https://github.com/MichaelT-178/prism.git
```

2. Open the [automate_project_update.py](https://github.com/MichaelT-178/prism/blob/master/automate_project_update.py) file in your newly cloned folder.

3. Set the value of the "path_to_local_project" variable to the path of the folder where you're using this forked prism repo.

4. Run the following commands to add, commit, and push your syntax highlighting changes to the repo. The script will also automatically update the prismjs package in your local npm project.

```
cd prism
python3 push_updates.py
```

5. If you want to do this process without using a python script, see the "Push and Update Manually" section below.

6. Go to your local npm project and add the forked prismjs library as a dependency.

```
cd your-project
npm install prismjs@github:MichaelT-178/prism --save
```


## How To Add a Token

1. Go to components/prism-python.js (or whatever language you want to modify)
2. Make your syntax highlighting changes to the language file and save.
3. Go to your project and add the following package.json. If there's already a "dependencies" attribute just add the one line there.

```json
"dependencies": {
    "prismjs": "https://github.com/MichaelT-178/prism.git"
},
```

4. Delete your current prismjs module in node_modules if you have one.

```
rm -rf node_modules/prismjs
```

5. Run the following command 

```
npm install prismjs@https://github.com/MichaelT-178/prism.git
```

6. Run the project after installation.
```
npm run dev
```

7. **Note:** that you have to do steps 4-6 every time you make and commit changes to this repository. This is because your projects node_modules prismjs will need to be updated.


## Push and Update Manually