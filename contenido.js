/* =========================================================
   CONTENIDO DE LA APP "SIN GLUTEN, CON GUSTO"
   Para sumar contenido nuevo: se edita este archivo y se sube
   a GitHub. La app lo toma sola la próxima vez que se abre.
   ========================================================= */
window.CONTENIDO = {};

/* ---------- NOVEDADES (la campanita) ----------
   Para avisar algo nuevo, agregá un bloque ARRIBA de todo,
   con un id distinto. La campanita se enciende sola. */
CONTENIDO.novedades = [
  {
    id: 'n-2026-10-bienvenida',
    fecha: '2026-10-06',
    titulo: 'Bienvenida a tu app',
    texto: 'Acá vas a ver cada contenido nuevo que se sume: recetas, menús y respuestas a las dudas más frecuentes. Cuando haya algo nuevo, la campanita de arriba se enciende.'
  }
];

/* ---------- TARJETA DEL DÍA ---------- */
CONTENIDO.tarjetas = [
  'Ante la duda, no. Si no estás segura de que algo es apto, esperá a confirmarlo.',
  'Tu tostadora, tu colador y tu tabla: tres cosas que conviene tener solo para vos.',
  'El calor no destruye el gluten. Cocinar algo contaminado no lo vuelve apto.',
  'Lo más fácil y barato es la comida natural: carne, huevo, verduras, frutas, papa y arroz son aptos de por sí.',
  'Revisá la etiqueta aunque sea tu marca de siempre: las recetas cambian.',
  '¿Cocinás para todos? Hacé primero lo sin TACC y tapalo antes de seguir con lo demás.',
  'Llevá siempre algo apto en la cartera. El hambre apurada es mala consejera.',
  'Frascos de dulce y manteca propios, con etiqueta. Un cuchillo con migas alcanza para contaminarlos.',
  'Los padres, hijos y hermanos de una persona celíaca deberían estudiarse, aunque no tengan síntomas.',
  'Antes de ir a comer afuera, llamá y preguntá cómo preparan lo sin TACC.',
  'Sin gluten no siempre es más sano: un alfajor sin TACC sigue siendo un alfajor.',
  'Legumbres con sello, frutas con cáscara y verduras: tus aliadas contra la constipación.',
  'Tus controles médicos importan aunque te sientas bien.',
  'Nunca uses el agua en la que se hirvieron fideos comunes.',
  '¿Asado? Que tus cortes vayan a una parte limpia de la parrilla o sobre papel aluminio.',
  'Si te glutenizaste sin querer, anotalo en tu diario: te ayuda a descubrir de dónde vino.',
  'En el horno, lo tuyo arriba y en bandeja propia, así no le caen migas.',
  'Preguntar cómo está hecho un plato no es molestar. Es cuidarte.',
  'En Argentina la avena no es apta. En otros países, solo la certificada y con el visto bueno de tu médico.',
  'Cociná de más y congelá en porciones: es tu comida rápida sin TACC.',
  'La harina común queda flotando en el aire. Si en casa se amasa con harina común, que sea lejos de tus cosas.',
  'El chipá es sin gluten de nacimiento: fécula de mandioca, queso y huevo.',
  'Las especias molidas pueden tener gluten. Compralas con sello.',
  'En un cumpleaños, servite primero, antes de que las fuentes se mezclen.',
  'Un poquito sí hace daño, aunque no lo sientas. El intestino lo registra igual.',
  'Con la dieta, muchas personas notan cambios en pocas semanas. El intestino tarda más: tenele paciencia.',
  'La celiaquía no se contagia. Tiene una base genética.',
  'Compartí lo que aprendés con tu familia: cuanto más sepan, más fácil te va a resultar.',
  'En el trabajo, vianda en recipiente identificado y cubiertos propios.',
  'Hoy elegí una receta nueva de la app y animate a probarla.',
  'Lo que sí podés comer es muchísimo. Empezá la lista por ahí.'
];

/* ---------- SEMÁFORO "¿PUEDO COMER...?" ----------
   Formato: [nombre, estado, explicación, otras palabras de búsqueda]
   estado: 'si' = apto | 'ojo' = solo con sello o casero | 'no' = tiene gluten */
CONTENIDO.semaforo = [
  /* VERDE */
  ['Carne vacuna fresca', 'si', 'Apta si es fresca y sin condimentar. Las carnes marinadas o adobadas, solo con sello.', 'carne|bife|asado|vacio|nalga|peceto|carne picada|res'],
  ['Pollo fresco', 'si', 'Apto fresco. Los pollos rellenos, rebozados o saborizados, solo con sello.', 'pollo|pechuga|muslo|gallina'],
  ['Cerdo fresco', 'si', 'Apto fresco y sin adobos.', 'cerdo|bondiola|chancho|matambre'],
  ['Pescados y mariscos frescos', 'si', 'Aptos frescos. Rebozados o en salsa, solo con sello.', 'pescado|merluza|salmon|mariscos|langostinos|camarones'],
  ['Huevo', 'si', 'Apto. Es una gran base para tus comidas.', 'huevos|huevo duro'],
  ['Leche fluida', 'si', 'La leche común es apta. Las chocolatadas y saborizadas, solo con sello.', 'leche'],
  ['Frutas frescas', 'si', 'Todas las frutas frescas son aptas.', 'fruta|frutas|manzana|banana|naranja|mandarina|pera|frutilla|frutillas|durazno|uva|kiwi|anana|pina|platano|fresa|limon'],
  ['Verduras frescas', 'si', 'Todas las verduras frescas son aptas.', 'verdura|verduras|lechuga|tomate|zanahoria|cebolla|zapallito|espinaca|acelga|brocoli|berenjena|morron|pimiento|ajo'],
  ['Papa', 'si', 'Apta. Las papas fritas congeladas o de paquete, solo con sello.', 'papa|papas|patata'],
  ['Batata', 'si', 'Apta.', 'batata|camote|boniato'],
  ['Mandioca', 'si', 'Apta fresca. La fécula de mandioca envasada, con sello.', 'mandioca|yuca'],
  ['Zapallo y calabaza', 'si', 'Aptos.', 'zapallo|calabaza|anco|calabacin'],
  ['Palta', 'si', 'Apta.', 'palta|aguacate'],
  ['Choclo fresco', 'si', 'El choclo fresco es apto. En lata o congelado, solo con sello.', 'choclo|elote|mazorca|maiz dulce|maiz'],
  ['Arroz', 'si', 'El arroz no tiene gluten. Elegilo envasado y, si podés, con sello. Los arroces saborizados, siempre con sello.', 'arroz|arroz blanco|arroz integral'],
  ['Aceite', 'si', 'Los aceites puros son aptos. Si freís, que el aceite sea solo para lo tuyo.', 'aceite|aceite de oliva|oliva|girasol'],
  ['Manteca', 'si', 'Apta, pero en pan de manteca propio: un cuchillo con migas la contamina.', 'manteca|mantequilla'],
  ['Azúcar común', 'si', 'El azúcar común es apta.', 'azucar|azucar comun'],
  ['Miel pura', 'si', 'Apta si es pura.', 'miel'],
  ['Agua y soda', 'si', 'Aptas.', 'agua|soda'],
  ['Vino', 'si', 'El vino es apto.', 'vino|vino tinto|vino blanco'],
  ['Café de grano o molido', 'si', 'El café puro es apto. Los saborizados o con agregados, solo con sello.', 'cafe'],
  ['Frutos secos con cáscara', 'si', 'Naturales y con cáscara son aptos. Pelados, tostados o salados, solo con sello.', 'nueces|almendras|frutos secos|castanas|avellanas|pistachos'],
  ['Arvejas y chauchas frescas', 'si', 'Frescas son aptas. En lata o congeladas, con sello.', 'arvejas|chauchas|habas|guisantes|ejotes'],

  /* AMARILLO */
  ['Lentejas, garbanzos y porotos secos', 'ojo', 'No tienen gluten, pero suelen contaminarse con trigo en el campo o al envasarse. Compralos con sello y revisalos antes de cocinar.', 'lentejas|garbanzos|porotos|frijoles|legumbres'],
  ['Quinoa', 'ojo', 'No tiene gluten, pero se contamina fácil. Solo con sello.', 'quinoa|quinua'],
  ['Amaranto', 'ojo', 'No tiene gluten. Solo con sello, por la contaminación.', 'amaranto'],
  ['Trigo sarraceno', 'ojo', 'A pesar del nombre, no es trigo y no tiene gluten. Solo con sello.', 'trigo sarraceno|alforfon'],
  ['Harina de maíz y polenta', 'ojo', 'El maíz es apto, pero la harina se puede contaminar en el molino. Solo con sello.', 'polenta|harina de maiz|harina de maiz precocida|semola de maiz|arepa'],
  ['Almidón de maíz', 'ojo', 'Apto con sello.', 'almidon de maiz|maicena|fecula de maiz'],
  ['Fécula de mandioca', 'ojo', 'Apta con sello. Es la base del chipá.', 'fecula de mandioca|almidon de mandioca|tapioca'],
  ['Harina de arroz', 'ojo', 'Apta con sello.', 'harina de arroz'],
  ['Premezcla', 'ojo', 'Solo las que tienen sello. Es tu reemplazo de la harina común.', 'premezcla|harina sin tacc|harina sin gluten'],
  ['Semillas', 'ojo', 'Chía, lino, girasol o sésamo no tienen gluten, pero se contaminan. Con sello.', 'chia|lino|sesamo|semillas'],
  ['Yerba mate', 'ojo', 'Elegí yerba con sello. La compuesta o saborizada, siempre con sello.', 'yerba|mate|yerba mate|mate cocido'],
  ['Té e infusiones', 'ojo', 'El té común en general es apto. Los saborizados y las mezclas, con sello.', 'te|infusion|infusiones|manzanilla|saquitos'],
  ['Cacao y chocolatada en polvo', 'ojo', 'Solo con sello.', 'cacao|chocolatada|cacao en polvo'],
  ['Café instantáneo', 'ojo', 'Solo con sello.', 'cafe instantaneo|cafe soluble'],
  ['Yogur', 'ojo', 'Los naturales suelen ser aptos. Los saborizados, con cereales o con trocitos, solo con sello.', 'yogur|yogurt|yoghurt'],
  ['Quesos', 'ojo', 'Muchos quesos son aptos, pero los rallados, untables y fundidos, solo con sello.', 'queso|quesos|queso rallado|queso crema|queso untable|ricota|muzzarella|mozzarella'],
  ['Crema de leche', 'ojo', 'Con sello.', 'crema|crema de leche|nata'],
  ['Dulce de leche', 'ojo', 'Con sello, y en frasco propio, sin cucharas con migas.', 'dulce de leche|cajeta|arequipe'],
  ['Mermelada', 'ojo', 'Con sello y en frasco propio.', 'mermelada|jalea|confitura'],
  ['Helado', 'ojo', 'Solo sabores con sello y en lugares que cuiden la contaminación. El cucurucho y la cuchara compartida son el riesgo: pedilo en vasito.', 'helado|helados'],
  ['Chocolate', 'ojo', 'Muchos tienen gluten o trazas. Solo con sello.', 'chocolate|bombones'],
  ['Golosinas', 'ojo', 'Solo con sello.', 'golosinas|caramelos|chicles|gomitas|chupetin'],
  ['Gaseosas y jugos', 'ojo', 'La mayoría son aptas, pero revisá el sello o el listado oficial, sobre todo en jugos en polvo.', 'gaseosa|gaseosas|jugo|jugos|refresco|jugo en polvo'],
  ['Fiambres', 'ojo', 'Pueden llevar gluten como relleno. Solo con sello.', 'fiambre|fiambres|jamon|jamon cocido|salame|mortadela'],
  ['Salchichas y embutidos', 'ojo', 'Muchos llevan gluten. Solo con sello.', 'salchicha|salchichas|chorizo|morcilla|embutidos|panchos'],
  ['Hamburguesas compradas', 'ojo', 'Las industriales pueden llevar gluten. Solo con sello, o hacelas caseras.', 'hamburguesa|hamburguesas|medallones'],
  ['Caldos y sopas instantáneas', 'ojo', 'Muchos tienen gluten. Solo con sello.', 'caldo|caldos|cubito|sopa instantanea|sopas'],
  ['Especias y condimentos molidos', 'ojo', 'Los molidos pueden tener harina o contaminarse. Con sello.', 'especias|condimentos|pimenton|oregano|comino|nuez moscada|pimienta|curry|aji molido'],
  ['Mayonesa, ketchup y mostaza', 'ojo', 'Solo con sello.', 'mayonesa|ketchup|mostaza|aderezo|aderezos|salsa golf'],
  ['Salsa de tomate envasada', 'ojo', 'Con sello.', 'salsa de tomate|pure de tomate|tomate triturado'],
  ['Polvo de hornear y levadura', 'ojo', 'Con sello.', 'polvo de hornear|levadura|bicarbonato'],
  ['Gelatina y postres en polvo', 'ojo', 'Con sello.', 'gelatina|flan|postre|postres'],
  ['Copos de maíz', 'ojo', 'Muchos tienen extracto de malta, que tiene gluten. Solo con sello.', 'copos de maiz|cereales|cereal|corn flakes'],
  ['Galletas de arroz', 'ojo', 'Solo con sello.', 'galletas de arroz|tortitas de arroz'],
  ['Tortillas de maíz y tacos', 'ojo', 'Algunas mezclan harina de trigo. Solo con sello.', 'tortillas|tacos|nachos|tortilla de maiz'],
  ['Papas fritas de paquete y snacks', 'ojo', 'Solo con sello.', 'papas fritas|snacks|chizitos|palitos'],
  ['Maní', 'ojo', 'El tostado o salado, con sello.', 'mani|cacahuate|cacahuete'],
  ['Atún y conservas', 'ojo', 'Al natural suelen ser aptos. Con salsas, solo con sello.', 'atun|conservas|sardinas|enlatados'],
  ['Leche en polvo', 'ojo', 'Con sello.', 'leche en polvo'],
  ['Bebidas alcohólicas', 'ojo', 'Los destilados puros suelen ser aptos. Licores y aperitivos, con sello o del listado oficial. La cerveza común no es apta.', 'fernet|whisky|vodka|ron|gin|licor|aperitivo|sidra|champagne'],
  ['Medicamentos', 'ojo', 'Algunos usan almidón de trigo. Preguntá en la farmacia y no dejes un remedio indicado sin hablar con tu médico.', 'remedio|remedios|medicamentos|pastillas|vitaminas'],
  ['Pochoclo', 'ojo', 'El casero, con maíz pisingallo y aceite, es apto. Los de microondas o ya hechos, con sello.', 'pochoclo|palomitas|pop|cabritas'],
  ['Arroz saborizado o listo', 'ojo', 'Solo con sello.', 'arroz saborizado|arroz listo'],

  /* ROJO */
  ['Harina de trigo', 'no', 'Tiene gluten. Reemplazala por premezcla con sello.', 'harina|harina comun|harina de trigo|harina 000|harina 0000|harina leudante'],
  ['Pan común', 'no', 'Tiene gluten. Hay panes sin TACC, o lo podés hacer en casa.', 'pan|pan frances|pan lactal|pan de molde|baguette|bollos'],
  ['Fideos comunes', 'no', 'Tienen gluten. Hay fideos sin TACC de arroz o de maíz.', 'fideos|pasta|pastas|tallarines|spaghetti|espagueti|macarrones|tirabuzones'],
  ['Pastas rellenas y ñoquis comunes', 'no', 'Tienen gluten. Hacelos caseros con premezcla o fécula.', 'ravioles|sorrentinos|noquis|canelones|lasagna|lasana'],
  ['Galletitas comunes', 'no', 'Tienen gluten. Buscá las que tienen sello.', 'galletitas|galletas|bizcochos|crackers|tostadas'],
  ['Facturas, tortas y masas comunes', 'no', 'Tienen gluten.', 'facturas|medialunas|torta|tortas|masas|bizcochuelo|pastel|churros|donas'],
  ['Alfajores comunes', 'no', 'Tienen gluten. Hay alfajores con sello.', 'alfajor|alfajores'],
  ['Pizza y empanadas comunes', 'no', 'Tienen gluten. Se pueden hacer con masa sin TACC.', 'pizza|empanadas|empanada|tarta|tapas de empanada|prepizza'],
  ['Pan rallado común', 'no', 'Tiene gluten. Usá pan rallado sin TACC o harina de maíz con sello.', 'pan rallado|rebozador|empanado|milanesa|milanesas|rebozado'],
  ['Sémola y salvado de trigo', 'no', 'Tienen gluten.', 'semola|salvado|salvado de trigo|germen de trigo'],
  ['Cuscús y bulgur', 'no', 'Son trigo. Tienen gluten.', 'cuscus|couscous|bulgur|trigo burgol'],
  ['Seitán', 'no', 'Está hecho de gluten puro.', 'seitan'],
  ['Avena', 'no', 'En Argentina está prohibida para celíacos. En otros países hay avena certificada sin gluten, pero algunas personas celíacas reaccionan igual: solo con el visto bueno de tu médico.', 'avena|copos de avena|avena arrollada|salvado de avena|granola'],
  ['Cebada', 'no', 'Tiene gluten.', 'cebada'],
  ['Centeno', 'no', 'Tiene gluten.', 'centeno|pan de centeno'],
  ['Espelta, kamut y triticale', 'no', 'Son variedades o cruces del trigo. Tienen gluten.', 'espelta|kamut|triticale|escanda'],
  ['Malta y extracto de malta', 'no', 'Se hacen con cebada. Tienen gluten.', 'malta|extracto de malta|jarabe de malta|vinagre de malta'],
  ['Cerveza común', 'no', 'Se hace con cebada o trigo. Hay cervezas sin TACC certificadas.', 'cerveza|birra'],
  ['Salsa de soja común', 'no', 'La mayoría se hace con trigo. Buscá una con sello.', 'salsa de soja|soja|shoyu|salsa de soya'],
  ['Hostias comunes', 'no', 'Tienen gluten. Muchas parroquias tienen hostias aptas: preguntá.', 'hostia|hostias|comunion'],
  ['Masa para jugar de harina', 'no', 'La masa de juego hecha con harina tiene gluten. En chicos que se llevan las manos a la boca, mejor una casera sin TACC.', 'plastilina|masa para jugar|masa de juego']
];

