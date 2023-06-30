export function HeroImage() {
    return (
        <main className="flex flex-col h-[673px] gap-10 bg-[url('/montain.jpg')] bg-center bg-cover justify-center items-center">
            <h1 className="text-6xl text-center font-thin uppercase">
                <span className="font-bold">A minimal, Clean</span> <br />
                Layout for web Design
            </h1>

            <button className="bg-black text-white px-8 py-2 rounded">
                Get Started
            </button>
        </main>
    )
}