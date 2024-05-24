import React, { Suspense } from "react";
import fs from "node:fs/promises";
import path from 'path';
import type { Metadata } from "next";
import type { PageKey, ContentType, MetadataAttributeType } from "../_types/types";
import { matadataTest } from "../_data/metadata";
import PageWrapper from "../_components/PageWrapper";
import PageNotFound from "../_components/PageNotFound";
import Loading from "../_components/Loading";

type Props = {
  params: { pages: PageKey };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const param = params.pages;
  
  const pageMetadata: MetadataAttributeType = matadataTest[param];

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
  };
};

const Page = async ({ params }: Props) => {
  const param = params.pages;
  
  const pageMetadata: MetadataAttributeType = matadataTest[param];
  const header: string = pageMetadata.title;
  const contentPath = path.join(process.cwd(), '/app/_data/content.json');
  const contentFile = await fs.readFile(contentPath, "utf8");
  const pageContents: ContentType[] = JSON.parse(contentFile)[param];

  if (!pageContents) return <PageNotFound />;

  return (
      <Suspense fallback={<Loading/>}>
        <PageWrapper header={header} pageContents={pageContents} />
      </Suspense>
  );
};

export default Page;
