# MichaelT-178 Comment 

I forked this repo to add syntax highlighting for certain languages. This fork allows you to have custom highlighting in projects where you aren't pushing node_modules.


## Setup

Before starting setup your dependencies to make this project work and update with easy.

1. Open the [automate_update.py]() in this project. 

2. Assign the "path_to_local_project" variable to the path of the project where you want to use this modified prismjs library. Save it when you're done

3. 


## How To Add a Token

1. Go to components/prism-python.js (or whatever language you want to modify)
2. add your token to the languages file and save.
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