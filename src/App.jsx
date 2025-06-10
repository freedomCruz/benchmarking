import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Users, Target, ThumbsDown, ShieldCheck, Gem, ShoppingCart, Settings, BarChart2, FileText, Bell, Share2, Star, Smartphone, QrCode, Bot, MapPin, Ticket, LayoutGrid, Heart, Zap, MessageSquare, DollarSign, Key, Briefcase, Handshake, Cpu } from 'lucide-react';

// --- DATOS DE LA PRESENTACIÓN ---

const dataPerfil = [
  { name: '18-24', '%': 25 },
  { name: '25-34', '%': 46 },
  { name: '35-44', '%': 20 },
  { name: '45+', '%': 9 },
];

const dataTemores = [
  { subject: 'FOMO', A: 9, fullMark: 10 },
  { subject: 'Fraude/Reventa', A: 8, fullMark: 10 },
  { subject: 'Precios Dinámicos', A: 7, fullMark: 10 },
  { subject: 'Lentitud Plataforma', A: 6, fullMark: 10 },
  { subject: 'Pérdida de Evento', A: 7, fullMark: 10 },
];

const archetypesData = [
    {
        name: 'El "Fan Hunter" Digital',
        role: 'Apasionado por eventos',
        quote: 'Vive la emoción al máximo, pero teme quedarse fuera.',
        image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        bio: 'Altamente activo en redes sociales. Busca incansablemente boletos para sus eventos soñados, utilizando múltiples dispositivos para asegurar su entrada. La velocidad y la eficiencia son clave para él.',
        personality: [
            { trait: 'Introvertido', value: 80, opposite: 'Extrovertido' },
            { trait: 'Racional', value: 30, opposite: 'Emocional' },
            { trait: 'Observador', value: 70, opposite: 'Intuitivo' }
        ],
        objectives: [
            'Conseguir boletos a precio justo.',
            'Asegurar la entrada antes de que se agoten.',
            'Conectar con otros fans del evento.'
        ],
        frustrations: [
            'Fallas o lentitud en la plataforma.',
            'Precios dinámicos que se sienten injustos.',
            'La reventa abusiva y el riesgo de fraude.'
        ],
        interests: ['Conciertos', 'Festivales', 'Redes Sociales', 'Tecnología'],
        needs: 'Busca procesos de compra rápidos y fluidos. Necesita información clara sobre disponibilidad y precios, y opciones seguras de reventa oficial.'
    },
    {
        name: 'El Comprador Precavido',
        role: 'Prioriza la seguridad',
        quote: 'La comodidad es buena, pero la seguridad es lo primero.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        bio: 'Utiliza canales online por comodidad, pero verifica activamente la legitimidad de los sitios. Prefiere plataformas con garantías, buena reputación y políticas claras.',
        personality: [
            { trait: 'Introvertido', value: 30, opposite: 'Extrovertido' },
            { trait: 'Racional', value: 85, opposite: 'Emocional' },
            { trait: 'Observador', value: 90, opposite: 'Intuitivo' }
        ],
        objectives: [
            'Realizar una compra 100% segura.',
            'Entender todas las tarifas antes de pagar.',
            'Tener acceso a soporte si algo sale mal.'
        ],
        frustrations: [
            'Sitios web que parecen poco profesionales.',
            'Costos ocultos que aparecen al final.',
            'Políticas de reembolso confusas o inexistentes.'
        ],
        interests: ['Planificación', 'Finanzas personales', 'Consumo responsable', 'Eventos culturales'],
        needs: 'Responde a señales de seguridad (certificados, logos de confianza). Valora los boletos digitales seguros y la transparencia total en costos.'
    },
    {
        name: 'El Usuario Tradicional',
        role: 'Iniciándose en el mundo digital',
        quote: 'La tecnología es útil, si es fácil de entender.',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        bio: 'Puede sentir aprensión o confusión con los procesos digitales. A menudo necesita ayuda de familiares o amigos. Valora la simplicidad y los procesos familiares por encima de todo.',
        personality: [
            { trait: 'Introvertido', value: 60, opposite: 'Extrovertido' },
            { trait: 'Racional', value: 70, opposite: 'Emocional' },
            { trait: 'Observador', value: 40, opposite: 'Intuitivo' }
        ],
        objectives: [
            'Completar la compra sin errores.',
            'Entender claramente cada paso del proceso.',
            'Sentir que el cambio a digital vale la pena.'
        ],
        frustrations: [
            'Interfaces complejas o con muchos pasos.',
            'No encontrar un número de teléfono para pedir ayuda.',
            'Términos y condiciones largos y difíciles de leer.'
        ],
        interests: ['Familia', 'Eventos locales', 'Paseos', 'TV'],
        needs: 'Se beneficia de interfaces muy intuitivas y "a prueba de errores". Responde a campañas informativas y tutoriales. Valora el soporte humano accesible.'
    }
];

