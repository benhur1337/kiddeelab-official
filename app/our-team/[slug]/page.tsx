"use server"

import Image from "next/image"

export default async function Page({params}:{params:{slug:string}}){

    const staff = await fetch('https://kiddeelab-backend.vercel.app/api/staff', {cache:"no-cache"}).then(res => res.json())
    
    const member = staff.items.find((item:any) => item.slug == params.slug)

    return(
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-9 p-6 max-w-[900px] mx-auto">
            <Image
                src={member.src}
                height={500}
                width={500}
                alt={member.nickName}
                className="h-[500px] md:h-[500px] w-full md:w-[300px] rounded-lg object-cover"
            />
            <div className="flex flex-col gap-4">
                <div className="text-orange-500 text-3xl font-semibold">Hi my name is,</div>
                <div className="text-orange-500 text-5xl font-bold">{(member.firstName + " " + member.lastName)}</div>
                <div className="text-sky-500 text-2xl font-bold">At KiddeeLab I am a {member.position}.</div>

                <div className="text-sky-500 text-3xl font-bold">Background:</div>
                {
                    member.background.map((item:any, key:number) => (
                        <div key={key} className="text-sky-500 text-xl">{item.degree} <div className="font-semibold">{item.institute}</div></div>
                    ))
                }      
            </div>
        </div>
    )
}