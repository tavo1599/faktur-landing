<script setup lang="ts">
import { site } from '../components/landing/data/site'
import LegalShell from '../components/landing/ui/LegalShell.vue'

const actualizado = '3 de noviembre de 2026'
</script>

<template>
  <LegalShell
    titulo="Política de Privacidad"
    :subtitulo="`Última actualización: ${actualizado}`"
  >
    <p>
      Esta Política de Privacidad explica cómo <strong>{{ site.legal.razonSocial }}</strong>
      (RUC {{ site.legal.ruc }}), titular de la plataforma <strong>{{ site.nombre }}</strong>,
      trata los datos personales que se recogen a través de la Plataforma y sus sitios asociados.
    </p>

    <h2>1. Responsable del tratamiento</h2>
    <p>
      {{ site.legal.razonSocial }} es responsable del tratamiento de tus datos personales. Los
      bancos de datos se gestionan conforme a la normativa vigente y, cuando corresponde, se
      registran ante la Autoridad Nacional de Protección de Datos Personales.
    </p>

    <h2>2. Marco legal</h2>
    <ul>
      <li>Constitución Política del Perú (intimidad y autodeterminación informativa).</li>
      <li>Ley N.° 29733, Ley de Protección de Datos Personales, y su Reglamento (D.S. N.° 003-2013-JUS).</li>
      <li>Directivas y resoluciones de la Autoridad Nacional de Protección de Datos Personales (MINJUSDH).</li>
      <li>Ley N.° 27269, de Firmas y Certificados Digitales, para la firma de comprobantes.</li>
      <li>Normativa de la SUNAT sobre emisión electrónica de comprobantes de pago.</li>
    </ul>

    <h2>3. Datos que tratamos</h2>
    <ul>
      <li><strong>De registro y cuenta:</strong> nombres, correo, documento de identidad (DNI), teléfono, cargo y credenciales.</li>
      <li><strong>De la empresa:</strong> razón social, RUC, domicilio fiscal, contacto y, de ser el caso, el certificado digital y su clave.</li>
      <li><strong>De uso y facturación:</strong> plan, pagos, registros de actividad, dirección IP y datos técnicos de conexión.</li>
      <li><strong>Contenido cargado por el usuario:</strong> información de sus clientes, proveedores, productos y comprobantes.</li>
    </ul>

    <h2>4. Finalidades</h2>
    <ul>
      <li>prestar, operar y mantener el servicio y sus módulos;</li>
      <li>gestionar el registro, la autenticación y la seguridad de las cuentas;</li>
      <li>procesar pagos, suscripciones y facturación;</li>
      <li>brindar soporte y enviar avisos operativos y de seguridad;</li>
      <li>cumplir obligaciones legales, tributarias y contables;</li>
      <li>mejorar el servicio y, con tu consentimiento cuando sea exigible, enviarte información comercial.</li>
    </ul>

    <h2>5. Base legal y consentimiento</h2>
    <p>
      El tratamiento se sustenta, según el caso, en la ejecución del contrato, el cumplimiento de
      obligaciones legales, el interés legítimo para la seguridad y mejora del servicio y tu
      consentimiento libre, previo, informado y expreso cuando la ley lo requiera. Puedes retirar
      tu consentimiento en cualquier momento, sin efecto retroactivo.
    </p>

    <h2>6. Datos de terceros: rol de encargado</h2>
    <p>
      Cuando el usuario carga datos personales de sus propios clientes, proveedores o
      trabajadores, el usuario es el responsable de dicho tratamiento y {{ site.nombre }} actúa
      como <strong>encargado</strong>, tratando esos datos solo según las instrucciones del
      usuario y para prestar el servicio. El usuario garantiza contar con legitimación para ello.
    </p>

    <h2>7. Destinatarios y encargados</h2>
    <p>Para operar el servicio, los datos pueden comunicarse a:</p>
    <ul>
      <li>la SUNAT y, cuando corresponda, Operadores de Servicios Electrónicos (OSE);</li>
      <li>proveedores de infraestructura en la nube, correo y pasarelas de pago, como encargados bajo contrato;</li>
      <li>autoridades, ante un mandato legal o requerimiento válido.</li>
    </ul>
    <p>No vendemos datos personales y exigimos a nuestros encargados niveles adecuados de seguridad y confidencialidad.</p>

    <h2>8. Almacenamiento y flujo transfronterizo</h2>
    <p>
      Los datos pueden alojarse en centros de datos dentro o fuera del Perú. En caso de flujo
      transfronterizo, adoptamos las garantías exigidas por la Ley N.° 29733 y su Reglamento.
    </p>

    <h2>9. Plazo de conservación</h2>
    <p>
      Conservamos los datos mientras exista la relación con el usuario y, luego, durante los
      plazos necesarios para atender responsabilidades legales, tributarias y contables. Vencidos
      esos plazos, los datos se eliminan o anonimizan de forma segura.
    </p>

    <h2>10. Medidas de seguridad</h2>
    <p>
      Aplicamos medidas técnicas, organizativas y legales razonables para proteger los datos
      personales que tratamos: cifrado de las comunicaciones (HTTPS/TLS), control de accesos por
      roles y permisos, contraseñas cifradas, separación de los datos de cada empresa, registros de
      auditoría, monitoreo y copias de respaldo.
    </p>

    <h2>11. Tus derechos (ARCO) y cómo ejercerlos</h2>
    <p>
      Puedes ejercer tus derechos de información, acceso, rectificación, cancelación (supresión) y
      oposición, y los demás que reconoce la Ley N.° 29733. Escríbenos a
      <a :href="`mailto:${site.contacto.emailDatos}`">{{ site.contacto.emailDatos }}</a> indicando
      tu solicitud y adjuntando copia de tu documento de identidad. Atenderemos tu pedido en los
      plazos de ley. Si consideras que no fue atendido adecuadamente, puedes acudir a la Autoridad
      Nacional de Protección de Datos Personales.
    </p>

    <h2>12. Cookies y tecnologías similares</h2>
    <p>
      Usamos cookies y tecnologías equivalentes para mantener la sesión, recordar preferencias y
      medir el uso del servicio. Puedes gestionarlas desde tu navegador; deshabilitarlas puede
      afectar algunas funciones.
    </p>

    <h2>13. Menores de edad</h2>
    <p>
      El servicio está dirigido a empresas y personas mayores de edad. No recogemos de forma
      intencional datos de menores sin el consentimiento que exige la ley.
    </p>

    <h2>14. Cambios a esta política</h2>
    <p>
      Podemos actualizar esta Política. Publicaremos la versión vigente en esta página con su
      fecha de actualización y, cuando el cambio sea relevante, lo comunicaremos por los canales
      del servicio.
    </p>

    <h2>15. Contacto</h2>
    <p>
      Para consultas sobre esta Política o el tratamiento de tus datos, escríbenos a
      <a :href="`mailto:${site.contacto.emailDatos}`">{{ site.contacto.emailDatos }}</a>.
    </p>

    <p style="margin-top: 28px; font-size: 0.9rem; color: var(--text-soft)">
      Este documento constituye una base completa; recomendamos su revisión por un asesor legal y
      la verificación de los datos de identificación de la empresa antes de su publicación
      definitiva.
    </p>
  </LegalShell>
</template>
