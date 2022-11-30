import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Penyakit from "../data/dataPenyakit";
import Gejala from "../data/dataGejala";
// export default function Hasil() {
//   return <div>Hasil</div>;
// }

const Hasil: React.FC<{
  gejalaInput: Array<string>;
}> = (props) => {
  let gejalaInput = props.gejalaInput;
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

  // console.log(dataPenyakit);
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalData, setModalData] = useState<{
    id: number;
    name: string;
    description: string;
    diseases: number[];
    value: number;
    detail: string;
    href: string;
  }>();

  return (
    <Flex flexDir={"column"}>
      <HStack
        marginTop={"20px"}
        width={"full"}
        justifyContent={"center"}
        spacing={"20px"}
      >
        {dataPenyakit.map((penyakit) => (
          <VStack spacing={5} marginLeft={"10px"} marginRight={"10px"}>
            <Box
              key={penyakit.id}
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
              marginBottom={"20px"}
            >
              <CircularProgressLabel fontSize={20}>
                {((penyakit.value / penyakit.diseases.length) * 100).toFixed(2)}
                %
              </CircularProgressLabel>
            </CircularProgress>
            <Button
              onClick={() => {
                setModalData(penyakit);
                setModalIsOpen(true);
              }}
            >
              Info
            </Button>
          </VStack>
        ))}
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            scrollBehavior={"inside"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{modalData!.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>Adalah {modalData!.description}</ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </Button>
                <a href={modalData!.href} target="_blank" rel="noreferrer">
                  <Button colorScheme="blue">Halo Doc</Button>
                </a>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </HStack>
      <Box marginTop={6}></Box>
    </Flex>
  );
};

export default Hasil;
