import PageWrapper from "../_components/PageWrapper";
import { contents } from "../_data/text";
import { PageInfo } from "../_types/types"

const AboutPage: React.FC = () => {
  
  const page = "about me"
  const pageData: PageInfo[] = contents[page] as PageInfo[];
  return (
    <>
      <PageWrapper header={page} pageContents={pageData} />
    </>
  )
}

export default AboutPage