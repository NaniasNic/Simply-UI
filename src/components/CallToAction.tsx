export function CallToAction() {
    return (
        <main className="flex flex-col py-[60px] px-0 gap-5 justify-center items-center">
            <h1 className="text-5xl font-semibold uppercase">Heard Engoungh?</h1>

            <hr className="w-[400px] border border-[#02b8dd]" />

            <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo a nibh dignissim tincidunt. Nam ultricies odio ac neque <br />
                suscipit volutpat. Ut dictum adipiscing felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet.
            </p>

            <a href="#" className="w-[180px] h-[50px] flex justify-center items-center text-xl border-2 border-[#02b8dd] text-[#02b8dd] bg-transparent rounded-sm hover:text-white hover:bg-[#02b8dd]">
                Get Started
            </a>
        </main>
    )
}