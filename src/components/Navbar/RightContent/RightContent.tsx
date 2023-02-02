import AuthModal from "@/src/components/Modal/Auth/AuthModal";
import AuthButtons from "@/src/components/Navbar/RightContent/AuthButtons";
import Icons from "@/src/components/Navbar/RightContent/Icons";
import UserMenu from "@/src/components/Navbar/RightContent/UserMenu";
import { auth } from "@/src/firebase/clientApp";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";

type RightContentProps = {
  user?: User | null;
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
