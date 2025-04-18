export const Skills = () => (
    <div>
        <section className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">SKILL <span className="text-black dark:text-white">SET</span></h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10">Explorando el conjunto diverso de habilidades que he adquirido y desarrollado:</p>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        💻
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Desarrollo Frontend</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Experiencia sólida en construcción de interfaces interactivas con Vue.js y React, aplicando buenas prácticas de diseño responsivo y accesibilidad.</p>
                    </div>
                </div>
        
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        🛠️
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Desarrollo Backend</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Desarrollo de APIs robustas y escalables utilizando Laravel y Node.js, integrando autenticación, seguridad y servicios externos.</p>
                    </div>
                </div>
        
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        🧠
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Bases de Datos</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Diseño y administración de bases de datos relacionales y no relacionales como MySQL y MongoDB, garantizando integridad y rendimiento.</p>
                    </div>
                </div>
        
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        🔧
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Metodologías y Herramientas</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Trabajo con metodologías ágiles, control de versiones con Git, integración de CI/CD y uso de herramientas como Postman, Docker y Figma.</p>
                    </div>
                </div>
        
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        🚀
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Despliegue y Producción</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Capacidad para desplegar proyectos web y móviles usando servicios como Vercel, Netlify y Firebase, con manejo de variables y versiones.</p>
                    </div>
                </div>
        
                <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white p-2 rounded-full">
                        🔍
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Documentación y Testing</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Documentación de código y APIs, pruebas funcionales y unitarias para asegurar calidad y mantenibilidad del software.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6">STACK <span className="text-black dark:text-white">TÉCNICO</span></h2>
            <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-white">Frontend Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'Vue', exp: '3+ años', level: '90%', desc: 'Experiencia en creación de SPA con Vue 3.', color: 'bg-purple-600' },
                    { name: 'React', exp: '1+ años', level: '75%', desc: 'UIs interactivas con hooks y componentes.', color: 'bg-purple-600' },
                    { name: 'Angular', exp: '1+ años', level: '60%', desc: 'Desarrollo de apps modulares y robustas.', color: 'bg-purple-600' },
                    { name: 'HTML/CSS', exp: '5+ años', level: '95%', desc: 'Maquetación, flexbox y animaciones.', color: 'bg-purple-600' },
                ].map((item, i) => (
                    <div key={i}>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mb-2">
                        <div className={`${item.color} h-2.5 rounded`} style={{ width: item.level }}></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.exp} de experiencia – {item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-12 text-gray-900 dark:text-white">Backend Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'Laravel', exp: '3+ años', level: '85%', desc: 'Desarrollo de APIs RESTful y paneles.', color: 'bg-purple-600' },
                    { name: 'Node.js', exp: '2+ años', level: '70%', desc: 'Creación de servicios backend con Express.', color: 'bg-purple-600' },
                    { name: 'Flask', exp: '1 año', level: '50%', desc: 'Microservicios simples y API rápidas.', color: 'bg-purple-600' },
                ].map((item, i) => (
                    <div key={i}>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mb-2">
                        <div className={`${item.color} h-2.5 rounded`} style={{ width: item.level }}></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.exp} de experiencia – {item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-12 text-gray-900 dark:text-white">Mobile Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'React Native', exp: '1+ año', level: '65%', desc: 'Aplicaciones móviles híbridas.', color: 'bg-purple-600' },
                    { name: 'Flutter', exp: '6 meses', level: '40%', desc: 'Prototipos móviles con widgets.', color: 'bg-purple-600' },
                ].map((item, i) => (
                    <div key={i}>
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mb-2">
                        <div className={`${item.color} h-2.5 rounded`} style={{ width: item.level }}></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.exp} de experiencia – {item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-12 text-gray-900 dark:text-white">Lenguajes de Programación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'PHP', exp: '4+ años', level: '85%', desc: 'Backend con Laravel y proyectos web.', color: 'bg-purple-600' },
                    { name: 'JavaScript', exp: '5+ años', level: '90%', desc: 'Frontend y lógica dinámica.', color: 'bg-purple-600' },
                    { name: 'TypeScript', exp: '1 año', level: '65%', desc: 'Tipado estático sobre JS.', color: 'bg-purple-600' },
                    { name: 'Python', exp: '2+ años', level: '70%', desc: 'Automatización, backend y scripts.', color: 'bg-purple-600' },
                ].map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between mb-1">
                            <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mb-2">
                            <div className={`${item.color} h-2.5 rounded`} style={{ width: item.level }}></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.exp} de experiencia – {item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
)