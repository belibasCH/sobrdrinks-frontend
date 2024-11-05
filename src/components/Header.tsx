import { Group, Title, UnstyledButton } from '@mantine/core';
import { GithubIcon } from 'lucide-react';

export default function Header() {
  return (
    <Group justify="space-between" style={{ flex: 1 }}>
      <Group gap="xs">
        <UnstyledButton>
          <GithubIcon size={24} />
        </UnstyledButton>
        <Title order={3}>Dashboard</Title>
      </Group>
    </Group>
  );
}