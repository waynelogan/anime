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
            <Image
                src={`/tanjiro.png`}
                width={300}
                height={250}
                alt="tanjiro"
                className="
                    w-[230px]
                    h-auto
                    absolute
                    bottom-0
                    left-1/2 -translate-x-1/2
                    tanjiro
                    "
            />
            <div className="slider-container">
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
            </div>

            <div className="
                absolute
                bottom-10
                right-32
                text-white
                font-extralight
                text-right
            ">
                <h1 className="text-7xl">鬼滅の刃</h1>
                <h2 className="text-3xl">DEMON SLAYER</h2>
            </div>
        </main>
    )
}