/* ---------- APRENDER ----------
   gratis: true = se ve sin comprar | false = con candado
   [AR]...[/AR] solo se muestra a quien eligió Argentina
   [OTRO]...[/OTRO] se muestra a quien eligió otro país */
CONTENIDO.aprender = [
  {
    id: 'que-es', gratis: true,
    titulo: '¿Qué es la celiaquía?',
    resumen: 'Qué le pasa al cuerpo con el gluten, explicado simple.',
    buscar: 'enfermedad celíaca qué es',
    cuerpo: `
<p>La celiaquía es una enfermedad <strong>autoinmune</strong>: en personas con cierta predisposición genética, el gluten hace que las defensas del cuerpo ataquen al intestino delgado.</p>
<p>El intestino tiene unas vellosidades, como pelitos muy finos, que absorben los nutrientes. Con el gluten, se inflaman y se achatan. Por eso cuesta absorber hierro, calcio, vitaminas y otros nutrientes, aunque comas bien.</p>
<h3>Lo que conviene saber desde el principio</h3>
<ul>
<li><strong>No es una alergia ni una moda.</strong> Es una condición para toda la vida.</li>
<li><strong>Es frecuente:</strong> se calcula que la tiene alrededor de 1 de cada 100 personas, y muchas todavía no lo saben.</li>
<li><strong>Puede aparecer a cualquier edad</strong>, en chicos o en adultos.</li>
<li><strong>Tiene tratamiento:</strong> una alimentación sin gluten, estricta y para siempre. Con eso, el intestino se recupera y la vida sigue normal.</li>
</ul>
<h3>¿Qué significa TACC?</h3>
<p>Es la sigla de los cuatro cereales que tienen gluten: <strong>Trigo, Avena, Cebada y Centeno</strong>. Todo lo que se hace con ellos queda afuera de tu alimentación.</p>
<div class="nota">El gluten es una proteína. No se va con el calor ni al lavar: por eso importan tanto las migas y la contaminación.</div>`
  },
  {
    id: 'no-es-lo-mismo', gratis: true,
    titulo: 'Celiaquía, sensibilidad y alergia: no son lo mismo',
    resumen: 'Tres problemas distintos con el trigo y por qué importa diferenciarlos.',
    buscar: 'diferencia celiaquía sensibilidad al gluten alergia al trigo',
    cuerpo: `
<h3>Celiaquía</h3>
<p>Es autoinmune y daña el intestino. Se confirma con análisis de sangre y, en general, con una biopsia. Hasta una miga cuenta.</p>
<h3>Sensibilidad al gluten no celíaca</h3>
<p>La persona tiene síntomas cuando come gluten, pero no hay daño en el intestino ni anticuerpos de celiaquía. Se llega a ese diagnóstico después de descartar la celiaquía y la alergia.</p>
<h3>Alergia al trigo</h3>
<p>Es una reacción alérgica, a veces rápida: ronchas, picazón, hinchazón o falta de aire. Es solo al trigo y la diagnostica un alergista.</p>
<div class="nota">¿Por qué importa? Porque en la celiaquía el cuidado con la contaminación tiene que ser estricto, y hacen falta controles médicos de por vida.</div>`
  },
  {
    id: 'diagnostico', gratis: true,
    titulo: 'Cómo se diagnostica',
    resumen: 'Qué estudios se piden y el error que conviene evitar.',
    buscar: 'diagnóstico enfermedad celíaca anticuerpos antitransglutaminasa biopsia',
    cuerpo: `
<div class="alerta"><strong>Muy importante:</strong> no dejes el gluten antes de hacerte los estudios. Si lo sacás antes, los análisis pueden dar normales aunque tengas celiaquía.</div>
<h3>1. Análisis de sangre</h3>
<p>Se buscan anticuerpos. El más usado es el <strong>antitransglutaminasa IgA</strong>, junto con la <strong>IgA total</strong>: si la IgA total está baja, el primer análisis puede dar un falso negativo y el médico pide otros.</p>
<h3>2. Biopsia del intestino</h3>
<p>Se hace con una endoscopía y confirma el diagnóstico en adultos. En algunos chicos con valores muy altos, el especialista puede confirmarlo sin biopsia, siguiendo protocolos.</p>
<h3>3. Estudio genético</h3>
<p>Sirve más para descartar que para confirmar: si da negativo, la celiaquía es muy poco probable. Si da positivo, no confirma nada, porque mucha gente tiene esos genes y no es celíaca.</p>
<h3>¿Quiénes deberían estudiarse aunque no tengan síntomas?</h3>
<ul>
<li>Padres, hijos y hermanos de una persona celíaca.</li>
<li>Personas con diabetes tipo 1 o enfermedades de la tiroides autoinmunes.</li>
<li>Personas con síndrome de Down o síndrome de Turner.</li>
<li>Quienes tienen anemia por falta de hierro que no mejora, o pérdida de hueso a edad temprana.</li>
</ul>
<p>El diagnóstico lo hace el gastroenterólogo (en chicos, el gastroenterólogo pediatra). Sumar una nutricionista te ayuda muchísimo al principio.</p>`
  },
  {
    id: 'sintomas', gratis: true,
    titulo: 'Síntomas: el cuerpo avisa de muchas maneras',
    resumen: 'Digestivos, fuera del intestino, en la piel y en chicos.',
    buscar: 'síntomas enfermedad celíaca adultos niños',
    cuerpo: `
<p>La celiaquía no siempre da síntomas de panza. A veces aparece de formas que nadie relaciona con la comida.</p>
<h3>Digestivos</h3>
<ul>
<li>Diarrea que dura o constipación.</li>
<li>Panza hinchada, gases, dolor abdominal.</li>
<li>Náuseas y pérdida de peso.</li>
</ul>
<h3>Fuera del intestino</h3>
<ul>
<li>Cansancio constante.</li>
<li>Anemia por falta de hierro que no mejora con hierro.</li>
<li>Dolor de cabeza, hormigueo en manos o pies.</li>
<li>Aftas que se repiten, problemas en el esmalte de los dientes.</li>
<li>Dolor en las articulaciones, caída del pelo.</li>
<li>Huesos debilitados (osteopenia u osteoporosis).</li>
<li>Ánimo bajo, irritabilidad o ansiedad.</li>
<li>Cambios en la menstruación o dificultad para quedar embarazada.</li>
</ul>
<h3>En la piel</h3>
<p>La <strong>dermatitis herpetiforme</strong> son granitos o ampollitas que pican mucho, en codos, rodillas, glúteos o cuero cabelludo. Es una forma de celiaquía que se ve en la piel.</p>
<h3>En chicos</h3>
<ul>
<li>Panza grande, poco aumento de peso o de talla.</li>
<li>Diarrea, falta de apetito, mal humor.</li>
<li>Pubertad que se atrasa.</li>
</ul>
<h3>Celiaquía silenciosa</h3>
<p>Hay personas sin síntomas, pero el intestino igual se daña. Por eso se estudia a los familiares.</p>
<div class="alerta"><strong>Andá a la guardia o llamá a tu médico</strong> si hay sangre en la materia fecal, vómitos que no paran, dolor fuerte, señales de deshidratación (sobre todo en chicos) o pérdida de peso sin explicación.</div>`
  },
  {
    id: 'beneficios', gratis: true,
    titulo: 'Los beneficios de la dieta sin gluten',
    resumen: 'Qué cambia en tu cuerpo cuando la hacés bien.',
    buscar: 'beneficios dieta sin gluten celíacos recuperación intestino',
    cuerpo: `
<p>Para una persona celíaca, la dieta sin gluten no es una opción: es el tratamiento. Y funciona.</p>
<ul>
<li><strong>Se van los síntomas.</strong> Muchas personas notan cambios en pocas semanas.</li>
<li><strong>El intestino se repara.</strong> Lleva meses y, en adultos, a veces uno o dos años.</li>
<li><strong>Absorbés mejor.</strong> Mejoran la anemia, los huesos y la energía.</li>
<li><strong>Bajan los riesgos a largo plazo</strong>, como la osteoporosis, problemas de fertilidad y algunas complicaciones intestinales.</li>
<li><strong>Comés más natural.</strong> La dieta te empuja hacia frutas, verduras, carnes, huevos y legumbres.</li>
</ul>
<div class="nota">Un dato para la familia: en quien no es celíaco ni tiene una indicación médica, dejar el gluten no hace bajar de peso por sí solo ni es automáticamente más sano.</div>`
  },
  {
    id: 'contras', gratis: false,
    titulo: 'Las contras, y cómo darlas vuelta',
    resumen: 'Lo difícil de la dieta y qué hacer con cada cosa.',
    buscar: 'dieta sin gluten desventajas nutricionales costo',
    cuerpo: `
<h3>Es más cara</h3>
<p>Los productos sin TACC cuestan más. Lo que más ayuda: armar la base con comida natural (papa, arroz, huevo, verduras, carnes), cocinar en cantidad y congelar.</p>
[AR]<p>En Argentina, la Ley Celíaca (Ley 26.588) obliga a obras sociales y prepagas a cubrir un monto mensual para harinas y premezclas. Preguntá en la tuya cómo pedirlo.</p>[/AR]
<h3>Los ultraprocesados sin gluten no son sanos por ser sin TACC</h3>
<p>Muchos tienen más grasa y azúcar, y menos fibra. Usalos como un gusto, no como base.</p>
<h3>Poca fibra y constipación</h3>
<p>Al dejar los integrales comunes, baja la fibra. Sumá legumbres con sello, frutas con cáscara, verduras, arroz integral y semillas con sello. Y tomá agua.</p>
<h3>Aumento de peso</h3>
<p>Cuando el intestino se cura, absorbés mejor. Si además se compensa con productos procesados, el peso sube. Una nutricionista te ayuda a encontrar el equilibrio.</p>
<h3>Faltas de nutrientes</h3>
<p>Hierro, ácido fólico, vitamina B12, vitamina D, calcio y zinc suelen estar bajos al principio. Los suplementos, solo si te los indica tu médico según tus análisis.</p>
<h3>Lo social</h3>
<p>Cumpleaños, comer afuera, sentirte distinta. Tenés una sección entera para eso en <strong>Vivir</strong>.</p>
<h3>El cansancio de leer etiquetas</h3>
<p>Al principio agota. Con el tiempo armás tu lista de marcas seguras y se vuelve rutina. El semáforo de la app está para ayudarte.</p>`
  },
  {
    id: 'mitos', gratis: true,
    titulo: 'Mitos y verdades',
    resumen: 'Lo que se escucha y lo que es cierto.',
    buscar: 'mitos celiaquía',
    cuerpo: `
<h3>"Un poquito no hace nada"</h3>
<p><strong>Falso.</strong> Pequeñas cantidades dañan el intestino aunque no sientas nada.</p>
<h3>"Si no tengo síntomas, puedo comer gluten de vez en cuando"</h3>
<p><strong>Falso.</strong> El daño ocurre igual, con o sin síntomas.</p>
<h3>"La celiaquía se cura"</h3>
<p><strong>Falso.</strong> No se cura, se controla con la dieta. Si volvés al gluten, el daño vuelve.</p>
<h3>"Sin gluten es más sano para todos"</h3>
<p><strong>Falso.</strong> Es el tratamiento para quien lo necesita, no una dieta mejor para cualquiera.</p>
<h3>"Los celíacos no pueden tomar leche"</h3>
<p><strong>Depende.</strong> Al principio, con el intestino dañado, puede aparecer intolerancia a la lactosa. Muchas veces mejora cuando el intestino se recupera. Consultalo.</p>
<h3>"Cocinándolo bien, el gluten se va"</h3>
<p><strong>Falso.</strong> El calor no destruye el gluten.</p>
<h3>"La avena es apta"</h3>
<p><strong>Depende del país.</strong> En Argentina se considera prohibida. En otros países hay avena certificada sin gluten, pero algunas personas celíacas reaccionan igual. Solo con el visto bueno de tu médico.</p>`
  },
  {
    id: 'controles', gratis: false,
    titulo: 'Controles y seguimiento',
    resumen: 'Qué controles hacer y qué hacer si los síntomas siguen.',
    buscar: 'seguimiento enfermedad celíaca controles anuales',
    cuerpo: `
<p>Sentirte bien es la mejor señal, pero los controles muestran lo que no se ve.</p>
<h3>Lo habitual</h3>
<ul>
<li>Repetir los anticuerpos a los 6 y 12 meses del diagnóstico, y después una vez por año, o según indique tu médico.</li>
<li>Análisis de hierro, vitaminas, calcio y tiroides.</li>
<li>Densitometría (estudio de huesos) si tu médico la indica.</li>
</ul>
<h3>Si los síntomas siguen aunque hagas la dieta</h3>
<ol>
<li><strong>Buscá gluten escondido.</strong> Es la causa más común: un frasco compartido, la tostadora, un condimento, un remedio.</li>
<li><strong>Anotá todo en tu diario</strong> unas semanas: qué comiste, dónde y cómo te sentiste.</li>
<li><strong>Consultá a tu médico.</strong> Puede haber otra causa que se suma, como intolerancia a la lactosa o colon irritable.</li>
</ol>
<div class="nota">Llevá tu diario de síntomas a la consulta. Le da a tu médico información real para ayudarte.</div>`
  }
];

