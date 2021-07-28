export default {
  global: {
    componenteFormativo: 'Ciberseguridad',
    descripcionCurso:
      'Cada vez las entidades tienen más conciencia de implementar procesos y herramientas para proteger la información que procesan y generan a través de los computadores, servidores dispositivos móviles, redes y sistemas electrónicos. De lo anterior, se encarga el área de la ciberseguridad o seguridad de tecnologías de la información. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La ciberseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prácticas de implementación de la ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normas relacionadas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Marcos de referencia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistema de Gestión de Seguridad Informática (SGSI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Requisitos del SGSI',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estructura organizacional del SGSI',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo de aplicaciones web seguras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Calder, A. (2018). NIST Cybersecurity Framework: una guía de bolsillo. IT Governance Publishing Ltd.',
      link: '',
    },
    {
      referencia:
        'Cano, J. (2011). Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global. Sistemas (Asociacion Colombiana de Ingenieros de Sistemas), 119, 4-7.',
      link: '',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2020). Open Web Application Security. ',
      link:
        'https://es.wikipedia.org/w/index.php?title=Open_Web_Application_Security_Project&oldid=126356791 ',
    },
    {
      referencia:
        'Colaboradores de los proyectos Wikimedia. (2021). Comité consultivo internacional telegráfico y telefónico. ',
      link:
        'https://es.wikipedia.org/w/index.php?title=Comit%C3%A9_Consultivo_Internacional_Telegr%C3%A1fico_y_Telef%C3%B3nico&oldid=132814371 ',
    },
    {
      referencia:
        'Firma-e. (2021). ¿Qué es un SGSI – Sistema de Gestión de Seguridad de la Información? ',
      link:
        'https://www.firma-e.com/blog/que-es-un-sgsi-sistema-de-gestion-de-seguridad-de-la-informacion ',
    },
    {
      referencia:
        'ISO 27001. (2021). Certificado ISO 27001 punto por punto - Presupuesto online.',
      link: 'https://normaiso27001.es ',
    },
    {
      referencia:
        'ISO/IEC 27032:2012. (2021). Gestión de la Ciberseguridad según el ISO/IEC 27032:2012 ',
      link:
        'https://www.linkedin.com/pulse/gesti%C3%B3n-de-la-ciberseguridad-seg%C3%BAn-el-isoiec-gianncarlo-g%C3%B3mez-morales',
    },
    {
      referencia:
        'ISO/IEC. (2020). Tecnologías de la información. Técnicas de seguridad. Directrices para ciberseguridad (Num. 27032). ',
      link:
        'https://tienda.icontec.org/gp-tecnologias-de-la-informacion-tecnicas-de-seguridad-directrices-para-ciberseguridad-gtc-iso-iec27032-2020.html',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas de España (2012). Magerit v.3: Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.',
      link:
        'https://www.ccn-cert.cni.es/documentos-publicos/1789-magerit-libro-i-metodo/file.html',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (s.f.). Seguridad 7”A”Metodología NIST SP 800-30.',
      link: 'http://seguridades7a.blogspot.com/p/nist-sp-800-30.html',
    },
    {
      referencia:
        'NIST. (2018). Framework for Improving Critical Infrastructure Cybersecurity. ',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf',
    },
    {
      referencia: 'OWASP. (2028). Guía de pruebas OWASP.',
      link:
        'https://owasp.org/www-pdf-archive/Gu%C3%ADa_de_pruebas_de_OWASP_ver_3.0.pdf ',
    },
    {
      referencia:
        'Soriano, M. (2014). Seguridad en redes y seguridad de la información. ',
      link:
        'https://es.scribd.com/document/373953890/Seguridad-de-Red-e-Informacion-pdf',
    },
    {
      referencia: 'Wikimedia. (2019). ISACA.',
      link: 'https://es.wikipedia.org/w/index.php?title=ISACA&oldid=117464939',
    },
    {
      referencia:
        'Wikimedia. (2021). Instituto Nacional de Estándares y Tecnología.',
      link:
        'https://es.wikipedia.org/w/index.php?title=Instituto_Nacional_de_Est%C3%A1ndares_y_Tecnolog%C3%ADa&oldid=134157877 ',
    },
    {
      referencia:
        'Wikimedia. (2021). Organización Internacional de Normalización.',
      link:
        'https://es.wikipedia.org/w/index.php?title=Organizaci%C3%B3n_Internacional_de_Normalizaci%C3%B3n&oldid=134718068',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'el término de activo de información se relaciona con todos esos elementos tecnológicos o relacionados con la tecnología que la organización utiliza para el cumplimiento de sus metas o core del negocio. Según la norma ISO/IEC 27001 se entiende como activo todo aquello que es importante y que la organización valora por lo tanto debe de protegerse.',
    },
    {
      termino: 'Amenaza',
      significado:
        'cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico. Esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza.',
    },
    {
      termino: 'SGSI',
      significado: 'Sistema de Gestión de Seguridad de la Información. ',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad o fallo en un sistema de información que pone en riesgo la seguridad de la información pudiendo permitir que un atacante pueda comprometer la integridad, disponibilidad o confidencialidad de esta.',
    },
  ],
  complementario: [
    {
      texto: 'Fundación OWASP, sf, Proyecto destacado: OWASP Top 10',
      tipo: 'Página web',
      link: 'https://owasp.org/ ',
    },
    {
      texto: 'Fundación OWASP, sf, Archivos de proyectos. ',
      tipo: 'Proyectos',
      link: 'https://owasp.org/www-pdf-archive/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Peter Emerson Pinchao',
        cargo: 'Experto Tematico',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
