// https://chakra-ui.com/docs/components/input#input-methods-other-than-text

import ContentLayout from "@/components/ContentLayout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Input, Link, Text } from "@chakra-ui/react";
import { format, parse } from "date-fns";
import { useState } from "react";

const title = "満何歳？";
const today = new Date();
const defaultDate = new Date(2000, 0, 1);

const calcManNenrei = (today: Date, birthdayString: string) => {
  const birthday = parse(birthdayString, "yyyy-MM-dd", new Date());
  const yearDiff = today.getFullYear() - birthday.getFullYear();
  if (today.getMonth() < birthday.getMonth()) return yearDiff - 1;
  if (today.getMonth() > birthday.getMonth()) return yearDiff;
  if (today.getDate() < birthday.getDate()) return yearDiff - 1;
  return yearDiff;
};

const ManNansaiPage = () => {
  const [birthdayString, setBirthdayString] = useState(
    format(defaultDate, "yyyy-MM-dd")
  );

  const handleChange = (dateString: string) => {
    try {
      const formattedDateString = format(new Date(dateString), "yyyy-MM-dd");
      setBirthdayString(formattedDateString);
    } catch (error) {}
  };

  return (
    <ContentLayout title={title}>
      <Text mb={12}>
        今日は {format(today, "yyyy 年 M 月 d 日")} ですので、
      </Text>

      <Input
        placeholder="Select Date and Time"
        type="date"
        value={birthdayString}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Text mt={1}>
        生まれのあなたは、満 {calcManNenrei(today, birthdayString)} 歳です。
      </Text>

      <Text mt={12} mb={6}>
        誕生日が今日の翌日にあたる日付の場合、+1
        されるかもしれません。以下のサイトも参照してみてください。
      </Text>

      <Link href="https://keisan.casio.jp/exec/system/1233283157" isExternal>
        いま（当時）、何歳？ - 高精度計算サイト <ExternalLinkIcon mx="2px" />
      </Link>
    </ContentLayout>
  );
};

export default ManNansaiPage;
