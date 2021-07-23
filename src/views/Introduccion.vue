<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.justify-content-between
      .col-md-7
        p En la actualidad es común encontrarse con el término 
          b “ciberseguridad”
          |. Tanto en el mundo laboral como académico, su concepto está centrado en la seguridad de la información y su relación con las infraestructuras de ciberespacio (redes de datos, servicios y servidores telemáticos, dispositivos en la nube etc.). La ciberseguridad es un componente de un ámbito más amplio que es la seguridad de la información.
          br
          br
          |Debido al amplio crecimiento de estas tecnologías, ellas también ofrecen un aspecto poco positivo: permitir conductas delictivas y antisociales; se puede afirmar, entonces, que ahora existen más y nuevas maneras de atentar contra la privacidad y el patrimonio de las personas y las entidades. 
      .col-md-5: img(src="@/assets/curso/img1.jpg")






</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
