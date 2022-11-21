import { Box, CircularProgress, CircularProgressLabel, Flex, HStack, VStack } from "@chakra-ui/react";
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
  })

  dataGejala.forEach((gejala) => {
    if (gejala.value !== false) {
      dataPenyakit.forEach((penyakit) => {
        if (penyakit.diseases.includes(gejala.id)) {
          penyakit.value++;
        }
      })
    }
  })

  console.log(dataPenyakit);

  return (
    <>
      <HStack marginTop={"20px"}>
        {dataPenyakit.map(penyakit => (
          <VStack spacing={5} marginLeft={"15px"} marginRight={"15px"}>
            <Box fontSize={20} fontFamily={"Bebas Neue"}>
              {penyakit.name}
            </Box>
            <CircularProgress value={((penyakit.value)/(penyakit.diseases.length))*100} size="120px">
              <CircularProgressLabel>{(((penyakit.value) / (penyakit.diseases.length))*100).toFixed(2)}%</CircularProgressLabel>
            </CircularProgress>
          </VStack>
        ))}
      </HStack>
    </>
  );
};

export default Hasil;