// --- COMPONENTES DE UI ---

const Card = ({ children, className = '' }) => (
  <div className={`bg-slate-800 border border-slate-700 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 border-b border-slate-700 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-sky-400 ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const NavItem = ({ icon: Icon, children, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-sky-500/20 text-sky-400'
        : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
    }`}
  >
    <Icon className="mr-3 h-5 w-5" />
    {children}
  </button>
);


// --- SECCIONES DE LA PRESENTACIÓN ---

const SectionIntro = () => (
    <div className="text-center flex flex-col justify-center items-center h-full">
        <Gem size={64} className="text-sky-400 mb-6 animate-pulse" />
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            Propuesta de Valor: Plataforma de Ticketing
        </h1>
        <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Análisis de mercado, perfiles de usuario y prototipo para una experiencia de compra de boletas superior.
        </p>
         <p className="mt-8 text-slate-400">Navega por las secciones en el menú de la izquierda.</p>
    </div>
);

const SectionPanorama = () => (
  <Card>
    <CardHeader>
      <CardTitle>Panorama General 2024</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-slate-300">
      <p>El comercio electrónico sigue creciendo en Latinoamérica. En Colombia se superaron los <span className="text-sky-400 font-semibold">USD 52.000 millones</span> en ventas online durante 2024. A nivel regional, las ventas minoristas digitales alcanzan los <span className="text-sky-400 font-semibold">USD 180.000 millones.</span></p>
      <p>El segmento de <span className="font-semibold text-white">smart ticketing (boletas electrónicas)</span> ya representa más de <span className="text-sky-400 font-semibold">USD 1.000 millones</span> con una tasa de crecimiento anual del <span className="text-green-400 font-bold">16,6%.</span></p>
      <p className="text-xs text-slate-500 pt-4">Fuente: Payments CMI, eMarketer, Grand View Research (2024).</p>
    </CardContent>
  </Card>
);

