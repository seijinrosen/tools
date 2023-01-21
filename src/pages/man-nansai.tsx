// https://chakra-ui.com/docs/components/input#input-methods-other-than-text

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Input, Link, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";

const calcManNenrei = (today: Date, birthday: Date) => {
  const yearDiff = today.getFullYear() - birthday.getFullYear();
  if (today.getMonth() < birthday.getMonth()) return yearDiff - 1;
  if (today.getMonth() > birthday.getMonth()) return yearDiff;
  if (today.getDate() < birthday.getDate()) return yearDiff - 1;
  return yearDiff;
};

const ManNansaiPage = () => {
  const today = new Date();
  const [birthday, setBirthday] = useState(new Date(2000, 0, 1));

  const handleChange = (dateString: string) =>
    setBirthday(new Date(dateString));

  return (
    <>
      <Heading mb={12}>満何歳？</Heading>

      <Text mb={12}>
        今日は {format(today, "yyyy 年 M 月 d 日")} ですので、
      </Text>

      <Input
        placeholder="Select Date and Time"
        type="date"
        value={format(birthday, "yyyy-MM-dd")}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Text mt={1}>
        生まれのあなたは、満 {calcManNenrei(today, birthday)} 歳です。
      </Text>

      <Text mt={12} mb={6}>
        誕生日が今日の翌日にあたる日付の場合、+1
        されるかもしれません。以下のサイトも参照してみてください。
      </Text>

      <Link href="https://keisan.casio.jp/exec/system/1233283157" isExternal>
        いま（当時）、何歳？ - 高精度計算サイト <ExternalLinkIcon mx="2px" />
      </Link>
    </>
  );
};

export default ManNansaiPage;
