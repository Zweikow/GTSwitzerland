// GT Switzerland - JavaScript Functions

// Traductions
const translations = {
    fr: {
        // Navigation
        nav_accueil: "Accueil",
        nav_infos: "Infos",
        nav_experiences: "Nos Expériences",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Contact",
        nav_faq: "FAQ",
        
        // Hero
        hero_title: "GT Switzerland",
        hero_subtitle: "Vivez l'aventure ultime en roadtrip",
        hero_description: "Nous organisons des roadtrips exceptionnels à travers les plus belles routes d'Europe. Rejoignez-nous pour des expériences inoubliables au volant de voitures d'exception.",
        
        // Buttons
        btn_contact: "Nous contacter",
        btn_reserve: "Réserver maintenant",
        btn_voir_plus: "Voir plus",
        btn_prereserver: "Pré-réserver maintenant",
        btn_reserver_place: "Réserver votre place",
        
        // Titles
        experiences_title: "Nos Expériences",
        experiences_subtitle: "5 années d'aventures exceptionnelles à travers l'Europe",
        roadtrip_title: "Roadtrip 2026",
        roadtrip_subtitle: "Réservez votre place pour notre prochaine aventure",
        contact_title: "Contactez-nous",
        faq_title: "Questions Fréquentes",
        infos_title: "Informations Pratiques",
        
        // Accueil
        home_qui_sommes_nous: "Qui sommes-nous ?",
        home_description_1: "Nous sommes passionnés d'automobiles et de voyages. Depuis 2021, nous organisons des roadtrips d'exception à travers l'Europe, combinant le plaisir de la conduite sur des routes mythiques avec la découverte de régions extraordinaires. Chaque voyage est soigneusement préparé pour offrir une expérience unique et mémorable.",
        home_description_2: "Rejoignez notre communauté de passionnés et vivez des moments inoubliables au volant de voitures d'exception, dans des paysages à couper le souffle.",
        home_prochainement: "Prochainement",
        home_roadtrip_annonce: "Roadtrip 2026 - Destination à venir",
        home_roadtrip_desc: "Nous préparons actuellement notre prochain roadtrip pour 2026. La destination sera dévoilée prochainement. Restez connectés pour ne pas manquer les inscriptions !",
        home_dernieres_aventures: "Nos Dernières Aventures",
        home_sardaigne_title: "2025 - Tour de Sardaigne",
        home_sardaigne_desc: "Une semaine exceptionnelle sur les routes côtières de Sardaigne, entre mer turquoise et montagnes.",
        home_pyrenees_title: "2024 - Tour des Pyrénées",
        home_pyrenees_desc: "À la conquête des cols mythiques des Pyrénées, entre France et Espagne.",
        home_corse_title: "2023 - Tour de Corse",
        home_corse_desc: "L'île de Beauté comme vous ne l'avez jamais vue, au volant de voitures d'exception.",
        
        // Expériences
        exp_notre_histoire: "Notre Histoire",
        exp_intro: "Depuis 2021, nous avons parcouru les plus belles routes d'Europe, créant des souvenirs inoubliables avec des passionnés d'automobiles. Découvrez nos aventures passées.",
        
        exp_sardaigne_title: "Tour de Sardaigne",
        exp_sardaigne_desc: "Une semaine magique sur l'île italienne, entre mer turquoise et routes de montagne sinueuses. Nous avons découvert la Costa Smeralda, traversé les montagnes du Supramonte et longé les côtes spectaculaires. Des paysages à couper le souffle et une gastronomie exceptionnelle.",
        
        exp_pyrenees_title: "Tour des Pyrénées",
        exp_pyrenees_desc: "À la conquête des cols mythiques des Pyrénées ! Du col du Tourmalet au col d'Aubisque, nous avons parcouru les routes empruntées par le Tour de France. Un mélange parfait de culture française et espagnole, avec des passages inoubliables en haute montagne.",
        
        exp_corse_title: "Tour de Corse",
        exp_corse_desc: "L'île de Beauté porte bien son nom ! Notre périple nous a menés de Bastia à Bonifacio, en passant par les Calanques de Piana et le désert des Agriates. Des routes sinueuses mythiques et des panoramas époustouflants sur la Méditerranée.",
        
        exp_toscane_title: "Tour de la Toscane",
        exp_toscane_subtitle: "Édition Mille Miglia",
        exp_toscane_desc: "Un voyage d'exception sur les traces de la légendaire Mille Miglia. Florence, Sienne, les collines du Chianti... Nous avons roulé sur les routes mythiques de cette course historique, tout en découvrant le patrimoine exceptionnel de la Toscane.",
        
        exp_suisse_title: "Tour de Suisse",
        exp_suisse_subtitle: "Notre Premier Roadtrip",
        exp_suisse_desc: "Tout a commencé ici ! Notre premier roadtrip organisé nous a menés à travers les Alpes suisses, du lac Léman au Tessin. Des cols alpins spectaculaires, des villages pittoresques et une organisation qui a posé les bases de nos futures aventures.",
        
        exp_duree: "Durée:",
        exp_participants: "Participants:",
        exp_distance: "Distance:",
        exp_note: "Note:",
        exp_jours: "jours",
        exp_jours_7: "7 jours",
        exp_jours_6: "6 jours",
        exp_jours_5: "5 jours",
        exp_vehicules: "véhicules",
        exp_vehicules_22: "22 véhicules",
        exp_vehicules_20: "20 véhicules",
        exp_vehicules_18: "18 véhicules",
        exp_vehicules_15: "15 véhicules",
        exp_vehicules_12: "12 véhicules",
        
        exp_temoignages: "Ils ont vécu l'expérience",
        exp_temoignage_1: "Une expérience inoubliable ! L'organisation était parfaite, les routes magnifiques et l'ambiance exceptionnelle. J'ai hâte de repartir avec GT Switzerland !",
        exp_temoignage_1_author: "— Pierre M., Tour de Sardaigne 2025",
        exp_temoignage_2: "Les cols des Pyrénées étaient spectaculaires. Tout était prévu dans les moindres détails. Un vrai plaisir de conduite dans un cadre magnifique.",
        exp_temoignage_2_author: "— Marc L., Tour des Pyrénées 2024",
        exp_temoignage_3: "La Corse vue sous cet angle est tout simplement magique. Les routes, les paysages, l'hébergement... tout était au top. Merci pour ces souvenirs !",
        exp_temoignage_3_author: "— Sophie D., Tour de Corse 2023",
        
        exp_cta_title: "Envie de créer vos propres souvenirs ?",
        exp_cta_desc: "Rejoignez-nous pour notre prochain roadtrip en 2026 !",
        
        // Voyages / Roadtrip 2026
        roadtrip_prochaine_aventure: "Notre Prochain Roadtrip",
        roadtrip_intro: "Nous préparons actuellement une nouvelle aventure exceptionnelle pour 2026. La destination sera dévoilée prochainement à tous nos participants inscrits. Une chose est sûre : ce sera inoubliable !",
        roadtrip_quand: "Quand ?",
        roadtrip_quand_desc: "Printemps/Été 2026",
        roadtrip_quand_desc2: "Dates exactes à confirmer",
        roadtrip_duree_title: "Durée",
        roadtrip_duree_desc: "6 à 7 jours",
        roadtrip_duree_desc2: "De conduite et découverte",
        roadtrip_places_title: "Places",
        roadtrip_places_desc: "25 véhicules maximum",
        roadtrip_places_desc2: "Inscription limitée",
        
        roadtrip_inclus: "Ce qui est inclus",
        roadtrip_hebergement: "Hébergement",
        roadtrip_hebergement_desc: "6 nuits dans des hôtels sélectionnés pour leur qualité et leur charme",
        roadtrip_repas: "Repas",
        roadtrip_repas_desc: "Petits-déjeuners et dîners inclus, découverte de la gastronomie locale",
        roadtrip_guidage: "Guidage",
        roadtrip_guidage_desc: "Guidage GPS fourni, roadbook détaillé et véhicule d'assistance",
        roadtrip_activites: "Activités",
        roadtrip_activites_desc: "Visites exclusives et activités organisées tout au long du voyage",
        roadtrip_support: "Support",
        roadtrip_support_desc: "Assistance technique et médicale 24h/24 pendant tout le voyage",
        roadtrip_souvenirs: "Souvenirs",
        roadtrip_souvenirs_desc: "Pack de bienvenue, photos professionnelles du voyage incluses",
        
        // Formulaires
        form_nom: "Nom",
        form_prenom: "Prénom",
        form_raison: "Raison sociale",
        form_raison_optionnel: "Raison sociale (optionnel)",
        form_adresse: "Adresse",
        form_npa: "NPA",
        form_localite: "Localité",
        form_pays: "Pays",
        form_email: "Email",
        form_telephone: "Téléphone",
        form_message: "Message",
        form_vehicule: "Véhicule que vous prévoyez d'utiliser",
        form_vehicule_optionnel: "Véhicule que vous prévoyez d'utiliser (optionnel)",
        form_submit: "Envoyer",
        form_required: "*",
        
        // Footer
        footer_tagline: "Roadtrips d'exception à travers l'Europe",
        footer_contact: "Contact",
        footer_navigation: "Navigation",
        footer_copyright: "© 2025 GT Switzerland. Tous droits réservés.",
        
        success_message: "Merci ! Nous avons bien reçu votre demande et vous contacterons prochainement."
    },
    de: {
        // Navigation
        nav_accueil: "Startseite",
        nav_infos: "Infos",
        nav_experiences: "Unsere Erfahrungen",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Kontakt",
        nav_faq: "FAQ",
        
        // Hero
        hero_title: "GT Switzerland",
        hero_subtitle: "Erleben Sie das ultimative Roadtrip-Abenteuer",
        hero_description: "Wir organisieren außergewöhnliche Roadtrips auf den schönsten Straßen Europas. Begleiten Sie uns zu unvergesslichen Erlebnissen am Steuer außergewöhnlicher Autos.",
        
        // Buttons
        btn_contact: "Kontaktieren Sie uns",
        btn_reserve: "Jetzt reservieren",
        btn_voir_plus: "Mehr erfahren",
        btn_prereserver: "Jetzt vorbuchen",
        btn_reserver_place: "Platz reservieren",
        
        // Titles
        experiences_title: "Unsere Erfahrungen",
        experiences_subtitle: "5 Jahre außergewöhnliche Abenteuer durch Europa",
        roadtrip_title: "Roadtrip 2026",
        roadtrip_subtitle: "Reservieren Sie Ihren Platz für unser nächstes Abenteuer",
        contact_title: "Kontaktieren Sie uns",
        faq_title: "Häufig gestellte Fragen",
        infos_title: "Praktische Informationen",
        
        // Accueil
        home_qui_sommes_nous: "Wer sind wir?",
        home_description_1: "Wir sind leidenschaftliche Auto- und Reisebegeisterte. Seit 2021 organisieren wir außergewöhnliche Roadtrips durch Europa und verbinden die Freude am Fahren auf legendären Straßen mit der Entdeckung außergewöhnlicher Regionen. Jede Reise wird sorgfältig vorbereitet, um ein einzigartiges und unvergessliches Erlebnis zu bieten.",
        home_description_2: "Treten Sie unserer Gemeinschaft von Enthusiasten bei und erleben Sie unvergessliche Momente am Steuer außergewöhnlicher Autos in atemberaubenden Landschaften.",
        home_prochainement: "Demnächst",
        home_roadtrip_annonce: "Roadtrip 2026 - Ziel folgt",
        home_roadtrip_desc: "Wir bereiten derzeit unseren nächsten Roadtrip für 2026 vor. Das Ziel wird in Kürze bekannt gegeben. Bleiben Sie dran, um die Anmeldung nicht zu verpassen!",
        home_dernieres_aventures: "Unsere letzten Abenteuer",
        home_sardaigne_title: "2025 - Sardinien-Tour",
        home_sardaigne_desc: "Eine außergewöhnliche Woche auf den Küstenstraßen Sardiniens, zwischen türkisblauem Meer und Bergen.",
        home_pyrenees_title: "2024 - Pyrenäen-Tour",
        home_pyrenees_desc: "Eroberung der legendären Pässe der Pyrenäen, zwischen Frankreich und Spanien.",
        home_corse_title: "2023 - Korsika-Tour",
        home_corse_desc: "Die Insel der Schönheit, wie Sie sie noch nie gesehen haben, am Steuer außergewöhnlicher Autos.",
        
        // Expériences
        exp_notre_histoire: "Unsere Geschichte",
        exp_intro: "Seit 2021 sind wir auf den schönsten Straßen Europas unterwegs und haben unvergessliche Erinnerungen mit Autoenthusiasten geschaffen. Entdecken Sie unsere vergangenen Abenteuer.",
        
        exp_sardaigne_title: "Sardinien-Tour",
        exp_sardaigne_desc: "Eine magische Woche auf der italienischen Insel, zwischen türkisblauem Meer und kurvenreichen Bergstraßen. Wir haben die Costa Smeralda entdeckt, die Berge des Supramonte durchquert und die spektakulären Küsten entlang gefahren. Atemberaubende Landschaften und außergewöhnliche Gastronomie.",
        
        exp_pyrenees_title: "Pyrenäen-Tour",
        exp_pyrenees_desc: "Eroberung der legendären Pässe der Pyrenäen! Vom Col du Tourmalet bis zum Col d'Aubisque sind wir die von der Tour de France befahrenen Straßen gefahren. Eine perfekte Mischung aus französischer und spanischer Kultur, mit unvergesslichen Passagen im Hochgebirge.",
        
        exp_corse_title: "Korsika-Tour",
        exp_corse_desc: "Die Insel der Schönheit trägt ihren Namen zu Recht! Unsere Reise führte uns von Bastia nach Bonifacio, über die Calanques de Piana und die Wüste von Agriates. Legendäre kurvenreiche Straßen und atemberaubende Panoramen über das Mittelmeer.",
        
        exp_toscane_title: "Toskana-Tour",
        exp_toscane_subtitle: "Mille Miglia Edition",
        exp_toscane_desc: "Eine außergewöhnliche Reise auf den Spuren der legendären Mille Miglia. Florenz, Siena, die Hügel des Chianti... Wir sind die legendären Straßen dieses historischen Rennens gefahren und haben dabei das außergewöhnliche Erbe der Toskana entdeckt.",
        
        exp_suisse_title: "Schweiz-Tour",
        exp_suisse_subtitle: "Unser erster Roadtrip",
        exp_suisse_desc: "Hier hat alles begonnen! Unser erster organisierter Roadtrip führte uns durch die Schweizer Alpen, vom Genfersee ins Tessin. Spektakuläre Alpenpässe, malerische Dörfer und eine Organisation, die die Grundlage für unsere zukünftigen Abenteuer legte.",
        
        exp_duree: "Dauer:",
        exp_participants: "Teilnehmer:",
        exp_distance: "Entfernung:",
        exp_note: "Bewertung:",
        exp_jours: "Tage",
        exp_jours_7: "7 Tage",
        exp_jours_6: "6 Tage",
        exp_jours_5: "5 Tage",
        exp_vehicules: "Fahrzeuge",
        exp_vehicules_22: "22 Fahrzeuge",
        exp_vehicules_20: "20 Fahrzeuge",
        exp_vehicules_18: "18 Fahrzeuge",
        exp_vehicules_15: "15 Fahrzeuge",
        exp_vehicules_12: "12 Fahrzeuge",
        
        exp_temoignages: "Sie haben die Erfahrung gemacht",
        exp_temoignage_1: "Ein unvergessliches Erlebnis! Die Organisation war perfekt, die Straßen wunderschön und die Atmosphäre außergewöhnlich. Ich kann es kaum erwarten, wieder mit GT Switzerland zu reisen!",
        exp_temoignage_1_author: "— Pierre M., Sardinien-Tour 2025",
        exp_temoignage_2: "Die Pässe der Pyrenäen waren spektakulär. Alles war bis ins kleinste Detail geplant. Ein echtes Fahrvergnügen in herrlicher Kulisse.",
        exp_temoignage_2_author: "— Marc L., Pyrenäen-Tour 2024",
        exp_temoignage_3: "Korsika aus dieser Perspektive ist einfach magisch. Die Straßen, die Landschaften, die Unterkunft... alles war top. Danke für diese Erinnerungen!",
        exp_temoignage_3_author: "— Sophie D., Korsika-Tour 2023",
        
        exp_cta_title: "Möchten Sie Ihre eigenen Erinnerungen schaffen?",
        exp_cta_desc: "Begleiten Sie uns auf unserem nächsten Roadtrip in 2026!",
        
        // Voyages / Roadtrip 2026
        roadtrip_prochaine_aventure: "Unser nächster Roadtrip",
        roadtrip_intro: "Wir bereiten derzeit ein neues außergewöhnliches Abenteuer für 2026 vor. Das Ziel wird allen registrierten Teilnehmern in Kürze bekannt gegeben. Eines ist sicher: Es wird unvergesslich!",
        roadtrip_quand: "Wann?",
        roadtrip_quand_desc: "Frühling/Sommer 2026",
        roadtrip_quand_desc2: "Genaue Daten folgen",
        roadtrip_duree_title: "Dauer",
        roadtrip_duree_desc: "6 bis 7 Tage",
        roadtrip_duree_desc2: "Fahren und Entdecken",
        roadtrip_places_title: "Plätze",
        roadtrip_places_desc: "Maximal 25 Fahrzeuge",
        roadtrip_places_desc2: "Begrenzte Anmeldung",
        
        roadtrip_inclus: "Was ist inbegriffen",
        roadtrip_hebergement: "Unterkunft",
        roadtrip_hebergement_desc: "6 Nächte in Hotels, ausgewählt für ihre Qualität und ihren Charme",
        roadtrip_repas: "Mahlzeiten",
        roadtrip_repas_desc: "Frühstück und Abendessen inklusive, Entdeckung der lokalen Gastronomie",
        roadtrip_guidage: "Führung",
        roadtrip_guidage_desc: "GPS-Führung bereitgestellt, detailliertes Roadbook und Begleitfahrzeug",
        roadtrip_activites: "Aktivitäten",
        roadtrip_activites_desc: "Exklusive Besuche und organisierte Aktivitäten während der gesamten Reise",
        roadtrip_support: "Unterstützung",
        roadtrip_support_desc: "Technische und medizinische Unterstützung rund um die Uhr während der gesamten Reise",
        roadtrip_souvenirs: "Erinnerungen",
        roadtrip_souvenirs_desc: "Willkommenspaket, professionelle Fotos der Reise inklusive",
        
        // Formulaires
        form_nom: "Nachname",
        form_prenom: "Vorname",
        form_raison: "Firmenname",
        form_raison_optionnel: "Firmenname (optional)",
        form_adresse: "Adresse",
        form_npa: "PLZ",
        form_localite: "Ort",
        form_pays: "Land",
        form_email: "E-Mail",
        form_telephone: "Telefon",
        form_message: "Nachricht",
        form_vehicule: "Fahrzeug, das Sie verwenden möchten",
        form_vehicule_optionnel: "Fahrzeug, das Sie verwenden möchten (optional)",
        form_submit: "Senden",
        form_required: "*",
        
        // Footer
        footer_tagline: "Außergewöhnliche Roadtrips durch Europa",
        footer_contact: "Kontakt",
        footer_navigation: "Navigation",
        footer_copyright: "© 2025 GT Switzerland. Alle Rechte vorbehalten.",
        
        success_message: "Vielen Dank! Wir haben Ihre Anfrage erhalten und werden Sie in Kürze kontaktieren."
    },
    en: {
        // Navigation
        nav_accueil: "Home",
        nav_infos: "Info",
        nav_experiences: "Our Experiences",
        nav_roadtrip: "Roadtrip 2026",
        nav_contact: "Contact",
        nav_faq: "FAQ",
        
        // Hero
        hero_title: "GT Switzerland",
        hero_subtitle: "Experience the ultimate roadtrip adventure",
        hero_description: "We organize exceptional roadtrips through Europe's most beautiful roads. Join us for unforgettable experiences behind the wheel of exceptional cars.",
        
        // Buttons
        btn_contact: "Contact us",
        btn_reserve: "Book now",
        btn_voir_plus: "Learn more",
        btn_prereserver: "Pre-book now",
        btn_reserver_place: "Reserve your spot",
        
        // Titles
        experiences_title: "Our Experiences",
        experiences_subtitle: "5 years of exceptional adventures across Europe",
        roadtrip_title: "Roadtrip 2026",
        roadtrip_subtitle: "Reserve your spot for our next adventure",
        contact_title: "Contact Us",
        faq_title: "Frequently Asked Questions",
        infos_title: "Practical Information",
        
        // Accueil
        home_qui_sommes_nous: "Who are we?",
        home_description_1: "We are passionate about cars and travel. Since 2021, we have been organizing exceptional roadtrips across Europe, combining the pleasure of driving on legendary roads with the discovery of extraordinary regions. Each trip is carefully prepared to offer a unique and memorable experience.",
        home_description_2: "Join our community of enthusiasts and live unforgettable moments behind the wheel of exceptional cars, in breathtaking landscapes.",
        home_prochainement: "Coming Soon",
        home_roadtrip_annonce: "Roadtrip 2026 - Destination to come",
        home_roadtrip_desc: "We are currently preparing our next roadtrip for 2026. The destination will be revealed soon. Stay tuned so you don't miss registration!",
        home_dernieres_aventures: "Our Latest Adventures",
        home_sardaigne_title: "2025 - Sardinia Tour",
        home_sardaigne_desc: "An exceptional week on the coastal roads of Sardinia, between turquoise sea and mountains.",
        home_pyrenees_title: "2024 - Pyrenees Tour",
        home_pyrenees_desc: "Conquering the legendary passes of the Pyrenees, between France and Spain.",
        home_corse_title: "2023 - Corsica Tour",
        home_corse_desc: "The Island of Beauty as you've never seen it, behind the wheel of exceptional cars.",
        
        // Expériences
        exp_notre_histoire: "Our Story",
        exp_intro: "Since 2021, we have traveled the most beautiful roads in Europe, creating unforgettable memories with car enthusiasts. Discover our past adventures.",
        
        exp_sardaigne_title: "Sardinia Tour",
        exp_sardaigne_desc: "A magical week on the Italian island, between turquoise sea and winding mountain roads. We discovered the Costa Smeralda, crossed the Supramonte mountains and drove along the spectacular coasts. Breathtaking landscapes and exceptional gastronomy.",
        
        exp_pyrenees_title: "Pyrenees Tour",
        exp_pyrenees_desc: "Conquering the legendary passes of the Pyrenees! From Col du Tourmalet to Col d'Aubisque, we traveled the roads used by the Tour de France. A perfect blend of French and Spanish culture, with unforgettable passages through high mountains.",
        
        exp_corse_title: "Corsica Tour",
        exp_corse_desc: "The Island of Beauty lives up to its name! Our journey took us from Bastia to Bonifacio, via the Calanques de Piana and the Agriates desert. Legendary winding roads and breathtaking panoramas over the Mediterranean.",
        
        exp_toscane_title: "Tuscany Tour",
        exp_toscane_subtitle: "Mille Miglia Edition",
        exp_toscane_desc: "An exceptional journey in the footsteps of the legendary Mille Miglia. Florence, Siena, the Chianti hills... We drove on the legendary roads of this historic race, while discovering the exceptional heritage of Tuscany.",
        
        exp_suisse_title: "Switzerland Tour",
        exp_suisse_subtitle: "Our First Roadtrip",
        exp_suisse_desc: "It all started here! Our first organized roadtrip took us through the Swiss Alps, from Lake Geneva to Ticino. Spectacular alpine passes, picturesque villages and an organization that laid the foundation for our future adventures.",
        
        exp_duree: "Duration:",
        exp_participants: "Participants:",
        exp_distance: "Distance:",
        exp_note: "Rating:",
        exp_jours: "days",
        exp_jours_7: "7 days",
        exp_jours_6: "6 days",
        exp_jours_5: "5 days",
        exp_vehicules: "vehicles",
        exp_vehicules_22: "22 vehicles",
        exp_vehicules_20: "20 vehicles",
        exp_vehicules_18: "18 vehicles",
        exp_vehicules_15: "15 vehicles",
        exp_vehicules_12: "12 vehicles",
        
        exp_temoignages: "They lived the experience",
        exp_temoignage_1: "An unforgettable experience! The organization was perfect, the roads magnificent and the atmosphere exceptional. I can't wait to travel again with GT Switzerland!",
        exp_temoignage_1_author: "— Pierre M., Sardinia Tour 2025",
        exp_temoignage_2: "The passes of the Pyrenees were spectacular. Everything was planned down to the smallest detail. A real driving pleasure in a magnificent setting.",
        exp_temoignage_2_author: "— Marc L., Pyrenees Tour 2024",
        exp_temoignage_3: "Corsica from this angle is simply magical. The roads, the landscapes, the accommodation... everything was top. Thank you for these memories!",
        exp_temoignage_3_author: "— Sophie D., Corsica Tour 2023",
        
        exp_cta_title: "Want to create your own memories?",
        exp_cta_desc: "Join us for our next roadtrip in 2026!",
        
        // Voyages / Roadtrip 2026
        roadtrip_prochaine_aventure: "Our Next Roadtrip",
        roadtrip_intro: "We are currently preparing a new exceptional adventure for 2026. The destination will be revealed soon to all registered participants. One thing is certain: it will be unforgettable!",
        roadtrip_quand: "When?",
        roadtrip_quand_desc: "Spring/Summer 2026",
        roadtrip_quand_desc2: "Exact dates to be confirmed",
        roadtrip_duree_title: "Duration",
        roadtrip_duree_desc: "6 to 7 days",
        roadtrip_duree_desc2: "Driving and discovery",
        roadtrip_places_title: "Spots",
        roadtrip_places_desc: "Maximum 25 vehicles",
        roadtrip_places_desc2: "Limited registration",
        
        roadtrip_inclus: "What's included",
        roadtrip_hebergement: "Accommodation",
        roadtrip_hebergement_desc: "6 nights in hotels selected for their quality and charm",
        roadtrip_repas: "Meals",
        roadtrip_repas_desc: "Breakfast and dinner included, discovery of local gastronomy",
        roadtrip_guidage: "Guidance",
        roadtrip_guidage_desc: "GPS guidance provided, detailed roadbook and support vehicle",
        roadtrip_activites: "Activities",
        roadtrip_activites_desc: "Exclusive visits and organized activities throughout the trip",
        roadtrip_support: "Support",
        roadtrip_support_desc: "Technical and medical assistance 24/7 throughout the trip",
        roadtrip_souvenirs: "Souvenirs",
        roadtrip_souvenirs_desc: "Welcome pack, professional photos of the trip included",
        
        // Formulaires
        form_nom: "Last Name",
        form_prenom: "First Name",
        form_raison: "Company Name",
        form_raison_optionnel: "Company Name (optional)",
        form_adresse: "Address",
        form_npa: "ZIP Code",
        form_localite: "City",
        form_pays: "Country",
        form_email: "Email",
        form_telephone: "Phone",
        form_message: "Message",
        form_vehicule: "Vehicle you plan to use",
        form_vehicule_optionnel: "Vehicle you plan to use (optional)",
        form_submit: "Send",
        form_required: "*",
        
        // Footer
        footer_tagline: "Exceptional roadtrips across Europe",
        footer_contact: "Contact",
        footer_navigation: "Navigation",
        footer_copyright: "© 2025 GT Switzerland. All rights reserved.",
        
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
    
    // Burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navContent = document.querySelector('.nav-content');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navContent.classList.toggle('active');
        });
        
        // Fermer le menu en cliquant sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                navContent.classList.remove('active');
            });
        });
        
        // Fermer le menu en cliquant en dehors
        document.addEventListener('click', function(e) {
            if (!navContent.contains(e.target) && !burgerMenu.contains(e.target)) {
                burgerMenu.classList.remove('active');
                navContent.classList.remove('active');
            }
        });
    }
    
    // Navigation auto-hide on scroll
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Clear timeout précédent
        clearTimeout(scrollTimeout);
        
        // Si on scroll vers le bas et qu'on est au-delà de 100px
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('hidden');
        } 
        // Si on scroll vers le haut ou qu'on est en haut de la page
        else if (currentScroll < lastScroll || currentScroll < 10) {
            nav.classList.remove('hidden');
        }
        
        // Réafficher la nav si on arrête de scroller pendant 2 secondes
        scrollTimeout = setTimeout(function() {
            nav.classList.remove('hidden');
        }, 2000);
        
        lastScroll = currentScroll;
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

