import React from "react";
import { Box, VStack, Button, Heading, Text, Input, Select, RadioGroup, Radio, Stack, useToast } from "@chakra-ui/react";
import { FaGoogle, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAuthClick = () => {
    toast({
      title: "Authentication Clicked",
      description: "Here you would be redirected to Google authentication process.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleFreeBrowsingClick = () => {
    toast({
      title: "Free Browsing Clicked",
      description: "Here you would see the map with events for the next 3 days.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleCreateEventClick = () => {
    toast({
      title: "Create Event Clicked",
      description: "Event creation would be handled here with Google Maps and biletix.com integration.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">
        Meeting & Dating App
      </Heading>
      <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleAuthClick}>
        Sign-Up with Google
      </Button>
      <Button leftIcon={<FaGoogle />} colorScheme="blue" onClick={handleAuthClick}>
        Member Login with Google
      </Button>
      <Button leftIcon={<FaMapMarkerAlt />} colorScheme="teal" onClick={handleFreeBrowsingClick}>
        Free Browsing
      </Button>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading as="h3" size="lg">
          Create a New Event
        </Heading>
        <VStack spacing={4}>
          <Input placeholder="Event Name" />
          <Select placeholder="Event Type">
            <option value="concert">Concert</option>
            <option value="exhibition">Exhibition</option>
            <option value="match">Match</option>
            <option value="dinner">Dinner</option>
            <option value="party">Party</option>
          </Select>
          <Input placeholder="Location" />
          <Input type="time" placeholder="Start Time" />
          <Input type="time" placeholder="End Time" />
          <Stack direction="row">
            <Input placeholder="Participants (optional)" />
            <Input placeholder="Max Participants (optional)" />
          </Stack>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="female">Female</Radio>
              <Radio value="male">Male</Radio>
              <Radio value="indifferent">Indifferent</Radio>
            </Stack>
          </RadioGroup>
          <Select placeholder="Account Status">
            <option value="own">Everyone Own Account</option>
            <option value="split">50% - 50%</option>
            <option value="mine">Accounts from Me</option>
            <option value="theirs">Accounts from the Other Side</option>
          </Select>
          <Button colorScheme="green" onClick={handleCreateEventClick}>
            Create Event
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
