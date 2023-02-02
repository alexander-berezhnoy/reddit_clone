import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import AuthButtons from "@/src/components/Navbar/RightContent/AuthButtons";
import AuthModal from "@/src/components/Modal/Auth/AuthModal";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";
import Icons from "@/src/components/Navbar/RightContent/Icons";
import UserMenu from "@/src/components/Navbar/RightContent/UserMenu";

type RightContentProps = {
  user?: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <>
            <Icons />
          </>
        ) : (
          <AuthButtons />
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
