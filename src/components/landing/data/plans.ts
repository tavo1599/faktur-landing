// NOTA: precios de ejemplo (placeholders). Ajusta montos y características aquí.
export interface Plan {
  nombre: string
  precio: string // solo el número, o 'Custom'
  periodo: string
  gancho: string
  caracteristicas: string[]
  cta: string
  destacado?: boolean
  badge?: string
}

export const plans: Plan[] = [
  {
    nombre: 'Gratuito',
    precio: '0',
    periodo: '/mes',
    gancho: 'Para empezar a facturar hoy mismo.',
    caracteristicas: [
      'Hasta 1000 comprobantes al mes',
      'Facturas y boletas electrónicas',
      '1 usuario · 1 almacén',
      'Envío por correo',
      'Soporte por correo',
    ],
    cta: 'Empezar gratis',
  },
  {
    nombre: 'Básico',
    precio: '49',
    periodo: '/mes',
    gancho: 'Para negocios en marcha que venden todos los días.',
    destacado: true,
    badge: 'Más popular',
    caracteristicas: [
      'Comprobantes ilimitados',
      'Punto de venta (POS)',
      'Hasta 5 usuarios · 3 almacenes',
      'Guías de remisión y cotizaciones',
      'Reportes y exportación a Excel',
      'Soporte prioritario',
    ],
    cta: 'Elegir Básico',
  },
  {
    nombre: 'Pro',
    precio: '99',
    periodo: '/mes',
    gancho: 'Para crecer sin límites y con tu contador feliz.',
    caracteristicas: [
      'Todo lo del plan Básico',
      'Usuarios y almacenes ilimitados',
      'Multi-empresa',
      'Registros PLE y reportes avanzados',
      'Detracciones, retenciones y percepciones',
      'Soporte dedicado',
    ],
    cta: 'Elegir Pro',
  },
]
