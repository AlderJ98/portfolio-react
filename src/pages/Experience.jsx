export const Experience = () => (
    <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">PROFESSIONAL <span className="text-black dark:text-white">EXPERIENCE</span></h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Una mirada a mi experiencia laboral y trayectoria profesional.</p>

        <ol className="relative border-l border-gray-300 dark:border-gray-600">
            <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-black rounded-full ring-8 ring-white dark:ring-gray-950">
                    🖥️
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Desarrollador Full Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disfarma · Bucaramanga, Colombia</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Ene 2022 → Actualidad</time>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">Diseño e implementación de soluciones web internas para gestión de convenios, ventas y reportes usando Laravel, Vue.js y Node.js. Integración de pasarelas de pago, autenticación de usuarios y despliegue en servidores propios.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["vue", "laravel", "node", "api rest", "sql", "php", "gestion proyectos"].map((tech, i) => (
                    <span key={i} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-white dark:ring-gray-950">
                    🧪
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Desarrollador Freelance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Remoto · Clientes diversos</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Ago 2020 → Dic 2021</time>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">Desarrollo de sitios web empresariales, sistemas de reservas, blogs y dashboards para clientes usando tecnologías modernas como React, Firebase y Node.js. Trabajo colaborativo, testing y mantenimiento post-producción.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["react", "firebase", "css", "javascript", "typescript", "tailwind", "pwa"].map((tech, i) => (
                    <span key={i} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </li>
        </ol>
    </section>
)