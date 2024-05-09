import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Courses from './pages/courses';
import CoursesPage from './pages/CoursesPage';
import Branding from './pages/TopNav';
import Songs from './pages/Songs';
import Films from './pages/Films';
import Home from './pages/Home';
import Blog from './pages/Blog';
import DisplayVideo from './pages/DisplayVideo';
import Discover from './pages/Discover';
import Events from './pages/Events';

// Import SplashScreen component
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, initializing app)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set loading to false after 3 seconds (adjust as needed)
  }, []);

  return (
    <Router>
      {/* Render SplashScreen while loading is true */}
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Branding fixed="top" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/course/:id" exact component={Courses} />
            <Route path="/Songs" exact component={Songs} />
            <Route path="/Films" exact component={Films} />
            <Route path="/courses" exact component={CoursesPage} />
            <Route path="/discover" exact component={Discover} />
            <Route path="/home" exact component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/news/:id" component={Blog} />
            <Route path="/discover/:id" component={DisplayVideo} />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
