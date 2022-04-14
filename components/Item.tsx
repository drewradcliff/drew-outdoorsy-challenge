import Image from "next/image";

interface Props {
  text: string;
  url: string;
}

export default function Item({ url, text }: Props) {
  return (
    <div className="flex items-center my-2">
      <div className="w-[200px] h-[100px] relative rounded-lg overflow-hidden">
        {url && (
          <Image
            src={url}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={url}
            quality={50}
          />
        )}
      </div>
      <p className="text-gray-500 text-lg ml-2 w-full">{text}</p>
    </div>
  );
}
