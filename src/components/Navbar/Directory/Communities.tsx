import React, { useState } from "react";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import CreateCommunityModal from "@/src/components/Modal/CreateCommunityModal/CreateCommunityModal";
import { GrAdd } from "react-icons/gr";

const Communities: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => setOpen(true)}
      >
        <Flex>
          <Icon as={GrAdd} fontSize={20} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};

export default Communities;
