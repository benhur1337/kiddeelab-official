export default async function Page({ params }: { params: { slug: string } }) {
  const courses = await fetch(
    "https://kiddeelab-backend.vercel.app/api/courses",
    {
      method: "GET",
      cache: "no-cache",
    }
  ).then((response) => response.json());

  const data = courses.items.find((item: any) => item.slug == params.slug);

  return (
    <div>
      <div className="p-6 opacity-50 text-orange-500 max-w-[1100px] mx-auto">
        /courses/<span className="underline font-bold">{data.slug}</span>
      </div>

      <div className="flex flex-col gap-4 p-6 max-w-[1100px] mx-auto">
        <div className="text-6xl font-bold tracking-tighter text-orange-500">
          {data.title}
        </div>

        {data.content.map((item: any, n: number) => (
          <div
            className={
              item.type == "heading"
                ? "text-3xl text-sky-500 font-bold tracking-tighter"
                : item.type == "paragraph"
                ? "text-sky-500"
                : "text-sky-500"
            }
            key={n}
          >
            {item.type != 'list' ? item.text
              : <ul className="list-disc">
                {item.list.map((li:any, k:number) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            }
          </div>
        ))}
      </div>
    </div>
  );
}
