/**
 * YUYU MOBILE Luxury E-commerce Web Application - Frontend Controller
 * Implements: i18n, RTL engine, E-commerce cart state, interactive canvas 3D simulation,
 * custom cursor tracker, theme toggle, Stripe checkout validator, Catalog Card Carousels,
 * and Product Detail Modal with custom vector-illustrations rendering.
 */

// --- Internationalization Dictionaries ---
const I18N = {
  en: {
    nav_showcase: "Showcase",
    nav_features: "Guarantees",
    nav_customizer: "Catalog",
    hero_eyebrow: "CERTIFIED PRE-OWNED EXCELLENCE",
    hero_title: "Pristine Luxury<br>Smartphones",
    hero_subtitle: "Exclusive flagship smartphones, rigorously certified and hand-polished. Refined luxury, sustainability, and technological superiority. Starting at €1000.",
    spec_audit_title: "Audit:",
    spec_audit_val: "35-Point Certification",
    spec_gold_title: "Gold:",
    spec_gold_val: "24K Polished Cladding",
    spec_warranty_title: "Warranty:",
    spec_warranty_val: "1-Year Insured",
    btn_acquire: "Acquire Now",
    btn_configure: "Browse Catalog",
    canvas_instruction: "Hover to rotate & reflect lighting",
    features_eyebrow: "METICULOUSLY CERTIFIED",
    features_title: "Our Quality Guarantees",
    feat_titanium_title: "35-Point Certification Audit",
    feat_titanium_desc: "Every certified device undergoes complete hardware and cosmetic audits by our watchmaker-grade technicians.",
    feat_gold_title: "Bespoke Restorative Polish",
    feat_gold_desc: "Restored by hand. Micro-buffing, deep-cleaning, and gold/platinum plating maintenance for showroom visual quality.",
    feat_sapphire_title: "Privileged Client Warranty",
    feat_sapphire_desc: "Includes our 1-year global replacement warranty, fully insured concierge transit, and a dedicated account manager.",
    products_eyebrow: "CERTIFIED CATALOG",
    products_title: "Available Creations",
    back_to_studio: "Back to Catalog",
    secure_checkout: "Secure Acquisition",
    express_payment: "Express Checkout",
    or_card_payment: "or proceed with secured card payment",
    shipping_details: "Delivery Coordinates",
    label_full_name: "Full Name",
    err_field_required: "This coordinate is required.",
    label_email: "Concierge Email",
    err_invalid_email: "Please input a valid email.",
    label_phone: "Secure Mobile",
    label_address: "Address Line 1",
    label_city: "City",
    label_zip: "Postal Code",
    label_country: "Country/Region",
    pack_premium_title: "Bespoke Royal Packaging (+150 €)",
    pack_premium_desc: "Includes hand-polished Solid Oak Chest, embossed gold leaf certification plate, and white glove courier delivery.",
    payment_method: "Payment Information",
    secured_stripe: "Secured via Stripe Payment Network",
    card_num: "Card Number",
    card_exp: "Expiry",
    card_cvc: "CVC",
    btn_pay: "Authorize Acquisition",
    acquisition_summary: "Acquisition Summary",
    summary_subtotal: "Subtotal",
    summary_packaging: "Royal Packaging",
    summary_insurance: "Premium Transport & Insurance",
    free: "Complimentary",
    summary_total: "Total Value",
    trust_1_title: "End-to-End Encryption",
    trust_1_desc: "Every payment transaction is tokenized and cryptographically secured.",
    trust_2_title: "Concierge Delivery",
    trust_2_desc: "Hand-delivered pre-owned luxury worldwide under thermal and impact insurance.",
    cart_title: "Your Allocation",
    cart_empty: "No creations selected.",
    btn_return_studio: "Return to Catalog",
    cart_subtotal: "Estimated Total",
    cart_disclaimer: "Complimentary insured delivery is applied to all YUYU MOBILE shipments.",
    btn_checkout: "Proceed to Acquisition",
    order_success_title: "Acquisition Authorized",
    order_success_desc: "Your request has been routed to our global logistics team. A luxury concierge will contact you within 15 minutes to confirm the delivery of your certified pre-owned smartphone.",
    receipt_id: "Order Reference",
    receipt_amount: "Amount Settled",
    btn_done: "Close Showcase",
    footer_tagline: "Second-hand tech, restored to aesthetic and structural perfection.",
    foot_col_creations: "Certified Devices",
    foot_gold: "iPhone 15 Pro Max",
    foot_obsidian: "Galaxy S24 Ultra",
    foot_platinum: "iPhone 14 Pro",
    foot_col_services: "Concierge Services",
    foot_delivery: "Insured Transit",
    foot_support: "Privileged Support",
    foot_bespoke: "Bespoke Engraving",
    foot_col_legal: "Corporate",
    foot_privacy: "Privacy Protocol",
    foot_terms: "Terms of Acquisition",
    all_rights_reserved: "All rights reserved.",
    btn_add_to_cart: "Allocate Device",
    color_gold: "Bespoke Gold",
    color_obsidian: "Obsidian Black",
    color_platinum: "Platinum Aurora",
    condition_label: "Certified Condition:",
    specs_sheet_title: "Technical Verification Specifications",
    spec_row_chassis: "Chassis Frame",
    spec_row_plating: "Finishing / Plating",
    spec_row_glass: "Glass Layer",
    spec_row_storage: "Storage Space"
  },
  es: {
    nav_showcase: "Presentación",
    nav_features: "Garantías",
    nav_customizer: "Catálogo",
    hero_eyebrow: "EXCELENCIA SEMINUEVA CERTIFICADA",
    hero_title: "Smartphones de<br>Lujo Certificados",
    hero_subtitle: "Modelos insignia exclusivos, rigurosamente certificados y pulidos a mano. Lujo refinado, sostenibilidad y superioridad tecnológica. Desde 1000€.",
    spec_audit_title: "Auditoría:",
    spec_audit_val: "Certificación 35-Puntos",
    spec_gold_title: "Oro:",
    spec_gold_val: "Baño de 24K Pulido",
    spec_warranty_title: "Garantía:",
    spec_warranty_val: "1 Año Asegurado",
    btn_acquire: "Adquirir Ahora",
    btn_configure: "Ver Catálogo",
    canvas_instruction: "Pase el cursor para rotar y reflejar la luz",
    features_eyebrow: "RIGUROSAMENTE CERTIFICADO",
    features_title: "Nuestras Garantías de Calidad",
    feat_titanium_title: "Auditoría de Certificación de 35 Puntos",
    feat_titanium_desc: "Cada dispositivo certificado pasa por completos análisis de hardware y cosméticos por parte de técnicos de grado de relojería.",
    feat_gold_title: "Pulido Restaurador Bespoke",
    feat_gold_desc: "Restaurado a mano. Micro-pulido, limpieza profunda y mantenimiento de baños de oro/platino para una calidad visual de vitrina.",
    feat_sapphire_title: "Garantía de Cliente Privilegiado",
    feat_sapphire_desc: "Incluye nuestra garantía de reemplazo global de 1 año, tránsito concierge completamente asegurado y un gestor de cuentas dedicado.",
    products_eyebrow: "CATÁLOGO CERTIFICADO",
    products_title: "Creaciones Disponibles",
    back_to_studio: "Volver al Catálogo",
    secure_checkout: "Adquisición Segura",
    express_payment: "Pago Express",
    or_card_payment: "o proceda con pago seguro con tarjeta",
    shipping_details: "Coordenadas de Entrega",
    label_full_name: "Nombre Completo",
    err_field_required: "Esta coordenada es requerida.",
    label_email: "Correo del Concierge",
    err_invalid_email: "Introduzca un correo válido.",
    label_phone: "Móvil Seguro",
    label_address: "Dirección Línea 1",
    label_city: "Ciudad",
    label_zip: "Código Postal",
    label_country: "País/Región",
    pack_premium_title: "Embalaje Real Bespoke (+150 €)",
    pack_premium_desc: "Incluye cofre de roble macizo pulido a mano, placa de certificación grabada en pan de oro y entrega por mensajero de guante blanco.",
    payment_method: "Información de Pago",
    secured_stripe: "Asegurado mediante la red de pago Stripe",
    card_num: "Número de Tarjeta",
    card_exp: "Vencimiento",
    card_cvc: "CVC",
    btn_pay: "Autorizar Adquisición",
    acquisition_summary: "Resumen de Adquisición",
    summary_subtotal: "Subtotal",
    summary_packaging: "Embalaje Real",
    summary_insurance: "Transporte Premium y Seguro",
    free: "Cortesía",
    summary_total: "Valor Total",
    trust_1_title: "Cifrado de Extremo a Extremo",
    trust_1_desc: "Cada transacción de pago está tokenizada y protegida criptográficamente.",
    trust_2_title: "Entrega Concierge",
    trust_2_desc: "Dispositivos seminuevos entregados en mano en todo el mundo con seguro térmico y de impacto.",
    cart_title: "Su Asignación",
    cart_empty: "No hay creaciones seleccionadas.",
    btn_return_studio: "Volver al Catálogo",
    cart_subtotal: "Total Estimado",
    cart_disclaimer: "Se aplica entrega asegurada de cortesía a todos los envíos de YUYU MOBILE.",
    btn_checkout: "Proceder a la Adquisición",
    order_success_title: "Adquisición Autorizada",
    order_success_desc: "Su solicitud ha sido enviada a nuestro equipo de logística global. Un concierge de lujo se pondrá en contacto con usted en 15 minutos para confirmar la entrega de su smartphone seminuevo certificado.",
    receipt_id: "Referencia del Pedido",
    receipt_amount: "Total Liquidado",
    btn_done: "Cerrar Galería",
    footer_tagline: "Tecnología seminueva, restaurada a la perfección estética y estructural.",
    foot_col_creations: "Dispositivos Certificados",
    foot_gold: "iPhone 15 Pro Max",
    foot_obsidian: "Galaxy S24 Ultra",
    foot_platinum: "iPhone 14 Pro",
    foot_col_services: "Servicios Concierge",
    foot_delivery: "Tránsito Asegurado",
    foot_support: "Soporte Privilegiado",
    foot_bespoke: "Grabado Bespoke",
    foot_col_legal: "Corporativo",
    foot_privacy: "Protocolo de Privacidad",
    foot_terms: "Condiciones de Adquisición",
    all_rights_reserved: "Todos los derechos reservados.",
    btn_add_to_cart: "Asignar Dispositivo",
    color_gold: "Oro Bespoke",
    color_obsidian: "Negro Obsidiana",
    color_platinum: "Platino Aurora",
    condition_label: "Estado Certificado:",
    specs_sheet_title: "Especificaciones Técnicas de Verificación",
    spec_row_chassis: "Marco del Chasis",
    spec_row_plating: "Acabado / Chapado",
    spec_row_glass: "Capa de Cristal",
    spec_row_storage: "Espacio de Almacenamiento"
  },
  ar: {
    nav_showcase: "المعرض",
    nav_features: "الضمانات",
    nav_customizer: "الكتالوج",
    hero_eyebrow: "تفوق الهواتف المستعملة المعتمدة",
    hero_title: "هواتف ذكية فاخرة<br>ومعتمدة كلياً",
    hero_subtitle: "هواتف ذكية رائدة وحصرية، معتمدة ومصقولة بدقة فائقة. فخامة متناهية، استدامة كاملة، وتفوق تقني. تبدأ من 1000 يورو.",
    spec_audit_title: "الفحص:",
    spec_audit_val: "شهادة فحص 35 نقطة",
    spec_gold_title: "الذهب:",
    spec_gold_val: "طلاء 24 قيراط مصقول",
    spec_warranty_title: "الضمان:",
    spec_warranty_val: "ضمان مؤمن لمدة عام",
    btn_acquire: "اقتناء الآن",
    btn_configure: "تصفح الكتالوج",
    canvas_instruction: "مرر المؤشر للتدوير وانعكاس الضوء",
    features_eyebrow: "معتمد بدقة متناهية",
    features_title: "ضمانات الجودة الخاصة بنا",
    feat_titanium_title: "تدقيق وشهادة فحص 35 نقطة",
    feat_titanium_desc: "تخضع جميع الأجهزة المعتمدة لدينا لفحص شامل للعتاد والمظهر الخارجي بواسطة فنيين بمستوى خبراء الساعات السويسريين.",
    feat_gold_title: "صقل وترميم فاخر مخصص",
    feat_gold_desc: "مستعاد يدوياً بالكامل. صقل دقيق، تنظيف عميق، وصيانة الطلاء الذهبي والبلاتيني ليعود بحالة صالة العرض تماماً.",
    feat_sapphire_title: "ضمان العميل المتميز",
    feat_sapphire_desc: "يشمل ضمان الاستبدال العالمي لمدة عام، شحن مؤمن بالكامل، ومدير حسابات خاص لخدمتك.",
    products_eyebrow: "الكتالوج المعتمد",
    products_title: "المعروضات المتاحة",
    back_to_studio: "العودة إلى الكتالوج",
    secure_checkout: "إتمام الاقتناء الآمن",
    express_payment: "الدفع السريع",
    or_card_payment: "أو المتابعة باستخدام بطاقة الدفع المؤمنة",
    shipping_details: "إحداثيات التوصيل والولوج",
    label_full_name: "الاسم الكامل",
    err_field_required: "هذا الحقل مطلوب.",
    label_email: "البريد الإلكتروني للكونسيرج",
    err_invalid_email: "يرجى إدخال بريد إلكتروني صحيح.",
    label_phone: "الهاتف الآمن",
    label_address: "العنوان الرئيسي",
    label_city: "المدينة",
    label_zip: "الرمز البريدي",
    label_country: "الدولة/المنطقة",
    pack_premium_title: "تغليف الملوك الفاخر بيسبوك (+150 €)",
    pack_premium_desc: "يتضمن صندوقاً خشبياً من البلوط الصلب المصقول يدوياً، وصفيحة شهادة من ورق الذهب البارز، وتوصيل كونسيرج خاص.",
    payment_method: "معلومات الدفع والتشفير",
    secured_stripe: "مؤمن بالكامل عبر شبكة الدفع سترايب",
    card_num: "رقم البطاقة",
    card_exp: "تاريخ الانتهاء",
    card_cvc: "رمز الأمان",
    btn_pay: "تفويض الاقتناء والخصم",
    acquisition_summary: "ملخص طلب الاقتناء",
    summary_subtotal: "المجموع الفرعي",
    summary_packaging: "التغليف الملكي الفاخر",
    summary_insurance: "الشحن المؤمن والنقل الممتاز",
    free: "مقدم من الدار",
    summary_total: "القيمة الكلية",
    trust_1_title: "تشفير كامل من البداية للنهاية",
    trust_1_desc: "كل معاملة دفع مشفرة ومحمية بأحدث الأنظمة الأمنية.",
    trust_2_title: "توصيل كونسيرج خاص",
    trust_2_desc: "تسليم الهواتف الفاخرة المستعملة باليد في جميع أنحاء العالم تحت حماية كاملة.",
    cart_title: "تخصيصك الحالي",
    cart_empty: "لم تقم باختيار أي تحفة بعد.",
    btn_return_studio: "العودة إلى الكتالوج",
    cart_subtotal: "المجموع التقديري",
    cart_disclaimer: "يتم تطبيق الشحن والتسليم المؤمن مجاناً على جميع شحنات يويو موبايل.",
    btn_checkout: "المتابعة لإجراءات الاقتناء",
    order_success_title: "تم تفويض الاقتناء بنناج",
    order_success_desc: "تم توجيه طلبك إلى فريق الخدمات اللوجستية العالمي. سيتصل بك موظف كونسيرج في غضون 15 دقيقة لتأكيد إحداثيات توصيل هاتفك الذكي المستعمل المعتمد.",
    receipt_id: "مرجع الطلب الحصري",
    receipt_amount: "المبلغ المدفوع",
    btn_done: "إغلاق المعرض",
    footer_tagline: "تكنولوجيا مستعملة فاخرة، مستعادة إلى الكمال الجمالي والهيكلي.",
    foot_col_creations: "الأجهزة المعتمدة",
    foot_gold: "آيفون 15 برو ماكس",
    foot_obsidian: "جلاكسي إس 24 ألترا",
    foot_platinum: "آيفون 14 برو",
    foot_col_services: "خدمات الكونسيرج",
    foot_delivery: "النقل والشحن المؤمن",
    foot_support: "الدعم المتميز الخاص",
    foot_bespoke: "النقش المخصص بيسبوك",
    foot_col_legal: "الشركة والدار",
    foot_privacy: "بروتوكول الخصوصية",
    foot_terms: "شروط الاقتناء والتعاقد",
    all_rights_reserved: "جميع الحقوق محفوظة ليويو موبايل.",
    btn_add_to_cart: "تخصيص واقتناء",
    color_gold: "ذهب بيسبوك",
    color_obsidian: "أوبسيديان الأسود",
    color_platinum: "بلاتينيوم أورورا",
    condition_label: "حالة الاعتماد:",
    specs_sheet_title: "المواصفات الفنية للتحقق والاعتماد",
    spec_row_chassis: "هيكل الهاتف",
    spec_row_plating: "الطلاء والزينة",
    spec_row_glass: "طبقة الزجاج",
    spec_row_storage: "السعة التخزينية"
  },
  fr: {
    nav_showcase: "Vitrine",
    nav_features: "Garanties",
    nav_customizer: "Catalogue",
    hero_eyebrow: "EXCELLENCE D'OCCASION CERTIFIÉE",
    hero_title: "Smartphones de<br>Luxe Certifiés",
    hero_subtitle: "Des modèles d'exception d'occasion, rigoureusement certifiés et polis à la main. Luxe raffiné, durabilité et supériorité technologique. À partir de 1000 €.",
    spec_audit_title: "Audit:",
    spec_audit_val: "La Certification 35-Points",
    spec_gold_title: "Or:",
    spec_gold_val: "Placage 24K Poli",
    spec_warranty_title: "Garantie:",
    spec_warranty_val: "1 An Assuré",
    btn_acquire: "Acquérir Now",
    btn_configure: "Voir le Catalogue",
    canvas_instruction: "Survolez pour pivoter et refléter la lumière",
    features_eyebrow: "RIGOUREUSEMENT CERTIFIÉ",
    features_title: "Nos Garanties de Qualité",
    feat_titanium_title: "Audit de Certification 35-Points",
    feat_titanium_desc: "Chaque appareil certifié subit un audit matériel et esthétique complet par nos techniciens qualifiés.",
    feat_gold_title: "Polissage Restaurateur Bespoke",
    feat_gold_desc: "Restauré à la main. Micro-polissage, nettoyage en profondeur et entretien des dorures pour une qualité d'aspect neuf.",
    feat_sapphire_title: "Garantie Client Privilégié",
    feat_sapphire_desc: "Comprend notre garantie d'échange mondiale de 1 an, la livraison sous couverture d'assurance et un conseiller dédié.",
    products_eyebrow: "CATALOGUE CERTIFIÉ",
    products_title: "Modèles Disponibles",
    back_to_studio: "Retour au Catalogue",
    secure_checkout: "Acquisition Sécurisée",
    express_payment: "Paiement Express",
    or_card_payment: "ou continuer avec une carte de paiement sécurisée",
    shipping_details: "Coordonnées de Livraison",
    label_full_name: "Nom Complet",
    err_field_required: "Cette coordonnée est requise.",
    label_email: "E-mail du Concierge",
    err_invalid_email: "Veuillez entrer une adresse e-mail valide.",
    label_phone: "Téléphone Sécurisé",
    label_address: "Adresse Ligne 1",
    label_city: "Ville",
    label_zip: "Code Postal",
    label_country: "Pays/Région",
    pack_premium_title: "Coffret Royal Bespoke (+150 €)",
    pack_premium_desc: "Comprend un écrin en chêne massif poli à la main, une plaque de certification dorée à la feuille, et une livraison par coursier en gants blancs.",
    payment_method: "Informations de Paiement",
    secured_stripe: "Sécurisé via le réseau Stripe",
    card_num: "Numéro de Carte",
    card_exp: "Expiration",
    card_cvc: "CVC",
    btn_pay: "Autoriser l'Acquisition",
    acquisition_summary: "Résumé de l'Acquisition",
    summary_subtotal: "Sous-total",
    summary_packaging: "Coffret Royal",
    summary_insurance: "Transport & Assurance Premium",
    free: "Offert",
    summary_total: "Valeur Totale",
    trust_1_title: "Chiffrement de Bout en Bout",
    trust_1_desc: "Toutes les transactions sont tokenisées et sécurisées par cryptographie.",
    trust_2_title: "Livraison Concierge",
    trust_2_desc: "Remis en main propre dans le monde entier sous couverture d'assurance thermique et antichoc.",
    cart_title: "Votre Allocation",
    cart_empty: "Aucune création sélectionnée.",
    btn_return_studio: "Retourner au Catalogue",
    cart_subtotal: "Total Estimé",
    cart_disclaimer: "Une livraison sécurisée et offerte est appliquée à tous les envois YUYU MOBILE.",
    btn_checkout: "Passer à l'Acquisition",
    order_success_title: "Acquisition Autorisée",
    order_success_desc: "Votre demande a été transmise à notre équipe logistique globale. Un concierge de luxe vous contactera sous 15 minutes pour valider les détails de livraison de votre smartphone d'occasion certifié.",
    receipt_id: "Référence de Commande",
    receipt_amount: "Montant Réglé",
    btn_done: "Fermer la Vitrine",
    footer_tagline: "Technologie d'occasion, restaurée à la perfection esthétique et structurelle.",
    foot_col_creations: "Appareils Certifiés",
    foot_gold: "iPhone 15 Pro Max",
    foot_obsidian: "Galaxy S24 Ultra",
    foot_platinum: "iPhone 14 Pro",
    foot_col_services: "Services Concierge",
    foot_delivery: "Transit Assuré",
    foot_support: "Support Privilégié",
    foot_bespoke: "Gravure Sur Mesure",
    foot_col_legal: "Société",
    foot_privacy: "Protocole de Confidentialité",
    foot_terms: "Conditions d'Acquisition",
    all_rights_reserved: "Tous droits réservés.",
    btn_add_to_cart: "Allouer l'Appareil",
    color_gold: "Or Bespoke",
    color_obsidian: "Noir Obsidienne",
    color_platinum: "Platine Aurora",
    condition_label: "État Certifié:",
    specs_sheet_title: "Spécifications Techniques de Vérification",
    spec_row_chassis: "Cadre du Châssis",
    spec_row_plating: "Finition / Placage",
    spec_row_glass: "Cliche de Saphir",
    spec_row_storage: "Espace de Stockage"
  },
  ru: {
    nav_showcase: "Галерея",
    nav_features: "Гарантии",
    nav_customizer: "Каталог",
    hero_eyebrow: "ЭКСКЛЮЗИВНЫЕ СМАРТФОНЫ С ГАРАНТИЕЙ КАЧЕСТВА",
    hero_title: "Сертифицированные<br>Смартфоны Люкс",
    hero_subtitle: "Эксклюзивные флагманские смартфоны, прошедшие строгую сертификацию и ручную полировку. Роскошь, надежность и технологическое превосходство. От 1000€.",
    spec_audit_title: "Проверка:",
    spec_audit_val: "Сертификация 35 точек",
    spec_gold_title: "Золото:",
    spec_gold_val: "Полированное покрытие 24К",
    spec_warranty_title: "Гарантия:",
    spec_warranty_val: "1 год страхования",
    btn_acquire: "Приобрести",
    btn_configure: "Смотреть Каталог",
    canvas_instruction: "Наведите для вращения и изменения световых отражений",
    features_eyebrow: "СТРОГАЯ СЕРТИФИКАЦИЯ",
    features_title: "Наши Гарантии Качества",
    feat_titanium_title: "Сертификационный аудит по 35 пунктам",
    feat_titanium_desc: "Каждое сертифицированное устройство проходит полную техническую и косметическую проверку специалистами часового класса.",
    feat_gold_title: "Реставрационная полировка Bespoke",
    feat_gold_desc: "Ручная реставрация: микро-шлифовка, ультразвуковая чистка и восстановление золотого/платинового покрытия до состояния витрины.",
    feat_sapphire_title: "VIP-гарантия для клиентов",
    feat_sapphire_desc: "Включает нашу всемирную гарантию замены сроком на 1 год, полностью застрахованную консьерж-доставку и выделенного менеджера.",
    products_eyebrow: "СЕРТИФИЦИРОВАННЫЙ КАТАЛОГ",
    products_title: "Доступные Экземпляры",
    back_to_studio: "Назад в Каталог",
    secure_checkout: "Безопасное Оформление",
    express_payment: "Быстрая Оплата",
    or_card_payment: "или продолжить через защищенный платеж картой",
    shipping_details: "Координаты Доставки",
    label_full_name: "Полное Имя",
    err_field_required: "Это координатное поле обязательно для заполнения.",
    label_email: "Консьерж Email",
    err_invalid_email: "Пожалуйста, введите корректный адрес.",
    label_phone: "Защищенный Телефон",
    label_address: "Адрес (Строка 1)",
    label_city: "Город",
    label_zip: "Почтовый Индекс",
    label_country: "Страна/Region",
    pack_premium_title: "Королевская Упаковка Bespoke (+150 €)",
    pack_premium_desc: "Включает полированный вручную сундук из цельного дуба, сертификат с тиснением сусальным золотом и доставку курьером в белых перчатках.",
    payment_method: "Информация о Платеже",
    secured_stripe: "Защищено платежной сетью Stripe",
    card_num: "Номер Карты",
    card_exp: "Срок Действия",
    card_cvc: "CVC код",
    btn_pay: "Авторизовать Приобретение",
    acquisition_summary: "Сводка Заказа",
    summary_subtotal: "Промежуточный Итог",
    summary_packaging: "Королевская Упаковка",
    summary_insurance: "Транспортировка и Страхование",
    free: "Бесплатно",
    summary_total: "Итоговая Стоимость",
    trust_1_title: "Сквозное Шифрование",
    trust_1_desc: "Каждая платежная транзакция токенизируется и криптографически защищается.",
    trust_2_title: "Консьерж-Доставка",
    trust_2_desc: "Личная доставка застрахованных б/у устройств класса люкс в любую точку мира с защитой от повреждений.",
    cart_title: "Ваше Распределение",
    cart_empty: "Создания не выбраны.",
    btn_return_studio: "Вернуться в Каталог",
    cart_subtotal: "Оценочная Стоимость",
    cart_disclaimer: "Бесплатная застрахованная доставка распространяется на все отправления YUYU MOBILE.",
    btn_checkout: "Перейти к Приобретению",
    order_success_title: "Приобретение Авторизовано",
    order_success_desc: "Ваш запрос направлен в службу глобальной логистики. VIP-консьерж свяжется с вами в течение 15 минут для подтверждения координат доставки сертифицированного смартфона.",
    receipt_id: "Номер Заказа",
    receipt_amount: "Сумма Списания",
    btn_done: "Закрыть Галерею",
    footer_tagline: "Восстановленная люксовая б/у техника в безупречном эстетическом и техническом состоянии.",
    foot_col_creations: "Сертифицированные Устройства",
    foot_gold: "iPhone 15 Pro Max",
    foot_obsidian: "Galaxy S24 Ultra",
    foot_platinum: "iPhone 14 Pro",
    foot_col_services: "Услуги Консьержа",
    foot_delivery: "Застрахованный Транзит",
    foot_support: "Привилегированная Поддержка",
    foot_bespoke: "Гравировка Bespoke",
    foot_col_legal: "Корпорация",
    foot_privacy: "Протокол Конфиденциальности",
    foot_terms: "Условия Приобретения",
    all_rights_reserved: "Все права защищены.",
    btn_add_to_cart: "Выбрать Устройство",
    color_gold: "Золото Bespoke",
    color_obsidian: "Черный Обсидиан",
    color_platinum: "Платина Aurora",
    condition_label: "Сертифицированное состояние:",
    specs_sheet_title: "Технические Спецификации Сертификации",
    spec_row_chassis: "Каркас Корпуса",
    spec_row_plating: "Отделка / Напыление",
    spec_row_glass: "Сапфировое Стекло",
    spec_row_storage: "Объем Памяти"
  }
};

