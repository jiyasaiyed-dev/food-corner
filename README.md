# Food Corner — React Mini Project

A complete restaurant website built with React (functional components, JSX, props, useState, event handling, list rendering, conditional rendering).

## How to Run

1. Make sure Node.js is installed (v16+ recommended).
2. Open a terminal in this folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. The app will open at `http://localhost:3000`.

## Project Structure

```
food-corner-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── FoodCard.js
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── CartPanel.js
│   │   ├── OrderPage.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── data/
│   │   └── foodItems.js   (array/JSON data source with 32 food items)
│   ├── App.js              (root component, page routing + cart state)
│   ├── App.css              (all styling)
│   └── index.js             (React DOM entry point)
├── package.json
└── README.md
```

## Pages

- **Home** — hero section, popular dishes, feature highlights
- **Menu** — search + category filter, all 32 food items rendered via `.map()`, add-to-order buttons
- **Order** — cart with quantity controls, edit, delete, order summary, and customer checkout form with validation
- **About** — restaurant story, values, team
- **Contact** — contact info + message form with validation

## React Concepts Demonstrated

- Functional components only
- JSX
- Props (e.g. `FoodCard`, `CartPanel`, page components all receive props)
- `useState` for cart, search, filters, form data, validation errors, edit mode
- Event handling (`onClick`, `onChange`, `onSubmit`)
- List rendering with `.map()` (food items, cart lines, nav links, features)
- Conditional rendering (empty cart, no search results, form errors, success messages)
- Array/JSON data source (`src/data/foodItems.js`)

No backend, no database — all state is managed in-memory with React's `useState`.