/* ---------- COMER: LA DIETA ---------- */
CONTENIDO.comer = [
  {
    id: 'reglas', gratis: true,
    titulo: 'Las reglas básicas',
    resumen: 'Lo que sale, lo que queda y la regla de oro.',
    buscar: 'dieta sin TACC alimentos permitidos prohibidos',
    cuerpo: `
<h3>Lo que sale de tu alimentación</h3>
<p>Trigo, avena, cebada, centeno y todo lo que se hace con ellos: harina común, pan, fideos, galletitas, facturas, tortas, rebozados, pan rallado, sémola, salvado, cuscús, seitán, malta y cerveza común.</p>
<h3>Lo que es apto de por sí</h3>
<p>Carnes, pollo, pescado, huevos, leche, frutas, verduras, papa, batata, mandioca, arroz y maíz. Con esto ya podés armar la mayoría de tus comidas.</p>
<h3>Lo envasado, solo con sello</h3>
[AR]<p>Buscá el logo oficial <strong>Sin TACC</strong> en el envase, o fijate que el producto esté en el listado oficial de alimentos libres de gluten de ANMAT.</p>[/AR]
[OTRO]<p>Buscá la leyenda <strong>"sin gluten"</strong> o el sello oficial que use tu país. Si no lo tiene, no lo des por apto.</p>[/OTRO]
<h3>Cero contaminación</h3>
<p>Un alimento apto deja de serlo si toca gluten: una tabla con migas, un colador de fideos comunes, el aceite donde se frieron rebozados.</p>
<div class="nota"><strong>La regla de oro:</strong> ante la duda, no.</div>`
  },
  {
    id: 'cocina', gratis: false,
    titulo: 'Contaminación cruzada en casa',
    resumen: 'Cómo organizar tu cocina para comer tranquila.',
    buscar: 'contaminación cruzada gluten cocina',
    cuerpo: `
<p>Lo ideal es que toda la casa cocine sin TACC. Si no es posible, armá tu zona segura.</p>
<h3>Cosas solo para vos</h3>
<ul>
<li>Tostadora (o tostá en sartén limpia).</li>
<li>Colador de fideos.</li>
<li>Tabla y cucharas de madera: la madera guarda restos.</li>
<li>Sartenes y tuppers muy rayados.</li>
<li>Una esponja aparte también ayuda.</li>
</ul>
<h3>Frascos propios, con etiqueta</h3>
<p>Manteca, dulce de leche, mermelada y queso untable. Un cuchillo que tocó pan común alcanza para contaminarlos.</p>
<h3>Al cocinar</h3>
<ul>
<li>Primero lo sin TACC, y tapalo. Después, lo demás.</li>
<li>Nunca uses el agua de fideos comunes ni el mismo colador.</li>
<li>Aceite para freír solo para lo tuyo.</li>
<li>En el horno, lo tuyo en la rejilla de arriba y en bandeja propia o con papel manteca.</li>
<li>La harina común vuela y se deposita. Si en casa se amasa con harina común, que sea lejos de tus cosas, y limpiá bien después.</li>
</ul>
<h3>En el asado</h3>
<p>Limpiá bien una parte de la parrilla o usá papel aluminio para tus cortes. Chorizos y morcillas, solo con sello. Y que el pan no ande cerca.</p>
<div class="nota">En la sección <strong>Mis cosas</strong> tenés una lista para revisar tu cocina paso por paso.</div>`
  },
  {
    id: 'etiquetas', gratis: false,
    titulo: 'Cómo leer etiquetas',
    resumen: 'Qué buscar en el envase y qué palabras te dicen que no.',
    buscar: 'cómo leer etiquetas sin gluten',
    cuerpo: `
[AR]<h3>En Argentina</h3>
<p>Buscá el <strong>logo oficial Sin TACC</strong>. Los productos con ese logo tienen como máximo 10 partes por millón de gluten, el límite que fija la ley.</p>
<p>Si un producto no tiene logo, podés buscarlo en el <strong>listado oficial de ANMAT</strong>, que se actualiza seguido. Tocá el botón de abajo para encontrarlo en internet.</p>[/AR]
[OTRO]<h3>En tu país</h3>
<p>Buscá la leyenda <strong>"sin gluten"</strong> o el sello oficial. En la mayoría de los países, "sin gluten" significa menos de 20 partes por millón, el estándar internacional. Algunas asociaciones de celíacos tienen sus propios sellos.</p>[/OTRO]
<h3>Frases que significan que no</h3>
<ul>
<li>"Puede contener trazas de trigo".</li>
<li>"Elaborado en una planta que procesa trigo", salvo que además tenga el sello.</li>
</ul>
<h3>Ingredientes que tienen gluten</h3>
<p>Trigo, avena, cebada, centeno, malta, extracto de malta, sémola, salvado, espelta, levadura de cerveza.</p>
<div class="nota">Las recetas cambian. Revisá la etiqueta aunque sea tu marca de siempre.</div>`
  },
  {
    id: 'escondido', gratis: false,
    titulo: 'Dónde se esconde el gluten',
    resumen: 'Los lugares donde menos te lo esperás.',
    buscar: 'gluten oculto alimentos',
    cuerpo: `
<p>Estos productos pueden tener gluten aunque no lo parezca. Todos, solo con sello:</p>
<ul>
<li>Fiambres, salchichas, chorizos y hamburguesas compradas.</li>
<li>Milanesas y rebozados ya hechos.</li>
<li>Caldos en cubo y sopas instantáneas.</li>
<li>Salsa de soja, aderezos y salsas envasadas.</li>
<li>Especias molidas y condimentos.</li>
<li>Polvo de hornear.</li>
<li>Golosinas, chocolates y helados.</li>
<li>Yogures con cereales y postres en polvo.</li>
<li>Copos de maíz con extracto de malta.</li>
<li>Café instantáneo saborizado.</li>
</ul>
<h3>Fuera de la comida</h3>
<ul>
<li>Remedios: algunos usan almidón de trigo.</li>
<li>Hostias.</li>
<li>Masa para jugar hecha con harina, en chicos chiquitos.</li>
<li>Labiales y pasta dental, porque se tragan.</li>
</ul>`
  },
  {
    id: 'remedios', gratis: false,
    titulo: 'Remedios y cosméticos',
    resumen: 'Qué revisar y qué no hace falta que te preocupe.',
    buscar: 'medicamentos sin gluten listado',
    cuerpo: `
<h3>Remedios</h3>
<p>Algunos medicamentos usan almidón como ingrediente de relleno. Antes de tomar uno nuevo, preguntá en la farmacia si es apto.</p>
[AR]<p>En Argentina, ANMAT publica un listado de medicamentos con información sobre gluten. Tocá el botón de abajo para buscarlo.</p>[/AR]
<div class="alerta">Nunca dejes un remedio que te indicó tu médico sin hablarlo antes con él.</div>
<h3>Cosméticos</h3>
<p>El gluten sobre la piel no daña, porque no se absorbe así. Lo que importa es lo que se puede tragar: labiales, bálsamos, pasta dental. Y las cremas en las manos si después tocás comida.</p>`
  }
];

