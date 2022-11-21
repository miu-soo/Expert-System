import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Penyakit from "../data/dataPenyakit";
import Gejala from "../data/dataGejala";
// export default function Hasil() {
//   return <div>Hasil</div>;
// }

const Hasil: React.FC<{
  gejalaInput: Array<string>;
}> = (props) => {
  // let gejalaInput = props.gejalaInput;
  let dataGejala = Gejala;
  let dataPenyakit = Penyakit;

  dataPenyakit.forEach((penyakit) => {
    penyakit.value = 0;
  });

  dataGejala.forEach((gejala) => {
    if (gejala.value !== false) {
      dataPenyakit.forEach((penyakit) => {
        if (penyakit.diseases.includes(gejala.id)) {
          penyakit.value++;
        }
      });
    }
  });

  console.log(dataPenyakit);

  return (
    <>
      <HStack
        marginTop={"20px"}
        width={"full"}
        justifyContent={"center"}
        spacing={"20px"}
      >
        {dataPenyakit.map((penyakit) => (
          <VStack spacing={5} marginLeft={"10px"} marginRight={"10px"}>
            <Box
              fontSize={25}
              fontFamily={"Bebas Neue"}
              width={[100, 200, 300]}
              height={"20px"}
              textAlign={"center"}
            >
              {penyakit.name}
            </Box>
            <CircularProgress
              value={(penyakit.value / penyakit.diseases.length) * 100}
              size="130px"
            >
              <CircularProgressLabel fontSize={20}>
                {((penyakit.value / penyakit.diseases.length) * 100).toFixed(2)}
                %
              </CircularProgressLabel>
            </CircularProgress>
          </VStack>
        ))}
      </HStack>
    </>
  );
};

export default Hasil;
