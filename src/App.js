import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TopNavBar from './NavBar/TopNavBar';
import Profile from './Profile/Profile';
import MyProfile from './Profile/MyProfile';
import ContactUs from './Contact/ContactUs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('home');
  const [projects, setProjectData] = useState([]);


  // ✅ Reusable API fetching function
  const fetchProjectData = async () => {
    try {
      console.log("Project data fetched started");
      const response = await axios.get("https://api.sonujha.in/projects/all");
      setProjectData(response.data);
      console.log("Project data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  // ✅ Call the function inside useEffect to fetch on page load
  useEffect(() => {
    fetchProjectData();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem('imageTheme', './light.png');
    } else {
      localStorage.setItem('imageTheme', './dark.png');
    }
    console.log(isDarkMode, localStorage.getItem('imageTheme'));
  };

  // Apply the dark mode class to the body and save the state in localStorage
  useEffect(() => {
    // Set dark mode class on the body element
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save the current dark mode preference in localStorage
  }, [isDarkMode]);

  const toggleDropdown = (open) => {
    setIsDropdownOpen(open);
  };
  return (
    <div className={isDarkMode ? 'dark-mode all-center' : 'light-mode all-center'} >
      <TopNavBar
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 'home' &&
        <Profile
          isDarkMode={isDarkMode}
        />}
      {selectedTab === 'about' &&
        <Profile
          isDarkMode={isDarkMode}
        />}
      {selectedTab === 'services' &&
        <Profile
          isDarkMode={isDarkMode}
        />}
      {selectedTab === 'profile' &&
        <MyProfile
          callProjectData={fetchProjectData}
          projectData={projects}
          selectedTab={selectedTab}
          isDarkMode={isDarkMode}
        />}
      {selectedTab === 'contact' && <ContactUs isDarkMode={isDarkMode} />}
    </div >
  );
}

export default App;
