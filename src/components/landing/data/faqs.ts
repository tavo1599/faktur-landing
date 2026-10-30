export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: '¿Los comprobantes son válidos ante SUNAT?',
    a: 'Sí. Faktur genera facturas, boletas, notas y guías bajo el estándar UBL 2.1 y las envía a SUNAT, devolviéndote el CDR de aceptación. Todo con plena validez tributaria.',
  },
  {
    q: '¿Necesito un certificado digital para empezar?',
    a: 'Para el ambiente de pruebas no necesitas nada. Para producción usas tu certificado y tus credenciales SOL; te guiamos paso a paso en la configuración.',
  },
  {
    q: '¿Puedo emitir desde mi celular o tablet?',
    a: 'Claro. Faktur funciona en la nube y se adapta a cualquier pantalla, así que emites desde tu computadora, laptop, tablet o teléfono.',
  },
  {
    q: '¿Puedo migrar mis productos y clientes actuales?',
    a: 'Sí, puedes importar tu catálogo de productos y tu lista de clientes para no empezar de cero.',
  },
  {
    q: '¿Qué pasa si supero el límite de mi plan?',
    a: 'El Plan Faktur incluye 1000 comprobantes al mes, el Básico 5000 y el ERP es ilimitado. Si llegas al límite, subes de plan en cualquier momento sin perder tu información.',
  },
  {
    q: '¿Cuántas sucursales puedo tener?',
    a: 'Las que necesites: las sucursales no tienen costo adicional en ningún plan. Cada una con sus series y su stock.',
  },
  {
    q: '¿Ofrecen soporte?',
    a: 'Sí. Todos los planes incluyen soporte y actualizaciones para resolver tus dudas rápido.',
  },
]
