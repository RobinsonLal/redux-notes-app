# 📝 React Redux Notes Application

A lightweight, scalable note-taking web application built with **React** and **Redux Toolkit (RTK)** to demonstrate modern centralized state management, action dispatching, and unidirectional data flow patterns.

---

## 🚀 Key Features

* **Centralized State Management:** Manages global note state using Redux Toolkit slices (`noteSlice.js`).
* **Dynamic Action Dispatching:** Captures form inputs locally and dispatches actions via `useDispatch` to update the global store without prop drilling.
* **Reactive UI Rendering:** Uses `useSelector` to automatically read from the global Redux store and re-render components in real time upon state updates.
* **Modular Architecture:** Clean separation of UI components and Redux logic.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend:** React.js (Hooks, Functional Components)
* **State Management:** `@reduxjs/toolkit`, `react-redux`
* **Styling:** CSS3

---

## 📂 Project Structure

```text
redux-notes-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CreateNote.js     # Form component to capture and dispatch new notes
│   │   └── ListNote.js       # Component to render notes from the Redux store
│   ├── redux/
│   │   ├── slices/
│   │   │   └── noteSlice.js  # RTK slice defining state & note reducers
│   │   └── store.js          # Centralized Redux Store configuration
│   ├── App.css
│   ├── App.js                # Root application container
│   ├── index.css
│   └── index.js              # Entry point wrapping App with Redux Provider
├── .gitignore
├── package.json
└── README.md