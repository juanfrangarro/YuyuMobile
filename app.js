/**
 * MONOLITH Luxury E-commerce Web Application - Frontend Controller
 * Implements: i18n, RTL engine, E-commerce cart state, interactive canvas 3D simulation,
 * custom cursor tracker, theme toggle, and Stripe checkout validator.
 */

// --- Internationalization Dictionaries ---
const I18N = {
  en: {
    nav_showcase: "Showcase",
    nav_features: "Specifications",
    nav_customizer: "Bespoke Studio",
    hero_eyebrow: "THE DEFINITIVE STANDARD",
    hero_title: "Monolith<br>Bespoke Series",
    hero_subtitle: "Forged in pure aerospace titanium. Embellished with 24-karat gold. A testament to engineering mastery and aesthetic perfection.",
    spec_gold_title: "Gold:",
    spec_gold_val: "24K Electroplating",
    spec_glass_title: "Glass:",
    spec_glass_val: "Sapphire Crystal",
    spec_core_title: "Core:",
    spec_core_val: "Custom Monolith A1",
    btn_acquire: "Acquire Now",
    btn_configure: "Configure Bespoke",
    canvas_instruction: "Hover to rotate & reflect lighting",
    features_eyebrow: "METICULOUSLY CRAFTED",
    features_title: "Exceptional Raw Elements",
    feat_titanium_title: "Grade 5 Titanium Body",
    feat_titanium_desc: "Engineered with the same ultra-strong, lightweight titanium alloy used in aerospace deep-space crafts. Satin-brushed by hand.",
    feat_gold_title: "24K Gold Plated Accents",
    feat_gold_desc: "Gilded with custom 24-karat gold electroplating. Every millimeter is polished to a flawless mirror finish by Swiss horology experts.",
    feat_sapphire_title: "Bespoke Sapphire Screen",
    feat_sapphire_desc: "A custom-cut screen layer made of continuous sapphire crystal, providing total scratch immunity and unprecedented visual clarity.",
    products_eyebrow: "EXCLUSIVE CONFIGURATIONS",
    products_title: "Choose Your Masterpiece",
    back_to_studio: "Back to Bespoke Studio",
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
    trust_2_desc: "Hand-delivered worldwide under thermal and impact insurance.",
    cart_title: "Your Allocation",
    cart_empty: "No creations selected.",
    btn_return_studio: "Return to Studio",
    cart_subtotal: "Estimated Total",
    cart_disclaimer: "Complimentary insured delivery is applied to all Monolith shipments.",
    btn_checkout: "Proceed to Acquisition",
    order_success_title: "Acquisition Authorized",
    order_success_desc: "Your request has been routed to our global logistics team. A luxury concierge will contact you within 15 minutes to confirm your coordinate delivery.",
    receipt_id: "Order Reference",
    receipt_amount: "Amount Settled",
    btn_done: "Close Showcase",
    footer_tagline: "Forging the intersection between engineering excellence and structural beauty.",
    foot_col_creations: "Creations",
    foot_gold: "Gold Monolith",
    foot_obsidian: "Obsidian Titanium",
    foot_platinum: "Platinum Custom",
    foot_col_services: "Concierge Services",
    foot_delivery: "Insured Transit",
    foot_support: "Privileged Support",
    foot_bespoke: "Bespoke Engraving",
    foot_col_legal: "Corporate",
    foot_privacy: "Privacy Protocol",
    foot_terms: "Terms of Acquisition",
    all_rights_reserved: "All rights reserved.",
    btn_add_to_cart: "Allocate Creation",
    color_gold: "Bespoke Gold",
    color_obsidian: "Obsidian Black",
    color_platinum: "Platinum Aurora"
  },
  es: {
    nav_showcase: "Presentación",
    nav_features: "Especificaciones",
    nav_customizer: "Estudio Bespoke",
    hero_eyebrow: "EL ESTÁNDAR DEFINITIVO",
    hero_title: "Serie Monolith<br>Bespoke",
    hero_subtitle: "Forjado en titanio aeroespacial puro. Embellecido con oro de 24 quilates. Un testimonio de maestría ingenieril y perfección estética.",
    spec_gold_title: "Oro:",
    spec_gold_val: "Galvanoplastia de 24K",
    spec_glass_title: "Cristal:",
    spec_glass_val: "Zafiro Continuo",
    spec_core_title: "Núcleo:",
    spec_core_val: "Monolith A1 Custom",
    btn_acquire: "Adquirir Ahora",
    btn_configure: "Configurar Bespoke",
    canvas_instruction: "Pase el cursor para rotar y reflejar la luz",
    features_eyebrow: "Meticulosamente Elaborado",
    features_title: "Materias Primas Excepcionales",
    feat_titanium_title: "Cuerpo de Titanio Grado 5",
    feat_titanium_desc: "Diseñado con la misma aleación de titanio ultrarresistente y ligera utilizada en naves espaciales. Pulido satinado a mano.",
    feat_gold_title: "Detalles en Oro de 24K",
    feat_gold_desc: "Dorado mediante baño de oro de 24 quilates a medida. Pulido por maestros relojeros suizos hasta lograr un brillo de espejo.",
    feat_sapphire_title: "Pantalla de Zafiro Bespoke",
    feat_sapphire_desc: "Una lámina de cristal de zafiro continuo, que ofrece inmunidad total contra arañazos y una claridad visual sin precedentes.",
    products_eyebrow: "CONFIGURACIONES EXCLUSIVAS",
    products_title: "Seleccione su Obra Maestra",
    back_to_studio: "Volver al Estudio Bespoke",
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
    trust_2_desc: "Entregado en mano en todo el mundo con seguro térmico y de impacto.",
    cart_title: "Su Asignación",
    cart_empty: "No hay creaciones seleccionadas.",
    btn_return_studio: "Volver al Estudio",
    cart_subtotal: "Total Estimado",
    cart_disclaimer: "Se aplica entrega asegurada de cortesía a todos los envíos de Monolith.",
    btn_checkout: "Proceder a la Adquisición",
    order_success_title: "Adquisición Autorizada",
    order_success_desc: "Su solicitud ha sido enviada a nuestro equipo de logística global. Un concierge de lujo se pondrá en contacto con usted en 15 minutos para confirmar la entrega.",
    receipt_id: "Referencia del Pedido",
    receipt_amount: "Total Liquidado",
    btn_done: "Cerrar Galería",
    footer_tagline: "Forjando la intersección entre la excelencia en ingeniería y la belleza estructural.",
    foot_col_creations: "Creaciones",
    foot_gold: "Monolith de Oro",
    foot_obsidian: "Titanio Obsidian",
    foot_platinum: "Platino Personalizado",
    foot_col_services: "Servicios Concierge",
    foot_delivery: "Tránsito Asegurado",
    foot_support: "Soporte Privilegiado",
    foot_bespoke: "Grabado Bespoke",
    foot_col_legal: "Corporativo",
    foot_privacy: "Protocolo de Privacidad",
    foot_terms: "Condiciones de Adquisición",
    all_rights_reserved: "Todos los derechos reservados.",
    btn_add_to_cart: "Asignar Creación",
    color_gold: "Oro Bespoke",
    color_obsidian: "Negro Obsidiana",
    color_platinum: "Platino Aurora"
  },
  ar: {
    nav_showcase: "المعرض",
    nav_features: "المواصفات",
    nav_customizer: "استوديو بيسبوك",
    hero_eyebrow: "المعيار الحصري المطلق",
    hero_title: "سلسلة مونوليث<br>بيسبوك النادرة",
    hero_subtitle: "صُنع من التيتانيوم النقي المخصص للطيران، ومزين بذهب عيار 24 قيراط. شهادة حية على التفوق الهندسي والجمال الهيكلي الأخاذ.",
    spec_gold_title: "الذهب:",
    spec_gold_val: "طلاء كهربائي عيار 24 قيراط",
    spec_glass_title: "الزجاج:",
    spec_glass_val: "بلور الياقوت المستمر",
    spec_core_title: "المعالج:",
    spec_core_val: "مونوليث A1 الخاص",
    btn_acquire: "اقتناء الآن",
    btn_configure: "تخصيص الهاتف",
    canvas_instruction: "مرر المؤشر للتدوير وانعكاس الضوء",
    features_eyebrow: "حرفة يدوية دقيقة",
    features_title: "عناصر خام استثنائية",
    feat_titanium_title: "هيكل تيتانيوم من الفئة 5",
    feat_titanium_desc: "مصمم بنفس سبيكة التيتانيوم فائقة القوة وخفيفة الوزن المستخدمة في مركبات الفضاء البعيد. مصقول يدوياً بالساتان.",
    feat_gold_title: "تفاصيل مطلية بذهب عيار 24",
    feat_gold_desc: "مطلية بذهب عيار 24 قيراط مخصص. تم صقل كل مليمتر ليعطي لمعاناً كالمرآة بواسطة خبراء الساعات السويسريين.",
    feat_sapphire_title: "شاشة ياقوت مخصصة",
    feat_sapphire_desc: "طبقة شاشة متصلة مصنوعة من بلور الياقوت النقي، توفر حصانة كاملة ضد الخدوش ووضوحاً بصرياً لا مثيل له.",
    products_eyebrow: "إصدارات وتصاميم خاصة",
    products_title: "اختر تحفتك الفريدة",
    back_to_studio: "العودة إلى استوديو التصاميم",
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
    trust_2_desc: "تسليم باليد في جميع أنحاء العالم تحت حماية ضد الصدمات والحرارة.",
    cart_title: "تخصيصك الحالي",
    cart_empty: "لم تقم باختيار أي تحفة بعد.",
    btn_return_studio: "العودة إلى استوديو المعروضات",
    cart_subtotal: "المجموع التقديري",
    cart_disclaimer: "يتم تطبيق الشحن والتسليم المؤمن مجاناً على جميع شحنات دار مونوليث.",
    btn_checkout: "المتابعة لإجراءات الاقتناء",
    order_success_title: "تم تفويض الاقتناء بنجاح",
    order_success_desc: "تم توجيه طلبك إلى فريق الخدمات اللوجستية العالمي. سيتصل بك موظف كونسيرج في غضون 15 دقيقة لتأكيد إحداثيات التوصيل.",
    receipt_id: "مرجع الطلب الحصري",
    receipt_amount: "المبلغ المدفوع",
    btn_done: "إغلاق المعرض",
    footer_tagline: "دمج التميز الهندسي المتناهي والجمال المعماري للهياكل.",
    foot_col_creations: "الابتكارات",
    foot_gold: "مونوليث الذهبي",
    foot_obsidian: "تيتانيوم أوبسيديان",
    foot_platinum: "بلاتينيوم مخصص",
    foot_col_services: "خدمات الكونسيرج",
    foot_delivery: "النقل والشحن المؤمن",
    foot_support: "الدعم المتميز الخاص",
    foot_bespoke: "النقش المخصص بيسبوك",
    foot_col_legal: "الشركة والدار",
    foot_privacy: "بروتوكول الخصوصية",
    foot_terms: "شروط الاقتناء والتعاقد",
    all_rights_reserved: "جميع الحقوق محفوظة لدار مونوليث.",
    btn_add_to_cart: "تخصيص واقتناء",
    color_gold: "ذهب بيسبوك",
    color_obsidian: "أوبسيديان الأسود",
    color_platinum: "بلاتينيوم أورورا"
  },
  fr: {
    nav_showcase: "Vitrine",
    nav_features: "Spécifications",
    nav_customizer: "Atelier Bespoke",
    hero_eyebrow: "LE STANDARD ABSOLU",
    hero_title: "Série Monolith<br>Bespoke",
    hero_subtitle: "Forgé en titane aérospatial pur. Sublimé d'or 24 carats. Un chef-d'œuvre d'ingénierie et de perfection esthétique.",
    spec_gold_title: "Or:",
    spec_gold_val: "Galvanoplastie 24K",
    spec_glass_title: "Verre:",
    spec_glass_val: "Cristal de Saphir",
    spec_core_title: "Processeur:",
    spec_core_val: "Monolith A1 Personnalisé",
    btn_acquire: "Acquérir",
    btn_configure: "Configurer le Modèle",
    canvas_instruction: "Survolez pour pivoter et refléter la lumière",
    features_eyebrow: "FAÇONNÉ AVEC RIGUEUR",
    features_title: "Matières Premières d'Exception",
    feat_titanium_title: "Châssis en Titane Grade 5",
    feat_titanium_desc: "Conçu à partir du même alliage de titane ultraléger et résistant que celui des navettes spatiales. Brossé satiné à la main.",
    feat_gold_title: "Finitions en Or 24K",
    feat_gold_desc: "Dorure à l'or 24 carats sur mesure. Chaque millimètre est poli façon miroir par des artisans horlogers suisses.",
    feat_sapphire_title: "Écran Saphir Sur Mesure",
    feat_sapphire_desc: "Une couche d'écran en saphir synthétique continu, offrant une immunité totale aux rayures et une clarté optique inégalée.",
    products_eyebrow: "DESIGNS EXCLUSIFS",
    products_title: "Choisissez Votre Chef-d'œuvre",
    back_to_studio: "Retour à l'Atelier Bespoke",
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
    trust_2_desc: "Remis en main propre dans le monde entier avec assurance thermique et antichoc.",
    cart_title: "Votre Allocation",
    cart_empty: "Aucune création sélectionnée.",
    btn_return_studio: "Retourner à l'Atelier",
    cart_subtotal: "Total Estimé",
    cart_disclaimer: "Une livraison sécurisée et offerte est appliquée à tous les envois Monolith.",
    btn_checkout: "Passer à l'Acquisition",
    order_success_title: "Acquisition Autorisée",
    order_success_desc: "Votre demande a été transmise à notre équipe logistique globale. Un concierge de luxe vous contactera sous 15 minutes pour valider les détails de votre livraison.",
    receipt_id: "Référence de Commande",
    receipt_amount: "Montant Réglé",
    btn_done: "Fermer la Vitrine",
    footer_tagline: "Forger la rencontre entre l'excellence technique et la pureté structurelle.",
    foot_col_creations: "Créations",
    foot_gold: "Monolith en Or",
    foot_obsidian: "Titane Obsidian",
    foot_platinum: "Platine Customisé",
    foot_col_services: "Services Concierge",
    foot_delivery: "Transit Assuré",
    foot_support: "Support Privilégié",
    foot_bespoke: "Gravure Sur Mesure",
    foot_col_legal: "Société",
    foot_privacy: "Protocole de Confidentialité",
    foot_terms: "Conditions d'Acquisition",
    all_rights_reserved: "Tous droits réservés.",
    btn_add_to_cart: "Allouer la Création",
    color_gold: "Or Bespoke",
    color_obsidian: "Noir Obsidienne",
    color_platinum: "Platine Aurora"
  },
  ru: {
    nav_showcase: "Галерея",
    nav_features: "Спецификации",
    nav_customizer: "Ателье Bespoke",
    hero_eyebrow: "АБСОЛЮТНЫЙ СТАНДАРТ",
    hero_title: "Серия Monolith<br>Bespoke",
    hero_subtitle: "Выковано из чистого аэрокосмического титана. Украшено 24-каратным золотом. Торжество инженерной мысли и эстетического совершенства.",
    spec_gold_title: "Золото:",
    spec_gold_val: "24К Гальванопокрытие",
    spec_glass_title: "Стекло:",
    spec_glass_val: "Сапфировое Стекло",
    spec_core_title: "Процессор:",
    spec_core_val: "Индивидуальный Monolith A1",
    btn_acquire: "Приобрести",
    btn_configure: "Сконфигурировать",
    canvas_instruction: "Наведите для вращения и изменения световых отражений",
    features_eyebrow: "Исключительное Мастерство",
    features_title: "Благородные Сырьевые Материалы",
    feat_titanium_title: "Корпус из Титана Grade 5",
    feat_titanium_desc: "Разработано из того же сверхпрочного и легкого титанового сплава, который применяется в глубоком космосе. Сатинировано вручную.",
    feat_gold_title: "Детали из Золота 24К",
    feat_gold_desc: "Позолота выполнена электролитическим способом 24-каратным золотом. Каждый миллиметр отполирован швейцарскими часовщиками до зеркального блеска.",
    feat_sapphire_title: "Сапфировый Экран Bespoke",
    feat_sapphire_desc: "Непрерывный слой сапфирового кристалла обеспечивает абсолютную устойчивость к царапинам и беспрецедентную визуальную четкость.",
    products_eyebrow: "ЛИМИТИРОВАННЫЕ ВЕРСИИ",
    products_title: "Выберите Ваш Шедевр",
    back_to_studio: "Назад в Ателье Bespoke",
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
    label_country: "Страна/Регион",
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
    trust_2_desc: "Личная доставка в любую точку мира с тепловой и противоударной защитой.",
    cart_title: "Ваше Распределение",
    cart_empty: "Создания не выбраны.",
    btn_return_studio: "Вернуться в Ателье",
    cart_subtotal: "Оценочная Стоимость",
    cart_disclaimer: "Бесплатная застрахованная доставка распространяется на все отправления Monolith.",
    btn_checkout: "Перейти к Приобретению",
    order_success_title: "Приобретение Авторизовано",
    order_success_desc: "Ваш запрос направлен в службу глобальной логистики. VIP-консьерж свяжется с вами в течение 15 минут для подтверждения координат.",
    receipt_id: "Номер Заказа",
    receipt_amount: "Сумма Списания",
    btn_done: "Закрыть Галерею",
    footer_tagline: "Объединяя инженерное совершенство и структурную красоту линий.",
    foot_col_creations: "Создания",
    foot_gold: "Золотой Monolith",
    foot_obsidian: "Титановый Obsidian",
    foot_platinum: "Платиновый Custom",
    foot_col_services: "Услуги Консьержа",
    foot_delivery: "Застрахованный Транзит",
    foot_support: "Привилегированная Поддержка",
    foot_bespoke: "Гравировка Bespoke",
    foot_col_legal: "Корпорация",
    foot_privacy: "Протокол Конфиденциальности",
    foot_terms: "Условия Приобретения",
    all_rights_reserved: "Все права защищены.",
    btn_add_to_cart: "Выбрать Создание",
    color_gold: "Золото Bespoke",
    color_obsidian: "Черный Обсидиан",
    color_platinum: "Платина Aurora"
  }
};

