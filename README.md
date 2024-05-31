# Intro
- Wer bist du?
- Was ist dein Hintergrund?
- Was sind deine Erwartungen/Wünsche?
  
# Links
- https://www.typescriptlang.org/
- https://npmtrends.com/
- https://react.dev/
- NICHT NUTZEN: https://create-react-app.dev/
- https://eslint.org/
- https://github.com/sindresorhus/eslint-plugin-unicorn - kann man machen, muss man aber nicht
- https://reactnative.dev/
- https://docs.pmnd.rs/react-three-fiber
- StrictMode: https://react.dev/reference/react/StrictMode
- https://github.com/airbnb/javascript
- https://prettier.io/
- React Dev tools: https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1
- https://react.dev/reference/react/Fragment
- Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- https://overreacted.io/a-complete-guide-to-useeffect/
- Vite Proxy: https://vitejs.dev/config/server-options#server-proxy
- Immutability:
  - https://github.com/kolodny/immutability-helper - leichtgewichtig aber wirre Syntax
  - https://immerjs.github.io/immer/ - mittelschwergewichtig mit JS Proxies
  - https://immutable-js.com/ - schwergewichtig weil neue Datentypen
- https://www.typescriptlang.org/play/?#example/types-vs-interfaces
- Utility Types: https://www.typescriptlang.org/docs/handbook/utility-types.html
- https://tailwindcss.com/
  - https://tailwindcss.com/docs/guides/vite
- Classname handling
  - clsx: https://github.com/lukeed/clsx
  - classnames: https://github.com/JedWatson/classnames
- Komponentenbibliotheken
  - https://react-bootstrap.netlify.app/
  - https://mui.com/material-ui/getting-started/
- https://m3.material.io/
- https://developer.apple.com/design/human-interface-guidelines
- https://reactrouter.com/
- https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
- Zentrales Statemanagement
  - Redux: https://redux.js.org/
  - XState: https://xstate.js.org/
  - MobX: https://mobx.js.org/README.html
  - Jotai: https://jotai.org/

# Setup

1. Code aus dem Repo: https://github.com/sspringer82/react-ws

2. parallel zum `backend`: 
a. `npm create vite@latest frontend -- --template react-ts`
b. `cd frontend`
c. `npm install`
d. `npm run dev`
e. Im Browser: http://localhost:5173 

3. Backend starten - Neue Kommandozeile:
a. ins Verzeichnis `backend` gehen
b. `npm install`
c. `npm start`
d. Im Browser: http://localhost:3001/books