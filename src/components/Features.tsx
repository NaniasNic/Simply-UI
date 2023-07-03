import Image from "next/image";

export function Features() {
    return (
        <main className="flex justify-center items-center gap-10">
            <div className="flex flex-col my-[80px] justify-center items-center gap-5">
                <Image src='/features-icon-1.png' alt="" width={100} height={100} />

                <h1 className="uppercase font-bold">Easy to edit</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>

            <div className="flex flex-col my-[80px] justify-center items-center gap-5">
                <Image src='/features-icon-2.png' alt="" width={100} height={100} />

                <h1 className="uppercase font-bold">Layered psd</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>
            
            <div className="flex flex-col my-[80px] justify-center items-center gap-5">
                <Image src='/features-icon-3.png' alt="" width={100} height={100} />

                <h1 className="uppercase font-bold">Ready to go</h1>

                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing. <br />
                    Dolorum cumque voluptatibus magni rem exercitationem <br />
                    fugiat natus nesciunt eos dicta debitis temporibus, <br />
                    id delectus sequi aut, nemo culpa corporis!
                </p>
            </div>
        </main>
    )
}