import './App.css'
import { BrowserRouter as Routes, Switch, Route, Link, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/profile/details">Profile Details</Link>
            </li>
            <li>
              <Link to="/profile/settings">Profile Settings</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute>
           <Profile />
          </ProtectedRoute>
          <Route exact path="/profile/details">
            <ProfileDetails />
          </Route>
          <Route exact path="/profile/settings">
            <ProfileSettings />
          </Route>
          <Route exact path="/blog/:id">
            <BlogPost />
          </Route>
        </Switch>
      </div>
    </Routes>
  )
}

export default App;