// --- Product Data ---
const PRODUCTS = [
  {
    id: "gold-monolith",
    name: "Apple iPhone 15 Pro Max (Custom Gold)",
    price: 4500.00,
    desc: "Rigourously inspected custom creation. Solid aerospace grade titanium back electroplated in pure 24-karat gold.",
    specs: {
      chassis: "Bespoke Grade 5 Titanium",
      embellishment: "24K Gold Electroplating",
      glass: "Ceramic Shield & Sapphire",
      storage: "1 TB Secured Storage"
    },
    color: "gold",
    condition: "Pristine (Like New)",
    images: ["gold_front", "gold_back", "gold_side"]
  },
  {
    id: "obsidian-monolith",
    name: "Samsung Galaxy S24 Ultra (Obsidian Custom)",
    price: 3800.00,
    desc: "Inspected and fully certified. Carbon-silicon body with amorphous diamond stealth coating.",
    specs: {
      chassis: "Titanium & Carbon Frame",
      embellishment: "Amorphous Diamond DLC",
      glass: "Corning Armor & Sapphire",
      storage: "512 GB Secured Storage"
    },
    color: "obsidian",
    condition: "Excellent (Polished)",
    images: ["obsidian_front", "obsidian_back", "obsidian_side"]
  },
  {
    id: "platinum-monolith",
    name: "Apple iPhone 14 Pro (Bespoke Platinum)",
    price: 2900.00,
    desc: "Inspected pre-owned edition. Cladded in custom mirror-polished platinum and diamond cut control buttons.",
    specs: {
      chassis: "Bespoke Titanium Core",
      embellishment: "Bespoke Platinum Cladding",
      glass: "Ceramic Shield & Sapphire",
      storage: "1 TB Secured Storage"
    },
    color: "platinum",
    condition: "Mint (Showroom State)",
    images: ["platinum_front", "platinum_back", "platinum_side"]
  }
];

