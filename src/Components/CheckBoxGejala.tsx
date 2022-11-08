import {
  Checkbox,
  CheckboxGroup,
  Box,
  Stack,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react"

export default function CheckBoxGejala() {

  const gejala = [
    "Gejala 1",
    "Gejala 2",
    "Gejala 3",
    "Gejala 4",
    "Gejala 5",
    "Gejala 6",
    "Gejala 7",
    "Gejala 8",
    "Gejala 9",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(gejala.length).fill(false)
  );

  let g = [""];

  const [gejalas, setGejalas] = useState(g);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    g = [];

    updatedCheckedState.forEach((x, i) => {
      if (x === true) g.push(gejala[i]);
    })

    setGejalas(g);
  };

  const selectedGejala = () => {
    console.log(gejalas);
    alert(`Gejala: ${gejalas}`);
  };

  return (
    <div>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas Neue:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300&family=Rubik:wght@300;400&display=swap&family=Dancing Script:ital,wght@0,200;0,300;0,400;0,800;0,900;1,200;1,300"
            rel="stylesheet"
          />
        </head>
        <Box fontSize={100} fontFamily={"Bebas Neue"} height={"120px"}>
          List Gejala
        </Box>
        <Box fontSize={20} fontFamily={"Bebas Neue"} marginBottom={"30px"}>
          Silahkan pilih gejala yang selama ini anda alami.
        </Box>
        <Flex width={[360, 400, 900]}>
          <Stack spacing={5} alignContent={"start"}>
            {gejala.map((link: any, index) => (
              <Checkbox paddingBottom={"2px"} key={link} onChange={() => handleOnChange(index)}>
                {link} 
              </Checkbox>
            ))}
          </Stack>
        </Flex>
        <Button onClick={() => selectedGejala()}>Next</Button>
      </Flex>
    </div>
  );
}
