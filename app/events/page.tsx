import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {

  const events = await fetch("https://kiddeelab-backend.vercel.app/api/events").then(response => response.json())

  console.log(events.items)

  return (
    <div className='max-w-[1100px] mx-auto p-6'>
      <div className="text-6xl tracking-tighter font-bold text-orange-500">Coming Soon.</div>
      <div className="text-3xl text-orange-500 opacity-50">This section is still under development.</div>
    </div>
  );
}
 