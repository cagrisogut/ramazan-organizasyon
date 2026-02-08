// GNŞ ORGANİZASYON RAMAZAN ETKİNLİK TAKVİMİ VERİLERİ

// 1. STANDART GÜNLÜK AKIŞ ŞABLONU (20:00 - 24:00 Arası Her Gün)
export const DAILY_FLOW_TEMPLATE = {
    children: [
        { time: "20:00 - 20:30", activity: "Hacivat Karagöz / Kukla Gösterisi" },
        { time: "20:30 - 21:30", activity: "Çocuklarla Oyun Atölyesi" },
        { time: "21:30 - 22:00", activity: "Davul Yapım Atölyesi" },
        { time: "22:00 - 22:15", activity: "Sıcak Çikolata Dağıtımı" },
        { time: "22:15 - 22:45", activity: "Camini Tasarla Etkinliği" },
        { time: "22:45 - 23:15", activity: "Fener Yapım Etkinliği" },
        { time: "23:15 - 23:45", activity: "Kitap ve Pamuk Şeker Dağıtımı" },
        { time: "23:45 - 24:00", activity: "Toplu Fotoğraf Çekimi" }
    ],
    adults: [
        { time: "20:00 - 20:15", activity: "Başkanın Konuşması" },
        { time: "20:15 - 20:40", activity: "Kuran-ı Kerim Tilaveti" },
        { time: "20:40 - 21:00", activity: "İlahi Dinletisi" },
        { time: "21:00 - 21:15", activity: "Çay ve Sıcak Salep Dağıtımı" },
        { time: "21:15 - 21:45", activity: "Tasavvuf Müziği ve Semazen Gösterisi" },
        { time: "21:50 - 22:30", activity: "Ramazan Ayının Faziletleri ve Eski Ramazanlar Söyleşisi" },
        { time: "22:30 - 23:30", activity: "Sazlar ve Aşıklar ile Ramazan" },
        { time: "23:30 - 24:00", activity: "Halkın Belediye Beklentileri Söyleşisi" }
    ]
};

// 2. KÖY PROGRAMLARI (İlk 26 Gün)
export const VILLAGE_PROGRAMS = [
    { day: 1, village: "Köy 1", dayOfWeek: "Perşembe" },
    { day: 2, village: "Köy 2", dayOfWeek: "Cuma" },
    { day: 3, village: "Köy 3", dayOfWeek: "Cumartesi" },
    { day: 4, village: "Köy 4", dayOfWeek: "Pazar" },
    { day: 5, village: "Köy 5", dayOfWeek: "Pazartesi" },
    { day: 6, village: "Köy 6", dayOfWeek: "Salı" },
    { day: 7, village: "Köy 7", dayOfWeek: "Çarşamba" },
    { day: 8, village: "Köy 8", dayOfWeek: "Perşembe" },
    { day: 9, village: "Köy 9", dayOfWeek: "Cuma" },
    { day: 10, village: "Köy 10", dayOfWeek: "Cumartesi" },
    { day: 11, village: "Köy 11", dayOfWeek: "Pazar" },
    { day: 12, village: "Köy 12", dayOfWeek: "Pazartesi" },
    { day: 13, village: "Köy 13", dayOfWeek: "Salı" },
    { day: 14, village: "Köy 14", dayOfWeek: "Çarşamba" },
    { day: 15, village: "Köy 15", dayOfWeek: "Perşembe" },
    { day: 16, village: "Köy 16", dayOfWeek: "Cuma" },
    { day: 17, village: "Köy 17", dayOfWeek: "Cumartesi" },
    { day: 18, village: "Köy 18", dayOfWeek: "Pazar" },
    { day: 19, village: "Köy 19", dayOfWeek: "Pazartesi" },
    { day: 20, village: "Köy 20", dayOfWeek: "Salı" },
    { day: 21, village: "Köy 21", dayOfWeek: "Çarşamba" },
    { day: 22, village: "Köy 22", dayOfWeek: "Perşembe" },
    { day: 23, village: "Köy 23", dayOfWeek: "Cuma" },
    { day: 24, village: "Köy 24", dayOfWeek: "Cumartesi" },
    { day: 25, village: "Köy 25", dayOfWeek: "Pazar" },
    { day: 26, village: "Köy 26", dayOfWeek: "Pazartesi" }
];

// Köy programı akışı (tüm köyler için aynı)
export const VILLAGE_PROGRAM_FLOW = [
    { time: "20:00 - 21:00", activity: "Hacivat Karagöz, Gölge Oyunu, Pamuk Şeker & Marshmellow" },
    { time: "21:15 - 22:15", activity: "Kuran-ı Kerim Tilaveti, Ney Dinletisi" }
];

