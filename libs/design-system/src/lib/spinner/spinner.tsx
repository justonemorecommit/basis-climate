import {
  Spinner as ChakraSpinner,
  SpinnerProps as ChakraSpinnerProps,
} from "@chakra-ui/react";

export type SpinnerProps = ChakraSpinnerProps & {
  variant?: "general" | "page";
};

export function Spinner({
  variant = "general",
  ...chakraSpinnerProps
}: SpinnerProps) {
  if (variant === "general") {
    return <ChakraSpinner {...chakraSpinnerProps} />;
  } else {
    return (
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        {...chakraSpinnerProps}
      />
    );
  }
}
