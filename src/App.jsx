import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Skills } from "./pages/Skills"
import { Education } from "./pages/Education"
import { Experience } from "./pages/Experience"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <Router>
      <div className="flex min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white flex-col md:flex-row">
        <Navbar
          toggleDarkMode={() => setDarkMode(prev => !prev)}
          isDark={darkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <div className="flex flex-col flex-grow">
          <main className="flex-grow p-4 pb-24">
            <Routes>
              <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
)

export default App
