import { Dimensions } from "react-native";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

export const CityTown = {
	İstanbul: [
		{ label: "Adalar", value: "Adalar" },
		{ label: "Arnavutköy", value: "Arnavutköy" },
		{ label: "Ataşehir", value: "Ataşehir" },
		{ label: "Avcılar", value: "Avcılar" },
		{ label: "Bağcılar", value: "Bağcılar" },
		{ label: "Bahçelievler", value: "Bahçelievler" },
		{ label: "Bakırköy", value: "Bakırköy" },
		{ label: "Başakşehir", value: "Başakşehir" },
		{ label: "Bayrampaşa", value: "Bayrampaşa" },
		{ label: "Beşiktaş", value: "Beşiktaş" },
		{ label: "Beykoz", value: "Beykoz" },
		{ label: "Beylikdüzü", value: "Beylikdüzü" },
		{ label: "Beyoğlu", value: "Beyoğlu" },
		{ label: "Büyükçekmece", value: "Büyükçekmece" },
		{ label: "Çatalca", value: "Çatalca" },
		{ label: "Çekmeköy", value: "Çekmeköy" },
		{ label: "Esenler", value: "Esenler" },
		{ label: "Esenyurt", value: "Esenyurt" },
		{ label: "Eyüp", value: "Eyüp" },
		{ label: "Fatih", value: "Fatih" },
		{ label: "Gaziosmanpaşa", value: "Gaziosmanpaşa" },
		{ label: "Güngören", value: "Güngören" },
		{ label: "Kadıköy", value: "Kadıköy" },
		{ label: "Kağıthane", value: "Kağıthane" },
		{ label: "Kartal", value: "Kartal" },
		{ label: "Küçükçekmece", value: "Küçükçekmece" },
		{ label: "Maltepe", value: "Maltepe" },
		{ label: "Pendik", value: "Pendik" },
		{ label: "Sancaktepe", value: "Sancaktepe" },
		{ label: "Sarıyer", value: "Sarıyer" },
		{ label: "Şile", value: "Şile" },
		{ label: "Silivri", value: "Silivri" },
		{ label: "Şişli", value: "Şişli" },
		{ label: "Sultanbeyli", value: "Sultanbeyli" },
		{ label: "Sultangazi", value: "Sultangazi" },
		{ label: "Tuzla", value: "Tuzla" },
		{ label: "Ümraniye", value: "Ümraniye" },
		{ label: "Üsküdar", value: "Üsküdar" },
		{ label: "Zeytinburnu", value: "Zeytinburnu" },
	],
	// Ardahan: ["Ardahan", "Çıldır", "Damal", "Göle", "Hanak", "Posof"],
	// Adana: [
	// 	"Aladağ",
	// 	"Ceyhan",
	// 	"Çukurova",
	// 	"Feke",
	// 	"İmamoğlu",
	// 	"Karaisalı",
	// 	"Karataş",
	// 	"Kozan",
	// 	"Pozantı",
	// 	"Saimbeyli",
	// 	"Sarıçam",
	// 	"Seyhan",
	// 	"Tufanbeyli",
	// 	"Yumurtalık",
	// 	"Yüreğir",
	// ],
	// Artvin: ["Ardanuç", "Arhavi", "Artvin", "Borçka", "Hopa", "Murgul", "Şavşat", "Yusufeli"],
	// Batman: ["Batman", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"],
	// Ağrı: ["Ağrı", "Diyadin", "Doğubeyazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
	// İzmir: [
	// 	"Aliağa",
	// 	"Balçova",
	// 	"Bayındır",
	// 	"Bayraklı",
	// 	"Bergama",
	// 	"Beydağ",
	// 	"Bornova",
	// 	"Buca",
	// 	"Çeşme",
	// 	"Çiğli",
	// 	"Dikili",
	// 	"Foça",
	// 	"Gaziemir",
	// 	"Güzelbahçe",
	// 	"Karabağlar",
	// 	"Karaburun",
	// 	"Karşıyaka",
	// 	"Kemalpaşa",
	// 	"Kınık",
	// 	"Kiraz",
	// 	"Konak",
	// 	"Menderes",
	// 	"Menemen",
	// 	"Narlıdere",
	// 	"Ödemiş",
	// 	"Seferihisar",
	// 	"Selçuk",
	// 	"Tire",
	// 	"Torbalı",
	// 	"Urla",
	// ],
	// Adıyaman: ["Adıyaman", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"],
	// Ankara: [
	// 	"Akyurt",
	// 	"Altındağ",
	// 	"Ayaş",
	// 	"Bala",
	// 	"Beypazarı",
	// 	"Çamlıdere",
	// 	"Çankaya",
	// 	"Çubuk",
	// 	"Elmadağ",
	// 	"Etimesgut",
	// 	"Evren",
	// 	"Gölbaşı",
	// 	"Güdül",
	// 	"Haymana",
	// 	"Kalecik",
	// 	"Kazan",
	// 	"Keçiören",
	// 	"Kızılcahamam",
	// 	"Mamak",
	// 	"Nallıhan",
	// 	"Polatlı",
	// 	"Pursaklar",
	// 	"Şereflikoçhisar",
	// 	"Sincan",
	// 	"Yenimahalle",
	// ],
	// Aydın: [
	// 	"Aydın",
	// 	"Bozdoğan",
	// 	"Buharkent",
	// 	"Çine",
	// 	"Didim",
	// 	"Germencik",
	// 	"İncirliova",
	// 	"Karacasu",
	// 	"Karpuzlu",
	// 	"Koçarlı",
	// 	"Köşk",
	// 	"Kuşadası",
	// 	"Kuyucak",
	// 	"Nazilli",
	// 	"Söke",
	// 	"Sultanhisar",
	// 	"Yenipazar",
	// ],
	// Aksaray: ["Ağaçören", "Aksaray", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi"],
	// Bartın: ["Amasra", "Bartın", "Kurucaşile", "Ulus"],
	// Afyonkarahisar: [
	// 	"Afyon",
	// 	"Başmakçı",
	// 	"Bayat",
	// 	"Bolvadin",
	// 	"Çay",
	// 	"Çobanlar",
	// 	"Dazkırı",
	// 	"Dinar",
	// 	"Emirdağ",
	// 	"Evciler",
	// 	"Hocalar",
	// 	"İhsaniye",
	// 	"İscehisar",
	// 	"Kızılören",
	// 	"Sandıklı",
	// 	"Sincanlı",
	// 	"Şuhut",
	// 	"Sultandağı",
	// ],
	// Balıkesir: [
	// 	"Ayvalık",
	// 	"Balıkesir",
	// 	"Balya",
	// 	"Bandırma",
	// 	"Bigadiç",
	// 	"Burhaniye",
	// 	"Dursunbey",
	// 	"Edremit",
	// 	"Erdek",
	// 	"Gömeç",
	// 	"Gönen",
	// 	"Havran",
	// 	"İvrindi",
	// 	"Kepsut",
	// 	"Manyas",
	// 	"Marmara",
	// 	"Savaştepe",
	// 	"Sındırgı",
	// 	"Susurluk",
	// ],
	// Antalya: [
	// 	"Akseki",
	// 	"Aksu",
	// 	"Alanya",
	// 	"Demre",
	// 	"Döşemealtı",
	// 	"Elmalı",
	// 	"Finike",
	// 	"Gazipaşa",
	// 	"Gündoğmuş",
	// 	"İbradı",
	// 	"Kaş",
	// 	"Kemer",
	// 	"Kepez",
	// 	"Konyaaltı",
	// 	"Korkuteli",
	// 	"Kumluca",
	// 	"Manavgat",
	// 	"Muratpaşa",
	// 	"Serik",
	// ],
	// Bursa: [
	// 	"Büyükorhan",
	// 	"Gemlik",
	// 	"Gürsu",
	// 	"Harmancık",
	// 	"İnegöl",
	// 	"İznik",
	// 	"Karacabey",
	// 	"Keles",
	// 	"Kestel",
	// 	"Mudanya",
	// 	"Mustafakemalpaşa",
	// 	"Nilüfer",
	// 	"Orhaneli",
	// 	"Orhangazi",
	// 	"Osmangazi",
	// 	"Yenişehir",
	// 	"Yıldırım",
	// ],
	// Amasya: ["Amasya", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova"],
	// Çanakkale: [
	// 	"Ayvacık",
	// 	"Bayramiç",
	// 	"Biga",
	// 	"Bozcaada",
	// 	"Çan",
	// 	"Çanakkale",
	// 	"Eceabat",
	// 	"Ezine",
	// 	"Gelibolu",
	// 	"Gökçeada",
	// 	"Lapseki",
	// 	"Yenice",
	// ],
	// Bayburt: ["Aydıntepe", "Bayburt", "Demirözü"],
	// Diyarbakır: [
	// 	"Bağlar",
	// 	"Bismil",
	// 	"Çermik",
	// 	"Çınar",
	// 	"Çüngüş",
	// 	"Dicle",
	// 	"Eğil",
	// 	"Ergani",
	// 	"Hani",
	// 	"Hazro",
	// 	"Kayapınar",
	// 	"Kocaköy",
	// 	"Kulp",
	// 	"Lice",
	// 	"Silvan",
	// 	"Sur",
	// 	"Yenişehir",
	// ],
	// Bilecik: ["Bilecik", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
	// Bingöl: ["Adaklı", "Bingöl", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"],
	// Burdur: [
	// 	"Ağlasun",
	// 	"Altınyayla",
	// 	"Bucak",
	// 	"Burdur",
	// 	"Çavdır",
	// 	"Çeltikçi",
	// 	"Gölhisar",
	// 	"Karamanlı",
	// 	"Kemer",
	// 	"Tefenni",
	// 	"Yeşilova",
	// ],
	// Düzce: ["Akçakoca", "Çilimli", "Cumayeri", "Düzce", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"],
	// Çorum: [
	// 	"Alaca",
	// 	"Bayat",
	// 	"Boğazkale",
	// 	"Çorum",
	// 	"Dodurga",
	// 	"İskilip",
	// 	"Kargı",
	// 	"Laçin",
	// 	"Mecitözü",
	// 	"Oğuzlar",
	// 	"Ortaköy",
	// 	"Osmancık",
	// 	"Sungurlu",
	// 	"Uğurludağ",
	// ],
	// Çankırı: [
	// 	"Atkaracalar",
	// 	"Bayramören",
	// 	"Çankırı",
	// 	"Çerkeş",
	// 	"Eldivan",
	// 	"Ilgaz",
	// 	"Kızılırmak",
	// 	"Korgun",
	// 	"Kurşunlu",
	// 	"Orta",
	// 	"Şabanözü",
	// 	"Yapraklı",
	// ],
	// Bitlis: ["Adilcevaz", "Ahlat", "Bitlis", "Güroymak", "Hizan", "Mutki", "Tatvan"],
	// Gümüşhane: ["Gümüşhane", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
	// Bolu: ["Bolu", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"],
	// Kahramanmaraş: [
	// 	"Afşin",
	// 	"Andırın",
	// 	"Çağlıyancerit",
	// 	"Ekinözü",
	// 	"Elbistan",
	// 	"Göksun",
	// 	"Kahramanmaraş",
	// 	"Nurhak",
	// 	"Pazarcık",
	// 	"Türkoğlu",
	// ],
	// Karaman: ["Ayrancı", "Başyayla", "Ermenek", "Karaman", "Kazımkarabekir", "Sarıveliler"],
	// Edirne: ["Edirne", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"],
	// Erzurum: [
	// 	"Aşkale",
	// 	"Aziziye",
	// 	"Çat",
	// 	"Hınıs",
	// 	"Horasan",
	// 	"İspir",
	// 	"Karaçoban",
	// 	"Karayazı",
	// 	"Köprüköy",
	// 	"Narman",
	// 	"Oltu",
	// 	"Olur",
	// 	"Palandöken",
	// 	"Pasinler",
	// 	"Pazaryolu",
	// 	"Şenkaya",
	// 	"Tekman",
	// 	"Tortum",
	// 	"Uzundere",
	// 	"Yakutiye",
	// ],
	// Hakkari: ["Çukurca", "Hakkari", "Şemdinli", "Yüksekova"],
	// Eskişehir: [
	// 	"Alpu",
	// 	"Beylikova",
	// 	"Çifteler",
	// 	"Günyüzü",
	// 	"Han",
	// 	"İnönü",
	// 	"Mahmudiye",
	// 	"Mihalgazi",
	// 	"Mihalıççık",
	// 	"Odunpazarı",
	// 	"Sarıcakaya",
	// 	"Seyitgazi",
	// 	"Sivrihisar",
	// 	"Tepebaşı",
	// ],
	// Elazığ: [
	// 	"Ağın",
	// 	"Alacakaya",
	// 	"Arıcak",
	// 	"Baskil",
	// 	"Elazığ",
	// 	"Karakoçan",
	// 	"Keban",
	// 	"Kovancılar",
	// 	"Maden",
	// 	"Palu",
	// 	"Sivrice",
	// ],
	// Karabük: ["Eflani", "Eskipazar", "Karabük", "Ovacık", "Safranbolu", "Yenice"],
	// Giresun: [
	// 	"Alucra",
	// 	"Bulancak",
	// 	"Çamoluk",
	// 	"Çanakçı",
	// 	"Dereli",
	// 	"Doğankent",
	// 	"Espiye",
	// 	"Eynesil",
	// 	"Giresun",
	// 	"Görele",
	// 	"Güce",
	// 	"Keşap",
	// 	"Piraziz",
	// 	"Şebinkarahisar",
	// 	"Tirebolu",
	// 	"Yağlıdere",
	// ],
	// Iğdır: ["Aralık", "Iğdır", "Karakoyunlu", "Tuzluca"],
	// Gaziantep: ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
	// Hatay: [
	// 	"Altınözü",
	// 	"Antakya",
	// 	"Belen",
	// 	"Dörtyol",
	// 	"Erzin",
	// 	"Hassa",
	// 	"İskenderun",
	// 	"Kırıkhan",
	// 	"Kumlu",
	// 	"Reyhanlı",
	// 	"Samandağ",
	// 	"Yayladağı",
	// ],
	// Erzincan: ["Çayırlı", "Erzincan", "Ilıç", "Kemah", "Kemaliye", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"],
	// Denizli: [
	// 	"Acıpayam",
	// 	"Akköy",
	// 	"Babadağ",
	// 	"Baklan",
	// 	"Bekilli",
	// 	"Beyağaç",
	// 	"Bozkurt",
	// 	"Buldan",
	// 	"Çal",
	// 	"Çameli",
	// 	"Çardak",
	// 	"Çivril",
	// 	"Denizli",
	// 	"Güney",
	// 	"Honaz",
	// 	"Kale",
	// 	"Sarayköy",
	// 	"Serinhisar",
	// 	"Tavas",
	// ],
	// Isparta: [
	// 	"Aksu",
	// 	"Atabey",
	// 	"Eğirdir",
	// 	"Gelendost",
	// 	"Gönen",
	// 	"Isparta",
	// 	"Keçiborlu",
	// 	"Şarkikaraağaç",
	// 	"Senirkent",
	// 	"Sütçüler",
	// 	"Uluborlu",
	// 	"Yalvaç",
	// 	"Yenişarbademli",
	// ],
	// Kars: ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Kars", "Sarıkamış", "Selim", "Susuz"],
	// Konya: [
	// 	"Ahırlı",
	// 	"Akören",
	// 	"Akşehir",
	// 	"Altınekin",
	// 	"Beyşehir",
	// 	"Bozkır",
	// 	"Çeltik",
	// 	"Cihanbeyli",
	// 	"Çumra",
	// 	"Derbent",
	// 	"Derebucak",
	// 	"Doğanhisar",
	// 	"Emirgazi",
	// 	"Ereğli",
	// 	"Güneysınır",
	// 	"Hadim",
	// 	"Halkapınar",
	// 	"Hüyük",
	// 	"Ilgın",
	// 	"Kadınhanı",
	// 	"Karapınar",
	// 	"Karatay",
	// 	"Kulu",
	// 	"Meram",
	// 	"Sarayönü",
	// 	"Selçuklu",
	// 	"Seydişehir",
	// 	"Taşkent",
	// 	"Tuzlukçu",
	// 	"Yalıhüyük",
	// 	"Yunak",
	// ],
	// Kırklareli: ["Babaeski", "Demirköy", "Kırklareli", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"],
	// Kastamonu: [
	// 	"Abana",
	// 	"Ağlı",
	// 	"Araç",
	// 	"Azdavay",
	// 	"Bozkurt",
	// 	"Çatalzeytin",
	// 	"Cide",
	// 	"Daday",
	// 	"Devrekani",
	// 	"Doğanyurt",
	// 	"Hanönü",
	// 	"İhsangazi",
	// 	"İnebolu",
	// 	"Kastamonu",
	// 	"Küre",
	// 	"Pınarbaşı",
	// 	"Şenpazar",
	// 	"Seydiler",
	// 	"Taşköprü",
	// 	"Tosya",
	// ],
	// Kilis: ["Elbeyli", "Kilis", "Musabeyli", "Polateli"],
	// Kırşehir: ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Kırşehir", "Mucur"],
	// Mersin: [
	// 	"Akdeniz",
	// 	"Anamur",
	// 	"Aydıncık",
	// 	"Bozyazı",
	// 	"Çamlıyayla",
	// 	"Erdemli",
	// 	"Gülnar",
	// 	"Mezitli",
	// 	"Mut",
	// 	"Silifke",
	// 	"Tarsus",
	// 	"Toroslar",
	// 	"Yenişehir",
	// ],
	// Kocaeli: [
	// 	"Başiskele",
	// 	"Çayırova",
	// 	"Darıca",
	// 	"Derince",
	// 	"Dilovası",
	// 	"Gebze",
	// 	"Gölcük",
	// 	"İzmit",
	// 	"Kandıra",
	// 	"Karamürsel",
	// 	"Kartepe",
	// 	"Körfez",
	// ],
	// Manisa: [
	// 	"Ahmetli",
	// 	"Akhisar",
	// 	"Alaşehir",
	// 	"Demirci",
	// 	"Gölmarmara",
	// 	"Gördes",
	// 	"Kırkağaç",
	// 	"Köprübaşı",
	// 	"Kula",
	// 	"Manisa",
	// 	"Salihli",
	// 	"Sarıgöl",
	// 	"Saruhanlı",
	// 	"Selendi",
	// 	"Soma",
	// 	"Turgutlu",
	// ],
	// Malatya: [
	// 	"Akçadağ",
	// 	"Arapkir",
	// 	"Arguvan",
	// 	"Battalgazi",
	// 	"Darende",
	// 	"Doğanşehir",
	// 	"Doğanyol",
	// 	"Hekimhan",
	// 	"Kale",
	// 	"Kuluncak",
	// 	"Malatya",
	// 	"Pütürge",
	// 	"Yazıhan",
	// 	"Yeşilyurt",
	// ],
	// Muğla: [
	// 	"Bodrum",
	// 	"Dalaman",
	// 	"Datça",
	// 	"Fethiye",
	// 	"Kavaklıdere",
	// 	"Köyceğiz",
	// 	"Marmaris",
	// 	"Milas",
	// 	"Muğla",
	// 	"Ortaca",
	// 	"Ula",
	// 	"Yatağan",
	// ],
	// Muş: ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Muş", "Varto"],
	// Kayseri: [
	// 	"Akkışla",
	// 	"Bünyan",
	// 	"Develi",
	// 	"Felahiye",
	// 	"Hacılar",
	// 	"İncesu",
	// 	"Kocasinan",
	// 	"Melikgazi",
	// 	"Özvatan",
	// 	"Pınarbaşı",
	// 	"Sarıoğlan",
	// 	"Sarız",
	// 	"Talas",
	// 	"Tomarza",
	// 	"Yahyalı",
	// 	"Yeşilhisar",
	// ],
	// Kırıkkale: ["Bahşili", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Kırıkkale", "Sulakyurt", "Yahşihan"],
	// Mardin: ["Dargeçit", "Derik", "Kızıltepe", "Mardin", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
	// Kütahya: [
	// 	"Altıntaş",
	// 	"Aslanapa",
	// 	"Çavdarhisar",
	// 	"Domaniç",
	// 	"Dumlupınar",
	// 	"Emet",
	// 	"Gediz",
	// 	"Hisarcık",
	// 	"Kütahya",
	// 	"Pazarlar",
	// 	"Şaphane",
	// 	"Simav",
	// 	"Tavşanlı",
	// ],
	// Niğde: ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Niğde", "Ulukışla"],
	// Nevşehir: ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Nevşehir", "Ürgüp"],
	// Şanlıurfa: [
	// 	"Akçakale",
	// 	"Birecik",
	// 	"Bozova",
	// 	"Ceylanpınar",
	// 	"Halfeti",
	// 	"Harran",
	// 	"Hilvan",
	// 	"Şanlıurfa",
	// 	"Siverek",
	// 	"Suruç",
	// 	"Viranşehir",
	// ],
	// Ordu: [
	// 	"Akkuş",
	// 	"Aybastı",
	// 	"Çamaş",
	// 	"Çatalpınar",
	// 	"Çaybaşı",
	// 	"Fatsa",
	// 	"Gölköy",
	// 	"Gülyalı",
	// 	"Gürgentepe",
	// 	"İkizce",
	// 	"Kabadüz",
	// 	"Kabataş",
	// 	"Korgan",
	// 	"Kumru",
	// 	"Mesudiye",
	// 	"Ordu",
	// 	"Perşembe",
	// 	"Ulubey",
	// 	"Ünye",
	// ],
	// Tokat: [
	// 	"Almus",
	// 	"Artova",
	// 	"Başçiftlik",
	// 	"Erbaa",
	// 	"Niksar",
	// 	"Pazar",
	// 	"Reşadiye",
	// 	"Sulusaray",
	// 	"Tokat",
	// 	"Turhal",
	// 	"Yeşilyurt",
	// 	"Zile",
	// ],
	// Yozgat: [
	// 	"Akdağmadeni",
	// 	"Aydıncık",
	// 	"Boğazlıyan",
	// 	"Çandır",
	// 	"Çayıralan",
	// 	"Çekerek",
	// 	"Kadışehri",
	// 	"Saraykent",
	// 	"Sarıkaya",
	// 	"Şefaatli",
	// 	"Sorgun",
	// 	"Yenifakılı",
	// 	"Yerköy",
	// 	"Yozgat",
	// ],
	// Osmaniye: ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Osmaniye", "Sumbas", "Toprakkale"],
	// Samsun: [
	// 	"Alaçam",
	// 	"Asarcık",
	// 	"Atakum",
	// 	"Ayvacık",
	// 	"Bafra",
	// 	"Canik",
	// 	"Çarşamba",
	// 	"Havza",
	// 	"İlkadım",
	// 	"Kavak",
	// 	"Ladik",
	// 	"Ondokuzmayıs",
	// 	"Salıpazarı",
	// 	"Tekkeköy",
	// 	"Terme",
	// 	"Vezirköprü",
	// 	"Yakakent",
	// ],
	// Sivas: [
	// 	"Akıncılar",
	// 	"Altınyayla",
	// 	"Divriği",
	// 	"Doğanşar",
	// 	"Gemerek",
	// 	"Gölova",
	// 	"Gürün",
	// 	"Hafik",
	// 	"İmranlı",
	// 	"Kangal",
	// 	"Koyulhisar",
	// 	"Şarkışla",
	// 	"Sivas",
	// 	"Suşehri",
	// 	"Ulaş",
	// 	"Yıldızeli",
	// 	"Zara",
	// ],
	// Sinop: ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Saraydüzü", "Sinop", "Türkeli"],
	// Rize: [
	// 	"Ardeşen",
	// 	"Çamlıhemşin",
	// 	"Çayeli",
	// 	"Derepazarı",
	// 	"Fındıklı",
	// 	"Güneysu",
	// 	"Hemşin",
	// 	"İkizdere",
	// 	"İyidere",
	// 	"Kalkandere",
	// 	"Pazar",
	// 	"Rize",
	// ],
	// Şırnak: ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Şırnak", "Uludere"],
	// Tunceli: ["Çemişgezek", "Hozat", "Mazgirt", "Nazımiye", "Ovacık", "Pertek", "Pülümür", "Tunceli"],
	// Siirt: ["Aydınlar", "Baykan", "Eruh", "Kurtalan", "Pervari", "Siirt", "Şirvan"],
	// Yalova: ["Altınova", "Armutlu", "Çiftlikköy", "Çınarcık", "Termal", "Yalova"],
	// Van: [
	// 	"Bahçesaray",
	// 	"Başkale",
	// 	"Çaldıran",
	// 	"Çatak",
	// 	"Edremit",
	// 	"Erciş",
	// 	"Gevaş",
	// 	"Gürpınar",
	// 	"Muradiye",
	// 	"Özalp",
	// 	"Saray",
	// 	"Van",
	// ],
	// Sakarya: [
	// 	"Adapazarı",
	// 	"Akyazı",
	// 	"Arifiye",
	// 	"Erenler",
	// 	"Ferizli",
	// 	"Geyve",
	// 	"Hendek",
	// 	"Karapürçek",
	// 	"Karasu",
	// 	"Kaynarca",
	// 	"Kocaali",
	// 	"Pamukova",
	// 	"Sapanca",
	// 	"Serdivan",
	// 	"Söğütlü",
	// 	"Taraklı",
	// ],
	// Tekirdağ: ["Çerkezköy", "Çorlu", "Hayrabolu", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Şarköy", "Tekirdağ"],
	// Trabzon: [
	// 	"Akçaabat",
	// 	"Araklı",
	// 	"Arsin",
	// 	"Beşikdüzü",
	// 	"Çarşıbaşı",
	// 	"Çaykara",
	// 	"Dernekpazarı",
	// 	"Düzköy",
	// 	"Hayrat",
	// 	"Köprübaşı",
	// 	"Maçka",
	// 	"Of",
	// 	"Şalpazarı",
	// 	"Sürmene",
	// 	"Tonya",
	// 	"Trabzon",
	// 	"Vakfıkebir",
	// 	"Yomra",
	// ],
	// Uşak: ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Uşak"],
	// Zonguldak: ["Alaplı", "Çaycuma", "Devrek", "Gökçebey", "Karadenizereğli", "Zonguldak"],
};

export const CarTypes = [
	{ label: "Otomobil", value: "Otomobil" },
	{ label: "SUV", value: "SUV" },
	{ label: "Motorsiklet", value: "Motorsiklet" },
	{ label: "Ticari", value: "Ticari" },
];
