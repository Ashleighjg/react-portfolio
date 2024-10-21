import './Homepage.css';
import profile_img from '../../assets/Ashleigh.svg';

const Homepage = () => {
  return (
    <div id="homepage" className="homepage">
      <img src={profile_img} alt="" />
      <h1>
        {' '}
        <span> Ashleigh Chatman</span> <br />Web Developer and Data Analyst
      </h1>
      <p>
        {' '}
        I am a lover of Data Analytics and Web Developement from North
        Carolina.
      </p>
    </div>
  );
};

export default Homepage;
