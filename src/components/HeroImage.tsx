export function HeroImage() {
    return (
        <main className="flex flex-col h-[634px] gap-10 bg-[url('/hero.jpg')] bg-center bg-cover justify-center items-center">
            <h1 className="text-6xl text-center font-thin uppercase select-none">
                <span className="font-bold">A minimal, Clean</span> <br />
                Layout for web Design
            </h1>

            <button className="bg-[#444] text-white px-8 py-2 rounded hover:bg-[#02b8dd]">
                Get Started
            </button>
        </main>
    )
}