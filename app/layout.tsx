'use client';

import '@mantine/core/styles.css';
import React from 'react';
import {
  MantineProvider,
  AppShell,
  Burger,
  Button,
  Container,
  Group,
  Paper,
  ScrollArea,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { theme } from '../theme';
import LinksGroup from '@/components/LinksGroup/LinksGroup';

// export const metadata = {
//   title: 'CTC Admin 2',
// };
const navLinks = [
  { label: 'Vehicles', path: 'vehicles' },
  { label: 'Invoices', path: 'invoices' },
  { label: 'Credit Notes', path: 'creditNotes' },
  {
    label: 'Expenses',
    path: 'expenses',
    links: [
      { label: 'National Expenses', path: 'nationalExpenses' },
      { label: 'International Expenses', path: 'internationalExpenses' },
      { label: 'Trip Expenses', path: 'tripExpenses' },
    ],
  },
  { label: 'Employees', path: 'employees' },
  { label: 'Companies', path: 'companies' },
  { label: 'Settings', path: 'settings' },
];

export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure(false);

  const links = navLinks.map((item) => (
    <LinksGroup label={item.label} path={item.path} links={item.links} key={item.path} />
  ));

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{
              width: 200,
              breakpoint: 'sm',
              collapsed: { mobile: !opened, desktop: !true },
            }}
          >
            <AppShell.Header p="md">
              <Group justify="apart" grow>
                <Group justify="apart">
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    size="md"
                    hiddenFrom="sm"
                    display={true ? 'none' : 'inline'}
                  />
                  <Title order={3} fw="bolder">
                    CTCAdmin 2
                  </Title>
                </Group>
                <Group justify="right">
                  <Button>Language</Button>

                  {/* {true ? <Button
                  type="submit"
                  onClick={() =>
                      submit(null, { method: 'POST', action: '/logout' })
                    }
                  >
                    Logout
                        </Button> : null}
                {!user ? <Button component={Link} to={linkPath.to}>
                    {linkPath.name}
                         </Button> : null} */}
                </Group>
              </Group>
            </AppShell.Header>

            <AppShell.Navbar pl="md" mt="1rem" h="85vh" hidden>
              <AppShell.Section grow component={ScrollArea}>
                {links}
              </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>
              <Paper
                shadow="sm"
                radius="md"
                p="xl"
                withBorder
                style={{ height: '85vh', width: 'auto' }}
              >
                <Container fluid px={0}>
                  {children}
                </Container>
              </Paper>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
