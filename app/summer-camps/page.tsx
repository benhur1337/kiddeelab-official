import Image from "next/image"
import Link from "next/link"

import { Scroll } from "@/components/client"

interface gallery {
    src: string
}

const camps = [
    {
        src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/5-7%20yrs%20camp-B9ZIChU4v2WZmzpRN1o7iRZS7fHJuV.png"
    },
    {
        src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/8-9%20yrs-iL7SVBJcStLIccsR390PCoQ5at6ATM.png"
    },
    {
        src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/10-12yrs-i2IM0KmAR5LBYyXWRGve8cbSj78HL0.png"
    },
    {
        src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/13+%20yrs-sqNg4vXJtXwZ2RsmegcpWb73c7cc5j.png"
    }
]

export default async function Page() {
    return (
        <div className="flex flex-col gap-4">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-4">
                <div className="text-6xl font-bold text-orange-500 p-6">Summer Camps</div>

                <Image
                    src="https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/Summer%20camp-kmNaThHie46zWvWzq0KxVpSYSwmeZS.png"
                    height={2000}
                    width={2000}
                    alt="kiddeelab stem camp"
                    className="rounded-lg"
                />

                <div className="p-6 text-3xl md:text-5xl font-bold text-sky-500 max-w-[900px] mx-auto my-[3rem] flex flex-col gap-6 items-center justify-start">
                    <div className="text-center">Sign up for our upcoming camp throughout June till August!</div>
                    <Link className="font-semibold border border-orange-500 bg-orange-500 text-white p-2 text-lg md:text-2xl rounded hover:bg-white hover:text-orange-500 duration-500" href="/">Register now!</Link>
                </div>
            </div>

            <Scroll>
                {
                    camps.map((item: gallery, key: number) => (
                        <Image
                            className="max-h-[500px] rounded-lg"
                            key={key}
                            src={item.src}
                            height={500}
                            width={500}
                            alt="kiddeelab stem camp 2024"
                        />
                    ))
                }
            </Scroll>
        </div>
    )
}