// --- Global Application State ---
const state = {
  language: "en",
  theme: "dark",
  cart: [],
  view: "shop",
  selectedPackaging: false,
  heroColor: "gold",
  cardCarouselIndexes: {}, // Maps productId -> activeIndex
  modalCarouselIndex: 0,
  activeDetailProductId: null
};

// --- Custom Mouse Cursor Setup ---
const setupCursor = () => {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  
  if (!cursor || !dot) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });

  const hoverables = "a, button, select, input, .color-btn, label, [role='button'], .product-card, .card-carousel-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverables)) {
      cursor.classList.add("hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverables)) {
      cursor.classList.remove("hovering");
    }
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  });
  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });
};

// --- Theme Switcher Logic ---
const setupTheme = () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    state.theme = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    state.theme = "light";
  }

  const applyTheme = () => {
    document.body.className = `theme-${state.theme}`;
    localStorage.setItem("theme", state.theme);
  };

  applyTheme();

  toggleBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    drawShowcase();
    // Redraw all loaded canvas slides to adjust grid/modal contrast
    drawCarouselSlideCanvases();
  });
};

// --- Dynamic Vector Graphics Drawings on Canvas ---
// Generates front, back, and side luxury phone illustrations in code to avoid broken placeholders.
const drawDeviceCanvas = (canvas, color, view) => {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(w / 2, h / 2);

  const phoneW = 120;
  const phoneH = 220;
  const cornerRadius = 18;

  // Decide frame gradients
  let frameGrad = ctx.createLinearGradient(-phoneW/2, -phoneH/2, phoneW/2, phoneH/2);
  let highlightColor = "rgba(255, 255, 255, 0.35)";
  
  if (color === "gold") {
    frameGrad.addColorStop(0, "#DFBA73");
    frameGrad.addColorStop(0.5, "#FFF3D1");
    frameGrad.addColorStop(1, "#C5A059");
    highlightColor = "rgba(255, 243, 209, 0.5)";
  } else if (color === "platinum") {
    frameGrad.addColorStop(0, "#E5E5E5");
    frameGrad.addColorStop(0.5, "#FFFFFF");
    frameGrad.addColorStop(1, "#A2A2A2");
    highlightColor = "rgba(255, 255, 255, 0.5)";
  } else {
    frameGrad.addColorStop(0, "#2c2c2e");
    frameGrad.addColorStop(0.5, "#1c1c1e");
    frameGrad.addColorStop(1, "#070707");
    highlightColor = "rgba(255, 255, 255, 0.15)";
  }

  if (view === "front") {
    // 1. Draw outer frame
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 15;
    ctx.fillStyle = frameGrad;
    ctx.beginPath();
    ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
    ctx.fill();

    // 2. Draw black screen
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#0c0c0d";
    ctx.beginPath();
    ctx.roundRect(-phoneW/2 + 4, -phoneH/2 + 4, phoneW - 8, phoneH - 8, cornerRadius - 3);
    ctx.fill();

    // 3. Dynamic Screen glare
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(-phoneW/2 + 4, -phoneH/2 + 4, phoneW - 8, phoneH - 8, cornerRadius - 3);
    ctx.clip();

    let glare = ctx.createLinearGradient(-phoneW, -phoneH, phoneW, phoneH);
    glare.addColorStop(0, "rgba(255,255,255,0)");
    glare.addColorStop(0.5, highlightColor);
    glare.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = glare;
    ctx.fillRect(-phoneW, -phoneH, phoneW*2, phoneH*2);

    // Screen text
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.font = "300 8px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("YUYU MOBILE", 0, 40);
    ctx.restore();

    // 4. Dynamic Island or Notch
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.roundRect(-16, -phoneH/2 + 10, 32, 7, 3.5);
    ctx.fill();

  } else if (view === "back") {
    // 1. Outer frame
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 15;
    ctx.fillStyle = frameGrad;
    ctx.beginPath();
    ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
    ctx.fill();

    // 2. Camera square plate
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.beginPath();
    ctx.roundRect(-phoneW/2 + 10, -phoneH/2 + 10, 42, 42, 10);
    ctx.fill();

    // 3. Camera Lenses
    ctx.fillStyle = "#070708";
    ctx.strokeStyle = color === "gold" ? "#DFBA73" : color === "platinum" ? "#E5E5E5" : "#444";
    ctx.lineWidth = 1;
    
    // Lens 1
    ctx.beginPath(); ctx.arc(-phoneW/2 + 21, -phoneH/2 + 21, 6, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    // Lens 2
    ctx.beginPath(); ctx.arc(-phoneW/2 + 21, -phoneH/2 + 41, 6, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    // Lens 3
    ctx.beginPath(); ctx.arc(-phoneW/2 + 39, -phoneH/2 + 31, 6, 0, Math.PI*2); ctx.fill(); ctx.stroke();

    // 4. Luxury engraving logo
    ctx.fillStyle = color === "gold" ? "#A37E3B" : color === "platinum" ? "#777" : "rgba(255,255,255,0.15)";
    ctx.font = "300 8px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("YUYU", 0, 50);

  } else if (view === "side") {
    // Thin side profile of device
    const sideW = 16;
    
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 15;
    ctx.fillStyle = frameGrad;
    ctx.beginPath();
    ctx.roundRect(-sideW/2, -phoneH/2, sideW, phoneH, 6);
    ctx.fill();

    // Side shiny border lines
    ctx.shadowBlur = 0;
    ctx.strokeStyle = highlightColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-sideW/2 + 1, -phoneH/2 + 10);
    ctx.lineTo(-sideW/2 + 1, phoneH/2 - 10);
    ctx.moveTo(sideW/2 - 1, -phoneH/2 + 10);
    ctx.lineTo(sideW/2 - 1, phoneH/2 - 10);
    ctx.stroke();

    // Vol/power buttons notches
    ctx.fillStyle = "#000000";
    ctx.fillRect(-sideW/2 - 1, -40, 2, 18);
    ctx.fillRect(-sideW/2 - 1, -15, 2, 18);
    ctx.fillRect(sideW/2 - 1, 10, 2, 22);
  }

  ctx.restore();
};

// Redraws all visible canvases matching carousels
const drawCarouselSlideCanvases = () => {
  document.querySelectorAll("canvas.carousel-slide-canvas").forEach(canvas => {
    const color = canvas.getAttribute("data-device");
    const view = canvas.getAttribute("data-view");
    if (color && view) {
      drawDeviceCanvas(canvas, color, view);
    }
  });
};

// --- Dynamic i18n & RTL Layout Engine ---
const updateTranslations = () => {
  const dict = I18N[state.language] || I18N.en;
  
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.getAttribute("data-t");
    if (dict[key]) {
      const svg = el.querySelector("svg");
      if (svg) {
        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = dict[key];
        } else {
          el.innerHTML = svg.outerHTML + ` <span class="btn-text">${dict[key]}</span>`;
        }
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  const activeLabel = document.getElementById("activeLangLabel");
  if (activeLabel) activeLabel.textContent = state.language.toUpperCase();

  const isRtl = state.language === "ar";
  document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", state.language);
  
  if (isRtl) {
    document.documentElement.classList.add("rtl-mode");
  } else {
    document.documentElement.classList.remove("rtl-mode");
  }

  renderProductsGrid();
  renderCart();
  renderCheckoutSummary();
  
  const siteTitle = state.language === "ar" 
    ? "يويو موبايل | هواتف ذكية فاخرة مستعملة ومعتمدة كلياً"
    : "YUYU MOBILE | Certified Pre-Owned Luxury Smartphones";
  document.title = siteTitle;

  if (window.updateSeoMetadata) {
    window.updateSeoMetadata(state.language, PRODUCTS);
  }
};

const setupLanguages = () => {
  const langMenu = document.getElementById("langMenu");
  if (!langMenu) return;

  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && I18N[urlLang]) {
    state.language = urlLang;
  }

  updateTranslations();

  langMenu.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      state.language = selected;
      
      const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?lang=${selected}${window.location.hash}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      
      updateTranslations();
    });
  });
};

