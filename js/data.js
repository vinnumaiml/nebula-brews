// Nebula-Brews Hotel & Craft Lounge Data Repository
const hotelData = {
  info: {
    name: "Nebula-Brews",
    tagline: "Where Celestial Luxury Meets Artisanal Craft",
    rating: 4.96,
    reviewCount: 1480,
    address: "742 Stellar Horizon Boulevard, Celestial Bay, CA 90291, USA",
    coordinates: "34.0195° N, 118.4912° W",
    emails: {
      reservations: "reservations@nebulabrews.com",
      concierge: "concierge@nebulabrews.com",
      events: "events@nebulabrews.com",
      press: "press@nebulabrews.com"
    },
    phones: {
      primary: "+1 (800) 592-NEBULA",
      direct: "+1 (555) 782-7548",
      concierge: "+1 (555) 782-7549"
    },
    hours: {
      frontDesk: "24 Hours / 7 Days a week",
      rooftopLounge: "07:00 AM – 02:00 AM Daily",
      breweryTours: "11:00 AM, 02:00 PM, 05:00 PM Daily",
      spa: "08:00 AM – 10:00 PM Daily"
    }
  },

  suites: [
    {
      id: "penthouse-observatory",
      name: "Celestial Penthouse & Observatory",
      category: "luxury",
      badge: "Signature Presidential",
      tagline: "Private 360° Sky Dome with Computerized Meade Telescope",
      price: 890,
      originalPrice: 1050,
      size: "1,850 sq.ft (172 m²)",
      guests: "Up to 4 Guests",
      bed: "1 Emperor King Bed + Private Lounge",
      view: "Panoramic Ocean & Skyline Observatory",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "The crown jewel of Nebula-Brews. Perched on our highest vantage point, featuring an automated retracting skylight observatory, heated outdoor hydrotherapy tub, private dual-tap craft beer bar, and dedicated 24-hour astral butler.",
      amenities: [
        "Private motorized observatory sky dome",
        "Complimentary unlimited in-suite microbrew taps",
        "Heated private infinity jacuzzi terrace",
        "Dedicated 24/7 personal celestial butler",
        "Bang & Olufsen 360° celestial sound system",
        "Molton Brown custom cosmic amber toiletries",
        "VIP private airport Tesla transfer included"
      ]
    },
    {
      id: "starlight-horizon-suite",
      name: "Starlight Horizon Suite",
      category: "luxury",
      badge: "Guest Favorite",
      tagline: "Floor-to-Ceiling Constellation Windows & Soaking Tub",
      price: 540,
      originalPrice: 620,
      size: "950 sq.ft (88 m²)",
      guests: "Up to 3 Guests",
      bed: "1 California King Bed",
      view: "Celestial Bay & Evening Sunset View",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Awaken to uninterrupted horizons and fall asleep under fiber-optic ceiling star constellations. Features a freestanding volcanic stone bathtub, artisanal espresso bar, and private sunset terrace.",
      amenities: [
        "Fiber-optic starlight ceiling with dimmer",
        "Freestanding volcanic stone soaking tub",
        "Nebula custom single-origin espresso station",
        "Private terrace with fire lounge",
        "Smart iPad room and mood lighting controls",
        "Curated craft brew mini-bar restocked daily"
      ]
    },
    {
      id: "orion-executive-king",
      name: "Orion Executive King",
      category: "executive",
      badge: "Business & Leisure",
      tagline: "Sleek Minimalist Luxury for the Cosmopolitan Traveler",
      price: 420,
      originalPrice: 490,
      size: "720 sq.ft (67 m²)",
      guests: "Up to 2 Guests",
      bed: "1 Custom Ergonomic King Bed",
      view: "City Skyline & Starlit Garden",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Designed for discerning innovators and craft enthusiasts. Complete with high-speed fiber Wi-Fi, acoustic isolation, dedicated standing desk nook, and a personal nitro cold brew tap.",
      amenities: [
        "In-suite fresh nitro cold brew dispenser",
        "Ultra high-speed 1Gbps Wi-Fi 6E",
        "Dyson Supersonic styling station",
        "Raindance oversized rainfall shower",
        "Custom organic sateen cotton linens",
        "Complimentary evening craft beer tasting pass"
      ]
    },
    {
      id: "cosmic-garden-loft",
      name: "Cosmic Garden Loft",
      category: "balcony",
      badge: "Nature & Sky",
      tagline: "Biophilic Design with Private Herb Garden & Firepit",
      price: 480,
      originalPrice: 550,
      size: "850 sq.ft (79 m²)",
      guests: "Up to 3 Guests",
      bed: "1 Plush King Bed + Daybed",
      view: "Private Zen Astro-Garden",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "An oasis of tranquility combining lush botanical flora with celestial geometry. Step out into your private heated garden sanctuary with custom gas firepit and outdoor daybed.",
      amenities: [
        "Private landscaped garden & firepit",
        "Custom botanical pour-over tea & coffee bar",
        "Dual outdoor rain showers",
        "Aromatherapy diffuser with cedar & galaxy scents",
        "Wine & craft cider reserve fridge",
        "Smart acoustic sound masking"
      ]
    },
    {
      id: "supernova-luxury-duplex",
      name: "Supernova Luxury Duplex",
      category: "luxury",
      badge: "Two-Story Suite",
      tagline: "Double-Height Architectural Marvel with Mezzanine Library",
      price: 750,
      originalPrice: 870,
      size: "1,400 sq.ft (130 m²)",
      guests: "Up to 5 Guests",
      bed: "2 King Beds (1 per floor)",
      view: "Dual-Story Bay & Mountain Panorama",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A breathtaking architectural statement spanning two levels. Features a floating spiral staircase, mezzanine astronomy library, dual master suites, and private cocktail crafting station.",
      amenities: [
        "Two levels with private elevator access",
        "Mezzanine astronomy library & antique telescope",
        "Dual en-suite spa bathrooms with heated floors",
        "Complete artisanal cocktail mixing station",
        "Complimentary sommelier bottle of reserve stout",
        "Priority reservations at all Nebula-Brews venues"
      ]
    },
    {
      id: "astral-deluxe-room",
      name: "Astral Deluxe King",
      category: "executive",
      badge: "Classic Elegance",
      tagline: "Serene Cosmic Comfort with Modern Artisanal Finishes",
      price: 320,
      originalPrice: 380,
      size: "520 sq.ft (48 m²)",
      guests: "Up to 2 Guests",
      bed: "1 Nebula Cloud King Bed",
      view: "Courtyard & Constellation Pool",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "The quintessential Nebula-Brews experience. Impeccable finishes, warm walnut wood, brushed brass accents, and our signature custom roasted coffee experience.",
      amenities: [
        "Custom Nebula Cloud mattress with pillow menu",
        "Artisanal French press coffee & tea bar",
        "Full HD 65-inch smart stream display",
        "Rain shower with chromotherapy lighting",
        "24-hour room service dining",
        "High-speed fiber connectivity"
      ]
    }
  ],

  brewsAndDining: {
    categories: [
      { id: "beer", name: "Artisanal Craft Beers" },
      { id: "coffee", name: "Specialty Coffee Roastery" },
      { id: "cocktails", name: "Cosmic Mixology" },
      { id: "dining", name: "Gastro-Lounge & Dining" }
    ],
    items: [
      {
        category: "beer",
        name: "Andromeda Hazy Double IPA",
        specs: "ABV 8.2% | IBU 65 | Dry-Hopped",
        price: "$14 / Pint",
        desc: "Brewed on-site with Galaxy and Citra hops. Bursts with vibrant aromas of passionfruit, ripe mango, and soft pillowy oats.",
        tags: ["House Brewed", "Award Winner", "Double Dry-Hopped"],
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "beer",
        name: "Orion Eclipse Imperial Stout",
        specs: "ABV 11.5% | IBU 48 | Bourbon Cask",
        price: "$16 / 12oz Snifter",
        desc: "Aged 14 months in Kentucky bourbon barrels. Decadent layers of single-origin dark chocolate, roasted espresso beans, and toasted vanilla.",
        tags: ["Barrel Aged", "Limited Reserve"],
        image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "beer",
        name: "Supernova Blood Orange Sour",
        specs: "ABV 5.8% | IBU 12 | Kettle Sour",
        price: "$13 / Pint",
        desc: "Tart, refreshing, and electrifying. Infused with Californian blood oranges, Meyer lemon zest, and pink Himalayan sea salt.",
        tags: ["Crisp & Fruity", "Summer Seasonal"],
        image: "https://images.unsplash.com/photo-1608270199182-3e5c94541767?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "beer",
        name: "Cosmic Pilsner Reserve",
        specs: "ABV 4.9% | IBU 28 | Czech Saaz Hops",
        price: "$11 / Pint",
        desc: "Slow-lagered for 8 weeks in horizontal tanks. Feather-light malt body, floral aroma, and an impeccably crisp, clean snap.",
        tags: ["Crisp Lager", "Session Favorite"],
        image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=600&q=80"
      },

      {
        category: "coffee",
        name: "Stardust Single-Origin Pour-Over",
        specs: "Yirgacheffe, Ethiopia | Washed | Altitude 2,100m",
        price: "$8.50",
        desc: "Slow hand-poured via Origami dripper. Delicate jasmine floral bouquet, sweet bergamot, lemon curd, and honey finish.",
        tags: ["Single Origin", "Direct Trade", "Light Roast"],
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "coffee",
        name: "Dark Matter Nitro Cold Brew",
        specs: "24-Hour Extraction | Nitrogen Infused",
        price: "$7.50",
        desc: "Velvety, cascading micro-foam poured ice-cold from our nitro draft system. Natural chocolate sweetness with zero bitterness.",
        tags: ["On Draft", "Creamy Finish", "Zero Sugar"],
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "coffee",
        name: "Nebula Smoked Vanilla Cortado",
        specs: "Double Ristretto + Steamed Oat Milk + Smoked Bean",
        price: "$7.00",
        desc: "Equal parts rich ristretto and velvety oat milk, infused with house-smoked Madagascar vanilla bean and dusted with gold leaf.",
        tags: ["House Signature", "Barista Choice"],
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
      },

      {
        category: "cocktails",
        name: "The Celestial Astral Negroni",
        specs: "Smoked Juniper Gin | Campari | Stout Reduction",
        price: "$19",
        desc: "Our boundary-pushing signature cocktail: botanic gin infused with our Imperial Stout reduction, presented inside a glass sphere of applewood smoke.",
        tags: ["Smoked Presentation", "Signature"],
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "cocktails",
        name: "Starlight Espresso Martini",
        specs: "Fresh Roasted Espresso | Grey Goose | Coffee Liqueur",
        price: "$18",
        desc: "Crafted with espresso pulled seconds before shaking. Crowned with edible constellation glitter and three roasted single-origin beans.",
        tags: ["House Favorite", "Rooftop Classic"],
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
      },

      {
        category: "dining",
        name: "Truffle & Stout Braised Wagyu Sliders",
        specs: "A5 Wagyu | Brioche | Stout Onion Jam",
        price: "$28",
        desc: "Three mini Wagyu patties glazed with Andromeda beer reduction, aged cave Gruyère, black truffle aioli, on toasted brioche.",
        tags: ["Chef Special", "Gourmet Bites"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "dining",
        name: "Wood-Fired Stellar Artisan Flatbread",
        specs: "San Daniele Prosciutto | Burrata | Wild Arugula",
        price: "$24",
        desc: "48-hour fermented sourdough crust baked at 900°F. Drizzled with hot wildflower chili honey and 25-year aged balsamic.",
        tags: ["Wood Fired", "Sharing Plate"],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        category: "dining",
        name: "Constellation Artisanal Board",
        specs: "Local Cheeses | Cured Meats | Beer Jam",
        price: "$34",
        desc: "Handcrafted selection of four rare cheeses, Iberian cured meats, honeycomb, house beer mustard, and wood-fired sourdough crisps.",
        tags: ["Perfect Pairing", "Sommelier Curated"],
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  amenities: [
    {
      icon: "telescope",
      title: "Rooftop Stargazing Observatory",
      desc: "Equipped with Meade computerized telescopes and nightly guided celestial sky tours by our resident astrophysicist."
    },
    {
      icon: "beer",
      title: "In-House Microbrewery & Roastery",
      desc: "Tour our glass-encased brewhouse and single-origin roastery. Enjoy complimentary tasting flights every afternoon."
    },
    {
      icon: "waves",
      title: "Astral Heated Sky Pool",
      desc: "Suspended 12 stories above the bay, heated year-round with fiber-optic underwater star clusters and daybed cabanas."
    },
    {
      icon: "sparkles",
      title: "Nebula Hydrotherapy & Spa",
      desc: "Full-body rejuvenation featuring Finnish saunas, cold plunge pools, cosmic sound baths, and botanical treatments."
    },
    {
      icon: "concierge-bell",
      title: "24/7 Celestial Concierge",
      desc: "From private yacht charters and Tesla chauffeur transfers to bespoke rooftop dinner reservations, our staff caters to every whim."
    },
    {
      icon: "wifi",
      title: "Gigabit Fiber & Creator Pods",
      desc: "Next-generation Wi-Fi 6E throughout the hotel, acoustic work sanctuaries, podcast recording booth, and conference suites."
    }
  ],

  reviews: [
    {
      name: "Dr. Alistair Sterling",
      role: "Astrophysicist & Regular Guest",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      date: "October 2026",
      headline: "An astronomical masterclass in boutique hospitality.",
      comment: "Nebula-Brews is unlike any hotel in the world. Sipping an on-site brewed Andromeda Double IPA while peering at the rings of Saturn through their rooftop observatory telescope was genuinely transcendent. The suite details are flawless."
    },
    {
      name: "Elena Rostova",
      role: "Architectural Digest Contributor",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      date: "September 2026",
      headline: "The design, lighting, and sound are perfection.",
      comment: "From the velvet texture of the headboards to the subtle celestial ambient soundtrack in the elevators, every square inch was built with intention. And their single-origin cold drip coffee in the morning is Michelin quality."
    },
    {
      name: "Marcus Vance",
      role: "Tech Entrepreneur & Food Critic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      date: "August 2026",
      headline: "The craft brews rival the best microbreweries in Portland.",
      comment: "I travel 200+ days a year and this has instantly become my favorite retreat. Having your own nitro tap in the Orion suite and an artisan bakery on the ground level makes working remotely feel like a vacation."
    }
  ],

  faqs: [
    {
      q: "What are the standard Check-in and Check-out times?",
      a: "Check-in begins at 3:00 PM and Check-out is at 12:00 PM noon. Early check-in from 11:00 AM and late checkout until 3:00 PM can be arranged complimentary for direct website bookings subject to availability."
    },
    {
      q: "Are the craft brewery tours and tastings included with my stay?",
      a: "Yes! All hotel guests receive complimentary access to our daily 5:00 PM 'Sunset Brew & Sky' tasting flight in the brewery lounge, led by our Master Brewer and resident sommelier."
    },
    {
      q: "Can I bring pets or service animals?",
      a: "Nebula-Brews is proud to be pet-friendly! We welcome up to two dogs per suite. We provide plush orthopedic pet beds, custom ceramic bowls, and house-made organic spent-grain dog treats."
    },
    {
      q: "Do you offer airport transportation and parking?",
      a: "Yes, we provide 24/7 valet parking with complimentary Level-2 and DC Fast EV charging stations. In addition, guests staying in our Penthouse and Duplex suites receive complimentary luxury Tesla shuttle transfers to and from the international airport."
    },
    {
      q: "What is your reservation cancellation and modification policy?",
      a: "We offer flexible cancellation: cancel or modify your reservation up to 48 hours prior to your check-in date for a 100% full refund with no penalty fees."
    }
  ]
};
