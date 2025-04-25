# Health Tracker React App

A simple and clean health metrics tracking app built in React, allowing users to input, view and visualize health data like Step Count, Water Intake and Heart Rate.

## Features

- **Add new Health metric entires**(Step Count, Water Intake, Heart Rate) with value and auto generated timestamp.
- **Validate form inputs** for empty, non-numeric, or unrealistic values(custom limits per metric).
- **Data Persistence** using browser `localStorage` - persists across page reloads.
- **Health Data Table** with:
    - Filtering by time of day(Morning, Afternoon, Evening)
    - Sorting by value (Ascending, Descending)
    - Edit existing entries inline
    - Delete entries
- **Data Visualization** using `Recharts`:
    - Line chart for selelcted metric data over the last 24 hours
    - Responsive, clean graph layout
- **Dark Mode Toggle** for better viewing comfort.
- **Export Data as CSV** file.
- Clean, responsive UI built with plain CSS modules(no external CSS frameworks)

## Tech Stack

- **React** (Functional components with Hooks).
- **Recharts** (for data visualization).
- **FileSaver.js** (for csv export).
- **Plain CSS modules** for component-scoped styling.
- **LocalStorage** for data persistence.

## Design Choices & Notes

- **Form Validation:** Prevents empty, non-numeric, or impractical values based on reasonable ranges for each metric.
- **Auto Timestamping:** Each entry gets a timestamp at submission - per typical logging app UX.
- **Data Persistence:** Implemented using `localStorage` via a `utils/storage.js` helper for clean separation.
- **Dark Mode:** Simple class-based dark mode toggle affecting the document body.
- **CSV Export:** Data exported in a clean comma-separated format with headers.
- **No Modal UI for Form:** Kept the form inline for simplicity and focus per assessment brief - modals were not requested.

### 1. Clone the repo
git clone https://github.com/ruchitha006/Health-Tracker-App.git 
cd health-tracker-app
### 2. Install dependencies
npm install
### 3. Run the application
npm start
Open `http://localhost:3000/` to view it in browser.


