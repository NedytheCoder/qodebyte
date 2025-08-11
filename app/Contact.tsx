import { Box, Grid, Heading } from "@radix-ui/themes";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      <Grid>
        <Grid>
          <Box className="bg-red-300">Box1</Box>
          <Box className="bg-blue-300">Box2</Box>
        </Grid>
        <div>
          <Heading className="bg-gray-900">CONNECT WITH US</Heading>
          <form></form>
        </div>
      </Grid>
    </div>
  );
};

export default Contact;
