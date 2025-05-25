import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile"
import { Social } from "./components/Social/Social"
import { Tools } from "./components/Tools/Tools"
import "./styles/global.css"
import {useState} from "react"
import { Experience } from "./components/Experience/Experience"
import { Contact } from "./components/Contact/Contact"
import { Projects } from "./components/Projects/Projects"
import { StatusBar } from "./components/StatusBar/StatusBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocumentViewer from "./components/DocumentViewer/DocumentViewer"
import Skills from "./components/Skills/Skills"
import { LoginForm } from "./components/Login/LoginForm"
import { SignupForm } from "./components/SignupForm/SignupForm"

export default function App() {
  const [selectedTab, setSelectedTab] = useState();
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  function onClose() {
    setSelectedTab(null);
  }

  function isValidLogin(token) {
    let response = fetch('https://backend.sonujha.in/users/config', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    response = response.then(res => res.json())
    response = response.catch(err => {
      console.error("Error validating token:", err);
      return null;
    });
    response = response.then(data => {
      if (data && data.success) {
        return true;
      } else {
        return false;
      }
    }
    );
    response = response.catch(err => {
      console.error("Error validating token:", err);
      return false;
    }
    );
    response = response.then(valid => {
      if (valid) {
        localStorage.setItem('token', token);
      }
      return valid;
    }
    );
  }

  return (
    <ThemeProvider>
      <main className="main-content">
      {selectedTab === "resume" && <DocumentViewer onClose={onClose} />}
      {selectedTab === "skills" && <Skills onClose={onClose} />}
      {token === null || !isValidLogin(token) ? <>
      {selectedTab === "login" && <LoginForm setSelectedTab={setSelectedTab} onLogin={setToken}/>}
      {selectedTab === "signup" && <SignupForm setSelectedTab={setSelectedTab}/>}</>
      : <></>
}
       {!selectedTab && 
       <Router>
      <Navbar/>
      <StatusBar />
        <Routes>
          <Route path="/" element={<><Profile /><Social /></>} />
          <Route path="/home" element={<><Profile /><Social /></>} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>}
     <Tools onTabChange={setSelectedTab}/>
      </main>
    </ThemeProvider>
  )
}