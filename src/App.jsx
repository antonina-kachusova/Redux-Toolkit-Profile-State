import './App.css';
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <main className="app">
      <div className="app-card">
        <Header />
        <Profile />
      </div>
    </main>
  );
}

export default App;