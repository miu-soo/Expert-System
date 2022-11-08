import {
  Checkbox,
  CheckboxGroup,
  Box,
  Stack,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";

export default function CheckBoxGejala() {
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

  const selectedGejala = (name: string) => {
    alert(`hello, ${name}`);
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
            {gejala.map((link: any) => (
              <Checkbox paddingBottom={"2px"} key={link}>
                {link}
              </Checkbox>
            ))}
          </Stack>
        </Flex>
        <Button onClick={() => selectedGejala("James")}>Next</Button>
      </Flex>
    </div>
  );
}
