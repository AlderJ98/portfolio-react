export const Education = () => (
    <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">EDUCATIONAL <span className="text-black dark:text-white">BACKGROUND</span></h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Un vistazo a mi trayectoria académica y logros.</p>

        <ol className="relative border-l border-gray-300 dark:border-gray-600">
            <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-white dark:ring-gray-950">
                    🎓
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Ingeniería de Sistemas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Universidad Cooperativa de Colombia – Bucaramanga</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Ene 2020 → Dic 2023</time>
                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">Formación profesional enfocada en el análisis, diseño y desarrollo de soluciones informáticas escalables, con enfoque en la seguridad y gestión de datos.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-white dark:ring-gray-950">
                    🎓
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">SENA – Colombia</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Ene 2017 → Dic 2019</time>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">Orientado a la creación de software de calidad, con competencias en desarrollo backend, frontend, bases de datos y metodologías ágiles.</p>
            </li>
        </ol>
    </section>
)