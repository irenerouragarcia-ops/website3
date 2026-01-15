// script.js

// --- 1. Content Data (Bilingual) ---
const translations = {
    en: {
        nav: { about: "About", sessions: "Sessions", resources: "Resources", shop: "Shop", contact: "Contact" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Nurse · Wellbeing Coach · Hypnotherapist · FND Specialist",
            quote: "\"The art of honoring what you need, with respect and without guilt.\"",
            cta: "Free Consultation"
        },
        about: {
            full_text: "<p>I am a nurse specialized in mental health, hypnotherapist, wellbeing coach, and Functional Neurological Disorder (FND) specialist. I have worked as a nurse at NHS mental health, neurology, and neuropsychiatry wards. I spent five years working on an inpatient neuropsychiatric ward supporting people living with FND, where I first encountered the condition and developed a strong commitment to support people living with it.</p><p>From early in my training, I was drawn to approaches that support the mind–body connection and nervous system regulation. I now integrate my clinical experience with hypnotherapy, mindfulness, and polyvagal theory–informed practices. I believe meaningful and lasting change comes from a holistic approach and from focusing on practical, helpful steps that can be adapted to each person’s circumstances.</p><p>Today, I collaborate with FND charities to deliver educational courses and provide one-to-one support for people living with FND worldwide. I am also about to publish a book in collaboration with lived experience of FND and I am a member of the FND UK Network, where I represent the Royal College of Nursing.</p>"
        },
        sessions: {
            title: "Sessions",
            intro: "I offer support in a range of formats, including one-to-one sessions, regular group meetings, and educational programs. See below for information on how I structure some of my packs that have worked well for other clients. If you would like to discuss what might work best for you, please book a discovery call with me.",
            offer1_title: "Wellbeing Coaching",
            offer1_text: "Personalised sessions designed to support your wellbeing and management of symptoms, using practical, sustainable tools from mindfulness, CBT, and polyvagal-informed approaches to help you build safety, balance, and inner resources in everyday life.",
            offer2_title: "Hypnotherapy",
            offer2_text: "Subconscious-focused (similar to relaxation-based) work to reframe unhelpful patterns and support long-standing conditions and associated symptoms such as anxiety and low mood. Sessions use personalised scripts tailored to what helps you feel calm, safe, and supported.",
            offer3_title: "FND Support",
            offer3_text: "Specialist guidance for people living with Functional Neurological Disorder. Support focused on understanding and managing your symptoms, building confidence, improving well-being and reclaiming a sense of control in your life.",
            btn: "Book Discovery Call",

            sessions_footer_note: "*All sessions within the packages are weekly, one hour long and include follow-up emails with handouts and additional resources after each session.",

            opt1_title: "1:1 Sessions",
            opt1_item1: "1 hour session",
            opt1_item1_note: "(wellbeing coaching)",
            opt1_item2: "1.5 hour session + hypnotherapy recording",
            opt1_item2_note: "(wellbeing coaching + hypnotherapy)",
            opt1_pack3: "3 sessions pack",
            opt1_pack3_note: "(wellbeing coaching)",
            opt1_pack6: "6 sessions pack",
            opt1_pack6_note: "(includes 1 hypnotherapy session)",
            opt1_note: "*All sessions within the package are weekly, one hour long and include follow-up emails with handouts and additional resources after each session.",
            opt2_title: "Group sessions / Programs",
            opt2_prog_title: "Winter FND Program",
            opt2_prog_en_label: "English Program",
            opt2_prog_es_label: "Spanish Program"
        },
        resources: {
            title: "Resources",
            text: "Free guides, FND care tools, and mindfulness exercises to calm your mind.",
            item1: "FND Useful Links",
            item2: "Grounding Exercise",
            item3: "FND Care Whatsapp Group",
            more_coming: "More resources coming up soon",
            viz_title: "FND Keywords and Concepts",
            view_btn: "View Link",
            join_btn: "Join Group",
            btn: "View Library →"
        },
        shop: {
            title: "Shop",
            text: "Products coming up soon.",
            btn: "Visit Full Shop"
        },
        contact: {
            title: "Contact",
            text: "Subscribe to the newsletter or get in touch below."
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        nav: { about: "Sobre mí", sessions: "Sesiones", resources: "Recursos", shop: "Tienda", contact: "Contacto" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Enfermera · Coach de Bienestar · Hipnoterapeuta · Especialista TNF",
            quote: "\"El arte de honrar lo que necesitas, con respeto y sin culpa.\"",
            cta: "Consulta Gratuita"
        },
        about: {
            title: "Sobre Mí",
            full_text: "<p>Soy enfermera especializada en salud mental, hipnoterapeuta, coach de bienestar y especialista en Trastorno Neurológico Funcional (TNF). Mi experiencia profesional incluye salud mental, neurología y neuropsiquiatría dentro del NHS (sistema público de salud en Inglaterra). Trabajé durante cinco años en una unidad de hospitalización de neuropsiquiatría apoyando a personas que viven con TNF donde conocí esta condición por primera vez y desarrollé un fuerte compromiso en apoyar a las personas que lo sufren.</p><p>Desde el inicio de mi formación, me interesaron los enfoques que apoyan la conexión mente-cuerpo y la regulación del sistema nervioso. Actualmente combino mi experiencia clínica con hipnoterapia, mindfulness y prácticas basadas en la teoría polivagal. Creo que el cambio profundo y duradero surge a través de un enfoque holístico y de centrarse en pasos prácticos y útiles, adaptados a las circunstancias de cada persona.</p><p>En la actualidad, colaboro con organizaciones benéficas de TNF impartiendo cursos y también ofrezco programas y sesiones individuales (todo online). Estoy a punto de publicar un libro en colaboración con personas con experiencia vivida de TNF \"FND Care Guide\" y soy miembro de la Red de TNF de Reino Unido (FND UK Network), donde represento la profesión de enfermería.</p>"
        },
        sessions: {
            title: "Sesiones",
            intro: "Ofrezco apoyo en diversos formatos, incluyendo sesiones individuales, reuniones grupales y programas educativos. A continuación encontrarás información sobre cómo estructuro algunos de mis paquetes que han funcionado bien para otros clientes. Si te gustaría comentar qué opción podría ser la mejor para ti, no dudes en reservar una llamada de descubrimiento conmigo.",
            offer1_title: "Coaching de Bienestar",
            offer1_text: "Sesiones personalizadas diseñadas para apoyar tu bienestar y el manejo de tus síntomas, utilizando herramientas prácticas y sostenibles basadas en mindfulness, TCC y enfoques informados en la teoría polivagal para ayudarte a construir seguridad, equilibrio y recursos internos en tu vida diaria.",
            offer2_title: "Hipnoterapia",
            offer2_text: "Trabajo enfocado en el subconsciente (similar a la relajación) para reencuadrar patrones poco útiles y apoyar condiciones de larga duración y síntomas asociados como ansiedad y bajo estado de ánimo. Las sesiones utilizan guiones personalizados adaptados a lo que te ayuda a sentir calma, seguridad y apoyo.",
            offer3_title: "Apoyo TNF",
            offer3_text: "Acompañamiento especializado para personas que viven con Trastorno Neurológico Funcional. Un apoyo centrado en comprender tus síntomas, fortalecer la confianza y recuperar una sensación de control sobre tu vida. (Sesiones de grupo e individuales)",
            btn: "Reservar Llamada",

            sessions_footer_note: "*Todas las sesiones dentro de los paquetes son semanales, de una hora de duración e incluyen correos de seguimiento con folletos y recursos adicionales después de cada sesión.",

            opt1_title: "Sesiones 1:1",
            opt1_item1: "Sesión 1 hora",
            opt1_item1_note: "(coaching de bienestar)",
            opt1_item2: "Sesión 1.5 horas + grabación de hipnoterapia",
            opt1_item2_note: "(coaching de bienestar + hipnoterapia)",
            opt1_pack3: "Pack 3 sesiones",
            opt1_pack3_note: "(coaching de bienestar)",
            opt1_pack6: "Pack 6 sesiones",
            opt1_pack6_note: "(incluye 1 sesión de hipnoterapia)",
            opt1_note: "*Todas las sesiones del paquete son semanales, de una hora de duración e incluyen correos de seguimiento con material y recursos adicionales después de cada sesión",
            opt2_title: "Sesiones grupales / Programas",
            opt2_prog_title: "Programa TNF Invierno",
            opt2_prog_en_label: "Programa en Inglés",
            opt2_prog_es_label: "Programa en Español"
        },
        resources: {
            title: "Recursos",
            text: "Guías gratuitas, herramientas de cuidado para TNF y ejercicios de mindfulness para calmar tu mente.",
            item1: "Enlaces FND útiles",
            item2: "Ejercicio de Grounding",
            item3: "Grupo de WhatsApp FND Care",
            more_coming: "Más recursos próximamente",
            viz_title: "Palabras clave y conceptos - Visualización Interactiva",
            view_btn: "Ver enlace",
            join_btn: "Unirse al grupo",
            btn: "Ver Biblioteca →"
        },
        shop: {
            title: "Tienda",
            text: "Próximamente nuevos productos.",
            btn: "Visitar Tienda Completa"
        },
        contact: {
            title: "Contacto",
            text: "Suscríbete al boletín o ponte en contacto abajo."
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

const shopItems = [
    { id: 1, title_en: "Hypnotherapy Audio Pack", title_es: "Pack Audio Hipnoterapia", icon: "headphones" },
    { id: 2, title_en: "FND Care Affirmation Tee", title_es: "Camiseta Afirmación TNF", icon: "shirt" },
    { id: 3, title_en: "Mindzing Notebook", title_es: "Cuaderno Mindzing", icon: "book" },
];

const testimonials = [
    {
        en: "All correspondence was quickly replied to with thoughtful personalised answers to my conditions and situations, even financial.",
        es: "Toda la correspondencia fue respondida rápidamente con respuestas personalizadas y consideradas a mis condiciones y situaciones, incluso las financieras."
    },
    {
        en: "I loved the programme. I had been on my own for a long time with everything that FND involves, and being able to share and listen to other people with the same condition helped me understand it better.",
        es: "Me encantó el programa. Llevaba mucho tiempo sola con todo lo que implica el TNF, y poder compartir y escuchar a otras personas con la misma condición me ayudó a entenderlo mejor."
    },
    {
        en: "Irene is knowledgeable, supportive and kind. Feeling understood, believed and heard was a big help to me.",
        es: "Irene tiene mucho conocimiento, es solidaria y amable. Sentirme comprendida, creída y escuchada fue una gran ayuda para mí."
    },
    {
        en: "My experience in the programme was much better than I expected.",
        es: "Mi experiencia en el programa fue mucho mejor de lo que esperaba."
    },
    {
        en: "The individual sessions supported me in every way: I felt understood and always received practical tools that helped me.",
        es: "Las sesiones individuales me apoyaron en todos los sentidos: me sentí comprendida y siempre recibí herramientas prácticas que me ayudaron."
    },
    {
        en: "It helped me to take care of myself, to feel valued, to learn breathing techniques I didn’t know before, and above all to realise that I’m not always the only one in pain or feeling unwell.",
        es: "Me ayudó a cuidarme, a sentirme valorada, a aprender técnicas de respiración que no conocía, y sobre todo a darme cuenta de que no siempre soy la única que siente dolor o malestar."
    },
    {
        en: "Thank you, Irene.",
        es: "Gracias, Irene."
    },
    {
        en: "The weekly group sessions make Wednesdays feel very special, and we have created a wonderful community.",
        es: "Las sesiones semanales en grupo hacen que los miércoles se sientan muy especiales, y hemos creado una comunidad maravillosa."
    },
    {
        en: "I am very grateful to my fellow participants and, above all, to Irene for making the journey much easier.",
        es: "Estoy muy agradecida a mis compañeras participantes y, sobre todo, a Irene por hacer el camino mucho más fácil."
    },
    {
        en: "This programme has been incredibly useful for me.",
        es: "Este programa ha sido increíblemente útil para mí."
    },
    {
        en: "Irene’s gentle and comforting nature, together with her great experience, means you are in very good hands.",
        es: "La naturaleza suave y reconfortante de Irene, junto con su gran experiencia, significa que estás en muy buenas manos."
    },
    {
        en: "Being with the other women and getting to know other cases helped me a lot, regardless of age.",
        es: "Estar con las otras mujeres y conocer otros casos me ayudó mucho, independientemente de la edad."
    },
    {
        en: "The hypnotherapy audio I received was personal from suggestions I gave, it is amazing and I enjoy it regularly.",
        es: "El audio de hipnoterapia que recibí fue personalizado a partir de sugerencias que di, es increíble y lo disfruto regularmente."
    },
    {
        en: "My experience as part of the group was enormously positive and enriching.",
        es: "Mi experiencia como parte del grupo fue enormemente positiva y enriquecedora."
    },
    {
        en: "I highly recommend this programme, both for the support network that is created and for Irene’s knowledge and guidance.",
        es: "Recomiendo encarecidamente este programa, tanto por la red de apoyo que se crea como por el conocimiento y la guía de Irene."
    },
    {
        en: "I met people who I truly felt understood my experience, and we supported each other, encouraging one another and lifting morale when needed.",
        es: "Conocí a personas que realmente sentí que entendían mi experiencia, y nos apoyamos mutuamente, animándonos y levantando la moral cuando era necesario."
    },
    {
        en: "What Irene has created for people with FND is something truly special.",
        es: "Lo que Irene ha creado para las personas con TNF es algo verdaderamente especial."
    },
    {
        en: "Together we learned wonderful techniques, very useful, calming, and relaxing for the nervous system, which in my personal case have been very valuable in everyday life.",
        es: "Juntas aprendimos técnicas maravillosas, muy útiles, calmantes y relajantes para el sistema nervioso, que en mi caso personal han sido muy valiosas en la vida diaria."
    },
    {
        en: "I am grateful to Irene for her wonderful work as both a professional and a person, for guiding us with empathy and wisdom.",
        es: "Estoy agradecida a Irene por su maravilloso trabajo tanto como profesional y como persona, por guiarnos con empatía y sabiduría."
    },
    {
        en: "This programme didn’t just give me tools, but also a safe space where vulnerability became strength.",
        es: "Este programa no solo me dio herramientas, sino también un espacio seguro donde la vulnerabilidad se convirtió en fortaleza."
    },
    {
        en: "And to my peers for their courage in sharing their experiences.",
        es: "Y a mis compañeras por su valentía al compartir sus experiencias."
    },
    {
        en: "This programme is a lighthouse for those of us navigating through the fog of FND.",
        es: "Este programa es un faro para aquellos de nosotros que navegamos a través de la niebla del TNF."
    },
    {
        en: "The course has helped me get to know myself, learn how to care for myself, and above all to prioritise myself and listen to my body — something I never thought I would be capable of doing.",
        es: "El curso me ha ayudado a conocerme a mí misma, aprender a cuidarme y sobre todo a priorizarme y escuchar a mi cuerpo, algo que nunca pensé que sería capaz de hacer."
    },
    {
        en: "The practices we learned have made everyday life much more manageable, even on the most difficult days.",
        es: "Las prácticas que aprendimos han hecho que la vida diaria sea mucho más manejable, incluso en los días más difíciles."
    },
    {
        en: "I really look forward to seeing where she takes this work next and, if possible, being part of it again.",
        es: "Tengo muchas ganas de ver a dónde lleva este trabajo y, si es posible, volver a formar parte de él."
    },
    {
        en: "Having recently been diagnosed with FND and receiving no information from the specialist about what to expect or how to manage my symptoms, I was incredibly grateful to come across this course with Irene.",
        es: "Habiendo sido diagnosticada recientemente con TNF y sin recibir información del especialista sobre qué esperar o cómo manejar mis síntomas, estuve increíblemente agradecida de encontrar este curso con Irene."
    },
    {
        en: "I now have a much better understanding of how my thoughts, emotions, and behaviours are interconnected, and how I can work with them — whether that means changing them, accepting them, or learning to find joy in whatever kind of day I’m having.",
        es: "Ahora tengo una mejor comprensión de cómo mis pensamientos, emociones y comportamientos están interconectados, y cómo puedo trabajar con ellos, ya sea cambiándolos, aceptándolos o aprendiendo a encontrar alegría en cualquier tipo de día que tenga."
    },
    {
        en: "I’ve started to include meditation and regular check-ins in my daily routine, which has been very beneficial and has also helped with pacing.",
        es: "He empezado a incluir la meditación y chequeos regulares en mi rutina diaria, lo cual ha sido muy beneficioso y también me ha ayudado con el ritmo."
    },
    {
        en: "Taking part in this course has allowed me to become a better version of myself and to take back control of my life, my thoughts, and my happiness",
        es: "Participar en este curso me ha permitido convertirme en una mejor versión de mí misma y recuperar el control de mi vida, mis pensamientos y mi felicidad."
    }
];

let sliderInterval;
let currentSlide = 0;

function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    // Render slides
    renderSlides();

    // Event Listeners for arrows
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            resetSliderInterval();
            moveSlide(-1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            resetSliderInterval();
            moveSlide(1);
        });
    }

    startSliderInterval();
}

function renderSlides() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    // Clear existing
    track.innerHTML = '';

    testimonials.forEach((t, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        if (index === currentSlide) slide.classList.add('active');

        const quoteText = currentLang === 'en' ? t.en : (t.es || t.en);

        slide.innerHTML = `<p>"${quoteText}"</p>`;
        track.appendChild(slide);
    });
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;

    const current = slides[currentSlide];

    // Fade out
    current.classList.add('exiting');

    // Wait for fade out, then switch
    setTimeout(() => {
        current.classList.remove('active', 'exiting');

        currentSlide = (currentSlide + direction + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
    }, 1000); // Wait 1s (match CSS animation)
}

function startSliderInterval() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        moveSlide(1);
    }, 10000);
}

