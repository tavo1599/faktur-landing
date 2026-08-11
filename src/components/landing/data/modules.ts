export interface ModuleItem {
  id: 'pos' | 'reportes' | 'panel'
  eyebrow: string
  title: string
  text: string
  points: string[]
}

export const modules: ModuleItem[] = [
  {
    id: 'pos',
    eyebrow: 'Punto de venta',
    title: 'Vende en segundos, no en minutos',
    text: 'Un POS pensado para el mostrador: rápido, con teclado y pensado para no hacer esperar a tu cliente.',
    points: [
      'Lector de código de barras',
      'Cobra con Yape, Plin, tarjeta o efectivo',
      'Cliente “varios” y boleta al instante',
      'Atajos de teclado para vender sin mouse',
    ],
  },
  {
    id: 'reportes',
    eyebrow: 'Reportes',
    title: 'Los números que tu contador necesita',
    text: 'Deja de armar hojas de cálculo a mano. Faktur reúne todo y lo deja listo para exportar.',
    points: [
      'Ventas, compras e IGV por rango de fechas',
      'Registros PLE listos para SUNAT',
      'Rentabilidad y resumen tributario',
      'Exporta a Excel con un clic',
    ],
  },
  {
    id: 'panel',
    eyebrow: 'Panel de control',
    title: 'Todo tu negocio de un vistazo',
    text: 'Entra y entiende cómo va tu negocio hoy: ventas, productos top y stock, sin buscar en mil lados.',
    points: [
      'Dashboard con tus ventas del día',
      'Productos más vendidos y stock bajo',
      'Multi-empresa y multi-almacén',
      'Control de usuarios y permisos',
    ],
  },
]
