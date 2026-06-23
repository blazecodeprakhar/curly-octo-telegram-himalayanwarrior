// Client-safe Types and Static Data for Himalayan Warrior

export type Trek = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  difficulty: "Easy" | "Easy to Moderate" | "Moderate" | "Moderate to Difficult" | "Difficult";
  altitude: string;
  location: string;
  rating: number;
  reviewsCount: number;
  image: string;
  season: "Summer" | "Winter" | "Monsoon" | "Spring" | "Autumn" | "All Seasons";
  highlights: string[];
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
};

export type Booking = {
  id: string;
  trekId: string;
  trekTitle: string;
  pricePerPerson: number;
  trekDate: string;
  fullname: string;
  email: string;
  phone: string;
  guestsCount: number;
  aadhaarFileName?: string;
  healthFileName?: string;
  status: "Pending" | "Confirmed" | "Cancelled";
  bookingDate: string;
  totalPrice: number;
};

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  date: string;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
};

// Static Data for Himalayan Warrior
export const TREKS: Trek[] = [
  {
    id: "kedarkantha",
    slug: "kedarkantha-trek",
    title: "Kedarkantha Trek",
    subtitle: "The Queen of Winter Treks in Uttarakhand Himalayas",
    description: "Kedarkantha is the ultimate winter summit trek, famous for its perfect pine forests, snow-covered meadows, and an exhilarating 360-degree view of Himalayan peaks like Swargarohini, Black Peak, and Bandarpoonch from the summit at 12,500 feet. Starting from the beautiful heritage village of Sankri, this trek is ideal for beginners and experienced trekkers alike.",
    price: 5499,
    originalPrice: 7999,
    duration: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    altitude: "12,500 ft",
    location: "Sankri, Uttarakhand",
    rating: 4.9,
    reviewsCount: 382,
    season: "Winter",
    image: "/images/treks/kedarkantha.jpg",
    highlights: [
      "Venture through pristine snow-covered pine forests of Govind Pashu Vihar National Park",
      "Camp beside the frozen Kedarkantha Lake under a canopy of countless stars",
      "Witness a breathtaking golden sunrise from the summit of Kedarkantha (12,500 ft)",
      "Explore the traditional wooden houses and mountain culture of Sankri and Juda base camps",
      "Perfect introduction to winter snow trekking with professional Himalayan guides"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Sankri (6,400 ft) - 190 km (7-8 hours). Scenic drive along Yamuna and Tons rivers.",
      "Day 2: Trek from Sankri to Juda Ka Talab (9,100 ft) - 4 km (3-4 hours). Walk through dense pine trees and maple forests.",
      "Day 3: Trek from Juda Ka Talab to Kedarkantha Base Camp (11,250 ft) - 4 km (3 hours). Open snow fields and views of mountain peaks.",
      "Day 4: Summit Day! Trek from Base Camp to Kedarkantha Summit (12,500 ft) and descend to Hargaon (8,900 ft) - 9 km (6-7 hours).",
      "Day 5: hargaon to Sankri base (4 km, 2-3 hours) and drive back to Dehradun (190 km, 7-8 hours)."
    ],
    inclusions: [
      "Transport from Dehradun to Sankri base camp and return",
      "Stays in wooden homestays/guest houses at Sankri (triple sharing)",
      "High-grade mountain tents, sleeping bags, liners, and foam mattresses during trek",
      "All vegetarian nutritious meals (breakfast, lunch, evening snacks, hot dinner)",
      "Certified Wilderness First Responder Trek Leaders and local mountain guides",
      "Safety equipment including oxygen cylinders, stretcher, microspikes, and gaiters",
      "Forest department entry permits, camping permits, and environment fees"
    ],
    exclusions: [
      "Backpack offloading charges (approx. ₹300 per day if opted)",
      "Any meals during transit (Dehradun to Sankri and back)",
      "Personal clothing, trekking gear (rental available at Sankri)",
      "Anything not explicitly mentioned in inclusions"
    ],
    faqs: [
      {
        question: "Is Kedarkantha suitable for first-timers?",
        answer: "Yes, it is the most popular trek for beginners who want to experience snow and mountain summits. Standard physical fitness is sufficient."
      },
      {
        question: "What temperature can I expect in winter?",
        answer: "Day temperatures range between 8°C to 15°C, while night temperatures at the base camp can drop to -5°C or -10°C. Proper layering is essential."
      },
      {
        question: "Is there mobile network on the trek?",
        answer: "BSNL and Jio work intermittently at Sankri base camp. There is no mobile network once you start trekking from Sankri."
      }
    ]
  },
  {
    id: "brahmatal",
    slug: "brahmatal-trek",
    title: "Brahmatal Trek",
    subtitle: "Walk the Legendary Trail of Lord Brahma with Frozen Lakes",
    description: "The Brahmatal Trek offers a rare winter journey to a high-altitude lake shrouded in mythology. The trail winds through deep oak and rhododendron forests, opening up to majestic views of Mount Trishul and Nanda Ghunti. Standing beside the frozen Brahmatal Lake at 12,250 ft is an unforgettable spiritual and adventurous peak experience.",
    price: 6499,
    originalPrice: 8999,
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    altitude: "12,250 ft",
    location: "Lohajung, Uttarakhand",
    rating: 4.8,
    reviewsCount: 247,
    season: "Winter",
    image: "/images/treks/brahmatal.jpg",
    highlights: [
      "Camp next to the snow-bound shores of Brahmatal Lake and Bekaltal Lake",
      "Feast your eyes on the towering views of Mt. Trishul and Mt. Nanda Ghunti close-up",
      "Trek through ancient, snowy oak and flame-red rhododendron forests",
      "Experience the local Kumaoni hospitality at Lohajung base village",
      "Magnificent views of the Ali Bugyal and Bedni Bugyal alpine ridges"
    ],
    itinerary: [
      "Day 1: Drive from Rishikesh/Dehradun to Lohajung (7,600 ft) - 220 km (8-9 hours). Crossing scenic valleys of Devprayag and Karnaprayag.",
      "Day 2: Trek from Lohajung to Bekaltal (9,690 ft) - 6 km (4-5 hours). Hike through forests with views of the Shivalik range.",
      "Day 3: Trek from Bekaltal to Brahmatal (10,440 ft) - 7 km (5-6 hours). Trail climbs through oak groves to reach the open meadows.",
      "Day 4: Trek from Brahmatal to Brahmatal Peak (12,250 ft) and back to Daldum (8,600 ft) - 8 km (6-7 hours). Spectacular panorama of peaks.",
      "Day 5: Trek from Daldum to Lohajung - 4 km (3 hours). Relish hot showers and sleep in guest houses.",
      "Day 6: Drive from Lohajung to Rishikesh/Dehradun - 220 km (8-9 hours) with lifetime memories."
    ],
    inclusions: [
      "Pick up and drop transport from Rishikesh/Dehradun to base camp",
      "Stays in cozy homestays at Lohajung (triple sharing)",
      "High-altitude dome tents, warm sleeping bags, and fleece liners",
      "Freshly prepared nutritious veg meals (local delicacies included)",
      "Experienced local guides, helpers, cook, and certified trek leaders",
      "First aid kit, oxygen cylinders, microspikes, and safety gaiters",
      "Permits, entry tickets, and eco taxes"
    ],
    exclusions: [
      "Insurance and medical evacuation costs",
      "Backpack carrying charges (₹350 per day)",
      "Personal items, thermal wear, and trekking boots",
      "Meals during travel days"
    ],
    faqs: [
      {
        question: "How cold does it get at Brahmatal?",
        answer: "Brahmatal is a winter trek. Winter nights (Dec-Feb) go down to -8°C. Double sleeping bags are provided by our team to keep you cozy."
      },
      {
        question: "Is there emergency support on this trek?",
        answer: "Yes, our guides carry satellite messaging devices or have local contacts. We always carry oxygen cylinders and first aid kits."
      }
    ]
  },
  {
    id: "kuari-pass",
    slug: "kuari-pass-trek",
    title: "Kuari Pass Trek",
    subtitle: "Follow Lord Curzon's Trail to Spectacular Mountain Panoramas",
    description: "Kuari Pass, also known as Lord Curzon's trail, is an iconic mountain crossing in the Garhwal region. The highlight is the unparalleled, massive views of India's highest peaks, including Mt. Nanda Devi (25,643 ft), Mt. Dronagiri, Hathi Parbat, and Kamet. Walking through the pristine meadows of Gorson Bugyal and camping at Chitrakantha is a true wilderness dream.",
    price: 6999,
    originalPrice: 9499,
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    altitude: "12,516 ft",
    location: "Joshimath, Uttarakhand",
    rating: 4.8,
    reviewsCount: 198,
    season: "Spring",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Stunning panoramas of India's second-highest mountain, Mt. Nanda Devi",
      "Trek through lush green alpine meadows of Gorson Bugyal, Auli",
      "Witness a pristine white wilderness during the snow season (December - March)",
      "Camp in scenic forests of Khullara and Chitrakantha",
      "Visit Joshimath, the gateway to Badrinath and Hemkund Sahib"
    ],
    itinerary: [
      "Day 1: Drive from Haridwar/Rishikesh to Joshimath (6,150 ft) - 250 km (9 hours). Drive along Alaknanda river valley.",
      "Day 2: Drive to Dhak village (40 mins), trek to Guling camp (9,800 ft) - 6 km (4-5 hours) through oak forests.",
      "Day 3: Trek from Guling to Khullara camp (11,100 ft) - 5 km (4 hours) alongside alpine clear streams.",
      "Day 4: Summit Day! Trek from Khullara to Kuari Pass summit (12,516 ft) and back to Tali camp - 8 km (6-7 hours). Close views of Nanda Devi.",
      "Day 5: Trek from Tali camp to Auli and drive to Joshimath - 8 km (5 hours). Enjoy the ski resort of Auli.",
      "Day 6: Drive from Joshimath to Haridwar/Rishikesh - 250 km (9 hours)."
    ],
    inclusions: [
      "Comfortable transport from Haridwar/Dehradun to Joshimath and back",
      "2 Nights hotel/guesthouse stay in Joshimath (triple sharing)",
      "3 Nights camping in high-grade tents during the trek",
      "Nutritious hot vegetarian meals (Breakfast, Lunch, Snacks, Dinner)",
      "Certified Himalayan trek leaders and local expert guides",
      "Camping permissions, forest fees, and safety equipment"
    ],
    exclusions: [
      "Skiing rentals or cable car tickets in Auli",
      "Personal trekking gear and backpack offloading",
      "Meals during travel days"
    ],
    faqs: [
      {
        question: "Can I do this trek in winter?",
        answer: "Yes, Kuari Pass turns into a white wonderland between December and March, offering amazing snow trailing. It is highly recommended."
      },
      {
        question: "Do I need to carry mineral water?",
        answer: "We source water from fresh, pure Himalayan mountain springs. It is perfectly clean and safe to drink. You can carry purification tablets if preferred."
      }
    ]
  },
  {
    id: "valley-of-flowers",
    slug: "valley-of-flowers-trek",
    title: "Valley of Flowers Trek",
    subtitle: "Trek to the UNESCO World Heritage Site in Full Monsoon Bloom",
    description: "The Valley of Flowers is a UNESCO World Heritage site situated in North Chamoli, Uttarakhand. During the monsoon months of July, August, and September, the valley explodes into a vibrant canvas of over 500 species of alpine flowers, surrounded by towering snow-capped peaks. The trek also visits Hemkund Sahib, the highest Gurudwara in the world.",
    price: 7499,
    originalPrice: 10999,
    duration: "6 Days / 5 Nights",
    difficulty: "Moderate",
    altitude: "14,400 ft",
    location: "Govindghat, Uttarakhand",
    rating: 4.9,
    reviewsCount: 312,
    season: "Monsoon",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Explore the UNESCO World Heritage Site filled with millions of wild alpine flowers",
      "Visit Hemkund Sahib, a sacred high-altitude lake surrounded by 7 glaciers",
      "Trek along the gushing Pushpawati River and Laxman Ganga",
      "Beautiful flora species like the rare Blue Poppy and Brahma Kamal",
      "Safe, well-paved trails ideal for family groups and adventure lovers"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun/Rishikesh to Govindghat (6,300 ft) - 260 km (9-10 hours). Along the holy Ganga and Alaknanda rivers.",
      "Day 2: Drive from Govindghat to Pulna (4 km), then trek to Ghangaria (9,800 ft) - 9 km (5-6 hours). Well-defined, crowded trail.",
      "Day 3: Trek from Ghangaria to Valley of Flowers (11,500 ft) and return - 8 km (6 hours). Explore the infinite fields of blossoms.",
      "Day 4: Trek from Ghangaria to Hemkund Sahib (14,400 ft) and return - 10 km (7-8 hours). Steep climb but rewarding glacier views.",
      "Day 5: Trek from Ghangaria to Pulna (9 km) and drive back to Govindghat. Sleep in hotel.",
      "Day 6: Drive from Govindghat to Dehradun/Rishikesh - 260 km (9-10 hours)."
    ],
    inclusions: [
      "Transport by private AC Tempo Traveller or SUV from Dehradun and back",
      "Guesthouse/Hotel rooms in Govindghat and Ghangaria (triple sharing)",
      "Tasty vegetarian meals on the trek",
      "Qualified local guides, permit fees, and entry passes to the National Park",
      "Medical kit, stretchers, and emergency support"
    ],
    exclusions: [
      "Pony, mule, or helicopter charges for transport on the trek",
      "Personal raincoat, waterproof gear, and backpacks",
      "Meals on travel days"
    ],
    faqs: [
      {
        question: "When is the best time to visit Valley of Flowers?",
        answer: "July, August, and early September are the only months when the flowers bloom due to monsoon rains. The valley is closed for the rest of the year."
      },
      {
        question: "Is this trek difficult?",
        answer: "It is moderate. The trail is well-maintained and has stone paving, but includes steep climbs, especially to Hemkund Sahib (14,400 ft)."
      }
    ]
  },
  {
    id: "har-ki-dun",
    slug: "har-ki-dun-trek",
    title: "Har Ki Dun Trek",
    subtitle: "Journey to the Valley of Gods & Ancient Mahabharata Legends",
    description: "Har Ki Dun is a cradle-shaped valley in the Garhwal Himalayas, steeped in mythology. Legend has it that the Pandavas ascended to heaven via this very valley. Trekking through the ancient villages of Osla, Gangaad, and Taluka, you will see centuries-old wooden architecture and meet locals living a traditional lifestyle. The valley offers stunning views of Swargarohini peaks.",
    price: 7999,
    originalPrice: 11999,
    duration: "7 Days / 6 Nights",
    difficulty: "Easy to Moderate",
    altitude: "11,700 ft",
    location: "Sankri, Uttarakhand",
    rating: 4.8,
    reviewsCount: 165,
    season: "Summer",
    image: "/images/treks/har-ki-dun.jpg",
    highlights: [
      "Trek through ancient villages like Osla, containing unique wood-carved temples",
      "Stunning sights of Swargarohini I, II, III, Bandarpoonch, and Black Peak",
      "Hike alongside the cascading Supin River through lush green conifer forests",
      "Camp in the wide, meadowed Valley of Gods with cold glacial breezes",
      "Excellent birdwatching opportunities in Govind Pashu Vihar sanctuary"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Sankri (6,400 ft) - 190 km (7-8 hours).",
      "Day 2: Drive from Sankri to Taluka (1 hour). Trek to Seema camp (8,200 ft) - 14 km (5-6 hours) alongside Supin river.",
      "Day 3: Trek from Seema to Har Ki Dun Valley (11,700 ft) - 10 km (5 hours). Gradual climb through forests and bridges.",
      "Day 4: Exploration day! Visit Jaundhar Glacier or Maninda Tal and return to Har Ki Dun camp - 6 km (4 hours).",
      "Day 5: Trek from Har Ki Dun back to Seema camp - 10 km (4 hours). Visit the ancient village of Osla.",
      "Day 6: Trek from Seema to Taluka (14 km) and drive to Sankri. Cozy homestay night.",
      "Day 7: Drive from Sankri back to Dehradun - 190 km (7-8 hours)."
    ],
    inclusions: [
      "Transit vehicle from Dehradun to base camp Sankri and back",
      "Homestay stays in Sankri, high-quality tents during trek",
      "Freshly prepared meals (3 course vegetarian menu)",
      "Forest permissions, camping charges, and entry permits",
      "Experienced mountain guides, cooks, and helpers",
      "First aid and rescue gear"
    ],
    exclusions: [
      "Personal porter services",
      "Gear rental (hiking poles, boots, ponchos)",
      "Meals on travel days"
    ],
    faqs: [
      {
        question: "Can children join this trek?",
        answer: "Yes! Because of the gradual slope and well-defined trail, kids above 9 years with basic stamina can complete this trek safely."
      },
      {
        question: "Is electricity available on the trek?",
        answer: "Electricity is only available at Sankri base camp. We recommend carrying a high-capacity power bank (20,000mAh+) for the trek."
      }
    ]
  },
  {
    id: "hampta-pass",
    slug: "hampta-pass-trek",
    title: "Hampta Pass Trek",
    subtitle: "Experience a Dramatic Contrast from Lush Green Valleys to Cold Desert Dunes",
    description: "The Hampta Pass Trek in Himachal Pradesh is a unique crossover trek. It starts from the green, alpine forests of Manali and crosses over the high pass (14,100 ft) into the dry, barren, and wind-sculpted cold desert of Spiti Valley. The trek concludes with a visit to the ethereal, crescent-shaped Chandratal Lake (Moon Lake).",
    price: 6499,
    originalPrice: 8999,
    duration: "5 Days / 4 Nights",
    difficulty: "Moderate to Difficult",
    altitude: "14,100 ft",
    location: "Manali, Himachal Pradesh",
    rating: 4.9,
    reviewsCount: 154,
    season: "Summer",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Stunning crossover trail from the wet valleys of Kullu to dry Spiti cold desert",
      "Exciting river crossings and walking on towering glacial snow bridges",
      "Cross the high Hampta Pass at 14,100 ft with massive views of Indrasan peak",
      "Camp at the majestic moon-shaped Chandratal Lake in Spiti Valley",
      "Scenic drive through the engineering marvel - Atal Tunnel"
    ],
    itinerary: [
      "Day 1: Drive from Manali to Jobra base (9,800 ft). Trek to Chika camp (10,100 ft) - 3 km (2 hours) through forests.",
      "Day 2: Trek from Chika to Balu Ka Gera (11,900 ft) - 8 km (5-6 hours). Gradual climb through spectacular rocky valley.",
      "Day 3: Pass Day! Trek from Balu Ka Gera to Shea Goru (12,900 ft) via Hampta Pass (14,100 ft) - 9 km (7-8 hours). Steep snow climb.",
      "Day 4: Trek from Shea Goru to Chatru (11,000 ft) - 6 km (4 hours). Drive to the magical Chandratal Lake and camp at Chatru.",
      "Day 5: Drive from Chatru/Chandratal back to Manali via Atal Tunnel - 80 km (4-5 hours)."
    ],
    inclusions: [
      "Transport from Manali to Jobra, and Chatru/Chandratal back to Manali",
      "Alpine tents, clean sleeping bags, liners, and mattresses",
      "Healthy vegetarian meals throughout the trek days",
      "Certified trek guides, kitchen staff, and safety coordinators",
      "Inner Line Permits for Spiti Valley and environment clearance fees"
    ],
    exclusions: [
      "Meals in Manali town",
      "Rental gear and personal trekking clothes",
      "Backpack loading on horses (₹400 per day)"
    ],
    faqs: [
      {
        question: "Is Chandratal Lake visit always guaranteed?",
        answer: "Usually yes, but it depends on the road conditions of Rohtang/Kunzum pass. In case of heavy early snow blockages, safety redirects are done."
      },
      {
        question: "Is river crossing dangerous?",
        answer: "We carry specialized ropes and our guides are trained to help everyone cross safely at early morning hours when water volume is lowest."
      }
    ]
  },
  {
    id: "rupin-pass",
    slug: "rupin-pass-trek",
    title: "Rupin Pass Trek",
    subtitle: "A High Altitude Crossover Expedition with Three-Stage Waterfalls",
    description: "Rupin Pass is a classic, high-altitude crossover expedition starting from Dhaula in Uttarakhand and ending in Sangla, Himachal Pradesh. The trek is legendary for its ever-changing scenery: walking along deep gorges, traversing hanging villages, climbing a steep snow gully, and witnessing the jaw-dropping three-stage Rupin waterfall cascading from 11,000 ft.",
    price: 12999,
    originalPrice: 16999,
    duration: "8 Days / 7 Nights",
    difficulty: "Difficult",
    altitude: "15,250 ft",
    location: "Dhaula, Uttarakhand to Sangla, Himachal",
    rating: 4.9,
    reviewsCount: 128,
    season: "Summer",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Cross the high Rupin Pass (15,250 ft) using crampons and safety ropes",
      "Witness the spectacular, roaring three-stage Rupin Waterfall up-close",
      "Traverse from traditional Garhwali villages to Kinnauri cultures in Himachal",
      "Camp in the dreamy, hanging meadows of Saruwas Thach and Lower Waterfall",
      "Thrilling climb through the steep, narrow snow gully of Rupin Pass"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Dhaula (5,100 ft) - 180 km (7-8 hours).",
      "Day 2: Trek from Dhaula to Sewa (6,300 ft) - 9 km (5 hours). Walk through deep forest gorges.",
      "Day 3: Trek from Sewa to Jiskun (7,600 ft) - 8 km (5 hours). Cross the border river into Himachal Pradesh.",
      "Day 4: Trek from Jiskun to Udaknal (10,100 ft) - 9 km (6 hours) through wild rhododendron glades.",
      "Day 5: Trek from Udaknal to Lower Waterfall Camp (11,700 ft) - 6 km (4 hours). Amazing views of the cascading fall.",
      "Day 6: Trek to Upper Waterfall Camp (13,100 ft) - 3 km (3 hours). Acclimatization and snow walk briefing.",
      "Day 7: Pass Day! Trek from Upper Waterfall to Sangla (Himachal) via Rupin Pass (15,250 ft) - 12 km (9-10 hours). Epic climb and descent.",
      "Day 8: Drive from Sangla to Shimla or back to Dehradun - 220 km (8 hours)."
    ],
    inclusions: [
      "Transport from Dehradun to Dhaula and Sangla to Shimla/Dehradun",
      "Accommodation in top-grade tents and local homestays",
      "Nutritious high-altitude meals with warm energy drinks",
      "Certified expedition leaders, technical guides, cook, and helpers",
      "Technical gear: Microspikes, gaiters, safety harnesses, and ropes",
      "Permits, entry fees, and conservation fees"
    ],
    exclusions: [
      "Backpack offloading (₹450/day due to steep ascends)",
      "Personal extreme cold wear (down jackets, winter gloves)",
      "Meals on travel days"
    ],
    faqs: [
      {
        question: "Is this trek recommended for beginners?",
        answer: "No, Rupin Pass is a difficult trek with steep snow slopes and high altitude. Trekkers should have completed at least 2 moderate Himalayan treks prior."
      },
      {
        question: "Do I need physical training?",
        answer: "Yes, you must be able to run 5km in under 30 minutes and have good core strength. Acclimatization is key to a safe climb."
      }
    ]
  },
  {
    id: "dayara-bugyal",
    slug: "dayara-bugyal-trek",
    title: "Dayara Bugyal Trek",
    subtitle: "Trek to India's Most Beautiful and Expansive Alpine Meadows",
    description: "Dayara Bugyal is widely regarded as one of the most stunning alpine meadows in Asia. Bugyal in local language means high-altitude meadow. Spanning over 28 square kilometers, this undulating grassland turns into a lush green carpet in summer, dotted with wildflowers, and a smooth white ski slope in winter, offering clear views of Bandarpoonch peak.",
    price: 4999,
    originalPrice: 6999,
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    altitude: "12,100 ft",
    location: "Raithal, Uttarakhand",
    rating: 4.8,
    reviewsCount: 142,
    season: "Autumn",
    image: "/images/treks/dayara-bugyal.jpg",
    highlights: [
      "Walk on the endless, rolling green pastures of Dayara Bugyal (12,100 ft)",
      "Spectacular, uninterrupted views of the Bandarpoonch and Gangotri ranges",
      "Camp inside lovely oak tree clearings at Barnala Tal and Gui",
      "Explore the traditional farming practices of Raithal village",
      "Best weekend escape for families, photography clubs, and corporate groups"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Raithal base (7,400 ft) - 180 km (6-7 hours). Drive along the Bhagirathi river.",
      "Day 2: Trek from Raithal to Gui camp (9,500 ft) - 4 km (3-4 hours). Gradual walk through dense forest trail.",
      "Day 3: Trek from Gui to Dayara Bugyal meadows (12,100 ft) and return to Chilapada - 7 km (5 hours). Walk on the green plateau.",
      "Day 4: Trek from Chilapada to Raithal (4 km) and drive back to Dehradun (180 km) arriving by evening."
    ],
    inclusions: [
      "Dehradun to Raithal transport and return",
      "Stays in clean local village homestays and camping tents",
      "Healthy vegetarian meals (cooked fresh at camps)",
      "Certified trek guides, entry fees, permits, and first aid support"
    ],
    exclusions: [
      "Backpack offloading or porter tips",
      "Transit meals on travel days",
      "Personal items"
    ],
    faqs: [
      {
        question: "Can we see snow here?",
        answer: "Yes, from December to March, the entire 28 sq km meadow gets blanketed under deep, powdery snow, making it a hot spot for snow shoeing."
      },
      {
        question: "Is there drinking water on the trail?",
        answer: "Yes, there are multiple water sources and streams along the way. Our guides will filter and provide clean drinking water."
      }
    ]
  },
  {
    id: "nag-tibba",
    slug: "nag-tibba-trek",
    title: "Nag Tibba Weekend Trek",
    subtitle: "Conquer the Highest Peak in the Lesser Himalayan Range over a Weekend",
    description: "Nag Tibba, also known as Serpent's Peak, is the highest peak in the Shivalik range of Uttarakhand. It is a classic weekend trek starting from Dehradun, passing through quiet villages and dense forests of oak and deodar. The summit (9,915 ft) offers an outstanding view of the snow-laden peaks of Gangotri, Yamunotri, and Kedarnath.",
    price: 2499,
    originalPrice: 3999,
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    altitude: "9,915 ft",
    location: "Pantwari, Uttarakhand",
    rating: 4.7,
    reviewsCount: 320,
    season: "All Seasons",
    image: "/images/treks/nag-tibba.jpg",
    highlights: [
      "Climb to the highest point of Mussoorie foothills (9,915 ft) in just 2 days",
      "Spectacular sunset and sunrise camping views above the clouds",
      "Hike through thick oak and deodar forests home to Himalayan birds",
      "Pay respects at the sacred Nag Devta Temple near the base camp",
      "Perfect escape from Mussoorie or Dehradun crowds"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Pantwari (3 hours). Trek to Nag Tibba Base Camp (8,500 ft) - 5 km (3 hours). Beautiful ridge camping.",
      "Day 2: Early morning hike to Nag Tibba Summit (9,915 ft) - 3 km. Descend to Pantwari village and drive back to Dehradun."
    ],
    inclusions: [
      "Pick up from Dehradun Railway Station/Airport and return in SUV/Traveller",
      "Camping accommodation (twin/triple sharing) with high quality sleeping bags",
      "Fresh breakfast, lunch, snacks, and dinner",
      "Himalayan trek leaders, guides, entry permissions, and first aid kits"
    ],
    exclusions: [
      "Personal mule or porter service",
      "Any snacks/beverages bought along the route",
      "Travel insurance"
    ],
    faqs: [
      {
        question: "Is this trek doable in 1 day?",
        answer: "Yes, it is possible but very exhausting. Doing it in 2 days allows you to camp under the stars and witness the sunrise, which is the best part."
      },
      {
        question: "What is the best month to visit Nag Tibba?",
        answer: "It can be visited throughout the year. Winter (Jan-Feb) offers snow, while spring (Mar-Apr) offers rhododendron blooms."
      }
    ]
  },
  {
    id: "bali-pass",
    slug: "bali-pass-trek",
    title: "Bali Pass Trek",
    subtitle: "A High-Altitude Glacier Crossing Linking Har Ki Dun and Yamunotri",
    description: "Bali Pass is an adventurous, high-altitude alpine pass crossing at 16,200 ft. It connects the ancient, culture-rich Har Ki Dun valley to the holy shrine of Yamunotri. It is a challenging trek suited only for seasoned trekkers, involving steep climbs over loose scree, walking on glacial moraines, and crossing the massive glacier field before descending to the hot springs of Yamunoti.",
    price: 14499,
    originalPrice: 19999,
    duration: "8 Days / 7 Nights",
    difficulty: "Difficult",
    altitude: "16,200 ft",
    location: "Sankri to Janki Chatti, Uttarakhand",
    rating: 4.9,
    reviewsCount: 84,
    season: "Autumn",
    image: "/images/treks/bali-pass.jpg",
    highlights: [
      "Challenge yourself with a steep, technical crossing of Bali Pass (16,200 ft)",
      "Unbelievable close-up sights of the ruinsara range, Swargarohini, and Bandarpoonch",
      "Camp beside the sacred Ruinsara Lake surrounded by glacial streams",
      "Visit the Yamunotri temple, one of the Char Dhams, and soak in hot sulfur springs",
      "Trek through remote, ancient mountain forests and meadows"
    ],
    itinerary: [
      "Day 1: Drive from Dehradun to Sankri (6,400 ft) - 190 km.",
      "Day 2: Drive to Taluka. Trek to Seema camp (8,200 ft) - 14 km.",
      "Day 3: Trek from Seema to Ruinsara Lake (11,150 ft) - 12 km (6 hours). Camp by the beautiful mountain lake.",
      "Day 4: Trek from Ruinsara Lake to Odari camp (13,100 ft) - 5 km (4 hours). High-altitude acclimatization walks.",
      "Day 5: Trek from Odari to Bali Pass Base Camp (15,100 ft) - 4 km (3-4 hours) over moraine slopes.",
      "Day 6: Pass Day! Trek from Base Camp to Bali Pass (16,200 ft) and descend to Lower Dhamni (11,100 ft) - 10 km (8-9 hours). Ropes used.",
      "Day 7: Trek to Yamunotri Temple and descend to Janki Chatti. Stay in hotel.",
      "Day 8: Drive from Janki Chatti back to Dehradun - 220 km (8-9 hours)."
    ],
    inclusions: [
      "Full logistics transport from Dehradun to Sankri, and Janki Chatti back to Dehradun",
      "Hotel rooms at Sankri and Janki Chatti, high quality dome tents on trek",
      "Specialized mountaineering guides, certified cooks, and support porters",
      "Technical equipment: Crampons, gaiters, safety ropes, ice axes, helmets",
      "All meals (high calorie vegetarian menu), permissions, and forest passes"
    ],
    exclusions: [
      "Backpack offloading charges",
      "Emergency helicopter evacuation costs",
      "Thermal wear and specialized hiking boots"
    ],
    faqs: [
      {
        question: "How difficult is the descent from Bali Pass?",
        answer: "The descent toward Yamunotri is extremely steep with loose gravel and snow. Ropes are anchored by our guides to ensure everyone descends safely."
      },
      {
        question: "Do I need medical approval?",
        answer: "Yes, a medical certificate signed by a registered practitioner showing physical fitness and clear blood pressure is mandatory."
      }
    ]
  }
];

