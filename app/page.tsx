import { Scroll } from "@/components/client";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const certified = await fetch(
    "https://kiddeelab-backend.vercel.app/api/certified",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  const announcements = await fetch(
    "https://kiddeelab-backend.vercel.app/api/announcements",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  const courses = await fetch(
    "https://kiddeelab-backend.vercel.app/api/courses",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  return (
    <div className="text-sky-500">
      <div className="flex flex-col items-start p-6 gap-4 md:flex-row md:max-w-[1100px] md:mx-auto md:justify-between md:items-center">
        <div className="flex flex-col gap-4 items-start">
          <div className="text-6xl font-bold tracking-tighter text-orange-500">
            Kiddee Lab
          </div>
          <div className="text-xl flex flex-col">
            <div><span className="font-extrabold text-4xl">S</span>cience</div>
            <div><span className="font-extrabold text-4xl">T</span>echnology</div>
            <div><span className="font-extrabold text-4xl">E</span>ngineering</div>
            <div><span className="font-extrabold text-4xl">A</span>rt</div>
            <div><span className="font-extrabold text-4xl">M</span>ath</div>
          </div>
          <Link href="#about">
            <button className="text-xl border rounded bg-white-500 border-orange-500 hover:bg-orange-500 hover:text-white duration-500 text-orange-500 p-2">
              Read more
            </button>
            
          </Link>
          <Link href="https://page.line.me/kiddeelab">
            <button className="text-xl border rounded bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500 text-white p-2">
              Private Free Trial
            </button>
            
          </Link>
        
        </div>
        <br />
        <iframe
          className="h-[250px] w-full rounded-xl md:h-[500px] md:w-[600px]"
          src="https://www.youtube.com/embed/XnNrD-B9rFM"
          title="Welcome to Kiddee Lab"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>

      <div>
        <div className="text-5xl text-orange-500 font-bold tracking-tighter p-6 md:max-w-[1100px] md:mx-auto">
          {"What's new 🎉"}
        </div>

        <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
          {announcements.items.map((item: any, key: number) => (
            <div
              key={item._id}
              className="m-2 flex-none bg-white rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
            >
              <Image
                src={item.src}
                width={1000}
                height={1000}
                className="h-[250px] w-auto object-contain rounded-xl drop-shadow"
                alt="announcements"
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <div id="about" className="flex flex-col items-start p-6 gap-4 md:max-w-[1100px] md:mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-sky-500">
          About Us
        </div>
        <div className="text-5xl font-bold tracking-tighter text-orange-500">
          More than coding.
        </div>
        <div className="flex flex-col md:flex-row gap-9 justify-between items-center">
          <div className="w-full md:w-1/2 p-6">
            {
              " Kiddee Lab is the only Robotics and Coding School in Thailand with a curriculum accredited by the Ministry of Education. We have up to 30 courses for kids and young adults (5-18 years old). Our students are currently learning: Line Coding, Scratch programming, 3D Modelling/Design, Minecraft Education, Python, Arduino, IoT, Robotics, Robot Arm, and etc. Each course is designed to be both challenging and fun!"
            }
          </div>
          <div className="my-4 w-full h-full md:w-1/2">
            <Image
              className="object-cover rounded-xl"
              src={
                "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/mbot2-QZfjduMh9ObliOZ2YBWQTlPZtG6Awd.jpg"
              }
              height={1000}
              width={1000}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-9 justify-between items-center">
          <div className="w-full md:w-1/2 p-6">
            {
              "Kiddee Lab’s curriculum revolves around STEAM (Science, Technology, Engineering, Arts and Mathematics) Education. Apart from technical knowledge, we also train our students to have practical skills like teamwork, creativity and critical thinking for tackling problems that they may face in everyday life."
            }
          </div>
          <div className="my-4 w-full h-full md:w-1/2">
            <Image
              className="object-cover rounded-xl"
              src={
                "https://hjjvqkkuostdemaf.public.blob.vercel-storage.com/courses/courses-landing/mbot-Mmw8zy3BWfLMDw4DzQQyEJWfMvYASM.jpg"
              }
              height={1000}
              width={1000}
              alt=""
            />
          </div>
        </div>
      </div>
      <iframe width='100%' height='480' src='https://my.matterport.com/show/?m=PfrsXBXommi' allow='xr-spatial-tracking'></iframe>
      <div>
        <div className="text-5xl text-orange-500 font-bold tracking-tighter p-6 md:max-w-[1100px] md:mx-auto">
          {"Our Courses"}
        </div>
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

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-center font-semibold gap-4 text-center md:w-full tracking-tighter p-6 my-[80px] md:max-w-[1100px] md:mx-auto">
          <div className="text-6xl text-orange-500">
            Our Students Are <span className="font-extrabold underline underline-offset-4">Certified</span> 
          </div>
          <div className="text-3xl font-normal tracking-tighter opacity-50 text-orange-500">
            Try out one of our courses!
          </div>
          <Link
            className="rounded border text-xl p-2 text-white bg-orange-500 border-orange-500 hover:bg-white hover:text-orange-500 duration-500"
            href='/courses'
          >
            Our Courses
          </Link>
        </div>

        <Scroll>
          {certified.items.map((student: any) => (
            <Image
              className="rounded-xl"
              key={student._id}
              src={student.src}
              height={250}
              width={250}
              alt="certified kiddeelab student"
            />
          ))}
        </Scroll>
      </div>
    </div>
  );
}
