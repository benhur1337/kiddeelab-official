import { list } from "@vercel/blob";
import { Scroll } from "@/components/client";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await list({ prefix: "events/" + params.slug });

  function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  return (
    <div className="flex flex-col">
      <strong className="text-5xl text-orange-500 p-6 max-w-[1100px] mx-auto w-full">
        {capitalizeFirstLetter(params.slug)}
      </strong>
      <Gallery gallery={response.blobs} />
    </div>
  );
}

function Gallery(props: { gallery: any }) {
  return (
    <div>
      <Scroll>
        {props.gallery.map((item: any, key: number) => {
          if (item.size > 0) {
            return <GalleryImage src={item.url} key={key}/>;
          }
        })}
      </Scroll>
    </div>
  );
}

function GalleryImage(props: { src: string }) {
  return (
    <div>
      <Image
        className="text-5xl min-h-[325px] max-w-[325px] min-w-[325px] rounded-lg object-cover"
        src={props.src}
        height={500}
        width={500}
        alt=""
      />
    </div>
  );
}
