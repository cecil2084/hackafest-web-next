"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import novaLogoHeader from "@/app/_assets/nova_logo_header.png";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (link: string): boolean => {
    if (!link) return false;
    if (pathname.startsWith(link)) return true;
    return false;
  };

  const links = [
    { icon: "", label: "Home", link: "/dashboard" },
    {
      icon: "",
      label: "About",
      link: null,
    },
  ];

  return (
    <Center w="100vw" h="100vh" bg="#0E1625" style={{ overflow: "hidden" }}>
      {/* Main container */}
      <Stack h="100%" w="100%" gap="0">
        {/* HEADER */}
        <Stack gap="0">
          <Group justify="space-between" w="100%" h="70">
            <Image h="50%" src={novaLogoHeader.src} />
          </Group>

          <Divider color="#475A7F" />
        </Stack>

        {/* Content area */}
        <Group flex="1" style={{ overflow: "hidden" }}>
          {/* SIDE BAR */}
          <Group
            h="100%"
            w="fit-content"
            gap="0"
            style={{ overflow: "hidden" }}
          >
            <Stack w="250" h="100%" p="lg">
              {links.map((link, index) => (
                <Button
                  justify="center"
                  style={{
                    justifyContent: "flex-start", // align content (text, icon) to the left
                  }}
                  variant={
                    link.link && isActive(link.link) ? "filled" : "subtle"
                  }
                  key={index}
                  color={link.link && isActive(link.link) ? "#49299A" : "white"}
                  onClick={() =>
                    link.link ? router.push(link.link) : undefined
                  }
                >
                  <Text flex="1">{link.label}</Text>
                  {/* <div style={{ minWidth: "100%", width: "100%" }}>
                    <span />
                  </div> */}
                </Button>
              ))}
            </Stack>
            <Divider orientation="vertical" color="#475A7F" />
          </Group>

          {/* MAIN AREA */}
          <Flex
            justify="center"
            m="0"
            w="100%"
            style={{
              overflowX: "hidden",
              overflowY: "auto", // Ensure only vertical scrolling
              flex: 1, // Make it take the available height
              height: "100%", // Ensure it fills the height
            }}
          >
            {children}
          </Flex>
        </Group>
      </Stack>
    </Center>
  );

  //   return (
  //     <Center w="100vw" h="100vh" bg="#0E1625" style={{ overflow: "hidden" }}>
  //       {/* {children} */}
  //       <Stack h="100%" w="100%" gap="0">
  //         {/* HEADER */}
  //         <Stack gap="0">
  //           <Group justify="space-between" w="100%" h="70">
  //             <Image h="50%" src={novaLogoHeader.src} />
  //           </Group>

  //           <Divider color="#475A7F" />
  //         </Stack>

  //         <Group flex="1">
  //           {/* SIDE BAR */}
  //           <Group h="100%">
  //             <Stack w="250" h="100%">
  //               dd
  //             </Stack>
  //             <Divider orientation="vertical" color="#475A7F" />
  //           </Group>

  //           {/* MAIN AREA */}
  //           <Container style={{ overflowY: "auto" }}>{children}</Container>
  //         </Group>
  //       </Stack>
  //     </Center>
  //   );
}