// --- E-commerce Core Cart System ---
const toggleCartDrawer = (isOpen) => {
  const backdrop = document.getElementById("cartBackdrop");
  const drawer = document.getElementById("cartDrawer");
  if (!backdrop || !drawer) return;

  if (isOpen) {
    backdrop.classList.add("active");
    drawer.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
  } else {
    backdrop.classList.remove("active");
    drawer.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }
};

const addToCart = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ product, quantity: 1 });
  }

  renderCart();
  toggleCartDrawer(true);
  animateCartBadge();
};

const updateQuantity = (productId, change) => {
  const item = state.cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(item => item.product.id !== productId);
  }

  renderCart();
  renderCheckoutSummary();
  animateCartBadge();
};

const removeCartItem = (productId) => {
  state.cart = state.cart.filter(item => item.product.id !== productId);
  renderCart();
  renderCheckoutSummary();
  animateCartBadge();
};

const animateCartBadge = () => {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;

  badge.classList.remove("pop");
  void badge.offsetWidth;
  badge.classList.add("pop");
};

const formatCurrency = (val) => {
  let locale = "de-DE";
  if (state.language === "ar") locale = "ar-AE";
  
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR"
  }).format(val);
};

const renderCart = () => {
  const emptyState = document.getElementById("cartEmptyState");
  const listWrapper = document.getElementById("cartItemsList");
  const footerSection = document.getElementById("cartFooterSection");
  const badge = document.getElementById("cartBadge");
  const subtotalLabel = document.getElementById("cartSubtotal");

  if (!emptyState || !listWrapper || !footerSection || !badge) return;

  const dict = I18N[state.language] || I18N.en;

  let totalItems = 0;
  let subtotal = 0;

  listWrapper.innerHTML = "";

  state.cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += item.product.price * item.quantity;

    const translatedName = dict[item.product.id] || item.product.name;
    const translatedColor = dict[`color_${item.product.color}`] || item.product.color;

    const itemHTML = `
      <div class="cart-item">
        <div class="cart-item-img-wrap">
          <canvas class="carousel-slide-canvas" data-device="${item.product.color}" data-view="front" width="80" height="120" style="max-height:80%; max-width:80%;"></canvas>
        </div>
        <div class="cart-item-details">
          <div class="cart-item-header">
            <span class="cart-item-name">${translatedName}</span>
            <span class="cart-item-price">${formatCurrency(item.product.price * item.quantity)}</span>
          </div>
          <div class="cart-item-meta">${translatedColor} | ${item.product.condition}</div>
          <div class="cart-item-actions">
            <div class="quantity-adjuster">
              <button class="qty-btn" onclick="updateQuantity('${item.product.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity('${item.product.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeCartItem('${item.product.id}')">${state.language === "ar" ? "إزالة" : "Remove"}</button>
          </div>
        </div>
      </div>
    `;
    listWrapper.insertAdjacentHTML("beforeend", itemHTML);
  });

  drawCarouselSlideCanvases();
  badge.textContent = totalItems;
  
  if (state.cart.length === 0) {
    emptyState.style.display = "flex";
    listWrapper.style.display = "none";
    footerSection.style.display = "none";
  } else {
    emptyState.style.display = "none";
    listWrapper.style.display = "flex";
    footerSection.style.display = "block";
    subtotalLabel.textContent = formatCurrency(subtotal);
  }
};

