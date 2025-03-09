import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
    <VStack spacing={8}>
        <Text fontSize={30} fontWeight={"bold"} bgGradient={"linear(to-r, cyan.400, blue.500"} bgClip={"text"} textAlign={"center"}>
            Current products
        </Text>

        <SimpleGrid columns={{ base: 1, lg: 3, md: 3 }} spacing={10} w={"full"}>

        </SimpleGrid>

        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            No products found {" "}
            <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline"}} >
                Create a new product
            </Text>
            </Link>
        </Text>
    </VStack>
    </Container>
  )
}

export default HomePage