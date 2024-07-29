import { Checkbox, CheckboxProps, Text } from "@chakra-ui/react";
type StyledCheckBoxProps = CheckboxProps & {
  label: string;
  colorScheme?: string;
  isChecked: boolean | undefined;
};

export const StyledCheckBox = ({
  label,
  colorScheme,
  isChecked,
  ...props
}: StyledCheckBoxProps) => {
  return (
    <Checkbox
      sx={{
        ".chakra-checkbox__control": {
          borderRadius: "5px",
          padding: "6px",
        },
        '.chakra-checkbox__control[data-checked="true"]': {
          backgroundColor: "#7a5bf9",
          borderColor: "#7a5bf9",
        },
        ".chakra-checkbox__control:checked": {
          backgroundColor: "#7a5bf9",
          borderColor: "#7a5bf9",
        },
        ".chakra-checkbox__control:hover": {
          borderColor: "#7a5bf9",
        },
        
      }}
      spacing="16px"
      iconSize="16px"
      colorScheme="purple"
      isChecked={isChecked}
      {...props}
    >
      <Text fontSize="12px" fontWeight={400}>
        {label}
      </Text>
    </Checkbox>
  );
};
