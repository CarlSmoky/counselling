import PageWrapper from "../_components/PageWrapper";
import { contents, headers } from "../_data/text";
import { ContentType, PageKey } from "../_types/types"
import PageNotFound from "../_components/PageNotFound"


const Page = ({ params }: { params: { pages: PageKey } }) => {
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