import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingBag,
  TrendingUp,
  Users,
  Building2,
  Settings,
  Lock,
  Zap,
  Database,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Intuitivo",
    description:
      "Visualiza estadísticas generales, productos con stock bajo y movimientos recientes en una interfaz limpia.",
  },
  {
    icon: Package,
    title: "Gestión de Productos",
    description:
      "CRUD completo con categorías, SKU, precios y niveles mínimos de stock. Filtros avanzados de búsqueda.",
  },
  {
    icon: Warehouse,
    title: "Control de Inventario",
    description:
      "Niveles de stock por producto y almacén. Ajustes manuales y actualización automática con órdenes.",
  },
  {
    icon: ShoppingBag,
    title: "Órdenes de Compra",
    description:
      "Crea órdenes a proveedores, márcalas como ordenadas y recibe mercancía actualizando el inventario.",
  },
  {
    icon: TrendingUp,
    title: "Órdenes de Venta",
    description:
      "Gestiona ventas a clientes, confirma órdenes y completa transacciones descontando stock automáticamente.",
  },
  {
    icon: Users,
    title: "Clientes y Proveedores",
    description:
      "Directorio completo con información de contacto, dirección y gestión según permisos de usuario.",
  },
  {
    icon: Building2,
    title: "Múltiples Almacenes",
    description:
      "Administra inventario en diferentes ubicaciones con seguimiento independiente de stock.",
  },
  {
    icon: Settings,
    title: "Configuración Completa",
    description:
      "Gestión de categorías, almacenes y usuarios. Panel de administración según rol.",
  },
  {
    icon: Lock,
    title: "Roles y Permisos",
    description:
      "Sistema de autenticación JWT con tres roles: ADMIN (acceso total), MANAGER (operaciones) y CLERK (lectura).",
  },
  {
    icon: Zap,
    title: "Notificaciones Toast",
    description:
      "Feedback instantáneo con notificaciones elegantes para todas las acciones importantes.",
  },
  {
    icon: Database,
    title: "API REST Completa",
    description:
      "Backend con NestJS y Prisma conectado a PostgreSQL. Cliente API centralizado con manejo de errores.",
  },
  {
    icon: BarChart3,
    title: "Reportes y Filtros",
    description:
      "Filtros avanzados, búsqueda en tiempo real y visualización clara de datos con paginación.",
  },
];

export const AppFeatures = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl tracking-tight md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            Todas las herramientas que necesitas
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Inventia incluye todas las funcionalidades esenciales para gestionar tu inventario de manera profesional
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-background p-5 sm:p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-3 sm:mb-4 inline-flex rounded-lg sm:rounded-xl bg-primary/10 p-2.5 sm:p-3">
                  <Icon className="size-5 sm:size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
