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
  const [token, setToken] = useState(sessionStorage.getItem('token') || null);
  function onClose() {
    setSelectedTab(null);
  }
  return (
    <ThemeProvider>
      <main className="main-content">
      {selectedTab === "resume" && <DocumentViewer onClose={onClose} />}
      {selectedTab === "skills" && <Skills onClose={onClose} />}
      {selectedTab === "login" && <LoginForm setSelectedTab={setSelectedTab} onLogin={setToken}/>}
      {selectedTab === "signup" && <SignupForm setSelectedTab={setSelectedTab} onLogin={setToken}/>}
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