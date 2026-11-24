"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BookText,
  Check,
  ChevronDown,
  Flame,
  Flower2,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  ScrollText,
  Sun,
  X,
  Youtube,
} from "lucide-react";

type Language = "hi" | "en";

const copy = {
  hi: {
    topLine: "॥ श्री हरि कृपा सनातन सेवा ट्रस्ट ॥",
    brand: "श्री हरि कृपा सनातन सेवा ट्रस्ट",
    brandSub: "धर्म • भक्ति • ज्ञान • सेवा • संस्कार",
    nav: ["मुखपृष्ठ", "हमारे बारे में", "आचार्य परिचय", "कथा एवं प्रवचन", "यज्ञ एवं अनुष्ठान", "योग एवं साधना", "गैलरी", "संपर्क"],
    heroKicker: "धर्म  ·  भक्ति  ·  ज्ञान  ·  सेवा",
    heroTitle: "श्री हरि कृपा\nसनातन सेवा ट्रस्ट",
    heroLead: "धर्म, भक्ति, ज्ञान, योग एवं सनातन संस्कृति की सेवा में समर्पित।",
    heroCta: "धार्मिक आयोजनों हेतु संपर्क करें",
    explore: "ट्रस्ट के बारे में जानें",
    stat1: "वर्षों का अनुभव",
    stat2: "आयु से कथा-सेवा का आरम्भ",
    stat3: "ग्रंथों का लेखन, संकलन एवं संपादन",
    sectionAbout: "हमारे बारे में",
    aboutTitle: "सनातन मूल्यों को\nसमाज से जोड़ने का प्रयास",
    aboutLead: "श्री हरि कृपा सनातन सेवा ट्रस्ट भारतीय संस्कृति, वैदिक परम्परा, भक्ति, योग, ज्ञान और संस्कारों के माध्यम से समाज को धर्म एवं सदाचार के संदेश से जोड़ने का एक विनम्र प्रयास है।",
    aboutBody: "ट्रस्ट कथा, यज्ञ, साधना, शास्त्र-अध्ययन और सांस्कृतिक आयोजनों के माध्यम से परिवारों तथा नई पीढ़ी को अपनी आध्यात्मिक विरासत से जोड़ने के अवसर उपलब्ध कराता है।",
    aboutLink: "आचार्य परिचय पढ़ें",
    aboutNote: "धर्म • भक्ति • ज्ञान • सेवा • संस्कार",
    sectionSeva: "धार्मिक सेवाएँ",
    servicesTitle: "श्रद्धा से जुड़ें,\nसेवा से जीवन सँवारें",
    servicesLead: "कथा, यज्ञ, अनुष्ठान, योग और सांस्कृतिक सेवाएँ — व्यक्तिगत, पारिवारिक एवं सामूहिक आयोजनों के लिए।",
    serviceKatha: "श्रीमद्भागवत कथा",
    serviceKathaDesc: "भक्ति, ज्ञान और संस्कारों से जुड़ी संगीतमय श्रीमद्भागवत कथा सेवा।",
    serviceYagya: "श्रीराम कथा एवं प्रवचन",
    serviceYagyaDesc: "श्रीराम कथा, शिवमहापुराण, देवीभागवत एवं हनुमंत कथा के आयोजन।",
    serviceYoga: "वैदिक यज्ञ एवं अनुष्ठान",
    serviceYogaDesc: "रुद्रयज्ञ, विष्णुयज्ञ, लक्ष्मी-नारायण यज्ञ, गायत्री, शतचण्डी एवं नवग्रह शान्ति यज्ञ।",
    serviceStudy: "रुद्राभिषेक एवं जप",
    serviceStudyDesc: "रुद्राभिषेक, महामृत्युंजय अनुष्ठान, ग्रह शान्ति जप और वैदिक विधि-विधान।",
    serviceWriting: "योग एवं साधना शिविर",
    serviceWritingDesc: "योग-साधना, ध्यान, स्वाध्याय तथा योग एवं दर्शन का अध्यापन।",
    serviceCulture: "दर्शन एवं शास्त्र-अध्ययन",
    serviceCultureDesc: "संस्कृत, भारतीय दर्शन, योग और शास्त्रीय विषयों का अध्ययन-अध्यापन।",
    sectionPath: "आचार्य परिचय",
    pathTitle: "आचार्य डॉ. इन्दु प्रकाश जी महाराज",
    pathLead: "एक ऐसी यात्रा, जिसमें जिज्ञासा ने दिशा पाई और साधना ने सेवा का रूप लिया।",
    milestones: [
      { year: "1984", title: "जन्म एवं पारिवारिक संस्कार", text: "01 मार्च 1984 को ग्राम निठीपट्टी (मंशाराम का पूरा), जनपद प्रतापगढ़, उत्तर प्रदेश में जन्म।" },
      { year: "1996", title: "कथा-यात्रा का आरम्भ", text: "12 वर्ष की आयु में तीर्थराज प्रयाग के माघ मेले में स्वामी परिपूर्णानन्द जी महाराज के सान्निध्य में प्रथम श्रीरामकथा गायन।" },
      { year: "1998", title: "आध्यात्मिक खोज", text: "19 मार्च 1998 को 14 वर्ष की आयु में वैराग्य-भाव से काशी की ओर प्रस्थान; जीवन, ईश्वर और साधना के प्रश्नों की खोज।" },
      { year: "1999", title: "योग-साधना की दीक्षा", text: "24 मई 1999 को महर्षि सदाफलदेव जी महाराज द्वारा प्रतिपादित योग-साधना की दीक्षा प्राप्त हुई।" },
      { year: "2007", title: "युवा योग वैज्ञानिक", text: "योग विषय पर शोधपत्र के संदर्भ में काशी हिन्दू विश्वविद्यालय द्वारा ‘युवा योग वैज्ञानिक’ की उपाधि।" },
      { year: "2026", title: "राष्ट्रीय संत की उपाधि", text: "अरवल, बिहार में श्री लक्ष्मी नारायण महायज्ञ एवं श्रीरामकथा के उपरान्त ‘राष्ट्रीय संत’ की उपाधि प्रदान की गई।" },
    ],
    sectionLearning: "योग एवं आध्यात्मिक शिक्षा",
    learningTitle: "शास्त्र-अध्ययन के साथ\nशिक्षा की निरन्तर साधना",
    learningLead: "आध्यात्मिक साधना के साथ शास्त्रों को व्यवस्थित रूप से समझने और विद्यार्थियों तक सरलता से पहुँचाने का प्रयास।",
    edu1: "शास्त्री एवं आचार्य",
    edu1Desc: "सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी — ज्योतिष एवं तुलनात्मक दर्शन में शास्त्री; तुलनात्मक दर्शन में आचार्य।",
    edu2: "विद्यावारिधि (पी-एच.डी.)",
    edu2Desc: "मगध विश्वविद्यालय, बोधगया से दर्शन विषय में विद्यावारिधि की उपाधि।",
    edu3: "अन्य उच्च शिक्षा",
    edu3Desc: "संस्कृत में बी.एड. तथा योग एवं पत्रकारिता में स्नातकोत्तर शिक्षा।",
    teaching: "अध्यापन सेवाएँ",
    teachingDesc: "काशी हिन्दू विश्वविद्यालय (BHU), वाराणसी में अतिथि योग अनुदेशक; सम्पूर्णानन्द संस्कृत विश्वविद्यालय के ऑनलाइन प्रशिक्षण केन्द्र में योग एवं दर्शन के अतिथि व्याख्याता; खेल विश्वविद्यालय, राजगीर में विजिटिंग योगाचार्य।",
    recognition: "सम्मान एवं उपलब्धियाँ",
    recognitionLead: "योग, दर्शन, अध्यात्म, शिक्षा एवं धार्मिक सेवा के क्षेत्र में प्राप्त प्रमुख सम्मान।",
    awards: ["अध्यात्म रत्न", "योग रत्न", "योग भूषण", "योग श्री", "महर्षि पतंजलि योग रत्न अवार्ड"],
    global: "वैश्विक आध्यात्मिक संवाद",
    globalLead: "भारतीय योग, दर्शन, कथा और आध्यात्मिक परम्परा से जुड़े कार्यक्रमों में विदेशों में भी सहभागिता।",
    countries: "सिंगापुर · मलेशिया · इंडोनेशिया · नेपाल",
    sectionGallery: "कथा एवं आयोजन झलकियाँ",
    galleryTitle: "भक्ति के कुछ स्मरणीय क्षण",
    galleryLead: "कथा-सेवा और धार्मिक-सांस्कृतिक आयोजनों की झलकियाँ।",
    galleryCaptions: ["कथा एवं भक्ति-सेवा", "बाल संस्कार एवं सांस्कृतिक आयोजन", "धार्मिक यात्रा एवं उत्सव", "सामूहिक आध्यात्मिक आयोजन"],
    quote: "कथा से श्रोता केवल ज्ञान लेकर न लौटे, बल्कि अपने भीतर भक्ति का भाव, जीवन में संस्कार की प्रेरणा और अपनी परम्परा से जुड़ाव का अनुभव लेकर जाए।",
    quoteBy: "आचार्य डॉ. इन्दु प्रकाश जी महाराज",
    sectionContact: "संपर्क एवं पूछताछ",
    contactTitle: "अपने शुभ अवसर को\nभक्ति और संस्कार से जोड़ें",
    contactLead: "श्रीमद्भागवत कथा, श्रीरामकथा, अन्य पुराण-कथा अथवा वैदिक यज्ञानुष्ठान के आयोजन, जानकारी एवं परामर्श के लिए संपर्क करें।",
    contactPhone: "संपर्क सूत्र",
    contactEmail: "ई-मेल",
    contactLocation: "स्थान / सेवा क्षेत्र",
    locationValue: "कथा एवं सेवा क्षेत्र",
    formTitle: "आयोजन संबंधी पूछताछ",
    formName: "आपका नाम",
    formNamePlaceholder: "अपना नाम लिखें",
    formEvent: "आयोजन का प्रकार",
    formEventPlaceholder: "कथा, यज्ञ, योग शिविर आदि",
    formMessage: "संदेश",
    formMessagePlaceholder: "तिथि, स्थान या अपनी आवश्यकता बताएँ",
    formSubmit: "WhatsApp पर पूछताछ भेजें",
    formHint: "यह बटन आपके संदेश को WhatsApp में तैयार करेगा।",
    footerLine: "धर्म • भक्ति • ज्ञान • सेवा • संस्कार",
    footerRights: "सर्वाधिकार सुरक्षित।",
    channel: "आध्यात्म प्रवाह YouTube पर",
    facebook: "Facebook पर Acharya Indu Prakash Mishra",
    language: "English",
    close: "बंद करें",
  },
  en: {
    topLine: "॥ Shree Hari Kripa Sanatan Seva Trust ॥",
    brand: "Shree Hari Kripa Sanatan Seva Trust",
    brandSub: "Dharma • Devotion • Wisdom • Service",
    nav: ["Home", "About the Trust", "Acharya", "Katha & Discourses", "Yajna & Rituals", "Yoga & Sadhana", "Gallery", "Contact"],
    heroKicker: "Dharma  ·  Devotion  ·  Wisdom  ·  Service",
    heroTitle: "Shree Hari Kripa\nSanatan Seva Trust",
    heroLead: "Dedicated to the service of Dharma, devotion, knowledge, Yoga and Sanatan culture.",
    heroCta: "Enquire about religious events",
    explore: "Discover the Trust",
    stat1: "Years of experience",
    stat2: "Age when Katha seva began",
    stat3: "Books authored, compiled & edited",
    sectionAbout: "About the Trust",
    aboutTitle: "Connecting Sanatan values\nwith society",
    aboutLead: "Shree Hari Kripa Sanatan Seva Trust is a humble effort to connect society with Dharma and good conduct through Indian culture, Vedic tradition, devotion, Yoga, knowledge and values.",
    aboutBody: "The Trust creates opportunities for families and younger generations to engage with their spiritual heritage through Katha, Yajna, Sadhana, scriptural study and cultural gatherings.",
    aboutLink: "Meet the Acharya",
    aboutNote: "Dharma • Devotion • Wisdom • Service • Values",
    sectionSeva: "Religious Services",
    servicesTitle: "Connect with faith,\nshape life through service",
    servicesLead: "Katha, Yajna, rituals, Yoga and cultural services for personal, family and community occasions.",
    serviceKatha: "Shrimad Bhagwat Katha",
    serviceKathaDesc: "Musical Shrimad Bhagwat Katha seva rooted in devotion, wisdom and values.",
    serviceYagya: "Shri Ram Katha & Discourses",
    serviceYagyaDesc: "Shri Ram Katha, Shiva Mahapuran, Devi Bhagwat and Hanumant Katha programmes.",
    serviceYoga: "Vedic Yajna & Rituals",
    serviceYogaDesc: "Rudra, Vishnu, Lakshmi-Narayan, Gayatri, Shatachandi and Navgraha Shanti Yajnas.",
    serviceStudy: "Rudrabhishek & Japa",
    serviceStudyDesc: "Rudrabhishek, Mahamrityunjaya Anushthan, Graha Shanti Japa and Vedic rituals.",
    serviceWriting: "Yoga & Sadhana Camps",
    serviceWritingDesc: "Yoga practice, meditation, self-study, and teaching in Yoga and philosophy.",
    serviceCulture: "Philosophy & Scriptural Study",
    serviceCultureDesc: "Study and teaching of Sanskrit, Indian philosophy, Yoga and classical knowledge.",
    sectionPath: "About the Acharya",
    pathTitle: "Acharya Dr. Indu Prakash Ji Maharaj",
    pathLead: "A journey in which curiosity found direction, and spiritual practice grew into service.",
    milestones: [
      { year: "1984", title: "Birth & family values", text: "Born on 1 March 1984 in Nithipatti (Mansharam Ka Pura), Pratapgarh district, Uttar Pradesh." },
      { year: "1996", title: "Beginning of Katha seva", text: "At age 12, gave his first rendering of Shri Ram Katha at the Magh Mela in Prayagraj, in the presence of Swami Paripoornanand Ji Maharaj." },
      { year: "1998", title: "A search for spiritual meaning", text: "On 19 March 1998, at age 14, set out for Kashi with a spirit of renunciation, seeking answers about life, the Divine and spiritual practice." },
      { year: "1999", title: "Initiation into Yoga sadhana", text: "Received initiation into the Yoga sadhana propounded by Maharshi Sadafaldev Ji Maharaj on 24 May 1999." },
      { year: "2007", title: "Young Yoga Scientist", text: "Conferred the title ‘Young Yoga Scientist’ by Banaras Hindu University in connection with a research paper on Yoga." },
      { year: "2026", title: "Title of Rashtriya Sant", text: "Conferred the title ‘National Saint’ following Shri Lakshmi Narayan Mahayajna and Shri Ram Katha in Arwal, Bihar." },
    ],
    sectionLearning: "Yoga & Spiritual Education",
    learningTitle: "A lifelong commitment to\nlearning and sharing knowledge",
    learningLead: "Alongside spiritual practice, a commitment to systematic study of the scriptures and making knowledge accessible to learners.",
    edu1: "Shastri & Acharya",
    edu1Desc: "Sampurnanand Sanskrit University, Varanasi — Shastri in Jyotish and Comparative Philosophy; Acharya in Comparative Philosophy.",
    edu2: "Vidyavaridhi (Ph.D.)",
    edu2Desc: "Doctoral degree in Philosophy from Magadh University, Bodh Gaya.",
    edu3: "Further Qualifications",
    edu3Desc: "B.Ed. in Sanskrit and postgraduate education in Yoga and Journalism.",
    teaching: "Teaching Engagements",
    teachingDesc: "Guest Yoga Instructor at Banaras Hindu University (BHU), Varanasi; Guest Lecturer in Yoga and Philosophy at the online training centre of Sampurnanand Sanskrit University; Visiting Yoga Acharya at Sports University, Rajgir.",
    recognition: "Recognitions & Honours",
    recognitionLead: "Selected recognitions in the fields of Yoga, philosophy, spirituality, education and religious service.",
    awards: ["Adhyatma Ratna", "Yoga Ratna", "Yoga Bhushan", "Yoga Shri", "Maharshi Patanjali Yoga Ratna Award"],
    global: "A global spiritual dialogue",
    globalLead: "Participation in international programmes connected with Indian Yoga, philosophy, Katha and spiritual traditions.",
    countries: "Singapore · Malaysia · Indonesia · Nepal",
    sectionGallery: "Katha & Event Moments",
    galleryTitle: "A few moments of devotion",
    galleryLead: "Glimpses from Katha seva and religious-cultural gatherings.",
    galleryCaptions: ["Katha and devotional service", "Cultural programmes for young learners", "Religious journeys and celebrations", "Community spiritual gatherings"],
    quote: "May listeners leave a Katha not only with knowledge, but with a feeling of devotion, inspiration for values in daily life, and a deeper connection with their tradition.",
    quoteBy: "Acharya Dr. Indu Prakash Ji Maharaj",
    sectionContact: "Contact & Enquiry",
    contactTitle: "Make your auspicious occasion\na celebration of devotion and values",
    contactLead: "Contact us for information, guidance and arrangements for Shrimad Bhagwat Katha, Shri Ram Katha, other Puranic discourses or Vedic Yajna ceremonies.",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactLocation: "Location / Service area",
    locationValue: "Katha and service locations",
    formTitle: "Event enquiry",
    formName: "Your name",
    formNamePlaceholder: "Enter your name",
    formEvent: "Type of event",
    formEventPlaceholder: "Katha, Yajna, Yoga camp, etc.",
    formMessage: "Message",
    formMessagePlaceholder: "Share your dates, location or requirements",
    formSubmit: "Send enquiry on WhatsApp",
    formHint: "This button prepares your message in WhatsApp.",
    footerLine: "Dharma • Devotion • Wisdom • Service • Values",
    footerRights: "All rights reserved.",
    channel: "Adhyatm Pravah on YouTube",
    facebook: "Acharya Indu Prakash Mishra on Facebook",
    language: "हिन्दी",
    close: "Close",
  },
} as const;