// --- Catalog Carousel Slide Controller ---
const shiftCardCarousel = (productId, direction, maxSlides, event) => {
  if (event) event.stopPropagation(); // Avoid triggering card details click

  if (state.cardCarouselIndexes[productId] === undefined) {
    state.cardCarouselIndexes[productId] = 0;
  }

  let index = state.cardCarouselIndexes[productId];
  index += direction;

  if (index < 0) {
    index = maxSlides - 1;
  } else if (index >= maxSlides) {
    index = 0;
  }

  state.cardCarouselIndexes[productId] = index;

  // Move slide track
  const track = document.getElementById(`track-${productId}`);
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Update dots indicator active classes
  const dots = document.querySelectorAll(`#dots-${productId} .card-carousel-dot`);
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
};

// --- Dynamic Render of Products Grid with Inline Carousels ---
const renderProductsGrid = () => {
  const grid = document.getElementById("productsGridContainer");
  if (!grid) return;

  const dict = I18N[state.language] || I18N.en;
  grid.innerHTML = "";

  PRODUCTS.forEach(p => {
    const labelBuy = dict.btn_add_to_cart || "Allocate Device";
    const name = dict[p.id] || p.name;
    const desc = dict[`${p.id}_desc`] || p.desc;
    
    const titleChassis = dict.feat_titanium_title || "Chassis";
    const titleGold = dict.feat_gold_title || "Plating";
    const titleSapphire = dict.feat_sapphire_title || "Screen Glass";
    
    // Check if product contains multiple images to display carousel slides
    const hasMultiple = p.images && p.images.length > 1;
    const initialIndex = state.cardCarouselIndexes[p.id] || 0;
    
    let imageAreaHTML = "";
    if (hasMultiple) {
      // Build sliding carousel track
      let slidesHTML = "";
      let dotsHTML = "";
      p.images.forEach((imgTag, idx) => {
        const viewType = imgTag.split("_")[1] || "front";
        slidesHTML += `
          <div class="card-carousel-slide">
            <canvas class="carousel-slide-canvas" data-device="${p.color}" data-view="${viewType}" width="200" height="300"></canvas>
          </div>
        `;
        dotsHTML += `
          <span class="card-carousel-dot ${idx === initialIndex ? 'active' : ''}"></span>
        `;
      });

      imageAreaHTML = `
        <div class="card-carousel-container">
          <div class="card-carousel-track" id="track-${p.id}" style="transform: translateX(-${initialIndex * 100}%);">
            ${slidesHTML}
          </div>
          <button class="card-carousel-btn prev" onclick="shiftCardCarousel('${p.id}', -1, ${p.images.length}, event)">‹</button>
          <button class="card-carousel-btn next" onclick="shiftCardCarousel('${p.id}', 1, ${p.images.length}, event)">›</button>
          <div class="card-carousel-dots" id="dots-${p.id}">
            ${dotsHTML}
          </div>
        </div>
      `;
    } else {
      // Fallback single image
      imageAreaHTML = `
        <canvas class="carousel-slide-canvas" data-device="${p.color}" data-view="front" width="200" height="300"></canvas>
      `;
    }

    const cardHTML = `
      <div class="product-card" onclick="openProductDetail('${p.id}')">
        <div class="product-image-wrap">
          ${imageAreaHTML}
        </div>
        
        <div>
          <span class="condition-badge" style="font-size: 0.7rem; padding: 4px 8px; border-radius: 4px; border: 1px solid var(--gold-start); color: var(--gold-start); text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; display: inline-block; margin-bottom: 12px;">
            ${p.condition}
          </span>
        </div>

        <div class="product-meta-header">
          <h3 class="product-title" style="font-size:1.15rem; font-weight:500;">${name}</h3>
          <span class="product-price">${formatCurrency(p.price)}</span>
        </div>
        <p class="product-desc">${desc}</p>
        
        <div class="product-specs-list">
          <div class="product-spec-line">
            <span class="label">${state.language === "ar" ? "الحالة" : "Condition"}</span>
            <span class="val" style="color: var(--gold-start); font-weight: 500;">${p.condition.split(" ")[0]}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${titleChassis.split(" ")[0]}</span>
            <span class="val">${p.specs.chassis}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${state.language === "ar" ? "الطلاء" : "Plating"}</span>
            <span class="val">${p.specs.embellishment}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${state.language === "ar" ? "السعة" : "Storage"}</span>
            <span class="val">${p.specs.storage}</span>
          </div>
        </div>
        
        <div class="product-variants-row">
          <span class="variant-label">${state.language === "ar" ? "اللون المتاح" : "Finish Tone"}</span>
          <div class="canvas-color-selectors">
            <span class="color-btn active" style="background: ${
              p.color === 'gold' ? 'linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)' :
              p.color === 'platinum' ? 'linear-gradient(135deg, #E5E5E5 0%, #A2A2A2 100%)' :
              'linear-gradient(135deg, #1C1C1E 0%, #070707 100%)'
            }; width: 14px; height: 14px; border:none; pointer-events:none;"></span>
          </div>
        </div>
        
        <div class="product-card-cta">
          <button class="btn btn-secondary btn-block btn-platinum" onclick="event.stopPropagation(); addToCart('${p.id}')">
            <span class="btn-text">${labelBuy}</span>
          </button>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML("beforeend", cardHTML);
  });

  drawCarouselSlideCanvases();
};

// --- Product Details Modal Actions ---
const openProductDetail = (productId) => {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  state.activeDetailProductId = productId;
  state.modalCarouselIndex = 0;

  const dict = I18N[state.language] || I18N.en;

  // Set modal details copy
  document.getElementById("detailDeviceTitle").textContent = dict[p.id] || p.name;
  document.getElementById("detailDevicePrice").textContent = formatCurrency(p.price);
  document.getElementById("detailDeviceDesc").textContent = dict[`${p.id}_desc`] || p.desc;
  document.getElementById("detailConditionBadge").textContent = p.condition;

  // Set spec tables
  document.getElementById("detailSpecChassis").textContent = p.specs.chassis;
  document.getElementById("detailSpecPlating").textContent = p.specs.embellishment;
  document.getElementById("detailSpecGlass").textContent = p.specs.glass;
  document.getElementById("detailSpecStorage").textContent = p.specs.storage;

  // Build high-res modal carousel images
  const track = document.getElementById("modalCarouselTrack");
  const dotsContainer = document.getElementById("modalCarouselDots");
  
  if (track && dotsContainer) {
    track.innerHTML = "";
    dotsContainer.innerHTML = "";

    p.images.forEach((imgTag, idx) => {
      const viewType = imgTag.split("_")[1] || "front";
      
      const slideHTML = `
        <div class="modal-carousel-slide">
          <canvas class="carousel-slide-canvas" data-device="${p.color}" data-view="${viewType}" width="350" height="450"></canvas>
        </div>
      `;
      track.insertAdjacentHTML("beforeend", slideHTML);

      const dotHTML = `
        <span class="modal-carousel-dot ${idx === 0 ? 'active' : ''}" onclick="jumpModalCarousel(${idx})"></span>
      `;
      dotsContainer.insertAdjacentHTML("beforeend", dotHTML);
    });

    track.style.transform = `translateX(0%)`;
  }

  // Draw details canvases immediately
  drawCarouselSlideCanvases();

  // Reveal Modal
  const backdrop = document.getElementById("productDetailModalBackdrop");
  if (backdrop) {
    backdrop.classList.add("active");
    backdrop.setAttribute("aria-hidden", "false");
  }
};

const closeProductDetail = () => {
  const backdrop = document.getElementById("productDetailModalBackdrop");
  if (backdrop) {
    backdrop.classList.remove("active");
    backdrop.setAttribute("aria-hidden", "true");
  }
  state.activeDetailProductId = null;
};

const shiftModalCarousel = (direction) => {
  const p = PRODUCTS.find(prod => prod.id === state.activeDetailProductId);
  if (!p) return;

  const maxSlides = p.images.length;
  let idx = state.modalCarouselIndex + direction;

  if (idx < 0) {
    idx = maxSlides - 1;
  } else if (idx >= maxSlides) {
    idx = 0;
  }

  jumpModalCarousel(idx);
};

const jumpModalCarousel = (index) => {
  state.modalCarouselIndex = index;
  
  const track = document.getElementById("modalCarouselTrack");
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  const dots = document.querySelectorAll("#modalCarouselDots .modal-carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
};

// --- View Router Logic ---
const setView = (viewName) => {
  const shopView = document.getElementById("shopView");
  const checkoutView = document.getElementById("checkoutView");
  
  if (!shopView || !checkoutView) return;

  state.view = viewName;

  if (viewName === "shop") {
    checkoutView.classList.remove("active");
    setTimeout(() => {
      checkoutView.style.display = "none";
      shopView.style.display = "block";
      setTimeout(() => {
        shopView.classList.add("active");
        drawShowcase();
      }, 50);
    }, 600);
  } else {
    toggleCartDrawer(false);
    renderCheckoutSummary();
    shopView.classList.remove("active");
    setTimeout(() => {
      shopView.style.display = "none";
      checkoutView.style.display = "block";
      setTimeout(() => {
        checkoutView.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }, 600);
  }
};

const renderCheckoutSummary = () => {
  const listWrapper = document.getElementById("checkoutItemsList");
  const subtotalLabel = document.getElementById("summarySubtotal");
  const packagingLabel = document.getElementById("summaryPackaging");
  const totalLabel = document.getElementById("summaryTotal");
  const payButtonText = document.getElementById("payButtonText");

  if (!listWrapper || !subtotalLabel || !packagingLabel || !totalLabel) return;

  const dict = I18N[state.language] || I18N.en;

  let subtotal = 0;
  listWrapper.innerHTML = "";

  state.cart.forEach(item => {
    subtotal += item.product.price * item.quantity;
    
    const translatedName = dict[item.product.id] || item.product.name;
    const itemHTML = `
      <div class="summary-item">
        <div class="summary-item-left">
          <span class="summary-item-name">${translatedName}</span>
          <span class="summary-item-qty">x${item.quantity}</span>
        </div>
        <span class="summary-item-price">${formatCurrency(item.product.price * item.quantity)}</span>
      </div>
    `;
    listWrapper.insertAdjacentHTML("beforeend", itemHTML);
  });

  const packagingValue = state.selectedPackaging ? 150.00 : 0.00;
  const totalVal = subtotal + packagingValue;

  subtotalLabel.textContent = formatCurrency(subtotal);
  packagingLabel.textContent = formatCurrency(packagingValue);
  totalLabel.textContent = formatCurrency(totalVal);

  if (payButtonText) {
    payButtonText.textContent = `${dict.btn_pay || "Authorize Acquisition"} (${formatCurrency(totalVal)})`;
  }
};

const setupCheckoutForm = () => {
  const form = document.getElementById("checkoutForm");
  const cardInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("cardExpiry");
  const cvcInput = document.getElementById("cardCvc");
  const cardIndicator = document.getElementById("cardBrandIndicator");
  const packagingToggle = document.getElementById("premiumPackagingToggle");
  const paymentErrors = document.getElementById("paymentErrors");

  if (!form || !cardInput || !expiryInput || !cvcInput) return;

  if (packagingToggle) {
    packagingToggle.addEventListener("change", (e) => {
      state.selectedPackaging = e.target.checked;
      renderCheckoutSummary();
    });
  }

  cardInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted;

    if (value.startsWith("4")) {
      highlightCardBrand("visa");
    } else if (value.startsWith("5")) {
      highlightCardBrand("mastercard");
    } else if (value.startsWith("3")) {
      highlightCardBrand("amex");
    } else {
      highlightCardBrand(null);
    }
  });

  const highlightCardBrand = (brand) => {
    document.querySelectorAll(".stripe-card-header .card-icon").forEach(icon => {
      icon.classList.remove("active");
      if (brand && icon.classList.contains(brand)) {
        icon.classList.add("active");
      }
    });

    if (brand === "visa") {
      cardIndicator.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 8h1.5l.9 3.5.3 1.2c.1-.3.2-.8.4-1.2L14.3 8H16l-2.7 6h-1.5L10 8z\" fill=\"%231A1F71\"/></svg>')";
    } else {
      cardIndicator.style.backgroundImage = "none";
    }
  };

  expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length > 2) {
      e.target.value = `${value.substring(0, 2)}/${value.substring(2)}`;
    } else {
      e.target.value = value;
    }
  });

  cvcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").substring(0, 4);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    paymentErrors.textContent = "";

    let hasErrors = false;

    const requiredInputs = form.querySelectorAll("input[required], select[required]");
    requiredInputs.forEach(input => {
      const field = input.closest(".form-field, .stripe-input-field");
      if (!input.value.trim()) {
        if (field) field.classList.add("invalid");
        hasErrors = true;
      } else {
        if (field) field.classList.remove("invalid");
      }
    });

    const email = document.getElementById("shippingEmail");
    if (email && email.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const field = email.closest(".form-field");
      if (!emailRegex.test(email.value)) {
        if (field) field.classList.add("invalid");
        hasErrors = true;
      } else {
        if (field) field.classList.remove("invalid");
      }
    }

    const rawCard = cardInput.value.replace(/\s/g, "");
    if (rawCard.length < 16) {
      paymentErrors.textContent = state.language === "ar"
        ? "رقم بطاقة غير صالح. يرجى التحقق وإعادة المحاولة."
        : "Invalid transaction card credentials. Please verify details.";
      hasErrors = true;
    }

    if (hasErrors) return;

    const submitBtn = document.getElementById("paySubmitBtn");
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="btn-text">${state.language === "ar" ? "قيد التفويض البнки..." : "Authorizing Transaction..."}</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      let sub = 0;
      state.cart.forEach(item => sub += item.product.price * item.quantity);
      if (state.selectedPackaging) sub += 150.00;

      const referenceId = `#MN-${Math.floor(10000 + Math.random() * 90000)}`;
      document.getElementById("receiptId").textContent = referenceId;
      document.getElementById("receiptAmount").textContent = formatCurrency(sub);
      
      const backdrop = document.getElementById("successModalBackdrop");
      if (backdrop) backdrop.classList.add("active");

      state.cart = [];
      renderCart();
      form.reset();
    }, 2000);
  });

  const successCloseBtn = document.getElementById("successCloseBtn");
  const modalBackdrop = document.getElementById("successModalBackdrop");
  if (successCloseBtn && modalBackdrop) {
    successCloseBtn.addEventListener("click", () => {
      modalBackdrop.classList.remove("active");
      setView("shop");
    });
  }
};

