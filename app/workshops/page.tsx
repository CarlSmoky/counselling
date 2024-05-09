import PageWrapper from "../_components/PageWrapper";
import { contents } from "../_data/text";

const page = "workshops";

const workshopsPage = () => {
  return (
    <>
      <PageWrapper header={page} contents={contents[page]} />
    </>
  );
};

export default workshopsPage;