const phonePrimary = "9651804501";
const phoneSecondary = "9415928813";
const email = "acharyainduprakash1984@gmail.com";
const youtube = "https://www.youtube.com/@adhyatmpravah7346";
const facebook = "https://www.facebook.com/search/top?q=Acharya%20Indu%20Prakash%20Mishra";

const serviceIcons = [BookOpen, Flame, Flower2, GraduationCap, ScrollText, Music2];
const galleryImages = [
  "/images/katha-seva.webp",
  "/images/bhakti-utsav.webp",
  "/images/dharmik-yatra.webp",
  "/images/samaroh.webp",
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("hi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [formName, setFormName] = useState("");
  const [formEvent, setFormEvent] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const navIds = ["home", "about", "journey", "seva", "seva", "learning", "gallery", "contact"];
  const services = [
    { icon: serviceIcons[0], title: t.serviceKatha, desc: t.serviceKathaDesc },
    { icon: serviceIcons[1], title: t.serviceYagya, desc: t.serviceYagyaDesc },
    { icon: serviceIcons[2], title: t.serviceYoga, desc: t.serviceYogaDesc },
    { icon: serviceIcons[3], title: t.serviceStudy, desc: t.serviceStudyDesc },
    { icon: serviceIcons[4], title: t.serviceWriting, desc: t.serviceWritingDesc },
    { icon: serviceIcons[5], title: t.serviceCulture, desc: t.serviceCultureDesc },
  ];

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      language === "hi" ? "नमस्कार महाराज श्री, मुझे धार्मिक आयोजन के विषय में जानकारी चाहिए।" : "Namaste Maharaj Ji, I would like to enquire about a religious event.",
      `${t.formName}: ${formName}`,
      `${t.formEvent}: ${formEvent}`,
      `${t.formMessage}: ${formMessage}`,
    ].join("\n");
    window.open(`https://wa.me/91${phonePrimary}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>{t.topLine}</span>
          <span className="top-strip-right"><Sun size={13} /> {language === "hi" ? "सर्वे भवन्तु सुखिनः" : "Sarve Bhavantu Sukhinah"}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label={t.brand}>
            <span className="brand-logo"><Image src="/images/trust-emblem.png" alt="" width={49} height={49} /></span>
            <span className="brand-copy"><strong>{t.brand}</strong><small>{t.brandSub}</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navIds[index]}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="language-toggle" onClick={() => setLanguage(language === "hi" ? "en" : "hi")} aria-label="Change language">
              <span className="language-symbol">文</span>{t.language}<ChevronDown size={14} />
            </button>
            <a className="header-contact" href={`tel:+91${phonePrimary}`}><Phone size={15} /> <span>{language === "hi" ? "संपर्क" : "Call"}</span></a>
            <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-backdrop" />
        <div className="hero-overlay" />
        <div className="mandala mandala-one" />
        <div className="mandala mandala-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" />{t.heroKicker}<span className="kicker-line" /></div>
            <div className="hero-om">॥ ॐ ॥</div>
            <h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">{t.heroCta}<ArrowUpRight size={17} /></a>
              <a className="btn btn-ghost" href="#about">{t.explore}<ArrowDown size={16} /></a>
            </div>
            <div className="hero-blessing">श्रीकृष्णार्पणमस्तु <span>✦</span> हरिः ॐ</div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-aura" />
            <div className="portrait-frame">
              <div className="portrait-image">
                <Image src="/images/acharya-portrait.webp" alt="आचार्य डॉ. इन्दु प्रकाश जी महाराज" fill priority sizes="(max-width: 760px) 75vw, 430px" />
              </div>
              <div className="portrait-caption">
                <span className="caption-ornament">❧</span>
                <strong>{language === "hi" ? "आचार्य डॉ. इन्दु प्रकाश जी महाराज" : "Acharya Dr. Indu Prakash Ji Maharaj"}</strong>
                <small>{language === "hi" ? "आध्यात्मिक मार्गदर्शक" : "Spiritual guide"}</small>
              </div>
            </div>
            <div className="floating-seal"><span>ॐ</span><small>{language === "hi" ? "सनातन\nसंस्कृति" : "SANATAN\nCULTURE"}</small></div>
          </div>
        </div>
        <div className="hero-bottom"><div className="container hero-stats">
          <div><strong>25+</strong><span>{t.stat1}</span></div>
          <div><strong>12</strong><span>{t.stat2}</span></div>
          <div><strong>15</strong><span>{t.stat3}</span></div>
        </div></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-visual">
            <div className="intro-image-frame">
              <Image src="/images/acharya-portrait.webp" alt="Acharya Dr. Indu Prakash Ji Maharaj" fill sizes="(max-width: 760px) 80vw, 420px" />
            </div>
            <div className="intro-seal"><span>ॐ</span><small>{language === "hi" ? "ज्ञान • भक्ति • सेवा" : "WISDOM • DEVOTION • SERVICE"}</small></div>
            <div className="intro-vertical-note">{language === "hi" ? "आत्मनो मोक्षार्थं जगद्धिताय च" : "For self-realisation and the welfare of all"}</div>
          </div>
          <div className="intro-copy">
            <div className="eyebrow"><span />{t.sectionAbout}</div>
            <h2>{t.aboutTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p className="lead-paragraph">{t.aboutLead}</p>
            <p className="body-paragraph">{t.aboutBody}</p>
            <a className="text-link" href="#journey">{t.aboutLink}<ArrowRight size={17} /></a>
            <div className="about-note"><Flower2 size={22} /><p>{t.aboutNote}</p></div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="seva">
        <div className="container">
          <div className="section-heading centered">
            <div className="eyebrow"><span />{t.sectionSeva}<span /></div>
            <h2>{t.servicesTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.servicesLead}</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon"><Icon size={25} strokeWidth={1.65} /></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" aria-label={`${service.title} — ${t.heroCta}`}><ArrowUpRight size={18} /></a>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="container journey-container">
          <div className="section-heading centered light-heading">
            <div className="eyebrow"><span />{t.sectionPath}<span /></div>
            <h2>{t.pathTitle}</h2>
            <p>{t.pathLead}</p>
          </div>
          <div className="timeline">
            {t.milestones.map((item, index) => (
              <article className={`timeline-item ${index % 2 ? "right" : "left"}`} key={`${item.year}-${item.title}`}>
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="timeline-dot"><span>✦</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-section section-pad" id="learning">
        <div className="container learning-grid">
          <div className="learning-intro">
            <div className="eyebrow"><span />{t.sectionLearning}</div>
            <h2>{t.learningTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.learningLead}</p>
            <div className="learning-mantra">विद्या ददाति विनयम् <span>✧</span></div>
          </div>
          <div className="education-list">
            {[{ icon: BookText, title: t.edu1, desc: t.edu1Desc }, { icon: GraduationCap, title: t.edu2, desc: t.edu2Desc }, { icon: ScrollText, title: t.edu3, desc: t.edu3Desc }].map((item) => {
              const Icon = item.icon;
              return <article className="education-item" key={item.title}><div className="education-icon"><Icon size={23} /></div><div><h3>{item.title}</h3><p>{item.desc}</p></div><Check className="education-check" size={18} /></article>;
            })}
            <article className="teaching-card">
              <div className="teaching-icon"><GraduationCap size={22} /></div>
              <div><h3>{t.teaching}</h3><p>{t.teachingDesc}</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="recognition-section">
        <div className="container recognition-grid">
          <div>
            <div className="eyebrow"><span />{t.recognition}</div>
            <h2>{t.recognition}</h2>
            <p>{t.recognitionLead}</p>
            <div className="award-pills">{t.awards.map((award) => <span key={award}><Award size={15} />{award}</span>)}</div>
          </div>
          <div className="global-card">
            <div className="global-icon"><Globe2 size={34} /></div>
            <div className="global-eyebrow">{t.global}</div>
            <p>{t.globalLead}</p>
            <strong>{t.countries}</strong>
            <div className="global-decoration">ॐ</div>
          </div>
        </div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="container">
          <div className="section-heading gallery-heading">
            <div><div className="eyebrow"><span />{t.sectionGallery}</div><h2>{t.galleryTitle}</h2></div>
            <p>{t.galleryLead}</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <button className={`gallery-item gallery-item-${index + 1}`} key={src} onClick={() => setSelectedImage(index)} aria-label={`${t.galleryCaptions[index]} — ${t.close}`}>
                <Image src={src} alt={t.galleryCaptions[index]} fill sizes="(max-width: 760px) 90vw, 540px" />
                <span className="gallery-caption">{t.galleryCaptions[index]}<ArrowUpRight size={17} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-pattern" />
        <div className="container quote-inner">
          <div className="quote-mark">“</div>
          <blockquote>{t.quote}</blockquote>
          <div className="quote-rule"><span />✦<span /></div>
          <p>{t.quoteBy}</p>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="eyebrow"><span />{t.sectionContact}</div>
            <h2>{t.contactTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.contactLead}</p>
            <div className="contact-details">
              <a className="contact-detail" href={`tel:+91${phonePrimary}`}><span className="contact-icon"><Phone size={19} /></span><span><small>{t.contactPhone}</small><strong>+91 {phonePrimary}</strong></span></a>
              <a className="contact-detail" href={`tel:+91${phoneSecondary}`}><span className="contact-icon"><Phone size={19} /></span><span><small>{t.contactPhone}</small><strong>+91 {phoneSecondary}</strong></span></a>
              <a className="contact-detail" href={`mailto:${email}`}><span className="contact-icon"><Mail size={19} /></span><span><small>{t.contactEmail}</small><strong>{email}</strong></span></a>
              <div className="contact-detail"><span className="contact-icon"><MapPin size={19} /></span><span><small>{t.contactLocation}</small><strong>{t.locationValue}</strong></span></div>
            </div>
            <a className="youtube-link" href={youtube} target="_blank" rel="noreferrer"><Youtube size={19} />{t.channel}<ArrowUpRight size={16} /></a>
            <a className="youtube-link" href={facebook} target="_blank" rel="noreferrer"><Globe2 size={19} />{t.facebook}<ArrowUpRight size={16} /></a>
          </div>
          <div className="enquiry-card">
            <div className="enquiry-flower">✺</div>
            <h3>{t.formTitle}</h3>
            <form onSubmit={handleEnquiry}>
              <label>{t.formName}<input value={formName} onChange={(e) => setFormName(e.target.value)} placeholder={t.formNamePlaceholder} required /></label>
              <label>{t.formEvent}<input value={formEvent} onChange={(e) => setFormEvent(e.target.value)} placeholder={t.formEventPlaceholder} required /></label>
              <label>{t.formMessage}<textarea value={formMessage} onChange={(e) => setFormMessage(e.target.value)} placeholder={t.formMessagePlaceholder} rows={4} required /></label>
              <button className="btn btn-primary form-submit" type="submit">{t.formSubmit}<MessageCircle size={18} /></button>
              <small className="form-hint">{t.formHint}</small>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-logo"><Image src="/images/trust-emblem.png" alt="" width={49} height={49} /></span><span className="brand-copy"><strong>{t.brand}</strong><small>{t.brandSub}</small></span></a>
          <div className="footer-motto">{t.footerLine}</div>
          <div className="footer-social"><a href={youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={19} /></a><a href={facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Globe2 size={19} /></a><a href={`https://wa.me/91${phonePrimary}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={19} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {t.brand}</span><span>{t.footerRights}</span><a href="#home">↑ {language === "hi" ? "ऊपर जाएँ" : "Back to top"}</a></div>
      </footer>

      <a className="whatsapp-float" href={`https://wa.me/91${phonePrimary}`} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry"><MessageCircle size={23} /></a>

      {selectedImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.galleryCaptions[selectedImage]} onClick={() => setSelectedImage(null)}>
        <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label={t.close}><X size={25} /></button>
        <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
          <Image src={galleryImages[selectedImage]} alt={t.galleryCaptions[selectedImage]} fill sizes="90vw" />
          <p>{t.galleryCaptions[selectedImage]}</p>
        </div>
      </div>}
    </main>
  );
}
