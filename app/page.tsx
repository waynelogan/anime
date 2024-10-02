import Image from "next/image"

export default function Home() {
    return (
        <main className="
            w-screen
            h-screen
            bg-[url('/infinity-castle.jpg')]
            overflow-hidden
            bg-cover
        ">
            <div className="h-full w-full">
                <Image
                    src={`/tanjiro.png`}
                    width={300}
                    height={250}
                    alt="tanjiro"
                    className="
                    w-[300px]
                    h-auto
                    "
                />
            </div>
            <div
                style={{ ['--quantity' as string]: 13 }}
                className="slider"
            >
                {
                    Array(13).fill(0).map((index, key) => (
                        <div
                            key={index + key}
                            style={{ ['--position' as string]: key + 1 }}
                            className="
                            absolute
                            inset-0
                            item
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
            <div className="
                absolute
                bottom-10
                right-10
                text-white
                font-bold
                text-right
            ">
                <h1>鬼滅の刃</h1>
                <h2>DEMON SLAYER</h2>
            </div>
        </main>
    )
}
