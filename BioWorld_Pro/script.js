const topics = [
  {
    id: 1,
    category: "organism",
    icon: "⌘",
    tag: "Asosiy tushuncha",
    title: "Hujayra va uning tuzilishi",
    short: "Tirik organizmning asosiy tuzilish va faoliyat birligi.",
    intro:
      "Hujayra — tirik organizmlarning eng kichik tuzilish va faoliyat birligi. Ko‘plab organizmlar bitta hujayradan, boshqalari esa juda ko‘p hujayralardan tashkil topadi.",
    sections: [
      [
        "Hujayraning asosiy qismlari",
        "Hujayra membranasi hujayrani tashqi muhitdan ajratadi va moddalar almashinuvini boshqaradi. Sitoplazmada organoidlar joylashadi. Yadro ko‘pchilik hujayralarda irsiy axborotni saqlaydi va hujayra faoliyatini boshqarishda qatnashadi.",
      ],
      [
        "Muhim organoidlar",
        "Mitoxondriya energiya hosil bo‘lishida qatnashadi; ribosomalar oqsil sintez qiladi; endoplazmatik to‘r va Golji majmuasi moddalarni tayyorlash hamda tashishda ishtirok etadi. O‘simlik hujayrasida xloroplastlar fotosintez qiladi.",
      ],
      [
        "Yodda tuting",
        "Hujayralar shakli va vazifasiga ko‘ra farqlanadi. Masalan, nerv hujayrasi impuls uzatishga, mushak hujayrasi qisqarishga moslashgan.",
      ],
    ],
    facts: [
      ["Membrana", "Hujayrani o‘rab turadi"],
      ["Sitoplazma", "Ko‘plab jarayonlar kechadi"],
      ["Yadro", "Irsiy axborot saqlanadi"],
    ],
  },
  {
    id: 2,
    category: "organism",
    icon: "◉",
    tag: "Tiriklik xususiyati",
    title: "To‘qima, organ va organlar tizimi",
    short: "Hujayralar birlashib to‘qima va organlarni hosil qiladi.",
    intro:
      "Bir xil kelib chiqishli va o‘xshash vazifani bajaradigan hujayralar to‘qimalarni hosil qiladi. Bir necha to‘qima birlashib organ, organlar esa tizimlarni tashkil etadi.",
    sections: [
      [
        "Tashkil topish darajalari",
        "Hujayra → to‘qima → organ → organlar tizimi → organizm. Masalan, yurak mushak, biriktiruvchi va nerv to‘qimalaridan tuzilgan organ hisoblanadi.",
      ],
      [
        "Inson organizmidagi tizimlar",
        "Tayanch-harakat, hazm qilish, nafas olish, qon aylanish, ayirish, nerv, endokrin va ko‘payish tizimlari bir-biri bilan hamkorlikda ishlaydi.",
      ],
      [
        "Nima uchun muhim?",
        "Organlar tizimlarining muvofiqlashgan faoliyati ichki muhit barqarorligini saqlashga yordam beradi.",
      ],
    ],
    facts: [
      ["To‘qima", "O‘xshash hujayralar guruhi"],
      ["Organ", "Bir nechta to‘qima"],
      ["Tizim", "Hamkor organlar majmuasi"],
    ],
  },
  {
    id: 3,
    category: "support",
    icon: "♧",
    tag: "Anatomiya",
    title: "Skelet va suyaklar",
    short: "Tana tayanchi, ichki organlar himoyasi va harakat.",
    intro:
      "Skelet tanaga shakl va tayanch beradi, muhim organlarni himoya qiladi hamda mushaklar bilan birga harakatni ta’minlaydi. Suyaklar tirik to‘qima bo‘lib, doimiy ravishda yangilanadi.",
    sections: [
      [
        "Skeletning asosiy bo‘limlari",
        "Bosh skeleti, gavda skeleti va qo‘l-oyoq skeleti farqlanadi. Bosh skeleti miya va sezgi organlarini, ko‘krak qafasi esa yurak va o‘pkani himoya qiladi.",
      ],
      [
        "Suyaklarning tuzilishi",
        "Suyakning tashqi qismida zich suyak moddasi, ichki qismida g‘ovak modda bo‘lishi mumkin. Ko‘plab suyaklarda suyak ko‘migi joylashadi. Suyak tarkibidagi mineral tuzlar unga qattiqlik beradi, organik moddalar esa ma’lum egiluvchanlikni ta’minlaydi.",
      ],
      [
        "Suyaklar qanday birikadi?",
        "Suyaklar harakatsiz, yarim harakatchan yoki harakatchan birikishi mumkin. Bo‘g‘imlar harakatga imkon beradi; tog‘ay va boylamlar bo‘g‘imning ishlashida muhim.",
      ],
      [
        "Suyaklarni sog‘lom saqlash",
        "Kalsiy va D vitaminiga boy muvozanatli ovqatlanish, jismoniy faollik, to‘g‘ri qomat va jarohatlardan ehtiyot bo‘lish suyak salomatligiga yordam beradi.",
      ],
    ],
    facts: [
      ["Tayanch", "Tanaga shakl beradi"],
      ["Himoya", "Miya, yurak va o‘pkani asraydi"],
      ["Harakat", "Mushaklar bilan birga ishlaydi"],
    ],
  },
  {
    id: 4,
    category: "support",
    icon: "↗",
    tag: "Harakat",
    title: "Mushaklar va harakat",
    short: "Mushak qisqarishi orqali tana va bo‘g‘imlar harakatlanadi.",
    intro:
      "Mushaklar qisqarish xususiyatiga ega to‘qimalardan tashkil topgan. Skelet mushaklari suyaklarga paylar orqali birikib, tana harakatlarini amalga oshiradi.",
    sections: [
      [
        "Mushak turlari",
        "Skelet mushaklari odatda ixtiyoriy boshqariladi. Silliq mushaklar ichki organlar devorida uchraydi. Yurak mushagi esa ritmik ravishda qisqarib, qonni haydaydi.",
      ],
      [
        "Mushak va suyak hamkorligi",
        "Mushak qisqarganda pay orqali suyakka kuch uzatadi. Ko‘pincha qarama-qarshi ishlaydigan mushaklar juftligi bo‘g‘imni bukish va yozishga yordam beradi.",
      ],
      [
        "Harakat gigiyenasi",
        "Muntazam, yoshga mos jismoniy mashqlar, qizish mashqlari, yetarli dam olish va to‘g‘ri holat mushaklar faoliyatini qo‘llab-quvvatlaydi.",
      ],
    ],
    facts: [
      ["Skelet mushagi", "Ixtiyoriy harakat"],
      ["Silliq mushak", "Ichki organlarda"],
      ["Yurak mushagi", "Ritmik qisqaradi"],
    ],
  },
  {
    id: 5,
    category: "systems",
    icon: "♡",
    tag: "Qon aylanish",
    title: "Yurak va qon tomirlari",
    short: "Yurak qonni tomirlar bo‘ylab harakatga keltiradi.",
    intro:
      "Qon aylanish tizimi yurak, qon va qon tomirlaridan tashkil topgan. U kislorod, oziq moddalar va boshqa moddalarni to‘qimalarga yetkazishda, almashinuv mahsulotlarini olib ketishda qatnashadi.",
    sections: [
      [
        "Yurak tuzilishi",
        "Inson yuragi to‘rt kamerali: o‘ng va chap bo‘lmacha, o‘ng va chap qorincha. Yurak klapanlari qonning asosan bir yo‘nalishda oqishiga yordam beradi.",
      ],
      [
        "Qon tomirlari",
        "Arteriyalar qonni yurakdan olib chiqadi, venalar yurakka olib keladi, kapillyarlar esa qon va to‘qimalar o‘rtasida moddalar almashinuvi sodir bo‘ladigan juda ingichka tomirlardir.",
      ],
      [
        "Katta va kichik qon aylanish doiralari",
        "Kichik doirada qon yurakdan o‘pkaga borib, gaz almashinuvida qatnashadi va qaytadi. Katta doirada esa qon butun tana to‘qimalariga yetkaziladi.",
      ],
      [
        "Sog‘lom yurak uchun",
        "Harakat, uyqu, muvozanatli ovqatlanish va tamaki tutunidan uzoq bo‘lish yurak-qon tomir salomatligini qo‘llab-quvvatlaydi.",
      ],
    ],
    facts: [
      ["Yurak", "Qonni haydaydi"],
      ["Arteriya", "Qonni yurakdan olib chiqadi"],
      ["Kapillyar", "Modda almashinuvi"],
    ],
  },
  {
    id: 6,
    category: "systems",
    icon: "⌁",
    tag: "Nafas olish",
    title: "Nafas olish tizimi",
    short: "Organizm kislorod oladi va karbonat angidridni chiqaradi.",
    intro:
      "Nafas olish tizimi havodan kislorod olish va karbonat angidridni chiqarishga xizmat qiladi. Gaz almashinuvi o‘pkadagi alveolalar va kapillyarlar orasida kechadi.",
    sections: [
      [
        "Havo yo‘li",
        "Havo burun bo‘shlig‘i, halqum, hiqildoq, traxeya va bronxlar orqali o‘pkaga boradi. Burun havoni isitish, namlash va zarrachalardan tozalashga yordam beradi.",
      ],
      [
        "O‘pkada gaz almashinuvi",
        "Alveolalar devori juda yupqa va kapillyarlar bilan o‘ralgan. Kislorod qonga, karbonat angidrid esa qondan alveolalarga o‘tadi.",
      ],
      [
        "Nafas harakati",
        "Diafragma va qovurg‘alararo mushaklar ko‘krak qafasi hajmini o‘zgartiradi. Bu o‘pkaga havoning kirishi va chiqishiga yordam beradi.",
      ],
      [
        "Nafas salomatligi",
        "Xonani shamollatish, jismoniy faollik va tamaki tutunidan saqlanish nafas tizimi uchun muhim.",
      ],
    ],
    facts: [
      ["Burun", "Havoni tayyorlaydi"],
      ["Alveola", "Gaz almashinuvi"],
      ["Diafragma", "Nafas harakatiga yordam beradi"],
    ],
  },
  {
    id: 7,
    category: "systems",
    icon: "◌",
    tag: "Hazm qilish",
    title: "Ovqat hazm qilish tizimi",
    short: "Oziq moddalar parchalanib, organizm tomonidan o‘zlashtiriladi.",
    intro:
      "Hazm qilish tizimi ovqatni mexanik va kimyoviy qayta ishlaydi, foydali moddalarni qonga yoki limfaga so‘rilishiga va qoldiqlarning chiqarilishiga yordam beradi.",
    sections: [
      [
        "Ovqatning yo‘li",
        "Og‘iz bo‘shlig‘ida chaynash va so‘lak ta’siri boshlanadi. Ovqat halqum va qizilo‘ngach orqali oshqozonga, so‘ng ingichka ichakka o‘tadi.",
      ],
      [
        "Asosiy organlar",
        "Oshqozon ovqatni aralashtiradi va kislotali muhit yaratadi. Ingichka ichakda ko‘p oziq moddalar parchalanib so‘riladi. Yo‘g‘on ichak suvning bir qismini so‘rib, najas shakllanishida qatnashadi.",
      ],
      [
        "Yordamchi bezlar",
        "Jigar o‘t ishlab chiqaradi, o‘t pufagi uni saqlaydi, oshqozon osti bezi esa hazm fermentlarini ajratadi.",
      ],
      [
        "Ovqatlanish odatlari",
        "Turli mahsulotlardan iborat muvozanatli ovqatlanish, toza suv ichish va qo‘l gigiyenasi muhim.",
      ],
    ],
    facts: [
      ["Oshqozon", "Ovqatni aralashtiradi"],
      ["Ingichka ichak", "Oziq moddalar so‘riladi"],
      ["Jigar", "O‘t ishlab chiqaradi"],
    ],
  },
  {
    id: 8,
    category: "systems",
    icon: "⌇",
    tag: "Ayirish",
    title: "Ayirish va siydik tizimi",
    short: "Modda almashinuvi qoldiqlarini chiqarishga yordam beradi.",
    intro:
      "Ayirish tizimi organizmda hosil bo‘ladigan ayrim chiqindi moddalarni chiqaradi va suv-tuz muvozanatini saqlashda qatnashadi. Siydik tizimining asosiy organlari buyraklar, siydik naylari, siydik pufagi va siydik chiqarish yo‘lidir.",
    sections: [
      [
        "Buyraklar vazifasi",
        "Buyraklar qonni filtrlab, ortiqcha suv va ayrim chiqindi moddalarni siydik tarkibida chiqaradi. Ular suv, tuz va kislota-ishqor muvozanatiga ham ta’sir ko‘rsatadi.",
      ],
      [
        "Siydik hosil bo‘lishi",
        "Buyrakning tuzilish va faoliyat birligi nefron deb ataladi. Filtrlash va keyingi qayta so‘rilish jarayonlari natijasida siydik tarkibi shakllanadi.",
      ],
      [
        "Gigiyena",
        "Yetarli suyuqlik ichish, tozalikni saqlash va sog‘liqdagi noodatiy o‘zgarishlarda kattalarga yoki tibbiyot xodimiga murojaat qilish muhim.",
      ],
    ],
    facts: [
      ["Buyrak", "Qonni filtrlaydi"],
      ["Siydik nayi", "Siydikni pufakka olib boradi"],
      ["Pufak", "Siydikni vaqtincha saqlaydi"],
    ],
  },
  {
    id: 9,
    category: "systems",
    icon: "✧",
    tag: "Boshqaruv",
    title: "Nerv tizimi va miya",
    short:
      "Organizm faoliyatini muvofiqlashtiradi va tashqi ta’sirlarni sezadi.",
    intro:
      "Nerv tizimi nerv hujayralari orqali axborotni qabul qiladi, uzatadi va qayta ishlaydi. Markaziy nerv tizimiga bosh miya va orqa miya, periferik tizimga esa nervlar va nerv tugunlari kiradi.",
    sections: [
      [
        "Bosh miya",
        "Bosh miya katta yarimsharlar, miyacha va miya ustuni kabi qismlardan tashkil topgan. Turli qismlar harakat, sezgi, muvozanat, nafas va boshqa muhim faoliyatlarda qatnashadi.",
      ],
      [
        "Orqa miya va nervlar",
        "Orqa miya miya bilan tana o‘rtasida axborot uzatadi va ayrim reflekslarni boshqaradi. Nervlar sezgi ma’lumotlari va harakat buyruqlarini tashiydi.",
      ],
      [
        "Neyron",
        "Neyron nerv tizimining asosiy hujayrasi bo‘lib, hujayra tanasi, dendritlar va akson kabi qismlarga ega. Sinapslar orqali hujayralar o‘zaro signal uzatadi.",
      ],
      [
        "Miya salomatligi",
        "Yetarli uyqu, xavfsizlik qoidalariga rioya qilish, jismoniy faollik va o‘qish-dam olish muvozanati muhim.",
      ],
    ],
    facts: [
      ["Bosh miya", "Axborotni qayta ishlaydi"],
      ["Orqa miya", "Refleks va signal uzatish"],
      ["Neyron", "Nerv signali uzatadi"],
    ],
  },
  {
    id: 10,
    category: "health",
    icon: "✚",
    tag: "Sog‘lom turmush",
    title: "Salomatlik va gigiyena",
    short: "Kundalik odatlar organizm faoliyatiga ta’sir qiladi.",
    intro:
      "Gigiyena — sog‘liqni saqlashga yordam beradigan qoidalar va odatlar majmuasi. Sog‘lom turmush tarzi ovqatlanish, harakat, uyqu, tozalik va xavfsizlikni o‘z ichiga oladi.",
    sections: [
      [
        "Shaxsiy gigiyena",
        "Qo‘lni sovunlab yuvish, tishlarni muntazam tozalash, toza kiyim va xavfsiz oziq-ovqatdan foydalanish yuqumli kasalliklar xavfini kamaytirishga yordam beradi.",
      ],
      [
        "Ovqat va harakat",
        "Ratsionda sabzavot, meva, don mahsulotlari va oqsil manbalari bo‘lishi, suv yetarli ichilishi hamda yoshga mos jismoniy faollik foydali.",
      ],
      [
        "Uyqu va ruhiy farovonlik",
        "Yetarli uyqu diqqat, xotira va tiklanish uchun zarur. Qiyinchilik sezilganda ishonchli katta odam bilan gaplashish foydali.",
      ],
    ],
    facts: [
      ["Gigiyena", "Kasallik xavfini kamaytiradi"],
      ["Faollik", "Tana tizimlarini qo‘llaydi"],
      ["Uyqu", "Tiklanish va xotira"],
    ],
  },
  {
    id: 11,
    category: "nature",
    icon: "❋",
    tag: "Botanika",
    title: "O‘simliklar va fotosintez",
    short:
      "O‘simliklar yorug‘lik energiyasidan foydalanib organik modda hosil qiladi.",
    intro:
      "Fotosintez jarayonida yashil o‘simliklar yorug‘lik energiyasidan foydalanib, karbonat angidrid va suvdan organik modda hosil qiladi; jarayon davomida kislorod ajraladi.",
    sections: [
      [
        "Barg va xloroplast",
        "Bargning ko‘plab hujayralarida xloroplastlar bo‘ladi. Xlorofill yorug‘lik energiyasini yutishga yordam beradi.",
      ],
      [
        "Fotosintez uchun zarur sharoitlar",
        "Yorug‘lik, suv, karbonat angidrid va mos harorat fotosintez tezligiga ta’sir qiladi.",
      ],
      [
        "Tabiatdagi ahamiyati",
        "Fotosintez oziq zanjirlarining asosini yaratadi va atmosferadagi kislorod aylanishida muhim o‘rin tutadi.",
      ],
    ],
    facts: [
      ["Xlorofill", "Yorug‘likni yutadi"],
      ["Xomashyo", "Suv va CO₂"],
      ["Natija", "Organik modda va O₂"],
    ],
  },
  {
    id: 12,
    category: "nature",
    icon: "♧",
    tag: "Ekologiya",
    title: "Ekotizim va oziq zanjiri",
    short: "Organizmlar va muhit bir-biriga bog‘liq holda yashaydi.",
    intro:
      "Ekotizim tirik organizmlar va ularning jonsiz muhiti o‘zaro ta’sir qiladigan tizimdir. Energiya oziq aloqalari orqali o‘tadi, moddalar esa tabiatda aylanishda davom etadi.",
    sections: [
      [
        "Ekotizim tarkibi",
        "O‘simliklar kabi ishlab chiqaruvchilar, hayvonlar kabi iste’molchilar va ko‘plab zamburug‘ hamda bakteriyalar kabi parchalovchilar ekotizimda turli vazifalarni bajaradi.",
      ],
      [
        "Oziq zanjiri",
        "Masalan: o‘t → chigirtka → qurbaqa → ilon. Har bir bosqichda energiyaning bir qismi organizm faoliyati va issiqlik sifatida sarflanadi.",
      ],
      [
        "Tabiatni muhofaza qilish",
        "Suv va energiyani tejash, chiqindini kamaytirish, yashash muhitlarini asrash va biologik xilma-xillikni himoya qilish muhim.",
      ],
    ],
    facts: [
      ["Ishlab chiqaruvchi", "Organik modda hosil qiladi"],
      ["Iste’molchi", "Boshqa organizm bilan oziqlanadi"],
      ["Parchalovchi", "Qoldiqlarni parchalaydi"],
    ],
  },
];
const grid = document.getElementById("topicGrid"),
  detail = document.getElementById("topicDetail"),
  search = document.getElementById("topicSearch");
