import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "@/src/components/Navbar/RightContent/AuthButtons";
import AuthModal from "@/src/components/Modal/Auth/AuthModal";

type RightContentProps = {
  // user: any
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
