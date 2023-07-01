export function SecondaryContent() {
    return (
        <main className="flex h-[673px] gap-10 justify-center items-center">
            <div className="flex bg-[url('/article-image-1.jpg')] bg-cover items-center border w-[500px] h-[300px] gap-5">
                <div className="flex w-[230px] h-full bg-white/95 gap-4 flex-col justify-center items-center p-5">
                    <h1 className="text-4xl text-center font-bold">Secondary Content</h1>
                    
                    <hr className="w-36 border border-[#02b8dd]" />
                    
                    <p className="text-center text-[#02b8dd]">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec euismod leo a nibh dignissim tincidunt nam.
                        </small> 
                    </p>
                    
                    <a href="#" className="border border-[#02b8dd] text-[#02b8dd] rounded-sm px-5 py-[6px]">
                        View More
                    </a>
                </div>
            </div>
            
            <div className="flex bg-[url('/article-image-2.jpg')] bg-cover items-center border w-[500px] h-[300px] gap-5">
                <div className="flex w-[230px] h-full bg-white/95 gap-4 flex-col justify-center items-center p-5">
                    <h1 className="text-4xl text-center font-bold">Secondary Content</h1>
                    
                    <hr className="w-36 border border-[#02b8dd]" />
                    
                    <p className="text-center text-[#02b8dd]">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec euismod leo a nibh dignissim tincidunt nam.
                        </small> 
                    </p>
                    
                    <a href="#" className="border border-[#02b8dd] text-[#02b8dd] rounded-sm px-5 py-[6px]">
                        View More
                    </a>
                </div>
            </div>
        </main>
    )
}