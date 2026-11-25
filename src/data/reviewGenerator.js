/**
 * Deep Multi-Sentence Combinatorial Review Permutation Engine
 * Generates 1,000,000+ unique, non-repeating, high-converting Google 5-Star & 4-Star SEO reviews.
 * Custom built for Barani car Accessories (Cumbum, Theni District).
 */

const SEED_OPENERS_5_STAR = [
  "Hands down the best car modification and accessories shop in Cumbum!",
  "Had an extraordinary car upgrade experience at Barani car Accessories today!",
  "If you want genuine car accessories and flawless modification in Theni district, Barani car Accessories is the top choice!",
  "Recently took my vehicle to Barani car Accessories Cumbum and the transformation is unbelievable!",
  "Blown away by the exceptional standard of work delivered at Barani car Accessories!",
  "One of the most professional and trustworthy car customisation centres in the entire Theni region.",
  "10/10 recommendation for Barani car Accessories! Super satisfied with their service and workmanship.",
  "Got my car customized here and the craftsmanship is completely next level!",
  "Top-tier automotive accessories and modification destination in Cumbum.",
  "Outstanding customer service and genuine car styling products at Barani car Accessories.",
  "Truly impressed by the technical expertise and neat execution by the team at Barani car Accessories!",
  "Barani car Accessories in Cumbum has set a new benchmark for car accessories and detailing!",
  "Genuinely thrilled with the upgrade work done on my car today!",
  "Best place in Cumbum for car enthusiasts who want high-end styling and perfection.",
  "Visited Barani car Accessories after hearing so many positive recommendations, and they lived up to every bit of hype!",
  "A truly 5-star experience from start to finish at Barani car Accessories Cumbum!"
];

const SEED_OPENERS_4_STAR = [
  "Really good car accessories and modification shop in Cumbum.",
  "Had a very pleasant and satisfactory car styling experience at Barani car Accessories.",
  "Great place in Theni district to get your car fitted with quality accessories.",
  "Solid 4-star workmanship on my vehicle at Barani car Accessories Cumbum.",
  "Prompt service and good quality automotive fittings at fair prices.",
  "Happy with the accessory installation and overall care taken by the team.",
  "Reliable and skilled car modification workshop in Cumbum town.",
  "Good experience getting my car accessories upgraded at Barani car Accessories."
];

const SERVICE_TEMPLATES = {
  default: [
    "Got complete car custom accessories and interior styling done here.",
    "Installed premium accessories with absolute precision and care.",
    "Had custom car fittings and styling upgrades completed seamlessly.",
    "Got my vehicle upgraded with top-brand accessories and fittings."
  ],
  audio: [
    "The Android touch screen display and premium audio setup they installed has crystal-clear sound and punchy bass.",
    "Installed an Android infotainment system along with custom speakers and HD reverse camera, and the audio clarity is phenomenal.",
    "Got a high-end car stereo with DSP sound tuning and subwoofer box fitted; the music experience is now incredible.",
    "The touchscreen infotainment and speaker upgrade was done with zero wire-cutting and factory-like integration."
  ],
  seats: [
    "The custom bucket-fit leather seat covers and 7D floor mats gave the cabin an ultra-luxurious, premium look.",
    "Installed tailor-made leather seat covers with precision stitching and custom steering wheel wrap.",
    "The interior upholstery and comfort fit seat covers look identical to high-end OEM factory finish.",
    "Got customized bucket seating and full floor lamination; the cabin feels fresh, stylish, and super comfortable."
  ],
  lighting: [
    "The projector headlights, Bi-LED fog lamps, and custom app-controlled ambient lighting look stunning at night.",
    "Upgraded the lighting with high-power LEDs and dynamic DRLs, providing massive night visibility and head-turning looks.",
    "Installed ambient interior cabin lights and projector headlamps with clean relay wiring.",
    "The dynamic matrix lighting and bright LED setup transformed the front fascia and nighttime driving road presence."
  ],
  body: [
    "The custom sporty spoiler, body kit diffusers, and alloy wheel upgrade gave my car an aggressive road stance.",
    "Got side skirts, front diffuser, and custom de-chroming done with spotless alignment.",
    "The exterior styling accessories and body modifications look super sleek and athletic.",
    "Alloy wheel fitment and exterior styling accessories were installed with perfect balance and alignment."
  ],
  coating: [
    "The 9H ceramic paint protection coating and heat-rejection sun control film made the car shine like glass while keeping the cabin cool.",
    "Got heat-shield sun film and ceramic gloss coating done; the paint reflection and UV protection are outstanding.",
    "The paint protection film (PPF) and anti-glare sun control film were applied without a single bubble.",
    "Complete body ceramic polishing and sun film installation has significantly enhanced the gloss and thermal insulation."
  ],
  cleaning: [
    "The deep interior steam spa and exterior foam wash made the vehicle look and smell brand new.",
    "Their detailing team did an extensive interior cleaning, stain removal, and glass polishing job.",
    "Spotless interior detailing, dashboard conditioning, and thorough foam wash with high attention to detail.",
    "Complete car detailing and hygienic interior steam cleaning executed to absolute perfection."
  ]
};

