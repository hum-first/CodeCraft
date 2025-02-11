import './page.css';

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <header className="header">
        <h1 className="header-title">Welcome to Code Craft</h1>
        <p className="header-subtitle">Your one-stop solution for all coding needs.</p>
      </header>
    </div>
  );
}