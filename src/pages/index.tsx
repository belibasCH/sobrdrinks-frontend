import { Title, Text, Paper, Stack } from '@mantine/core';

function Overview() {
  return (
    <Paper p="md" radius="sm">
      <Stack>
        <Title order={2}>Welcome to your Dashboard</Title>
        <Text>Start customizing your dashboard content here.</Text>
      </Stack>
    </Paper>
  );
}

function Repositories() {
  return (
    <Paper p="md" radius="sm">
      <Title order={2}>Repositories</Title>
    </Paper>
  );
}

function Starred() {
  return (
    <Paper p="md" radius="sm">
      <Title order={2}>Starred</Title>
    </Paper>
  );
}

function Teams() {
  return (
    <Paper p="md" radius="sm">
      <Title order={2}>Teams</Title>
    </Paper>
  );
}

function Notifications() {
  return (
    <Paper p="md" radius="sm">
      <Title order={2}>Notifications</Title>
    </Paper>
  );
}

function Settings() {
  return (
    <Paper p="md" radius="sm">
      <Title order={2}>Settings</Title>
    </Paper>
  );
}

export const pages = {
  '/': Overview,
  '/repos': Repositories,
  '/starred': Starred,
  '/teams': Teams,
  '/notifications': Notifications,
  '/settings': Settings,
};