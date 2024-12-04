import { useState } from "react";
import "./Home.css";

{/* Header */ }
const [showLogin, setShowLogin] = useState(false);

<header className="header">
    <img src="../public/logo.png" alt="Logo" className="logo" />
    <button
        className="access-banner-button"
        onClick={() => setShowLogin(true)}
    >
        Log in
    </button>
</header>