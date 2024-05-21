import PageWrapper from "../_components/PageWrapper";
import { contents, headers } from "../_data/text";
import { ContentType, PageKey } from "../_types/types"


const Page = ({ params }: { params: { pages: PageKey } }) => {
  const param = params.pages;
  const pageContent = contents[param];
   if (!pageContent) 
    return (
          <h3>No content</h3>
        );

  const pageData: ContentType[] = contents[param] as ContentType[];
  const header: string = headers[param] as string;
  return (
    <>
      <PageWrapper header={header} pageContents={pageData} />
    </>
  )
}

export default Page