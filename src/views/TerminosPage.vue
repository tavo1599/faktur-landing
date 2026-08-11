<script setup lang="ts">
import { site } from '../components/landing/data/site'
import LegalShell from '../components/landing/ui/LegalShell.vue'

const actualizado = '30 de julio de 2026'
</script>

<template>
  <LegalShell
    titulo="Términos y Condiciones"
    :subtitulo="`Última actualización: ${actualizado}`"
  >
    <p>
      Los presentes Términos y Condiciones regulan el uso de la plataforma
      <strong>{{ site.nombre }}</strong> ({{ site.legal.razonSocial }}, RUC
      {{ site.legal.ruc }}), en adelante “la Plataforma”. Al registrarte o usar el
      servicio aceptas estos términos en su totalidad.
    </p>

    <h2>1. Objeto del servicio</h2>
    <p>
      La Plataforma es un software en la nube para la emisión de comprobantes de pago
      electrónicos (facturas, boletas, notas de crédito y débito, guías de remisión) y la
      gestión comercial del negocio del usuario, conforme a la normativa de la SUNAT.
    </p>

    <h2>2. Registro y cuenta</h2>
    <ul>
      <li>El usuario es responsable de la veracidad de los datos que proporciona.</li>
      <li>
        Las credenciales de acceso son personales e intransferibles. El usuario es
        responsable de mantener la confidencialidad de su contraseña.
      </li>
      <li>El usuario es responsable de la actividad realizada desde su cuenta.</li>
    </ul>

    <h2>3. Planes, precios y pagos</h2>
    <ul>
      <li>Existen planes gratuitos y de pago con distintas características y límites.</li>
      <li>
        Los precios pueden actualizarse; cualquier cambio se comunicará con anticipación y
        no afectará periodos ya pagados.
      </li>
      <li>La falta de pago puede derivar en la suspensión del servicio.</li>
    </ul>

    <h2>4. Facturación electrónica y SUNAT</h2>
    <p>
      La Plataforma facilita la generación y envío de comprobantes a la SUNAT. El usuario es
      el emisor y único responsable del contenido tributario de sus comprobantes, del uso
      correcto de sus credenciales SOL y del cumplimiento de sus obligaciones fiscales.
    </p>

    <h2>5. Uso aceptable</h2>
    <p>
      El usuario se compromete a no utilizar la Plataforma con fines ilícitos, a no vulnerar
      su seguridad ni a emitir comprobantes que no correspondan a operaciones reales.
    </p>

    <h2>6. Disponibilidad y soporte</h2>
    <p>
      Trabajamos para mantener el servicio disponible de forma continua; no obstante, pueden
      existir interrupciones por mantenimiento o causas de fuerza mayor. El soporte se
      brinda según el plan contratado.
    </p>

    <h2>7. Propiedad intelectual</h2>
    <p>
      El software, la marca y los contenidos de la Plataforma son propiedad de
      {{ site.legal.razonSocial }}. Los datos que el usuario carga siguen siendo de su
      propiedad.
    </p>

    <h2>8. Protección de datos personales</h2>
    <p>
      Tratamos los datos personales conforme a la Ley N.° 29733, Ley de Protección de Datos
      Personales del Perú. El detalle se encuentra en nuestra Política de Privacidad.
    </p>

    <h2>9. Limitación de responsabilidad</h2>
    <p>
      La Plataforma se ofrece “tal cual”. No nos responsabilizamos por daños derivados del
      uso indebido del servicio, de la información ingresada por el usuario o de fallas ajenas
      a nuestro control (por ejemplo, indisponibilidad de los servicios de la SUNAT).
    </p>

    <h2>10. Cancelación</h2>
    <p>
      El usuario puede cancelar su suscripción en cualquier momento. Puede solicitar la
      exportación de su información antes de la baja definitiva de la cuenta.
    </p>

    <h2>11. Modificaciones</h2>
    <p>
      Podemos actualizar estos términos. Los cambios se publicarán en esta página con su
      fecha de actualización.
    </p>

    <h2>12. Ley aplicable y jurisdicción</h2>
    <p>
      Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia
      se someterá a los jueces y tribunales del distrito judicial correspondiente.
    </p>

    <h2>13. Contacto</h2>
    <p>
      Para cualquier consulta sobre estos términos, escríbenos a
      <a :href="`mailto:${site.contacto.email}`">{{ site.contacto.email }}</a>.
    </p>

    <p style="margin-top: 28px; font-size: 0.9rem; color: var(--text-soft)">
      Este documento es una plantilla base y debe ser revisado y adaptado por un asesor legal
      antes de su publicación definitiva.
    </p>
  </LegalShell>
</template>
