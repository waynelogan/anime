import Image from "next/image"

export default function Home() {
    return (
        <main className="
            bg-[url('/bg.jpg')]
            w-screen
            h-screen
            bg-cover
            
        ">
            <div className="
                absolute
                w-[200px]
                h-[350px]
                top-[10%]
                mx-auto
                left-1/2 transform -translate-x-1/2
            ">
                {
                    Array(13).fill(0).map((index, key) => (
                        <div key={index + key} className="
                            absolute
                            inset-0
                        ">
                            <Image
                                src={`/img-${key + 1}.jpg`}
                                width={200}
                                height={250}
                                alt="hashira"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "/>
                        </div>
                    ))
                }
            </div>
            <div>
                <h1>鬼滅の刃</h1>
                <h2>DEMON SLAYER</h2>
            </div>
        </main>
    )
}