export const BLOGS: Blog[] = [
  {
    id: "winter-trekking-essentials",
    slug: "winter-trekking-essentials",
    title: "Winter Trekking in Himalayas: The Ultimate Layering Guide",
    excerpt: "Conquering Kedarkantha or Brahmatal in sub-zero winter temperatures requires smart packing. Learn how to layer clothes like a professional Himalayan guide.",
    content: `Winter in the Himalayas is a magical experience. Walking over powdery snow, seeing frozen lakes, and breathing the crisp mountain air is unmatched. However, when the sun goes down, temperatures in camps like Juda Ka Talab (Kedarkantha) or Bekaltal (Brahmatal) can plummet to -8°C or lower.

To stay warm and comfortable, you don't need heavy, bulky jackets. You need a smart, scientific layering system. Here is the 3-layer rule followed by our expert trek leaders at Himalayan Warrior.

### 1. The Base Layer: Moisture Management
The primary job of the base layer is to keep sweat away from your skin. When you walk, you sweat; if that sweat cools on your skin, you will feel freezing immediately.
* **What to wear**: Polyester or Merino wool thermal innerwear.
* **What to avoid**: Cotton. Cotton retains moisture and dries slowly, which is a recipe for hypothermia.

### 2. The Mid Layer: Heat Retention
The mid layer traps your body heat. It should create a cushion of warm air around you.
* **What to wear**: A high-quality fleece jacket or a lightweight down sweater jacket. On extremely cold nights, you can wear both.
* **Tip**: Zippers are great because they allow you to vent air if you feel too warm while walking.

### 3. The Outer Layer: Weather Protection
The outer layer protects you from wind, rain, and snow. In winter, wind-chill can make 0°C feel like -10°C.
* **What to wear**: A windproof, waterproof shell jacket (hardshell) or a thick, padded down jacket.
* **Important**: Make sure it has a hood to cover your head and ears.

### Bonus: Protecting the Extremities
Your body prioritizes keeping your core warm, which means blood flow to your hands and feet drops first.
* **Head**: A woolen beanie or balaclava.
* **Hands**: Waterproof outer gloves with fleece liners.
* **Feet**: Woolen socks (carry at least 2 pairs for sleeping, never wear wet socks to bed).

*Layer up, stay warm, and let the Himalayan peaks take your breath away!*`,
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    date: "June 22, 2026",
    author: "Pratap Singh Rana",
    tags: ["Safety", "Winter Trekking", "Gear Guide"]
  },
  {
    id: "sustainable-tourism-himalayas",
    slug: "sustainable-tourism-himalayas",
    title: "Leaving No Trace: Preserving the Heritage of Himalayas",
    excerpt: "At Himalayan Warrior, our mission goes beyond business. Discover how we practice eco-tourism and how you can join us in protecting the delicate mountain ecosystem.",
    content: `The Himalayas are not just a tourist destination; they are a source of life for millions of people and a delicate habitat for rare wildlife like the Snow Leopard, Himalayan Monal, and Musk Deer. With the boom in trekking tourism, trails like Kedarkantha and Har Ki Dun are facing severe waste management challenges.

At Himalayan Warrior, we believe in the philosophy of **"Take nothing but memories, leave nothing but footprints."** Here is how we run eco-friendly expeditions and how you can help.

### Our Green Practices on the Trail
1. **Eco-friendly Camp Waste Management**: All non-biodegradable waste generated during our treks is collected in garbage bags and brought back to Dehradun or Rishikesh base stations for proper recycling.
2. **Support Local Communities**: We employ local guides, cooks, mule owners, and source fresh organic vegetables from village farms. This supports the mountain economy and prevents migration.
3. **No Plastics Policy**: We encourage trekkers to carry reusable water bottles and thermos flasks instead of buying single-use plastic water bottles.
4. **Vegetarian Menu**: We serve purely vegetarian, locally sourced food. Livestock farming for meat on high ridges puts immense pressure on fragile grasslands.

### How You Can Be a Green Trekker
* **Pack out your trash**: Never throw chocolate wrappers, wet wipes, or plastic bottles on the trail. Keep a small zip-lock bag in your pocket for personal trash.
* **Use bio-toilets responsibly**: Always cover waste with soil or sawdust provided in toilet tents. Never throw wet wipes or sanitary pads into bio-toilet pits.
* **Respect the wildlife**: Keep noise levels low. Play no loud music on Bluetooth speakers. The mountains are a sanctuary of silence.

*Let's climb responsibly so that future generations can experience the raw, unblemished beauty of these sacred heights.*`,
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    date: "June 18, 2026",
    author: "Deepa Bhandari",
    tags: ["Eco Tourism", "Sustainability", "Himalayas"]
  }
];
