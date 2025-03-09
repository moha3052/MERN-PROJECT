import { Container, Heading, VStack, Box, useColorModeValue, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    });
    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const {sucess, message } = await createProduct(newProduct);
        if(!sucess){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                isClosable: true,
            });
        }else{
            toast({
                title: 'Product Added',
                description: message,
                status: 'success',
                isClosable: true,
            })
        }
        setNewProduct({ name: '', price: '', image: ''});
    };

    const toast = useToast();
    
  return <Container maxW={"container.sm"} >
    <VStack spacing={8}>
    <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create a new product
    </Heading>

    <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>

        <VStack spacing={4}>
            <Input placeholder='product Name' name='name' value={newProduct.name} onChange={ e => setNewProduct({ ...newProduct, name: e.target.value })} />

            <Input placeholder='Price' name='price' type='number' value={newProduct.price} onChange={ e => setNewProduct({ ...newProduct, price: e.target.value })} />

            <Input placeholder='Image URL' name='image' value={newProduct.image} onChange={ e => setNewProduct({ ...newProduct, image: e.target.value })} />

            <Button colorScheme='blue' onChange={handleAddProduct} w={"full"}>
                Add product
            </Button>
        </VStack>

    </Box>
    </VStack>
  </Container>
}

export default CreatePage
