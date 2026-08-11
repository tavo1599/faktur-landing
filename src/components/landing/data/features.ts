import {
  FileText,
  Store,
  Truck,
  BarChart3,
  Boxes,
  FileSignature,
  ReceiptText,
  MailCheck,
  Landmark,
} from 'lucide-vue-next'
import type { Component } from 'vue'

export interface Feature {
  icon: Component
  title: string
  text: string
  /** Tamaño en el bento: 'lg' ocupa 2 columnas */
  span?: 'lg' | 'md'
}

export const features: Feature[] = [
  {
    icon: FileText,
    title: 'Facturas y boletas',
    text: 'Emite comprobantes electrónicos válidos ante SUNAT en segundos, con envío automático y estado en tiempo real.',
    span: 'lg',
  },
  {
    icon: Store,
    title: 'Punto de venta',
    text: 'Vende al instante con lector de código de barras, Yape/Plin y atajos de teclado.',
    span: 'md',
  },
  {
    icon: Truck,
    title: 'Guías de remisión',
    text: 'Genera tus guías electrónicas de traslado sin salir del sistema.',
    span: 'md',
  },
  {
    icon: BarChart3,
    title: 'Reportes para tu contador',
    text: 'Ventas, compras, IGV y registros PLE listos para exportar a Excel.',
    span: 'md',
  },
  {
    icon: Boxes,
    title: 'Multi-almacén',
    text: 'Controla tu stock por almacén y sucursal, con transferencias entre ellos.',
    span: 'md',
  },
  {
    icon: FileSignature,
    title: 'Cotizaciones',
    text: 'Crea proformas y conviértelas en venta con un clic.',
    span: 'md',
  },
  {
    icon: ReceiptText,
    title: 'Notas de crédito y débito',
    text: 'Corrige o anula comprobantes cumpliendo la normativa vigente.',
    span: 'md',
  },
  {
    icon: MailCheck,
    title: 'Envío por correo',
    text: 'Tus clientes reciben su comprobante en PDF y XML automáticamente.',
    span: 'md',
  },
  {
    icon: Landmark,
    title: 'Detracciones y retenciones',
    text: 'Calcula y aplica detracciones, retenciones y percepciones sin errores.',
    span: 'md',
  },
]