/* ---------- VIVIR: EL DÍA A DÍA ---------- */
CONTENIDO.vivir = [
  {
    id: 'primeros-dias', gratis: true,
    titulo: 'Los primeros días después del diagnóstico',
    resumen: 'Por dónde empezar sin volverte loca.',
    buscar: 'recién diagnosticado celiaquía primeros pasos',
    cuerpo: `
<p>Es normal sentir alivio, enojo, tristeza o todo junto. Cambia la forma de comer de un día para el otro. Vamos de a poco.</p>
<h3>Esta semana</h3>
<ol>
<li><strong>Comé simple.</strong> Carne, pollo, huevo, verduras, papa, arroz y fruta. Sin complicarte.</li>
<li><strong>Revisá tu alacena.</strong> Separá lo que tiene gluten y lo que tiene sello.</li>
<li><strong>Armá tu zona segura</strong> en la cocina: tu colador, tu tabla, tus frascos.</li>
<li><strong>Contale a tu familia</strong> lo que necesitás. Mostrales esta app.</li>
</ol>
<h3>Este mes</h3>
<ul>
<li>Pedí turno con una nutricionista que conozca de celiaquía.</li>
<li>Buscá la asociación de celíacos de tu ciudad: dan charlas, listas de lugares y mucha compañía.</li>
<li>Animate a una receta casera por semana.</li>
</ul>
<div class="nota">No tenés que saber todo hoy. Cada semana va a ser más fácil.</div>`
  },
  {
    id: 'afuera', gratis: false,
    titulo: 'Comer afuera sin miedo',
    resumen: 'Cómo elegir, qué preguntar y qué pedir.',
    buscar: 'restaurantes sin TACC cerca',
    cuerpo: `
<h3>Antes de ir</h3>
<ul>
<li>Elegí lugares con opciones sin TACC, mejor si están reconocidos por la asociación de celíacos de tu zona.</li>
<li>Llamá y preguntá cómo las preparan: si tienen freidora aparte, plancha limpia, utensilios propios.</li>
</ul>
<h3>En la mesa</h3>
<ul>
<li>Avisale al mozo que sos celíaca, no que "no comés harinas". Son cosas distintas para la cocina.</li>
<li>Pedí cosas simples: carne o pescado a la plancha, ensalada, papas al horno.</li>
<li>Preguntá por salsas, condimentos y rebozados.</li>
<li>Si te traen el plato con pan encima o al costado, no sirve sacarlo: pedí otro.</li>
</ul>
<h3>Tu ayuda en el celular</h3>
<p>En <strong>Mis cosas</strong> tenés una tarjeta para mostrarle al mozo, en español, inglés y portugués.</p>
<div class="nota">Llevá siempre algo apto en la cartera, por si el lugar no es seguro.</div>`
  },
  {
    id: 'reuniones', gratis: false,
    titulo: 'Cumpleaños, reuniones y fiestas',
    resumen: 'Disfrutar sin quedarte con hambre.',
    buscar: 'celíaco cumpleaños reuniones consejos',
    cuerpo: `
<ul>
<li><strong>Llevá tu plato para compartir.</strong> Algo rico que todos coman, así no te sentís aparte.</li>
<li><strong>Ofrecete a cocinar</strong> una parte, si hay confianza.</li>
<li><strong>Comé algo antes</strong>, por si no hay opciones seguras.</li>
<li><strong>Servite primero</strong>, antes de que las fuentes y las cucharas se mezclen.</li>
<li><strong>Explicá sin justificarte.</strong> "Soy celíaca, no puedo comer esto" alcanza.</li>
</ul>
<h3>Si sos quien recibe a una persona celíaca</h3>
<p>Preguntale qué puede comer, comprá con sello y separá su porción antes de servir al resto. Para quien es celíaco, ese gesto vale muchísimo.</p>`
  },
  {
    id: 'viajes', gratis: false,
    titulo: 'Viajar sin gluten',
    resumen: 'Qué llevar y cómo organizarte.',
    buscar: 'viajar siendo celíaco consejos',
    cuerpo: `
<ul>
<li><strong>Investigá antes:</strong> supermercados y lugares con opciones sin TACC en tu destino.</li>
<li><strong>Llevá provisiones</strong> para el viaje y los primeros días.</li>
<li><strong>En avión,</strong> pedí comida sin gluten al sacar el pasaje. Llevá algo tuyo igual.</li>
<li><strong>Elegí alojamiento con cocina</strong>, así resolvés desayunos y cenas.</li>
<li><strong>Usá la tarjeta para el mozo</strong> en inglés o portugués de la sección Mis cosas.</li>
</ul>`
  },
  {
    id: 'chicos', gratis: false,
    titulo: 'Si quien es celíaco es tu hijo o tu hija',
    resumen: 'Escuela, cumpleaños y cómo hablarle del tema.',
    buscar: 'niños celíacos escuela consejos',
    cuerpo: `
<h3>En la escuela</h3>
<ul>
<li>Hablá con la maestra y con quien maneja el comedor o el kiosco.</li>
<li>Mandá su vianda en recipiente identificado, con cubiertos propios.</li>
<li>Dejale en la escuela una cajita con golosinas aptas para festejos sorpresa.</li>
<li>Avisá de la masa para jugar hecha con harina en sala de chiquitos.</li>
</ul>
<h3>En los cumpleaños</h3>
<p>Mandá su porción linda y parecida a la de los demás: una porción de torta sin TACC, sus golosinas. Que no se sienta el distinto.</p>
<h3>Cómo hablarle</h3>
<ul>
<li>Con palabras simples: "el gluten le hace mal a tu panza, aunque no duela".</li>
<li>Enseñale a preguntar "¿esto es sin TACC?" y a decir que no si no está seguro.</li>
<li>Sumalo a cocinar: lo que prepara, lo come con más ganas.</li>
</ul>`
  },
  {
    id: 'emociones', gratis: false,
    titulo: 'Lo que sentís también importa',
    resumen: 'El duelo por las comidas, el enojo y el cansancio.',
    buscar: 'celiaquía aspecto emocional acompañamiento',
    cuerpo: `
<p>Extrañar la pizza de siempre, enojarte por tener que preguntar todo, cansarte de explicar. Todo eso es normal.</p>
<ul>
<li><strong>Date permiso para el duelo.</strong> Perdiste comidas que tenían recuerdos.</li>
<li><strong>Buscá versiones nuevas</strong> de tus comidas favoritas. Muchas salen igual de ricas.</li>
<li><strong>Hablá con otras personas celíacas.</strong> Las asociaciones y los grupos ayudan a sentirte acompañada.</li>
<li><strong>Mirá lo que sí podés.</strong> La lista es enorme.</li>
</ul>
<div class="alerta">Si la angustia o el miedo a comer te desbordan, consultá con un profesional de salud mental. Pedir ayuda también es cuidarte.</div>`
  },
  {
    id: 'familia', gratis: false,
    titulo: 'En familia y en pareja',
    resumen: 'Compartir la casa y la mesa sin peleas.',
    buscar: 'convivir con celíaco familia',
    cuerpo: `
<ul>
<li><strong>Acuerden las reglas de la cocina</strong> entre todos: qué es de uso exclusivo y cómo se limpia.</li>
<li><strong>Cocinen sin TACC para todos</strong> siempre que se pueda. Es más fácil y más seguro.</li>
<li><strong>El mate compartido:</strong> si alguien está comiendo galletitas comunes al lado, las migas pueden llegar a la bombilla.</li>
<li><strong>Los besos:</strong> si tu pareja acaba de comer algo con gluten, conviene que se enjuague la boca o se lave los dientes.</li>
</ul>
<div class="nota">La celiaquía es más llevadera cuando no la cargás sola.</div>`
  },
  {
    id: 'glutenizada', gratis: false,
    titulo: 'Si comiste gluten sin querer',
    resumen: 'Qué hacer y qué no hacer.',
    buscar: 'qué hacer si un celíaco come gluten sin querer',
    cuerpo: `
<p>Les pasa a todos alguna vez. No arruina todo tu esfuerzo, pero tampoco hay que tomarlo a la ligera.</p>
<ul>
<li><strong>Tomá agua</strong> y descansá.</li>
<li><strong>Comé simple</strong> los días siguientes: arroz, pollo, verduras cocidas.</li>
<li><strong>Anotalo en tu diario:</strong> qué comiste, dónde y qué sentiste. Te ayuda a encontrar el origen.</li>
<li><strong>Volvé a tu dieta</strong> como siempre. No hay nada que "compense".</li>
</ul>
<div class="alerta">Consultá enseguida si tenés vómitos que no paran, dolor fuerte o señales de deshidratación.</div>`
  }
];

/* ---------- DUDAS FRECUENTES ---------- */
CONTENIDO.faq = [
  { gratis: true, p: '¿La celiaquía se cura?', r: 'No se cura, pero se controla por completo con la dieta sin gluten. Con eso, se vive una vida normal.' },
  { gratis: true, p: 'Si un poquito no me hace mal, ¿puedo comerlo?', r: 'No. Aunque no sientas nada, pequeñas cantidades de gluten dañan el intestino.' },
  { gratis: true, p: '¿Puedo dejar el gluten antes de hacerme los estudios, para ver si me siento mejor?', r: 'No conviene. Si dejás el gluten antes, los análisis y la biopsia pueden dar normales aunque seas celíaca. Primero los estudios, después la dieta.' },
  { gratis: true, p: '¿Es hereditaria? ¿Mis hijos tienen que estudiarse?', r: 'Hay una base genética. Por eso se recomienda que padres, hijos y hermanos de una persona celíaca se estudien, aunque no tengan síntomas.' },
  { gratis: true, p: '¿Puedo tomar cerveza?', r: 'La común no, porque se hace con cebada o trigo. Hay cervezas sin TACC certificadas. El vino es apto.' },
  { gratis: false, p: '¿Puedo tomar mate?', r: 'Sí, con yerba que tenga sello. Y ojo si en la ronda alguien está comiendo galletitas comunes: las migas pueden llegar a la bombilla.' },
  { gratis: false, p: '¿Y el café y el té?', r: 'El café puro y el té común suelen ser aptos. Los saborizados, instantáneos o con agregados, solo con sello.' },
  { gratis: false, p: '¿El vinagre es apto?', r: 'El de vino, alcohol y manzana sí. El vinagre de malta no.' },
  { gratis: false, p: '¿El trigo sarraceno tiene trigo?', r: 'No. A pesar del nombre, no es trigo y no tiene gluten. Igual compralo con sello por la contaminación.' },
  { gratis: false, p: '¿Puedo comer lácteos?', r: 'En general, sí. Los quesos rallados, untables y los yogures saborizados, con sello. Al principio puede aparecer intolerancia a la lactosa, que muchas veces mejora cuando el intestino se recupera.' },
  { gratis: false, p: '¿Tengo que tomar vitaminas?', r: 'Solo si tu médico te las indica según tus análisis. No te automediques.' },
  { gratis: false, p: '¿Cuánto tarda en recuperarse el intestino?', r: 'Los síntomas suelen mejorar en semanas. El intestino tarda meses, y en adultos a veces uno o dos años.' },
  { gratis: false, p: '¿Por qué sigo con síntomas si hago la dieta?', r: 'Lo más común es gluten escondido: un frasco compartido, la tostadora, un condimento, un remedio. Anotá todo en tu diario y consultá con tu médico, que puede buscar otras causas.' },
  { gratis: false, p: '¿El gluten se absorbe por la piel?', r: 'No. Lo que importa es lo que se puede tragar, como labiales o pasta dental.' },
  { gratis: false, p: '¿Puedo comer en la casa de otras personas?', r: 'Sí, con una charla antes. Contales lo que necesitás, ofrecete a llevar algo y servite primero.' },
  { gratis: false, p: '¿Mi hijo puede ir a cumpleaños?', r: 'Claro que sí. Mandale su porción y sus golosinas aptas, y avisale a quien organiza.' },
  { gratis: false, p: '¿Qué es la Ley Celíaca?', r: 'En Argentina, la Ley 26.588 protege a las personas celíacas. Entre otras cosas, obliga a obras sociales y prepagas a cubrir un monto mensual para harinas y premezclas. En otros países, consultá con la asociación de celíacos local qué derechos tenés.' }
];

/* ---------- MENÚS SEMANALES ----------
   Todos los productos envasados: con sello. */
