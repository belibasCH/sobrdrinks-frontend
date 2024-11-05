import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  defaultRadius: 'sm',
  components: {
    AppShell: {
      styles: {
        main: {
          background: 'var(--mantine-color-gray-0)',
        },
      },
    },
    NavLink: {
      styles: (theme) => ({
        root: {
          borderRadius: theme.radius.sm,
          '&[data-active="true"]': {
            backgroundColor: 'var(--mantine-color-blue-light)',
          },
        },
      }),
    },
  },
});