let activeCategory = "all",
  selectedTopic = null;
function renderTopics() {
  const q = search.value.trim().toLowerCase();
  const list = topics.filter(
    (t) =>
      (activeCategory === "all" || t.category === activeCategory) &&
      `${t.title} ${t.short} ${t.tag}`.toLowerCase().includes(q),
  );
  grid.innerHTML = list.length
    ? list
        .map(
          (t) =>
            `<button class="topic-card ${selectedTopic === t.id ? "selected" : ""}" data-id="${t.id}"><span class="topic-icon">${t.icon}</span><h3>${t.title}</h3><p>${t.short}</p><span class="topic-tag">${t.tag}</span></button>`,
        )
        .join("")
    : `<div class="no-results">Bu nom bilan mavzu topilmadi. Boshqa so‘z bilan qidirib ko‘ring.</div>`;
  grid
    .querySelectorAll(".topic-card")
    .forEach((b) =>
      b.addEventListener("click", () => showTopic(+b.dataset.id)),
    );
}
function showTopic(id) {
  const t = topics.find((x) => x.id === id);
  if (!t) return;
  selectedTopic = id;
  renderTopics();
  detail.innerHTML = `<div class="detail-content"><div class="detail-topline"><span>${t.icon}</span> ${t.tag.toUpperCase()} <span>•</span> 8-SINF BIOLOGIYA</div><h3>${t.title}</h3><p class="detail-intro">${t.intro}</p>${t.sections.map((s, i) => `<h4>${i + 1}. ${s[0]}</h4><p>${s[1]}</p>`).join("")}<div class="fact-row">${t.facts.map((f) => `<div class="fact-box"><b>${f[0]}</b><span>${f[1]}</span></div>`).join("")}</div></div>`;
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
document
  .getElementById("categoryList")
  .querySelectorAll(".category")
  .forEach((b) =>
    b.addEventListener("click", () => {
      document
        .querySelectorAll(".category")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      activeCategory = b.dataset.category;
      renderTopics();
    }),
  );
search.addEventListener("input", renderTopics);
renderTopics();

const anatomyData = {
  skeleton: {
    title: "Skelet tizimi",
    icon: "♧",
    description:
      "Skelet tanaga tayanch beradi, ichki organlarni himoya qiladi va harakatda mushaklar bilan birga ishlaydi. Sxemadagi suyak guruhini tanlab, uning vazifasini o‘rganing.",
    facts: [
      ["Tayanch", "Tananing shaklini saqlaydi"],
      ["Himoya", "Muhim organlarni asraydi"],
      ["Harakat", "Mushaklar bilan birga ishlaydi"],
    ],
    know: "Voyaga yetgan inson skeletida odatda 206 ta suyak bo‘ladi.",
  },
  organs: {
    title: "Ichki organlar",
    icon: "♡",
    description:
      "Ichki organlar turli tizimlar tarkibida hamkorlik qiladi. Rasmda yurak, o‘pka, jigar, oshqozon, ichak va buyraklar sxematik ko‘rsatilgan. Organ nomini bosing.",
    facts: [
      ["Yurak", "Qonni haydaydi"],
      ["O‘pka", "Gaz almashinuvi"],
      ["Ichak", "Oziq moddalar so‘rilishi"],
    ],
    know: "Ichki organlar mustaqil emas — ularning faoliyati nerv va gormonal signallar bilan muvofiqlashadi.",
  },
  circulation: {
    title: "Qon aylanish tizimi",
    icon: "⌁",
    description:
      "Qon tomirlari tarmog‘i kislorod va moddalarni to‘qimalarga olib boradi. Qizil rang arteriyalar yo‘nalishini, ko‘k rang esa venalar yo‘nalishini eslatish uchun ishlatilgan; bu soddalashtirilgan o‘quv sxemasidir.",
    facts: [
      ["Yurak", "Qonni harakatga keltiradi"],
      ["Arteriya", "Qonni yurakdan olib chiqadi"],
      ["Vena", "Qonni yurakka qaytaradi"],
    ],
    know: "Eng mayda qon tomirlari kapillyarlar deb ataladi; gaz va moddalar almashinuvi ularda kechadi.",
  },
  nervous: {
    title: "Asab tizimi",
    icon: "✧",
    description:
      "Asab tizimi sezgi axborotini qabul qiladi, qayta ishlaydi va javob reaksiyalarini muvofiqlashtiradi. Bosh miya, orqa miya va nervlar birgalikda ishlaydi.",
    facts: [
      ["Bosh miya", "Axborotni qayta ishlaydi"],
      ["Orqa miya", "Signal va reflekslarda qatnashadi"],
      ["Nervlar", "Tana bo‘ylab signal uzatadi"],
    ],
    know: "Neyronlar elektr va kimyoviy signallar yordamida axborot uzatadi.",
  },
};
const partData = {
  skull: [
    "Bosh suyagi",
    "Bosh suyagi miya va boshdagi ayrim sezgi organlarini himoya qiladi. U bosh miya qutisi va yuz skeleti qismlaridan tashkil topadi.",
    "Bosh miya uchun himoya qobig‘i.",
  ],
  clavicle: [
    "O‘mrov suyagi",
    "O‘mrov suyagi yelka kamari tarkibiga kiradi. U qo‘lni gavda bilan bog‘lashga va yelkaning holatini saqlashga yordam beradi.",
    "Yelka kamari harakatida muhim.",
  ],
  sternum: [
    "To‘sh suyagi",
    "To‘sh suyagi ko‘krak qafasining old qismida joylashgan. Ko‘plab qovurg‘alar unga tog‘aylar orqali birikadi.",
    "Ko‘krak qafasi tarkibiga kiradi.",
  ],
  ribs: [
    "Qovurg‘alar",
    "Qovurg‘alar ko‘krak qafasini hosil qilishda qatnashadi. Ular yurak va o‘pkani himoya qiladi, nafas harakatlarida ko‘krak qafasi kengayib-torayishiga imkon beradi.",
    "Odatda 12 juft qovurg‘a mavjud.",
  ],
  spine: [
    "Umurtqa pog‘onasi",
    "Umurtqa pog‘onasi umurtqalardan tashkil topgan. U gavdaga tayanch beradi, orqa miyani himoya qiladi va egilish hamda burilish kabi harakatlarga imkon yaratadi.",
    "Orqa miya umurtqa kanali ichidan o‘tadi.",
  ],
  pelvis: [
    "Chanoq suyaklari",
    "Chanoq skeleti tana og‘irligini oyoqlarga uzatishda va ayrim chanoq organlarini himoya qilishda qatnashadi. U umurtqa pog‘onasi bilan pastki oyoqlar orasida tayanch vazifasini bajaradi.",
    "Tana og‘irligini oyoqlarga uzatadi.",
  ],
  arm: [
    "Qo‘l suyaklari",
    "Qo‘l skeletiga yelka, bilak va qo‘l panjasi suyaklari kiradi. Ular ushlash, ko‘tarish va nozik harakatlarni bajarishga imkon beradi.",
    "Qo‘l panjasi ko‘plab mayda suyaklardan tuzilgan.",
  ],
  leg: [
    "Oyoq suyaklari",
    "Oyoq skeleti tana og‘irligini ko‘tarish, tik turish, yurish va yugurishda qatnashadi. Son suyagi inson tanasidagi eng uzun suyak hisoblanadi.",
    "Son suyagi eng uzun suyakdir.",
  ],
  hands: [
    "Qo‘l panjasi suyaklari",
    "Qo‘l panjasi bilakuzuk, kaft va barmoq suyaklaridan tuzilgan. Ularning ko‘p bo‘g‘imli tuzilishi ushlash va aniq harakatlarni bajarishga yordam beradi.",
    "Barmoqlar nozik harakatlarni bajaradi.",
  ],
  heart: [
    "Yurak",
    "Yurak mushakdan tuzilgan to‘rt kamerali organ. U qisqarib, qonni o‘pka va tana bo‘ylab harakatlantiradi.",
    "Klapanlar qonning teskari oqishini cheklaydi.",
  ],
  lungs: [
    "O‘pkalar",
    "O‘pkalarda alveolalar orqali kislorod va karbonat angidrid almashinuvi sodir bo‘ladi. Nafas olish tizimi qonni kislorod bilan ta’minlashda muhim.",
    "Alveolalar juda ko‘p va yupqa devorli.",
  ],
  liver: [
    "Jigar",
    "Jigar moddalar almashinuvida qatnashadi, ayrim moddalarni qayta ishlaydi va o‘t ishlab chiqaradi. U organizmning muhim yirik bezlaridan biridir.",
    "O‘t yog‘larning hazm bo‘lishiga yordam beradi.",
  ],
  stomach: [
    "Oshqozon",
    "Oshqozon ovqatni vaqtincha saqlaydi, aralashtiradi va me’da shirasi yordamida hazm jarayonini davom ettiradi.",
    "Oshqozon muhiti kislotali.",
  ],
  intestines: [
    "Ichaklar",
    "Ingichka ichakda hazmning muhim qismi va oziq moddalar so‘rilishi sodir bo‘ladi. Yo‘g‘on ichak suvning bir qismini so‘rib, qoldiqlarni shakllantiradi.",
    "Ingichka ichakning ichki yuzasi so‘rilishga moslashgan.",
  ],
  kidneys: [
    "Buyraklar",
    "Buyraklar qonni filtrlash, siydik hosil qilish hamda suv-tuz muvozanatini saqlashda qatnashadi.",
    "Buyrakning asosiy tuzilish birligi nefron.",
  ],
  brain: [
    "Bosh miya",
    "Bosh miya sezgi axborotini qayta ishlash, harakatlarni muvofiqlashtirish, xotira va fikrlash kabi ko‘plab vazifalarda qatnashadi.",
    "Miya turli bo‘limlarining vazifalari farq qiladi.",
  ],
};
let currentSystem = "skeleton";
function setSystem(system) {
  currentSystem = system;
  document
    .querySelectorAll(".system-tab")
    .forEach((b) => b.classList.toggle("active", b.dataset.system === system));
  ["skeletonLayer", "organsLayer", "circulationLayer", "nervousLayer"].forEach(
    (id) => document.getElementById(id).classList.add("hidden-layer"),
  );
  document
    .getElementById(
      {
        skeleton: "skeletonLayer",
        organs: "organsLayer",
        circulation: "circulationLayer",
        nervous: "nervousLayer",
      }[system],
    )
    .classList.remove("hidden-layer");
  document
    .querySelectorAll(".hotspot")
    .forEach((x) => (x.style.display = system === "skeleton" ? "" : "none"));
  document.getElementById("modelTitle").textContent = anatomyData[system].title;
  updateInfo(
    anatomyData[system].title,
    anatomyData[system].icon,
    anatomyData[system].description,
    anatomyData[system].facts,
    anatomyData[system].know,
  );
}
function updateInfo(title, icon, description, facts, know) {
  document.getElementById("infoTitle").textContent = title;
  document.getElementById("infoIcon").textContent = icon;
  document.getElementById("infoDescription").textContent = description;
  document.getElementById("infoFacts").innerHTML = facts
    .map(
      (f, i) =>
        `<div><span>0${i + 1}</span><p><b>${f[0]}</b><small>${f[1]}</small></p></div>`,
    )
    .join("");
  document.getElementById("didYouKnow").textContent = know;
}
document
  .querySelectorAll(".system-tab")
  .forEach((b) =>
    b.addEventListener("click", () => setSystem(b.dataset.system)),
  );
function selectPart(part) {
  const d = partData[part];
  if (!d) return;
  updateInfo(
    d[0],
    "✦",
    d[1],
    [
      ["Vazifasi", d[1].split(".")[0] + "."],
      ["Bog‘liqligi", "Organizmning boshqa qismlari bilan hamkorlik qiladi."],
      ["Eslab qoling", d[2]],
    ],
    d[2],
  );
  document.getElementById("modelTitle").textContent = d[0];
}
document
  .querySelectorAll("[data-part]")
  .forEach((el) =>
    el.addEventListener("click", () => selectPart(el.dataset.part)),
  );
document
  .getElementById("resetModel")
  .addEventListener("click", () => setSystem(currentSystem));
document
  .getElementById("mobileMenu")
  .addEventListener("click", () =>
    document.getElementById("mainNav").classList.toggle("open"),
  );
document
  .querySelectorAll(".nav-link")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.getElementById("mainNav").classList.remove("open"),
    ),
  );
