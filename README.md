# MichaelT-178 Comment 

I forked this repo to add syntax highlighting for certain languages 

## How To Add a Token

1. Go to components/prism-python.js (or whatever language you want to modify)
2. add your token and save
3. Go to your project and add the following package.json. If there's already a "dependencies" attribute just add the one line there.

```json
"dependencies": {
    "prismjs": "https://github.com/MichaelT-178/prism.git"
},
```

5. Cd into your project and delete your current prismjs module if you have one 

```
cd node_modules
```

```
rm -rf prismjs
```

6. Run the following command 

```
npm install prismjs@https://github.com/MichaelT-178/prism.git
```

7. Run the project after installation.
```
npm run dev
```

8. Note that you have to do steps 5-8 every time you make and commit changes to this repository in order for your projects prismjs library to be up to date.