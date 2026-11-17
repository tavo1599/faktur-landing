<script setup lang="ts">
import { site } from '../components/landing/data/site'
import LegalShell from '../components/landing/ui/LegalShell.vue'

const actualizado = '3 de noviembre de 2026'
</script>

<template>
  <LegalShell
    titulo="Términos y Condiciones"
    :subtitulo="`Última actualización: ${actualizado}`"
  >
    <p>
      Los presentes Términos y Condiciones (los “Términos”) regulan el acceso y uso de la
      plataforma <strong>{{ site.nombre }}</strong> ({{ site.legal.razonSocial }}, RUC
      {{ site.legal.ruc }}), en adelante “la Plataforma”. Al registrarte, contratar un plan o
      usar el servicio aceptas estos Términos y nuestra Política de Privacidad en su totalidad.
      Si actúas en nombre de una empresa, declaras contar con facultades para obligarla.
    </p>

    <h2>1. Objeto del servicio</h2>
    <p>
      La Plataforma es un software en la nube para la emisión de comprobantes de pago
      electrónicos (facturas, boletas, notas de crédito y débito, guías de remisión) y la
      gestión comercial del negocio del usuario (inventario, ventas, compras, finanzas y
      reportes), conforme a la normativa de la SUNAT. {{ site.nombre }} es una herramienta
      tecnológica y no presta asesoría contable ni tributaria.
    </p>

    <h2>2. Definiciones</h2>
    <ul>
      <li><strong>Usuario / Cliente:</strong> persona natural o jurídica que contrata o usa el servicio.</li>
      <li><strong>Contenido del Usuario:</strong> los datos que el usuario carga o genera en la Plataforma.</li>
      <li><strong>CPE:</strong> comprobante de pago electrónico.</li>
      <li><strong>CDT:</strong> certificado digital usado para firmar los comprobantes.</li>
      <li><strong>SUNAT:</strong> Superintendencia Nacional de Aduanas y de Administración Tributaria.</li>
    </ul>

    <h2>3. Registro, cuenta y credenciales</h2>
    <ul>
      <li>El usuario es responsable de la veracidad y actualización de los datos que proporciona.</li>
      <li>
        El acceso puede realizarse con correo y contraseña o, para usuarios secundarios sin
        correo, con el RUC de la empresa, su documento de identidad (DNI) y contraseña.
      </li>
      <li>
        Las credenciales son personales e intransferibles. El usuario custodia su contraseña y
        es responsable de la actividad realizada desde su cuenta.
      </li>
      <li>
        El administrador de la empresa gestiona a los usuarios secundarios y sus permisos.
      </li>
    </ul>

    <h2>4. Planes, precios, pagos y renovación</h2>
    <ul>
      <li>Existen planes con distintos módulos, cupos y precios, informados antes de contratar.</li>
      <li>Los pagos se facturan por adelantado según la periodicidad elegida (mensual o anual).</li>
      <li>
        Las ofertas vigentes —como el descuento por pago anual— se aplican según las condiciones
        publicadas al momento de la contratación.
      </li>
      <li>
        Los precios pueden actualizarse; los cambios se comunican con anticipación y no afectan
        periodos ya pagados.
      </li>
      <li>La falta de pago oportuno puede derivar en la suspensión del servicio.</li>
    </ul>

    <h2>5. Periodo de prueba</h2>
    <p>
      Podemos ofrecer un periodo de prueba gratuito con fines de evaluación. Al término del
      periodo, el usuario puede contratar un plan; de no hacerlo, el acceso puede limitarse o
      suspenderse.
    </p>

    <h2>6. Certificados digitales (CDT)</h2>
    <p>
      La firma de los comprobantes requiere un certificado digital válido y vigente, sea el
      certificado tributario gratuito que otorga la SUNAT —dentro de sus límites— o uno
      adquirido de una entidad de certificación acreditada ante el INDECOPI. El usuario es
      responsable de su obtención, custodia y renovación. El certificado y su clave se tratan
      como información confidencial.
    </p>

    <h2>7. Facturación electrónica y SUNAT</h2>
    <p>
      La Plataforma facilita la generación y el envío de comprobantes a la SUNAT. El usuario es
      el emisor y único responsable del contenido tributario de sus comprobantes y del
      cumplimiento de sus obligaciones fiscales. No respondemos por indisponibilidad, demoras o
      cambios en los servicios de la SUNAT o de terceros (como los Operadores de Servicios
      Electrónicos).
    </p>

    <h2>8. Uso aceptable</h2>
    <p>El usuario se compromete a usar la Plataforma de forma lícita y de buena fe, y a no:</p>
    <ul>
      <li>emitir comprobantes que no correspondan a operaciones reales ni usarla con fines fraudulentos;</li>
      <li>vulnerar su seguridad o acceder a datos de terceros sin autorización;</li>
      <li>realizar ingeniería inversa, copiar o revender el servicio fuera de lo permitido;</li>
      <li>cargar contenido ilegal, malicioso o que infrinja derechos de terceros.</li>
    </ul>

    <h2>9. Propiedad del contenido y propiedad intelectual</h2>
    <p>
      El Contenido del Usuario es y seguirá siendo de su propiedad; el usuario nos otorga una
      licencia limitada para alojarlo y procesarlo con el fin de prestar el servicio. El
      software, la marca y los contenidos de la Plataforma son propiedad de
      {{ site.legal.razonSocial }} y están protegidos por la normativa de propiedad intelectual.
    </p>

    <h2>10. Disponibilidad, respaldos y soporte</h2>
    <p>
      Realizamos esfuerzos razonables para mantener el servicio disponible y para efectuar
      copias de respaldo periódicas. Pueden existir ventanas de mantenimiento o interrupciones
      por fuerza mayor. El soporte se brinda según el plan contratado.
    </p>

    <h2>11. Seguridad de la información</h2>
    <p>
      Aplicamos medidas técnicas y organizativas razonables para proteger la información de nuestros
      clientes: cifrado de las comunicaciones (HTTPS/TLS), control de accesos por roles y permisos,
      contraseñas cifradas, separación de los datos de cada empresa, registros de auditoría,
      respaldos periódicos y monitoreo del servicio.
    </p>

    <h2>12. Protección de datos personales</h2>
    <p>
      Tratamos los datos personales conforme a la Ley N.° 29733, Ley de Protección de Datos
      Personales, y su Reglamento (D.S. N.° 003-2013-JUS). El detalle está en nuestra
      <RouterLink to="/privacidad">Política de Privacidad</RouterLink>, que forma parte de estos
      Términos.
    </p>

    <h2>13. Limitación de responsabilidad</h2>
    <p>
      El servicio se ofrece conforme a su estado y disponibilidad. En la medida permitida por la
      ley, no respondemos por daños indirectos, lucro cesante, pérdida de datos imputable al
      usuario ni por fallas ajenas a nuestro control. Nada excluye los derechos que la normativa
      de protección al consumidor reconoce al usuario.
    </p>

    <h2>14. Suspensión, cancelación y terminación</h2>
    <p>
      El usuario puede cancelar su suscripción en cualquier momento y exportar su información
      antes de la baja. Podemos suspender o terminar el servicio ante incumplimientos, falta de
      pago o riesgos de seguridad. Tras la baja, y salvo obligación legal de conservación, el
      Contenido del Usuario podrá eliminarse transcurrido un plazo razonable.
    </p>

    <h2>15. Modificaciones</h2>
    <p>
      Podemos actualizar estos Términos. Los cambios se publicarán en esta página con su fecha de
      actualización; el uso continuado del servicio implica su aceptación.
    </p>

    <h2>16. Ley aplicable y solución de controversias</h2>
    <p>
      Estos Términos se rigen por las leyes de la República del Perú. Las relaciones de consumo
      se sujetan al Código de Protección y Defensa del Consumidor (Ley N.° 29571) y a la
      competencia del INDECOPI. Las controversias no resueltas de mutuo acuerdo se someterán a
      los jueces y tribunales que correspondan conforme a ley.
    </p>

    <h2>17. Libro de Reclamaciones</h2>
    <p>
      Ponemos a disposición un
      <RouterLink to="/libro-de-reclamaciones">Libro de Reclamaciones</RouterLink> virtual,
      conforme al Código de Protección y Defensa del Consumidor.
    </p>

    <h2>18. Contacto</h2>
    <p>
      Para cualquier consulta sobre estos Términos, escríbenos a
      <a :href="`mailto:${site.contacto.email}`">{{ site.contacto.email }}</a>.
    </p>

    <p style="margin-top: 28px; font-size: 0.9rem; color: var(--text-soft)">
      Este documento constituye una base completa; recomendamos su revisión por un asesor legal y
      la verificación de los datos de identificación de la empresa antes de su publicación
      definitiva.
    </p>
  </LegalShell>
</template>
