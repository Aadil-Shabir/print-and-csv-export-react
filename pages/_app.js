import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { InventoryProvider } from '../context/InventoryContext';

function MyApp({ Component, pageProps }) {
  return (
    <InventoryProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </InventoryProvider>
  );
}

export default MyApp;
