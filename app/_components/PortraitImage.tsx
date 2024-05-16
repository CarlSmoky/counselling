import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

interface Props {
  src: string;
  alt: string;
}

const PortraitImage: React.FC<Props> = async ({ src, alt }: Props) => {
  const buffer = await fs.readFile(`./public/${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className="flex flex-col w-full sm:w-1/2 md:mt-0 md:w-1/3 m-auto ">
      <div className="relative aspect-square w-full">
        <Image
          className="object-contain mt-4 py-4"
          src={src}
          alt={alt}
          fill={true}
          sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
      <p className="text-center text-sm text-black-100/60">Bo Yih Thom <br/>(Photo by Shandra Spears Bombay)</p>
    </div>
  );
};

export default PortraitImage;
