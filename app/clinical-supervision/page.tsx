import PageWrapper from "../_components/PageWrapper";
import { contents } from "../_data/text";
import { PageInfo } from "../_types/types"

const page = "clinical supervision"

const clinicalSupervisionPage: React.FC = () => {
  const pageData: PageInfo[] = contents[page] as PageInfo[];
  return (
    <>
      <PageWrapper header={page} pageContents={pageData} />
    </>
  )
}

export default clinicalSupervisionPage