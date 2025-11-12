import { Download, CheckCircle2, HardDrive, Monitor, Shield, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DOWNLOAD_URL, GITHUB_URL } from "@/consts";

const requirements = [
  "Windows 10 o superior (64-bit)",
  "4GB RAM mínimo (8GB recomendado)",
  "500MB de espacio en disco disponible",
  "Resolución mínima 1280x720",
  "Conexión a internet (backend en la nube)",
];

const features = [
  {
    icon: Shield,
    title: "Autenticación Segura",
    description: "Sistema de login con JWT y gestión de roles (ADMIN, MANAGER, CLERK)",
  },
  {
    icon: Zap,
    title: "Interfaz Rápida",
    description: "Aplicación SPA con navegación fluida y modales para formularios",
  },
  {
    icon: Monitor,
    title: "Diseño Moderno",
    description: "Sidebar oscuro, tarjetas con sombras y diseño responsive",
  },
];

const steps = [
  {
    number: "1",
    title: "Descargar",
    description: "Descarga el instalador .exe desde el botón de abajo",
  },
  {
    number: "2",
    title: "Instalar",
    description: "Ejecuta el archivo descargado y sigue las instrucciones del instalador",
  },
  {
    number: "3",
    title: "¡Listo!",
    description: "Abre Inventia e inicia sesión con tus credenciales",
  },
];

export const DownloadSection = () => {
  return (
    <section id="download" className="py-12 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-2xl sm:text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Descarga e Instalación
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-base sm:text-lg">
            Instala la aplicación en minutos y comienza a gestionar tu inventario
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-8 sm:mt-10 flex justify-center px-4">
          <Button asChild size="lg" className="gap-2 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
            <a href={DOWNLOAD_URL}>
              <Download className="size-5 sm:size-6" />
              <span className="truncate">Descargar Inventia v1.0.0</span>
            </a>
          </Button>
        </div>

        {/* Key Features */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-3 px-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="text-center">
                <div className="mx-auto mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-primary/10">
                  <Icon className="size-7 sm:size-8 text-primary" />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm px-2">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Requirements & Steps */}
        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2 px-4">
          {/* System Requirements */}
          <Card>
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Monitor className="size-5 sm:size-6 text-primary shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Requisitos del Sistema</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 sm:size-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-xs sm:text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Installation Steps */}
          <Card>
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <HardDrive className="size-5 sm:size-6 text-primary shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Pasos de Instalación</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-2 sm:gap-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">{step.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-10 text-center px-4">
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
            <strong>Credenciales de prueba:</strong> admin@local / Admin123! • manager@local / Manager123!
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            El backend está alojado en la nube. ¿Quieres ver el código? Visita el{" "}
            <a href={GITHUB_URL} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              repositorio en GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
