import { NavLink, Stack } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Box, 
  Users, 
  Settings, 
  Bell,
  Star
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Overview', href: '/' },
  { icon: Box, label: 'Repositories', href: '/repos' },
  { icon: Star, label: 'Starred', href: '/starred' },
  { icon: Users, label: 'Teams', href: '/teams' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Stack gap="xs">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          leftSection={<item.icon size={16} strokeWidth={1.5} />}
          label={item.label}
          active={location.pathname === item.href}
          onClick={() => navigate(item.href)}
        />
      ))}
    </Stack>
  );
}