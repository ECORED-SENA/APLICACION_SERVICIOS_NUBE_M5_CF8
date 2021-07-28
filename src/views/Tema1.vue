<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La ciberseguridad
    p.mb-5 La ciberseguridad comprende las herramientas, conceptos, protocolos de seguridad, políticas directrices, métodos de análisis y gestión de riesgos, acompañados de acciones, planes formación, ejecución de buenas prácticas técnicas y tecnologías que se emplean para proteger los activos de información de la organización y su relación con el ciberentorno. Entendiendo los activos de la organización como los dispositivos informáticos conectados, los servicios y/o aplicaciones, los sistemas de telecomunicaciones, los usuarios, y en general toda la información transmitida o almacenada en el ciberentorno o en sistemas locales. Así, la ciberseguridad se encarga de garantizar se acrediten propiedades de seguridad para todos los activos de información de la organización y los usuarios contra los riesgos de seguridad correspondientes en el ciberentorno (Cano, 2011).
      br
      br
      |Protegerse de los peligros en el escenario actual, conduce a diseñar y adoptar una serie de procesos que posibiliten la protección de los activos, recursos e información y para ello se recomienda la aplicación de las siguientes fases:
    .row.mb-5.justify-content-center
      .col-lg-12
        .tarjeta-icono.color-primario-claro.d-flex.align-items-center.mb-4
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2.d-lg-block.d-md-none.d-sm-none.d-xs-none
              .tarjeta-icono__imagen.d-md-none.d-lg-block: img(src="@/assets/curso/img2.svg" )
            .col-lg-10
              .tarjeta-icono__texto.p-3
                h4 Prevención
                p.mb-0 Para disminuir los riesgos se debe actuar de manera temprana, esto implica conocer los activos o recursos tecnológicos utilizados para el análisis de posibles amenazas cibernéticas.
        .tarjeta-icono.color-acento-contenido-claro.d-flex.align-items-center.mb-4
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2.d-lg-block.d-md-none.d-sm-none.d-xs-none
              .tarjeta-icono__imagen.d-md-none.d-lg-block: img(src="@/assets/curso/img3.svg" )
            .col-lg-10
              .tarjeta-icono__texto.p-3
                h4 Localización
                p.mb-0 Se debe implementar una serie de herramientas tecnológicas, que permitan la localización de los posibles incidentes, en las que se visibilice su localización y afectación. Esto implica, además, el monitoreo constante de los recursos tecnológicos.
        .tarjeta-icono.color-secundario-claro.d-flex.align-items-center.mb-4
          .row.d-flex.align-items-center.justify-content-center
            .col-lg-2.d-lg-block.d-md-none.d-sm-none.d-xs-none
              .tarjeta-icono__imagen.d-md-none.d-lg-block: img(src="@/assets/curso/img4.svg" style="width: 295px" )
            .col-lg-10
              .tarjeta-icono__texto.p-3
                h4 Reacción
                p.mb-0.pe-lg-5.me-lg-5.pe-md-0.me-md-0 Al detectarse una posible amenaza se debe realizar una reacción inmediata que permita su mitigación.
    p.mb-5 Al evidenciarse una amenaza cibernética es importante seguir los siguientes pasos: 
    .row.justify-content-between.d-flex.align-items-center
      .col-lg-5
        hr
        .lista-numeral.d-flex.align-items-center.justify-content-componenteFormativo
          .row.align-items-center.d-flex
            .col-2
              .lista-numeral__numero.color-acento-contenido.text-white.rounded-circle.p-3.d-flex
                h2.m-auto.mb-0 1
            .col-10
              .lista-numeral__texto
                p.mb-0 Desconectar los activos de la red que están siendo afectados.
        hr
        .lista-numeral.d-flex.align-items-center.justify-content-componenteFormativo
          .row.align-items-center.d-flex
            .col-2
              .lista-numeral__numero.color-acento-contenido.text-white.rounded-circle.p-3.d-flex
                h2.m-auto.mb-0 2
            .col-10
              .lista-numeral__texto
                p.mb-0 Actualizar los sistemas de protección implementados como antivirus, <i>antimalware</i>, <i>antispyware</i>, entre otras estrategias.
        hr
        .lista-numeral.d-flex.align-items-center.justify-content-componenteFormativo
          .row.align-items-center.d-flex
            .col-2
              .lista-numeral__numero.color-acento-contenido.text-white.rounded-circle.p-3.d-flex
                h2.m-auto.mb-0 3
            .col-10
              .lista-numeral__texto
                p.mb-0 Realizar un análisis exhaustivo sobre los sistemas o servicios afectados a fin de detectar el origen y afectación.
        
        hr
        .lista-numeral.d-flex.align-items-center.justify-content-componenteFormativo
          .row.align-items-center.d-flex
            .col-2
              .lista-numeral__numero.color-acento-contenido.text-white.rounded-circle.p-3.d-flex
                h2.m-auto.mb-0 4
            .col-10
              .lista-numeral__texto
                p.mb-0.ps-lg-4.ps-md-5.ps-sm-3 Cambiar todas las contraseñas.
        hr
        .lista-numeral.d-flex.align-items-center.justify-content-componenteFormativo
          .row.align-items-center.d-flex
            .col-2
              .lista-numeral__numero.color-acento-contenido.text-white.rounded-circle.p-3.d-flex
                h2.m-auto.mb-0 5
            .col-10
              .lista-numeral__texto
                p.mb-0 Realizar una limpieza profunda de los recursos tecnológicos con las herramientas con que cuente la organización.
        hr
      .col-lg-6: img(src="@/assets/curso/img5.svg")  







</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped>
.tarjeta-icono
  border-radius: 20px
.lista-numeral
  &__numero
    transition: background-color (0.2s),  transform (0.2s)
    width: 60px
    height: 60px
    &:hover
      background-color: $color-primario
      transform: scale(1.1)
</style>
