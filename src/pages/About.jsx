export const About = () => (
    <section className="p-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Hola</h1>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Soy Alder Figueroa</h2>
            <p className="text-gray-600 dark:text-gray-300">Bucaramanga, CO - 
                <a href="https://github.com/yourgithub" target="_blank" className="text-blue-500 hover:underline">GitHub</a> | 
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
            </p>
        </div>

        <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-left">Un poco sobre mí:</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2721/2721293.png"
                    alt="Desarrollo Web"
                    className="w-48 h-48 object-contain"
                />
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                    Soy Ingeniero de Sistemas y Tecnólogo en Análisis y Desarrollo de Sistemas de Información. Me apasiona crear soluciones eficientes y funcionales que mejoren la experiencia de los usuarios. Cuento con experiencia práctica en el desarrollo de aplicaciones web utilizando tecnologías como Vue.js, Laravel, React y Node.js, así como un sólido manejo de bases de datos. Me especializo en construir interfaces dinámicas, APIs robustas y arquitecturas escalables, siempre con enfoque en calidad y rendimiento.
                </p>
            </div>
        </div>
    </section>
)