import resultadosInexactos from "../assets/images/resultadosInexactos.png";
import tiemposDeEspera from "../assets/images/tiemposDeEspera.jpg";
import atencionPersonalizada from "../assets/images/atencionPersonalizada.jpg";

const services = [
  {
    title: "Análisis Precisos",
    features: [
      "Tecnología de Vanguardia",
      "Resultados Confiables",
      "Procesos Certificados",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Diagnósticos Confiables",
    features: [
      "Interpretación Profesional",
      "Informes Detallados",
      "Resultados Rápidos",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
  },
  {
    title: "Atención Personalizada",
    features: [
      "Trato Humano y Empático",
      "Asesoramiento Profesional",
      "Seguimiento Continuo",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
  {
    title: "Servicios Especializados",
    features: [
      "Análisis Clínicos Complejos",
      "Pruebas de Alta Complejidad",
      "Estudios Personalizados",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
  },
  {
    title: "Soporte Continuo",
    features: [
      "Atención al Paciente 24/7",
      "Asesoría Médica",
      "Resultados en Línea",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
  },
  {
    title: "Innovación Constante",
    features: [
      "Tecnología de Punta",
      "Investigación y Desarrollo",
      "Actualización Continua",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Resultados Inexactos",
    painPoint:
      "Confías en análisis clínicos, pero los resultados no son precisos o no te dan la claridad que necesitas para tomar decisiones sobre tu salud.",
    agitatepainPoint:
      "Es frustrante recibir resultados poco claros o inconsistentes que no te permiten confiar en tu diagnóstico. Tu salud merece precisión y confiabilidad.",
    solution:
      "En nuestro laboratorio, utilizamos tecnología de vanguardia y procesos rigurosos para garantizar resultados exactos y confiables. Mira nuestro video para conocer cómo trabajamos para cuidar de ti.",
    img: resultadosInexactos, // Asegúrate de cambiar la imagen por una relevante
  },
  {
    title: "Tiempos de Espera Largos",
    painPoint:
      "Necesitas resultados rápidos para tomar decisiones importantes sobre tu salud, pero los laboratorios tardan demasiado en entregarlos.",
    agitatepainPoint:
      "Es estresante esperar días o incluso semanas para recibir tus resultados, especialmente cuando tu salud está en juego. Necesitas respuestas ágiles y eficientes.",
    solution:
      "Ofrecemos resultados en tiempo récord sin comprometer la calidad. Conoce en nuestro video cómo optimizamos nuestros procesos para darte tranquilidad cuando más la necesitas.",
    img: tiemposDeEspera, // Cambia la imagen por una relevante
  },
  {
    title: "Falta de Atención Personalizada",
    painPoint:
      "Te sientes como un número más en otros laboratorios, sin recibir la atención y el cuidado que mereces.",
    agitatepainPoint:
      "Es desalentador sentir que tu salud no es una prioridad. Mereces un trato cercano y profesional que te brinde confianza y seguridad.",
    solution:
      "En nuestro laboratorio, te tratamos como parte de nuestra familia. Nuestro equipo está comprometido a brindarte una atención personalizada y empática. Descubre en nuestro video cómo nos preocupamos por ti.",
    img: atencionPersonalizada, // Cambia la imagen por una relevante
  },
];

const faqs = [
  {
    question: "¿Qué tipos de pruebas de laboratorio ofrecen?",
    answer:
      "Ofrecemos una amplia variedad de pruebas, incluyendo análisis de sangre, pruebas hormonales, estudios microbiológicos, pruebas de COVID-19, perfil lipídico, exámenes de orina, entre otros. Contáctenos para conocer más sobre nuestros servicios.",
  },
  {
    question: "¿Es necesario agendar una cita para realizarme un examen?",
    answer:
      "No siempre es necesario, ya que algunas pruebas pueden realizarse sin cita previa. Sin embargo, recomendamos agendar para exámenes específicos o si desea evitar tiempos de espera.",
  },
  {
    question: "¿Cuánto tiempo tardan los resultados?",
    answer:
      "El tiempo de entrega de los resultados varía según el tipo de prueba. Algunos resultados están disponibles el mismo día, mientras que otros pueden tardar entre 24 y 72 horas. Le proporcionaremos una estimación al momento de su prueba.",
  },
  {
    question: "¿Cómo puedo recibir mis resultados?",
    answer:
      "Puede recibir sus resultados por correo electrónico, en nuestro portal web seguro o retirarlos en nuestras instalaciones. También ofrecemos la opción de envío a domicilio en algunos casos.",
  },
  {
    question: "¿Necesito estar en ayunas para hacerme un análisis?",
    answer:
      "Algunas pruebas, como el perfil lipídico o la glucosa en sangre, requieren ayuno. Si no está seguro, puede consultarnos antes de su cita para recibir instrucciones específicas.",
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer:
      "Sí, trabajamos con varias compañías de seguros. Recomendamos que nos consulte previamente para verificar si su seguro es aceptado y conocer los requisitos de cobertura.",
  },
  {
    question: "¿Ofrecen servicio a domicilio?",
    answer:
      "Sí, contamos con servicio de toma de muestras a domicilio. Puede agendar una visita llamándonos o a través de nuestra página web.",
  },
  {
    question: "¿Puedo hacerme un examen si no tengo orden médica?",
    answer:
      "Algunas pruebas pueden realizarse sin orden médica, pero otras requieren prescripción. Contáctenos y le asesoraremos según su caso.",
  },
  {
    question: "¿Cómo garantizan la precisión de los resultados?",
    answer:
      "Nuestro laboratorio sigue estrictos protocolos de calidad y está certificado por organismos de control. Utilizamos tecnología avanzada y seguimos estándares internacionales para garantizar resultados precisos y confiables.",
  },
  {
    question: "¿Cómo puedo contactar al laboratorio para más información?",
    answer:
      "Puede comunicarse con nosotros a través de nuestro sitio web, por teléfono o visitándonos en nuestras instalaciones. Estaremos encantados de atender sus consultas.",
  },
];

export { services, solutions, faqs };
