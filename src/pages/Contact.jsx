export const Contact = () => (
    <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">CONTACT <span className="text-black dark:text-white">ME</span></h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">No dudes en ponerte en contacto conmigo cuando lo necesites.</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <input type="text" placeholder="Nombre *" className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800" />
            <input type="email" placeholder="Correo *" className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800" />
            <input type="text" placeholder="Asunto *" className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 md:col-span-2" />
            <textarea placeholder="Mensaje *" rows="6" className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 md:col-span-2"></textarea>
            <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
                Enviar Mensaje
                </button>
            </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white p-3 rounded-full">
                📍
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Bucaramanga, Colombia</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white p-3 rounded-full">
                🔗
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:underline">@yourgithub</a>
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-purple-600 text-white p-3 rounded-full">
                💼
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">@yourlinkedin</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
)