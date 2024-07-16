
import events from "./events"

import Image from "next/image"
import Link from "next/link"

export default async function Page(){
  
  return(
    <div>
      <div className="text-6xl text-orange-500 tracking-tighter font-bold max-w-[1100px] mx-auto p-6">Events</div>
      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {events.map((item: any, key: number) => (
          <div
            key={key}
            className="flex flex-col justify-evenly z-10 m-2 flex-none bg-white min-h-[350px] min-w-[350px] max-h-[350px] max-w-[350px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
          >
            <Image
              src={item.cover}
              width={1000}
              height={1000}
              className="w-full h-[200px] object-cover rounded-xl"
              alt="events"
            ></Image>
            <div className="flex flex-col justify-center items-start p-6 gap-2">
              <div className="text-2xl font-bold text-orange-500">
                {item.title}
              </div>
              <Link className="bg-orange-500 p-2 text-white rounded-lg" href={'/events/' + item.slug}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )


}
