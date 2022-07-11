import { useState, useContext, useRef } from 'react';
import {
  Flex,
  Button,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, EditIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import { InventoryContext } from '../../context/InventoryContext';

export default function Filter() {
  const { showFilter, setShowFilter } = useContext(InventoryContext);
  const btnRef = useRef(null);
  const modalBg = useColorModeValue('gray.50', 'gray.900');
  const sectionBg = useColorModeValue('gray.100', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='overflow-x-auto overflow-y-auto p-6 scrollbar-hide'>
      form here
    </div>
  );
}
