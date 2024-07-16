import { Scroll } from "@/components/client"
import { unstable_noStore } from "next/cache"

import Image from "next/image"


export default async function Page({params}:{params:{slug:string}}){

    unstable_noStore()

    const events = await fetch("https://kiddeelab-backend.vercel.app/api/events").then( res => res.json())
    const event = events.items.find((item:any) => item.slug == params.slug)

    console.log(event)

    return(
  
        <div className="flex flex-col gap-4 max-w-[1100px] mx-auto p-6"> 
            <div className="text-5xl font-bold tracking-tighter text-orange-500">{event.title}</div>
            <div className="text-2xl font-bold tracking-tighter text-orange-300">{event.event}</div>
            <div className="text-xl font-bold tracking-tighter text-sky-500">{event.authors.map((item:any) => (item + ", "))}</div>
            <Scroll>
                {
                    event.gallery.map((item:any, key:number) => <Image className="rounded-lg" key={key} src={item} height={300} width={300} alt={item} />)
                }
            </Scroll>
        </div>

    )
}