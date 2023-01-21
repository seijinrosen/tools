import ContentLayout from "@/components/ContentLayout";
import HelloWorld from "@/components/HelloWorld";
import LoremIpsum from "@/components/LoremIpsum";
import SliderInput from "@/components/SliderInput";
import { NextPage } from "next";
import { useState } from "react";

const title = "Hello Page";

const HelloPage: NextPage = () => {
  const [value, setValue] = useState(3);

  return (
    <ContentLayout title={title}>
      <HelloWorld />
      <SliderInput value={value} setValue={setValue} />
      {[...Array(Math.max(0, value))].map((_, i) => (
        <LoremIpsum key={i} />
      ))}
    </ContentLayout>
  );
};

export default HelloPage;
