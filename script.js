document.addEventListener('DOMContentLoaded', function() {
    // Navbar Responsivo Mejorado
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Función para alternar el menú
    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Bloquear el scroll del body cuando el menú está abierto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    // Evento para el botón del menú
    menuToggle.addEventListener('click', toggleMenu);

    // Evento para el overlay (cierra el menú al hacer clic fuera)
    overlay.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al cambiar el tamaño de la pantalla si vuelve a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // FAQ Acordeón
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items abiertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Abrir/cerrar el item actual
            item.classList.toggle('active');
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('projectForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            console.log('Datos del formulario:', data);
            
            // Simular envío exitoso
            alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animación al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .process-step, .about-img-container, .whatsapp-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Establecer propiedades iniciales para la animación
    document.querySelectorAll('.service-card, .process-step, .about-img-container, .whatsapp-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Animación para la tarjeta de WhatsApp
    const whatsappCard = document.querySelector('.whatsapp-card');
    if (whatsappCard) {
        whatsappCard.style.opacity = '0';
        whatsappCard.style.transform = 'translateY(20px)';
        whatsappCard.style.transition = 'all 0.5s ease 0.2s';
        
        setTimeout(() => {
            whatsappCard.style.opacity = '1';
            whatsappCard.style.transform = 'translateY(0)';
        }, 300);
    }

    // Efecto al pasar el mouse sobre el botón de WhatsApp
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', () => {
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> ¡Hablemos ahora!';
        });
        
        whatsappBtn.addEventListener('mouseleave', () => {
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Iniciar Chat';
        });
    }
});

// Efecto de transición al cargar la página
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';