CONTENIDO.menus = [
  {
    id: 'base', gratis: false,
    titulo: 'Semana base',
    resumen: 'Variada y simple, para arrancar.',
    dias: [
      ['Lunes', 'Café con leche y tostadas de pan sin TACC con queso untable y mermelada', 'Pollo al horno con papas y ensalada de lechuga y tomate', 'Yogur con fruta picada', 'Tortilla de zapallitos con zanahoria rallada'],
      ['Martes', 'Infusión y huevos revueltos con palta', 'Arroz con verduras salteadas y huevo', 'Chipá casero e infusión', 'Merluza al horno con puré de calabaza'],
      ['Miércoles', 'Licuado de banana con leche y galletas de arroz', 'Milanesas con pan rallado sin TACC y puré de papa', 'Fruta y un puñado de frutos secos', 'Sopa de verduras casera y omelette de queso'],
      ['Jueves', 'Yogur con copos de maíz con sello y fruta', 'Guiso de lentejas con arroz y verduras', 'Budín casero sin TACC e infusión', 'Pizza casera sin TACC con muzzarella y tomate'],
      ['Viernes', 'Tostadas sin TACC con palta y tomate', 'Hamburguesas caseras con ensalada mixta y batatas al horno', 'Licuado de frutilla', 'Fideos sin TACC con salsa de tomate casera y queso'],
      ['Sábado', 'Panqueques de banana con miel', 'Asado con ensalada (chorizo solo con sello)', 'Gelatina con fruta', 'Tarta sin TACC de jamón y queso'],
      ['Domingo', 'Café con leche y chipá', 'Pastel de papa con carne picada', 'Fruta con crema', 'Ensalada de arroz, atún, huevo, tomate y choclo']
    ]
  },
  {
    id: 'economica', gratis: false,
    titulo: 'Semana económica',
    resumen: 'Rendidora, con papa, arroz, huevo, maíz y legumbres.',
    dias: [
      ['Lunes', 'Infusión y tortitas de harina de maíz caseras', 'Polenta con salsa de tomate y queso', 'Banana con leche', 'Tortilla de papas'],
      ['Martes', 'Infusión y pan casero sin TACC con manteca', 'Arroz con pollo', 'Fruta de estación', 'Sopa de verduras con arroz'],
      ['Miércoles', 'Leche con cacao y tortitas de arroz', 'Guiso de lentejas con papa y zapallo', 'Pochoclo casero', 'Huevos revueltos con zapallitos y papa hervida'],
      ['Jueves', 'Infusión y tortilla de maíz con queso', 'Albóndigas caseras con arroz cocido en lugar de pan, con puré', 'Mandarina o naranja', 'Polenta grillada con ensalada'],
      ['Viernes', 'Licuado de banana', 'Ñoquis caseros de papa con salsa de tomate', 'Mate y chipá casero', 'Revuelto de papas, huevo y cebolla'],
      ['Sábado', 'Panqueques de banana', 'Pollo al horno con batatas', 'Arroz con leche casero', 'Pizzetas de polenta con tomate y queso'],
      ['Domingo', 'Infusión y pan casero', 'Guiso de arroz con carne y verduras', 'Fruta', 'Ensalada de lentejas con tomate, cebolla y huevo']
    ]
  },
  {
    id: 'vegetariana', gratis: false,
    titulo: 'Semana vegetariana',
    resumen: 'Sin carne, con huevos y lácteos.',
    dias: [
      ['Lunes', 'Yogur con fruta y semillas con sello', 'Bowl de quinoa con garbanzos, zanahoria, palta y huevo duro', 'Chipá', 'Tarta de espinaca con masa sin TACC'],
      ['Martes', 'Tostadas sin TACC con queso y tomate', 'Hamburguesas caseras de lentejas con ensalada', 'Licuado de frutas', 'Crema de calabaza con semillas'],
      ['Miércoles', 'Panqueques de banana', 'Risotto de hongos y queso', 'Fruta y frutos secos', 'Omelette de verduras con ensalada'],
      ['Jueves', 'Licuado de frutos rojos y tortitas de arroz con queso', 'Guiso de garbanzos con verduras y arroz', 'Budín sin TACC', 'Pizza sin TACC de verduras'],
      ['Viernes', 'Huevos revueltos y tostadas sin TACC', 'Fideos de arroz salteados con verduras y huevo', 'Yogur', 'Papas rellenas con queso y brócoli'],
      ['Sábado', 'Chipá y café con leche', 'Empanadas sin TACC de humita', 'Gelatina con frutas', 'Ensalada de lentejas y arroz integral'],
      ['Domingo', 'Panqueques con fruta', 'Lasaña de berenjenas con ricota y salsa', 'Arroz con leche', 'Tortilla de papas con ensalada']
    ]
  },
  {
    id: 'viandas', gratis: false,
    titulo: 'Viandas para el trabajo o la escuela',
    resumen: 'De lunes a viernes, con su colación.',
    viandas: true,
    dias: [
      ['Lunes', 'Tarta sin TACC de jamón y queso con tomates cherry', 'Fruta y frutos secos'],
      ['Martes', 'Arroz con pollo y verduras', 'Yogur con sello y tortitas de arroz'],
      ['Miércoles', 'Ensalada de quinoa, atún, choclo y huevo', 'Chipá'],
      ['Jueves', 'Milanesas sin TACC al horno con ensalada de papa y zanahoria', 'Banana y una barrita con sello'],
      ['Viernes', 'Tortilla de maíz con sello rellena de pollo, lechuga y queso', 'Budín casero']
    ]
  }
];

/* ---------- RECETAS ----------
   Todos los ingredientes envasados: con sello. */
CONTENIDO.recetas = [
  {
    id: 'chipa', gratis: true,
    titulo: 'Chipá',
    resumen: 'Sin gluten de nacimiento. El salvavidas de cualquier merienda.',
    tiempo: '35 minutos', porciones: 'unos 20 chipá',
    ingredientes: ['250 g de fécula de mandioca', '120 g de queso duro rallado', '100 g de queso cremoso picado chiquito', '1 huevo', '50 g de manteca blanda', '80 a 100 ml de leche', 'Una pizca de sal'],
    pasos: ['Prendé el horno a 200 °C.', 'Mezclá la fécula, los quesos y la sal.', 'Sumá la manteca y el huevo, y uní con las manos.', 'Agregá la leche de a poco, hasta lograr una masa suave que no se pegue.', 'Armá bolitas del tamaño de una nuez y ponelas en una placa con papel manteca.', 'Horneá de 15 a 20 minutos, hasta que estén doraditos abajo.'],
    tip: 'Se pueden congelar crudos. Los horneás directo del freezer unos minutos más.'
  },
  {
    id: 'premezcla', gratis: false,
    titulo: 'Premezcla casera',
    resumen: 'Tu reemplazo de la harina común, más económico.',
    tiempo: '5 minutos', porciones: '1 kilo',
    ingredientes: ['500 g de harina de arroz', '250 g de fécula de mandioca', '250 g de almidón de maíz', 'Para panes y pizzas: 1 cucharadita de goma xántica cada 500 g'],
    pasos: ['Pasá todo por un colador o tamiz.', 'Mezclá muy bien con un batidor, para que quede pareja.', 'Guardala en un frasco hermético con etiqueta.'],
    tip: 'La goma xántica le da elasticidad a la masa. Para galletitas y budines no hace falta.'
  },
  {
    id: 'pan', gratis: false,
    titulo: 'Pan de molde',
    resumen: 'Para tostadas y sándwiches de todos los días.',
    tiempo: '2 horas (con el levado)', porciones: '1 pan',
    ingredientes: ['500 g de premezcla', '1 cucharadita de goma xántica, si tu premezcla no trae', '10 g de levadura seca o 25 g de levadura fresca', '1 cucharada de azúcar', '1 cucharadita de sal', '2 huevos', '3 cucharadas de aceite', '350 a 400 ml de agua tibia'],
    pasos: ['Mezclá la premezcla, la goma, la levadura, el azúcar y la sal.', 'Sumá los huevos, el aceite y el agua tibia.', 'Batí unos minutos. Va a quedar una masa espesa, como una pasta, no como el pan común.', 'Pasala a un molde aceitado y emparejá con una cuchara mojada.', 'Tapá y dejá levar en un lugar tibio de 40 a 60 minutos, hasta que crezca casi al borde.', 'Horneá a 190 °C de 40 a 45 minutos.', 'Dejalo enfriar del todo antes de cortarlo.'],
    tip: 'Cortalo en rodajas y congelalo. Sacás lo justo para cada desayuno.'
  },
  {
    id: 'pizza', gratis: false,
    titulo: 'Pizza casera',
    resumen: 'Masa fácil, sin amasar.',
    tiempo: '1 hora', porciones: '1 pizza grande',
    ingredientes: ['300 g de premezcla', '7 g de levadura seca', '1 cucharadita de azúcar', '1 cucharadita de sal', '2 cucharadas de aceite', '250 ml de agua tibia', 'Salsa de tomate, muzzarella y orégano'],
    pasos: ['Mezclá todos los ingredientes de la masa hasta que quede pareja.', 'Aceitá una pizzera y estirá la masa con las manos mojadas.', 'Dejá levar 30 minutos.', 'Precociná a 220 °C de 10 a 12 minutos.', 'Sumá la salsa, la muzzarella y el orégano, y horneá 10 minutos más.'],
    tip: 'Podés dejar prepizzas precocidas en el freezer.'
  },
  {
    id: 'noquis', gratis: false,
    titulo: 'Ñoquis de papa',
    resumen: 'Para el 29 o cualquier domingo.',
    tiempo: '1 hora', porciones: '4 porciones',
    ingredientes: ['1 kg de papas', '1 huevo', '1 cucharadita de sal', '150 a 200 g de fécula de mandioca o almidón de maíz', 'Nuez moscada (opcional)'],
    pasos: ['Hervé las papas con cáscara hasta que estén tiernas.', 'Pelalas y pisalas en caliente.', 'Sumá el huevo, la sal y la nuez moscada.', 'Agregá la fécula de a poco hasta que la masa no se pegue.', 'Armá cilindros, cortá los ñoquis y pasalos por la fécula.', 'Cocinalos en agua hirviendo con sal. Cuando suben, están listos.'],
    tip: 'Con olla, colador y espumadera solo para lo sin TACC.'
  },
  {
    id: 'panqueques', gratis: false,
    titulo: 'Panqueques de banana',
    resumen: 'Desayuno rápido con dos ingredientes.',
    tiempo: '15 minutos', porciones: '6 panqueques chicos',
    ingredientes: ['1 banana bien madura', '2 huevos', '1 cucharada de almidón de maíz (opcional)', 'Canela a gusto'],
    pasos: ['Pisá la banana hasta que quede un puré.', 'Sumá los huevos, el almidón y la canela, y batí.', 'Cociná cucharadas de la mezcla en una sartén apenas aceitada, a fuego medio.', 'Dalos vuelta cuando se doren abajo.'],
    tip: 'Con miel, fruta o dulce de leche con sello.'
  },
  {
    id: 'budin', gratis: false,
    titulo: 'Budín de naranja',
    resumen: 'Esponjoso y perfumado, para la merienda.',
    tiempo: '1 hora', porciones: '1 budín',
    ingredientes: ['3 huevos', '150 g de azúcar', '100 ml de aceite', 'Jugo y ralladura de 1 naranja grande', '250 g de premezcla', '1 cucharadita de polvo de hornear'],
    pasos: ['Prendé el horno a 180 °C y aceitá un molde de budín.', 'Batí los huevos con el azúcar hasta que estén espumosos.', 'Sumá el aceite, el jugo y la ralladura.', 'Agregá la premezcla y el polvo de hornear, y mezclá suave.', 'Horneá unos 40 minutos, hasta que un palillo salga seco.'],
    tip: 'Cambiá la naranja por limón, o sumá chips de chocolate con sello.'
  },
  {
    id: 'milanesas', gratis: false,
    titulo: 'Milanesas sin TACC',
    resumen: 'Doraditas, al horno o fritas.',
    tiempo: '40 minutos', porciones: '4 porciones',
    ingredientes: ['600 g de carne en bifes finos (o pechugas)', '2 huevos', 'Ajo y perejil picados', 'Sal', 'Pan rallado sin TACC, o harina de maíz con sello mezclada con queso rallado'],
    pasos: ['Batí los huevos con el ajo, el perejil y la sal.', 'Pasá cada bife por el huevo y después por el rebozador, apretando bien.', 'Horneá en placa aceitada a 200 °C, unos 10 minutos de cada lado.', 'Si las freís, que el aceite sea solo para lo tuyo.'],
    tip: 'Pan rallado casero: secá pan sin TACC en el horno y procesalo.'
  },
  {
    id: 'salsa-blanca', gratis: false,
    titulo: 'Salsa blanca',
    resumen: 'Para canelones, verduras gratinadas y más.',
    tiempo: '15 minutos', porciones: 'medio litro',
    ingredientes: ['500 ml de leche', '2 cucharadas colmadas de almidón de maíz', '30 g de manteca', 'Sal y nuez moscada'],
    pasos: ['Disolvé el almidón en un poco de leche fría.', 'Calentá el resto de la leche con la manteca.', 'Sumá el almidón disuelto, revolviendo sin parar.', 'Cociná a fuego bajo hasta que espese y condimentá.'],
    tip: 'Si queda espesa, sumá un chorrito de leche.'
  },
  {
    id: 'galletitas', gratis: false,
    titulo: 'Galletitas de manteca',
    resumen: 'Para la merienda o para regalar.',
    tiempo: '40 minutos', porciones: 'unas 25 galletitas',
    ingredientes: ['100 g de manteca blanda', '80 g de azúcar', '1 huevo', 'Esencia de vainilla', '250 g de premezcla', '1/2 cucharadita de polvo de hornear'],
    pasos: ['Batí la manteca con el azúcar hasta que quede cremosa.', 'Sumá el huevo y la vainilla.', 'Agregá la premezcla y el polvo de hornear, y uní sin amasar de más.', 'Estirá la masa entre dos papeles manteca y cortá con cortantes.', 'Horneá a 180 °C de 12 a 15 minutos, hasta que estén apenas doradas en los bordes.'],
    tip: 'Si la masa se pone blanda, llevala 15 minutos a la heladera antes de cortar.'
  }
];

/* ---------- MIS COSAS: COCINA SEGURA ---------- */
CONTENIDO.cocinaSegura = [
  'Tengo mi propia tostadora (o tuesto en sartén limpia).',
  'Tengo un colador solo para lo sin TACC.',
  'Mis tablas y cucharas de madera son solo mías.',
  'Mis frascos de manteca, dulce y mermelada tienen etiqueta.',
  'Tengo un estante o cajón solo para mis productos.',
  'Revisé la alacena y separé lo que tiene gluten.',
  'Uso aceite aparte para freír lo mío.',
  'En el horno uso bandeja propia o papel manteca.',
  'Mi familia sabe cocinar primero lo sin TACC.',
  'Tengo una lista de marcas con sello que uso siempre.'
];

/* ---------- MIS COSAS: LISTA DE COMPRAS BASE ---------- */
CONTENIDO.listaBase = [
  'Premezcla con sello', 'Fécula de mandioca', 'Almidón de maíz', 'Harina de maíz o polenta',
  'Arroz', 'Fideos sin TACC', 'Pan sin TACC', 'Galletas de arroz',
  'Lentejas o garbanzos con sello', 'Huevos', 'Leche', 'Yogur con sello', 'Queso',
  'Carne, pollo o pescado', 'Frutas de estación', 'Verduras de estación', 'Papa y batata',
  'Yerba con sello', 'Aceite'
];

