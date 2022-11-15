import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
} from 'react-icons/fi'
import{
    AiOutlineQuestionCircle,

} from "react-icons/ai"
import{
    BiFootball
} from "react-icons/bi"
import NavItem from '../SideBar/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            transition="all .5s ease" 
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'lightgray' , }}
                    icon={<FiMenu />}                    
                    onClick ={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <Link to="/"><NavItem navSize={navSize} icon={FiHome} title="Home" description=""/></Link>
                <Link to="/pickem"><NavItem navSize={navSize} icon={BiFootball} title="Prode"/></Link>
                <Link to="/fixture"><NavItem navSize={navSize} icon={FiCalendar} title="Fixture"/></Link>
                <Link to="/about"><NavItem navSize={navSize} icon={AiOutlineQuestionCircle} title="About"/></Link>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center"  transition="all .25s ease" _hover={{ filter: "brightness(130%)", }}>
                    <Avatar size="sm" src="" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}