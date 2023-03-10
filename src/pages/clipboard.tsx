// https://chakra-ui.com/docs/hooks/use-clipboard

import ContentLayout from "@/components/ContentLayout";
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  useClipboard,
} from "@chakra-ui/react";

const title = "Clipboard";

function ClipboardPage() {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <ContentLayout title={title}>
      <Flex mb={2}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </ContentLayout>
  );
}

export default ClipboardPage;
