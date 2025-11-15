// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PRODUCTOS (SIMULADA) ---

    const bicicletas = [
        { 
            id: 'b1', 
            nombre: 'Bicicleta de Montaña Pro', 
            precio: 7500, 
            img: 'images/bc1.webp',
            specs: {
                tipo: 'Bicicleta',
                estilo: 'Montaña / Trail',
                rodada: '29"',
                peso: '14.5 kg',
                descripcion: 'Ideal para senderos y terrenos difíciles. Cuadro de aluminio reforzado con suspensión delantera de 120mm.'
            }
        },
        { 
            id: 'b2', 
            nombre: 'Bicicleta de Ruta Carbon', 
            precio: 12000, 
            img: 'images/bc2.webp',
            specs: {
                tipo: 'Bicicleta',
                estilo: 'Ruta / Carretera',
                rodada: '700c',
                peso: '8.1 kg',
                descripcion: 'Diseño aerodinámico con cuadro de fibra de carbono. Perfecta para velocidad y largas distancias en asfalto.'
            }
        },
        { 
            id: 'b3', 
            nombre: 'Bicicleta Urbana Clásica', 
            precio: 4500, 
            img: 'images/bc3.webp',
            specs: {
                tipo: 'Bicicleta',
                estilo: 'Urbana / Paseo',
                rodada: '26"',
                peso: '16.8 kg',
                descripcion: 'Con estilo retro y canasta. Comodidad y practicidad para el día a día en la ciudad.'
            }
        },
        { 
            id: 'b4', 
            nombre: 'Bicicleta Plegable Ligera', 
            precio: 6800, 
            img: 'images/bc4.webp',
            specs: {
                tipo: 'Bicicleta',
                estilo: 'Plegable / Compacta',
                rodada: '20"',
                peso: '12.0 kg',
                descripcion: 'Se pliega en segundos para fácil transporte y guardado. El mejor aliado del viajero intermodal.'
            }
        },
        { 
            id: 'b5', 
            nombre: 'Bicicleta Eléctrica XT', 
            precio: 25000, 
            img: 'images/bc5.webp',
            specs: {
                tipo: 'Bicicleta',
                estilo: 'Eléctrica / Asistencia al pedaleo',
                rodada: '28"',
                peso: '21.5 kg',
                descripcion: 'Motor de 250W con autonomía de hasta 80km. Sube colinas sin esfuerzo.'
            }
        },
        { id: 'b6', nombre: 'Bicicleta Infantil Rocket', precio: 2200, img: 'images/bc6.webp', specs: { tipo: 'Bicicleta', estilo: 'Infantil', rodada: '16"', peso: '9.0 kg', descripcion: 'Bicicleta para niños de 4 a 6 años. Incluye rueditas entrenadoras.' }},
        { id: 'b7', nombre: 'Bicicleta Mtb aluminior', precio: 9500, img: 'images/bc7.webp', specs: { tipo: 'Bicicleta', estilo: 'Montaña / Hardtail', rodada: '27.5"', peso: '13.8 kg', descripcion: 'Cuadro de aluminio ligero con frenos de disco hidráulicos para mayor control.' } },
        { id: 'b8', nombre: 'Bicicleta BMX Freestyle', precio: 5300, img: 'images/bc8.webp', specs: { tipo: 'Bicicleta', estilo: 'BMX / Acrobacias', rodada: '20"', peso: '11.5 kg', descripcion: 'Diseño reforzado para trucos y rampas. Rotores 360 y pegs incluidos.' } },
        { id: 'b9', nombre: 'Bicicleta Híbrida Confort', precio: 4900, img: 'images/bc9.webp', specs: { tipo: 'Bicicleta', estilo: 'Híbrida / Confort', rodada: '28"', peso: '15.2 kg', descripcion: 'Combina lo mejor de ruta y montaña. Ideal para uso recreativo y caminos pavimentados/grava ligera.' } },
        { id: 'b10', nombre: 'Bicicleta de Descenso DH', precio: 35000, img: 'images/bc10.webp', specs: { tipo: 'Bicicleta', estilo: 'Descenso / Downhill', rodada: '27.5"', peso: '17.5 kg', descripcion: 'Doble suspensión de largo recorrido, componentes de alta gama para máxima adrenalina en bajadas extremas.' } }
    ];

    const accesorios = [
        { id: 'a1', nombre: 'Casco Pro-Seguridad', precio: 800, img: 'images/ac1.webp', specs: { tipo: 'Accesorio', descripcion: 'Casco con certificación de seguridad, ajuste regulable y ventilación óptima.' } },
        { id: 'a2', nombre: 'Luces LED Recargables', precio: 450, img: 'images/ac2.webp', specs: { tipo: 'Accesorio', descripcion: 'Set de luces delantera y trasera con batería recargable USB. Visibilidad garantizada.' } },
        { id: 'a3', nombre: 'Candado U-Lock Alta Seg.', precio: 600, img: 'images/ac3.webp', specs: { tipo: 'Accesorio', descripcion: 'Candado tipo U de acero templado. Máxima resistencia contra robos.' } },
        { id: 'a4', nombre: 'Bomba de Aire Portátil', precio: 300, img: 'images/ac4.webp', specs: { tipo: 'Accesorio', descripcion: 'Bomba de mano compacta y ligera. Compatible con válvulas Presta y Schrader.' } },
        { id: 'a5', nombre: 'Guantes de Ciclismo Gel', precio: 350, img: 'images/ac5.webp', specs: { tipo: 'Accesorio', descripcion: 'Guantes con acolchado de gel para reducir la fatiga en las manos. Palma antideslizante.' } },
        { id: 'a6', nombre: 'Soporte Anfora', precio: 250, img: 'images/ac6.webp', specs: { tipo: 'Accesorio', descripcion: 'Porta ánfora de aluminio ligero. Mantiene tu bebida segura en cualquier terreno.' } },
        { id: 'a7', nombre: 'Kit de Herramientas Multi', precio: 500, img: 'images/ac7.webp', specs: { tipo: 'Accesorio', descripcion: 'Herramienta multiuso con 16 funciones esenciales para reparaciones rápidas en ruta.' } },
        { id: 'a8', nombre: 'Mochila de Hidratación 2L', precio: 900, img: 'images/ac8.webp', specs: { tipo: 'Accesorio', descripcion: 'Mochila compacta con bolsa de hidratación de 2 litros. Ideal para MTB y largas rodadas.' } },
        { id: 'a9', nombre: 'Soporte de Pared Bici', precio: 400, img: 'images/ac9.webp', specs: { tipo: 'Accesorio', descripcion: 'Gancho de pared para almacenar tu bicicleta de forma vertical y ahorrar espacio.' } },
        { id: 'a10', nombre: 'Cinta Antiponchaduras', precio: 700, img: 'images/ac10.webp', specs: { tipo: 'Accesorio', descripcion: 'Protege tus llantas de pinchazos causados por vidrios o espinas. Fácil de instalar.' } },
        { id: 'a11', nombre: 'Ciclocomputador GPS', precio: 2100, img: 'images/ac11.webp', specs: { tipo: 'Accesorio', descripcion: 'Computador de ciclismo con GPS, mide velocidad, distancia y altitud. Sincronización con apps.' } },
        { id: 'a12', nombre: 'Asiento de Gel Confort', precio: 550, img: 'images/ac12.webp', specs: { tipo: 'Accesorio', descripcion: 'Asiento ergonómico con relleno de gel para máximo confort en viajes largos.' } },
        { id: 'a13', nombre: 'Pedales de Clip SPD', precio: 1200, img: 'images/ac13.webp', specs: { tipo: 'Accesorio', descripcion: 'Pedales automáticos SPD. Mejoran la eficiencia de tu pedaleo.' } },
        { id: 'a14', nombre: 'Jersey de Ciclismo', precio: 650, img: 'images/ac14.webp', specs: { tipo: 'Accesorio', descripcion: 'Maillot de manga corta con tecnología de secado rápido. Bolsillos traseros.' } },
        { id: 'a15', nombre: 'Lentes de Sol Fotocrom.', precio: 1100, img: 'images/ac15.webp', specs: { tipo: 'Accesorio', descripcion: 'Lentes fotocromáticos que se ajustan automáticamente a los cambios de luz.' } },
        { id: 'a16', nombre: 'Rodillo de Entrenamiento', precio: 3500, img: 'images/ac16.webp', specs: { tipo: 'Accesorio', descripcion: 'Rodillo de entrenamiento para uso indoor. Plegable y de resistencia magnética.' } },
        { id: 'a17', nombre: 'Kit de Limpieza Bici', precio: 480, img: 'images/ac17.webp', specs: { tipo: 'Accesorio', descripcion: 'Incluye desengrasante, cepillo y lubricante para mantener tu bicicleta como nueva.' } },
        { id: 'a18', nombre: 'Parrilla Trasera Carga', precio: 600, img: 'images/ac18.webp', specs: { tipo: 'Accesorio', descripcion: 'Parrilla para bicicleta, ideal para alforjas y carga ligera. Capacidad de hasta 10 kg.' } },
        { id: 'a19', nombre: 'Espejo Retrovisor Manillar', precio: 150, img: 'images/ac19.webp', specs: { tipo: 'Accesorio', descripcion: 'Espejo para manillar, mejora la seguridad al conducir en la ciudad.' } },
        { id: 'a20', nombre: 'Calcetines Reflejantes', precio: 200, img: 'images/ac20.webp', specs: { tipo: 'Accesorio', descripcion: 'Calcetines de ciclismo con zonas reflejantes para mayor visibilidad nocturna.' } }
    ];

    const todosLosProductos = [...bicicletas, ...accesorios];

    // --- LÓGICA DEL CARRITO ---
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const carritoContenedor = document.getElementById('carrito-items');
    const carritoTotalEl = document.getElementById('carrito-total');
    const carritoContador = document.getElementById('carrito-contador');
    const modalCarrito = document.getElementById('modal-carrito');
    const btnVerCarrito = document.getElementById('ver-carrito');
    const btnCerrarCarrito = document.getElementById('cerrar-carrito');
    const btnVaciarCarrito = document.getElementById('vaciar-carrito');

    // ------------------------------------------------------------------
    // ⬇️ FUNCIÓN PRINCIPAL MODIFICADA: renderizarProductos
    // ------------------------------------------------------------------
    function renderizarProductos(lista, contenedorId) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        contenedor.innerHTML = '';
        lista.forEach(producto => {
            const productoCard = document.createElement('div');
            productoCard.className = 'producto-card';

            // Contenido de las especificaciones
            let specsContent = '';
            if (producto.specs && producto.specs.tipo === 'Bicicleta') {
                specsContent = `
                    <p><strong>Estilo:</strong> ${producto.specs.estilo}</p>
                    <p><strong>Rodada:</strong> ${producto.specs.rodada}</p>
                    <p><strong>Peso:</strong> ${producto.specs.peso}</p>
                    <p><strong>Descripción:</strong> ${producto.specs.descripcion}</p>
                `;
            } else if (producto.specs && producto.specs.tipo === 'Accesorio') {
                specsContent = `
                    <p><strong>Descripción:</strong> ${producto.specs.descripcion}</p>
                `;
            }

            productoCard.innerHTML = `
                <img src="${producto.img}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio.toLocaleString('es-MX')}</p>
                
                <button class="btn-specs" data-id="${producto.id}">Ver Specs</button>
                
                <div class="specs-content hidden" id="specs-${producto.id}">
                    <h4>Especificaciones</h4>
                    ${specsContent}
                </div>
                
                <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
            `;
            contenedor.appendChild(productoCard);
        });

        // Añade el evento a los botones "Agregar al Carrito"
        document.querySelectorAll('.btn-agregar').forEach(boton => {
            boton.addEventListener('click', agregarAlCarrito);
        });
        
        // ⬇️ NUEVO: Añade el evento a los botones "Ver Specs"
        document.querySelectorAll('.btn-specs').forEach(boton => {
            boton.addEventListener('click', toggleSpecs);
        });
    }

    // ------------------------------------------------------------------
    // ⬇️ NUEVA FUNCIÓN: Toggle para mostrar/ocultar especificaciones
    // ------------------------------------------------------------------
    function toggleSpecs(e) {
        const idProducto = e.target.dataset.id;
        const specsDiv = document.getElementById(`specs-${idProducto}`);
        const boton = e.target;
        
        // Alterna la clase 'hidden' y el texto del botón
        specsDiv.classList.toggle('hidden');
        if (specsDiv.classList.contains('hidden')) {
            boton.textContent = 'Ver Specs';
        } else {
            boton.textContent = 'Ocultar Specs';
        }
    }
    // ------------------------------------------------------------------
    // ------------------------------------------------------------------

    function agregarAlCarrito(e) {
        const idProducto = e.target.dataset.id;
        const productoEnCarrito = carrito.find(item => item.id === idProducto);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            const producto = todosLosProductos.find(p => p.id === idProducto);
            carrito.push({ ...producto, cantidad: 1 });
        }
        
        guardarCarrito();
        actualizarCarrito();
        mostrarNotificacion(`${todosLosProductos.find(p => p.id === idProducto).nombre} agregado al carrito.`);
    }

    // ------------------------------------------------------------------
    // ⬇️ FUNCIÓN CLAVE: ACTUALIZA VISUALMENTE EL CARRITO
    // ------------------------------------------------------------------
    function actualizarCarrito() {
        // Esta validación permite que se ejecute en cualquier página,
        // pero solo manipula el DOM si los elementos existen.
        if (!carritoContenedor || !carritoTotalEl || !carritoContador) {
            // Si falta alguno de los elementos del modal (en caso de error HTML)
            // al menos actualizamos el contador del nav si existe.
            if (carritoContador) {
                carritoContador.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
            }
            return; 
        }

        carritoContenedor.innerHTML = '';
        let total = 0;
        let totalItems = 0;

        if (carrito.length === 0) {
            carritoContenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            carrito.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'carrito-item';
                itemEl.innerHTML = `
                    <img src="${item.img}" alt="${item.nombre}">
                    <div class="carrito-item-info">
                        <strong>${item.nombre}</strong>
                        <small>$${item.precio.toLocaleString('es-MX')} x ${item.cantidad}</small>
                    </div>
                    <div class="carrito-item-controles">
                        <button class="btn-restar" data-id="${item.id}">-</button>
                        <span>${item.cantidad}</span>
                        <button class="btn-sumar" data-id="${item.id}">+</button>
                        <button class="btn-quitar" data-id="${item.id}">X</button>
                    </div>
                `;
                carritoContenedor.appendChild(itemEl);
                total += item.precio * item.cantidad;
                totalItems += item.cantidad;
            });
        }
        
        carritoTotalEl.textContent = total.toLocaleString('es-MX');
        carritoContador.textContent = totalItems;
        
        // Asignar eventos a los botones del carrito
        asignarEventosCarrito();
    }
    // ------------------------------------------------------------------


    function asignarEventosCarrito() {
        // Solo asignamos eventos si los botones existen dentro del modal
        if (carritoContenedor) {
            document.querySelectorAll('.btn-restar').forEach(b => b.addEventListener('click', restarDelCarrito));
            document.querySelectorAll('.btn-sumar').forEach(b => b.addEventListener('click', sumarAlCarrito));
            document.querySelectorAll('.btn-quitar').forEach(b => b.addEventListener('click', quitarDelCarrito));
        }
    }

    function restarDelCarrito(e) {
        const id = e.target.dataset.id;
        const item = carrito.find(i => i.id === id);
        if (item && item.cantidad > 1) {
            item.cantidad--;
        } else {
            carrito = carrito.filter(i => i.id !== id);
        }
        guardarCarrito();
        actualizarCarrito();
    }

    function sumarAlCarrito(e) {
        const id = e.target.dataset.id;
        const item = carrito.find(i => i.id === id);
        if (item) {
            item.cantidad++;
        }
        guardarCarrito();
        actualizarCarrito();
    }

    function quitarDelCarrito(e) {
        const id = e.target.dataset.id;
        carrito = carrito.filter(i => i.id !== id);
        guardarCarrito();
        actualizarCarrito();
    }

    function vaciarCarrito() {
        carrito = [];
        guardarCarrito();
        actualizarCarrito();
    }

    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Eventos del Modal del Carrito
    if (btnVerCarrito) {
        btnVerCarrito.addEventListener('click', () => {
            modalCarrito.style.display = 'block';
            actualizarCarrito(); // Aseguramos que se actualice justo antes de abrir
        });
    }
    if (btnCerrarCarrito) {
        btnCerrarCarrito.addEventListener('click', () => {
            modalCarrito.style.display = 'none';
        });
    }
    if (btnVaciarCarrito) {
        btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    }
    
    // --- LÓGICA DE LOGIN (SIMULADO) ---
    const modalLogin = document.getElementById('modal-login');
    const btnVerLogin = document.getElementById('ver-login');
    const btnCerrarLogin = document.getElementById('cerrar-login');
    const btnLogout = document.getElementById('ver-logout');
    const loginForm = document.getElementById('login-form');
    const userDisplay = document.getElementById('user-display');

    // Cierra el modal si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        if (e.target === modalCarrito) {
            modalCarrito.style.display = 'none';
        }
        if (e.target === modalLogin) {
            modalLogin.style.display = 'none';
        }
    });

    // Revisa si el usuario ya está "logueado" en localStorage
    function revisarEstadoLogin() {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            if (userDisplay) userDisplay.textContent = `Hola, ${usuario}`;
            if (btnVerLogin) btnVerLogin.style.display = 'none';
            if (btnLogout) btnLogout.style.display = 'inline-block';
        } else {
            if (userDisplay) userDisplay.textContent = '';
            if (btnVerLogin) btnVerLogin.style.display = 'inline-block';
            if (btnLogout) btnLogout.style.display = 'none';
        }
    }

    // Eventos del Modal de Login
    if (btnVerLogin) {
        btnVerLogin.addEventListener('click', () => {
            modalLogin.style.display = 'block';
        });
    }
    if (btnCerrarLogin) {
        btnCerrarLogin.addEventListener('click', () => {
            modalLogin.style.display = 'none';
        });
    }
    
    // Simulación de login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            const email = document.getElementById('email').value;
            // Simulación: usamos el nombre del email como nombre de usuario
            const nombreUsuario = email.split('@')[0]; 
            localStorage.setItem('usuario', nombreUsuario);
            revisarEstadoLogin();
            modalLogin.style.display = 'none';
            loginForm.reset();
            mostrarNotificacion(`¡Bienvenido, ${nombreUsuario}!`);
        });
    }

    // Logout
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            localStorage.removeItem('usuario');
            revisarEstadoLogin();
            mostrarNotificacion('Has cerrado sesión.');
        });
    }
    
    // --- NOTIFICACIÓN ---
    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);

        // Muestra la notificación
        setTimeout(() => {
            notificacion.classList.add('show');
        }, 10);

        // Oculta y elimina la notificación después de 3 segundos
        setTimeout(() => {
            notificacion.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 500);
        }, 3000);
    }


        // --- LÓGICA DE CONTADOR DE VISITAS GLOBAL Y OPTIMIZADA ---
    function actualizarContadorVisitas() {
        // Usamos una clave de almacenamiento local consistente para todas las páginas.
        const VISITAS_KEY = 'bicittlaVisitasTotal'; // Nombre de clave recomendado: 'bicittlaVisitasTotal'
        
        // 1. Obtener el valor actual o inicializarlo a 0 si es null (primera visita).
        // Usamos '|| 0' para manejar el caso 'null' de forma compacta.
        let visitas = parseInt(localStorage.getItem(VISITAS_KEY)) || 0;
        
        // 2. Incrementar el contador.
        visitas = visitas + 1;

        // 3. Guardar el nuevo valor en el almacenamiento local (Global).
        localStorage.setItem(VISITAS_KEY, visitas);

        // 4. Mostrar el valor en la página si el elemento existe.
        const contadorEl = document.getElementById('contador-visitas');
        if (contadorEl) {
            contadorEl.textContent = visitas.toLocaleString('es-MX');
        }
    }

    // --- LÓGICA DEL CHATBOT ---
    const toggleChatBtn = document.getElementById('toggle-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send-btn');

    // Abrir y cerrar la ventana de chat
    if (toggleChatBtn) {
        toggleChatBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            chatInput.focus();
        });
    }

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.add('hidden');
        });
    }

    // Enviar mensaje
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', enviarMensajeChat);
    }

    if (chatInput) {
        // Enviar con la tecla "Enter"
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                enviarMensajeChat();
            }
        });
    }

    function enviarMensajeChat() {
        const mensajeTexto = chatInput.value.trim().toLowerCase();
        if (mensajeTexto === '') return;

        // 1. Mostrar el mensaje del usuario
        mostrarMensaje(mensajeTexto, 'user');
        chatInput.value = ''; // Limpiar el input

        // 2. Simular respuesta del bot (con un pequeño retraso)
        setTimeout(() => {
            generarRespuestaBot(mensajeTexto);
        }, 800);
    }

    function mostrarMensaje(texto, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.className = `message ${tipo}`;
        divMensaje.textContent = texto;
        if (chatMessages) chatMessages.appendChild(divMensaje);
        
        // Hacer scroll automático al final
        if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generarRespuestaBot(mensajeUsuario) {
        let respuesta = '';
        
        if (mensajeUsuario.includes('inicio') || mensajeUsuario.includes('productos')) {
            respuesta = '¡Claro! Te llevo a la página de inicio para que veas los productos...';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200); // Espera un poco antes de redirigir
        } 
        else if (mensajeUsuario.includes('nosotros') || mensajeUsuario.includes('quienes') || mensajeUsuario.includes('sobre')) {
            respuesta = 'Entendido. Te llevo a la página "Sobre Nosotros"...';
            setTimeout(() => {
                window.location.href = 'nosotros.html';
            }, 1200);
        }
        else if (mensajeUsuario.includes('contacto') || mensajeUsuario.includes('ayuda') || mensajeUsuario.includes('soporte')) {
            respuesta = 'Perfecto. Abriendo la página de "Contacto"...';
            setTimeout(() => {
                window.location.href = 'contacto.html';
            }, 1200);
        }
        else if (mensajeUsuario.includes('hola') || mensajeUsuario.includes('gracias') || mensajeUsuario.includes('adios')) {
            respuesta = '¡Estoy para ayudarte! 😊 Recuerda que solo puedo navegar a "Inicio", "Nosotros" o "Contacto".';
        }
        else {
            respuesta = 'Lo siento, no te entendí. 🤖 Solo puedo ayudarte a navegar. Intenta con "Inicio", "Nosotros" o "Contacto".';
        }

        mostrarMensaje(respuesta, 'bot');
    }

    // ------------------------------------------------------------------
    // ⬇️ NUEVA SECCIÓN DE INICIALIZACIÓN
    // ------------------------------------------------------------------
    
    // **1. Funciones Globales:** Estas se ejecutan siempre para actualizar el header
    // (contador del carrito, estado de login, contador de visitas) en CUALQUIER página.
    revisarEstadoLogin();
    actualizarCarrito();
    actualizarContadorVisitas();

    // **2. Funciones Locales:** El renderizado de productos SOLO se ejecuta en index.html.
    if (document.getElementById('lista-bicicletas')) {
        renderizarProductos(bicicletas, 'lista-bicicletas');
    }
    if (document.getElementById('lista-accesorios')) {
        renderizarProductos(accesorios, 'lista-accesorios');
    }

}); // Fin de DOMContentLoaded