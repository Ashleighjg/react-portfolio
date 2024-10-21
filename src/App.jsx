
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';


const App = () => {
  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'About':
        return <About />;
      default:
        return <Homepage />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App
