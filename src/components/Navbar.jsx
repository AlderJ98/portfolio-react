import React from "react"
import { NavLink } from "react-router-dom"
import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    MailIcon,
    SunIcon,
    MoonIcon
} from "@heroicons/react/outline"

export default function Navbar({ toggleDarkMode, isDark }) {
    const linkIconClass = ({ isActive }) => 
        `flex flex-col items-center justify-center gap-1 text-xs ${
            isActive
            ? "text-green-500"
            : "text-gray-500 dark:text-gray-400 hover:text-green-600"
        }`
    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 py-2 px-3 rounded text-sm transition-colors duration-200 ${
            isActive
            ? "bg-green-600 text-white font-semibold"
            : "text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-700"
        }`

    return (
        <>
            <aside className="hidden md:flex w-64 bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex-col p-4 shadow-lg h-screen">
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="https://avatars.githubusercontent.com/u/9919?v=4"
                        alt="Perfil"
                        className="w-24 h-24 rounded-full object-cover border-4 border-green-500"
                    />
                    <h1 className="text-lg font-bold mt-4">Alder Figueroa</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
                </div>
                <ul className="flex flex-col gap-1 flex-grow">
                    <li>
                        <NavLink className={linkClass} to="/">
                            <HomeIcon className="w-5 h-5" /> Sobre mí
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to="/education">
                            <UserIcon className="w-5 h-5" /> Educación
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to="/skills">
                            <HomeIcon className="w-5 h-5" /> Habilidades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to="/experience">
                            <HomeIcon className="w-5 h-5" /> Experiencia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to="/projects">
                            <BriefcaseIcon className="w-5 h-5" /> Portafolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkClass} to="/contact">
                            <MailIcon className="w-5 h-5" /> Contacto
                        </NavLink>
                    </li>
                    <li className="mt-auto pt-6">
                        <label className="flex items-center cursor-pointer gap-2">
                            <span className="text-sm text-gray-700 dark:text-gray-300">{isDark ? "Dark" : "Light"}</span>
                            <input type="checkbox" checked={isDark} onChange={toggleDarkMode} className="sr-only" />
                            <div className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 ${isDark ? 'justify-end' : 'justify-start'}`}>
                                <div className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                                    {isDark ? <MoonIcon className="w-3 h-3 text-purple-700" /> : <SunIcon className="w-3 h-3 text-yellow-500" />}
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </aside>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
                <ul className="flex justify-around items-center p-2">
                    <li>
                        <NavLink className={linkIconClass} to="/">
                            <HomeIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkIconClass} to="/education">
                            <UserIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkIconClass} to="/skills">
                            <HomeIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkIconClass} to="/experience">
                            <HomeIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkIconClass} to="/projects">
                            <BriefcaseIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={linkIconClass} to="/contact">
                            <MailIcon className="w-6 h-6" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