// --- 3D Rotating Smartphone Interactive Canvas Simulation ---
let canvas, ctx;
let mouseX = 0, mouseY = 0;
let phoneRotationY = 0;
let phoneTiltX = 0.1;
let targetRotationY = 0;
let targetTiltX = 0.1;

const setupShowcaseCanvas = () => {
  canvas = document.getElementById("luxuryCanvas");
  if (!canvas) return;
  
  ctx = canvas.getContext("2d");

  const canvasWrapper = document.getElementById("canvasWrapper");

  canvasWrapper.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    targetRotationY = (dx / rect.width) * 0.8;
    targetTiltX = (dy / rect.height) * 0.4;
    
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  canvasWrapper.addEventListener("mouseleave", () => {
    targetRotationY = 0;
    targetTiltX = 0.1;
  });

  const heroColorSelectors = document.querySelectorAll("#heroColorSelector button");
  heroColorSelectors.forEach(btn => {
    btn.addEventListener("click", (e) => {
      heroColorSelectors.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const color = btn.getAttribute("data-color");
      state.heroColor = color;
      
      const glow = document.getElementById("ambientGlow");
      if (glow) {
        if (color === "gold") {
          glow.style.background = "radial-gradient(circle, rgba(223, 186, 115, 0.05) 0%, rgba(223, 186, 115, 0) 70%)";
        } else if (color === "platinum") {
          glow.style.background = "radial-gradient(circle, rgba(229, 229, 229, 0.05) 0%, rgba(229, 229, 229, 0) 70%)";
        } else {
          glow.style.background = "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 70%)";
        }
      }
    });
  });

  drawShowcase();
};

