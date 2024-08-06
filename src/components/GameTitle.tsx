import { Heading } from "@chakra-ui/react";

const GameTitle = () => {
  return (
    <Heading
      as="h1"
      bgGradient="linear(to-l, blue, red)"
      bgClip="text"
      animation="colorChange 5s ease infinite"
      style={{
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      GameSpectrum
    </Heading>
  );
};

export default GameTitle;
