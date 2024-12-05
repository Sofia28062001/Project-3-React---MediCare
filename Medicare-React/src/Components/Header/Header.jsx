import { useState } from "react";
import "./Header.css";

{/* Header */ }


 const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <>
          <header className="header">
              <img src="../public/logo.png" alt="Logo" className="logo" />
              <button
                  className="access-banner-button"
                  onClick={() => setShowLogin(true)}
              >
                  Log in
              </button>
          </header>
    </>
  )
}

export default Header
