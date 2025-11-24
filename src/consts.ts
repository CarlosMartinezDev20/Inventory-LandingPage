// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Inventia - Sistema de Gestión de Inventario";
export const SITE_DESCRIPTION =
  "Aplicación de escritorio profesional construida con Electron para gestionar inventario, productos, proveedores, clientes, órdenes de compra y venta. Descarga gratis para Windows.";

export const GITHUB_URL =
  "https://github.com/CarlosMartinezDev20/Inventia";

export const DOWNLOAD_URL =
  "https://github.com/CarlosMartinezDev20/Inventia/releases/download/v1.0.0/Inventia-Setup-1.0.0.exe";

export const SITE_METADATA = {
  title: {
    default: "Inventia - Sistema de Gestión de Inventario",
    template: "%s | Inventia",
  },
  description:
    "Aplicación de escritorio profesional construida con Electron para gestionar inventario, productos, proveedores, clientes, órdenes de compra y venta.",
  keywords: [
    "inventia",
    "inventario",
    "gestión de inventario",
    "sistema de inventario",
    "electron app",
    "app de escritorio",
    "gestión de productos",
    "proveedores",
    "clientes",
    "órdenes de compra",
    "órdenes de venta",
    "almacén",
    "stock",
    "control de inventario",
  ],
  authors: [{ name: "Carlos" }],
  creator: "Carlos",
  publisher: "Carlos",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Inventia - Sistema de Gestión de Inventario",
    description:
      "Aplicación de escritorio profesional construida con Electron para gestionar inventario, productos, proveedores, clientes y órdenes.",
    siteName: "Inventia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inventia - Sistema de Gestión de Inventario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventia - Sistema de Gestión de Inventario",
    description:
      "Aplicación de escritorio profesional para gestión de inventario. Descarga gratis para Windows.",
    images: ["/og-image.jpg"],
    creator: "@carlos200518mar",
  },
};
