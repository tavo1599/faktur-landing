// Planes de Faktur. Deben coincidir con el sistema (erp-frontend/src/constants/planes.ts
// y erp-backend/src/common/planes.ts): precios, módulos y límites.
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
    nombre: 'Plan Faktur',
    precio: '30',
    periodo: '/mes',
    gancho: 'Para facturar simple, sin complicarte.',
    caracteristicas: [
      'Facturas, boletas y notas de venta',
      'Notas de crédito y débito',
      'Guías de remisión',
      'Punto de venta (POS)',
      'Productos y stock',
      'Personaliza tu PDF y ticket',
      'Hasta 2 usuarios',
      '1000 comprobantes al mes',
    ],
    cta: 'Probar gratis',
  },
  {
    nombre: 'Plan Básico',
    precio: '50',
    periodo: '/mes',
    gancho: 'Para controlar inventario, compras y caja.',
    destacado: true,
    badge: 'Más popular',
    caracteristicas: [
      'Todo lo del Plan Faktur',
      'Inventario completo: transferencias, pedidos y conteo',
      'Compras, órdenes de compra, gastos y proveedores',
      'Caja y finanzas: cobros, pagos y flujo de caja',
      'Cotizaciones y ventas al crédito',
      'Boletas masivas desde Excel',
      'Reportes de ventas e inventario',
      'Hasta 5 usuarios · 5000 comprobantes al mes',
    ],
    cta: 'Probar gratis',
  },
  {
    nombre: 'Plan ERP',
    precio: '150',
    periodo: '/mes',
    gancho: 'Para tu empresa completa y tu contador.',
    caracteristicas: [
      'Todo lo del Plan Básico',
      'Registros PLE y SIRE',
      'Exportación a tu sistema contable',
      'Tributos y estado de resultados',
      'Retenciones y percepciones',
      'Costeo de importaciones',
      'Auditoría de acciones',
      'Hasta 10 usuarios · comprobantes ilimitados',
    ],
    cta: 'Probar gratis',
  },
]
