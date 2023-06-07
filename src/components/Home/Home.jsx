import React, { ReactNode, useEffect, useState } from "react";
import {
  CheckIcon,
  DeleteIcon,
  Search2Icon,
  SearchIcon,
} from "@chakra-ui/icons";
import "./home.css";
import {
  AiFillSmile,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Token_inventry from "./Token_inventry";
import axios from "axios";
import All_Routes from "../../Routes/All_Routes";
import { NavLink } from "react-router-dom";
import Pair_inventry from "./Pair_inventry";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../Redux/action.search";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Token Address", icon: FiHome, url: "" },
  { name: "Pair Address", icon: FiTrendingUp, url: "pair" },
];

export default function Home({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      backgroundColor={"black"}
      id="mainbox"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}

        <All_Routes />
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      backgroundColor={"rgb(59, 58, 59)"}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <div
            style={{
              display: "flex",
            }}
          >
            <AiFillSmile
              style={{
                marginTop: "8px",
                color: "white",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                color: "white",
              }}
            >
              Nifty
            </span>
          </div>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          height: "85%",
        }}
      >
        <div>
          {LinkItems.map((link) => (
            <NavLink to={`/${link.url}`} key={link.name}>
              <NavItem
                _hover={{ bg: "#f30050" }}
                // bg={!shouldSetBgColor ? '#F30050' : 'transparent'}
                icon={link.icon}
                style={{ color: "white" }}
              >
                {link.name}
              </NavItem>
            </NavLink>
          ))}
        </div>

        <div
          style={{
            display: "flex",

            justifyContent: "space-between",
            width: "40%",
            margin: "0px auto 30px auto",
          }}
        >
          <AiFillFacebook color={"white"} />
          <AiFillLinkedin color={"white"} />
          <AiFillTwitterCircle color={"white"} />
        </div>
      </div>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [search_q, setsearch_q] = useState("");
  const { data } = useSelector((store) => store.SearchMangerdata);
  console.log("data", data);
  const dispatch = useDispatch();

  const adddata = () => {
    dispatch(handleSearch(search_q));
    setsearch_q("");
  };
  // console.log("search_q",search_q)
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
      backgroundColor={"black"}
      id="mainbox"
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        color="white"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <AiFillSmile
              style={{
                marginTop: "8px",
                color: "white",
                marginLeft: "5px",
              }}
            />
            <span
              style={{
                color: "white",
              }}
            >
              Nifty
            </span>
          </div>
        </Text>
        <div>

          <InputGroup className="searchtags">
            <Input
              style={{ border: "1px solid white", width: "10em" }}
              placeholder="Search"
              fontWeight={"bold"}
              onChange={(e) => setsearch_q(e.target.value)}
              color="white"
              className="searchtags"
            />
            <InputRightElement 
              className="searchtags">
              <Search2Icon color="white" onClick={adddata} 
              className="searchtags" />
            </InputRightElement>
          </InputGroup>

        </div>
        <div>
          {/* <Button className="connectbutton">Connect</Button> */}

          <ConnectButton />
        </div>
      </div>
    </Flex>
  );
};
