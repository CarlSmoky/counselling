import React from "react";
import PageWrapper from "../_components/PageWrapper"
import { contents } from "../_data/text"

const page = "psychotherapy";

const psychotherapyPage: React.FC = () => {
  return (
    <>
    <PageWrapper header={page} contents={contents[page]}/>
    </>
      
  )
}

export default psychotherapyPage