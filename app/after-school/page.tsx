export default async function Page() {

  interface afterschool{
    slug:string,
    title:string,
    date:Date
  }

  const afterschools = await fetch('https://kiddeelab-backend.vercel.app/api/after-school').then(res => res.json())

  console.log(afterschools)

  return (
    <div className="max-w-[1100px] mx-auto p-6 flex flex-row gap-6">
      {
        afterschools.items.map((activity:afterschool,key:number)=>(
          <div className="h-[300px] w-[300px] bg-white rounded drop-shadow" key={key}>
            <div>{activity.title}</div>
          </div>
        ))
      }
    </div>
  );
}
