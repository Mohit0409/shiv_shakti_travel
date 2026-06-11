window.TRAVEL_DATA = {
  // ─── BUSINESS INFO ────────────────────────────────────────────
  // Edit your company details here. All pages read from this section.
  business: {
    name: "Shiv Shakti Tours",
    tagline: "Tours, holidays, pilgrimages and custom trips",
    headline: "Discover Your Perfect Journey",
    subheadline:
      "Affordable and customized travel packages for families, couples, pilgrims, and adventure lovers.",
    phoneDisplay: "+91 91095 03815",
    phoneHref: "+919109503815",
    whatsappNumber: "919109503815",
    email: "hello@shivshaktitours.in",
    address: "Shop No. 12, Near Bus Stand, Neemuch, Madhya Pradesh 458441",
    instagram: "https://www.instagram.com/shiv_shakti_tours_/",
    facebook: "#",
    youtube: "#",
    googleMapsUrl: "https://www.google.com/maps",
    serviceAreas: [
      "All India domestic holidays",
      "International vacations from India",
      "Pilgrimage tours",
      "Family group tours",
      "Honeymoon trips",
      "Corporate and custom tours"
    ]
  },

  // ─── STATS ─────────────────────────────────────────────────────
  stats: [
    { value: "8+", label: "Years planning tours" },
    { value: "2,500+", label: "Happy travellers" },
    { value: "120+", label: "Curated itineraries" },
    { value: "24/7", label: "Trip support" }
  ],

  // ─── HERO SLIDES ─────────────────────────────────────────────
  heroSlides: [
    {
      name: "Kashmir",
      label: "Snow valleys, gardens and Dal Lake stays",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=82"
    },
    {
      name: "Goa",
      label: "Beach breaks, nightlife and weekend escapes",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=82"
    },
    {
      name: "Kedarnath",
      label: "Guided yatra planning with stay and transport",
      image:
        "/images/jyotirlinga.png"
    },
    {
      name: "Thailand",
      label: "Bangkok, Pattaya, islands and family holidays",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1800&q=82"
    }
  ],

  // ─── PACKAGES ─────────────────────────────────────────────────
  // To add a new package: copy any block below and change the values.
  // Fields: id, type, destination, duration, price, image, inclusions,
  //         exclusions, itinerary (day-wise), pickupCity, hotelCategory,
  //         notes, featured, summary
  packages: [
    {
      id: "sikkim-darjeeling",
      type: "Domestic",
      destination: "Sikkim & Darjeeling",
      duration: "6 Nights / 7 Days",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Breakfast", "Private cab", "Sightseeing"],
      exclusions: ["Flights", "Lunch/dinner", "Entry tickets", "Personal expenses"],
      itinerary: [
        "Day 1: Arrival at Bagdogra, transfer to Gangtok",
        "Day 2: Gangtok local sightseeing – Rumtek, Do Drul Chorten, MG Marg",
        "Day 3: Tsomgo Lake and Baba Mandir excursion",
        "Day 4: Transfer to Pelling, visit Ravangla en route",
        "Day 5: Pelling sightseeing – Skywalk, Kanchenjunga Falls",
        "Day 6: Transfer to Darjeeling, evening Mall Road walk",
        "Day 7: Tiger Hill sunrise, Toy Train, departure from Bagdogra"
      ],
      pickupCity: "Bagdogra / NJP",
      hotelCategory: "3-Star",
      notes: "Permits needed for Tsomgo Lake and Nathula (arranged by us). Best season: March–June, Sept–Nov.",
      featured: true,
      summary: "Misty hills, tea gardens, monasteries and mountain viewpoints."
    },
    {
      id: "himachal",
      type: "Domestic",
      destination: "Himachal",
      duration: "5 Nights / 6 Days",
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Meals", "Volvo/cab", "Sightseeing"],
      exclusions: ["Flights", "Adventure activities", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Shimla, check-in and Mall Road evening",
        "Day 2: Shimla sightseeing – Kufri, Jakhoo Temple, Christ Church",
        "Day 3: Shimla to Manali via Kullu valley",
        "Day 4: Manali local – Hadimba Temple, Vashisht, Old Manali",
        "Day 5: Solang Valley adventure day, Atal Tunnel visit",
        "Day 6: Departure from Manali / Chandigarh drop"
      ],
      pickupCity: "Chandigarh / Delhi",
      hotelCategory: "3-Star",
      notes: "Volvo bus from Delhi available. Rohtang Pass excursion at extra cost (seasonal).",
      featured: true,
      summary: "Shimla, Manali, Solang Valley and relaxed mountain stays."
    },
    {
      id: "thailand",
      type: "International",
      destination: "Thailand",
      duration: "4 Nights / 5 Days",
      price: "₹39,999",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Transfers", "Island tour", "Visa assistance"],
      exclusions: ["Flights", "Meals", "Travel insurance", "Personal shopping"],
      itinerary: [
        "Day 1: Arrive Bangkok, hotel check-in, evening at Asiatique",
        "Day 2: Bangkok city tour – Grand Palace, Wat Pho, Wat Arun",
        "Day 3: Transfer to Pattaya, Coral Island tour with lunch",
        "Day 4: Pattaya – Nong Nooch Garden, Alcazar Show evening",
        "Day 5: Pattaya to Bangkok, departure"
      ],
      pickupCity: "Bangkok Airport (BKK)",
      hotelCategory: "3-Star / 4-Star",
      notes: "Visa on arrival for Indian passport holders. Travel insurance recommended.",
      featured: true,
      summary: "Bangkok, Pattaya, beaches, shopping and family-friendly fun."
    },
    {
      id: "nepal",
      type: "International",
      destination: "Nepal",
      duration: "5 Nights / 6 Days",
      price: "₹22,999",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Breakfast", "Transfers", "Temple visits"],
      exclusions: ["Flights/train", "Lunch/dinner", "Entry fees", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Kathmandu, Pashupatinath & Boudhanath evening",
        "Day 2: Kathmandu – Swayambhunath, Patan Durbar Square",
        "Day 3: Drive to Pokhara, Fewa Lake boating",
        "Day 4: Pokhara – Sarangkot sunrise, Davis Falls, caves",
        "Day 5: Drive to Chitwan / Lumbini (optional safari)",
        "Day 6: Return to Kathmandu, departure"
      ],
      pickupCity: "Kathmandu Airport / Gorakhpur (by road)",
      hotelCategory: "3-Star",
      notes: "No visa required for Indian citizens. Carry valid ID. Best: Oct–Mar.",
      featured: false,
      summary: "Kathmandu, Pokhara, temples, lakes and Himalayan views."
    },
    {
      id: "meghalaya",
      type: "Domestic",
      destination: "Meghalaya",
      duration: "5 Nights / 6 Days",
      price: "₹21,499",
      image:
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      inclusions: ["Hotel", "Cab", "Breakfast", "Waterfalls"],
      exclusions: ["Flights", "Lunch/dinner", "Boating charges", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Guwahati, transfer to Shillong",
        "Day 2: Shillong – Elephant Falls, Don Bosco Museum, Ward Lake",
        "Day 3: Cherrapunji – Nohkalikai Falls, Mawsmai Cave, Seven Sisters",
        "Day 4: Living Root Bridge trek, Dawki river visit",
        "Day 5: Mawlynnong (cleanest village), Jowai side trip",
        "Day 6: Return to Guwahati, departure"
      ],
      pickupCity: "Guwahati",
      hotelCategory: "3-Star",
      notes: "Best season: Oct–May. Monsoon season (Jun–Sep) has heavy rain but stunning waterfalls.",
      featured: false,
      summary: "Shillong, Cherrapunji, caves, living roots and crystal rivers."
    },
    {
      id: "kashmir",
      type: "Domestic",
      destination: "Kashmir",
      duration: "5 Nights / 6 Days",
      price: "₹23,999",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Houseboat", "Meals", "Sightseeing"],
      exclusions: ["Flights", "Gondola ride", "Pony ride", "Shopping"],
      itinerary: [
        "Day 1: Arrive Srinagar, Dal Lake shikara ride, houseboat night",
        "Day 2: Mughal Gardens – Nishat, Shalimar, Chashme Shahi",
        "Day 3: Full day Gulmarg – Gondola ride, snow activities",
        "Day 4: Srinagar to Pahalgam, Betaab Valley, Aru Valley",
        "Day 5: Pahalgam leisure / Chandanwari visit",
        "Day 6: Return to Srinagar, departure"
      ],
      pickupCity: "Srinagar Airport",
      hotelCategory: "3-Star + Houseboat",
      notes: "Winter (Dec–Feb) for snow, Spring (Mar–May) for tulips. Warm clothing essential.",
      featured: true,
      summary: "Srinagar, Gulmarg, Pahalgam and memorable houseboat stays."
    },
    {
      id: "andaman",
      type: "Honeymoon",
      destination: "Andaman",
      duration: "5 Nights / 6 Days",
      price: "₹31,999",
      image:
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Ferry", "Breakfast", "Beach tours"],
      exclusions: ["Flights", "Scuba diving", "Water sports", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Port Blair, Cellular Jail, Light & Sound show",
        "Day 2: Ross Island and North Bay Island excursion",
        "Day 3: Ferry to Havelock, Radhanagar Beach evening",
        "Day 4: Havelock – Kalapathar Beach, snorkeling at Elephant Beach",
        "Day 5: Ferry to Neil Island, Laxmanpur Beach sunset",
        "Day 6: Return to Port Blair, departure"
      ],
      pickupCity: "Port Blair Airport",
      hotelCategory: "3-Star Beach Resort",
      notes: "Best season: Oct–May. Book ferry tickets in advance. Carry waterproof bags.",
      featured: false,
      summary: "Blue beaches, ferry rides, candlelight dinners and water sports."
    },
    {
      id: "char-dham",
      type: "Pilgrimage",
      destination: "Char Dham Yatra",
      duration: "10 Nights / 11 Days",
      price: "₹36,999",
      image:
      "/images/jyotirlinga.png",
      inclusions: ["Hotel", "Meals", "Tempo traveller", "Yatra support"],
      exclusions: ["Helicopter", "Pony/palki ride", "Personal expenses", "Special puja"],
      itinerary: [
        "Day 1: Arrive Haridwar, Ganga Aarti evening",
        "Day 2: Haridwar to Barkot (en route Mussoorie)",
        "Day 3: Barkot to Yamunotri temple trek and return",
        "Day 4: Barkot to Uttarkashi",
        "Day 5: Uttarkashi to Gangotri temple and return",
        "Day 6: Uttarkashi to Guptkashi",
        "Day 7: Guptkashi to Kedarnath temple trek",
        "Day 8: Kedarnath darshan, return to Guptkashi",
        "Day 9: Guptkashi to Badrinath, evening Mana Village",
        "Day 10: Badrinath darshan, drive to Rudraprayag",
        "Day 11: Rudraprayag to Haridwar, departure"
      ],
      pickupCity: "Haridwar / Dehradun",
      hotelCategory: "Budget / Dharamshala",
      notes: "Season: May–June, Sept–Oct. Yatra registration mandatory. Carry warm clothes and rain gear.",
      featured: true,
      summary: "A planned pilgrimage route with stays, transport and assistance."
    },
    {
      id: "goa-weekend",
      type: "Weekend",
      destination: "Goa Weekend",
      duration: "2 Nights / 3 Days",
      price: "₹8,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Breakfast", "Airport pickup", "Beach time"],
      exclusions: ["Flights", "Lunch/dinner", "Water sports", "Nightlife"],
      itinerary: [
        "Day 1: Arrive Goa, check-in, Calangute/Baga Beach evening",
        "Day 2: North Goa – Aguada Fort, Anjuna flea market, Chapora Fort",
        "Day 3: South Goa leisure or Dudhsagar Falls, departure"
      ],
      pickupCity: "Goa Airport / Madgaon Station",
      hotelCategory: "3-Star Beach",
      notes: "Best: Nov–Feb. Weekend rates may vary by season.",
      featured: false,
      summary: "A quick beach break with flexible stay and activity options."
    },
    {
      id: "custom-india",
      type: "Custom",
      destination: "Custom India Tour",
      duration: "As per plan",
      price: "On request",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Flights", "Hotels", "Cars", "Personal itinerary"],
      exclusions: ["Decided based on your plan"],
      itinerary: [
        "Completely customized to your preferences",
        "Share dates, budget, and destinations",
        "We create a day-wise plan for you"
      ],
      pickupCity: "Any city in India",
      hotelCategory: "As per budget",
      notes: "WhatsApp us your travel idea and we will build the perfect itinerary.",
      featured: false,
      summary: "Build your own route with dates, budget and travel style."
    },
    {
      id: "insta-sikkim-darjeeling-couple",
      type: "Honeymoon",
      destination: "Sikkim & Darjeeling Couple Getaway",
      duration: "5 Nights / 6 Days",
      price: "₹59,000 / couple",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Cozy stays", "Scenic drives", "Monasteries", "Toy train vibes"],
      exclusions: ["Flights", "Personal expenses", "Tips", "Adventure activities"],
      itinerary: [
        "Day 1: Arrive Bagdogra, transfer to Gangtok",
        "Day 2: Gangtok – MG Marg, Rumtek Monastery, Flower Show",
        "Day 3: Tsomgo Lake excursion, transfer to Pelling",
        "Day 4: Pelling – Skywalk, Kanchenjunga viewpoint, waterfalls",
        "Day 5: Transfer to Darjeeling, evening Tiger Hill booking",
        "Day 6: Tiger Hill sunrise, Toy Train ride, departure"
      ],
      pickupCity: "Bagdogra / NJP",
      hotelCategory: "3-Star Boutique",
      notes: "Couple-special arrangement with room decor on request.",
      featured: true,
      summary: "Instagram special couple escape covering Gangtok, Pelling and Darjeeling."
    },
    {
      id: "insta-nepal-pashupatinath-yatra",
      type: "Pilgrimage",
      destination: "Pashupatinath Nepal Darshan Yatra",
      duration: "9 Nights / 10 Days",
      price: "₹61,340 / person",
      image:
        "/images/jyotirlinga.png",
      inclusions: ["Train journey", "Accommodation", "Food included", "Yatra support"],
      exclusions: ["Personal expenses", "Special puja", "Shopping", "Insurance"],
      itinerary: [
        "Day 1: Departure by train from Neemuch",
        "Day 2: Arrive Gorakhpur, cross Nepal border to Lumbini",
        "Day 3: Lumbini darshan, transfer to Pokhara",
        "Day 4: Pokhara sightseeing – Fewa Lake, Sarangkot",
        "Day 5: Pokhara to Manakamana temple (cable car)",
        "Day 6: Transfer to Chitwan, jungle walk/safari",
        "Day 7: Chitwan to Kathmandu",
        "Day 8: Kathmandu – Pashupatinath, Boudhanath, Swayambhunath",
        "Day 9: Kathmandu to Gorakhpur by bus",
        "Day 10: Train return to Neemuch"
      ],
      pickupCity: "Neemuch",
      hotelCategory: "Budget / Dharamshala",
      notes: "Group departure. Train tickets arranged. Carry valid photo ID for border.",
      featured: false,
      summary: "Spiritual Nepal route covering Chitwan, Pokhara, Manakamana and Kathmandu."
    },
    {
      id: "insta-meghalaya-escape",
      type: "Domestic",
      destination: "Meghalaya Monsoon Escape",
      duration: "5 Nights / 6 Days",
      price: "₹25,000 / person",
      image:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      inclusions: ["Comfortable stay", "Daily breakfast", "Private sightseeing", "Safe journey"],
      exclusions: ["Flights", "Lunch/dinner", "Boating", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Guwahati, transfer to Shillong",
        "Day 2: Shillong local sightseeing",
        "Day 3: Cherrapunji waterfalls and caves",
        "Day 4: Dawki crystal river, Bangladesh border viewpoint",
        "Day 5: Mawlynnong cleanest village, Nongriat root bridge",
        "Day 6: Return to Guwahati, departure"
      ],
      pickupCity: "Guwahati",
      hotelCategory: "3-Star",
      notes: "Monsoon special. Carry raincoat and waterproof shoes.",
      featured: false,
      summary: "Shillong, Cherrapunji and Dawki with waterfalls, clouds and clear waters."
    },
    {
      id: "insta-south-india-pilgrimage",
      type: "Pilgrimage",
      destination: "South India Pilgrimage Darshan",
      duration: "10 Nights / 11 Days",
      price: "₹20,250",
      image:
        "/images/jyotirlinga.png",
      inclusions: ["Veg meals", "Local sightseeing", "Night stay", "Tourist train"],
      exclusions: ["Special darshan tickets", "Personal expenses", "Shopping", "Insurance"],
      itinerary: [
        "Day 1: Departure by train",
        "Day 2: Arrive Tirupati, Tirumala darshan",
        "Day 3: Tirupati to Chennai, Mahabalipuram",
        "Day 4: Chennai to Rameshwaram",
        "Day 5: Rameshwaram temple darshan, Dhanushkodi",
        "Day 6: Rameshwaram to Madurai – Meenakshi Temple",
        "Day 7: Madurai to Kanyakumari – Vivekananda Rock",
        "Day 8: Kanyakumari sunrise, transfer to Srisailam",
        "Day 9: Mallikarjun Jyotirlinga darshan",
        "Day 10: Srisailam to Hyderabad",
        "Day 11: Return journey"
      ],
      pickupCity: "Neemuch / Indore (by train)",
      hotelCategory: "Budget / Dharamshala",
      notes: "Group departure with yatra coordinator. Vegetarian meals throughout.",
      featured: false,
      summary: "Tirupati, Rameshwaram, Madurai, Kanyakumari and Mallikarjun Jyotirlinga."
    },
    {
      id: "insta-thailand-pattaya-bangkok",
      type: "International",
      destination: "Thailand Pattaya & Bangkok",
      duration: "4 Nights / 5 Days",
      price: "₹15,000 / person",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["3N Pattaya", "1N Bangkok", "Breakfast", "Pickup and sightseeing"],
      exclusions: ["Flights", "Visa fee", "Lunch/dinner", "Insurance"],
      itinerary: [
        "Day 1: Arrive Bangkok, transfer to Pattaya",
        "Day 2: Coral Island tour with speed boat and lunch",
        "Day 3: Pattaya – Nong Nooch Garden, Gems Gallery, Alcazar Show",
        "Day 4: Pattaya to Bangkok, evening MBK/Platinum Mall",
        "Day 5: Safari World or Temple tour, departure"
      ],
      pickupCity: "Bangkok Airport (BKK)",
      hotelCategory: "3-Star",
      notes: "Visa on arrival for Indian passport. Group rates available for 4+ travellers.",
      featured: false,
      summary: "Pattaya and Bangkok package with Coral Island tour and transfers."
    },
    {
      id: "insta-himachal-mountain-tour",
      type: "Domestic",
      destination: "Himachal Mountain Tour",
      duration: "4 Nights / 5 Days",
      price: "₹30,000 / person",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Hotel", "Mountain route", "Sightseeing", "Trip support"],
      exclusions: ["Flights", "Meals", "Adventure activities", "Personal expenses"],
      itinerary: [
        "Day 1: Arrive Chandigarh, drive to Manali",
        "Day 2: Manali – Hadimba Temple, Vashisht, Solang Valley",
        "Day 3: Atal Tunnel, Sissu, Lahaul Valley day trip",
        "Day 4: Transfer to Dalhousie via Chamba",
        "Day 5: Khajjiar (Mini Switzerland), departure"
      ],
      pickupCity: "Chandigarh / Delhi",
      hotelCategory: "3-Star",
      notes: "Road conditions vary by season. Winter chains may be needed Dec–Feb.",
      featured: false,
      summary: "Manali, Solang Valley, Dalhousie and Khajjiar mountain holiday."
    },
    {
      id: "insta-kashmir-andaman-specials",
      type: "Domestic",
      destination: "Kashmir & Andaman Specials",
      duration: "Custom duration",
      price: "From ₹18,000",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      inclusions: ["Comfortable stay", "Complete package", "Trusted service", "24x7 support"],
      exclusions: ["Flights", "Adventure extras", "Personal expenses"],
      itinerary: [
        "Kashmir: Srinagar, Gulmarg, Pahalgam, Dal Lake",
        "Andaman: Port Blair, Havelock, Neil Island",
        "Duration and route customized to your dates"
      ],
      pickupCity: "Srinagar / Port Blair",
      hotelCategory: "As per budget",
      notes: "Instagram special rates. Book early for peak season availability.",
      featured: false,
      summary: "Instagram-posted India specials: Kashmir from ₹18,000 and Andaman from ₹20,000."
    }
  ],

  // ─── DESTINATIONS (shown on homepage) ───────────────────────
  destinations: [
    {
      name: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
      label: "Snow, gardens and houseboats"
    },
    {
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
      label: "Beaches, shopping and nightlife"
    },
    {
      name: "Meghalaya",
      image:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      label: "Clouds, caves and waterfalls"
    },
    {
      name: "Char Dham",
      image:
        "/images/jyotirlinga.png",
      label: "Sacred Himalayan yatra"
    }
  ],

  // ─── TESTIMONIALS ─────────────────────────────────────────
  // Add real customer reviews here. Each needs: name, place, text.
  testimonials: [
    {
      name: "Rohit Sharma",
      place: "Family trip to Kashmir",
      text:
        "The hotel choices and cab planning were excellent. Our parents were comfortable throughout the journey."
    },
    {
      name: "Priya Mehta",
      place: "Thailand honeymoon",
      text:
        "Everything was planned clearly, from transfers to sightseeing. We got quick help whenever we had a question."
    },
    {
      name: "Anil Verma",
      place: "Char Dham Yatra",
      text:
        "Very supportive team for pilgrimage travel. The itinerary was practical and the stay arrangements were good."
    }
  ],

  // ─── FAQs ─────────────────────────────────────────────────
  faqs: [
    {
      question: "Can I customize a tour package?",
      answer:
        "Yes. Share your travel dates, number of travellers, budget and preferred destinations. We will create a custom itinerary."
    },
    {
      question: "Do you arrange flights and hotels separately?",
      answer:
        "Yes. You can book flights, hotels, transfers, sightseeing and complete holiday packages through us."
    },
    {
      question: "How do I confirm a package?",
      answer:
        "Send an inquiry through WhatsApp, call us, or submit the contact form. Our team will share details and payment steps."
    },
    {
      question: "Are package prices fixed?",
      answer:
        "Prices are sample starting prices and can change by season, hotel category, transport type and availability."
    }
  ]
};
