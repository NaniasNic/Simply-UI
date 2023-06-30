export function Header() {
    return (
        <header className="w-full h-20 flex items-center justify-around">
            <div>
                <h1 className="text-5xl">
                    Simply
                    <span className="text-gray-400">.</span>
                </h1>
            </div>
            
            <nav>
                <ul className="flex gap-6">
                    <li className="uppercase font-semibold">Home</li>
                    <li className="uppercase font-semibold">Portfolio</li>
                    <li className="uppercase font-semibold">contact</li>
                    <li className="uppercase font-semibold">Blog</li>
                </ul>
            </nav>
        </header>
    )
}