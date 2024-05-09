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
    <div className="w-2/3 sm:w-1/2 md:w-1/3 aspect-square m-auto md:mt-0 relative">
      <Image
        className="object-cover rounded-full md:rounded-none"
        src={src}
        alt={alt}
        fill={true}
        sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
};

export default PortraitImage;
