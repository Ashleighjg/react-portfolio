import './Homepage.css';
import profile_img from '../../assets/Ashleigh.svg';
import { Box, Button} from '@mui/material';

const Homepage = () => {
  return (
    <div id="homepage" className="homepage">
      <img src={profile_img} alt="" />
      <h1>
        {' '}
        <span> Ashleigh Chatman</span> <br />
        Full Stack Developer and Data Enthusiast
      </h1>
      <p>
        {' '}
        Where Code Meets Insights to Drive Scalable Solutions
        <br />
        <br />I am a lover of Data Analytics and Full Stack Developement from
        North Carolina.
        <br />
        <br />I am passionate about integrating my analytical skills with
        cutting edge technology to create innovative solutions that streamline
        operations, enhance user engagement, and drive business growth.
      </p>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" size="large">
          View My Work
        </Button>
      </Box>
      <br />
    </div>
  );
};

export default Homepage;
