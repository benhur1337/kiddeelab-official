import Image from "next/image";
import Link from "next/link"

export default async function Page() {
  const courses = await fetch(
    "https://kiddeelab-backend.vercel.app/api/courses",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  const kids = courses.items.filter((items:any) => items.age < 8)

  const child = courses.items.filter((items:any) => (items.age < 12 && items.age > 8))

  const teen = courses.items.filter((items:any) => (items.age > 13))

  console.log(child)

  return (
    <div>
      <div className="flex flex-col items-start pt-6 px-6 gap-6 md:max-w-[1100px] md:mx-auto mb-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500 flex flex-col gap-0">
          {"For Kids"} <br/> <span className="text-2xl opacity-50">{"(5-8 years old)"}</span>
        </div>
      </div>

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

      <div className="flex flex-col items-start p-6 gap-6 md:max-w-[1100px] md:mx-auto my-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500 flex flex-col gap-0">
          {"For Children"} <br/> <span className="text-2xl opacity-50">{"(9-12 years old)"}</span>
        </div>
      </div>

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

      <div className="flex flex-col items-start p-6 gap-6 md:max-w-[1100px] md:mx-auto my-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500 flex flex-col gap-0">
          {"For Teens"} <br/> <span className="text-2xl opacity-50">{"(13+ years old)"}</span>
        </div>
      </div>

      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {teen.map((item: any, key: number) => (
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
  );
}
