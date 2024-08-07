import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize={"5xl"}
      bgGradient="linear(to-l, blue, red)"
      bgClip="text"
      animation="colorChange 5s ease infinite"
      style={{
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
