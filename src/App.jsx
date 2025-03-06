
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ABC9C', // Turquoise
    },
    secondary: {
      main: '#e53d00', // Reddish Orange
    },
    accent: {
      main: '#ffe900', // Yellow
    },
    background: {
      default: '#046865', // Teal
      paper: '#ECF0F1', // Light Gray for cards/paper
    },
    text: {
      primary: '#2C3E50', // Dark Blue-Gray for text
      secondary: '#FFFFFF', // White for text on dark backgrounds
    },
  },
  typography: {
    fontFamily: 'Vidaloka, serif',

    h4: {
      fontWeight: 600,
      color: '#2C3E50', // Dark Blue-Gray for headings
    },
    body1: {
      color: '#2C3E50', // Dark Blue-Gray for body text
    },
  },
});

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
    <div className="portfolio">
      <ThemeProvider theme={theme}>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App
