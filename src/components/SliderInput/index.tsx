// https://chakra-ui.com/docs/components/number-input#combining-it-with-a-slider

import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { SetStateAction } from "react";

type SliderInputProps = {
  value: number;
  setValue: (value: SetStateAction<number>) => void;
};

// TODO: マイナスの場合の対応

const SliderInput = ({ value, setValue }: SliderInputProps) => {
  const handleChange = (value: SetStateAction<number>) => setValue(value);

  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        value={value}
        onChange={(e) => handleChange(+e)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px">
          {value}
        </SliderThumb>
      </Slider>
    </Flex>
  );
};

export default SliderInput;
