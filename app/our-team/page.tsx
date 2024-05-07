import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const staff = await fetch("https://kiddeelab-backend.vercel.app/api/staff", {
    method: "GET",
    cache: "no-cache",
  }).then((response) => response.json());

  const management = staff.items.filter(
    (items: any) => items.category == "Management"
  );

  const support = staff.items.filter(
    (items: any) => items.category == "Support"
  );

  const stem = staff.items.filter(
    (items: any) => items.category == "STEM Teacher"
  );

  return (
    <div>
      <div className="flex flex-col items-start p-6 gap-6 md:max-w-[1100px] md:mx-auto mb-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500">
          {"Management"}
        </div>
      </div>

      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {management.map((item: any, key: number) => (
          <StaffCard
            _id={item._id}
            key={key}
            src={item.src}
            nickName={item.nickName}
            position={item.position}
          />
        ))}
      </div>

      <div className="flex flex-col items-start p-6 gap-6 md:max-w-[1100px] md:mx-auto my-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500">
          {"Support"}
        </div>
      </div>

      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {support.map((item: any, key: number) => (
          <StaffCard
            _id={item._id}
            key={key}
            src={item.src}
            nickName={item.nickName}
            position={item.position}
          />
        ))}
      </div>

      <div className="flex flex-col items-start p-6 gap-6 md:max-w-[1100px] md:mx-auto my-4">
        <div className="text-5xl font-bold tracking-tighter text-orange-500">
          {"STEM Teachers"}
        </div>
      </div>

      <div className="flex flex-row no-wrap overflow-x-scroll px-6 my-4 max-w-[1100px] mx-auto">
        {stem.map((item: any, key: number) => (
          <StaffCard
            _id={item._id}
            key={key}
            src={item.src}
            nickName={item.nickName}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
}

function StaffCard(item: { _id: any; src: any; nickName: any; position: any }) {
  return (
    <div
      key={item._id}
      className="z-10 m-2 flex-none bg-white min-h-[400px] min-w-[250px] max-h-[400px] max-w-[250px] rounded-xl duration-500 hover:scale-95 drop-shadow hover:drop-shadow-lg"
    >
      <Image
        src={item.src}
        width={250}
        height={400}
        className="w-full h-[300px] object-cover rounded-xl"
        alt="staff"
      ></Image>
      <div className="flex flex-col justify-center items-start p-4">
        <div className="text-3xl font-bold text-sky-500">{item.nickName}</div>
        <div className="text-md opacity-60 font-bold text-sky-500">
          {item.position}
        </div>
      </div>
    </div>
  );
}
