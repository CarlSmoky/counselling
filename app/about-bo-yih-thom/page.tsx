import PageWrapper from "../_components/PageWrapper";
import { contents } from "../_data/text";

const AboutPage: React.FC = () => {

  const page = "about me"
  return (
    <>
      <PageWrapper header={page} contents={contents[page]} />
    </>
  )
}

export default AboutPage