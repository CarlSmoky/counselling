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
    <div className="flex w-full sm:w-1/2 md:mt-0 md:w-1/3 m-auto">
      <div className="flex flex-col bg-grey-300 mt-8 m-auto rounded-lg">
        <Image
          className="object-contain m-auto p-4"
          src={src}
          alt={alt}
          width={240}
          height={300}
          sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={base64}
        />
        <p className="text-center text-sm text-black-100/60 p-3">Bo Yih Thom <br/>(Photo by Shandra Spears Bombay)</p>
      </div>
    </div>
  );
};

export default PortraitImage;
