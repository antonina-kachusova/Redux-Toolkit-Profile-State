import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
  const username = useSelector(state => state.username);

  return (
    <header className="header">
      <h1>Redux Profile State</h1>

      <div className="username-badge">
        Current user: <span>{username}</span>
      </div>
    </header>
  );
}

export default Header;