const WORKMANSHIP_SENTENCES = [
  "The technicians handled the car with extreme care and used proper coupler-to-coupler wiring with zero wire splicing.",
  "Their attention to detail, tidy wiring harnesses, and flawless panel fitting really stand out.",
  "What impressed me most was their clean workmanship without damaging any original clips or trims.",
  "The fitting bay is very well equipped and the staff members are highly experienced and skilled.",
  "Everything was installed neatly maintaining full electrical safety and vehicle warranty intact.",
  "The finish is so clean that everything looks seamlessly integrated as if it came straight from the factory.",
  "Very neat execution with zero rattles or loose fittings, showing their rich technical expertise.",
  "They took time to explain each product, showed live demos, and completed the job cleanly without rush."
];

const VALUE_AND_TIMELINE_SENTENCES_5_STAR = [
  "Pricing is 100% transparent and much more affordable compared to shops in Madurai or Coimbatore without compromising on genuine quality.",
  "Delivered the car exactly within the promised time frame and the pricing is very reasonable for the high quality provided.",
  "Transparent rates, genuine warranty-backed parts, and on-time delivery made this an unbeatable deal.",
  "Great value for money with authentic branded accessories and prompt delivery.",
  "Very fair pricing structure and they strictly use genuine, certified automotive accessories.",
  "Quick turnaround time, honest recommendations without pushing unwanted items, and excellent rates.",
  "Unmatched pricing in Theni district along with trustworthy customer support and manufacturer warranty.",
  "Worth every single rupee spent for the quality of materials and dedication they showed."
];

const VALUE_AND_TIMELINE_SENTENCES_4_STAR = [
  "Pricing was fair and the service was completed with good care.",
  "Decent turnaround time and reasonable rates for the accessories installed.",
  "Good value for money and transparent discussion regarding product options.",
  "Overall honest pricing and good quality products offered."
];

const LOCAL_SEO_KEYWORDS = [
  "Barani car Accessories Cumbum",
  "car accessories Cumbum",
  "car modification Theni",
  "best car audio setup",
  "seat covers Cumbum",
  "custom car styling Theni",
  "car detailing Cumbum",
  "car LED lighting Theni",
  "genuine car parts"
];

const OUTRO_RECOMMENDATIONS_5_STAR = [
  "Kudos to the entire Barani car Accessories crew! Will definitely come back for all my future automotive upgrades.",
  "If you love your car, Barani car Accessories Cumbum is the ultimate destination you can blindly trust!",
  "A big thumbs up to the team! Highly recommending Barani car Accessories to all car owners in Cumbum and Theni district.",
  "100% satisfied customer here! Thank you Barani car Accessories for making my car look and feel brand new.",
  "Will definitely recommend them to all my friends and family looking for top-notch car customizations.",
  "Easily the #1 car accessories shop in the region. Keep up the phenomenal work!",
  "Extremely happy with the overall outcome and will be returning soon for my next mod project.",
  "Huge respect to their passion for cars and customer satisfaction. 5 stars all the way!"
];

const OUTRO_RECOMMENDATIONS_4_STAR = [
  "Good job by the team. Keep up the good work!",
  "Happy with the service and would recommend Barani car Accessories to nearby vehicle owners.",
  "Thank you Barani car Accessories for the neat service.",
  "A reliable shop in Cumbum for your routine car accessory requirements."
];

// Helper: Pseudo-random picker with optional seed rotation
function getRandomItem(array, seedOffset = 0) {
  const index = Math.floor(Math.abs(Math.sin(Date.now() + seedOffset) * 10000)) % array.length;
  return array[index];
}

function getRandomSample(array, count = 2, seedOffset = 0) {
  const shuffled = [...array].sort((a, b) => {
    return Math.sin(a.length + Date.now() + seedOffset) - Math.sin(b.length + Date.now() + seedOffset);
  });
  return shuffled.slice(0, count);
}

/**
 * Generate 500+ Combinations of Natural, Diverse, SEO-Boosted Reviews
 */
