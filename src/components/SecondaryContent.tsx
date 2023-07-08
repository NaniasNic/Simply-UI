export function SecondaryContent() {
    return (
        <main className="flex py-[60px] px-0 gap-10 justify-center items-center max-[1080px]:flex-col">
            <div className="flex bg-[url('/article-image-1.jpg')] bg-cover items-center border w-[500px] h-[300px] gap-5 max-[540px]:w-[400px] max-[430px]:w-[300px] max-[430px]:h-[250px]">
                <div className="flex w-[230px] h-full bg-white/95 gap-4 flex-col justify-center items-center p-5 max-[540px]:w-[200px]">
                    <h1 className="text-4xl text-center font-bold max-[540px]:text-2xl max-[430px]:text-xl">Secondary Content</h1>
                    
                    <hr className="w-36 border border-[#02b8dd]" />
                    
                    <p className="text-center text-[#02b8dd] max-[430px]:text-sm">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec euismod leo a nibh dignissim tincidunt nam.
                        </small> 
                    </p>
                    
                    <a href="#" className="border border-[#02b8dd] text-[#02b8dd] rounded-sm px-5 py-[6px] max-[430px]:px-3 max-[430px]:py-2">
                        View More
                    </a>
                </div>
            </div>
            
            <div className="flex bg-[url('/article-image-2.jpg')] bg-cover items-center border w-[500px] h-[300px] gap-5 max-[540px]:w-[400px] max-[430px]:w-[300px] max-[430px]:h-[250px]">
                <div className="flex w-[230px] h-full bg-white/95 gap-4 flex-col justify-center items-center p-5 max-[540px]:w-[200px]">
                    <h1 className="text-4xl text-center font-bold max-[540px]:text-2xl max-[430px]:text-xl">Secondary Content</h1>
                    
                    <hr className="w-36 border border-[#02b8dd]" />
                    
                    <p className="text-center text-[#02b8dd] max-[430px]:text-sm">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec euismod leo a nibh dignissim tincidunt nam.
                        </small> 
                    </p>
                    
                    <a href="#" className="border border-[#02b8dd] text-[#02b8dd] rounded-sm px-5 py-[6px] max-[430px]:px-3 max-[430px]:py-2">
                        View More
                    </a>
                </div>
            </div>
        </main>
    )
}