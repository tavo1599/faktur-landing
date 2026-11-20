// Configuración central del sitio: enlaces, contacto y datos legales.
// Edita aquí y se refleja en toda la landing (navbar, hero, precios, footer).
export const site = {
  nombre: 'Faktur',

  // La app vive en un subdominio aparte
  appUrl: 'https://app.faktur.pe',
  loginUrl: 'https://app.faktur.pe/login',
  // Consulta pública de comprobantes (descargar boleta/factura por RUC + número).
  consultaUrl: 'https://app.faktur.pe/consulta',

  // Los botones "Prueba gratis / Empieza gratis" llevan al formulario de registro.
  ctaRegistro: '#contacto',

  // Endpoint del backend (api.faktur.pe) que inicia el registro de prueba.
  registroEndpoint: 'https://api.faktur.pe/registro/solicitar',

  // Captura de leads: cada envío del formulario de contacto queda también como
  // contacto en el CRM de Faktur (además del registro de prueba). Best-effort.
  leadsEndpoint: 'https://api.faktur.pe/public/leads',
  // Site-key público anti-spam: debe coincidir con FAKTUR_LEADS_KEY del backend.
  // Vacío = el backend no lo exige (dev). Llénalo en ambos lados para activarlo.
  leadsToken: '',

  contacto: {
    email: 'hola@faktur.pe',
    // Correo para solicitudes de datos personales (derechos ARCO / privacidad).
    emailDatos: 'erpcontable51@gmail.com',
    telefono: '+51 908 909 128',
    whatsapp: 'https://wa.me/51908909128',
    // Número solo dígitos (país+celular) para pre-rellenar el chat de WhatsApp
    whatsappNumero: '51908909128',
    // Endpoint del Libro de Reclamaciones. Si queda vacío, abre el correo con los datos.
    libroEndpoint: '',
  },

  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },

  legal: {
    razonSocial: 'Faktur',
    ruc: '20616581890',
  },

  // Enlaces de navegación (anclas dentro de la página)
  nav: [
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas', href: '#faq' },
  ],
}