const quiz = [
  {
    q: "Skeletning asosiy vazifalaridan biri qaysi?",
    a: [
      "Qonni filtrlash",
      "Tanaga tayanch berish",
      "Ovqatni parchalash",
      "Gormon ishlab chiqarish",
    ],
    correct: 1,
    why: "Skelet tanaga tayanch beradi, organlarni himoya qiladi va harakatda qatnashadi.",
  },
  {
    q: "Gaz almashinuvi o‘pkada asosan qayerda sodir bo‘ladi?",
    a: ["Traxeyada", "Hiqildoqda", "Alveolalarda", "Burun bo‘shlig‘ida"],
    correct: 2,
    why: "Alveolalar yupqa devorli bo‘lib, kapillyarlar bilan gaz almashinuvida qatnashadi.",
  },
  {
    q: "Qonni yurakdan olib chiqadigan tomirlar qanday ataladi?",
    a: ["Venalar", "Kapillyarlar", "Limfa tomirlari", "Arteriyalar"],
    correct: 3,
    why: "Arteriyalar qonni yurakdan olib chiqadi, venalar esa yurakka qaytaradi.",
  },
  {
    q: "Hujayrada irsiy axborot asosan qayerda saqlanadi?",
    a: ["Yadroda", "Membranada", "Sitoplazma suvida", "Faqat ribosomada"],
    correct: 0,
    why: "Ko‘pchilik inson hujayralarida DNK asosan yadroda joylashgan.",
  },
];
let qi = 0,
  answered = false,
  score = 0;
