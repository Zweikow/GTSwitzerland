// GT Switzerland - JavaScript Functions

// Traductions
const translations = {
    fr: {
        nav_accueil: "Accueil",
        nav_infos: "Infos",
        nav_experiences: "Nos Expériences",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Contact",
        nav_faq: "FAQ",
        hero_title: "GT Switzerland",
        hero_subtitle: "Vivez l'aventure ultime en roadtrip",
        hero_description: "Nous organisons des roadtrips exceptionnels à travers les plus belles routes d'Europe. Rejoignez-nous pour des expériences inoubliables au volant de voitures d'exception.",
        btn_contact: "Nous contacter",
        btn_reserve: "Réserver maintenant",
        experiences_title: "Nos Expériences",
        roadtrip_title: "Roadtrip 2026",
        contact_title: "Contactez-nous",
        faq_title: "Questions Fréquentes",
        form_nom: "Nom",
        form_prenom: "Prénom",
        form_raison: "Raison sociale",
        form_adresse: "Adresse",
        form_npa: "NPA",
        form_localite: "Localité",
        form_pays: "Pays",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Envoyer",
        success_message: "Merci ! Nous avons bien reçu votre demande et vous contacterons prochainement."
    },
    de: {
        nav_accueil: "Startseite",
        nav_infos: "Infos",
        nav_experiences: "Unsere Erfahrungen",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Kontakt",
        nav_faq: "FAQ",
        hero_title: "GT Switzerland",
        hero_subtitle: "Erleben Sie das ultimative Roadtrip-Abenteuer",
        hero_description: "Wir organisieren außergewöhnliche Roadtrips auf den schönsten Straßen Europas. Begleiten Sie uns zu unvergesslichen Erlebnissen am Steuer außergewöhnlicher Autos.",
        btn_contact: "Kontaktieren Sie uns",
        btn_reserve: "Jetzt reservieren",
        experiences_title: "Unsere Erfahrungen",
        roadtrip_title: "Roadtrip 2026",
        contact_title: "Kontaktieren Sie uns",
        faq_title: "Häufig gestellte Fragen",
        form_nom: "Nachname",
        form_prenom: "Vorname",
        form_raison: "Firmenname",
        form_adresse: "Adresse",
        form_npa: "PLZ",
        form_localite: "Ort",
        form_pays: "Land",
        form_email: "E-Mail",
        form_message: "Nachricht",
        form_submit: "Senden",
        success_message: "Vielen Dank! Wir haben Ihre Anfrage erhalten und werden Sie in Kürze kontaktieren."
    },
    en: {
        nav_accueil: "Home",
        nav_infos: "Info",
        nav_experiences: "Our Experiences",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Contact",
        nav_faq: "FAQ",
        hero_title: "GT Switzerland",
        hero_subtitle: "Experience the ultimate roadtrip adventure",
        hero_description: "We organize exceptional roadtrips through Europe's most beautiful roads. Join us for unforgettable experiences behind the wheel of exceptional cars.",
        btn_contact: "Contact us",
        btn_reserve: "Book now",
        experiences_title: "Our Experiences",
        roadtrip_title: "Roadtrip 2026",
        contact_title: "Contact Us",
        faq_title: "Frequently Asked Questions",
        form_nom: "Last Name",
        form_prenom: "First Name",
        form_raison: "Company Name",
        form_adresse: "Address",
        form_npa: "ZIP Code",
        form_localite: "City",
        form_pays: "Country",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send",
        success_message: "Thank you! We have received your request and will contact you shortly."
    }
};

// Langue actuelle
let currentLang = 'fr';

// Changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Mettre à jour le contenu
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);
    
    // Ajouter les écouteurs d'événements pour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Fermer toutes les réponses
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // Ouvrir la réponse cliquée si elle était fermée
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
    
    // Gérer les formulaires
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const successMessage = this.querySelector('.success-message') || 
                                  this.parentElement.querySelector('.success-message');
            
            if (successMessage) {
                successMessage.classList.add('show');
                this.reset();
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
            
            // Dans un vrai site, vous enverriez les données à un serveur
            console.log('Formulaire soumis');
        });
    });
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les cartes et sections
    document.querySelectorAll('.card, .timeline-item, .news-item').forEach(el => {
        observer.observe(el);
    });
});

// Fonction pour valider l'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Fonction pour formater les données du formulaire
function formatFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}
