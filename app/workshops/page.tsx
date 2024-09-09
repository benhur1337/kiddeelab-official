import Image from "next/image";
import Link from "next/link";


interface Workshop{
  heading:string,
  link:string,
  image:string
}

const workshops = [
  {
    heading:"AITIS",
    link:"/workshops/aitis",
    image:"https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/aitis/LINE_ALBUM_Codey%20Rocky%20Workshop%20@AITIS%207Nov23_240304_13-min-pbVo68qmOJ7eKPniImOvVXaWegtNr9.jpg"
  },
  {
    heading:"Ying Yod",
    link:"/workshops/ying-yod",
    image:"https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/events/ying-yod/IMG_2007-min-GoooMScBdybT0BTa1mNaNzq2vhNabl.JPG"
  }
]

export default async function Page() {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-col gap-4 p-6">
      <div className="text-6xl text-orange-500 tracking-tighter font-bold">
        Workshops
      </div>

<<<<<<< HEAD
  
=======
      {
        workshops.map((item:Workshop, key:number) => (
          <Banner image={item.image} heading={item.heading} link={item.link} key={key} /> 
        ))
      }
>>>>>>> 655b592bac63b3a5d23c3cce99d3d2172300aeb8

    </div>
  );
}

function Banner(props:{heading:string, link:string, image:string}) {
  return (
    <div className="h-[350px] w-full rounded-lg"
      style={{
        backgroundImage:`url(${props.image})`,
        backgroundRepeat:`no-repeat`,
        backgroundPosition:`center`,
        backgroundSize:`cover`
      }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] flex flex-col gap-4 justify-center items-center text-white h-full w-full rounded-lg">
        <div className="text-5xl font-bold tracking-tighter">{props.heading}</div>
        <Link
          href={props.link}
          className="bg-orange-500 rounded p-2 border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