const qTitle = document.getElementById("quizQuestion"),
  qOpts = document.getElementById("quizOptions"),
  qFb = document.getElementById("quizFeedback"),
  qNext = document.getElementById("nextQuestion");
function renderQuiz() {
  answered = false;
  const q = quiz[qi];
  document.getElementById("quizCounter").textContent =
    `${qi + 1} / ${quiz.length}`;
  document.getElementById("quizProgress").style.width =
    `${((qi + 1) / quiz.length) * 100}%`;
  qTitle.textContent = q.q;
  qFb.textContent = "";
  qNext.disabled = true;
  qNext.textContent =
    qi === quiz.length - 1 ? "Testni yakunlash ✓" : "Keyingi savol →";
  qOpts.innerHTML = q.a
    .map(
      (a, i) =>
        `<button class="quiz-option" data-answer="${i}">${String.fromCharCode(65 + i)}. ${a}</button>`,
    )
    .join("");
  qOpts.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const pick = +b.dataset.answer;
      if (pick === q.correct) {
        b.classList.add("correct");
        qFb.textContent = "To‘g‘ri! " + q.why;
        score++;
      } else {
        b.classList.add("wrong");
        qOpts
          .querySelector(`[data-answer="${q.correct}"]`)
          .classList.add("correct");
        qFb.textContent = "Hali emas. " + q.why;
      }
      qNext.disabled = false;
    }),
  );
}
qNext.addEventListener("click", () => {
  if (!answered) return;
  if (qi < quiz.length - 1) {
    qi++;
    renderQuiz();
  } else {
    qTitle.textContent = `Natija: ${score} / ${quiz.length}`;
    qOpts.innerHTML = "";
    qFb.textContent =
      score === quiz.length
        ? "Ajoyib! Barcha savollarga to‘g‘ri javob berdingiz."
        : "Yaxshi urinish! Mavzularni qayta ko‘rib, yana mashq qiling.";
    qNext.textContent = "Qayta boshlash ↻";
    qNext.disabled = false;
    qNext.onclick = () => {
      qi = 0;
      score = 0;
      qNext.onclick = null;
      renderQuiz();
    };
  }
});
renderQuiz();
