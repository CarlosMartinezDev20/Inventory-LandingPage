import {
  Download,
  Package,
  Users,
  ShoppingCart,
  Warehouse,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL } from "@/consts";

const features = [
  {
    title: "Dashboard Completo",
    description: "Visualiza estadísticas, stock bajo y movimientos recientes en tiempo real.",
    icon: Package,
  },
  {
    title: "Gestión de Relaciones",
    description: "Administra clientes y proveedores con directorio completo.",
    icon: Users,
  },
  {
    title: "Órdenes Inteligentes",
    description: "Controla compras y ventas con actualización automática de inventario.",
    icon: ShoppingCart,
  },
  {
    title: "Multi-Almacén",
    description: "Gestiona niveles de stock en múltiples ubicaciones.",
    icon: Warehouse,
  },
];

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-0">
      <div className="container flex flex-col justify-between gap-6 sm:gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl sm:text-4xl tracking-tight md:text-4xl lg:text-5xl">
            Inventia
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl mt-4 sm:mt-5 md:text-2xl lg:text-3xl">
            Sistema profesional de gestión de inventario construido con Electron. Control total de productos, órdenes, clientes y proveedores.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <a href={DOWNLOAD_URL}>
                <Download className="size-5" />
                Descargar para Windows
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md w-full sm:w-auto"
              asChild
            >
              <a
                href="#features"
                className="truncate text-start md:max-w-none py-3"
              >
                Ver características
              </a>
            </Button>
          </div>
          
          <div className="mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            <p>✓ Gratis y Open Source • ✓ Windows 10/11 • ✓ Interfaz moderna con Electron</p>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-4 sm:space-y-5 pt-6 sm:pt-8 lg:pt-0 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2 sm:gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-0.5 sm:mt-1 size-4 sm:size-5 shrink-0" />
                <div>
                  <h2 className="font-text text-foreground font-semibold text-sm sm:text-base">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 max-lg:ml-0 sm:max-lg:ml-6 max-lg:h-[400px] sm:max-lg:h-[550px] max-lg:overflow-hidden lg:container">
        <div className="relative h-[400px] sm:h-[600px] lg:h-[793px] w-full">
          <img
            src="/hero.webp"
            alt="Inventia - Interfaz principal del sistema de gestión de inventario"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tl-2xl sm:max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