const drawShowcase = () => {
  if (!canvas || !ctx) return;

  requestAnimationFrame(drawShowcase);

  phoneRotationY += (targetRotationY - phoneRotationY) * 0.08;
  phoneTiltX += (targetTiltX - phoneTiltX) * 0.08;

  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.scale(1.2, 1.2);

  const phoneW = 160;
  const phoneH = 310;
  const cornerRadius = 26;

  const cosRot = Math.cos(phoneRotationY);
  const sinRot = Math.sin(phoneRotationY);

  ctx.scale(cosRot, 1 - Math.abs(sinRot) * 0.04);
  ctx.rotate(phoneTiltX * 0.1);

  let frameGrad = ctx.createLinearGradient(-phoneW/2, -phoneH/2, phoneW/2, phoneH/2);
  let sideBevelGrad = ctx.createLinearGradient(-phoneW/2, 0, phoneW/2, 0);
  let highlightColor = "rgba(255, 255, 255, 0.3)";
  
  if (state.heroColor === "gold") {
    frameGrad.addColorStop(0, "#DFBA73");
    frameGrad.addColorStop(0.3, "#FFF3D1");
    frameGrad.addColorStop(0.7, "#A37E3B");
    frameGrad.addColorStop(1, "#DFBA73");

    sideBevelGrad.addColorStop(0, "#826224");
    sideBevelGrad.addColorStop(0.5, "#DFBA73");
    sideBevelGrad.addColorStop(1, "#826224");
    
    highlightColor = "rgba(255, 243, 209, 0.5)";
  } else if (state.heroColor === "platinum") {
    frameGrad.addColorStop(0, "#E5E5E5");
    frameGrad.addColorStop(0.3, "#FFFFFF");
    frameGrad.addColorStop(0.7, "#8A8A8A");
    frameGrad.addColorStop(1, "#A2A2A2");

    sideBevelGrad.addColorStop(0, "#555555");
    sideBevelGrad.addColorStop(0.5, "#E5E5E5");
    sideBevelGrad.addColorStop(1, "#555555");
    
    highlightColor = "rgba(255, 255, 255, 0.6)";
  } else {
    frameGrad.addColorStop(0, "#2c2c2e");
    frameGrad.addColorStop(0.5, "#1c1c1e");
    frameGrad.addColorStop(1, "#070708");

    sideBevelGrad.addColorStop(0, "#050505");
    sideBevelGrad.addColorStop(0.5, "#3a3a3c");
    sideBevelGrad.addColorStop(1, "#050505");
    
    highlightColor = "rgba(255, 255, 255, 0.15)";
  }

  ctx.shadowColor = state.theme === "dark" ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 15;

  ctx.fillStyle = sideBevelGrad;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 - 2, -phoneH/2 - 2, phoneW + 4, phoneH + 4, cornerRadius + 2);
  ctx.fill();

  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  
  ctx.fillStyle = frameGrad;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
  ctx.fill();

  ctx.fillStyle = "#0c0c0d";
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 + 6, -phoneH/2 + 6, phoneW - 12, phoneH - 12, cornerRadius - 5);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 + 6, -phoneH/2 + 6, phoneW - 12, phoneH - 12, cornerRadius - 5);
  ctx.clip();

  let reflectX = phoneRotationY * 180;
  let reflectionGrad = ctx.createLinearGradient(-phoneW + reflectX, -phoneH, phoneW + reflectX, phoneH);
  reflectionGrad.addColorStop(0, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(0.48, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(0.5, highlightColor);
  reflectionGrad.addColorStop(0.52, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = reflectionGrad;
  ctx.fillRect(-phoneW, -phoneH, phoneW * 2, phoneH * 2);

  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.font = "300 12px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Y U Y U   M O B I L E", 0, 100);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = -100; i < 100; i += 20) {
    ctx.moveTo(i - phoneRotationY * 10, -150);
    ctx.lineTo(i + phoneRotationY * 30, 150);
  }
  ctx.stroke();

  ctx.restore();

  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.roundRect(phoneW/2 - 45, -phoneH/2 + 15, 30, 60, 8);
  ctx.fill();

  ctx.fillStyle = "#111112";
  ctx.beginPath();
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 30, 5, 0, Math.PI * 2);
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 45, 5, 0, Math.PI * 2);
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 60, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = highlightColor;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.strokeStyle = highlightColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
  ctx.stroke();

  ctx.restore();
};

