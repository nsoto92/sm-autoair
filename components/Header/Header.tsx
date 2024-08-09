import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import style from './Header.module.css';

export function Header() {
  return (
    <div className={style.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={style.container} size="md">
        <Title className={style.title}>SM Auto Air</Title>
        <Text className={style.description} size="xl" mt="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={style.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}