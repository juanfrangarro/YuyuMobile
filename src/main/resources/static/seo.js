/**
 * YUYU MOBILE E-commerce SEO Metadata Module
 * Dynamically updates JSON-LD Schemas based on active language settings.
 */

window.updateSeoMetadata = (lang, products) => {
  const isAr = lang === "ar";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isRu = lang === "ru";

  // Translate brand description & localized details
  let orgName = "YUYU MOBILE";
  let orgDesc = "Certified pre-owned luxury smartphones and premium mobile restoration concierge.";
  if (isAr) {
    orgName = "يويو موبايل";
    orgDesc = "هواتف ذكية فاخرة مستعملة ومعتمدة وخدمات صيانة وترميم الهواتف الفاخرة النخبوية.";
  } else if (isEs) {
    orgName = "YUYU MOBILE";
    orgDesc = "Teléfonos inteligentes de lujo seminuevos certificados y concierge de restauración móvil premium.";
  } else if (isFr) {
    orgName = "YUYU MOBILE";
    orgDesc = "Smartphones de luxe d'occasion certifiés et service conciergerie de restauration mobile premium.";
  } else if (isRu) {
    orgName = "YUYU MOBILE";
    orgDesc = "Сертифицированные б/у смартфоны класса люкс и премиальный консьерж-сервис реставрации техники.";
  }

  // 1. Update Organization Schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": orgName,
    "description": orgDesc,
    "url": window.location.origin + window.location.pathname,
    "logo": window.location.origin + window.location.pathname + "assets/logo.png",
    "sameAs": [
      "https://www.instagram.com/yuyumobile.luxury",
      "https://twitter.com/yuyumobile"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-20-7946-0192",
      "contactType": isAr ? "خدمة العملاء الخاصة" : "luxury concierge sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Spanish", "Arabic", "Russian", "French"]
    }
  };

  const orgScript = document.getElementById("jsonld-organization");
  if (orgScript) {
    orgScript.textContent = JSON.stringify(orgSchema, null, 2);
  }

  // 2. Update Breadcrumbs Schema
  let breadcrumbHome = "Home";
  let breadcrumbShowcase = "Showcase";
  if (isAr) {
    breadcrumbHome = "الرئيسية";
    breadcrumbShowcase = "المعروضات";
  } else if (isEs) {
    breadcrumbHome = "Inicio";
    breadcrumbShowcase = "Presentación";
  } else if (isFr) {
    breadcrumbHome = "Accueil";
    breadcrumbShowcase = "Vitrine";
  } else if (isRu) {
    breadcrumbHome = "Главная";
    breadcrumbShowcase = "Галерея";
  }

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": breadcrumbHome,
        "item": window.location.origin + window.location.pathname
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": breadcrumbShowcase,
        "item": window.location.origin + window.location.pathname + "#showcase"
      }
    ]
  };

  const breadcrumbsScript = document.getElementById("jsonld-breadcrumbs");
  if (breadcrumbsScript) {
    breadcrumbsScript.textContent = JSON.stringify(breadcrumbsSchema, null, 2);
  }

  // 3. Update Product Schema (using primary flagship product data)
  const defaultProduct = products[0]; // Apple iPhone 15 Pro Max (Custom Gold)
  if (defaultProduct) {
    let prodName = defaultProduct.name;
    let prodDesc = defaultProduct.desc;
    if (isAr) {
      prodName = "آيفون 15 برو ماكس الذهبي المعتمد";
      prodDesc = "تحفة فنية مستعملة ومعتمدة كلياً مطلية بذهب عيار 24 قيراط ومصنوعة من التيتانيوم الصلب الفاخر.";
    } else if (isEs) {
      prodName = "Apple iPhone 15 Pro Max (Oro Personalizado)";
      prodDesc = "Smartphone de lujo seminuevo certificado con cuerpo de titanio y baño de oro de 24 quilates.";
    } else if (isFr) {
      prodName = "Apple iPhone 15 Pro Max (Or Custom)";
      prodDesc = "Smartphone d'occasion certifié de luxe avec châssis en titane et placage en or 24 carats.";
    } else if (isRu) {
      prodName = "Apple iPhone 15 Pro Max (Кастомное Золото)";
      prodDesc = "Сертифицированный б/у люксовый смартфон в корпусе из титана с гальваническим покрытием золотом 24К.";
    }

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": prodName,
      "image": window.location.origin + window.location.pathname + "assets/gold-monolith.jpg",
      "description": prodDesc,
      "sku": "YY-IP15PM-GOLD",
      "mpn": "YY-IP15PM-GOLD",
      "brand": {
        "@type": "Brand",
        "name": "YUYU MOBILE"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.origin + window.location.pathname + "#customizer",
        "priceCurrency": "EUR",
        "price": defaultProduct.price.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/RefurbishedCondition"
      }
    };

    const productScript = document.getElementById("jsonld-product");
    if (productScript) {
      productScript.textContent = JSON.stringify(productSchema, null, 2);
    }
  }
};
