import Image from "next/image"
import Link from "next/link"

import Gallery from "./gallery.jsx";

import { unstable_noStore } from "next/cache";



export default async function Page(){
  unstable_noStore()

  const courses = await fetch(
    "https://kiddeelab-backend.vercel.app/api/workshops",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  

  const gallery = [1,2,3,4,5,6,7,8,9]
  
  return(
    /*
    <div>
      <div className="text-6xl font-bold tracking-tighter text-orange-500 max-w-[1100px] mx-auto p-6">Workshops</div>
      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {courses.items.map((item: any, key: number) => (
          <div
            key={item._id}
            className="z-10 m-2 flex-none bg-white min-h-[300px] min-w-[300px] max-h-[300px] max-w-[300px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
          >
            <Image
              src={item.cover}
              width={1000}
              height={1000}
              className="w-full h-[200px] object-cover rounded-xl"
              alt="workshops"
            ></Image>
            <div className="flex flex-col justify-center items-start p-2 gap-2">
              <div className="text-3xl font-bold text-orange-500">
                {item.title}
              </div>
              <Link
                className="rounded border px-[0.5rem] py-[0.25rem] text-white bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500"
                href={"/workshops/" + item.slug}
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    */

    <div>

      <Gallery/>
      
    </div>
  )
}