/* ---------- MIS COSAS: TARJETA PARA EL MOZO ---------- */
CONTENIDO.tarjetaMozo = {
  es: 'Tengo celiaquía. No puedo comer nada que tenga trigo, avena, cebada ni centeno, ni nada que se haya preparado con utensilios, aceite, agua o superficies que tocaron esos alimentos. Aunque sea una miga me hace daño. ¿Me ayudás a elegir un plato seguro? ¡Gracias!',
  en: 'I have celiac disease. I cannot eat anything that contains wheat, oats, barley or rye, or anything prepared with utensils, oil, water or surfaces that touched those foods. Even a crumb makes me sick. Could you help me choose a safe dish? Thank you!',
  pt: 'Tenho doença celíaca. Não posso comer nada que contenha trigo, aveia, cevada ou centeio, nem nada preparado com utensílios, óleo, água ou superfícies que tocaram esses alimentos. Mesmo uma migalha me faz mal. Pode me ajudar a escolher um prato seguro? Obrigado!'
};

/* =========================================================
   REVISÁ UNA ETIQUETA: palabras que la app busca
   Formato: [patrón, nombre que se muestra, explicación]
   El patrón va en minúscula y sin tildes.
   ========================================================= */
CONTENIDO.etiqueta = {
  rojo: [
    ['(?:(?:harina|germen|salvado|almidon|proteina|fibra|extracto|gluten)\\s+de\\s+)?trigo(?!\\s+sarraceno)', 'Trigo', 'Es uno de los cereales con gluten.'],
    ['gluten', 'Gluten', 'Es la proteína que le hace daño a tu intestino.'],
    ['avena', 'Avena', '[AR]En Argentina la avena no es apta para celíacos.[/AR][OTRO]La avena común suele contaminarse con trigo. Solo la certificada sin gluten y con el visto bueno de tu médico.[/OTRO]'],
    ['cebada(?:\\s+malteada)?', 'Cebada', 'Es uno de los cereales con gluten.'],
    ['centeno', 'Centeno', 'Es uno de los cereales con gluten.'],
    ['(?:(?:extracto|jarabe|harina|vinagre)\\s+de\\s+)?malta(?:\\s+de\\s+cebada)?', 'Malta', 'Se hace con cebada y tiene gluten.'],
    ['semola(?!\\s+de\\s+maiz)', 'Sémola', 'Es de trigo y tiene gluten.'],
    ['espelta|kamut|triticale|escanda', 'Variedades de trigo', 'Son parientes del trigo y tienen gluten.'],
    ['cuscus|couscous|bulgur|burgol', 'Cuscús o bulgur', 'Son de trigo y tienen gluten.'],
    ['seitan', 'Seitán', 'Está hecho de gluten puro.'],
    ['levadura\\s+de\\s+cerveza|cerveza', 'Cerveza', 'Se hace con cebada o trigo.'],
    ['pan\\s+rallado|rebozador|fideos(?!\\s+de\\s+(?:arroz|maiz))', 'Pan rallado o fideos', 'Se hacen con trigo, salvo que digan sin TACC.']
  ],
  amarillo: [
    ['harinas?(?!\\s+de\\b)', 'Harina sin aclarar', 'No dice de qué cereal es. En la mayoría de los productos es de trigo.'],
    ['almidon(?:es)?(?!\\s+(?:modificados?\\s+)?de\\b)', 'Almidón sin aclarar', 'Puede ser de maíz o mandioca, pero también de trigo. Si no lo aclara, no lo des por apto.'],
    ['proteinas?\\s+(?:vegetal(?:es)?|hidrolizadas?)(?:\\s+hidrolizadas?)?(?!\\s+de\\s+(?:soja|arroz|maiz|arveja))', 'Proteína vegetal', 'No aclara de qué se hace. A veces es de trigo.'],
    ['dextrina', 'Dextrina', 'Puede venir del maíz o del trigo.'],
    ['salsa\\s+de\\s+(?:soja|soya)|shoyu', 'Salsa de soja', 'Casi siempre lleva trigo. Solo con sello.'],
    ['salvado(?!\\s+de\\b)', 'Salvado sin aclarar', 'Suele ser de trigo.'],
    ['cereales?', 'Cereales sin aclarar', 'Pueden incluir trigo, avena, cebada o centeno.']
  ],
  advertencias: [
    ['(?:puede|pueden)\\s+contener\\s+(?:trazas\\s+(?:de\\s+)?)?(?:trigo|gluten|cebada|centeno|avena|cereales)', 'Advertencia de trazas', 'El fabricante avisa que puede tener gluten por contaminación. No es apto para celíacos.'],
    ['(?:trazas|rastros)\\s+de\\s+(?:trigo|gluten|cebada|centeno|avena|cereales)', 'Advertencia de trazas', 'El fabricante avisa que puede tener gluten por contaminación. No es apto para celíacos.'],
    ['(?:establecimiento|instalaciones?|planta|linea|fabrica)[^.;]{0,60}?(?:procesa|procesan|elabora|elaboran|manipula|manipulan|utiliza|utilizan)[^.;]{0,40}?(?:trigo|gluten|cebada|centeno|avena|cereales)', 'Advertencia de fábrica', 'Se elabora donde también se procesa gluten. Hay riesgo de contaminación: no es apto para celíacos.']
  ]
};

/* =========================================================
   MI INTESTINO, MES A MES: los hitos
   [días desde que empezó la dieta, título, texto]
   ========================================================= */
CONTENIDO.hitos = [
  [0, 'Hoy empieza tu camino', 'Sacar el gluten es el tratamiento. Desde hoy, tu intestino deja de recibir lo que lo inflamaba.'],
  [7, '1 semana', 'Algunas personas ya notan menos hinchazón y menos dolor de panza. Otras todavía no, y es normal.'],
  [30, '1 mes', 'Muchas personas notan mejoría en la digestión y más energía. Si seguís con síntomas, buscá gluten escondido: un frasco compartido, la tostadora, un condimento.'],
  [90, '3 meses', 'Tu intestino sigue reparándose. Es un buen momento para hablar con tu médico sobre cómo van tus análisis.'],
  [180, '6 meses', 'Suele ser el momento del primer control con anticuerpos. Llevá tu diario de síntomas a la consulta.'],
  [365, '1 año', 'Un año cuidándote. Toca el control anual. En muchos adultos el intestino tarda entre uno y dos años en recuperarse; en chicos suele ser más rápido.'],
  [730, '2 años', 'En muchas personas el intestino ya está recuperado. Los controles anuales siguen siendo parte del cuidado.']
];

/* =========================================================
   CONTENIDO PROGRAMADO (se abre solo el día indicado)
   Cualquier artículo, receta o menú con  desde: 'AAAA-MM-DD'
   queda oculto hasta esa fecha. Antes de la fecha se ve como
   "Próximamente" con cuenta regresiva. Ese día se abre solo
   y la campanita avisa (si cargás también la novedad).
   adelanto / incluye: lo que se ve en el aviso previo.
   sinAdelanto: true  =  no muestra aviso previo.
   ========================================================= */
CONTENIDO.novedades.push({
  id: 'n-2026-12-navidad',
  fecha: '2026-12-01',
  titulo: 'Se abrió: Navidad y Año Nuevo sin TACC',
  texto: 'La mesa de fin de año, plato por plato: qué tiene gluten, qué reemplazar y una receta de budín navideño. Lo encontrás en Comer.'
});

CONTENIDO.comer.push({
  id: 'navidad', gratis: false, desde: '2026-12-01',
  titulo: 'Navidad y Año Nuevo sin TACC',
  resumen: 'La mesa de fin de año, plato por plato.',
  adelanto: 'La mesa de fin de año está llena de gluten escondido: pan dulce, pionono, turrones, rellenos y salsas. Te mostramos qué reemplazar, qué revisar y cómo llegar a las 12 sin pasar hambre ni miedo.',
  incluye: ['Qué platos de la mesa navideña tienen gluten y cuáles no', 'Cómo pedirle a tu familia que cocine pensando en vos, sin discusiones', 'Una receta de budín navideño para llevar de regalo'],
  buscar: 'navidad sin tacc recetas celíacos',
  cuerpo: `
<p>En Navidad y Año Nuevo se cocina para muchos, todo se mezcla y es fácil que el gluten se cuele. Con un poco de organización, la mesa puede ser tuya también.</p>
<h3>Lo que suele tener gluten</h3>
<ul>
<li><strong>Pan dulce, budín inglés y mantecados:</strong> llevan harina de trigo.</li>
<li><strong>Pionono, sándwiches de miga y canapés:</strong> el pan y las masas llevan trigo.</li>
<li><strong>Empanadas, tartas y masas hojaldradas:</strong> llevan trigo.</li>
<li><strong>Rellenos de pavo o lechón:</strong> muchos llevan pan o pan rallado.</li>
<li><strong>Salsas espesadas con harina:</strong> preguntá cómo se hicieron.</li>
</ul>
<h3>Lo que hay que revisar</h3>
<ul>
<li><strong>Turrones:</strong> muchos llevan obleas. Solo con sello.</li>
<li><strong>Garrapiñadas, frutas abrillantadas y frutos secos pelados:</strong> solo con sello.</li>
<li><strong>Mayonesa y aderezos de ensaladas:</strong> solo con sello.</li>
<li><strong>Helados y postres armados:</strong> solo con sello.</li>
<li><strong>Licores y aperitivos:</strong> con sello o del listado oficial.</li>
</ul>
<h3>Lo que suele ser apto</h3>
<p>Carnes asadas o al horno sin adobos, ensaladas, vitel toné con mayonesa con sello, frutas, frutos secos con cáscara, helado con sello, sidra y champagne. La cerveza común, no.</p>
<h3>Para llegar tranquila a las 12</h3>
<ul>
<li>Pedí, con tiempo, que separen tu porción antes de mezclar nada.</li>
<li>Servite primero, con cubiertos y fuentes limpios.</li>
<li>Llevá tu propio postre y tu propio turrón.</li>
<li>Comé algo antes, por si la mesa no es segura.</li>
</ul>
<div class="nota">Pedir que cocinen pensando en vos no es molestar. Es cuidarte.</div>`
});

CONTENIDO.recetas.push({
  id: 'budin-navideno', gratis: false, desde: '2026-12-01', sinAdelanto: true,
  titulo: 'Budín navideño',
  resumen: 'Con frutas abrillantadas y nueces, para regalar.',
  tiempo: '1 hora', porciones: '1 budín',
  ingredientes: ['3 huevos', '150 g de azúcar', '100 ml de aceite', '50 ml de jugo de naranja', 'Ralladura de 1 limón', '250 g de premezcla', '1 cucharadita de polvo de hornear', '150 g de frutas abrillantadas y pasas de uva, con sello', '50 g de nueces picadas'],
  pasos: ['Prendé el horno a 180 °C y aceitá un molde de budín.', 'Mezclá las frutas, las pasas y las nueces con una cucharada de la premezcla, para que no se vayan al fondo.', 'Batí los huevos con el azúcar hasta que estén espumosos.', 'Sumá el aceite, el jugo y la ralladura.', 'Agregá la premezcla con el polvo de hornear y mezclá suave.', 'Incorporá las frutas y las nueces.', 'Horneá unos 45 minutos, hasta que un palillo salga seco.'],
  tip: 'Envolvelo en papel celofán con una cinta: es un regalo que alguien celíaca va a agradecer muchísimo.'
});

/* =========================================================
   ¿QUÉ COCINO HOY?  (marcás lo que tenés y te sugiere platos)
   heladera: [clave, nombre que se ve]
   ideas: ing = lo que sí o sí lleva | opc = lo que suma si lo tenés
   El aceite y la sal se dan por sentados.
   ========================================================= */
CONTENIDO.heladera = [
  ['huevo', 'Huevos'], ['papa', 'Papa'], ['batata', 'Batata'], ['arroz', 'Arroz'],
  ['pollo', 'Pollo'], ['carne', 'Carne'], ['pescado', 'Pescado'], ['zapallo', 'Zapallo'],
  ['zapallitos', 'Zapallitos'], ['tomate', 'Tomate'], ['cebolla', 'Cebolla'], ['zanahoria', 'Zanahoria'],
  ['espinaca', 'Espinaca o acelga'], ['queso', 'Queso'], ['leche', 'Leche'], ['lentejas', 'Lentejas'],
  ['choclo', 'Choclo'], ['polenta', 'Polenta'], ['mandioca', 'Mandioca'], ['banana', 'Banana']
];

