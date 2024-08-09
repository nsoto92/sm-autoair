import React from 'react'
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'SM Auto Air',
  description: 'SM Auto Air - Aires para auto en Bayamon Puerto Rico. Auto Air Conditioning in Bayamon Puerto Rico.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}