import PageWrapper from "../_components/PageWrapper"
import { contents } from "../_data/text"

const page = "specializations";

const specialtiesPage: React.FC = () => {
  return (
    <>
    <PageWrapper header={page} contents={contents[page]}/>
    </>
  )
}

export default specialtiesPage