import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "@/src/components/Navbar/SearchInput";
import RightContent from "@/src/components/Navbar/RightContent";
import { auth } from "@/src/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/*<Directory />*/}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