CONTENIDO.ideas = [
  { id: 'tortilla-papas', titulo: 'Tortilla de papas', ing: ['papa', 'huevo'], opc: ['cebolla'], tiempo: '30 min',
    pasos: ['Pelá las papas (y la cebolla, si usás) y cortalas en rodajas finas.', 'Cocinalas en una sartén con aceite a fuego bajo, hasta que estén tiernas.', 'Batí los huevos con sal, mezclalos con las papas y dejá reposar 5 minutos.', 'Cuajá la mezcla en la sartén, dala vuelta con un plato y terminá de cocinar.'] },
  { id: 'revuelto-zapallitos', titulo: 'Revuelto de zapallitos', ing: ['zapallitos', 'huevo'], opc: ['cebolla', 'queso'], tiempo: '15 min',
    pasos: ['Cortá los zapallitos en cubos y la cebolla en tiras finas.', 'Salteá todo en una sartén hasta que se ablande.', 'Sumá los huevos batidos y revolvé hasta que cuajen.', 'Terminá con queso rallado, si tenés.'] },
  { id: 'pollo-horno', titulo: 'Pollo al horno con papas', ing: ['pollo', 'papa'], opc: ['cebolla', 'zanahoria'], tiempo: '1 hora',
    pasos: ['Prendé el horno a 200 °C.', 'Poné el pollo en una fuente con las papas, la cebolla y la zanahoria cortadas en trozos.', 'Condimentá con sal, pimienta y un chorrito de aceite.', 'Horneá de 50 a 60 minutos, dando vuelta todo a la mitad, hasta que esté dorado.'] },
  { id: 'arroz-pollo', titulo: 'Arroz con pollo', ing: ['arroz', 'pollo'], opc: ['cebolla', 'zanahoria', 'tomate'], tiempo: '45 min',
    pasos: ['Sellá el pollo en trozos en una olla con aceite y reservá.', 'En la misma olla, rehogá la cebolla, la zanahoria y el tomate.', 'Sumá el arroz, el pollo y agua caliente (el doble de volumen que de arroz).', 'Cociná tapado a fuego bajo unos 20 minutos, hasta que el arroz esté listo.'] },
  { id: 'pastel-papa', titulo: 'Pastel de papa', ing: ['carne', 'papa'], opc: ['cebolla', 'huevo', 'queso', 'leche'], tiempo: '1 hora',
    pasos: ['Hervé las papas y hacé un puré con un poco de leche, si tenés, y sal.', 'Rehogá la carne picada con cebolla y condimentos, y sumá un huevo duro picado, si querés.', 'Armá capas en una fuente: carne y puré arriba.', 'Gratiná con queso en el horno hasta que se dore.'] },
  { id: 'guiso-lentejas', titulo: 'Guiso de lentejas', ing: ['lentejas'], opc: ['papa', 'zanahoria', 'cebolla', 'zapallo', 'carne'], tiempo: '50 min',
    pasos: ['Revisá las lentejas, lavalas y, si es necesario, dejalas en remojo.', 'Rehogá la cebolla y la zanahoria en una olla.', 'Sumá las lentejas, la papa y el zapallo en cubos, la carne si tenés, y cubrí con agua.', 'Cociná a fuego bajo hasta que todo esté tierno.'],
    tip: 'Comprá las lentejas con sello y revisalas antes de cocinar: a veces vienen con granos de trigo mezclados.' },
  { id: 'crema-zapallo', titulo: 'Crema de zapallo', ing: ['zapallo'], opc: ['cebolla', 'papa', 'leche', 'queso'], tiempo: '30 min',
    pasos: ['Hervé el zapallo con la cebolla y la papa, en trozos, hasta que estén tiernos.', 'Procesá todo con parte del caldo.', 'Sumá un chorrito de leche y sal, y calentá un minuto.', 'Servila con queso rallado.'] },
  { id: 'panqueques-banana', titulo: 'Panqueques de banana', ing: ['banana', 'huevo'], opc: [], tiempo: '10 min',
    pasos: ['Pisá la banana hasta que quede un puré.', 'Mezclala con los huevos y un poco de canela.', 'Cociná cucharadas de la mezcla en una sartén apenas aceitada.', 'Dalos vuelta cuando se doren.'] },
  { id: 'tortitas-choclo', titulo: 'Tortitas de choclo', ing: ['choclo', 'huevo'], opc: ['queso', 'cebolla'], tiempo: '20 min',
    pasos: ['Desgranalo (o escurrilo si es de lata, con sello) y mezclalo con el huevo, queso y cebolla picada.', 'Sumá una cucharada de almidón de maíz con sello si la mezcla está muy húmeda.', 'Cociná cucharadas en una sartén con aceite, hasta que se doren de los dos lados.'] },
  { id: 'papas-gratinadas', titulo: 'Papas gratinadas', ing: ['papa', 'queso'], opc: ['leche', 'carne'], tiempo: '45 min',
    pasos: ['Cortá las papas en rodajas finas.', 'Acomodalas en una fuente por capas con sal y queso rallado.', 'Cubrí con un poco de leche, si tenés.', 'Horneá a 200 °C hasta que estén tiernas y doradas.'] },
  { id: 'pescado-horno', titulo: 'Pescado al horno con papas', ing: ['pescado', 'papa'], opc: ['tomate', 'cebolla', 'zanahoria'], tiempo: '40 min',
    pasos: ['Cortá las papas en rodajas y acomodalas en una fuente con un poco de aceite y sal.', 'Horneá 15 minutos a 200 °C.', 'Sumá el pescado, el tomate y la cebolla, y condimentá.', 'Horneá 15 a 20 minutos más, hasta que el pescado esté cocido.'] },
  { id: 'omelette-espinaca', titulo: 'Omelette de espinaca', ing: ['espinaca', 'huevo'], opc: ['queso', 'cebolla'], tiempo: '15 min',
    pasos: ['Salteá la espinaca (y la cebolla) en una sartén hasta que se ablande.', 'Sumá los huevos batidos con sal.', 'Cuando empiece a cuajar, ponele queso y doblá el omelette.'] },
  { id: 'arroz-leche', titulo: 'Arroz con leche', ing: ['arroz', 'leche'], opc: [], tiempo: '45 min',
    pasos: ['Hervé el arroz en agua 10 minutos y escurrilo.', 'Cocinalo en la leche con azúcar, canela y cáscara de limón, a fuego bajo.', 'Revolvé seguido hasta que espese, unos 30 minutos.', 'Servilo tibio o frío.'] },
  { id: 'batatas-queso', titulo: 'Batatas al horno con queso', ing: ['batata', 'queso'], opc: ['cebolla'], tiempo: '40 min',
    pasos: ['Cortá las batatas en mitades o rodajas gruesas.', 'Horneá a 200 °C hasta que estén tiernas.', 'Cubrilas con queso (y cebolla salteada, si tenés) y gratiná unos minutos.'] },
  { id: 'ensalada-arroz', titulo: 'Ensalada de arroz', ing: ['arroz', 'huevo', 'tomate'], opc: ['zanahoria', 'cebolla', 'choclo'], tiempo: '25 min',
    pasos: ['Hervé el arroz, escurrilo y dejalo enfriar.', 'Hervé los huevos duros y cortalos.', 'Mezclá todo con el tomate y lo que tengas: zanahoria rallada, cebolla, choclo.', 'Condimentá con aceite, sal y limón.'] },
  { id: 'hamburguesas', titulo: 'Hamburguesas caseras', ing: ['carne'], opc: ['cebolla', 'huevo', 'tomate', 'queso'], tiempo: '20 min',
    pasos: ['Mezclá la carne picada con cebolla rallada, sal y pimienta (y un huevo, para que ligue).', 'Armá los medallones con las manos húmedas.', 'Cocinalos en una plancha o sartén bien caliente.', 'Servilos con tomate y queso, sobre ensalada o con pan sin TACC.'],
    tip: 'No les pongas pan rallado común: el huevo alcanza para que se mantengan firmes.' },
  { id: 'zapallo-relleno', titulo: 'Zapallo relleno', ing: ['zapallo', 'queso'], opc: ['arroz', 'cebolla', 'carne'], tiempo: '1 hora',
    pasos: ['Cortá el zapallo al medio, sacale las semillas y hornealo unos 30 minutos a 200 °C.', 'Rellenalo con queso y lo que tengas: arroz cocido, cebolla salteada o carne.', 'Gratiná en el horno unos 15 minutos más.'] },
  { id: 'pizza-polenta', titulo: 'Pizza de polenta', ing: ['polenta', 'tomate', 'queso'], opc: ['cebolla'], tiempo: '40 min',
    pasos: ['Cociná la polenta con sal según el envase (con sello) y extendela en una placa aceitada.', 'Dejala enfriar un rato y horneala 15 minutos a 220 °C.', 'Cubrila con tomate, queso y cebolla.', 'Gratiná unos 10 minutos.'] },
  { id: 'polenta-salsa', titulo: 'Polenta con salsa', ing: ['polenta', 'tomate'], opc: ['queso', 'cebolla', 'carne'], tiempo: '30 min',
    pasos: ['Preparé una salsa rehogando cebolla y tomate (y la carne, si tenés).', 'Cociná la polenta (con sello) según el envase.', 'Servila con la salsa y queso rallado.'] },
  { id: 'mandioca-huevo', titulo: 'Mandioca hervida con huevo', ing: ['mandioca', 'huevo'], opc: ['queso'], tiempo: '30 min',
    pasos: ['Pelá la mandioca, cortala en trozos y hervila hasta que esté tierna.', 'Servila con huevos fritos o revueltos.', 'Sumá queso rallado, si tenés.'] },
  { id: 'bolitas-mandioca', titulo: 'Bolitas de mandioca y queso', ing: ['mandioca', 'queso'], opc: ['huevo'], tiempo: '40 min',
    pasos: ['Hervé la mandioca y hacela puré.', 'Mezclala con queso y un huevo, si querés.', 'Armá bolitas y horneá a 200 °C hasta que se doren, unos 20 minutos.'] },
  { id: 'licuado-banana', titulo: 'Licuado de banana', ing: ['banana', 'leche'], opc: [], tiempo: '5 min',
    pasos: ['Licuá la banana con la leche bien fría.', 'Endulzá con miel, si querés, y tomalo enseguida.'] },
  { id: 'verduras-horno', titulo: 'Verduras al horno', ing: ['zapallitos', 'tomate', 'cebolla'], opc: ['queso', 'zanahoria', 'batata', 'papa'], tiempo: '40 min',
    pasos: ['Cortá todas las verduras en trozos parejos.', 'Ponelas en una fuente con aceite, sal y orégano.', 'Horneá a 200 °C unos 30 minutos.', 'Gratiná con queso, si tenés.'] },
  { id: 'guiso-arroz-carne', titulo: 'Guiso de arroz con carne', ing: ['arroz', 'carne'], opc: ['cebolla', 'zanahoria', 'papa', 'tomate'], tiempo: '50 min',
    pasos: ['Dorá la carne en cubos en una olla con aceite.', 'Sumá cebolla, zanahoria, papa y tomate, y rehogá.', 'Agregá agua caliente y cociná 20 minutos.', 'Sumá el arroz y cociná otros 15 minutos, hasta que esté listo.'] },
  { id: 'sopa-verduras', titulo: 'Sopa de verduras con arroz', ing: ['zanahoria', 'arroz'], opc: ['zapallo', 'cebolla', 'papa', 'espinaca'], tiempo: '35 min',
    pasos: ['Cortá las verduras en cubos chicos.', 'Cocinalas en agua con sal 15 minutos.', 'Sumá el arroz y cociná 15 minutos más.', 'Servila caliente, con un chorrito de aceite.'] },
  { id: 'albondigas-arroz', titulo: 'Albóndigas de carne y arroz', ing: ['carne', 'arroz', 'huevo'], opc: ['cebolla', 'tomate'], tiempo: '45 min',
    pasos: ['Mezclá la carne picada con arroz ya cocido, huevo, cebolla rallada y sal.', 'Armá las albóndigas.', 'Cocinalas en una salsa de tomate a fuego bajo unos 20 minutos.'],
    tip: 'El arroz cocido hace lo que haría el pan: las deja tiernas y firmes, sin gluten.' }
];

/* =========================================================
   MENSAJES LISTOS (para copiar o mandar por WhatsApp)
   {nombre} se completa con el nombre de la otra persona.
   Lo que está entre [corchetes] lo completa quien lo usa.
   ========================================================= */
