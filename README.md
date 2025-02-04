# **FlickFusion** 🎬🍿

FlickFusion is a movie search platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled using Bootstrap. It leverages The Movie Database (TMDb) API to fetch real-time movie data, display movie lists, and provide detailed movie information, including ratings, genres, and overviews.

---

## **Table of Contents** 📚

1. Features
2. Technologies
3. Setup and Installation
4. Environment Variables
5. Usage
6. Project Structure
7. Deployment

---

## **Features** ✨

- **Search Movies**: Search for movies by title and get a list of relevant results.
- **Movie Details**: Click on a movie to view detailed information such as plot, ratings, genres, and release date.
- **Rating System**: Movies are rated using a star system based on user ratings from TMDb.
- **Responsive Design**: The website is fully responsive and works seamlessly on all screen sizes (mobile, tablet, desktop).
- **Fast & Real-time**: Built with React, providing a fast and interactive user interface.

---

## **Technologies** 🛠️

- **Frontend**:
  - React.js for building the user interface
  - Axios for making API requests
  - Bootstrap for styling and responsive design
  - FontAwesome for star rating icons

- **Backend** (Optional for future enhancements):
  - Node.js and Express.js
  - MongoDB (for storing user reviews, movie data, etc.)

- **API**:
  - **TMDb API**: Fetches movie data including title, poster, genre, rating, etc.

- **Other Tools**:
  - Vercel for deployment
  - Git and GitHub for version control

---

## **Setup and Installation** 🧑‍💻

To run **FlickFusion** locally on your machine:

### 1. Clone the Repository:
```bash
git clone https://github.com/atharvrajmane/flick-fusion.git
cd flick-fusion
```

### 2. Install Dependencies:
```bash
npm install
```

### 3. Set up Environment Variables:
Create a .env file in the root of your project and add your TMDb API key:
```bash
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
You can get your TMDb API key from The Movie Database.


### 4. Run the Development Server:
```bash
npm run dev
```
Visit http://localhost:5173 in your browser to see the app in action!

---

## **Environment Variables** 🌿

**The following environment variable is required for the project to function:**

- VITE_TMDB_API_KEY: Your TMDb API key, which is used to fetch movie data from The Movie Database API.

---

## **Usage** 🚀

1. Search Movies: Type the movie title in the search bar to get a list of results.
2. View Movie Details: Click on any movie title to view its detailed information, including ratings, genres, and an overview.
3. Rate Movies: The movies are displayed with a star rating system based on user ratings from TMDb.

---

## **Project Structure** 🗂️

```bash
movie-app/
├── public/                     # Static assets (e.g., favicon, images)
│   └── vite.svg                # Default Vite logo
├── src/                        # Main source code
│   ├── assets/                 # Assets like images, icons, etc.
│   ├── components/             # Reusable React components
│   │   ├── MovieCard.jsx       # Component for displaying a single movie
│   │   ├── SearchBar.jsx       # Component for the search functionality
│   │   ├── Navbar.jsx          # Navigation bar component
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Home page with movie list
│   │   └── MovieDetails.jsx    # Page for displaying movie details
│   ├── services/               # API service files
│   │   └── tmdb.js             # Functions for TMDb API calls
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Entry point for the app
│   ├── index.css               # Global styles
├── .env                        # Environment variables (e.g., API key)
├── .gitignore                  # Files/folders to ignore in Git
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration file
└── README.md                   # Project documentation
```

---

## **Deployment** 🌍

**The project is deployed using Vercel.**
- Vercel Link: [FlickFusion on Vercel](https://flick-fusion-iota.vercel.app/)

**To deploy the app to Vercel:**

1. Run vercel in your terminal.
2. Follow the on-screen instructions to link your project and deploy it.
