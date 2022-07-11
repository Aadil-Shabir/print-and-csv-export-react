import { useState, useContext, useRef } from 'react';
import {
  Flex,
  Text,
  Box,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon,
  SmallCloseIcon,
  SearchIcon,
  AddIcon,
  EditIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { BsPrinterFill } from 'react-icons/bs';
import { InventoryContext } from '../../context/InventoryContext';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { FaFileCsv } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import Filter from './FilterForm';

export default function InventoryHeader() {
  const { showFilter, setShowFilter, searchInventory, setSearchInventory } =
    useContext(InventoryContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex w='full' flexDirection='column' justify='space-between' mb={3}>
        <Flex justify='space-between' my={3} w='full'>
          <Flex w='full' justify='space-between'>
            <InputGroup w='400px' size='sm'>
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
              />
              <Input
                type='text'
                placeholder='Search inventory '
                borderRadius='6px'
                value={searchInventory}
                onChange={(e) => setSearchInventory(e.target.value)}
                fontSize='sm'
              />
              <InputRightElement>
                <IconButton
                  size='xs'
                  aria-label='Reset search'
                  icon={<SmallCloseIcon />}
                  variant='ghost'
                  onClick={(e) => setSearchInventory('')}
                  _hover={{ bg: 'none' }}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex>
            {colorMode === 'light' ? (
              <IconButton
                variant='outline'
                aria-label='Toggle Dark'
                icon={<MoonIcon />}
                onClick={toggleColorMode}
                colorScheme='blue'
                size='sm'
              />
            ) : (
              <IconButton
                variant='outline'
                aria-label='Toggle Light'
                icon={<SunIcon />}
                onClick={toggleColorMode}
                colorScheme='blue'
                size='sm'
              />
            )}
            <Flex pl='16px'>
              <Button
                colorScheme='blue'
                variant='outline'
                size='sm'
                onClick={() => handleLogout()}
              >
                Log out
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb='6px' justify='space-between'>
          <Flex>
            <Button
              leftIcon={<AddIcon />}
              colorScheme='blue'
              variant='outline'
              w='100px'
              mr='16px'
              size='sm'
              onClick={() => alert('add new item form')}
            >
              Add Item
            </Button>
          </Flex>
          <Flex>
            <Menu>
              <MenuButton
                as={IconButton}
                variant='outline'
                colorScheme='blue'
                size='sm'
                aria-label='Toggle Light'
                icon={<HiOutlineAdjustments />}
              />
              <MenuList>
                <MenuItem>
                  <Select placeholder='Category' variant='unstyled'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </MenuItem>

                <MenuItem>
                  <Select placeholder='Status' variant='unstyled'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </MenuItem>
                <MenuItem>
                  <Select placeholder='Manufacture Date' variant='unstyled'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </MenuItem>
                <MenuItem>
                  <Select placeholder='Expiry' variant='unstyled'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              icon={<FaFileCsv />}
              colorScheme='blue'
              variant='outline'
              size='sm'
              ml={4}
              onClick={() =>
                alert(
                  'export the below list to CSV, use https://www.npmjs.com/package/react-csv'
                )
              }
            />
            <IconButton
              icon={<BsPrinterFill />}
              colorScheme='blue'
              variant='outline'
              size='sm'
              ml={4}
              onClick={() =>
                alert(
                  'react-to-print, same as before. make sure that A4 page does not cut in the middle of a item'
                )
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
