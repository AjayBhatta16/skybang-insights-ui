
// TODO: use brand logo here
export function AppHeader() {
    return (
        <header className="bg-black">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="/skybang-icon.svg" className="mr-3 header-logo" alt="Skybang Insights Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Skybang Insights</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}