##  Create React projects with Vite and Tailwindcss

```
npm create vite@latest
```
### Follow these Steps to install react with vite:

- Enter your project name like: react-Vite

- Package name same as project name

- Select a framework by pressing down arrow key

- Select a Language variant

- Go into your project folder
```
cd react-Vite
```
- Run these commands in terminal
```
npm i 
                            #or 
npm install
```

### Follow these steps to install tailwindcss:
- Run these commands in terminal
```
npm install -D tailwindcss@3 postcss autoprefixer
```
```
npx tailwindcss init -p
```

#### Now check your project folder it contains `tailwind.config.js` file.
- Add these code stuff in content

 ### ` tailwind.config.js`
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

#### Now Add the Tailwind directives to your Css files

- Add these tailwind imports in your all Css files 

### `index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `App.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Now Run your Project

```
npm run dev
```