// Global helper bind for slide controllers
window.shiftCardCarousel = shiftCardCarousel;
window.openProductDetail = openProductDetail;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeCartItem = removeCartItem;

window.addEventListener("DOMContentLoaded", () => {
  setupCursor();
  setupTheme();
  setupLanguages();
  
  const heroBuyBtn = document.getElementById("heroBuyBtn");
  if (heroBuyBtn) {
    heroBuyBtn.addEventListener("click", () => {
      addToCart("gold-monolith");
    });
  }

  const cartTrigger = document.getElementById("cartTrigger");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const backdrop = document.getElementById("cartBackdrop");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const backToShopBtn = document.getElementById("backToShopBtn");
  const returnBtn = document.getElementById("continueShoppingBtn");

  if (cartTrigger) cartTrigger.addEventListener("click", () => toggleCartDrawer(true));
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  if (backdrop) backdrop.addEventListener("click", () => toggleCartDrawer(false));
  if (returnBtn) returnBtn.addEventListener("click", () => toggleCartDrawer(false));

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      setView("checkout");
    });
  }

  if (backToShopBtn) {
    backToShopBtn.addEventListener("click", () => {
      setView("shop");
    });
  }

  // Product detail modal triggers
  const closeDetailModalBtn = document.getElementById("closeDetailModalBtn");
  const detailModalBackdrop = document.getElementById("productDetailModalBackdrop");
  const modalCarouselPrev = document.getElementById("modalCarouselPrev");
  const modalCarouselNext = document.getElementById("modalCarouselNext");
  const detailAllocateBtn = document.getElementById("detailAllocateBtn");

  if (closeDetailModalBtn) closeDetailModalBtn.addEventListener("click", closeProductDetail);
  if (detailModalBackdrop) {
    detailModalBackdrop.addEventListener("click", (e) => {
      if (e.target === detailModalBackdrop) closeProductDetail();
    });
  }

  if (modalCarouselPrev) modalCarouselPrev.addEventListener("click", () => shiftModalCarousel(-1));
  if (modalCarouselNext) modalCarouselNext.addEventListener("click", () => shiftModalCarousel(1));

  if (detailAllocateBtn) {
    detailAllocateBtn.addEventListener("click", () => {
      if (state.activeDetailProductId) {
        addToCart(state.activeDetailProductId);
        closeProductDetail();
      }
    });
  }

  renderProductsGrid();
  renderCart();
  setupCheckoutForm();
  setupShowcaseCanvas();
});