CONTENIDO.mensajes = [
  { id: 'invitacion', titulo: 'Me invitaron a comer', cuando: 'Para avisar antes de ir a una casa, sin que suene a molestia.',
    texto: 'Hola{nombre}! Gracias por invitarme 😊 Quería avisarte que tengo celiaquía: no puedo comer nada con trigo, avena, cebada ni centeno, ni nada que haya tocado esos alimentos (una miga alcanza para hacerme mal). No quiero que te compliques: si te parece, llevo mi propia comida y me siento a la mesa con todos. Y si querés cocinarme algo, contame y te cuento cómo hacerlo fácil. ¡Gracias por entenderme!' },
  { id: 'restaurante', titulo: 'Reservar en un restaurante', cuando: 'Para consultar antes de reservar.',
    texto: 'Hola, buenas. Quisiera reservar una mesa para [cantidad] personas el [día] a las [hora]. Una de las personas tiene celiaquía. ¿Tienen opciones [AR]sin TACC[/AR][OTRO]sin gluten[/OTRO] y cocinan evitando la contaminación (utensilios, plancha y aceite aparte)? Si me pueden contar qué platos prepararían, mejor. ¡Muchas gracias!' },
  { id: 'escuela', titulo: 'Avisar en la escuela o el jardín', cuando: 'Para coordinar comedor, merienda y cumpleaños.',
    texto: 'Hola{nombre}, buenas. Les escribo para avisar que mi hijo/a tiene celiaquía y no puede comer nada con trigo, avena, cebada ni centeno. Una miga o un utensilio compartido le hacen daño. ¿Podemos hablar sobre cómo organizar el comedor, la merienda y los cumpleaños? Yo puedo mandar su vianda y su porción para los festejos. Gracias por cuidarlo/a.' },
  { id: 'trabajo', titulo: 'Almuerzo o evento en el trabajo', cuando: 'Para pedir una opción segura o llevar tu vianda.',
    texto: 'Hola{nombre}, ¿cómo estás? Para el [almuerzo / evento] del [día]: tengo celiaquía, así que necesito que mi comida sea [AR]sin TACC[/AR][OTRO]sin gluten[/OTRO] y esté preparada sin contacto con harinas, panes ni utensilios compartidos. Si es más fácil, llevo mi vianda y la calentamos aparte. ¿Me ayudás a coordinarlo? ¡Gracias!' },
  { id: 'avion', titulo: 'Comida sin gluten en un vuelo', cuando: 'Para pedirla a la aerolínea al sacar el pasaje.',
    texto: 'Hola, buenas. Quisiera solicitar comida libre de gluten (código GFML) para mi vuelo [número de vuelo] del [fecha], reserva [código de reserva]. Tengo celiaquía. Muchas aerolíneas piden avisar con anticipación, por eso lo pido ahora. ¿Me pueden confirmar que quedó registrado? Gracias.' },
  { id: 'familia', titulo: 'Explicarle a mi familia', cuando: 'Para contar qué es la celiaquía y cómo ayudar, en un minuto.',
    texto: 'Quiero contarte algo que me ayuda mucho si lo sabés 💚 Tengo celiaquía: mi cuerpo reacciona al gluten (trigo, avena, cebada y centeno) y me daña el intestino, aunque sea una miga. No es una moda ni una dieta. Lo que más me ayuda: 1) que cocinemos lo mío primero y con utensilios limpios, 2) que no mezclen cucharas ni cuchillos entre fuentes, 3) que me dejen leer las etiquetas sin apuro, 4) que me avisen si no están seguros de algo. ¡Gracias por cuidarme! 🙏' },
  { id: 'gracias', titulo: 'Agradecer a quien cocinó para mí', cuando: 'Para reconocer el esfuerzo y ayudar a que la próxima sea más fácil.',
    texto: 'Gracias por cocinar pensando en mí 💚 Me di cuenta del esfuerzo y me hizo sentir muy cuidado/a. Si te sirve para la próxima, te cuento algo que lo hace más fácil: [lo que más ayuda]. ¡Gracias de nuevo!' }
];

/* =========================================================
   ¿ES SEGURO ESTE LUGAR?  (preguntas para hacer antes de ir)
   clave: true  = si responden "no", la confianza baja sí o sí
   ========================================================= */
CONTENIDO.lugarPreguntas = [
  { id: 'carta', t: '¿Tienen opciones [AR]sin TACC[/AR][OTRO]sin gluten[/OTRO] en la carta?', peso: 1 },
  { id: 'saben', t: '¿Saben qué es la celiaquía y la contaminación cruzada?', peso: 3, clave: true },
  { id: 'utensilios', t: '¿Cocinan lo sin gluten con utensilios y superficies aparte?', peso: 3, clave: true },
  { id: 'freidora', t: 'Si fríen: ¿la freidora y el aceite son solo para lo sin gluten?', peso: 2, na: 'No fríen' },
  { id: 'asoc', t: '¿Están reconocidos o capacitados por una asociación de celíacos?', peso: 1 }
];

/* =========================================================
   DETECTIVE DEL GLUTEN ESCONDIDO
   [id, lo que marca la persona, la pista que recibe]
   ========================================================= */
CONTENIDO.detective = [
  ['nuevo', 'Probé un producto envasado nuevo o cambié de marca', 'Buscá ese envase: ¿tiene el sello? ¿dice "puede contener trazas"? Pegá sus ingredientes en "Revisá una etiqueta".'],
  ['afuera', 'Comí fuera de casa o pedí delivery', 'La contaminación cruzada en cocinas ajenas es una de las causas más frecuentes. Anotá el lugar y evaluá su confianza en "¿Es seguro este lugar?".'],
  ['cocinaron', 'Alguien cocinó para mí', 'Preguntá qué usó: aceite, utensilios, caldos, condimentos. Muchas veces el gluten estaba en un ingrediente en el que nadie pensó.'],
  ['compartidos', 'Usé la tostadora, el colador, la tabla o el aceite que también se usan con gluten', 'Son los puntos más comunes de contaminación en casa. Repasá la lista de "Revisar mi cocina".'],
  ['frascos', 'Compartí manteca, dulce, mermelada o queso untable con alguien que come pan común', 'Un cuchillo con migas contamina el frasco entero. Tené frascos propios y con etiqueta.'],
  ['remedio', 'Empecé un remedio o un suplemento nuevo', 'Preguntá en la farmacia si es apto. No lo dejes sin hablarlo antes con tu médico.'],
  ['granel', 'Comí algo a granel o sin envase (legumbres, cereales, frutos secos, especias)', 'Los productos a granel se mezclan fácil con trigo. Comprá envasados y con sello.'],
  ['mate', 'Tomé mate o comí en una ronda donde había galletitas o pan', 'Las migas llegan a la bombilla, a las tazas y al azucarero. Usá tus propias cosas.'],
  ['cosmetico', 'Estrené un labial, un bálsamo o una pasta dental', 'Lo que se puede tragar importa. Verificá que sea apto.'],
  ['casero', 'Cociné con un ingrediente nuevo: premezcla, fécula o harina', 'Revisá que tenga sello y que no se haya cruzado con harina común: el polvillo viaja por el aire.'],
  ['otro', 'Pasé días con estrés, poco sueño o un resfrío', 'No todos los síntomas vienen del gluten. Si no encontrás pistas, mencionalo en tu próxima consulta.']
];

/* =========================================================
   GUÍA DEL SÚPER (artículo en la sección Comer)
   ========================================================= */
CONTENIDO.comer.push({
  id: 'super', gratis: false,
  titulo: 'El súper, pasillo por pasillo',
  resumen: 'Dónde podés comprar tranquila y dónde conviene mirar con lupa.',
  buscar: 'compras supermercado sin TACC celíacos',
  cuerpo: `
<p>Con esta guía vas a recorrer el súper sin dudar. Verde, podés comprar. Amarillo, mirá el sello. Rojo, no.</p>
<h3>Verdulería y frutería <span class="eti si">Apto</span></h3>
<p>Frutas, verduras, papa, batata, mandioca y choclo frescos son aptos. Lavalos bien. Los secos, deshidratados o ya preparados (ensaladas con aderezo, verduras congeladas con salsa), solo con sello.</p>
<h3>Carnicería y pescadería <span class="eti si">Apto</span></h3>
<p>Las carnes y los pescados frescos son aptos. Chorizos, hamburguesas, milanesas, carnes marinadas y rellenas, solo con sello. Pedí que usen un cuchillo y una tabla limpios.</p>
<h3>Huevos y lácteos <span class="eti ojo">Con sello</span></h3>
<p>Huevos y leche común, aptos. Quesos rallados, untables y fundidos, yogures saborizados o con cereales y postres, solo con sello.</p>
<h3>Almacén <span class="eti ojo">Con sello</span></h3>
<p>Acá hay que mirar cada envase. Arroz, aceite, azúcar y sal suelen ser aptos. Fideos, harinas, galletitas, caldos, salsas, aderezos, condimentos molidos y cereales, solo con sello. Las legumbres, también con sello, y revisalas antes de cocinar.</p>
<h3>Fiambrería <span class="eti ojo">Con cuidado</span></h3>
<p>Los fiambres pueden llevar gluten y las máquinas cortan de todo. Elegí fiambres con sello y pedí que corten con la máquina limpia y con guantes nuevos. Si no hay opción, llevalos envasados.</p>
<h3>Panadería y repostería <span class="eti no">Evitá</span></h3>
<p>El pan, las facturas y las tortas tienen gluten, y el polvo de harina flota en el aire. Si querés productos sin TACC, que estén cerrados y con el sello.</p>
<h3>Bebidas</h3>
<p>Agua, soda, vino y la mayoría de las gaseosas son aptas. Jugos en polvo, bebidas con malta y cerveza común, no. Licores, con sello.</p>
<h3>Congelados <span class="eti ojo">Con sello</span></h3>
<p>Papas fritas congeladas, empanadas, hamburguesas y nuggets suelen llevar gluten o rebozado. Solo con sello.</p>
<div class="nota">Usá el semáforo en tu lista de compras: al escribir cada cosa, te muestra si es apta, si lleva sello o si tiene gluten.</div>`
});

CONTENIDO.novedades.push({
  id: 'n-2026-10-sorpresas',
  fecha: '2026-10-07',
  titulo: 'Siete herramientas nuevas',
  texto: 'Preguntale a una IA con tu duda ya escrita, qué cocino hoy con lo que tenés, mensajes listos para avisar de tu celiaquía, un medidor de confianza para restaurantes, el detective del gluten escondido, la lista de compras con semáforo y un informe de tu diario para llevar a tu médico. Las encontrás en Inicio y en Mis cosas.'
});

/* =========================================================
   PREGUNTALE A UNA IA: dudas sugeridas por tema
   preguntas: [tema, texto, 1 = aparece en "las que más se hacen"]
   Se pueden sumar más cuando quieras: solo agregá una línea.
   ========================================================= */
CONTENIDO.preguntasIA = {
  temas: [
    ['sintomas', 'Síntomas'], ['diagnostico', 'Diagnóstico y controles'], ['alimentos', 'Alimentos'],
    ['etiquetas', 'Etiquetas y cocina'], ['afuera', 'Salir y viajar'], ['familia', 'Chicos y familia'],
    ['salud', 'Salud y bienestar'], ['remedios', 'Remedios y cosmética']
  ],
  preguntas: [
    ['sintomas', '¿Qué síntomas puede tener un adulto con celiaquía además de los digestivos?', 1],
    ['sintomas', '¿Puede haber celiaquía sin síntomas de panza?'],
    ['sintomas', '¿Por qué sigo con síntomas aunque hago la dieta sin gluten?', 1],
    ['sintomas', '¿Qué es la dermatitis herpetiforme?'],
    ['sintomas', '¿Cuánto tarda en recuperarse el intestino después de dejar el gluten?'],
    ['diagnostico', '¿Qué estudios se piden para confirmar la celiaquía?', 1],
    ['diagnostico', '¿Por qué no hay que dejar el gluten antes de hacerse los estudios?'],
    ['diagnostico', '¿Cada cuánto tengo que hacerme controles con celiaquía?'],
    ['diagnostico', '¿Mis hijos o hermanos tienen que estudiarse si tengo celiaquía?'],
    ['diagnostico', '¿Qué significa tener los anticuerpos altos y cómo bajan?'],
    ['alimentos', '¿La avena es segura para personas con celiaquía?', 1],
    ['alimentos', '¿Qué cereales y harinas son naturalmente sin gluten?'],
    ['alimentos', '¿Puedo tomar alcohol teniendo celiaquía?'],
    ['alimentos', '¿Las legumbres y los cereales a granel son seguros?'],
    ['alimentos', '¿El almidón que figura en las etiquetas puede tener gluten?'],
    ['etiquetas', '¿Cómo evito la contaminación cruzada en una cocina compartida?', 1],
    ['etiquetas', '¿Qué significa "puede contener trazas de gluten"?'],
    ['etiquetas', '¿Cuántas partes por millón de gluten permite un producto sin gluten?'],
    ['etiquetas', '¿Puedo usar los mismos utensilios si los lavo bien?'],
    ['etiquetas', '¿Cómo leo una etiqueta si el producto no tiene sello?'],
    ['afuera', '¿Cómo pido comida segura en un restaurante si tengo celiaquía?', 1],
    ['afuera', '¿Qué le pregunto a alguien antes de comer en su casa?'],
    ['afuera', '¿Cómo viajo en avión con celiaquía?'],
    ['afuera', '¿Es seguro comer en una parrilla?'],
    ['afuera', '¿Cómo me organizo para un cumpleaños o un casamiento?'],
    ['familia', '¿Cómo le explico la celiaquía a un niño?', 1],
    ['familia', '¿Cómo organizo la escuela y los cumpleaños de un hijo con celiaquía?'],
    ['familia', '¿Cuándo se puede sospechar celiaquía en un bebé?'],
    ['familia', '¿Toda la familia tiene que dejar el gluten en casa?'],
    ['salud', '¿Qué vitaminas y minerales suelen faltar en la celiaquía?'],
    ['salud', '¿Qué tengo que saber sobre celiaquía y embarazo?'],
    ['salud', '¿La celiaquía puede afectar los huesos?'],
    ['salud', '¿La celiaquía se asocia con otras enfermedades autoinmunes?'],
    ['salud', '¿Qué hago para no sentirme sola ni ansiosa con la dieta?', 1],
    ['remedios', '¿Cómo sé si un remedio tiene gluten?', 1],
    ['remedios', '¿Los cosméticos o la pasta dental pueden tener gluten?'],
    ['remedios', '¿Puedo comulgar teniendo celiaquía?'],
    ['remedios', '¿Un suplemento vitamínico puede tener gluten?']
  ]
};
