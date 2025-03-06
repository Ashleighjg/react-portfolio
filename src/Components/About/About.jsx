//import './About.css';
import {
  Typography,
  Container,
  Grid,
  Box,
  CircularProgress,
} from '@mui/material';

import profile_img from '../../assets/Ashleigh.svg';

const skills = [
  { name: 'JavaScript', proficiency: 90 },
  { name: 'React', proficiency: 85 },
  { name: 'Node.js', proficiency: 80 },
  { name: 'HTML/CSS', proficiency: 95 },
  { name: 'Python', proficiency: 75 },
  { name: 'MongoDB', proficiency: 75 },
  { name: 'UI/UX Design', proficiency: 70 },
];


const About = () => {
  return (
    <Container>
      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>

        {/* Introduction and Portrait Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              I am a Full Stack Developer and Data Analyst with over 8 years of
              experience in leveraging data-driven insights and process
              optimization to enhance organizational efficiency and impact. My
              background in managing CRM systems like Salesforce, coupled with
              leading cross-functional projects, has equipped me with a
              strategic approach to solving complex business challenges.
              <br /> <br />
              My strong foundation in data management and process automation
              complements my development skills, enabling me to design
              efficient, data-driven solutions with a focus on user experience
              and performance. I thrive in collaborative environments,
              continuously learning and applying innovative technologies to
              create impactful, high-quality software. <br />
              <br />
              What Drives Me:
              <br />I thrive at the intersection of technology, data
              strategy, and business operations. I am driven by the challenge of
              crafting digital solutions that not only solve complex problems
              but also enhance user experiences. I am energized by opportunities
              that allow me to combine my developer skills with my strategic
              analytical background, delivering scalable
              solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={profile_img}
              alt="Portrait"
              sx={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '50%',
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Skills Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        My Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {/* Circular Progress Bar */}
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={skill.proficiency}
                  size={100}
                  thickness={5}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                  }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="h6" component="div" color="accent.main">
                    {`${skill.proficiency}%`}
                  </Typography>
                </Box>
              </Box>
              {/* Skill Name */}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>

    /*<div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>
              I am a passionate and results-driven Full Stack Developer,
              combining over a decade of experience in data strategy and
              operations with expertise in modern web development technologies.
              Through the Full Stack Flex Coding Bootcamp, I’ve developed
              proficiency in JavaScript, React, Node.js, Express, and MongoDB,
              allowing me to build robust, scalable applications that solve
              real-world business problems. 
              <br /> <br />
              My strong foundation in data management and process automation
              complements my development skills, enabling me to design
              efficient, data-driven solutions with a focus on user experience
              and performance. I thrive in collaborative environments,
              continuously learning and applying innovative technologies to
              create impactful, high-quality software.{' '}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills-p">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>JavaScript</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>React JS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>React</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skills-p">
              <p>MongoDB</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>*/
  );
};

export default About;
