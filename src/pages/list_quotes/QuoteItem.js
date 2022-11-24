import { Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
// import { Card, Col } from "react-bootstrap";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const QuoteItem = (props) => {
  const { author, text, imageURL } = props.quote;
  return (
    <Center>
      <Flex alignItems="center" flexWrap="wrap">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          width="xl"
          mb="3"
          // maxW={"200px"}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            maxH="200px"
            src={imageURL}
            alt={author}
            padding="2"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{text}</Heading>

              <Text py="2">{author}</Text>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </Center>
    // <Col md={{ span: 6, offset: 3 }}>
    //   <Card className="text-center" style={{ margin: "5%" }}>
    //     <Card.Body>
    //       <blockquote className="blockquote mb-0">
    //         <p> {text} </p>
    //         <footer className="blockquote-footer">
    //           {/* {author} */}
    //           <cite title={author}> {author}</cite>
    //         </footer>
    //       </blockquote>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};
export default QuoteItem;
