import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, GITHUB_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "Características", href: "/#features" },
    { name: "Descargar", href: DOWNLOAD_URL },
    { name: "GitHub", href: GITHUB_URL },
  ];

  const legal = [{ name: "Política de Privacidad", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-10 pt-16 lg:pt-20">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Descarga Inventia y gestiona tu negocio
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Sistema completo de inventario con Electron. Interfaz moderna, 
          autenticación JWT y control total de tu negocio.
        </p>
        <div>
          <Button size="lg" className="mt-4 gap-2" asChild>
            <a href={DOWNLOAD_URL}>
              <Download className="size-5" />
              Descargar para Windows
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <div className="text-center pb-8">
          <p className="text-muted-foreground text-sm">
            © 2025 Inventia. Sistema de Gestión de Inventario.
          </p>
        </div>
      </div>
    </footer>
  );
}