// 3. 30 GÜNLÜK ÖZEL ETKİNLİK LİSTESİ
export const DAILY_SPECIAL_EVENTS = [
    {
        day: 1,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Kukla Gösterisi & Beni Sahura Kaldırın" }
        ]
    },
    {
        day: 2,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Tasavvuf Sohbeti" },
            { time: "18:00", event: "HALK GÜNÜ İFTAR", isSpecialIftar: true },
            { time: "19:00", event: "Hacivat Karagöz & Ramazan Günlüğü Kitabı" }
        ]
    },
    {
        day: 3,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Aşuk ve Maşuk & Fener Yapım Atölyesi" }
        ]
    },
    {
        day: 4,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Ramazan Sudokusu & Pamuk Şeker" }
        ]
    },
    {
        day: 5,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Ramazan Davul Yapımı & Oyuncak Dağıtımı" }
        ]
    },
    {
        day: 6,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Hilal Kapı Süsü & Ramazan Şerbeti/Macun" }
        ]
    },
    {
        day: 7,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "18:00", event: "ÜNİVERSİTE İFTARI", isSpecialIftar: true },
            { time: "19:00", event: "Camini Tasarla & Salep Günü" }
        ]
    },
    {
        day: 8,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Katlamalı Mahya Etkinliği & Macun" }
        ]
    },
    {
        day: 9,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Mahya Asma Etkinliği & Sıcak Çikolata" }
        ]
    },
    {
        day: 10,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Ramazan Albümü & Marshmellow" }
        ]
    },
    {
        day: 11,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Ramazan Örüntüm & Yüz Boyama" }
        ]
    },
    {
        day: 12,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Tasavvuf Sohbeti" },
            { time: "18:00", event: "PROTOKOL İFTAR", isSpecialIftar: true },
            { time: "19:00", event: "Oyun Hamurundan Gül Yapımı & Kestane" }
        ]
    },
    {
        day: 13,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Kukla Yapımı & Közde Kartol" }
        ]
    },
    {
        day: 14,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Ramazan Ayıracı & Salep" }
        ]
    },
    {
        day: 15,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Aile Büyüklerini Çiz/Tanıt & Boza" }
        ]
    },
    {
        day: 16,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Akraba Ziyareti Draması & Sıcak Çikolata" }
        ]
    },
    {
        day: 17,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Kuran Tilaveti" },
            { time: "18:00", event: "MUHTARLAR İFTARI", isSpecialIftar: true },
            { time: "19:00", event: "İftar Tabağı Hazırlama & Oyuncak Yumurta" }
        ]
    },
    {
        day: 18,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Bayram Dilekleri & Çikolata Dağıtımı" }
        ]
    },
    {
        day: 19,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Bileklik Yapımı & Salep" }
        ]
    },
    {
        day: 20,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Bayram Kumbarası & Kestane" }
        ]
    },
    {
        day: 21,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Dua Ezberleme & Sıcak Çikolata" }
        ]
    },
    {
        day: 22,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "18:00", event: "YAŞLI VE ENGELLİLER İFTARI", isSpecialIftar: true },
            { time: "19:00", event: "Çocuk Tiyatrosu & Pamuk Şeker" }
        ]
    },
    {
        day: 23,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Müzik Etkinliği & Salep" }
        ]
    },
    {
        day: 24,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Kukla Gösterisi & Sıcak Çikolata" }
        ]
    },
    {
        day: 25,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Hacivat Karagöz & Dua Okuma Etkinliği" }
        ]
    },
    {
        day: 26,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Kukla Gösterisi & Kestane" }
        ],
        isKadirGecesi: true
    },
    {
        day: 27,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Kuran Tilaveti" },
            { time: "18:00", event: "İHTİYAÇ SAHİPLERİ İFTARI", isSpecialIftar: true },
            { time: "19:00", event: "Parmak Boyama & Kuruyemiş" }
        ]
    },
    {
        day: 28,
        highlights: [
            { time: "17:15", event: "Ney Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Çocuk Korosu & Salep" }
        ]
    },
    {
        day: 29,
        highlights: [
            { time: "17:15", event: "Kanun Dinletisi & Kuran Tilaveti" },
            { time: "19:00", event: "Bayram Dilekleri & Marshmellow" }
        ]
    },
    {
        day: 30,
        isArife: true,
        highlights: [
            { time: "17:15", event: "Saz Dinletisi & Tasavvuf Sohbeti" },
            { time: "19:00", event: "Bayram Kolisi & Sürpriz Yumurta" }
        ]
    },
    {
        day: 31,
        isBayram: true,
        bayramDay: 1,
        highlights: [
            { time: "09:00", event: "Bayramlaşma & Kahvaltı" },
            { time: "13:00", event: "Çocuk Panayırı" },
            { time: "14:00", event: "Bayram Harçlığı" },
            { time: "20:00", event: "Bayram Konseri" }
        ],
        bayramSchedule: {
            morning: [
                { time: "06:30", event: "Bayram Namazı" },
                { time: "09:00", event: "Bayramlaşma & Kahvaltı İkramı" }
            ],
            daytime: [
                { time: "13:00 - 17:00", event: "Çocuk Panayırı & Şişme Oyun Parkları" },
                { time: "14:00", event: "Geleneksel Bayram Harçlığı Dağıtımı" },
                { time: "15:00", event: "Pamuk Şeker & Macun İkramı" }
            ],
            evening: [
                { time: "20:00", event: "Büyük Bayram Konseri" },
                { time: "21:30", event: "Havai Fişek Gösterisi" }
            ]
        }
    }

];

