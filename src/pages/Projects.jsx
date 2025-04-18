import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EyeIcon, XIcon } from '@heroicons/react/solid'

const projects = [
    {
        title: 'BrainPulse',
        category: 'Productivity',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
        description: 'Aplicación de productividad que permite gestionar tareas, metas y enfoque diario.',
        tags: ['app', 'productivity', 'tasks', 'focus'],
        links: {
        ios: '#',
        android: '#'
        }
    },
    {
        title: 'SmartCash',
        category: 'Utilities',
        image: 'https://cdn-icons-png.flaticon.com/512/4298/4298616.png',
        description: 'App para registro de ingresos, gastos y finanzas personales.',
        tags: ['utilities', 'finanzas', 'mobile'],
        links: {
        ios: '#',
        android: '#'
        }
    }
]

export const Projects = () => {
    const [selected, setSelected] = useState(null)

    return (
        <section className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">PORTAFOLIO <span className="text-black dark:text-white">DE PROYECTOS</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
                <div key={index} className="relative group cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition duration-300">
                    <img src={project.image} alt={project.title} className="w-full h-24 object-contain mx-auto" />
                    <h3 className="text-center mt-3 font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">{project.category}</p>
                    <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                    onClick={() => setSelected(project)}
                    >
                    <EyeIcon className="w-8 h-8 text-white" />
                    </div>
                </div>
            ))}
        </div>

        <AnimatePresence>
            {selected && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            >
                <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 max-w-2xl w-full p-6 rounded-lg relative">
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4">
                    <XIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img src={selected.image} alt={selected.title} className="w-32 h-32 object-contain rounded-xl" />
                    <div>
                        <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                        <div className="flex gap-2 flex-wrap mb-4">
                            {selected.tags.map((tag, i) => (
                            <span key={i} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <h4 className="font-semibold mb-1">About</h4>
                        <p className="text-sm mb-4">{selected.description}</p>
                        <h4 className="font-semibold mb-1">Dónde encontrarlo</h4>
                        <div className="flex gap-4 mt-2">
                            <a href={selected.links.ios} target="_blank" rel="noopener noreferrer" className="bg-purple-800 p-2 rounded-full">
                            
                            </a>
                            <a href={selected.links.android} target="_blank" rel="noopener noreferrer" className="bg-purple-800 p-2 rounded-full">
                            ▶️
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </section>
    )
}