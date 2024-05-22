import type { Metadata } from "next";
import PageWrapper from "../_components/PageWrapper";
import { contents, headers, metadataDescription } from "../_data/text";
import { ContentType, PageKey } from "../_types/types"
import PageNotFound from "../_components/PageNotFound"


type Props = {
  params: { pages: PageKey };
};

export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
  const param = params.pages;
  const title: string = headers[param] as string;
  const description: string = metadataDescription[param] as string;
  return {
    title: title,
    description: description
  };
}

const Page = ({ params }: Props) => {
  const param = params.pages;
  const pageData: ContentType[] = contents[param] as ContentType[];
  const header: string = headers[param] as string;
  
  if (!pageData) 
    return <PageNotFound/>;

  return (
    <>
      <PageWrapper header={header} pageContents={pageData} />
    </>
  )
}

export default Page