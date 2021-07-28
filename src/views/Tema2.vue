<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Prácticas de implementación de la ciberseguridad
    figure.mb-5
      img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')
    p.mb-5 Para asegurar la implementación de la ciberseguridad es importante conocer las industrias que la garantiza; a continuación, podrá conocer algunas entidades estandarizadas: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    #t_2_1.titulo-segundo
      h2 2.1 Normas relacionadas
    p.mb-5 Hay diferentes normas que proporcionan una visión global sobre la ciberseguridad, a continuación, se podrán conocer algunas: 
    .titulo-sexto.color-acento-contenido.bg-white
      h5 Tabla 1 Normas relacionadas con la ciberseguridad
    .tabla-a.color-acento-botones.bg-white.mb-5 
      table.bg-white
        caption Nota. Tomada de ISO/IEC 27032:2012 (2021)
        thead
          tr
            th No.
            th Origen
            th Documento
            th Término
            th Organización
            th CDI
            th Intención
            th Motivación
            th Amenazas
        tbody.bg-white
          tr
            td 01
            td ISO/IEC
              br
              |JTC1/SC27
            td 27032
            td Ciberseguridad
            td ISO
            td SÍ
            td Solo los activos destinados a internet.
            td No diferenciación entre actividades maliciosas o no.
            td Solo los activos virtuales conectados a internet, sin activos físicos.
          tr
            td 02
            td ISO/IEC
              br
              |JTC1/SC27
            td 27000
            td Seguridad de la información
            td ISO
            td SÍ
            td Cualquier origen de riesgo en el espacio cibernético.
            td No diferenciación entre malicioso o no intencional.
            td Cualquier activo.
          tr
            td 03
            td UIT-T
            td X.1205
            td Ciberseguridad
            td UIT
            td No
            td Cualquier origen de riesgo en el espacio cibernético.
            td No diferenciación entre actividades maliciosas o no.
            td Cualquier activo.
          tr
            td 04
            td NIST
            td SP 800-39
            td Ciberseguridad
            td NIST
            td SÍ
            td Riesgo originado exclusivamente en el espacio cibernético.
            td Solo cubre orígenes maliciosos (ataques cibernéticos).
            td Sólo los activos virtuales conectados a internet, sin activos físicos.
          tr
            td 05
            td ISACA
            td Cybersecurity fundamentals
            td Ciberseguridad
            td ISACA
            td SÍ
            td Certificación CSX.
            td Origen malicioso.
            td Activos en el ciberespacio.
    p.mb-5 Atendiendo a lo anterior, la norma ISO/IEC 27032:2020 de Tecnología de la información, técnicas de seguridad y directrices para la ciberseguridad, establece un marco de trabajo enfocado en mejorar su estado, proponiendo diversos puntos estratégicos y técnicos necesarios para esa actividad y sus dependencias con otros dominios de seguridad, en particular, la seguridad de la información, en internet, redes y la protección de infraestructuras críticas de información. A continuación, se podrá observar la estructura de esta norma:
    .row.justify-content-center
      .col-lg-8 
        figure.mb-5
          img(src='@/assets/curso/img7.svg')
    p.mb-5 En particular, este documento da una guía técnica para abordar riesgos comunes de ciberseguridad, tales como ciberprotección en el ciberespacio (ISO/IEC, 2020).
    #t_2_2.titulo-segundo
      h2 2.2 Marcos de referencia
    p.mb-5 Los ciberataques son cada vez más comunes y frecuentes, por ello es clara la necesidad de proteger los recursos y activos. Ahora, la pregunta importante es: ¿cómo empezar? Es ahí donde toman importancia los marcos de referencia que se han venido desarrollando y adoptando; estos suministran información valiosa y útil en el diseño de los procesos de control y mitigación de los riesgos de ciberseguridad.
      br
      br
      |Si bien se debe elegir un marco y trabajar con él, son solo una referencia y no una solución definitiva, porque también es importante el enfoque del análisis de riesgos, pues cada marco propone una serie de controles que se debe elegir de acuerdo con el entorno en que se trabaja y si se llegase a requerir hacer adopción o ajustes de otros marcos de referencia.
      br
      br
      |A continuación, se mencionan los marcos de referencia más utilizados y de mayor desarrollo incluyendo algunos propósitos particulares para su adopción y una breve descripción:
    //- SlyderB.mb-5(:datos="datosSlyder")
    SlyderE
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Marco de ciberseguridad del Instituto Nacional de Estándares y Tecnología
          p Este marco de trabajo fue creado para ayudar a las entidades a conocer, comprender, gestionar y reducir los riesgos seguridad informática para fortalecer la protección de sus redes y datos. Provee un lenguaje común y un compendio de  buenas prácticas de ciberseguridad.<br><br>Este marco se basa en las mejores prácticas de las normas (ISO, ITU, CIS, NIST, entre otros) y realiza una agrupación de ellas según afinidad, centrando sus recomendaciones en las actividades que impulsan de ciberseguridad  a través  de una consideración los riesgos cibernéticos que es fundamental de los procesos de gestión de riesgos de seguridad de la organización.
        .col-md-8
          figure
            img(src='@/assets/curso/img8.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 
          p El Instituto Nacional de Normas y Tecnología (NIST) emplea un lenguaje común, con el que orienta a las entidades para que sean capaces de gestionar y reducir los riesgos de ciberseguridad.
        .col-md-8
          figure
            img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4  ISO / IEC 27001: 2013
          p Fue creada por la Organización Internacional de Normalización (ISO), se ha probado que funciona bien para empresas de todo tipo y dimensión a rededor del mundo. Es el marco de trabajo más conocido e implementado internacionalmente. Su enfoque está en la norma ISO 27001 centrada en la protección de la integridad, disponibilidad y la confidencialidad de la información. El eje de esta propuesta está basado en la gestión de riesgos:  reconocer dónde están y cómo tratarlos metodológicamente.
        .col-md-8
          figure
            img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 COBIT (Objetivos de Control para Información y Tecnologías Relacionadas)
          p Creado por ISACA, que es una organización internacional independiente y enfocada en el gobierno de TI. Este marco de trabajo comparte muchas similitudes con NIST e ISO. Su enfoque principal es el negocio orientado a procesos. COBIT, a menudo, es implementado en entidades públicas y se utiliza como una herramienta de cumplimiento de las normativas legales de gestión de procesos.<br><br>Provee un compendio de mejores prácticas, centradas en el control y supervisión de Tecnologías de la Información. Cuenta con un conjunto de herramienta que se pueden usar como referencia para la gestión de TI, proponiendo elementos como: mapas de auditoría, objetivos de control, herramientas y técnicas para su implementación y gestión.
        .col-md-8
          figure
            img(src='@/assets/curso/img11.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 <i>HITRUST CSF (Health Information Trust Alliance - Cybersecurity Framework)</i>
          p Este marco fue creado por Health Information Trust Alliance (HITRUST) y es usado, principalmente, por la industria de la salud de los Estados Unidos. HITRUST originalmente creó CSF (<i>Cybersecurity Framework</i> – Marco de ciberseguridad) para diferenciar elementos clave y posibles riesgos en entidades de salud, contiene el marco con controles más grande que se aplicarían a cualquier organización. Es, tal vez, el marco de trabajo que se actualiza con más frecuencia.
        .col-md-8
          figure
            img(src='@/assets/curso/img12.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 <i>CSA  Cloud Controls Matrix</i>
          p Es el marco desarrollado por <i>Cloud Security Alliance</i> (CSA) y creado específicamente para los proveedores de servicios en la nube. La estructura del almacenamiento de datos de los servicios nube se enfrenta riesgos propios del entorno que requieren controles de seguridad específicos de la industria, este marco provee una guía en torno a los mismos. La matriz de controles para servicios en la nube es actualizada frecuentemente, haciéndola más atractiva a los proveedores de servicios IT en la nube de cualquier tamaño. También pretender normalizar las expectativas de seguridad, taxonomía y terminología de los servicios en la  nube.
        .col-md-8
          figure
            img(src='@/assets/curso/img13.jpg', alt='Texto que describa la imagen')













</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Marco de ciberseguridad del Instituto Nacional de Estándares y Tecnología',
        texto:
          'Este marco de trabajo fue creado para ayudar a las entidades a conocer, comprender, gestionar y reducir los riesgos seguridad informática para fortalecer la protección de sus redes y datos. Provee un lenguaje común y un compendio de  buenas prácticas de ciberseguridad.<br><br>Este marco se basa en las mejores prácticas de las normas (ISO, ITU, CIS, NIST, entre otros) y realiza una agrupación de ellas según afinidad, centrando sus recomendaciones en las actividades que impulsan de ciberseguridad  a través  de una consideración los riesgos cibernéticos que es fundamental de los procesos de gestión de riesgos de seguridad de la organización.',
        imagen: require('@/assets/curso/img8.jpg'),
      },
      {
        titulo: '',
        texto:
          'El Instituto Nacional de Normas y Tecnología (NIST) emplea un lenguaje común, con el que orienta a las entidades para que sean capaces de gestionar y reducir los riesgos de ciberseguridad.',
        imagen: require('@/assets/curso/img9.svg'),
      },
      {
        titulo: 'ISO / IEC 27001: 2013',
        texto:
          'Fue creada por la Organización Internacional de Normalización (ISO), se ha probado que funciona bien para empresas de todo tipo y dimensión a rededor del mundo. Es el marco de trabajo más conocido e implementado internacionalmente. Su enfoque está en la norma ISO 27001 centrada en la protección de la integridad, disponibilidad y la confidencialidad de la información. El eje de esta propuesta está basado en la gestión de riesgos:  reconocer dónde están y cómo tratarlos metodológicamente.',
        imagen: require('@/assets/curso/img10.svg'),
      },
      {
        titulo:
          'COBIT (Objetivos de Control para Información y Tecnologías Relacionadas)',
        texto:
          'Creado por ISACA, que es una organización internacional independiente y enfocada en el gobierno de TI. Este marco de trabajo comparte muchas similitudes con NIST e ISO. Su enfoque principal es el negocio orientado a procesos. COBIT, a menudo, es implementado en entidades públicas y se utiliza como una herramienta de cumplimiento de las normativas legales de gestión de procesos.<br><br>Provee un compendio de mejores prácticas, centradas en el control y supervisión de Tecnologías de la Información. Cuenta con un conjunto de herramienta que se pueden usar como referencia para la gestión de TI, proponiendo elementos como: mapas de auditoría, objetivos de control, herramientas y técnicas para su implementación y gestión.',
        imagen: require('@/assets/curso/img11.jpg'),
      },
      {
        titulo:
          'HITRUST CSF (Health Information Trust Alliance - Cybersecurity Framework)',
        texto:
          'Este marco fue creado por Health Information Trust Alliance (HITRUST) y es usado, principalmente, por la industria de la salud de los Estados Unidos. HITRUST originalmente creó CSF (Cybersecurity Framework – Marco de ciberseguridad) para diferenciar elementos clave y posibles riesgos en entidades de salud, contiene el marco con controles más grande que se aplicarían a cualquier organización. Es, tal vez, el marco de trabajo que se actualiza con más frecuencia.',
        imagen: require('@/assets/curso/img12.jpg'),
      },
      {
        titulo: 'CSA  Cloud Controls Matrix',
        texto:
          'Es el marco desarrollado por Cloud Security Alliance (CSA) y creado específicamente para los proveedores de servicios en la nube. La estructura del almacenamiento de datos de los servicios nube se enfrenta riesgos propios del entorno que requieren controles de seguridad específicos de la industria, este marco provee una guía en torno a los mismos. La matriz de controles para servicios en la nube es actualizada frecuentemente, haciéndola más atractiva a los proveedores de servicios IT en la nube de cualquier tamaño. También pretender normalizar las expectativas de seguridad, taxonomía y terminología de los servicios en la  nube.',
        imagen: require('@/assets/curso/img13.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
