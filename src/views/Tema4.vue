<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Desarrollo de aplicaciones web seguras
    figure.mb-5
      img(src='@/assets/curso/img20.jpg')
    p.mb-5 Un sistema de información está desarrollado por diversos componentes, servidor web, librerías, Javascript, css, frameworks, una base de datos y muchas más utilidades y de esos componentes pocos son administrados de manera directa. OWASP (Open Web Application Security Project) es un proyecto de código abierto dedicado a determinar y combatir las causas que hacen que el software web sea inseguro. La comunidad OWASP está formada por empresas, organizaciones educativas y particulares de todo el mundo (Wikimedia, 2021). Este ha producido varias guías que funcionan juntas para crear una base de conocimientos en seguridad de aplicaciones:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Referencia de escritorio en seguridad de aplicaciones de OWASP (OWASP Application Security Desk Reference). ")
          p Contiene definiciones básicas y descripciones de todos los principales principios de seguridad, agentes de posibles amenazad u ataques, inventarios de vulnerabilidades, técnicas contramedidas, posibles impactos técnicos en seguridad de aplicaciones. Antes de estudiar otras guías es importante conocer esta, ya que establece las bases de contexto (OWASP, 2028). 
      .row(titulo="Guía de desarrollo de OWASP. ")
          p  Es una guía para desarrolladores de software que abarca los controles de seguridad que se deben usar en el desarrollo de software. Establece un compendio de protecciones “positivas” que los desarrolladores deben proveer a sus aplicaciones. “Aunque hay miles de tipos de vulnerabilidades en software, ellos pueden ser evitadas con un conveniente conjunto de controles de seguridad fuertes” (OWASP, 2028).
      .row(titulo="Guía de pruebas de OWASP. ")
          p Contiene los procedimientos y herramienta para probar la seguridad de las aplicaciones. 
      .row(titulo="Guía de revisión de código de OWASP. ")
          p Cómo verificar las aplicaciones desde el código es usualmente mucho más efectivo que las pruebas de intrusión. 
            b “Tomar juntas las guías de OWAS son un gran inicio para construir y mantener aplicaciones seguras” 
            | (OWASP, 2008). 
    p.mb-5 Mejorar la seguridad de una aplicación web requiere conocimiento técnico en cada tecnología involucrada (servidor web, librerías JavaScript empleadas etc.), una forma de irse introduciendo en este proceso, es haciendo sobre sus propias aplicaciones pruebas OWASP, donde seguramente encontrará vulnerabilidades; de y cada vulnerabilidad encontrada, representará un reto cognitivo, porque debe ampliar la base de sus conocimiento técnico o práctico cuando deba mejorar las forma en que usted desarrolla su aplicación. A continuación, se dará a conocer un instructivo para su identificación: 
    .col-lg-6
      a.anexo(:href="obtenerLink('/downloads/PDF_ ANEXO-CF8_4_Identificacion_Vulnerabilidades_Aplicacion_Web.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p 
            b Anexo.  
            | Conoce sobre la identificación de vulnerabilidades desde una aplicación web.

</template>

<script>
export default {
  name: 'Tema4',
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
