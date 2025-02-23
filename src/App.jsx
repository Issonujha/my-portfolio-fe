import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile"
import { Social } from "./components/Social/Social"
import { Tools } from "./components/Tools/Tools"
import "./styles/global.css"

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main-content">
        <Profile />
        <Social />
        <Tools />
      </main>
    </ThemeProvider>
  )
}