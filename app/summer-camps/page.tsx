import Image from "next/image";
import Link from "next/link";

import { Scroll } from "@/components/client";

interface gallery {
  src: string;
}

const camps = [
  {
    src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/5-7%20yrs%20camp-B9ZIChU4v2WZmzpRN1o7iRZS7fHJuV.png",
  },
  {
    src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/8-9%20yrs-iL7SVBJcStLIccsR390PCoQ5at6ATM.png",
  },
  {
    src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/10-12yrs-i2IM0KmAR5LBYyXWRGve8cbSj78HL0.png",
  },
  {
    src: "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/13+%20yrs-sqNg4vXJtXwZ2RsmegcpWb73c7cc5j.png",
  },
];

const imageGallery = [
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/1-pe1t5RrUbtk5wSKwY13hZSnBJk7L3s.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/2%20(3)-XBGKMZW1YV1jwy7exq09pxANzr82ya.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/2-yo0qMGnDuBVFt7M6s9WoQcIQ45Tn7x.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/3-MFMMvdZMF5gIOtBu56OSy2KTuGvhrk.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/4-gfqmAhhNoId9h3sXyLo930oyuw4hJL.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/5-J1RPKZn0rvMgsTWZFYJkYdMJn5NTdV.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/6-XK1ZnPQLC509jJZk647wW8aloISEeH.jpg'
    },
    {
        src:'https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/summer-camps/camp-pics/7-0jadKSN91VWopulcnyFgPTsu5tsjT8.jpg'
    }
]


export default async function Page() {

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
        {camps.map((item: gallery, key: number) => (
          <Image
            className="max-h-[250px] rounded-lg"
            key={key}
            src={item.src}
            height={500}
            width={500}
            alt="kiddeelab stem camp 2024"
          />
        ))}
      </Scroll>

      <div className="p-6 text-3xl md:text-5xl font-bold text-sky-500 max-w-[900px] mx-auto my-[40px] flex flex-col gap-6 items-center justify-start">
        <div className="text-center">
          Sign up for our upcoming camp throughout June till August!
        </div>
        <Link
          className="font-semibold border border-orange-500 bg-orange-500 text-white p-2 text-lg md:text-2xl rounded hover:bg-white hover:text-orange-500 duration-500"
          href="https://page.line.me/kiddeelab"
        >
          Register now!
        </Link>
      </div>
      <div className="max-w-[1100px] mx-auto w-full p-6 text-6xl font-bold text-orange-500">Our Past Camps</div>
      <div className="flex flex-row no-wrap overflow-x-scroll px-6 max-w-[1100px] mx-auto">
        
        {imageGallery.map((item: gallery, key: number) => (
          <div
            key={key}
            className="m-2 flex-none bg-white rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
          >
            <Image
              src={item.src}
              width={1000}
              height={1000}
              className="h-[325px] w-auto object-contain rounded-xl drop-shadow"
              alt="announcements"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
