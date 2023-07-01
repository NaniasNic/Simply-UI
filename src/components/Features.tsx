import Image from "next/image";

export function Features() {
    return (
        <div className="h-[500px] flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="border-2 border-black flex w-24 h-24 rounded-full justify-center items-center">
                    <Image src='/pen.png' alt="" width={50} height={50} />
                </div>

                <h1 className="uppercase font-bold">Easy to edit</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
                <div className="border-2 border-black flex w-24 h-24 rounded-full justify-center items-center">
                    <Image src='/psd.png' alt="" width={50} height={50} />
                </div>

                <h1 className="uppercase font-bold">Layered psd</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="border-2 border-black flex w-24 h-24 rounded-full justify-center items-center">
                    <Image src='/rocket.png' alt="" width={50} height={50} />
                </div>

                <h1 className="uppercase font-bold">Ready to go</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>
        </div>
    )
}