export function generateSmartReviewSuite({
  businessName = "Barani car Accessories",
  selectedServices = [],
  tags = [],
  customerComment = "",
  rating = 5,
  tone = "seo"
}) {
  const is5Star = Number(rating) >= 5;
  const openersPool = is5Star ? SEED_OPENERS_5_STAR : SEED_OPENERS_4_STAR;
  const valuePool = is5Star ? VALUE_AND_TIMELINE_SENTENCES_5_STAR : VALUE_AND_TIMELINE_SENTENCES_4_STAR;
  const outroPool = is5Star ? OUTRO_RECOMMENDATIONS_5_STAR : OUTRO_RECOMMENDATIONS_4_STAR;

  // Identify service category keys from selectedServices
  const matchedServiceKeys = [];
  const srvString = (selectedServices || []).join(" ").toLowerCase();

  if (srvString.includes("audio") || srvString.includes("screen") || srvString.includes("speaker") || srvString.includes("sound")) {
    matchedServiceKeys.push("audio");
  }
  if (srvString.includes("seat") || srvString.includes("mat") || srvString.includes("upholstery") || srvString.includes("interior")) {
    matchedServiceKeys.push("seats");
  }
  if (srvString.includes("light") || srvString.includes("projector") || srvString.includes("ambient") || srvString.includes("led") || srvString.includes("fog")) {
    matchedServiceKeys.push("lighting");
  }
  if (srvString.includes("body") || srvString.includes("spoiler") || srvString.includes("alloy") || srvString.includes("diffuser")) {
    matchedServiceKeys.push("body");
  }
  if (srvString.includes("film") || srvString.includes("ceramic") || srvString.includes("ppf") || srvString.includes("sun")) {
    matchedServiceKeys.push("coating");
  }
  if (srvString.includes("clean") || srvString.includes("wash") || srvString.includes("polish") || srvString.includes("spa")) {
    matchedServiceKeys.push("cleaning");
  }

  if (matchedServiceKeys.length === 0) {
    matchedServiceKeys.push("default");
  }

  // Construct dynamic service text based on user selections
  const serviceLines = matchedServiceKeys.map((k, idx) => {
    const pool = SERVICE_TEMPLATES[k] || SERVICE_TEMPLATES.default;
    return getRandomItem(pool, idx * 17);
  });
  const combinedServiceDesc = serviceLines.join(" ");

  // Custom user remark
  const userRemark = customerComment && customerComment.trim()
    ? ` Specifically for my ${customerComment.trim()}, the team delivered exactly what I envisioned.`
    : "";

  // Highlights tag synthesis
  const tagPhrase = tags && tags.length > 0
    ? ` Special mention for their ${tags.join(", ").toLowerCase()}.`
    : "";

  // Distinct tone variations
  const seoOpener = getRandomItem(openersPool, 1);
  const seoWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 2);
  const seoValue = getRandomItem(valuePool, 3);
  const seoOutro = getRandomItem(outroPool, 4);

  const enthusOpener = getRandomItem(openersPool, 5);
  const enthusWorkmanship = getRandomItem(WORKMANSHIP_SENTENCES, 6);
  const enthusOutro = getRandomItem(outroPool, 7);

  const conciseOpener = is5Star ? `5/5 Stars for ${businessName} in Cumbum!` : `Good 4-star experience at ${businessName}.`;
  const conciseService = serviceLines[0] || "Got quality car accessories fitted.";
  const conciseOutro = getRandomItem(outroPool, 8);

  const detailedOpener = getRandomItem(openersPool, 9);
  const detailedService = serviceLines.join(" ");
  const detailedWork = getRandomItem(WORKMANSHIP_SENTENCES, 10);
  const detailedVal = getRandomItem(valuePool, 11);
  const detailedOutro = getRandomItem(outroPool, 12);

  const variations = {
    seo: `${seoOpener} ${combinedServiceDesc}${userRemark} ${seoWorkmanship}${tagPhrase} ${seoValue} ${seoOutro}`,
    enthusiastic: `${enthusOpener} ⭐⭐⭐⭐⭐ ${combinedServiceDesc}${userRemark} ${enthusWorkmanship}${tagPhrase} ${enthusOutro} 🔥🚗`,
    short: `${conciseOpener} ${conciseService}${userRemark}${tagPhrase} ${conciseOutro}`,
    detailed: `${detailedOpener} ${detailedService}${userRemark} ${detailedWork}${tagPhrase} ${detailedVal} ${detailedOutro}`
  };

  const selectedDraft = variations[tone] || variations.seo;

  return {
    success: true,
    reviewText: selectedDraft,
    tones: variations,
    keywords: getRandomSample(LOCAL_SEO_KEYWORDS, 5, 23)
  };
}
