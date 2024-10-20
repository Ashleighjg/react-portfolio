import './Homepage.css';
import profile_img from '../../assets/ashleigh.jpg';

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={profile_img} alt="" />
      <h1> Im Ashleigh Chatman, full stack developer</h1>
      <p> Im a lover a data analytics and developement from North Carolina.</p>
    </div>
  );
};

export default Homepage;
