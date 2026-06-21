/**
 * MONOLITH E-commerce SEO Metadata Module
 * Dynamically updates JSON-LD Schemas based on active language settings.
 */

window.updateSeoMetadata = (lang, products) => {
  const isAr = lang === "ar";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isRu = lang === "ru";

  // Translate brand description & localized details
  let orgName = "MONOLITH Bespoke";
  let orgDesc = "Bespoke flagship smartphone manufacturer and custom luxury technology studio.";
  if (isAr) {
    orgName = "دار مونوليث للتصميم المخصص";
    orgDesc = "دار الهواتف الذكية الفاخرة والمخصصة وتكنولوجيا النخبة الاستثنائية.";
  } else if (isEs) {
    orgName = "MONOLITH Bespoke Inc.";
    orgDesc = "Fabricante de teléfonos inteligentes insignia personalizados y estudio de tecnología de lujo.";
  } else if (isFr) {
    orgName = "MONOLITH Bespoke SARL";
    orgDesc = "Fabricant de smartphones d'exception sur mesure et studio de technologie de luxe.";
  } else if (isRu) {
    orgName = "MONOLITH Bespoke";
    orgDesc = "Производитель эксклюзивных флагманских смартфонов и кастомной техники класса люкс.";
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
      "https://www.instagram.com/monolith.bespoke",
      "https://twitter.com/monolithbespoke"
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
  const defaultProduct = products[0]; // Monolith Titanium Gold
  if (defaultProduct) {
    let prodName = defaultProduct.name;
    let prodDesc = defaultProduct.desc;
    if (isAr) {
      prodName = "مونوليث الذهبي بيسبوك";
      prodDesc = "تحفة فنية فريدة من نوعها مطلية بذهب عيار 24 قيراط ومصنوعة من التيتانيوم الصلب الفاخر.";
    } else if (isEs) {
      prodName = "Monolith de Oro Bespoke";
      prodDesc = "Una impresionante obra de arte personalizada con baño de oro de 24 quilates y cuerpo de titanio macizo.";
    } else if (isFr) {
      prodName = "Monolith Or Bespoke";
      prodDesc = "Une œuvre d'art exceptionnelle plaquée or 24 carats sur châssis en titane massif.";
    } else if (isRu) {
      prodName = "Золотой Monolith Bespoke";
      prodDesc = "Потрясающий шедевр ручной работы с гальваническим покрытием из золота 24К на титановом каркасе.";
    }

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": prodName,
      "image": window.location.origin + window.location.pathname + "assets/gold-monolith.jpg",
      "description": prodDesc,
      "sku": "MN-TIT-GOLD-01",
      "mpn": "MN-TIT-GOLD-01",
      "brand": {
        "@type": "Brand",
        "name": "MONOLITH"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.origin + window.location.pathname + "#customizer",
        "priceCurrency": "EUR",
        "price": defaultProduct.price.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    };

    const productScript = document.getElementById("jsonld-product");
    if (productScript) {
      productScript.textContent = JSON.stringify(productSchema, null, 2);
    }
  }
};