export const CHILDREN_EVENT_PLAN = [
    {
        category: "Sahne Gösterileri",
        items: [
            { title: "Hacivat Karagöz", duration: "30 dk" },
            { title: "Aşuk Maşuk", duration: "30 dk" },
            { title: "Kukla Gösterisi", duration: "30 dk" }
        ]
    },
    {
        category: "Atölyeler",
        items: [
            { title: "Beni Sahura Kaldırın", duration: "20 dk" },
            { title: "Camini Tasarla", duration: "20 dk" },
            { title: "Kukla Yapımı", duration: "20 dk" }
        ]
    },
    {
        category: "İkramlar",
        items: [
            { title: "Ramazan Günlüğü Kitabı", duration: null },
            { title: "Salep", duration: null },
            { title: "Sıcak Çikolata", duration: null },
            { title: "Pamuk Şeker", duration: null },
            { title: "Macun", duration: null },
            { title: "Marshmellow", duration: null },
            { title: "Oyuncak Dağıtımı", duration: null }
        ]
    }
];

// 4. ANA VERİ YAPISI - RAMADAN_DATA
export const RAMADAN_DATA = DAILY_SPECIAL_EVENTS.map((specialEvent) => {
    const day = specialEvent.day;
    // Ramazan 2026 starts Feb 19
    const date = new Date(2026, 1, 19 + day - 1); // Month is 0-indexed (1 = Feb)
    const dateStr = date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

    // Bayram günleri - özel işleme (30. ve 31. günler)
    if (specialEvent.isBayram) {
        const bayramDayNum = specialEvent.bayramDay || 1;
        return {
            day,
            date: dateStr,
            hijri: `Ramazan Bayramı ${bayramDayNum}. Gün`,
            isBayram: true,
            bayramDay: bayramDayNum,
            isSpecial: true,
            specialTag: `Ramazan Bayramı ${bayramDayNum}. Gün`,

            // Ana etkinlik bilgisi (kart önizlemesi için)
            mainEvent: {
                type: "Büyük Bayramlaşma Töreni",
                time: "09:00",
                image: "/images/bayram.jpg"
            },

            // Bayram günü özel programı
            bayramSchedule: specialEvent.bayramSchedule,

            // Günün öne çıkan etkinlikleri
            highlights: specialEvent.highlights,

            // Bayram günü için standart günlük akış yok
            dailyFlow: null,

            // Köy programı yok
            villageEvent: null
        };
    }

    // Köy programı var mı kontrol et (1-26. günler arası)
    const villageProgram = VILLAGE_PROGRAMS.find(vp => vp.day === day);

    // Ana etkinliği belirle (ilk highlight'tan)
    const mainHighlight = specialEvent.highlights[0];
    const mainEventType = mainHighlight.event.split(' & ')[0]; // İlk etkinliği al

    return {
        day,
        date: dateStr,
        hijri: `${day} Ramazan`,

        // Ana etkinlik bilgisi (kart önizlemesi için)
        mainEvent: {
            type: mainEventType,
            time: mainHighlight.time,
            image: `/images/${mainEventType.toLowerCase().replace(/\s+/g, '-')}.jpg`
        },

        // Özel günler işaretleme
        isSpecial: specialEvent.isKadirGecesi || specialEvent.isArife || false,
        specialTag: specialEvent.isKadirGecesi ? "Kadir Gecesi" : specialEvent.isArife ? "Arife Günü" : null,

        // Günün öne çıkan etkinlikleri
        highlights: specialEvent.highlights,

        // Standart günlük akış (her gün aynı)
        dailyFlow: DAILY_FLOW_TEMPLATE,

        // Köy programı (varsa)
        villageEvent: villageProgram ? {
            village: villageProgram.village,
            dayOfWeek: villageProgram.dayOfWeek,
            program: VILLAGE_PROGRAM_FLOW
        } : null
    };
});