// Carrousel d'images
const carousels = {};

// Initialiser les carrousels au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser chaque carrousel
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
        const carouselId = carousel.dataset.carousel;
        const images = carousel.querySelectorAll('img');
        const indicatorsContainer = document.querySelector(`[data-indicators="${carouselId}"]`);
        
        // Créer l'objet carrousel
        carousels[carouselId] = {
            currentIndex: 0,
            totalImages: images.length,
            images: images
        };
        
        // Créer les indicateurs
        if (indicatorsContainer) {
            for (let i = 0; i < images.length; i++) {
                const indicator = document.createElement('div');
                indicator.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
                indicator.onclick = () => goToSlide(carouselId, i);
                indicatorsContainer.appendChild(indicator);
            }
        }
    });
});

// Changer de slide
function changeSlide(carouselId, direction) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    
    // Calculer le nouvel index
    carousel.currentIndex += direction;
    
    // Gérer le bouclage
    if (carousel.currentIndex < 0) {
        carousel.currentIndex = carousel.totalImages - 1;
    } else if (carousel.currentIndex >= carousel.totalImages) {
        carousel.currentIndex = 0;
    }
    
    updateCarousel(carouselId);
}

// Aller à une slide spécifique
function goToSlide(carouselId, index) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    
    carousel.currentIndex = index;
    updateCarousel(carouselId);
}

// Mettre à jour l'affichage du carrousel
function updateCarousel(carouselId) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    
    // Mettre à jour les images
    carousel.images.forEach((img, index) => {
        if (index === carousel.currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    
    // Mettre à jour les indicateurs
    const indicatorsContainer = document.querySelector(`[data-indicators="${carouselId}"]`);
    if (indicatorsContainer) {
        const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === carousel.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}

