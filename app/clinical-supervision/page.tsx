import PageWrapper from "../_components/PageWrapper";
import { contents } from "../_data/text";

const page = "clinical supervision"

const clinicalSupervisionPage: React.FC = () => {
  return (
    <>
      <PageWrapper header={page} contents={contents[page]} />
    </>
  )
}

export default clinicalSupervisionPage