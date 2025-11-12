import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "CRUD completo de productos con categorías",
    image: "/features/triage-card.png",
  },
  {
    title: "Control de órdenes de compra y venta",
    image: "/features/cycle-card.png",
  },
  {
    title: "Dashboard con estadísticas en tiempo real",
    image: "/features/overview-card.png",
  },
];

export const Features = () => {
  return (
    <section id="features" className="pb-16 lg:pb-20">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            CARACTERÍSTICAS PRINCIPALES
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Construido con tecnología moderna
          </h2>
          <p className="text-muted-foreground leading-snug">
            Inventia está desarrollado con Electron, HTML, CSS y JavaScript vanilla. 
            Interfaz limpia y minimalista con autenticación JWT, roles de usuario y 
            actualización automática de inventario.
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20 overflow-hidden shadow-xl">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col group">
                <div className="flex flex-col flex-1">
                  <div className="relative overflow-hidden bg-gradient-to-br from-muted/30 to-muted/50 p-3 md:p-4">
                    <img
                      src={item.image}
                      alt={`${item.title} interface`}
                      className="w-full h-auto rounded-lg shadow-2xl group-hover:scale-[1.02] transition-all duration-500 ease-out"
                    />
                  </div>

                  <div className="p-5 md:p-6 min-h-[100px] flex items-center justify-between gap-3 bg-background group-hover:bg-muted/20 transition-colors duration-300">
                    <h3 className="font-display text-base md:text-lg lg:text-xl leading-snug font-semibold tracking-tight flex-1">
                      {item.title}
                    </h3>
                    <div className="rounded-full border border-primary/20 bg-primary/5 p-2 shrink-0 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
                      <ChevronRight className="size-5 text-primary transition-transform group-hover:translate-x-1 duration-300" />
                    </div>
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
