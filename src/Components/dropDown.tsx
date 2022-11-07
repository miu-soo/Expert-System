import {
  Checkbox,
  CheckboxGroup,
  Box,
  Stack,
  Flex,
  HStack,
} from "@chakra-ui/react";

export default function DropDown() {
  const gejala = [
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
    "Gejala 1",
  ];
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
        <Box fontSize={100} fontFamily={"Bebas Neue"}>
          Gejala
        </Box>
        <Flex width={"900px"}>
          <Stack spacing={5} alignContent={"start"}>
            {gejala.map((link: any) => (
              <Checkbox key={link}>{link}</Checkbox>
            ))}
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}
