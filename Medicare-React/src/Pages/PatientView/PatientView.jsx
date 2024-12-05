import React, { useState } from 'react';
import Sidebar from '../../Components/PatientViewComponents/sidebar';
import MainContent from '../../Components/PatientViewComponents/cards';
import Navbar from '../../Components/PatientViewComponents/header2';


function PatientView() {
  const [activeSection, setActiveSection] = useState('citas'); // Por defecto, "citas"

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className='contenedorResponsivo' >
        <Sidebar onMenuClick={handleMenuClick} />
        <MainContent activeSection={activeSection} />
        </div>
      </div>
    </>
  );
}

export default PatientView