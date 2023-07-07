import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="w-full h-[120px] flex items-center justify-around">
            <div>
                <h1 className="text-5xl select-none">
                    Simply
                    <span className="text-gray-400">.</span>
                </h1>
            </div>
            
            <nav className="max-[550px]:hidden">
                <ul className="flex gap-6">
                    <li className="uppercase font-semibold cursor-pointer">Home</li>
                    <li className="uppercase font-semibold cursor-pointer">Portfolio</li>
                    <li className="uppercase font-semibold cursor-pointer">contact</li>
                    <li className="uppercase font-semibold cursor-pointer">Blog</li>
                </ul>
            </nav>

            <nav className="min-[550px]:hidden">
                <button className="">
                    <Menu />
                </button>
            </nav>
        </header>
    )
}