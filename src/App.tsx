import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import DashboardShell from './components/AppShell';
import '@mantine/core/styles.css';

const theme = createTheme({
  primaryColor: 'blue',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <DashboardShell />
      </BrowserRouter>
    </MantineProvider>
  );
}