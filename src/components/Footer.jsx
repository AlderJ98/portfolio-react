export default function Footer() {
    return (
        <footer className="hidden md:block bg-gray-200 dark:bg-gray-800 text-center p-4 text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Alder Figueroa — Todos los derechos reservados.</p>
        </footer>
    )
}
