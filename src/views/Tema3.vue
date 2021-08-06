<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sistema de Gestión de Seguridad Informática (SGSI)
    figure.mb-5
      img(src='@/assets/curso/img14.jpg')
    p.mb-5 Es un conjunto de procesos para implementar o establecer, mantener y mejorar de forma continua la seguridad de la información, bajo un enfoque centrado en los riesgos que pueden afectar la seguridad de la información en la organización (ISO 27001, 2021). La sigla tiene su origen en el inglés “Information Security Management System” (ISMS) y el término SGSI es utilizado principalmente por la ISO/IEC 27001.
      br
      br
      |La ISO/IEC 27001 establece los requerimientos necesarios para definir, implementar, mantener y mejorar un Sistema de Gestión de la Seguridad de la Información (SGSI) según el conocido “Ciclo de Deming”: PDCA – acrónimo de Plan, Do, Check, Act (Planear, Hacer, Verificar, Actuar), siendo de este un enfoque de mejora continua (Firma-e. ,2021):
    .row.mb-5.justify-content-center
      .col-lg-10
        .row.mb-4 
          .col-lg-6
            .tarjeta-avatar-b.mb-4.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img15.svg' alt='AvatarTop')
              .tarjeta.color-primario-claro.d-flex.align-items-center
                .p-4
                  h4 Planificar (plan)
                  p Fase del SGSI centrado en la evaluación de riesgos de seguridad de la información y la selección de controles adecuados.
          .col-lg-6
            .tarjeta-avatar-b.mb-4.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img16.svg' alt='AvatarTop')
              .tarjeta.color-primario-claro.d-flex.align-items-center
                .p-4
                  h4 Hacer (do)
                  p Es la fase que propone la implantación y operación de los controles.
        .row.mb-5 
          .col-lg-6
            .tarjeta-avatar-b.mb-5.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img17.svg' alt='AvatarTop')
              .tarjeta.color-primario-claro.d-flex.align-items-center
                .p-4
                  h4 Verificar (check)
                  p Su objetivo revisar y evaluar el desempeño (eficiencia y eficacia) del SGSI.
          .col-lg-6
            .tarjeta-avatar-b.mb-5.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/img18.svg' alt='AvatarTop')
              .tarjeta.color-primario-claro.d-flex.align-items-center
                .p-4
                  h4 Actuar (act)
                  p Realizar ajustes o cambios de ser necesario para lograr que el SGSI tenga máximo rendimiento.
    #t_3_1.titulo-segundo
      h2 3.1 Requisitos del SGSI
    .row.mb-5.justify-content-between
      .col-lg-6
        p Antes de implantar un SGSI se debe cumplir una fase inicial de análisis requisitos del SGSI para lo cual existe la la norma ISO 27003 que es la guía para establecer el análisis de requisitos, direccionar y orientar el proceso de implementación de la normativa certificable por auditores expertos, definiendo el análisis de requisitos, con los siguientes ítems:
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Definir los requisitos de seguridad de la información para el proceso SGSI.
          li 
            i.fas.fa-check
            | Identificar los activos dentro de los límites de alcance del SGSI.
          li
            ul.lista-ul--color
              li 
                i.fas.fa-circle.fa-xs
                | Procesos / activos clasificación.
              li 
                i.fas.fa-circle.fa-xs
                | Activos identificados.
          li 
            i.fas.fa-check
            | Realizar una evaluación de seguridad de la información..
          li
            ul.lista-ul--color
              li 
                i.fas.fa-circle.fa-xs
                | Estado de seguridad resumida de la organización
        p También se deben establecer las responsabilidades y el compromiso organizacional, de tal manera que permita la aprobación y la consecución de recursos para establecer un SGSI. 
          br
          br
          |Finalmente, propone la revisión del SGSI por parte de la dirección general siguiendo criterios de evaluación, en tal sentido la Norma ISO 27003 establece una clausulas enfocadas a ello.
      .col-lg-5: img(src="@/assets/curso/img19.jpg")
    #t_3_2.titulo-segundo
      h2 3.2 Estructura organizacional del SGSI
    p.mb-5 Antes de seguir con el ciclo Deming, se debe conocer la organización y su contexto como un punto de partida para establecer la aplicabilidad del sistema de gestión de la seguridad de la información; de tal manera que los objetivos de seguridad de la información estén alineados con los del negocio. 
      br
      br
      |Cuando se establece que se implantará un SGSI, se debe crear una estructura institucional para establecer responsabilidades y funciones con el fin de ejecutar todos los procedimientos necesarios en la implantación, ya que si la entidad no provee personal con dedicación exclusiva y otros de tiempo parcial, es imposible que se logre un SGSI eficiente y efectivo.
      br
      br
      |Luego de ello se procede al establecimiento de un SGSI según la normativa ISO/IEC 27002, que define orientaciones y principios para iniciar, implementar, sostener y mejorar los procesos de gestión de la seguridad de la información.
      br
      br
      |En el SGSI los conceptos clave son diseño, implementación y mantenimiento de los procesos para la gestión y accesibilidad eficientemente de la información, pretendiendo acreditar la integridad, confidencialidad y disponibilidad de todos los activos de información, esto se logra minimizando los riesgos de seguridad de la información (Firma-e, 2021).
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-5.mb-4.d-flex
          p.m-auto Como todo proceso de gestión, un SGSI debe seguir siendo eficiente durante un largo tiempo adaptándose a los cambios internos de la organización, así como los externos.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
