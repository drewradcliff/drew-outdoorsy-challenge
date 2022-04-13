import Image from "next/image";

interface Props {
  text: string;
  url: string;
}

export default function Item({ url, text }: Props) {
  return (
    <div className="flex items-center my-2">
      {/* <img className="w-[150px] h-[100px] rounded-lg" src={url} /> */}
      <div className="w-[200px] h-[100px] relative">
        <Image
          src={url}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-500 text-lg ml-2 w-full">{text}</p>
    </div>
  );
}