// --- Product Data ---
const PRODUCTS = [
  {
    id: "gold-monolith",
    name: "Monolith Titanium Gold",
    price: 4500.00,
    desc: "A breathtaking showcase of Swiss electroplating craftsmanship. Solid titanium core wrapped in pure 24-karat gold.",
    specs: {
      chassis: "Grade 5 Aerospace Titanium",
      embellishment: "24K Gold Electroplating (15 μm)",
      glass: "Continuous Sapphire Screen",
      storage: "1 TB Secured Storage"
    },
    color: "gold"
  },
  {
    id: "obsidian-monolith",
    name: "Monolith Obsidian Black",
    price: 3800.00,
    desc: "Designed for absolute stealth and structural dominance. Stealth-coated carbon-titanium body with satin finish.",
    specs: {
      chassis: "Carbon-Silicon & Titanium",
      embellishment: "Amorphous Diamond-Like Carbon",
      glass: "Bespoke Sapphire Screen",
      storage: "512 GB Secured Storage"
    },
    color: "obsidian"
  },
  {
    id: "platinum-monolith",
    name: "Monolith Platinum Aurora",
    price: 4200.00,
    desc: "A stellar emission of light and structural purity. Plated with mirror-polished platinum and diamond cut buttons.",
    specs: {
      chassis: "Grade 5 Aerospace Titanium",
      embellishment: "Bespoke Platinum Cladding",
      glass: "Continuous Sapphire Screen",
      storage: "1 TB Secured Storage"
    },
    color: "platinum"
  }
];

