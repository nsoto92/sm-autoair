'use client';
import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import { motion } from "framer-motion"
import style from './Header.module.css';

export function Header() {

  const triggerCall = () => {
    console.log("Trigger Call");
    window.open(`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`);
  }

  return (
    <div className={style.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <motion.div
        className={style.container}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Title className={style.title}>SM Auto Air</Title>
        <Text className={style.description} size="xl" mt="xl">
          En nuestro negocio de aire acondicionado automotriz, ofrecemos una amplia gama de servicios para asegurar el funcionamiento óptimo de tu sistema de climatización. Realizamos mantenimiento completo, limpieza profunda del evaporador, y reemplazo de componentes esenciales como el evaporador, compresor, condensador, drier, motor del soplador y abanicos. Nuestro equipo garantiza un diagnóstico preciso para resolver cualquier problema y mejorar los estimados de la competencia. Además, la mayoría de los servicios se completan el mismo día. Todo el trabajo está garantizado por nuestros técnicos certificados y el colegio de técnicos en refrigeración.
        </Text>

        <Button
          variant="subtle"
          size="xl"
          radius="xl"
          className={style.control}
          onClick={triggerCall}
        >
          Llamar para cita
        </Button>
      </motion.div>
    </div>
  );
}