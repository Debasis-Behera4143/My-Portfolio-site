import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes, Zap } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 text-gray-200 hover:text-white font-bold transition-all duration-300 flex items-center gap-4 primary-button group relative overflow-hidden text-xl"
  >
    <span className="relative z-10 flex items-center gap-3">
      {isShowingMore ? "Show Less" : "Show More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-1" : "group-hover:translate-y-1"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingMore: PropTypes.bool.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([
    {
      id: 1,
      Title: "My Portfolio Site",
      Description:
        "A premium animated portfolio designed to showcase my technical expertise and creativity. Built with React, Vite, Tailwind CSS, Framer Motion, and AOS.",
      Img: new URL('/assets/Project1.png', import.meta.url).href,
      Link: "https://debasis-behera4143.github.io/My-Portfolio-site/",
      Github: "https://github.com/Debasis-Behera4143/My-Portfolio-site",
      Tech: ["React", "Vite", "Tailwind CSS"],
    },
    {
      id: 2,
      Title: "Racex - Car Racing Game",
      Description:
        "A fast-paced browser-based racing game built with HTML, CSS, and JavaScript with real-time scoring system and collision detection.",
      Img: new URL('/assets/Project2.png', import.meta.url).href,
      Link: "https://debasis-behera4143.github.io/Mini-car-game/",
      Github: "https://github.com/Debasis-Behera4143/Mini-car-game",
      Tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      Title: "Spotify Clone",
      Description:
        "A pixel-perfect front-end clone of Spotify's interface, crafted using only HTML and CSS with advanced CSS techniques.",
      Img: new URL('/assets/Project3.png', import.meta.url).href,
      Link: "https://debasis-behera4143.github.io/SPOTIFY-CLONE/",
      Github: "https://github.com/Debasis-Behera4143/SPOTIFY-CLONE",
      Tech: ["HTML", "CSS"],
    },
    {
      id: 4,
      Title: "Face Recognition System",
      Description:
        "An AI/ML-powered face recognition system developed with Python, leveraging OpenCV and machine learning algorithms.",
      Img: new URL('/assets/Project4.jpg', import.meta.url).href,
      Link: "https://github.com/Debasis-Behera4143/Face-recognition",
      Github: "https://github.com/Debasis-Behera4143/Face-recognition",
      Tech: ["Python", "AI", "OpenCV"],
    },
    {
      id: 5,
      Title: "Color Changing App",
      Description:
        "An interactive web application that dynamically changes background colors with smooth transitions and animations.",
      Img: new URL('/assets/Project5.png', import.meta.url).href,
      Link: "https://github.com/Debasis-Behera4143/Color-Changing",
      Github: "https://github.com/Debasis-Behera4143/Color-Changing",
      Tech: ["HTML", "CSS", "JavaScript"],
    },
  ]);
  
  const [certificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
    
    localStorage.removeItem('projects');
    localStorage.removeItem('certificates');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="lg:px-[12%] px-[5%] w-full sm:mt-0 mt-[4rem] bg-gradient-to-b from-[#0B0F19] to-[#121826] overflow-hidden section-padding" id="Portofolio">
      <div className="text-center pb-16">
        <h2 className="inline-block text-5xl lg:text-6xl font-bold text-center mx-auto primary-gradient">
          <Zap className="inline-block w-12 h-12 lg:w-14 lg:h-14 text-[#2B6FFF] mb-4" />
          <span className="block mt-2">Portfolio Showcase</span>
        </h2>
        <p className="text-[#B0B8C5] max-w-3xl mx-auto text-xl mt-6">
          Explore my journey through exceptional projects and technical expertise
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(43, 111, 255, 0.3)",
            borderRadius: "16px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(43, 111, 255, 0.1) 0%, rgba(223, 255, 0, 0.1) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="lg:px-6 py-2"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: "600",
                color: "#B0B8C5",
                textTransform: "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(43, 111, 255, 0.15)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(43, 111, 255, 0.3), rgba(223, 255, 0, 0.3))",
                  boxShadow: "0 4px 20px -2px rgba(43, 111, 255, 0.4)",
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "10px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <div>
          {value === 0 && (
            <TabPanel value={value} index={0}>
              <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedProjects.map((project, index) => (
                    <div
                      key={project.id || index}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={index * 100}
                    >
                      <CardProject
                        Img={project.Img}
                        Title={project.Title}
                        Description={project.Description}
                        Link={project.Link}
                        Github={project.Github}
                        Tech={project.Tech}
                        id={project.id}
                      />
                    </div>
                  ))}
                </div>
                {projects.length > initialItems && (
                  <div className="mt-12 w-full flex justify-center">
                    <ToggleButton
                      onClick={() => toggleShowMore('projects')}
                      isShowingMore={showAllProjects}
                    />
                  </div>
                )}
              </div>
            </TabPanel>
          )}

          {value === 1 && (
            <TabPanel value={value} index={1}>
              <div className="container mx-auto py-10">
                <div className="text-center py-12">
                  <div className="inline-block p-6 rounded-2xl bg-[#121826] border border-[#2B6FFF]/20">
                    <Award className="w-16 h-16 text-[#2B6FFF] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Certificates Coming Soon</h3>
                    <p className="text-[#B0B8C5] max-w-md">
                      I'm currently working on adding my professional certificates and achievements to this section.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          )}

          {value === 2 && (
            <TabPanel value={value} index={2}>
              <div className="container mx-auto py-10">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {techStacks.map((stack, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 50}
                      className="flex flex-col items-center"
                    >
                      <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                      <span className="mt-3 text-sm text-[#B0B8C5] text-center">{stack.language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          )}
        </div>
      </Box>
    </div>
  );
}

FullWidthTabs.propTypes = {
  // No props needed for this component
};