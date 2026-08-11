// Configuración central del sitio: enlaces, contacto y datos legales.
// Edita aquí y se refleja en toda la landing (navbar, hero, precios, footer).
export const site = {
  nombre: 'Faktur',

  // La app vive en un subdominio aparte
  appUrl: 'https://app.faktur.pe',
  loginUrl: 'https://app.faktur.pe/login',

  // Los botones "Prueba gratis / Empieza gratis" llevan al formulario de registro.
  ctaRegistro: '#contacto',

  // Endpoint del backend (api.faktur.pe) que inicia el registro de prueba.
  registroEndpoint: 'https://api.faktur.pe/registro/solicitar',

  contacto: {
    email: 'hola@faktur.pe',
    telefono: '+51 999 999 999',
    whatsapp: 'https://wa.me/51999999999',
    // Número solo dígitos (país+celular) para pre-rellenar el chat de WhatsApp
    whatsappNumero: '51999999999',
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
    ruc: '20XXXXXXXXX',
  },

  // Enlaces de navegación (anclas dentro de la página)
  nav: [
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Módulos', href: '#modulos' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas', href: '#faq' },
  ],
}