const SectionPerfil = () => (
  <Card>
    <CardHeader>
      <CardTitle>Perfil del Comprador (Ticketmaster Colombia 2024)</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-300 mb-6">Los datos revelan un público altamente digitalizado. El 51% son mujeres y 49% hombres. La mayor concentración se encuentra entre los <span className="text-white font-semibold">25 y 34 años (46%)</span>, seguidos por el segmento de 18 a 24 años (25%). Esta audiencia valora la rapidez, seguridad y transparencia.</p>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dataPerfil} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#334155',
                color: '#f1f5f9'
              }}
            />
            <Legend wrapperStyle={{ color: '#f1f5f9' }} />
            <Bar dataKey="%" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const ArchetypeCard = ({ archetype }) => (
    <Card className="flex flex-col md:flex-row overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="md:w-1/3 bg-slate-700 p-6 flex flex-col items-center justify-center text-center">
            <img src={archetype.image} alt={archetype.name} className="w-32 h-32 rounded-full object-cover border-4 border-sky-400 mb-4" />
            <h4 className="text-2xl font-bold text-white">{archetype.name}</h4>
            <p className="text-sky-400 font-medium">{archetype.role}</p>
            <p className="text-sm text-slate-300 mt-2 italic">"{archetype.quote}"</p>
        </div>
        <div className="md:w-2/3 p-6 space-y-6">
            <div>
                <h5 className="font-bold text-sky-500 mb-2">BIOGRAFÍA</h5>
                <p className="text-slate-300 text-sm">{archetype.bio}</p>
            </div>
             <div>
                <h5 className="font-bold text-sky-500 mb-3">PERSONALIDAD</h5>
                <div className="space-y-3">
                    {archetype.personality.map(p => (
                        <div key={p.trait}>
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>{p.trait}</span>
                                <span>{p.opposite}</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2.5">
                                <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${p.value}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <h5 className="font-bold text-sky-500 mb-2">OBJETIVOS</h5>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                        {archetype.objectives.map(o => <li key={o}>{o}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-red-500 mb-2">FRUSTRACIONES</h5>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                        {archetype.frustrations.map(f => <li key={f}>{f}</li>)}
                    </ul>
                </div>
            </div>
             <div>
                <h5 className="font-bold text-sky-500 mb-2">NECESIDADES CLAVE</h5>
                <p className="text-slate-300 text-sm">{archetype.needs}</p>
            </div>
        </div>
    </Card>
);

const SectionArquetipos = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Arquetipos de Usuario</h2>
        {archetypesData.map(archetype => <ArchetypeCard key={archetype.name} archetype={archetype} />)}
    </div>
);


const SectionFODA = () => (
  <Card>
    <CardHeader>
      <CardTitle>Análisis FODA Estratégico</CardTitle>
    </CardHeader>
    <CardContent>
       <p className="text-slate-300 mb-6">Matriz FODA para orientar el diseño del prototipo digital, basada en el análisis de mercado y las emociones del usuario.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-900/50 p-4 rounded-lg border border-green-500/30">
          <h3 className="font-bold text-lg text-green-400">Fortalezas</h3>
          <ul className="list-disc ml-6 mt-2 text-slate-300">
            <li>Audiencia joven y digital (25-34 años: 46%)</li>
            <li>Conocimiento profundo de emociones del usuario</li>
            <li>Alta adopción de e-commerce en LATAM</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-red-500/30">
          <h3 className="font-bold text-lg text-red-400">Debilidades</h3>
          <ul className="list-disc ml-6 mt-2 text-slate-300">
            <li>Desconfianza digital en Colombia</li>
            <li>Complejidad de implementación tecnológica</li>
            <li>Brecha con usuarios poco digitales</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-yellow-500/30">
          <h3 className="font-bold text-lg text-yellow-400">Oportunidades</h3>
          <ul className="list-disc ml-6 mt-2 text-slate-300">
            <li>Crecimiento sostenido del smart ticketing</li>
            <li>Demanda por transparencia y seguridad</li>
            <li>Reventa oficial con respaldo</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 p-4 rounded-lg border border-purple-500/30">
          <h3 className="font-bold text-lg text-purple-400">Amenazas</h3>
          <ul className="list-disc ml-6 mt-2 text-slate-300">
            <li>Competencia consolidada (Ticketmaster)</li>
            <li>Mercado informal no regulado</li>
            <li>Regulación gubernamental futura</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

const SectionTemores = () => (
  <Card>
    <CardHeader>
      <CardTitle>Temores Frecuentes del Usuario</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-300 mb-6">Los principales miedos son el FOMO (miedo a perderse el evento), el fraude, los precios dinámicos y la lentitud de las plataformas. Estos factores afectan directamente la confianza.</p>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataTemores}>
            <PolarGrid stroke="#475569" />
            <PolarAngleAxis dataKey="subject" stroke="#f1f5f9" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#94a3b8" />
            <Radar name="Intensidad del Temor" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
             <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#334155',
                color: '#f1f5f9'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const MVPFeature = ({ icon: Icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="bg-sky-500/10 p-2 rounded-full">
           <Icon className="text-sky-400 h-6 w-6" />
        </div>
        <div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-slate-400 text-sm">{children}</p>
        </div>
    </div>
);

const SectionMVP = () => (
    <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Propuesta de Prototipo (MVP)</h2>
        
        <Card className="border-t-4 border-t-sky-500">
            <CardHeader>
                <div className="flex items-center space-x-3">
                    <Users className="text-sky-400 h-7 w-7"/>
                    <CardTitle>Para Usuarios (Frontend)</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MVPFeature icon={Ticket} title="Listado de eventos">Muestra eventos con detalles (fecha, ubicación, precio, categorías de entradas).</MVPFeature>
                <MVPFeature icon={MapPin} title="Mapa interactivo">Visualización de la ubicación exacta del evento (Google Maps/API similar).</MVPFeature>
                <MVPFeature icon={ShoppingCart} title="Compra sencilla">Proceso de compra simplificado con precios transparentes y selección de asientos.</MVPFeature>
                <MVPFeature icon={ShieldCheck} title="Autenticación de usuarios">Registro e inicio de sesión seguros (email, redes sociales, etc).</MVPFeature>
                <MVPFeature icon={Bot} title="Chatbot con IA">Responde consultas sobre disponibilidad, precios, políticas y da recomendaciones.</MVPFeature>
            </CardContent>
        </Card>

        <Card className="border-t-4 border-t-indigo-500">
            <CardHeader>
                 <div className="flex items-center space-x-3">
                    <Settings className="text-indigo-400 h-7 w-7"/>
                    <CardTitle>Para Organizadores (Backoffice)</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MVPFeature icon={Settings} title="Gestión de eventos completa">Crear/editar eventos, configurar múltiples tipos de entradas, precios y descuentos.</MVPFeature>
                <MVPFeature icon={BarChart2} title="Dashboard en tiempo real">Visualiza ventas, ingresos y métodos de pago con gráficos y filtros.</MVPFeature>
                <MVPFeature icon={FileText} title="Exportación de datos">Genera reportes en Excel/PDF para contabilidad y análisis de negocio.</MVPFeature>
                <MVPFeature icon={Bell} title="Notificaciones automáticas">Envía recordatorios a compradores y notificaciones de ventas a organizadores.</MVPFeature>
                <MVPFeature icon={Share2} title="Integración con Marketing">Conecta con herramientas como Mailchimp o WhatsApp Business para campañas.</MVPFeature>
            </CardContent>
        </Card>
        
        <Card className="border-t-4 border-t-emerald-500">
            <CardHeader>
                 <div className="flex items-center space-x-3">
                    <Gem className="text-emerald-400 h-7 w-7"/>
                    <CardTitle>Extras Recomendados</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <MVPFeature icon={Star} title="Sistema de reseñas">Permite que los asistentes califiquen y comenten sobre los eventos.</MVPFeature>
                 <MVPFeature icon={Smartphone} title="Acceso móvil">App o web responsive para gestionar eventos desde cualquier lugar.</MVPFeature>
                 <MVPFeature icon={QrCode} title="Check-in con QR">Validación de entradas de forma rápida y segura escaneando códigos QR.</MVPFeature>
            </CardContent>
        </Card>
    </div>
);

const CanvasBlock = ({ icon: Icon, title, children, className = "" }) => (
    <div className={`bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex flex-col ${className}`}>
        <div className="flex items-center mb-2">
            <Icon className="h-5 w-5 text-sky-400 mr-2" />
            <h4 className="font-bold text-white text-sm">{title}</h4>
        </div>
        <div className="text-xs text-slate-300 flex-grow">{children}</div>
    </div>
);


const SectionModelCanvas = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Business Model Canvas</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            
            {/* Columna 1 */}
            <CanvasBlock icon={Handshake} title="Socios Clave" className="lg:row-span-2">
                <ul className="list-disc list-inside space-y-1">
                    <li>Organizadores de eventos</li>
                    <li>Artistas y recintos</li>
                    <li>Pasarelas de pago (PayU, Mercado Pago)</li>
                    <li>Plataformas de Marketing (Mailchimp)</li>
                    <li>Proveedores de infraestructura Cloud (AWS, Google Cloud)</li>
                </ul>
            </CanvasBlock>

            {/* Columna 2 */}
            <div className="space-y-4">
                 <CanvasBlock icon={Zap} title="Actividades Clave">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Desarrollo y mantenimiento de la plataforma</li>
                        <li>Ventas y marketing</li>
                        <li>Gestión de seguridad y prevención de fraude</li>
                        <li>Soporte al cliente</li>
                    </ul>
                </CanvasBlock>
                <CanvasBlock icon={Key} title="Recursos Clave">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Plataforma tecnológica (software)</li>
                        <li>Equipo de desarrollo y operaciones</li>
                        <li>Acuerdos con socios</li>
                        <li>Capital para marketing y crecimiento</li>
                    </ul>
                </CanvasBlock>
            </div>

            {/* Columna 3 (Central) */}
            <CanvasBlock icon={Heart} title="Propuesta de Valor" className="lg:row-span-2 bg-sky-900/50 border-sky-500">
                <strong className="text-sky-300 block mb-1">Para Asistentes:</strong>
                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Compra segura y transparente</li>
                    <li>Proceso de compra rápido y fácil</li>
                    <li>Mercado de reventa oficial y confiable</li>
                    <li>Menor riesgo de fraude y FOMO</li>
                </ul>
                <strong className="text-sky-300 block mb-1">Para Organizadores:</strong>
                <ul className="list-disc list-inside space-y-1">
                    <li>Herramienta de gestión todo en uno</li>
                    <li>Dashboard con datos en tiempo real</li>
                    <li>Integraciones de marketing</li>
                    <li>Canal de venta seguro y profesional</li>
                </ul>
            </CanvasBlock>

            {/* Columna 4 */}
            <div className="space-y-4">
                 <CanvasBlock icon={MessageSquare} title="Relación con Clientes">
                     <ul className="list-disc list-inside space-y-1">
                        <li>Plataforma de autoservicio</li>
                        <li>Soporte al cliente (FAQ, Chatbot, Contacto)</li>
                        <li>Comunicaciones automáticas (notificaciones)</li>
                        <li>Gestión de comunidad en redes</li>
                    </ul>
                </CanvasBlock>
                <CanvasBlock icon={ShoppingCart} title="Canales">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Plataforma web</li>
                        <li>Web App Responsiva (Móvil)</li>
                        <li>Marketing digital (Redes Sociales, SEO)</li>
                        <li>App Móvil (futura iteración)</li>
                    </ul>
                </CanvasBlock>
            </div>

            {/* Columna 5 */}
             <CanvasBlock icon={Users} title="Segmentos de Cliente" className="lg:row-span-2">
                <strong className="text-white block mb-1">Asistentes a Eventos:</strong>
                 <ul className="list-disc list-inside space-y-1">
                    <li>"Fan Hunter" Digital</li>
                    <li>Comprador Precavido Online</li>
                    <li>Usuario Digital Incipiente</li>
                </ul>
                <strong className="text-white block mt-3 mb-1">Organizadores de Eventos:</strong>
                 <ul className="list-disc list-inside space-y-1">
                    <li>Productores de conciertos y festivales</li>
                    <li>Organizadores de conferencias y ferias</li>
                     <li>Teatros y recintos culturales</li>
                </ul>
            </CanvasBlock>
            
            {/* Fila inferior */}
            <div className="lg:col-span-3 space-y-4">
                <CanvasBlock icon={Cpu} title="Estructura de Costos">
                     <p className="mb-2">Los costos principales se dividen en desarrollo, infraestructura y operaciones. Una proyección para un equipo post-MVP sería:</p>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="text-sky-300">
                                <tr>
                                    <th className="p-1">Rol</th>
                                    <th className="p-1">Salario Mensual (COP)</th>
                                    <th className="p-1">Salario Anual (COP)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-slate-700">
                                    <td className="p-1">Arquitecto de Software</td>
                                    <td className="p-1">~$15.000.000</td>
                                    <td className="p-1">~$180.000.000</td>
                                </tr>
                                <tr className="border-t border-slate-700">
                                    <td className="p-1">Fullstack Dev. Senior</td>
                                    <td className="p-1">~$10.000.000</td>
                                    <td className="p-1">~$120.000.000</td>
                                </tr>
                                <tr className="border-t border-slate-700">
                                    <td className="p-1">DevOps Engineer</td>
                                    <td className="p-1">~$9.000.000</td>
                                    <td className="p-1">~$108.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                     <p className="mt-2">Otros costos: Infraestructura Cloud, Marketing, y comisiones de pasarelas de pago.</p>
                </CanvasBlock>
            </div>
            <div className="lg:col-span-2 space-y-4">
                 <CanvasBlock icon={DollarSign} title="Fuentes de Ingresos">
                     <ul className="list-disc list-inside space-y-1">
                        <li>Comisión por servicio por boleta vendida (aplicada al comprador u organizador)</li>
                        <li>Comisión sobre reventa en mercado secundario oficial</li>
                        <li>Tarifas por características premium para organizadores (ej. marketing avanzado)</li>
                        <li>Publicidad y patrocinios destacados (a futuro)</li>
                    </ul>
                </CanvasBlock>
            </div>
        </div>
    </div>
);


// --- APP PRINCIPAL ---

export default function App() {
  const [activeSection, setActiveSection] = React.useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const sections = {
    intro: { component: <SectionIntro />, label: 'Introducción', icon: Gem },
    panorama: { component: <SectionPanorama />, label: 'Panorama General', icon: Target },
    perfil: { component: <SectionPerfil />, label: 'Perfil del Comprador', icon: Users },
    arquetipos: { component: <SectionArquetipos />, label: 'Arquetipos de Usuario', icon: Users },
    foda: { component: <SectionFODA />, label: 'Análisis FODA', icon: BarChart2 },
    temores: { component: <SectionTemores />, label: 'Temores del Usuario', icon: ThumbsDown },
    mvp: { component: <SectionMVP />, label: 'Propuesta de Prototipo', icon: ShieldCheck },
    modelCanva: { component: <SectionModelCanvas />, label: 'Business Model Canvas', icon: LayoutGrid },
  };

  const renderSection = () => {
    return sections[activeSection]?.component || <SectionIntro />;
  };

  // Cierra el menú móvil al navegar
  const handleNav = (key) => {
    setActiveSection(key);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      {/* Botón hamburguesa solo en mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-slate-800/80 border border-slate-700 p-2 rounded-lg shadow-lg focus:outline-none"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <svg className="h-6 w-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Drawer menú mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          />
          {/* Drawer */}
          <aside className="relative w-64 bg-slate-800/95 border-r border-slate-700 p-6 flex flex-col space-y-2 h-full z-50 animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-sky-400"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-lg font-bold text-white mb-4">Menú de Navegación</h2>
            {Object.entries(sections).map(([key, { label, icon }]) => (
              <NavItem
                key={key}
                icon={icon}
                isActive={activeSection === key}
                onClick={() => handleNav(key)}
              >
                {label}
              </NavItem>
            ))}
          </aside>
        </div>
      )}

      <div className="flex">
        {/* Barra lateral de navegación desktop */}
        <aside className="w-64 bg-slate-800/50 border-r border-slate-700 p-6 hidden md:flex flex-col space-y-2 sticky top-0 h-screen">
          <h2 className="text-lg font-bold text-white mb-4">Menú de Navegación</h2>
          {Object.entries(sections).map(([key, { label, icon }]) => (
            <NavItem
              key={key}
              icon={icon}
              isActive={activeSection === key}
              onClick={() => setActiveSection(key)}
            >
              {label}
            </NavItem>
          ))}
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
          {renderSection()}
        </main>
      </div>
      {/* Animación para el drawer */}
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
