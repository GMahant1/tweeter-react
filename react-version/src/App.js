import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <Navigation />
      <Profile />
      <main className="container">
        <TweetList /> 
        <TweetForm />
      </main>
    </div>
  );
}

export default App;
