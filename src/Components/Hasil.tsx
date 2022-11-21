import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Penyakit from "../data/dataPenyakit";
// export default function Hasil() {
//   return <div>Hasil</div>;
// }

const Hasil: React.FC<{
  gejalaInput: Array<string>;
}> = (props) => {
  let dataGejala = props.gejalaInput;
  let dataPenyakit = Penyakit;

  let penyakit;

  if (dataGejala.length) {
    penyakit = dataPenyakit[0];
  }

  return (
    <>
      Penyakit: {penyakit?.name}
      <br />
      Deskripsi: {penyakit?.description}
      <br />
      Detail: {penyakit?.detail}
      <br />
    </>
  );
};

export default Hasil;
