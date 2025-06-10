import localFont from "next/font/local";

export const ibmPlexSans = localFont({
  src: [
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
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ibm-plex-sans",
});

export const ibmPlexMono = localFont({
  src: "../assets/fonts/IBM-Plex-Mono/IBMPlexMono-Regular.woff2",
  display: "swap",
  variable: "--font-ibm-plex-mono",
});
