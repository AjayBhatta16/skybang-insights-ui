
// TODO: use brand logo here
export function AppHeader() {
    return (
        <header className="bg-dark">
            <nav className="bg-dark border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="/vercel.svg" className="mr-3 h-3 sm:h-4" alt="Skybang Insights Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Skybang Insights</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}