import { Scroll } from "@/components/client"

import events from "../events"

export default async function Page({params}:{params:{slug:string}}){

    const slug = params.slug.toString()
    console.log(slug)

    const event = events.filter(item => item.slug == slug)
    console.log(event)

    return(
        <div className="flex flex-col gap-4 max-w-[1100px] mx-auto p-6"> 
            <div className="text-5xl font-bold tracking-tighter text-orange-500">{event[0].title}</div>
            <div className="text-2xl font-bold tracking-tighter text-orange-300">{event[0].event}</div>
            <div className="text-xl font-bold tracking-tighter text-sky-500">{event[0].authors.map(item => item + " ")}</div>
            <Scroll>
                {
                    [1,2,3,4,5].map((item:any, key:number) => <div key={key} className="h-[250px] w-[400px] bg-black rounded"></div>)
                }
            </Scroll>
            <div className="text-sky-500 flex flex-col gap-4">
                {
                    [1,2,3,4,5].map((item:any, key:number) => <div key={key}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perferendis, praesentium quas dolore illo ad amet veniam magni accusantium alias, soluta deserunt esse iusto mollitia maxime modi animi numquam unde nobis! Fugiat ea voluptatibus labore quis blanditiis nostrum vitae sunt eius eum ratione tenetur quo soluta, dolore nisi, ab suscipit non consequuntur rem minus magni! Quo quibusdam at aut facere eaque corrupti similique reprehenderit accusantium aliquam officia impedit in veniam reiciendis, blanditiis culpa quia rerum magni? Facilis, aliquam? Maxime aliquam reprehenderit ullam, officia similique maiores enim neque iure corporis consequatur inventore omnis, ad nobis beatae alias totam. Perspiciatis, dicta possimus.
                    </div>)
                }
            </div>
        </div>
    )
}