// --- Global Application State ---
const state = {
  language: "en",
  theme: "dark",
  cart: [], // items: { product, quantity }
  view: "shop", // shop | checkout
  selectedPackaging: false,
  heroColor: "gold"
};

// --- Custom Mouse Cursor Setup ---
const setupCursor = () => {
  const cursor = document.getElementById("customCursor");
  const dot = document.getElementById("customCursorDot");
  
  if (!cursor || !dot) return;

  // Move custom cursor elements to match actual pointer coordinates
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });

  // Scale up cursor on interactive elements hover
  const hoverables = "a, button, select, input, .color-btn, label, [role='button']";
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

  // Scale down on mouseclick down
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

  // Read saved client theme preference
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
    // Redraw showcase canvas with new background values
    drawShowcase();
  });
};

// --- Dynamic i18n & RTL Layout Engine ---
const updateTranslations = () => {
  const dict = I18N[state.language] || I18N.en;
  
  // Update elements with data-t attributes
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.getAttribute("data-t");
    if (dict[key]) {
      // Keep SVG icons if elements contain them
      const svg = el.querySelector("svg");
      if (svg) {
        // Keep the svg and update adjacent text node if present
        const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = dict[key];
        } else {
          // If no separate text node, append translation
          el.innerHTML = svg.outerHTML + ` <span class="btn-text">${dict[key]}</span>`;
        }
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update structural layout direction and labels
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

  // Update Dynamic Products list so titles and descriptors match lang
  renderProductsGrid();
  renderCart();
  renderCheckoutSummary();
  
  // Update dynamic document title
  const siteTitle = state.language === "ar" 
    ? "مونوليث | هواتف ذكية فاخرة مخصصة وتكنولوجيا النخبة"
    : "MONOLITH | Bespoke Flagship Smartphones & Luxury Technology";
  document.title = siteTitle;

  // Let SEO script update structured metadata schemas
  if (window.updateSeoMetadata) {
    window.updateSeoMetadata(state.language, PRODUCTS);
  }
};

const setupLanguages = () => {
  const langMenu = document.getElementById("langMenu");
  if (!langMenu) return;

  // Read URL query parameter if present
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
      
      // Update browser URL query without reloading page
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
  void badge.offsetWidth; // Trigger reflow
  badge.classList.add("pop");
};

// Formats prices with dynamic formatting (German style with dots for thousands, commas for cents)
const formatCurrency = (val) => {
  let locale = "de-DE"; // EUR standards matching user currency rules
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

  // Calculate cart sum totals
  let totalItems = 0;
  let subtotal = 0;

  listWrapper.innerHTML = "";

  state.cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += item.product.price * item.quantity;

    // Resolve translations for smartphone metadata
    const translatedName = dict[item.product.id] || item.product.name;
    const translatedColor = dict[`color_${item.product.color}`] || item.product.color;

    const itemHTML = `
      <div class="cart-item">
        <div class="cart-item-img-wrap">
          <img src="" alt="${translatedName}" class="cart-item-img" data-device="${item.product.color}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-header">
            <span class="cart-item-name">${translatedName}</span>
            <span class="cart-item-price">${formatCurrency(item.product.price * item.quantity)}</span>
          </div>
          <div class="cart-item-meta">${translatedColor} | 1 TB</div>
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

  // Draw visual icons onto cart image templates
  drawItemThumbnails();

  // Update badge counter
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

// Draw mini smartphone illustrations dynamically into empty thumbnails for premium speed/avoiding placeholders
const drawItemThumbnails = () => {
  document.querySelectorAll(".cart-item-img, .product-card-img").forEach(img => {
    if (img.src && img.src !== window.location.href && img.src !== "") return;
    
    const color = img.getAttribute("data-device");
    if (!color) return;

    // Create a dynamic tiny dataUrl representing the luxury phone
    const canvas = document.createElement("canvas");
    canvas.width = 120;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");

    // Draw luxury frame
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 10;
    
    // Choose chassis colors
    let frameGrad = ctx.createLinearGradient(0, 0, 120, 200);
    if (color === "gold") {
      frameGrad.addColorStop(0, "#DFBA73");
      frameGrad.addColorStop(0.5, "#FFF3D1");
      frameGrad.addColorStop(1, "#C5A059");
    } else if (color === "platinum") {
      frameGrad.addColorStop(0, "#E5E5E5");
      frameGrad.addColorStop(0.5, "#FFFFFF");
      frameGrad.addColorStop(1, "#A2A2A2");
    } else {
      frameGrad.addColorStop(0, "#2c2c2e");
      frameGrad.addColorStop(1, "#070707");
    }

    ctx.fillStyle = frameGrad;
    ctx.beginPath();
    ctx.roundRect(20, 10, 80, 180, 14);
    ctx.fill();

    // Inner screen
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#0c0c0d";
    ctx.beginPath();
    ctx.roundRect(24, 14, 72, 172, 11);
    ctx.fill();

    // Camera details or highlights
    if (color === "gold") {
      ctx.strokeStyle = "rgba(223, 186, 115, 0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 22, 60, 156);
      
      // Triple camera lens highlights
      ctx.fillStyle = "rgba(223, 186, 115, 0.7)";
      ctx.beginPath();
      ctx.arc(42, 34, 5, 0, Math.PI * 2);
      ctx.arc(42, 48, 5, 0, Math.PI * 2);
      ctx.arc(54, 41, 5, 0, Math.PI * 2);
      ctx.fill();
    } else if (color === "platinum") {
      ctx.strokeStyle = "rgba(229, 229, 229, 0.3)";
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 22, 60, 156);
      
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(42, 34, 5, 0, Math.PI * 2);
      ctx.arc(42, 48, 5, 0, Math.PI * 2);
      ctx.arc(54, 41, 5, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 22, 60, 156);
    }

    img.src = canvas.toDataURL();
  });
};

// --- Dynamic Render of Products Grid ---
const renderProductsGrid = () => {
  const grid = document.getElementById("productsGridContainer");
  if (!grid) return;

  const dict = I18N[state.language] || I18N.en;
  grid.innerHTML = "";

  PRODUCTS.forEach(p => {
    // Lookup translated fields
    const labelBuy = dict.btn_add_to_cart || "Allocate Creation";
    const name = dict[p.id] || p.name;
    const desc = dict[`${p.id}_desc`] || p.desc;
    
    // Specifications translating keys
    const titleChassis = dict.feat_titanium_title || "Chassis";
    const titleGold = dict.feat_gold_title || "Embellishment";
    const titleSapphire = dict.feat_sapphire_title || "Screen Glass";
    
    const cardHTML = `
      <div class="product-card">
        <div class="product-image-wrap">
          <img src="" alt="${name}" class="product-card-img" data-device="${p.color}">
        </div>
        <div class="product-meta-header">
          <h3 class="product-title">${name}</h3>
          <span class="product-price">${formatCurrency(p.price)}</span>
        </div>
        <p class="product-desc">${desc}</p>
        
        <div class="product-specs-list">
          <div class="product-spec-line">
            <span class="label">${titleChassis.split(" ")[0]}</span>
            <span class="val">${p.specs.chassis}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${state.language === "ar" ? "الزينة" : "Plating"}</span>
            <span class="val">${p.specs.embellishment}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${titleSapphire.split(" ")[0]}</span>
            <span class="val">${p.specs.glass}</span>
          </div>
          <div class="product-spec-line">
            <span class="label">${state.language === "ar" ? "السعة" : "Storage"}</span>
            <span class="val">${p.specs.storage}</span>
          </div>
        </div>
        
        <div class="product-variants-row">
          <span class="variant-label">${state.language === "ar" ? "اللون المتاح" : "Obsidian Finish"}</span>
          <div class="canvas-color-selectors">
            <span class="color-btn active" style="background: ${
              p.color === 'gold' ? 'linear-gradient(135deg, #DFBA73 0%, #C5A059 100%)' :
              p.color === 'platinum' ? 'linear-gradient(135deg, #E5E5E5 0%, #A2A2A2 100%)' :
              'linear-gradient(135deg, #1C1C1E 0%, #070707 100%)'
            }; width: 14px; height: 14px; border:none; pointer-events:none;"></span>
          </div>
        </div>
        
        <div class="product-card-cta">
          <button class="btn btn-secondary btn-block btn-platinum" onclick="addToCart('${p.id}')">
            <span class="btn-text">${labelBuy}</span>
          </button>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML("beforeend", cardHTML);
  });

  drawItemThumbnails();
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
        drawShowcase(); // Re-trigger canvas
      }, 50);
    }, 600);
  } else {
    // Transitioning into checkout view
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

// --- Checkout View Renderer ---
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

// --- Form Formatting & Validations (Stripe Masking) ---
const setupCheckoutForm = () => {
  const form = document.getElementById("checkoutForm");
  const cardInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("cardExpiry");
  const cvcInput = document.getElementById("cardCvc");
  const cardIndicator = document.getElementById("cardBrandIndicator");
  const packagingToggle = document.getElementById("premiumPackagingToggle");
  const paymentErrors = document.getElementById("paymentErrors");

  if (!form || !cardInput || !expiryInput || !cvcInput) return;

  // Premium packaging updates prices dynamically
  if (packagingToggle) {
    packagingToggle.addEventListener("change", (e) => {
      state.selectedPackaging = e.target.checked;
      renderCheckoutSummary();
    });
  }

  // Credit Card spacing masking: "XXXX XXXX XXXX XXXX"
  cardInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    // Cap at 16 digits
    value = value.substring(0, 16);
    
    // Add spaces every 4 characters
    let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted;

    // Realtime card brand indicator highlighter
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

  // CC Expiry format: MM/YY
  expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length > 2) {
      e.target.value = `${value.substring(0, 2)}/${value.substring(2)}`;
    } else {
      e.target.value = value;
    }
  });

  // Limit CVV
  cvcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").substring(0, 4);
  });

  // Stripe validation submission simulation
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    paymentErrors.textContent = "";

    let hasErrors = false;

    // Check custom fields
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

    // Verify email validity
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

    // Verify card numbers length
    const rawCard = cardInput.value.replace(/\s/g, "");
    if (rawCard.length < 16) {
      paymentErrors.textContent = state.language === "ar"
        ? "رقم بطاقة غير صالح. يرجى التحقق وإعادة المحاولة."
        : "Invalid transaction card credentials. Please verify details.";
      hasErrors = true;
    }

    if (hasErrors) return;

    // Mock Stripe Authorization
    const submitBtn = document.getElementById("paySubmitBtn");
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="btn-text">${state.language === "ar" ? "قيد التفويض البنكي..." : "Authorizing Transaction..."}</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      // Calculate receipt amounts
      let sub = 0;
      state.cart.forEach(item => sub += item.product.price * item.quantity);
      if (state.selectedPackaging) sub += 150.00;

      // Show receipt modal
      const referenceId = `#MN-${Math.floor(10000 + Math.random() * 90000)}`;
      document.getElementById("receiptId").textContent = referenceId;
      document.getElementById("receiptAmount").textContent = formatCurrency(sub);
      
      const backdrop = document.getElementById("successModalBackdrop");
      if (backdrop) backdrop.classList.add("active");

      // Reset cart state
      state.cart = [];
      renderCart();
      form.reset();
    }, 2000);
  });

  // Modal Close trigger
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
    
    // Map coordinate differences to angle matrices
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    targetRotationY = (dx / rect.width) * 0.8; // Rotate left/right
    targetTiltX = (dy / rect.height) * 0.4;    // Tilt up/down
    
    // Ambient mouse positions for glow highlights
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  canvasWrapper.addEventListener("mouseleave", () => {
    targetRotationY = 0;
    targetTiltX = 0.1;
  });

  // Hero customizer color selections
  const heroColorSelectors = document.querySelectorAll("#heroColorSelector button");
  heroColorSelectors.forEach(btn => {
    btn.addEventListener("click", (e) => {
      heroColorSelectors.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const color = btn.getAttribute("data-color");
      state.heroColor = color;
      
      // Update background glowing mesh to align with theme color selection
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

  // Start 3D drawing loop
  drawShowcase();
};

const drawShowcase = () => {
  if (!canvas || !ctx) return;

  // Request next frame recursively
  requestAnimationFrame(drawShowcase);

  // Smooth lerping transition towards targets
  phoneRotationY += (targetRotationY - phoneRotationY) * 0.08;
  phoneTiltX += (targetTiltX - phoneTiltX) * 0.08;

  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Draw phone mockup on canvas using 2.5D math
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.scale(1.2, 1.2);

  // Core coordinates of phone
  const phoneW = 160;
  const phoneH = 310;
  const cornerRadius = 26;

  // Rotate coordinates simulated by narrowing scale width
  const cosRot = Math.cos(phoneRotationY);
  const sinRot = Math.sin(phoneRotationY);

  ctx.scale(cosRot, 1 - Math.abs(sinRot) * 0.04);
  ctx.rotate(phoneTiltX * 0.1);

  // Define device chassis gradients
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
    // Obsidian Dark
    frameGrad.addColorStop(0, "#2c2c2e");
    frameGrad.addColorStop(0.5, "#1c1c1e");
    frameGrad.addColorStop(1, "#070708");

    sideBevelGrad.addColorStop(0, "#050505");
    sideBevelGrad.addColorStop(0.5, "#3a3a3c");
    sideBevelGrad.addColorStop(1, "#050505");
    
    highlightColor = "rgba(255, 255, 255, 0.15)";
  }

  // 1. Draw titanium outer shadow & bevel border
  ctx.shadowColor = state.theme === "dark" ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.15)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 15;

  ctx.fillStyle = sideBevelGrad;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 - 2, -phoneH/2 - 2, phoneW + 4, phoneH + 4, cornerRadius + 2);
  ctx.fill();

  // 2. Main chassis body
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  
  ctx.fillStyle = frameGrad;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
  ctx.fill();

  // 3. Inner obsidian screen screen
  ctx.fillStyle = "#0c0c0d";
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 + 6, -phoneH/2 + 6, phoneW - 12, phoneH - 12, cornerRadius - 5);
  ctx.fill();

  // 4. Draw screen content reflection meshes (Simulates luxury screen glass glare)
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(-phoneW/2 + 6, -phoneH/2 + 6, phoneW - 12, phoneH - 12, cornerRadius - 5);
  ctx.clip();

  // Dynamic light reflection beam linked to mouse Y rotation
  let reflectX = phoneRotationY * 180;
  let reflectionGrad = ctx.createLinearGradient(-phoneW + reflectX, -phoneH, phoneW + reflectX, phoneH);
  reflectionGrad.addColorStop(0, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(0.48, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(0.5, highlightColor);
  reflectionGrad.addColorStop(0.52, "rgba(255,255,255,0)");
  reflectionGrad.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = reflectionGrad;
  ctx.fillRect(-phoneW, -phoneH, phoneW * 2, phoneH * 2);

  // Draw generic screen graphics (Luxury brand Monolith title embedded inside display)
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.font = "300 12px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("M O N O L I T H", 0, 100);

  // Dynamic mesh wallpaper inside display
  ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = -100; i < 100; i += 20) {
    ctx.moveTo(i - phoneRotationY * 10, -150);
    ctx.lineTo(i + phoneRotationY * 30, 150);
  }
  ctx.stroke();

  ctx.restore();

  // 5. Draw triple camera module details on metallic back plate
  // (We render this on screen overlay if rotation Y goes negative, showing bezel simulation)
  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.roundRect(phoneW/2 - 45, -phoneH/2 + 15, 30, 60, 8);
  ctx.fill();

  // Draw camera lenses
  ctx.fillStyle = "#111112";
  ctx.beginPath();
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 30, 5, 0, Math.PI * 2);
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 45, 5, 0, Math.PI * 2);
  ctx.arc(phoneW/2 - 30, -phoneH/2 + 60, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = highlightColor;
  ctx.lineWidth = 1;
  ctx.stroke();

  // 6. Draw dynamic edge reflection glare line
  ctx.strokeStyle = highlightColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(-phoneW/2, -phoneH/2, phoneW, phoneH, cornerRadius);
  ctx.stroke();

  ctx.restore();
};

// --- Initialization triggers ---
window.addEventListener("DOMContentLoaded", () => {
  setupCursor();
  setupTheme();
  setupLanguages();
  
  // Connect navigation events
  const heroBuyBtn = document.getElementById("heroBuyBtn");
  if (heroBuyBtn) {
    heroBuyBtn.addEventListener("click", () => {
      // Add default flagship creation to cart
      addToCart("gold-monolith");
    });
  }

  // Slide-out shopping cart triggers
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

  // Build items and trigger canvas
  renderProductsGrid();
  renderCart();
  setupCheckoutForm();
  setupShowcaseCanvas();
});
