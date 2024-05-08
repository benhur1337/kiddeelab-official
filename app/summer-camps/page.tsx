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

    const request = await fetch("https://kiddeelab-backend.vercel.app/api/courses").then(res => res.json())

    const courses = request.items

    const kids = courses.filter((item: any) => item.age < 7 && (item.slug != 'mbot' && item.slug != 'codey-rocky'))


    const child = courses.filter((item:any) => item.age < 12 && item.age > 7 || item.slug == 'mbot')


    const teens = courses.filter((item:any) => item.age < 18 && item.age > 12)



    return (
        <div className="flex flex-col gap-6">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-4 p-6">
                <div className="text-6xl font-bold text-orange-500">Summer Camps</div>

                <Image
                    src="https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/Summer%20camp-kmNaThHie46zWvWzq0KxVpSYSwmeZS.png"
                    height={2000}
                    width={2000}
                    alt="kiddeelab stem camp"
                    className="rounded-lg"
                />
            </div>

            <Scroll>
                {
                    camps.map((item: gallery, key: number) => (
                        <Image
                            className="max-h-[250px] rounded-lg"
                            key={key}
                            src={item.src}
                            height={500}
                            width={500}
                            alt="kiddeelab stem camp 2024"
                        />
                    ))
                }
            </Scroll>

            <div className="p-6 text-3xl md:text-5xl font-bold text-sky-500 max-w-[900px] mx-auto my-[40px] flex flex-col gap-6 items-center justify-start">
                <div className="text-center">Sign up for our upcoming camp throughout June till August!</div>
                <Link className="font-semibold border border-orange-500 bg-orange-500 text-white p-2 text-lg md:text-2xl rounded hover:bg-white hover:text-orange-500 duration-500" href="https://page.line.me/kiddeelab">Register now!</Link>
            </div>

            <div>

                <div className="max-w-[1100px] mx-auto text-6xl font-bold tracking-tight text-orange-500 p-6">We have courses for all ages!</div>
           
                <div className="max-w-[1100px] mx-auto text-5xl font-extrabold tracking-tighter text-sky-500 p-6">5-7 years old</div>
         
                <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
                    {kids.map((item: any, key: number) => (
                        <div
                            key={item._id}
                            className="z-10 m-2 flex-none bg-white min-h-[300px] min-w-[300px] max-h-[300px] max-w-[300px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
                        >
                            <Image
                                src={item.cover}
                                width={1000}
                                height={1000}
                                className="w-full h-[200px] object-cover rounded-xl"
                                alt="courses"
                            ></Image>
                            <div className="flex flex-col justify-center items-start p-2 gap-2">
                                <div className="text-3xl font-bold text-orange-500">
                                    {item.title}
                                </div>
                                <Link
                                    className="rounded border px-[0.5rem] py-[0.25rem] text-white bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500"
                                    href={"/courses/" + item.slug}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
    
                <div className="max-w-[1100px] mx-auto text-5xl font-extrabold tracking-tighter text-sky-500 p-6">7-12 years old</div>
          
                <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
                    {child.map((item: any, key: number) => (
                        <div
                            key={item._id}
                            className="z-10 m-2 flex-none bg-white min-h-[300px] min-w-[300px] max-h-[300px] max-w-[300px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
                        >
                            <Image
                                src={item.cover}
                                width={1000}
                                height={1000}
                                className="w-full h-[200px] object-cover rounded-xl"
                                alt="courses"
                            ></Image>
                            <div className="flex flex-col justify-center items-start p-2 gap-2">
                                <div className="text-3xl font-bold text-orange-500">
                                    {item.title}
                                </div>
                                <Link
                                    className="rounded border px-[0.5rem] py-[0.25rem] text-white bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500"
                                    href={"/courses/" + item.slug}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
  
                <div className="max-w-[1100px] mx-auto text-5xl font-extrabold tracking-tighter text-sky-500 p-6">12-18 years old</div>
  
                <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
                    {teens.map((item: any, key: number) => (
                        <div
                            key={item._id}
                            className="z-10 m-2 flex-none bg-white min-h-[300px] min-w-[300px] max-h-[300px] max-w-[300px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
                        >
                            <Image
                                src={item.cover}
                                width={1000}
                                height={1000}
                                className="w-full h-[200px] object-cover rounded-xl"
                                alt="courses"
                            ></Image>
                            <div className="flex flex-col justify-center items-start p-2 gap-2">
                                <div className="text-3xl font-bold text-orange-500">
                                    {item.title}
                                </div>
                                <Link
                                    className="rounded border px-[0.5rem] py-[0.25rem] text-white bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500"
                                    href={"/courses/" + item.slug}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>         
  
            </div>


        </div>
    )
}