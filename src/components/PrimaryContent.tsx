import { PlayCircle } from "lucide-react";

export function PrimaryContent() {
    return (
        <main className="flex flex-col gap-8 justify-center items-center px-48">
            <h1 className="text-5xl font-bold uppercase">Featured Content</h1>
            
            <hr className="w-80 border-b-2 border-black" />
            
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dolore quis. 
                Adipisci vero odio molestias deleniti ipsa corrupti non porro nisi quod unde ullam perferendis, 
                totam doloribus accusantium similique magnam totam doloribus accusantium similique magnam.
            </p>

            <div className="flex justify-center items-center">
                <PlayCircle className="absolute text-gray-400 w-40 h-40 cursor-pointer hover:text-gray-50" />
                
                <img src="/lake.jpg" alt="lake" className="w-full" />
            </div>
        </main>
    )
}