function resetSliderInterval() {
    clearInterval(sliderInterval);
    startSliderInterval();
}

// --- 2. Translation & Persistence ---
let currentLang = localStorage.getItem('siteLang') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); // Save preference

    // Update Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update Body Class
    document.body.className = document.body.className.replace(/lang-\w+/, `lang-${lang}`);

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let text = keys.reduce((obj, k) => obj && obj[k], translations[lang]);

        if (text) {
            // Handle HTML content if specified (e.g., full_text, features)
            if (key.includes('full_text') || key.includes('features') || key.includes('html')) {
                el.innerHTML = text;
            } else {
                el.innerText = text;
            }
        }
    });

    // Refresh Shop Grid Titles if present
    const shopGrid = document.getElementById('shop-grid');
    if (shopGrid) renderShopGrid();

    // Refresh Testimonials
    renderSlides();
}

// --- 3. Render Shop Grid ---
function renderShopGrid() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    grid.innerHTML = shopItems.map(item => `
        <div class="shop-item-card">
            <div class="shop-item-img-placeholder"></div>
            <div class="shop-item-title">${currentLang === 'en' ? item.title_en : item.title_es}</div>
        </div>
    `).join('');
}


// --- 4. Initialization & Events ---
document.addEventListener('DOMContentLoaded', () => {

    // Initial Load
    updateLanguage(currentLang);
    initTestimonialSlider();

    // Language Toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // Modal Logic
    const modalOverlay = document.getElementById('modal-overlay');

    if (modalOverlay) {
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.modal-close');

        window.openModal = function (content) {
            modalBody.innerHTML = content;
            modalOverlay.classList.remove('hidden');
        }

        function closeModal() {
            modalOverlay.classList.add('hidden');
        }

        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Action Buttons
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                if (action === 'book-now') {
                    window.openModal(`<h2>${currentLang === 'en' ? 'Book a Session' : 'Reservar Sesión'}</h2><p>Calendly Integration would load here.</p>`);
                }
            });
        });
    }

    // Navbar Scroll (Visual only)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
    // --- 6. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});

// --- 5. Session Options Toggle ---
function toggleSessionOption(headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('expanded');
}

// --- 6. Session Text Hover/Click Logic ---
function initSessionTextToggles() {
    const sections = document.querySelectorAll('.session-text-group');

    sections.forEach(group => {
        const trigger = group.querySelector('.session-text-trigger');
        if (!trigger) return;

        // Click to toggle "fixed" state
        trigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling if needed
            // Close others? Optional. For now let's just toggle this one.
            group.classList.toggle('fixed-active');
        });
    });

    // Optional: Close on click outside? 
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.session-text-group')) {
            document.querySelectorAll('.session-text-group.fixed-active').forEach(el => {
                el.classList.remove('fixed-active');
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initSessionTextToggles();
});
