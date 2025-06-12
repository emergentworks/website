// src/app/fonts.ts (Using the simpler file paths)

import localFont from "next/font/local";

export const ibmPlexSans = localFont({
  src: [
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Text.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const ibmPlexMono = localFont({
  // Assuming a similar simple path for the mono font
  src: "../assets/fonts/IBM-Plex-Mono/IBMPlexMono-Regular.woff2",
  display: "swap",
  variable: "--font-ibm-plex-mono",
});
