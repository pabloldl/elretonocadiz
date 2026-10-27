# El Retoño / Patio adentro

Web local original en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. Sin instalación, compilación, frameworks, servicios de reservas propios ni despliegue. Todos los recursos se sirven localmente. El trabajo se limita a `el-retono/`.

## Fuentes y contenido

Consulta realizada el 27 de octubre de 2026. Los datos publicados proceden de las fichas siguientes; no equivalen a una comprobación presencial ni garantizan disponibilidad futura.

- [Booking, enlace principal](https://www.booking.com/hotel/es/el-retono.es.html): la URL responde con comprobación antirrobots. Se conserva exactamente el enlace solicitado. No se ha podido completar el recorrido de reserva ni verificar una disponibilidad concreta.
- [Booking, versión española de México](https://www.booking.com/hotel/es/el-retono.es-mx.html): contenido indexado accesible en búsqueda, apertura directa también limitada por antirrobots. Confirma apartamento completo, dos dormitorios, un baño con ducha, piscina privada exterior de temporada, patio, terraza, jardín, Wi-Fi, aire acondicionado, cocina equipada, frigorífico, horno, microondas, secador, televisión y barbacoa.
- [Booking, listado de apartamentos](https://www.booking.com/apartments/city/es/prado-del-rey.es.html): incluye El Retoño y la dirección calle los Perales. No se publica número ni coordenada exacta.
- [Hotala, ficha BC-13846007](https://www.hotala.mx/propiedad/el-reto%C3%B1o/BC-13846007): contraste de cuatro huéspedes, dos dormitorios, un baño y piscina de temporada.
- [Google Travel, El Retoño](https://www.google.ie/travel/hotels/entity/CiQI5cbxs7aZ2Kx3EIakoKrEzb_ZwwEaDS9nLzExejZtMzRxZGYQAg?ap=MAA&rp=SAI&ts=CAEaBAoCGgAqBAoAGgA): contraste de lavadora, patio con comedor exterior y equipamiento. La capacidad para cuatro también figura en las variantes españolas de esta ficha.
- [Junta de Andalucía, río Majaceite](https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/r-c3-ado-majaceite/255035): contexto del sendero entre El Bosque y Benamahoma y prohibición de baño. Se invita a comprobar el estado actual antes de salir.

Se omiten superficie de 9 m², número de camas, registro turístico, horarios, valoraciones, distancias, políticas, mascotas, accesibilidad específica, precios y fechas de piscina. Algunos agregadores presentan capacidad o tipo de piscina contradictorios: no se han usado esas descripciones. No se ha inventado teléfono, email, WhatsApp, dominio ni condiciones de reserva.

## Fotografías y permisos

No se ha localizado autorización de reutilización para las fotografías del alojamiento. No se descargan, incrustan ni enlazan directamente sus archivos de Booking. La alternativa gráfica permitida en el encargo está aplicada en portada, piscina y exterior. Son composiciones abstractas CSS identificadas expresamente. La secuencia de estancias tampoco es un plano real. Las fotografías auténticas se consultan mediante enlaces a la ficha de Booking.

**Pendientes para incorporar con permiso del titular:** fotografía principal del patio/apartamento, piscina real, ambos dormitorios, baño, cocina, terraza, jardín y barbacoa. Solicitar originales, autoría y autorización de uso web. Al recibirlos, comprobar qué espacio muestra cada archivo, eliminar metadatos privados y preparar tamaños optimizados. Sustituir los gráficos de las secciones correspondientes sin cambiar los hechos comprobados. No hay archivos vacíos ni referencias rotas esperando esas fotos.

Única fotografía utilizada: `img/majaceite.jpg`, 1600 × 1200, JPEG, aproximadamente 555 KiB. Es el río, no el alojamiento ni sus vistas. [Majaceite P1150025.JPG](https://commons.wikimedia.org/wiki/File:Majaceite_P1150025.JPG), autor El Pantera, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Licencia contrastada en la ficha de Commons mediante búsqueda. Copia local del recurso ya licenciado del proyecto Las Buganvillas, sin modificar ese proyecto. Archivo previamente recomprimido y recorte visual por CSS; la adaptación mantiene CC BY-SA 3.0. Créditos visibles en el desplegable «Fotografías y fuentes». No se usa esta foto en la portada.

Fuentes nuevas para los cuatro alojamientos comparados: Onest y Forum. Descargadas de [Google Fonts / Onest](https://github.com/google/fonts/tree/main/ofl/onest) y [Google Fonts / Forum](https://github.com/google/fonts/tree/main/ofl/forum), bajo SIL Open Font License, copias incluidas en `css/`. Favicon y dibujos CSS creados para este proyecto.

## Diseño y auditoría de originalidad

Se consultaron los HTML de La Leyenda, Las Buganvillas, La Casa del Muro y La Cascada, y sus declaraciones de fuentes. No se copiaron sus componentes ni su código.

| Elemento | Solución de El Retoño |
| --- | --- |
| Header | Dintel centrado con sello de arco y navegación en la franja inferior; sin logo lateral. En móvil se convierte en umbral desplegable. |
| Hero | Composición abstracta autónoma de cal, terracota y agua; nombre y acciones fuera del gráfico. No usa imagen de otro alojamiento. |
| Agua | Estudio de reflejos panorámico con sombra que se desplaza una sola vez. |
| Interior | Secuencia de huecos y pasos de puerta; distribución expresamente no literal. |
| Exterior | Gráfico de sombras y geometrías junto a una relación concreta de espacios. |
| Equipamiento | Inventario con divisiones horizontales, sin tarjetas ni iconos genéricos. |
| Entorno | Ventana curva al río, pie lateral y texto independiente. |
| Botones | Acceso terracota oscuro, sombra desplazada y cambio de profundidad al pasar el puntero. |
| Footer | Pie claro con pieza de arco lateral, dirección y cierre horizontal asimétrico. |
| Móvil | Navegación y orden de acciones propios, secuencia de estancias vertical, inventario compacto y pie reorganizado. |

No usa carruseles, scroll secuestrado, parallax, animaciones continuas ni revelados fade-up. Los únicos movimientos corresponden a apertura, luz y sombras. `prefers-reduced-motion` desactiva todos. No se añaden cookies ni analítica.

## Validación ejecutada

Chrome headless local mediante CDP y servidor HTTP temporal. Resultados y capturas en `.qa/`, carpeta ignorada por Git. Servidor y navegador de pruebas cerrados al terminar.

- 375, 768, 1440 y 1920 px: sin scroll horizontal, título dentro del viewport, imagen decodificada, fuentes cargadas y sin recursos HTTP fallidos.
- Enlaces internos: todos los destinos existen. Menú móvil: apertura, cierre con Escape, restauración de foco y cierre al navegar correctos.
- Desplegables nativos, enlaces externos con `noopener noreferrer`, JSON-LD válido y enlaces de Booking con URL limpia comprobados.
- Sin excepciones JavaScript durante la prueba. Sintaxis de `js/script.js` comprobada con `node --check`.
- Reducción de movimiento y navegación sin JavaScript comprobadas.
- Revisión visual de capturas de portada móvil/escritorio e interior. Botones con tono terracota oscurecido para legibilidad del texto blanco.

**Límites:** no se ejecutó Safari/iPhone real, auditoría con lector de pantalla, validador HTML externo ni reserva completa en Booking. La ficha de Booking requiere verificación antirrobots. No se ha medido Core Web Vitals. No se afirma compatibilidad Safari certificada; se usan HTML nativo y CSS estándar, sin dependencia de hover para funciones esenciales.

SEO: título, descripción, idioma, Open Graph y JSON-LD `LodgingBusiness` limitados a identidad y dirección. Sin valoraciones, coordenadas, ofertas ni imágenes falsas en datos estructurados. La URL canónica y las URLs absolutas de Open Graph deben configurarse cuando exista un dominio real; no se inventan para esta entrega local.

