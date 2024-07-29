import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

export const StyledRadio = () => {
  return (
    <RadioGroup>
      <Stack direction="column" my={3} spacing="3">
        {["No Preference", "Male", "Female"].map((item) => (
          <Radio
            sx={{
              ".chakra-radio__input": {
                borderRadius: "5px",
                padding: "8px",
              },
            }}
            spacing="16px"
            key={item}
            value={item}
            colorScheme="purple"
          >
            <Text fontSize="12px" fontWeight={400}>
              {item}
            </Text>
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};
