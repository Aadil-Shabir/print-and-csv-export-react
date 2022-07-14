import { useContext, useRef } from 'react';
import {
  Flex,
  Button,
  CloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import InventoryHeader from '../components/inventory/InventoryHeader';
import InventoryList from '../components/inventory/InventoryList';
import { InventoryContext } from '../context/InventoryContext';
import { useReactToPrint } from "react-to-print";
import FilterForm from "../components/inventory/FilterForm";
import { ViewIcon, EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";

const Home = () => {
  const { showFilter, setShowFilter } = useContext(InventoryContext);
  const btnRef = useRef(null);
  const cancelRef = useRef();
  const modalBg = useColorModeValue("gray.50", "gray.900");
  const sectionBg = useColorModeValue("gray.100", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log("in index", showFilter);

  return (
    <Flex w="100vw" h="100vh" justify="space-between">
      <Flex w="220px" borderRightWidth="1px">
        nav
      </Flex>
      <Flex w="678px" flexDir="column" p={3}>
        <InventoryHeader ref={componentRef.current} handlePrint={handlePrint} />
        <div className="overflow-x-auto overflow-y-auto scrollbar-hide">
          <div>
            <InventoryList ref={componentRef} />
          </div>
        </div>
        {showFilter && <p>true</p>}
      </Flex>
      <Flex w="220px" borderLeftWidth="1px">
        aside
      </Flex>
    </Flex>
  );
};

export default Home;
