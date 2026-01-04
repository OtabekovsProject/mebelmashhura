const products = [
    {
        id: 1,
        name: "yotoq",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price:   8600000,
        category: "chair",
        images: [
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
           
        ],
        rating: 4.8,
        reviews: 124,
        material: "Rangi Oq",
    },
    {
        id: 2,
        name: "Dizaynli Kravat",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 7400000  ,
        category: "sofa",
        images: [
            "./images/31.jpg",
            "./images/32.jpg",
            "./images/33.jpg",
           
        ],
        rating: 4.9,
        reviews: 89,
        material: "Fabric, Wood",
    },
    {
        id: 3,
        name: "Yotoqxona Mebeli",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 16000000,
        category: "bed",
        images: [
            "./images/41.jpg",
            "./images/39.jpg",
            "./images/38.jpg",
            "./images/40.jpg",
            
        ],
        rating: 4.7,
        reviews: 56,
        material: "Oak Wood",
    },
    {
        id: 4,
        name: "Yotoqxona Mebeli",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "bed",
        images: [
            "./images/60.jpg",
            "./images/61.jpg",
            "./images/62.jpg",
        ],
        rating: 4.6,
        reviews: 78,
        material: "Fabric, Wood",
    },
    {
        id: 5,
        name: "Yotoqxona Mebeli",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "chair",
        images: [
            "./images/63.jpg",
            "./images/64.jpg",
            "./images/65.jpg",
        ],
        rating: 4.5,
        reviews: 92,
        material: "Mesh, Metal",
    },
    {
        id: 6,
        name: "Bolalar Xonasi",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5800000,
        category: "sofa",
        images: [
            "./images/66.jpg",
            "./images/67.jpg",
            "./images/68.jpg",
        ],
        rating: 4.8,
        reviews: 65,
        material: "Fabric, Wood",
    },
    {
        id: 7,
        name: "Oq Mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/69.jpg",
            "./images/70.jpg",
            "./images/71.jpg"
        ],
        rating: 4.4,
        reviews: 43,
        material: "Ceramic, Fabric",
    },
    {
        id: 8,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9500000,
        category: "lamp",
        images: [
            "./images/72.jpg",
            "./images/73.jpg",
            "./images/74.jpg",
        ],
        rating: 4.2,
        reviews: 28,
        material: "Metal, Plastic",
    },
    {
        id: 9,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "lamp",
        images: [
            "./images/78.jpg",
            "./images/79.jpg",
            "./images/80.jpg",
        ],
        rating: 4.1,
        reviews: 35,
        material: "Metal, Plastic",
    },
    {
        id: 10,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "lamp",
        images: [
            "./images/85.jpg",
            "./images/86.jpg",
            "./images/87.jpg",
        ],
        rating: 4.5,
        reviews: 42,
        material: "Metal, Plastic",
    },
    {
        id: 11,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "lamp",
        images: [
       "./images/88.jpg",
            "./images/89.jpg",
          
        ],
        rating: 4.3,
        reviews: 51,
        material: "Metal, Plastic",
    },
    {
        id: 12,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/81.jpg",
            "./images/82.jpg",
        ],
        rating: 4.6,
        reviews: 38,
        material: "Metal, Plastic",
    },
    {
        id: 13,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 7500000,
        category: "lamp",
        images: [
            "./images/76.jpg",
            "./images/77.jpg",
        
        ],
        rating: 4.2,
        reviews: 29,
        material: "Metal, Plastic",
    },
    {
        id: 14,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/90.jpg",
            "./images/91.jpg",
    
        ],
        rating: 4.7,
        reviews: 44,
        material: "Metal, Plastic",
    },
    {
        id: 15,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 22000000,
        category: "lamp",
        images: [
            "./images/92.jpg",
            "./images/93.jpg",
            "./images/94.jpg",
            "./images/95.jpg",
        ],
        rating: 4.4,
        reviews: 56,
        material: "Metal, Plastic",
    },
    {
        id: 16,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 13500000,
        category: "lamp",
        images: [
            "./images/107.jpg",
            "./images/108.jpg",
            "./images/109.jpg",
        ],
        rating: 4.8,
        reviews: 72,
        material: "Metal, Plastic",
    }, 
    {
        id: 17,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 10000000,
        category: "lamp",
        images: [
            "./images/12.jpg",
            "./images/13.jpg",
        ],
        rating: 4.1,
        reviews: 33,
        material: "Metal, Plastic",
    },
    {
        id: 18,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9800000,
        category: "lamp",
        images: [
            "./images/14.jpg",
            "./images/15.jpg",
            "./images/16.jpg",
        ],
        rating: 4.5,
        reviews: 47,
        material: "Metal, Plastic",
    },
    {
        id: 19,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "lamp",
        images: [
            "./images/9.jpg",
            "./images/10.jpg",
        ],
        rating: 4.6,
        reviews: 68,
        material: "Metal, Plastic",
    },
    {
        id: 20,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 16000000,
        category: "lamp",
        images: [
            "./images/28.jpg",
            "./images/29.jpg",
        ],
        rating: 4.3,
        reviews: 25,
        material: "Metal, Plastic",
    },
    {
        id: 21,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "lamp",
        images: [
            "./images/88.jpg",
            "./images/89.jpg",
        ],
        rating: 4.7,
        reviews: 39,
        material: "Metal, Plastic",
    },
    {
        id: 22,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 23000000,
        category: "lamp",
        images: [
            "./images/110.jpg",
            "./images/111.jpg",
            "./images/112.jpg",
        ],
        rating: 4.2,
        reviews: 31,
        material: "Metal, Plastic",
    },
    {
        id: 23,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 16000000,
        category: "lamp",
        images: [
            "./images/18.jpg",
            "./images/19.jpg",
            "./images/20.jpg",
        ],
        rating: 4.5,
        reviews: 46,
        material: "Metal, Plastic",
  
    },
    {
        id: 24,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "lamp",
        images: [
            "./images/21.jpg",
            "./images/22.jpg",
            "./images/24.jpg",
        ],
        rating: 4.6,
        reviews: 52,
        material: "Metal, Plastic",
    },
    {
        id: 25,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "lamp",
        images: [
            "./images/47.jpg",
            "./images/48.jpg",
        ],
        rating: 4.3,
        reviews: 27,
        material: "Metal, Plastic",
    },
    {
        id: 26,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11500000,
        category: "lamp",
        images: [
            "./images/55.jpg",
            "./images/56.jpg",
        ],
        rating: 4.4,
        reviews: 41,
        material: "Metal, Plastic",
    },
    {
        id: 27,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/103.jpg",
            "./images/104.jpg",
            "./images/105.jpg",
            "./images/102.jpg",
            "./images/101.jpg",
            "./images/100.jpg",
        ],
        rating: 4.7,
        reviews: 63,
    },
    {
        id: 28,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "lamp",
        images: [
            "./images/26.jpg",
            "./images/27.jpg",
        ],
        rating: 4.2,
        reviews: 34,
        material: "Metal, Plastic",
    },
    {
        id: 29,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4500000,
        category: "lamp",
        images: [
            "./images/34.jpg",
            "./images/35.jpg",
        ],
        rating: 4.5,
        reviews: 58,

    },
 {
        id: 30,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "lamp",
        images: [
            "./images/42.jpg",
            "./images/43.jpg",
            "./images/44.jpg",
        ],
        rating: 4.6,
        reviews: 71,

    },
     {
        id: 31,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/57.jpg",
            "./images/58.jpg",
            "./images/59.jpg",
        ],
        rating: 4.3,
        reviews: 49,

    },
     {
        id: 32,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6000000,
        category: "lamp",
        images: [
            "./images/IMG_20251031_195249_221.jpg",
            "./images/IMG_20251031_195249_362.jpg",
            "./images/IMG_20251031_195249_412.jpg",
            "./images/IMG_20251031_195249_891.jpg",
        ],
        rating: 4.7,
        reviews: 82,

    },
     {
        id: 33,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12500000,
        category: "lamp",
        images: [
            "./images/IMG_20251031_195311_224.jpg",
            "./images/IMG_20251031_195311_796.jpg",
            "./images/IMG_20251031_195311_155.jpg",
            
        ],
        rating: 4.4,
        reviews: 55,

    },
     {
        id: 34,
        name: "mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 7500000,
        category: "lamp",
        images: [
            "./images/52.jpg",
            "./images/53.jpg",
            "./images/54.jpg",
        ],
        rating: 4.8,
        reviews: 76,

    },
     {
        id: 35,
        name: "Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "lamp",
        images: [
         "./images/IMG_20251031_195121_612.jpg",
         "./images/IMG_20251031_195125_559.jpg",
        ],
        rating: 4.1,
        reviews: 23,

    },
     {
        id: 36,
        name: "Yotoq",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "lamp",
        images: [
          "./images/IMG_20251031_195224_863.jpg",
         "./images/IMG_20251031_195225_224.jpg",
         "./images/IMG_20251031_195225_266.jpg",
         
            
        ],
        rating: 4.6,
        reviews: 64,

    },
     {
        id: 37,
        name: "Mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (1).jpg",
         "./images/ugolok/ugolok (13).jpg",
        ],
        rating: 4.3,
        reviews: 31,

    },
     {
        id: 38,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (2).jpg",
         "./images/ugolok/ugolok (114).jpg",
        ],
        rating: 4.5,
        reviews: 42,

    },
     {
        id: 39,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (3).jpg",
         "./images/ugolok/ugolok (54).jpg",
        ],
        rating: 4.2,
        reviews: 28,

    },
     {
        id: 40,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 7000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (4).jpg",
         "./images/ugolok/ugolok (29).jpg",
         "./images/ugolok/ugolok (39).jpg",
         "./images/ugolok/ugolok (41).jpg",
         "./images/ugolok/ugolok (114).jpg",
        ],
        rating: 4.7,
        reviews: 56,

    },
     {
        id: 41,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (5).jpg",
        ],
        rating: 4.1,
        reviews: 19,

    },
     {
        id: 42,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (6).jpg",
        ],
        rating: 4.3,
        reviews: 24,

    },
     {
        id: 43,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (7).jpg",
         "./images/ugolok/ugolok (18).jpg",
        ],
        rating: 4.6,
        reviews: 38,

    },
     {
        id: 44,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (8).jpg",
         "./images/ugolok/ugolok (35).jpg",
        ],
        rating: 4.4,
        reviews: 33,

    },
      {
        id: 45,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (9).jpg",
        ],
        rating: 4.2,
        reviews: 21,

    },
      {
        id: 46,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (10).jpg",
         "./images/ugolok/ugolok (63).jpg",
        ],
        rating: 4.5,
        reviews: 46,

    },
      {
        id: 47,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (11).jpg",
         "./images/ugolok/ugolok (14).jpg",
         "./images/ugolok/ugolok (15).jpg",
         "./images/ugolok/ugolok (12).jpg",
        ],
        rating: 4.7,
        reviews: 61,

    },
     {
        id: 48,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (13).jpg",
         "./images/ugolok/ugolok (64).jpg",
         "./images/ugolok/ugolok (62).jpg",
         "./images/ugolok/ugolok (52).jpg",
        ],
        rating: 4.8,
        reviews: 73,

    }, 
         {
        id: 49,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 15500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (20).jpg",
        ],
        rating: 4.3,
        reviews: 26,

    },
         {
        id: 50,
        name: "Ugolok",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 13500000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (21).jpg",
         "./images/ugolok/ugolok (32).jpg",
         "./images/ugolok/ugolok (43).jpg",
        ],
        rating: 4.6,
        reviews: 54,

    },  
     {
        id: 51,
        name: "Oshxona stollari",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 15000000,
        category: "bed",
        images: [
         "./images/ugolok/ugolok (74).jpg",
         "./images/ugolok/ugolok (75).jpg",
         "./images/ugolok/ugolok (76).jpg",
         "./images/ugolok/ugolok (77).jpg",
         "./images/ugolok/ugolok (78).jpg",
         "./images/ugolok/ugolok (79).jpg",
         "./images/ugolok/ugolok (80).jpg",
         "./images/ugolok/ugolok (81).jpg",
        ],
        rating: 4.9,
        reviews: 87,

    },
        {
        id: 52,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 13500000,
        category: "sofa",
        images: [
         "./images/2u/ugolok2 (1).jpg",
        ],
        rating: 4.4,
        reviews: 31,

    }, 
    {
        id: 53,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 13500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (2).jpg",
        ],
        rating: 4.6,
        reviews: 42,
    },
    {
        id: 54,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 15000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (3).jpg",
        ],
        rating: 4.3,
        reviews: 28,
    },
    {
        id: 55,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (4).jpg",
        ],
        rating: 4.7,
        reviews: 53,
    },
    {
        id: 56,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2650000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (5).jpg",
        ],
        rating: 4.5,
        reviews: 36,
    },
    {
        id: 57,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (6).jpg",
        ],
        rating: 4.8,
        reviews: 61,
    },
    {
        id: 58,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3200000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (7).jpg",
        ],
        rating: 4.2,
        reviews: 24,
    },
    {
        id: 59,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3800000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (8).jpg",
        ],
        rating: 4.6,
        reviews: 47,
    },
    {
        id: 60,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3300000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (9).jpg",
        ],
        rating: 4.4,
        reviews: 39,
    },
    {
        id: 61,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3300000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (10).jpg",
        ],
        rating: 4.7,
        reviews: 58,
    },
    {
        id: 62,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3300000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (11).jpg",
        ],
        rating: 4.3,
        reviews: 32,
    },
    {
        id: 63,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 3300000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (12).jpg",
        ],
        rating: 4.9,
        reviews: 71,
    },
    {
        id: 64,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 12000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (13).jpg",
        ],
        rating: 4.5,
        reviews: 44,
    },
    {
        id: 65,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (14).jpg",
        ],
        rating: 4.6,
        reviews: 56,
    },
    {
        id: 66,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (15).jpg",
        ],
        rating: 4.2,
        reviews: 29,
    },
    {
        id: 67,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (16).jpg",
        ],
        rating: 4.8,
        reviews: 67,
    },
    {
        id: 68,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (17).jpg",
        ],
        rating: 4.4,
        reviews: 41,
    },
    {
        id: 69,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (18).jpg",
        ],
        rating: 4.7,
        reviews: 62,
    },
    {
        id: 70,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (19).jpg",
        ],
        rating: 4.3,
        reviews: 35,
    },
    {
        id: 71,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 10500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (20).jpg",
        ],
        rating: 4.9,
        reviews: 78,
    },
    {
        id: 72,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (21).jpg",
        ],
        rating: 4.5,
        reviews: 48,
    },
    {
        id: 73,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (22).jpg",
        ],
        rating: 4.6,
        reviews: 54,
    },
    {
        id: 74,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (23).jpg",
        ],
        rating: 4.2,
        reviews: 27,
    },
    {
        id: 75,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (24).jpg",
        ],
        rating: 4.8,
        reviews: 69,
    },
    {
        id: 76,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (25).jpg",
        ],
        rating: 4.4,
        reviews: 43,
    },
    {
        id: 77,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (26).jpg",
        ],
        rating: 4.7,
        reviews: 59,
    },
    {
        id: 78,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (27).jpg",
        ],
        rating: 4.3,
        reviews: 31,
    },
    {
        id: 79,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (28).jpg",
        ],
        rating: 4.9,
        reviews: 82,
    },
    {
        id: 80,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2800000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (29).jpg",
        ],
        rating: 4.5,
        reviews: 46,
    },
    {
        id: 81,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2800000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (30).jpg",
        ],
        rating: 4.6,
        reviews: 57,
    },
    {
        id: 82,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2800000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (31).jpg",
        ],
        rating: 4.2,
        reviews: 28,
    },
    {
        id: 83,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (32).jpg",
        ],
        rating: 4.8,
        reviews: 73,
    },
    {
        id: 84,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (33).jpg",
        ],
        rating: 4.4,
        reviews: 39,
    },
    {
        id: 85,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (34).jpg",
        ],
        rating: 4.7,
        reviews: 64,
    },
    {
        id: 86,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (35).jpg",
        ],
        rating: 4.3,
        reviews: 33,
    },
    {
        id: 87,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (36).jpg",
        ],
        rating: 4.9,
        reviews: 85,
    },
    {
        id: 88,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 7500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (37).jpg",
        ],
        rating: 4.5,
        reviews: 49,
    },
    {
        id: 89,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (38).jpg",
        ],
        rating: 4.6,
        reviews: 61,
    },
    {
        id: 90,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 19000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (39).jpg",
        ],
        rating: 4.2,
        reviews: 26,
    },
    {
        id: 91,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 11000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (40).jpg",
        ],
        rating: 4.8,
        reviews: 76,
    },
    {
        id: 92,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 6500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (41).jpg",
        ],
        rating: 4.4,
        reviews: 42,
    },
    {
        id: 93,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2700000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (42).jpg",
        ],
        rating: 4.7,
        reviews: 68,
    },
    {
        id: 94,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2700000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (43).jpg",
        ],
        rating: 4.3,
        reviews: 34,
    },
    {
        id: 95,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 10000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (44).jpg",
        ],
        rating: 4.9,
        reviews: 89,
    },
    {
        id: 96,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (45).jpg",
        ],
        rating: 4.5,
        reviews: 51,
    },
    {
        id: 97,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 8500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (46).jpg",
        ],
        rating: 4.6,
        reviews: 63,
    },
    {
        id: 98,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (47).jpg",
        ],
        rating: 4.2,
        reviews: 29,
    },
    {
        id: 99,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (48).jpg",
        ],
        rating: 4.8,
        reviews: 79,
    },
    {
        id: 100,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (49).jpg",
        ],
        rating: 4.4,
        reviews: 45,
    },
    {
        id: 101,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 5500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (50).jpg",
        ],
        rating: 4.7,
        reviews: 71,
    },
     {
        id: 102,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 10500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (51).jpg",
        ],
        rating: 4.3,
        reviews: 36,
    },
      {
        id: 103,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2650000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (52).jpg",
        ],
        rating: 4.9,
        reviews: 92,
    },
       {
        id: 104,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 15000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (53).jpg",
        ],
        rating: 4.5,
        reviews: 53,
    },
     {
        id: 105,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 15000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (54).jpg",
        ],
        rating: 4.6,
        reviews: 65,
    },
     {
        id: 106,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2750000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (55).jpg",
        ],
        rating: 4.2,
        reviews: 31,
    },
     {
        id: 107,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2650000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (56).jpg",
        ],
        rating: 4.8,
        reviews: 84,
    },
      {
        id: 108,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (57).jpg",
        ],
        rating: 4.4,
        reviews: 47,
    },
     {
        id: 109,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (58).jpg",
        ],
        rating: 4.7,
        reviews: 73,
    },
     {
        id: 110,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1250000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (59).jpg",
        ],
        rating: 4.3,
        reviews: 38,
    },
     {
        id: 111,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1050000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (60).jpg",
        ],
        rating: 4.9,
        reviews: 96,
    },
     {
        id: 112,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (61).jpg",
        ],
        rating: 4.5,
        reviews: 55,
    },
    {
        id: 113,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1150000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (62).jpg",
        ],
        rating: 4.6,
        reviews: 67,
    },
    {
        id: 114,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2650000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (63).jpg",
        ],
        rating: 4.2,
        reviews: 33,
    },
    {
        id: 115,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1150000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (64).jpg",
        ],
        rating: 4.8,
        reviews: 87,
    },
    {
        id: 116,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 9000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (65).jpg",
        ],
        rating: 4.4,
        reviews: 49,
    },
    {
        id: 117,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 2650000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (66).jpg",
        ],
        rating: 4.7,
        rating: 4.7,
        reviews: 75,
    },
    {
        id: 118,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1000000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (67).jpg",
        ],
        rating: 4.3,
        reviews: 40,
    },
    {
        id: 119,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1300000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (68).jpg",
        ],
        rating: 4.9,
        reviews: 99,
    },
    {
        id: 120,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (69).jpg",
        ],
        rating: 4.5,
        reviews: 58,
    },
    {
        id: 121,
        name: "Kichkina ugalok va mebel",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 4500000,
        category: "sofa",
        images: [
            "./images/2u/ugolok2 (70).jpg",
        ],
        rating: 4.6,
        reviews: 70,
    },
    {
        id: 122,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (1).jpg",
        ],
        rating: 4.2,
        reviews: 25,
    },
    {
        id: 123,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (2).jpg",
        ],
        rating: 4.7,
        reviews: 46,
    },
    {
        id: 124,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (3).jpg",
        ],
        rating: 4.4,
        reviews: 32,
    },
    {
        id: 125,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (4).jpg",
        ],
        rating: 4.8,
        reviews: 59,
    },
    {
        id: 126,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (5).jpg",
        ],
        rating: 4.3,
        reviews: 37,
    },
    {
        id: 127,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (6).jpg",
        ],
        rating: 4.9,
        reviews: 71,
    },
    {
        id: 128,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (7).jpg",
        ],
        rating: 4.5,
        reviews: 48,
    },
    {
        id: 129,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (8).jpg",
        ],
        rating: 4.6,
        reviews: 62,
    },
    {
        id: 130,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (9).jpg",
        ],
        rating: 4.2,
        reviews: 29,
    },
    {
        id: 131,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (10).jpg",
        ],
        rating: 4.7,
        reviews: 53,
    },
    {
        id: 132,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (11).jpg",
        ],
        rating: 4.4,
        reviews: 36,
    },
    {
        id: 133,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (12).jpg",
        ],
        rating: 4.8,
        reviews: 64,
    },
    {
        id: 134,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (13).jpg",
        ],
        rating: 4.3,
        reviews: 41,
    },
    {
        id: 135,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (14).jpg",
        ],
        rating: 4.9,
        reviews: 77,
    },
    {
        id: 136,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (15).jpg",
        ],
        rating: 4.5,
        reviews: 50,
    },
    {
        id: 137,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (16).jpg",
        ],
        rating: 4.6,
        reviews: 66,
    },
    {
        id: 138,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (17).jpg",
        ],
        rating: 4.2,
        reviews: 30,
    },
    {
        id: 139,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (18).jpg",
        ],
        rating: 4.7,
        reviews: 55,
    },
    {
        id: 140,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (19).jpg",
        ],
        rating: 4.4,
        reviews: 38,
    },
    {
        id: 141,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (20).jpg",
        ],
        rating: 4.8,
        reviews: 69,
    },
    {
        id: 142,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (21).jpg",
        ],
        rating: 4.3,
        reviews: 43,
    },
    {
        id: 143,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (22).jpg",
        ],
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 144,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (23).jpg",
        ],
        rating: 4.5,
        reviews: 52,
    },
    {
        id: 145,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (24).jpg",
        ],
        rating: 4.6,
        reviews: 68,
    },
    {
        id: 146,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (25).jpg",
        ],
        rating: 4.2,
        reviews: 31,
    },
    {
        id: 147,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (26).jpg",
        ],
        rating: 4.7,
        reviews: 57,
    },
    {
        id: 148,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (27).jpg",
        ],
        rating: 4.4,
        reviews: 40,
    },
    {
        id: 149,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (28).jpg",
        ],
        rating: 4.8,
        reviews: 72,
    },
    {
        id: 150,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (29).jpg",
        ],
        rating: 4.3,
        reviews: 45,
    },
    {
        id: 151,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (30).jpg",
        ],
        rating: 4.9,
        reviews: 85,
    },
    {
        id: 152,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (31).jpg",
        ],
        rating: 4.5,
        reviews: 54,
    },
    {
        id: 153,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (32).jpg",
        ],
        rating: 4.6,
        reviews: 70,
    },
    {
        id: 154,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (33).jpg",
        ],
        rating: 4.2,
        reviews: 33,
    },
    {
        id: 155,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (34).jpg",
        ],
        rating: 4.7,
        reviews: 60,
    },
    {
        id: 156,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (35).jpg",
        ],
        rating: 4.4,
        reviews: 42,
    },
    {
        id: 157,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (36).jpg",
        ],
        rating: 4.8,
        reviews: 75,
    },
    {
        id: 158,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (37).jpg",
        ],
        rating: 4.3,
        reviews: 46,
    },
    {
        id: 159,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (38).jpg",
        ],
        rating: 4.9,
        reviews: 88,
    },
    {
        id: 160,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (39).jpg",
        ],
        rating: 4.5,
        reviews: 56,
    },
    {
        id: 161,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (40).jpg",
        ],
        rating: 4.6,
        reviews: 73,
    },
    {
        id: 162,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (41).jpg",
        ],
        rating: 4.2,
        reviews: 35,
    },
    {
        id: 163,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (42).jpg",
        ],
        rating: 4.7,
        reviews: 63,
    },
    {
        id: 164,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (43).jpg",
        ],
        rating: 4.4,
        reviews: 44,
    },
    {
        id: 165,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (44).jpg",
        ],
        rating: 4.8,
        reviews: 78,
    },
    {
        id: 166,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (45).jpg",
        ],
        rating: 4.3,
        reviews: 48,
    },
    {
        id: 167,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (46).jpg",
        ],
        rating: 4.9,
        reviews: 91,
    },
    {
        id: 168,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (47).jpg",
        ],
        rating: 4.5,
        reviews: 58,
    },
    {
        id: 169,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (48).jpg",
        ],
        rating: 4.6,
        reviews: 76,
    },
    {
        id: 170,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (49).jpg",
        ],
        rating: 4.2,
        reviews: 37,
    },
    {
        id: 171,
        name: "Oshxona Uchun Mebellar",
        description: "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        price: 1900,
        category: "Table",
        images: [
            "./images/quxniy/quxniy (50).jpg",
        ],
        rating: 4.7,
        reviews: 65,
    },
    {
        "id": 172,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1850000,
        "category": "stul",
        "images": [
            "./images/stul/stul (1).jpg"
        ],
        "rating": 4.7,
        "reviews": 65
    },
    {
        "id": 173,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (2).jpg"
        ],
        "rating": 4.6,
        "reviews": 72
    },
    {
        "id": 174,
        "name": "Zamonaviy Stul",
        "description": "Zamonaviy interyerga mos keladigan qulay stul.",
        "price": 2100000,
        "category": "stul",
        "images": [
            "./images/stul/stul (3).jpg"
        ],
        "rating": 4.8,
        "reviews": 89
    },
    {
        "id": 175,
        "name": "Klassik Kreslo",
        "description": "Klassik uslubdagi hashamatli va qulay kreslo.",
        "price": 3500000,
        "category": "stul",
        "images": [
            "./images/stul/stul (4).jpg"
        ],
        "rating": 4.9,
        "reviews": 120
    },
    {
        "id": 176,
        "name": "Oshxona Stuli",
        "description": "Oshxona uchun qulay va chiroyli stul to'plami.",
        "price": 1650000,
        "category": "stul",
        "images": [
            "./images/stul/stul (5).jpg"
        ],
        "rating": 4.5,
        "reviews": 55
    },
    {
        "id": 177,
        "name": "Ofis Stuli",
        "description": "Uzoq o'tirish uchun mo'ljallangan, ergonomik ofis stuli.",
        "price": 2800000,
        "category": "stul",
        "images": [
            "./images/stul/stul (6).jpg"
        ],
        "rating": 4.4,
        "reviews": 98
    },
    {
        "id": 178,
        "name": "Bar Stuli",
        "description": "Barsingiz yoki oshxona orqa qismi uchun uslubli bar stuli.",
        "price": 1200000,
        "category": "stul",
        "images": [
            "./images/stul/stul (7).jpg"
        ],
        "rating": 4.3,
        "reviews": 41
    },
    {
        "id": 179,
        "name": "Yumshoq Stul",
        "description": "Mehmonxona uchun juda qulay yumshoq stul.",
        "price": 2200000,
        "category": "stul",
        "images": [
            "./images/stul/stul (8).jpg"
        ],
        "rating": 4.7,
        "reviews": 63
    },
    {
        "id": 180,
        "name": "Yog'och Stul",
        "description": "Tabiiy yog'ochdan yasalgan ekologik toza stul.",
        "price": 1950000,
        "category": "stul",
        "images": [
            "./images/stul/ustar (32).jpg"
        ],
        "rating": 4.6,
        "reviews": 77
    },
    {
        "id": 181,
        "name": "Metall Stul",
        "description": "Zamonaviy va mustahkam metall ramkali stul.",
        "price": 1750000,
        "category": "stul",
        "images": [
            "./images/stul/stul (10).jpg"
        ],
        "rating": 4.5,
        "reviews": 50
    },
    {
        "id": 182,
        "name": "Plastik Stul",
        "description": "Yengil, rang-barang va foydalanishga qulay plastik stul.",
        "price": 850000,
        "category": "stul",
        "images": [
            "./images/stul/stul (11).jpg"
        ],
        "rating": 4.1,
        "reviews": 88
    },
    {
        "id": 183,
        "name": "To'qima Stul",
        "description": "Qo'l to'qima mato bilan qoplangan hashamatli stul.",
        "price": 4200000,
        "category": "stul",
        "images": [
            "./images/stul/stul (12).jpg"
        ],
        "rating": 4.9,
        "reviews": 34
    },
    {
        "id": 184,
        "name": "Bolalar Stuli",
        "description": "Bolalar uchun xavfsiz va rangli kichik stul.",
        "price": 650000,
        "category": "stul",
        "images": [
            "./images/stul/stul (13).jpg"
        ],
        "rating": 4.8,
        "reviews": 112
    },
    {
        "id": 185,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (14).jpg"
        ],
        "rating": 4.7,
        "reviews": 65
    },
    {
        "id": 186,
        "name": "O'yinli Stul",
        "description": "Geymerlar uchun maxsus ishlab chiqilgan qulay stul.",
        "price": 4500000,
        "category": "stul",
        "images": [
            "./images/stul/stul (15).jpg"
        ],
        "rating": 4.8,
        "reviews": 150
    },
    {
        "id": 187,
        "name": "Kantri Stul",
        "description": "Kantri uslubidagi iliq va mehmondo'st stul.",
        "price": 2300000,
        "category": "stul",
        "images": [
            "./images/stul/stul (16).jpg"
        ],
        "rating": 4.6,
        "reviews": 69
    },
    {
        "id": 188,
        "name": "Minimalist Stul",
        "description": "Soddalik va funktsionallikni birlashtirgan stul.",
        "price": 1700000,
        "category": "stul",
        "images": [
            "./images/stul/stul (17).jpg"
        ],
        "rating": 4.5,
        "reviews": 45
    },
    {
        "id": 189,
        "name": "Loft Stuli",
        "description": "Loft interyerlari uchun mos keladigan industrial stul.",
        "price": 2500000,
        "category": "stul",
        "images": [
            "./images/stul/stul (18).jpg"
        ],
        "rating": 4.7,
        "reviews": 82
    },
    {
        "id": 190,
        "name": "Skandinaviya Stuli",
        "description": "Yengil va tabiiy skandinaviya dizayni.",
        "price": 2000000,
        "category": "stul",
        "images": [
            "./images/stul/stul (19).jpg"
        ],
        "rating": 4.8,
        "reviews": 91
    },
    {
        "id": 191,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (20).jpg"
        ],
        "rating": 4.7,
        "reviews": 65
    },
    {
        "id": 192,
        "name": "Transformer Stul",
        "description": "Balandligi o'zgaruvchan, ko'p funktsiyali stul.",
        "price": 3200000,
        "category": "stul",
        "images": [
            "./images/stul/stul (21).jpg"
        ],
        "rating": 4.4,
        "reviews": 73
    },
    {
        "id": 193,
        "name": "Klaviatura Stul",
        "description": "Klaviatura chalish uchun mo'ljallangan maxsus stul.",
        "price": 2900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (22).jpg"
        ],
        "rating": 4.6,
        "reviews": 28
    },
    {
        "id": 194,
        "name": "Dazmolli Stul",
        "description": "O'rindig'i va orqa qismi dazmollangan hashamatli stul.",
        "price": 3800000,
        "category": "stul",
        "images": [
            "./images/stul/stul (23).jpg"
        ],
        "rating": 4.9,
        "reviews": 105
    },
    {
        "id": 195,
        "name": "Akril Stul",
        "description": "Shaffof va zamonaviy akril materialidan yasalgan stul.",
        "price": 2600000,
        "category": "stul",
        "images": [
            "./images/stul/stul (24).jpg"
        ],
        "rating": 4.3,
        "reviews": 60
    },
    {
        "id": 196,
        "name": "Rattan Stul",
        "description": "Tabiiy rattan novdasidan to'qilgan yozgi stul.",
        "price": 1550000,
        "category": "stul",
        "images": [
            "./images/stul/stul (25).jpg"
        ],
        "rating": 4.5,
        "reviews": 48
    },
    {
        "id": 197,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (26).jpg"
        ],
        "rating": 4.7,
        "reviews": 65
    },
    {
        "id": 198,
        "name": "Puf Stul",
        "description": "Yumshoq va shaklini o'zgartira oladigan puf stul.",
        "price": 950000,
        "category": "stul",
        "images": [
            "./images/stul/stul (27).jpg"
        ],
        "rating": 4.2,
        "reviews": 130
    },
    {
        "id": 199,
        "name": "Kiyinish Stuli",
        "description": "Yotoqxona uchun kichik va oqilona yechim.",
        "price": 750000,
        "category": "stul",
        "images": [
            "./images/stul/stul (28).jpg"
        ],
        "rating": 4.4,
        "reviews": 95
    },
    {
        "id": 200,
        "name": "Tishli Stul",
        "description": "Tish jarrohligi kabinetalari uchun maxsus stul.",
        "price": 12000000,
        "category": "stul",
        "images": [
            "./images/stul/stul (29).jpg"
        ],
        "rating": 5.0,
        "reviews": 12
    },
    {
        "id": 201,
        "name": "Stollar",
        "description": "Xonadoningiz uchun Eng yaxshi Mebellar Mashxura Mebelda",
        "price": 1900000,
        "category": "stul",
        "images": [
            "./images/stul/stul (30).jpg"
        ],
        "rating": 4.7,
        "reviews": 65
    },
    {
        "id": 202,
        "name": "Velur Stul",
        "description": "Velur matodan tayyorlangan, hashamatli va yumshoq stul.",
        "price": 3100000,
        "category": "stul",
        "images": [
            "./images/stul/stul (31).jpg"
        ],
        "rating": 4.8,
        "reviews": 76
    },
    {
        "id": 203,
        "name": "Stul",
        "description": "Velur matodan tayyorlangan, hashamatli va yumshoq stul.",
        "price": 3100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (1).jpg"
        ],
        "rating": 4.8,
        "reviews": 76
    },
    {
        "id": 204,
        "name": "Stul",
        "description": "Zamonaviy dizaynli, qulay va chiroyli stul. Ofis va uy uchun mos keladi.",
        "price": 2500000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (2).jpg"
        ],
        "rating": 4.6,
        "reviews": 58
    },
    {
        "id": 205,
        "name": "Stul",
        "description": "Klassik uslubdagi, daraxtdan yasalgan hashamatli stul. Mehmonxona uchun ideal.",
        "price": 3800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (3).jpg"
        ],
        "rating": 4.9,
        "reviews": 92
    },
    {
        "id": 206,
        "name": "Stul",
        "description": "Uzoq vaqt o'tirish uchun mo'ljallangan, qulay va ergonomik ofis stuli.",
        "price": 4200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (4).jpg"
        ],
        "rating": 4.7,
        "reviews": 124
    },
    {
        "id": 207,
        "name": "Stul",
        "description": "Oshxona va ovqatlanish xonasi uchun mos, amaliy va chiroyli stul.",
        "price": 1800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (5).jpg"
        ],
        "rating": 4.5,
        "reviews": 67
    },
    {
        "id": 208,
        "name": "Stul",
        "description": "Bolalar uchun xavfsiz, rang-barang va qiziqarli dizayndagi stul.",
        "price": 1200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (6).jpg"
        ],
        "rating": 4.8,
        "reviews": 43
    },
    {
        "id": 209,
        "name": "Stul",
        "description": "Yuqori sifatli velur mato va qo'llab-quvvatlovchi dizayn. Rahbarlar uchun mo'ljallangan.",
        "price": 5500000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (7).jpg"
        ],
        "rating": 4.9,
        "reviews": 31
    },
    {
        "id": 210,
        "name": "Stul",
        "description": "Zamonaviy interyerlar uchun metal va yog'ochdan yasalgan minimalistik stul.",
        "price": 2100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (8).jpg"
        ],
        "rating": 4.4,
        "reviews": 55
    },
    {
        "id": 211,
        "name": "Stul",
        "description": "Yengil, oson tozalanadigan va bardavom plastik stul. Veranda va bog' uchun ajoyib.",
        "price": 950000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (9).jpg"
        ],
        "rating": 4.2,
        "reviews": 88
    },
    {
        "id": 212,
        "name": "Stul",
        "description": "Gamerlar uchun maxsus ishlab chiqilgan, qulaylik va uslubni birlashtirgan stul.",
        "price": 6800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (10).jpg"
        ],
        "rating": 4.8,
        "reviews": 210
    },
    {
        "id": 213,
        "name": "Stul",
        "description": "Tabiiy to'qima matodan tayyorlangan, ekologik toza va qulay stul.",
        "price": 1600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (11).jpg"
        ],
        "rating": 4.6,
        "reviews": 72
    },
    {
        "id": 214,
        "name": "Stul",
        "description": "Boshqa bar stollari va oshxona orqa tomonlari uchun mos balandlikdagi stul.",
        "price": 1450000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (12).jpg"
        ],
        "rating": 4.5,
        "reviews": 49
    },
    {
        "id": 215,
        "name": "Stul",
        "description": "Oson yig'iladigan va tashishga qulay bo'lgan funktsional stul.",
        "price": 1100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (13).jpg"
        ],
        "rating": 4.3,
        "reviews": 95
    },
    {
        "id": 216,
        "name": "Stul",
        "description": "Yumshoq o'rindiqqich va qiyshaytirilgan dizaynga ega bo'lgan dam olish stuli.",
        "price": 3200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (14).jpg"
        ],
        "rating": 4.7,
        "reviews": 63
    },
    {
        "id": 217,
        "name": "Stul",
        "description": "Ovozni yutish xususiyatiga ega, shovqinli muhitda ishlash uchun mo'ljallangan stul.",
        "price": 7500000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (15).jpg"
        ],
        "rating": 4.6,
        "reviews": 28
    },
    {
        "id": 218,
        "name": "Stul",
        "description": "Qo'shimcha yumshoq qoplamali va keng o'rindiqqa ega bo'lgan eng qulay stul.",
        "price": 2900000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (16).jpg"
        ],
        "rating": 4.8,
        "reviews": 81
    },
    {
        "id": 219,
        "name": "Stul",
        "description": "Soddaligi va funktsionalligi bilan ajralib turadigan, yuqori sifatli stul.",
        "price": 4100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (17).jpg"
        ],
        "rating": 4.9,
        "reviews": 44
    },
    {
        "id": 220,
        "name": "Stul",
        "description": "Loft uslubidagi interyerlar uchun metal va yog'och kombinatsiyasidagi stul.",
        "price": 2300000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (18).jpg"
        ],
        "rating": 4.5,
        "reviews": 77
    },
    {
        "id": 221,
        "name": "Stul",
        "description": "Yengil, tabiiy materiallar va soddalikni ta'kidlaydigan Shimoliy Yevropa uslubi.",
        "price": 1950000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (19).jpg"
        ],
        "rating": 4.7,
        "reviews": 102
    },
    {
        "id": 222,
        "name": "Stul",
        "description": "Tibbiyot muassasalari va laboratoriyalar uchun mo'ljallangan, balandlikni o'zgartirish mumkin.",
        "price": 2600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (20).jpg"
        ],
        "rating": 4.4,
        "reviews": 35
    },
    {
        "id": 223,
        "name": "Stul",
        "description": "50-yillar uslubidagi kafelar va oshxonalarni bezash uchun ajoyib variant.",
        "price": 1750000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (21).jpg"
        ],
        "rating": 4.6,
        "reviews": 60
    },
    {
        "id": 224,
        "name": "Stul",
        "description": "Hech narsa ortiqcha bo'lmagan, faqat shakl va funktsiya. Zamonaviy uylar uchun.",
        "price": 2200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (22).jpg"
        ],
        "rating": 4.5,
        "reviews": 48
    },
    {
        "id": 225,
        "name": "Stul",
        "description": "Stul va kreslo o'rtasidagi aralash model. Qulaylik va qo'llab-quvvatlashning yangi darajasi.",
        "price": 3500000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (23).jpg"
        ],
        "rating": 4.8,
        "reviews": 91
    },
    {
        "id": 226,
        "name": "Stul",
        "description": "Yumshoq, egiluvchan va o'yin-kulgi uchun ajoyib bo'lgan pufakcha shaklidagi stul.",
        "price": 1300000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (24).jpg"
        ],
        "rating": 4.7,
        "reviews": 150
    },
    {
        "id": 227,
        "name": "Stul",
        "description": "Shaffof akril materialidan yasalgan, vizual engil va zamonaviy ko'rinishdagi stul.",
        "price": 2800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (25).jpg"
        ],
        "rating": 4.4,
        "reviews": 69
    },
    {
        "id": 228,
        "name": "Stul",
        "description": "Yengil va bardavom konstruktsiyaga ega bo'lgan universal stul.",
        "price": 1650000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (26).jpg"
        ],
        "rating": 4.5,
        "reviews": 82
    },
    {
        "id": 229,
        "name": "Stul",
        "description": "Issiq iqlim sharoitlariga mos, choyshab matosidan qilingan stul.",
        "price": 1350000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (27).jpg"
        ],
        "rating": 4.3,
        "reviews": 51
    },
    {
        "id": 230,
        "name": "Stul",
        "description": "Katta va keng o'rindiqqa ega, qo'shimcha qulaylik uchun mo'ljallangan stul.",
        "price": 3100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (28).jpg"
        ],
        "rating": 4.9,
        "reviews": 110
    },
    {
        "id": 231,
        "name": "Stul",
        "description": "O'rta asrlar uslubidagi temir oyoqlari va teri qoplamali hashamatli stul.",
        "price": 4500000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (29).jpg"
        ],
        "rating": 4.8,
        "reviews": 73
    },
    {
        "id": 232,
        "name": "Stul",
        "description": "Bolalar xonasi uchun yorqin ranglar va yumshoq materiallardan tayyorlangan.",
        "price": 980000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (30).jpg"
        ],
        "rating": 4.6,
        "reviews": 94
    },
    {
        "id": 233,
        "name": "Stul",
        "description": "Ish stoli uchun mos, balandligi va orqa qismi sozlanishi mumkin bo'lgan model.",
        "price": 3900000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (31).jpg"
        ],
        "rating": 4.7,
        "reviews": 156
    },
    {
        "id": 234,
        "name": "Stul",
        "description": "Kichik kvartiralar uchun ajoyib yechim - devorga yopishtiriladigan stul.",
        "price": 2200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (32).jpg"
        ],
        "rating": 4.2,
        "reviews": 38
    },
    {
        "id": 235,
        "name": "Stul",
        "description": "Tabiiy eman yog'ochidan tayyorlangan, mustahkam va uzoq muddat xizmat qiladi.",
        "price": 5200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (33).jpg"
        ],
        "rating": 4.9,
        "reviews": 67
    },
    {
        "id": 236,
        "name": "Stul",
        "description": "Tarmoqli oyoqlari va o'rindig'i bo'lgan, yozgi bog' uchun ideal stul.",
        "price": 1150000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (34).jpg"
        ],
        "rating": 4.4,
        "reviews": 121
    },
    {
        "id": 237,
        "name": "Stul",
        "description": "Dazmol uchun mo'ljallangan, balandligi sozlanishi mumkin bo'lgan qulay stul.",
        "price": 880000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (35).jpg"
        ],
        "rating": 4.1,
        "reviews": 45
    },
    {
        "id": 238,
        "name": "Stul",
        "description": "Ikki xil rangdagi mato kombinatsiyasidan foydalanilgan, zamonaviy dizayn.",
        "price": 2400000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (36).jpg"
        ],
        "rating": 4.6,
        "reviews": 89
    },
    {
        "id": 239,
        "name": "Stul",
        "description": "Yumshoq qo'llar va bosh suyagini qo'llab-quvvatlovchi kreslo-stul.",
        "price": 4800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (37).jpg"
        ],
        "rating": 4.8,
        "reviews": 133
    },
    {
        "id": 240,
        "name": "Stul",
        "description": "Kafelar va restoranlar uchun mo'ljallangan, yengil va mustahkam metall stul.",
        "price": 1550000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (38).jpg"
        ],
        "rating": 4.5,
        "reviews": 205
    },
    {
        "id": 241,
        "name": "Stul",
        "description": "Orqa qismi yo'q, minimalist va zamonaviy interyerlar uchun mos bar stuli.",
        "price": 1250000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (39).jpg"
        ],
        "rating": 4.3,
        "reviews": 76
    },
    {
        "id": 242,
        "name": "Stul",
        "description": "Uchburchak shaklidagi oyoqlari bilan ajralib turadigan, barqaror va chiroyli stul.",
        "price": 2700000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (40).jpg"
        ],
        "rating": 4.7,
        "reviews": 62
    },
    {
        "id": 243,
        "name": "Stul",
        "description": "Qo'llari qoplangan, uzoq vaqt o'tirishda qo'llarning charchamasini ta'minlaydi.",
        "price": 3300000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (41).jpg"
        ],
        "rating": 4.6,
        "reviews": 98
    },
    {
        "id": 244,
        "name": "Stul",
        "description": "Aylanuvchan o'rindiqqa ega bo'lgan ofis stuli, harakatlanish erkinligi.",
        "price": 3600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (42).jpg"
        ],
        "rating": 4.5,
        "reviews": 147
    },
    {
        "id": 245,
        "name": "Stul",
        "description": "To'q sariq rangdagi teri qoplamali, hashamatli va qimmatbaho stul.",
        "price": 6200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (43).jpg"
        ],
        "rating": 4.9,
        "reviews": 41
    },
    {
        "id": 246,
        "name": "Stul",
        "description": "Bolalar bog'chasidagi o'yin maydonchasi uchun mo'ljallangan, rangli stul.",
        "price": 750000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (44).jpg"
        ],
        "rating": 4.8,
        "reviews": 112
    },
    {
        "id": 247,
        "name": "Stul",
        "description": "Katta oilalar uchun keng va mustahkam ovqatlanish stuli.",
        "price": 2100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (45).jpg"
        ],
        "rating": 4.4,
        "reviews": 183
    },
    {
        "id": 248,
        "name": "Stul",
        "description": "Yumshoq ko'pikli o'rindiqqa ega, dam olish uchun eng yaxshi tanlov.",
        "price": 4100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (46).jpg"
        ],
        "rating": 4.7,
        "reviews": 75
    },
    {
        "id": 249,
        "name": "Stul",
        "description": "Qoraytirilgan metall va qora teridan yasalgan, industrial uslubdagi stul.",
        "price": 3400000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (47).jpg"
        ],
        "rating": 4.6,
        "reviews": 59
    },
    {
        "id": 250,
        "name": "Stul",
        "description": "Kichik o'lchamli, lekin juda funktsional va qulay stul.",
        "price": 1450000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (48).jpg"
        ],
        "rating": 4.5,
        "reviews": 91
    },
    {
        "id": 251,
        "name": "Stul",
        "description": "Yuzasi qo'shimcha himoya qatlami bilan qoplangan, egiluvchan va chidamli stul.",
        "price": 1850000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (49).jpg"
        ],
        "rating": 4.3,
        "reviews": 68
    },
    {
        "id": 252,
        "name": "Stul",
        "description": "Klassik shaklda, ammo zamonaviy materiallardan tayyorlangan stul.",
        "price": 2600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (50).jpg"
        ],
        "rating": 4.8,
        "reviews": 104
    },
    {
        "id": 253,
        "name": "Stul",
        "description": "Tibbiyot xodimlari uchun maxsus ishlab chiqilgan, gigienik va oson tozalanadi.",
        "price": 2900000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (51).jpg"
        ],
        "rating": 4.4,
        "reviews": 29
    },
    {
        "id": 254,
        "name": "Stul",
        "description": "O'rindig'ining ostida saqlash qutisi bor, funktsional stul.",
        "price": 2250000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (52).jpg"
        ],
        "rating": 4.6,
        "reviews": 87
    },
    {
        "id": 255,
        "name": "Stul",
        "description": "Yumshoq, butunlay matodan tikilgan, uy qulayligini anglatuvchi stul.",
        "price": 1900000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (53).jpg"
        ],
        "rating": 4.7,
        "reviews": 115
    },
    {
        "id": 256,
        "name": "Stul",
        "description": "Oyoqlari keskin burchak ostida egilgan, dinamik va zamonaviy ko'rinish.",
        "price": 3150000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (54).jpg"
        ],
        "rating": 4.5,
        "reviews": 53
    },
    {
        "id": 257,
        "name": "Stul",
        "description": "Maktab o'quvchilari uchun mo'ljallangan, orqa to'g'rilashga yordam beradi.",
        "price": 1050000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (55).jpg"
        ],
        "rating": 4.8,
        "reviews": 172
    },
    {
        "id": 258,
        "name": "Stul",
        "description": "Tashqi maydonlar uchun mo'ljallangan, ob-havoga chidamli materialdan yasalgan.",
        "price": 1700000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (56).jpg"
        ],
        "rating": 4.2,
        "reviews": 64
    },
    {
        "id": 259,
        "name": "Stul",
        "description": "O'rindig'i va orqa qismi bir butun shaklda, suyuq shakldagi dizayn.",
        "price": 4300000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (57).jpg"
        ],
        "rating": 4.9,
        "reviews": 78
    },
    {
        "id": 260,
        "name": "Stul",
        "description": "Ikki qavatli, yuqori qismi olinadigan, ikki xil balandlikda foydalanish mumkin.",
        "price": 1600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (58).jpg"
        ],
        "rating": 4.1,
        "reviews": 96
    },
    {
        "id": 261,
        "name": "Stul",
        "description": "Qo'llari o'rindiq bilan bir butum bo'lib, qo'shimcha qulaylik yaratadi.",
        "price": 3700000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (59).jpg"
        ],
        "rating": 4.7,
        "reviews": 119
    },
    {
        "id": 262,
        "name": "Stul",
        "description": "Yumshoq, qorong'u xonada yorug'lik tarqatadigan materialdan tayyorlangan.",
        "price": 2850000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (60).jpg"
        ],
        "rating": 4.5,
        "reviews": 42
    },
    {
        "id": 263,
        "name": "Stul",
        "description": "O'rindig'ining shakli inson tanasining anatomik shakliga moslashtirilgan.",
        "price": 5100000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (61).jpg"
        ],
        "rating": 4.8,
        "reviews": 85
    },
    {
        "id": 264,
        "name": "Stul",
        "description": "Yig'ma qo'llarga ega, joy tejash uchun qo'llar yig'ib qo'yilishi mumkin.",
        "price": 2050000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (62).jpg"
        ],
        "rating": 4.4,
        "reviews": 108
    },
    {
        "id": 265,
        "name": "Stul",
        "description": "Butunlay aylanuvchan, istalgan tomonga burilish imkonini beradi.",
        "price": 3200000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (63).jpg"
        ],
        "rating": 4.6,
        "reviews": 71
    },
    {
        "id": 266,
        "name": "Stul",
        "description": "Qattiq yog'och oyoqlari va yumshoq matodan tayyorlangan o'rindiqqa ega.",
        "price": 2450000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (64).jpg"
        ],
        "rating": 4.7,
        "reviews": 129
    },
    {
        "id": 267,
        "name": "Stul",
        "description": "Shisha tolali qo'llarga ega, shaffof va engil ko'rinishga ega.",
        "price": 3800000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (65).jpg"
        ],
        "rating": 4.3,
        "reviews": 56
    },
    {
        "id": 268,
        "name": "Stul",
        "description": "Muzey va ko'rgazma zallari uchun zamonaviy va bezakli stul.",
        "price": 4600000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (66).jpg"
        ],
        "rating": 4.8,
        "reviews": 33
    },
    {
        "id": 269,
        "name": "Stul",
        "description": "Orqa qismi past, lekin keng, qulay dam olish uchun mo'ljallangan.",
        "price": 2000000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (67).jpg"
        ],
        "rating": 4.5,
        "reviews": 97
    },
    {
        "id": 270,
        "name": "Stul",
        "description": "Bolalar uchun xavfsizlik kamariga ega bo'lgan o'yin stuli.",
        "price": 890000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (68).jpg"
        ],
        "rating": 4.9,
        "reviews": 145
    },
    {
        "id": 271,
        "name": "Stul",
        "description": "O'rindig'ining ostiga oyoqlar uchun maxsus joy ajratilgan stul.",
        "price": 1750000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (69).jpg"
        ],
        "rating": 4.6,
        "reviews": 80
    },
    {
        "id": 272,
        "name": "Stul",
        "description": "Qalinlangan yumshoq orqa qismi, uzoq vaqt o'tirishga moslashtirilgan.",
        "price": 4000000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (70).jpg"
        ],
        "rating": 4.7,
        "reviews": 122
    },
    {
        "id": 273,
        "name": "Stul",
        "description": "O'tkir burchaklari yo'q, bolalar xonasi uchun xavfsiz dizayn.",
        "price": 1300000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (71).jpg"
        ],
        "rating": 4.8,
        "reviews": 161
    },
    {
        "id": 274,
        "name": "Stul",
        "description": "Qo'llari yog'och, qolgan qismi metall, ikki materialning uyg'unligi.",
        "price": 2950000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (72).jpg"
        ],
        "rating": 4.5,
        "reviews": 74
    },
    {
        "id": 275,
        "name": "Stul",
        "description": "Kengaytirilgan o'rindiqqa ega, qo'shimcha qulaylik va komfort.",
        "price": 4400000,
        "category": "stuls",
        "images": [
            "./images/stuls/stuls (73).jpg"
        ],
        "rating": 4.9,
        "reviews": 88
    },
    {
        "id": 276,
        "name": "penal",
        "description": "Kengaytirilgan o'rindiqqa ega, qo'shimcha qulaylik va komfort.",
        "price": 440,
        "category": "penal",
        "images": [
            "./images/penal/penalz.jpg"
        ],
        "rating": 4.9,
        "reviews": 88
    },
    {
        "id": 277,
        "name": "penal",
        "description": "Zamonaviy dizaynli, ko'p bo'linmali va mustahkam qopqoqli penal.",
        "price": 65000,
        "category": "penal",
        "images": [
            "./images/penal/penal (2).jpg"
        ],
        "rating": 4.7,
        "reviews": 62
    },
    {
        "id": 278,
        "name": "penal",
        "description": "Yumshoq materialdan tayyorlangan, rang-barang va keng sig'imli penal.",
        "price": 45000,
        "category": "penal",
        "images": [
            "./images/penal/penal (3).jpg"
        ],
        "rating": 4.5,
        "reviews": 43
    },
    {
        "id": 279,
        "name": "penal",
        "description": "Metal qopqoqli, ichki qismi ko'p bo'linmali va mustahkam penal.",
        "price": 75000,
        "category": "penal",
        "images": [
            "./images/penal/penal (4).jpg"
        ],
        "rating": 4.8,
        "reviews": 71
    },
    {
        "id": 280,
        "name": "penal",
        "description": "Kichik o'lchamli, lekin ko'p joyli va qulay cho'ziladigan penal.",
        "price": 55000,
        "category": "penal",
        "images": [
            "./images/penal/penal (5).jpg"
        ],
        "rating": 4.6,
        "reviews": 54
    },
    {
        "id": 281,
        "name": "penal",
        "description": "Bolalar uchun maxsus ishlab chiqilgan, mult personajlar tasvirlangan penal.",
        "price": 40000,
        "category": "penal",
        "images": [
            "./images/penal/penal (6).jpg"
        ],
        "rating": 4.9,
        "reviews": 93
    },
    {
        "id": 282,
        "name": "penal",
        "description": "Suyuqlik to'kishdan himoya qiladigan maxsus qatlamli ichki qism.",
        "price": 80000,
        "category": "penal",
        "images": [
            "./images/penal/penal (7).jpg"
        ],
        "rating": 4.7,
        "reviews": 67
    },
    {
        "id": 283,
        "name": "penal",
        "description": "Ikki qavatli, yuqori qismi olinadigan va ko'p bo'linmali penal.",
        "price": 90000,
        "category": "penal",
        "images": [
            "./images/penal/penal (8).jpg"
        ],
        "rating": 4.8,
        "reviews": 81
    },
    {
        "id": 284,
        "name": "penal",
        "description": "Zargarlik bezaklari bilan bezatilgan, hashamatli va chiroyli penal.",
        "price": 120000,
        "category": "penal",
        "images": [
            "./images/penal/penal (9).jpg"
        ],
        "rating": 4.9,
        "reviews": 45
    },
    {
        "id": 285,
        "name": "penal",
        "description": "Plastik materialdan tayyorlangan, yengil va bardavom penal.",
        "price": 35000,
        "category": "penal",
        "images": [
            "./images/penal/penal (10).jpg"
        ],
        "rating": 4.3,
        "reviews": 57
    },
    {
        "id": 286,
        "name": "penal",
        "description": "Magnit yopiladigan qopqoqli, zamonaviy va qulay penal.",
        "price": 70000,
        "category": "penal",
        "images": [
            "./images/penal/penal (11).jpg"
        ],
        "rating": 4.6,
        "reviews": 72
    },
    {
        "id": 287,
        "name": "penal",
        "description": "Uchburchak shaklda, stolning burchagida kam joy egallaydigan penal.",
        "price": 60000,
        "category": "penal",
        "images": [
            "./images/penal/penal (12).jpg"
        ],
        "rating": 4.5,
        "reviews": 38
    },
    {
        "id": 288,
        "name": "penal",
        "description": "Ipak matodan qoplangan, yumshoq va hashamatli ko'rinishdagi penal.",
        "price": 95000,
        "category": "penal",
        "images": [
            "./images/penal/penal (13).jpg"
        ],
        "rating": 4.8,
        "reviews": 64
    },
    {
        "id": 289,
        "name": "penal",
        "description": "Raqamli qulfdan himoyalangan, shaxsiy buyumlaringiz uchun xavfsiz penal.",
        "price": 150000,
        "category": "penal",
        "images": [
            "./images/penal/penal (14).jpg"
        ],
        "rating": 4.7,
        "reviews": 29
    },
    {
        "id": 290,
        "name": "penal",
        "description": "Tashqi tomonida qo'shimcha qismlar uchun cho'ntaklari bor.",
        "price": 85000,
        "category": "penal",
        "images": [
            "./images/penal/penal (15).jpg"
        ],
        "rating": 4.6,
        "reviews": 51
    },
    {
        "id": 291,
        "name": "penal",
        "description": "Qog'oz uslubidagi dizayn, ekologik toza materiallardan tayyorlangan.",
        "price": 55000,
        "category": "penal",
        "images": [
            "./images/penal/penal (16).jpg"
        ],
        "rating": 4.4,
        "reviews": 46
    },
    {
        "id": 292,
        "name": "penal",
        "description": "O'yinchoq shaklida, bolalar uchun qiziqarli va o'yin-kulgi penal.",
        "price": 75000,
        "category": "penal",
        "images": [
            "./images/penal/penal (17).jpg"
        ],
        "rating": 4.9,
        "reviews": 103
    },
    {
        "id": 293,
        "name": "penal",
        "description": "Shaffof materialdan tayyorlangan, ichidagi buyumlarni ko'rish imkoniyati.",
        "price": 50000,
        "category": "penal",
        "images": [
            "./images/penal/penal (18).jpg"
        ],
        "rating": 4.5,
        "reviews": 68
    },
    {
        "id": 294,
        "name": "penal",
        "description": "Qo'shimcha raskadka qutisi bilan birga keladigan to'liq to'plam.",
        "price": 110000,
        "category": "penal",
        "images": [
            "./images/penal/penal (19).jpg"
        ],
        "rating": 4.8,
        "reviews": 77
    },
    {
        "id": 295,
        "name": "penal",
        "description": "Klassik dizayn, soddalik va funktsionallikni birlashtirgan penal.",
        "price": 45000,
        "category": "penal",
        "images": [
            "./images/penal/penal (20).jpg"
        ],
        "rating": 4.6,
        "reviews": 82
    },
    {
        "id": 296,
        "name": "penal",
        "description": "Aylanuvchan qismi bor, qulay foydalanish uchun mo'ljallangan.",
        "price": 95000,
        "category": "penal",
        "images": [
            "./images/penal/penal (21).jpg"
        ],
        "rating": 4.7,
        "reviews": 59
    },
    {
        "id": 297,
        "name": "penal",
        "description": "Neon ranglarda, qorong'u sharoitda yorug'lik tarqatadigan penal.",
        "price": 65000,
        "category": "penal",
        "images": [
            "./images/penal/penal (22).jpg"
        ],
        "rating": 4.8,
        "reviews": 91
    },
    {
        "id": 298,
        "name": "penal",
        "description": "Katta sig'imli, san'at asarlari uchun mo'ljallangan keng penal.",
        "price": 130000,
        "category": "penal",
        "images": [
            "./images/penal/penal (23).jpg"
        ],
        "rating": 4.9,
        "reviews": 36
    },
    {
        "id": 299,
        "name": "penal",
        "description": "Velcro yopiladigan, bolalar uchun oson ochiladigan penal.",
        "price": 40000,
        "category": "penal",
        "images": [
            "./images/penal/penal (24).jpg"
        ],
        "rating": 4.4,
        "reviews": 73
    },
    {
        "id": 300,
        "name": "penal",
        "description": "Kamuflyaj naqshli, harbiy uslubdagi qiziqarli penal.",
        "price": 70000,
        "category": "penal",
        "images": [
            "./images/penal/penal (25).jpg"
        ],
        "rating": 4.6,
        "reviews": 48
    },
    {
        "id": 301,
        "name": "penal",
        "description": "Yig'ma qilish mumkin bo'lgan, sayohatlar uchun qulay penal.",
        "price": 80000,
        "category": "penal",
        "images": [
            "./images/penal/penal (26).jpg"
        ],
        "rating": 4.7,
        "reviews": 55
    },
    {
        "id": 302,
        "name": "penal",
        "description": "Tabiiy yog'ochdan yasalgan, ekologik toza va mustahkam penal.",
        "price": 100000,
        "category": "penal",
        "images": [
            "./images/penal/penal (27).jpg"
        ],
        "rating": 4.8,
        "reviews": 42
    },
    {
        "id": 303,
        "name": "penal",
        "description": "Qo'llar bilan olib yurish uchun maxsus qulfi bor, qulay penal.",
        "price": 60000,
        "category": "penal",
        "images": [
            "./images/penal/penal (28).jpg"
        ],
        "rating": 4.5,
        "reviews": 69
    },
    {
        "id": 304,
        "name": "penal",
        "description": "Retro uslubdagi, eski maktab yillarini eslatuvchi dizayn.",
        "price": 75000,
        "category": "penal",
        "images": [
            "./images/penal/penal (29).jpg"
        ],
        "rating": 4.9,
        "reviews": 87
    },
    {
        "id": 305,
        "name": "penal",
        "description": "Ichki qismi elastik material bilan qoplangan, qalam va ruchkalarni mustahkam ushlaydi.",
        "price": 85000,
        "category": "penal",
        "images": [
            "./images/penal/penal (30).jpg"
        ],
        "rating": 4.7,
        "reviews": 63
    },
    {
        "id": 306,
        "name": "penal",
        "description": "Gologramma effektiga ega, yorug'likda turlicha ranglarda porlaydigan penal.",
        "price": 90000,
        "category": "penal",
        "images": [
            "./images/penal/penal (31).jpg"
        ],
        "rating": 4.8,
        "reviews": 95
    },
    {
        "id": 307,
        "name": "penal",
        "description": "Kichik oynasi bor, ichidagi sevimli buyumni ko'rish imkoniyati.",
        "price": 65000,
        "category": "penal",
        "images": [
            "./images/penal/penal (32).jpg"
        ],
        "rating": 4.6,
        "reviews": 76
    },
    {
        "id": 308,
        "name": "penal",
        "description": "Kosmik mavzudagi dizayn, sayyoralar va yulduzlar tasvirlangan.",
        "price": 55000,
        "category": "penal",
        "images": [
            "./images/penal/penal (33).jpg"
        ],
        "rating": 4.9,
        "reviews": 112
    },
    {
        "id": 309,
        "name": "penal",
        "description": "Zamonaviy geometrik naqshlar bilan bezatilgan, stilistik penal.",
        "price": 70000,
        "category": "penal",
        "images": [
            "./images/penal/penal (34).jpg"
        ],
        "rating": 4.7,
        "reviews": 58
    },
    {
        "id": 310,
        "name": "penal",
        "description": "O'quvchilar uchun maxsus ishlab chiqilgan, keng va funktsional penal.",
        "price": 80000,
        "category": "penal",
        "images": [
            "./images/penal/penal (1).jpg"
        ],
        "rating": 4.8,
        "reviews": 84
    }

];  

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const catalogGrid = document.getElementById('catalog-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const comparisonModal = document.getElementById('comparison-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartCount = document.querySelector('.cart-count');
const scrollTopBtn = document.getElementById('scroll-top');
const loadingScreen = document.querySelector('.loading-screen');
const contactForm = document.getElementById('contact-form');

// Cart array
let cart = [];
let wishlist = [];
let comparisonList = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after delay
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 2000);
    
    // Render products
    renderProducts(products);
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
    
    // Display wishlist
    displayWishlist();
    // Load comparison list from localStorage
    const savedComparison = localStorage.getItem('comparison');
    if (savedComparison) {
        comparisonList = JSON.parse(savedComparison);
    }
    
    // Initialize parallax effect
    initParallax();
});

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter products
            const filter = button.dataset.filter;
            filterProducts(filter);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Cart functionality
    cartIcon.addEventListener('click', openCart);
    
    // Close modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
        if (e.target === productModal) {
            closeProductModal();
        }
        if (e.target === comparisonModal) {
            closeComparisonModal();
        }
    });
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Header scroll effect
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Contact form submission
    // Contact form submission event listener o'chirildi - displayWishlist qo'shildi
}

// Render products to the catalog
function renderProducts(productsArray) {
    catalogGrid.innerHTML = '';
    
    if (productsArray.length === 0) {
        catalogGrid.innerHTML = '<p class="no-products" data-i18n="no_products">No products found. Try a different search.</p>';
        return;
    }
    
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Check if product is a table (quxniy) or penal to show contact message instead of price
        const isTable = product.category === 'Table' || product.category === 'table';
        const isPenal = product.name === 'penal' || product.id === 310;
        const priceDisplay = (isTable || isPenal) ? 
            '<div class="product-price" style="color: #d4a373; font-weight: bold;">Narx uchun biz bilan bog\'laning</div>' : 
            `<div class="product-price">${formatPrice(product.price)} so'm</div>`;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-badge">
                    <span data-i18n="product.new">New</span>
                </div>
                <div class="quick-actions">
                    <button class="wishlist-icon" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="compare-icon" data-id="${product.id}">
                        <i class="fas fa-columns"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category"><span data-i18n="product.id_label">ID:</span> ${product.id}</span>
                    <div class="product-rating">
                        ${generateStars(Math.round(product.rating))}
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                </div>
                <h3 data-i18n="product.name.${product.id}">${product.name}</h3>
                <p data-i18n="product.desc.${product.id}">${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
                ${priceDisplay}
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}" data-i18n="product.view">View Details</button>
                    ${!(isTable || isPenal) ? `<button class="add-to-cart" data-id="${product.id}" data-i18n="product.add_to_cart">Savatga qo'shing</button>` : ''}
                </div>
            </div>
        `;
        catalogGrid.appendChild(productCard);
    });
    // Re-apply translations to newly created nodes (if i18n initialized)
    if (typeof applyTranslations === 'function') {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        applyTranslations(lang);
    }
    
    // Add event listeners to "View Details" buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            openProductModal(productId);
        });
    });
    
    // Add event listeners to "Savatga qo'shing" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
    
    // Add event listeners to wishlist icons
    document.querySelectorAll('.wishlist-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            const icon = e.target.tagName === 'I' ? e.target : e.target.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('active');
                addToWishlist(productId);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('active');
                removeFromWishlist(productId);
            }
        });
    });
    
    // Add event listeners to compare icons
    document.querySelectorAll('.compare-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToComparison(productId);
        });
    });
}

// Format price with proper thousand separators
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Search products by name
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        renderProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
}

// Toggle dark/light theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartUI();
    
    // Show notification
    {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        const suffix = (i18n[lang] && i18n[lang]['notification.added_to_cart']) || 'added to cart!';
        showNotification(`${product.name} ${suffix}`);
    }
}

// Add to wishlist
function addToWishlist(productId) {
        if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        showNotification((i18n[lang] && i18n[lang]['notification.added_to_wishlist']) || 'Added to wishlist!');
    } else {
        removeFromWishlist(productId);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

// Remove from wishlist
function removeFromWishlist(productId) {
    const productIndex = wishlist.indexOf(productId);
    if (productIndex > -1) {
        wishlist.splice(productIndex, 1);
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        showNotification((i18n[lang] && i18n[lang]['notification.removed_from_wishlist']) || 'Removed from wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

// Add to comparison
function addToComparison(productId) {
    const productIndex = comparisonList.indexOf(productId);
    if (productIndex === -1) {
        if (comparisonList.length >= 4) {
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.compare_limit']) || 'You can only compare up to 4 products!');
            return;
        }
        comparisonList.push(productId);
        {
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.added_to_comparison']) || 'Product added to comparison!');
        }
    } else {
        comparisonList.splice(productIndex, 1);
        {
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.removed_from_comparison']) || 'Product removed from comparison!');
        }
    }
    localStorage.setItem('comparison', JSON.stringify(comparisonList));
    updateComparisonUI();
}

// Update comparison UI
function updateComparisonUI() {
    // This function would update any comparison UI elements
    // For now, we're just showing notifications
}

// Open comparison modal
function openComparisonModal() {
    if (comparisonList.length === 0) {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        showNotification((i18n[lang] && i18n[lang]['notification.no_products_compare']) || 'No products to compare!');
        return;
    }
    
    const comparisonTable = document.getElementById('comparison-table');
    const comparisonProducts = products.filter(product => comparisonList.includes(product.id));
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th data-i18n="compare.features">Features</th>
                    ${comparisonProducts.map(product => `
                        <th>
                            <div class="product-header">
                                <div class="product-image">
                                    <img src="${product.images[0]}" alt="${product.name}">
                                </div>
                                <span data-i18n="product.name.${product.id}">${product.name}</span>
                                <button class="remove-btn" data-id="${product.id}">&times;</button>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-i18n="compare.price">Price</td>
                    ${comparisonProducts.map(product => {
                        const isTable = product.category === 'Table' || product.category === 'table';
                        const isPenal = product.name === 'penal' || product.id === 310;
                        return (isTable || isPenal) ? 
                            `<td class="price" style="color: red; font-weight: bold;">Yetkazish</td>` : 
                            `<td class="price">${formatPrice(product.price)} so'm</td>`;
                    }).join('')}
                </tr>
                <tr>
                    <td data-i18n="compare.rating">Rating</td>
                    ${comparisonProducts.map(product => `
                        <td>${generateStars(Math.round(product.rating))} (${product.reviews})</td>
                    `).join('')}
                </tr>
                <tr>
                    <td data-i18n="compare.material">Material</td>
                    ${comparisonProducts.map(product => `
                        <td>${product.material || 'Noma\'lum'}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td data-i18n="compare.dimensions">Dimensions</td>
                    ${comparisonProducts.map(product => `
                        <td>${product.dimensions || 'Noma\'lum'}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td data-i18n="compare.action">Action</td>
                    ${comparisonProducts.map(product => {
                        const isTable = product.category === 'Table' || product.category === 'table';
                        const isPenal = product.name === 'penal' || product.id === 310;
                        return (isTable || isPenal) ? 
                            `<td style="color: #d4a373; font-weight: bold;">Narx uchun biz bilan bog'laning</td>` :
                            `<td><button class="add-to-cart" data-id="${product.id}" data-i18n="product.add_to_cart">Savatga qo'shing</button></td>`;
                    }).join('')}
                </tr>
            </tbody>
        </table>
    `;
    
    comparisonTable.innerHTML = tableHTML;
    // Translate comparison modal static labels and dynamic buttons
    if (typeof applyTranslations === 'function') {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        applyTranslations(lang);
    }
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToComparison(productId);
            openComparisonModal(); // Refresh the modal
        });
    });
    
    // Add event listeners to "Savatga qo`shing" buttons
    document.querySelectorAll('.comparison-content .add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.product_added']) || 'Product added to cart!');
        });
    });
    
    comparisonModal.classList.add('active');
    comparisonModal.style.display = 'flex';
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    renderCartItems();
}

// Render cart items
function renderCartItems() {
    const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p data-i18n="cart.empty">Your cart is empty</p>';
        totalPrice.textContent = '0';
        if (typeof applyTranslations === 'function') applyTranslations(lang);
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const qtyLabel = (i18n[lang] && i18n[lang]['cart.quantity_label']) || 'Quantity';
        const eachLabel = (i18n[lang] && i18n[lang]['cart.each_label']) || 'each';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${qtyLabel}: ${item.quantity} | ${formatPrice(item.price)} so'm ${eachLabel}</p>
            </div>
            <div class="cart-item-price">${formatPrice(itemTotal)} so'm</div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = formatPrice(total);
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    const product = products.find(p => p.id === productId);
    if (product) {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        const suffix = (i18n[lang] && i18n[lang]['notification.removed_from_cart']) || 'removed from cart';
        showNotification(`${product.name} ${suffix}`);
    }
}

// Open cart modal
function openCart(e) {
    e.preventDefault();
    cartModal.classList.add('active');
    cartModal.style.display = 'flex';
    renderCartItems();
}

// Close cart modal
function closeCartModal() {
    cartModal.classList.remove('active');
    setTimeout(() => {
        cartModal.style.display = 'none';
    }, 300);
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is a table (quxniy) or penal to show contact message instead of price
    const isTable = product.category === 'Table' || product.category === 'table';
    const isPenal = product.name === 'penal' || product.id === 310;
    const priceDisplay = (isTable || isPenal) ? 
        '<div class="product-detail-price" style="color: #d4a373; font-weight: bold;">Narx uchun biz bilan bog\'laning</div>' : 
        `<div class="product-detail-price">${formatPrice(product.price)} so'm</div>`;
    
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <div class="product-detail-slider">
            <div class="slider-container">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="main-image">
                </div>
                <div class="thumbnail-slider">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${img}" alt="${product.name} ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="product-detail-info">
            <h3 data-i18n="product.name.${product.id}">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(Math.round(product.rating))}
                </div>
                <span class="rating-text" data-rating="${product.rating}" data-reviews="${product.reviews}"></span>
            </div>
            <p data-i18n="product.desc.${product.id}">${product.description}</p>
            ${priceDisplay}
                <div class="product-detail-actions">
                ${!(isTable || isPenal) ? 
                    `<button class="add-to-cart-detail" data-id="${product.id}" data-i18n="product.add_to_cart">Savatga qo'shing</button>` : ''
                }
                <button class="wishlist-btn" data-id="${product.id}">
                    <i class="far fa-heart"></i> <span data-i18n="product.wishlist_btn">Wishlist</span>
                </button>
            </div>
        </div>
    `;
    // Apply translations to newly created modal content
    if (typeof applyTranslations === 'function') {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        applyTranslations(lang);
    }
    
    productModal.classList.add('active');
    productModal.style.display = 'flex';
    
    // Add event listeners for image slider
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            // Update main image
            const index = thumbnail.dataset.index;
            mainImage.src = product.images[index];
        });
    });
    
    // Add event listener to "Savatga qo`shing" button in modal
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            addToCart(productId);
            closeProductModal();
            {
                const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
                const suffix = (i18n[lang] && i18n[lang]['notification.added_to_cart']) || 'added to cart!';
                showNotification(`${product.name} ${suffix}`);
            }
        });
    }

    // Set rating text using translations
    const ratingEl = productDetail.querySelector('.rating-text');
    if (ratingEl) {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        const reviewsLabel = (i18n[lang] && i18n[lang]['product.reviews_label']) || 'reviews';
        ratingEl.textContent = `${ratingEl.dataset.rating} (${ratingEl.dataset.reviews} ${reviewsLabel})`;
    }
    
    // Add event listener to Wishlist button
    document.querySelector('.wishlist-btn').addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        const icon = e.target.querySelector('i');
        if (e.target.classList.contains('active')) {
            icon.className = 'fas fa-heart';
            addToWishlist(productId);
            {
                const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
                showNotification(`${product.name} ${(i18n[lang] && i18n[lang]['notification.added_to_wishlist']) || 'added to wishlist!'}`);
            }
        } else {
            icon.className = 'far fa-heart';
            removeFromWishlist(productId);
            {
                const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
                showNotification(`${product.name} ${(i18n[lang] && i18n[lang]['notification.removed_from_wishlist']) || 'removed from wishlist!'}`);
            }
        }
    });
}

// Helper function to generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Close product modal
function closeProductModal() {
    productModal.classList.remove('active');
    setTimeout(() => {
        productModal.style.display = 'none';
    }, 300);
}

// Close any modal
function closeModal(e) {
    const modal = e.target.closest('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Close comparison modal
function closeComparisonModal() {
    comparisonModal.classList.remove('active');
    setTimeout(() => {
        comparisonModal.style.display = 'none';
    }, 300);
}

// Show notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize parallax effect
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroVideo = document.getElementById('hero-video');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (heroVideo) {
            // subtle translate for parallax-like effect on video
            heroVideo.style.transform = `translateY(${scrollPosition * 0.15}px)`;
        } else if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;
    
    // TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID o'zgaruvchilari sizning kodingizda mavjud emas,
    // ularni o'rniga to'g'ri tokenlarni qo'yishingiz kerak.
    // Masalan: const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
    // const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';
    
    const text = `📝 <b>Yangi xabar!</b>\n\n👤 <b>Ismi:</b> ${name}\n📧 <b>Email:</b> ${email}\n💬 <b>Xabar:</b> ${message}\n🏢 <b>Kompaniya:</b> Mashxura Mebel`;
    
    // Bu qismni ishga tushirish uchun yuqorida TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID ni aniqlang.
    // Hozircha shartni o'chirib qo'ydim, chunki o'zgaruvchilar mavjud emas.
    /*
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            throw new Error('Telegram botga yuborishda xatolik yuz berdi');
        }
        
        {
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.message_sent']) || 'Your message was sent successfully!', 'success');
        }
        contactForm.reset();
    } catch (error) {
        console.error('Xatolik:', error);
        {
            const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
            showNotification((i18n[lang] && i18n[lang]['notification.message_error']) || 'There was an error sending your message', 'error');
        }
    }
    */
    });
}

// Display wishlist items
function displayWishlist() {
    const wishlistGrid = document.getElementById('wishlist-grid');
    const emptyWishlist = document.getElementById('empty-wishlist');
    
    if (!wishlistGrid) return;
    
    if (wishlist.length === 0) {
        wishlistGrid.style.display = 'none';
        emptyWishlist.style.display = 'block';
        return;
    }
    
    wishlistGrid.style.display = 'grid';
    emptyWishlist.style.display = 'none';
    wishlistGrid.innerHTML = '';
    
    wishlist.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const isTable = product.category === 'Table' || product.category === 'table';
        const isPenal = product.name === 'penal' || product.id === 310;
        const priceDisplay = (isTable || isPenal) ? 
            '<div class="product-price" style="color: #d4a373; font-weight: bold;">Narx uchun biz bilan bog\'laning</div>' : 
            `<div class="product-price">${formatPrice(product.price)} so'm</div>`;
        
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'product-card';
        wishlistItem.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-badge"><span>New</span></div>
                <div class="quick-actions">
                    <button class="wishlist-icon active" data-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="compare-icon" data-id="${product.id}">
                        <i class="fas fa-columns"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category"><span data-i18n="product.id_label">ID:</span> ${product.id}</span>
                    <div class="product-rating">
                        ${generateStars(Math.round(product.rating))}
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                </div>
                <h3 data-i18n="product.name.${product.id}">${product.name}</h3>
                <p data-i18n="product.desc.${product.id}">${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
                ${priceDisplay}
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}" data-i18n="product.view">View Details</button>
                    ${!(isTable || isPenal) ? `<button class="add-to-cart" data-id="${product.id}" data-i18n="product.add_to_cart">Savatga qo'shing</button>` : ''}
                </div>
            </div>
        `;
        wishlistGrid.appendChild(wishlistItem);
    });
    // Translate dynamically created wishlist items
    if (typeof applyTranslations === 'function') {
        const lang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
        applyTranslations(lang);
    }
    
    // Add event listeners
    document.querySelectorAll('#wishlist-grid .wishlist-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            removeFromWishlist(productId);
        });
    });
    
    document.querySelectorAll('#wishlist-grid .view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            openProductModal(productId);
        });
    });
    
    document.querySelectorAll('#wishlist-grid .add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
    
    // Add compare functionality for wishlist items
    document.querySelectorAll('#wishlist-grid .compare-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToComparison(productId);
        });
    });
}

/* ------------------
   Simple i18n: language selector + persistence
   ------------------ */
const i18n = {
    en: {
        'nav.home': 'Home',
        'nav.catalog': 'Catalog',
        'nav.wishlist': 'Wishlist',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.cart': 'Cart',
        'loading.welcome': 'Welcome',
        'loading.wishlist': 'Wishlist',
        'hero.title': 'Mashxura Mebel',
        'hero.subtitle': 'Modern, comfortable furniture for your home',
        'cta.view_products': 'View Products',
        'section.products': 'Products',
        'price.note_label': 'Note:',
        'price.notice_text': 'Prices displayed on the site may differ from current in-store prices. Contact us for exact pricing.',
        'search.placeholder': 'Search...',
        'filters.all': 'All',
        'filters.table': 'Dining',
        'filters.sofa': 'Compact',
        'filters.bed': 'Soft Furniture',
        'filters.lamp': 'Bedroom',
        'filters.stul': 'Tables',
        'filters.stuls': 'Chairs',
        'filters.penal': 'Cabinets',
        'about.title': 'Creating comfort since 2005',
        'about.p1': 'At Mashhura Mebel we believe exceptional design and comfort go hand-in-hand. Our journey began with a simple idea: create furniture that truly makes a house feel like home.',
        'about.p2': 'Each piece in our collection is crafted from sustainable materials with timeless aesthetics, ensuring your space remains stylish for years.',
        'contact.title': 'Contact',
        'contact.heading': 'Contact Info',
        'contact.address': "Top-quality furniture in Uzbekistan",
        'contact.phone': '+998 95 541 17 60',
        'contact.email': 'mebelmashhura.uz',
        'footer.brand': 'Mahhura Furniture',
        'footer.copy': '© 2025 Mebel Mashxura',
        'cart.title': 'Your Cart',
        'cart.total': 'Total: $',
        'cart.checkout': 'Checkout',
        'compare.title': 'Product Comparison',
        'wishlist.title': 'Wishlist',
        'wishlist.subtitle': 'Your selected products',
        'wishlist.empty.title': "You don't have any favorites yet",
        'wishlist.empty.text': 'Browse products and add favourites to the list',
        'wishlist.empty.cta': 'Browse Products'
        ,
        'no_products': 'No products found. Try a different search.',
        'compare.features': 'Features',
        'compare.price': 'Price',
        'compare.rating': 'Rating',
        'compare.material': 'Material',
        'compare.dimensions': 'Dimensions',
        'compare.action': 'Action',
        'product.new': 'New',
        'product.id_label': 'ID:',
        'product.view': 'View Details',
        'product.add_to_cart': "Add to cart"
        ,
        'product.reviews_label': 'reviews',
        'product.wishlist_btn': 'Wishlist',
        'notification.added_to_cart': 'added to cart!',
        'notification.removed_from_cart': 'removed from cart',
        'notification.added_to_wishlist': 'added to wishlist!',
        'notification.removed_from_wishlist': 'removed from wishlist!',
        'notification.compare_limit': 'You can only compare up to 4 products!',
        'notification.added_to_comparison': 'Product added to comparison!',
        'notification.removed_from_comparison': 'Product removed from comparison!',
        'notification.product_added': 'Product added to cart!'
        ,
        'notification.no_products_compare': 'No products to compare!',
        'notification.message_sent': 'Your message was sent successfully!',
        'notification.message_error': 'There was an error sending your message',
        'notification.message_sent_offline': 'Your message was sent (Telegram integration disabled)'
        ,
        'cart.empty': 'Your cart is empty',
        'cart.quantity_label': 'Quantity',
        'cart.each_label': 'each'
    },
    uz: {
        'nav.home': "Bosh Menu",
        'nav.catalog': "Mahsulotlar",
        'nav.wishlist': "Yoqtirganlar",
        'nav.about': "Malumot",
        'nav.contact': "Aloqa",
        'nav.cart': "Savat",
        'loading.welcome': "Xush Kelibsiz",
        'loading.wishlist': "Yoqtirganlar",
        'hero.title': 'Mashxura Mebel',
        'hero.subtitle': "Zamonaviy va qulay mebellar — sizning uyingiz uchun",
        'cta.view_products': "Maxsulotlarni Ko'rish",
        'section.products': 'Mahsulotlar',
        'price.note_label': 'Eslatma:',
        'price.notice_text': "Saytda ko‘rsatilgan narxlar do‘kondagi amaldagi narxlarga mos kelmasligi mumkin. Aniq narxni bilish uchun biz bilan bog‘laning.",
        'search.placeholder': 'Qidiring...',
        'filters.all': 'Hammasi',
        'filters.table': 'Oshxona',
        'filters.sofa': 'Kichkina Mebellar',
        'filters.bed': 'Yumshoq Mebel',
        'filters.lamp': 'Yotoqxona',
        'filters.stul': 'Stollar',
        'filters.stuls': 'Stullar',
        'filters.penal': 'Penal',
        'about.title': '2005-yildan buyon qulaylik yaratamiz',
        'about.p1': "Mashhura Mebelda biz mukammal dizayn va qulaylik birga keladi, deb ishonamiz. Bizning sayohatimiz sodda bir g'oyadan boshlangan: uylarni chinakam uyga aylantiradigan mebel yaratish.",
        'about.p2': "Kolleksiyamizdagi har bir mahsulot barqaror materiallar va vaqt sinovidan o'tgan estetika bilan puxta ishlangan, bu sizning makoningizni yillar davomida stil va qulay holda saqlaydi.",
        'contact.title': 'Aloqa',
        'contact.heading': 'Malumotlarimiz',
        'contact.address': "Mebel bo'yicha O'zbekistonda eng sifatli daraja",
        'contact.phone': '+998 95 541 17 60',
        'contact.email': 'mebelmashhura.uz',
        'footer.brand': 'Mahhura Furniture',
        'footer.copy': '© 2025 Mebel Mashxura',
        'cart.title': 'Savat',
        'cart.total': 'Jami: $',
        'cart.checkout': "To'lov",
        'compare.title': 'Mahsulotlarni solishtirish',
        'wishlist.title': 'Yoqtirganlar',
        'wishlist.subtitle': "Sizning tanlagan mahsulotlaringiz",
        'wishlist.empty.title': "Hozircha yoqtirganlaringiz yo'q",
        'wishlist.empty.text': "Mahsulotlarni ko'rib chiqing va yoqtirganlar ro'yxatiga qo'shing",
        'wishlist.empty.cta': "Mahsulotlarni ko'ring"
        ,
        'no_products': "Hech qanday mahsulot topilmadi. Boshqa qidiruvni sinab ko'ring.",
        'compare.features': 'Xususiyatlar',
        'compare.price': 'Narx',
        'compare.rating': 'Baholash',
        'compare.material': 'Material',
        'compare.dimensions': "O'lchamlar",
        'compare.action': 'Amal',
        'product.new': 'Yangi',
        'product.id_label': 'ID:',
        'product.view': "Ko'rish",
        'product.add_to_cart': "Savatga qo'shing"
        ,
        'product.reviews_label': 'fikrlar',
        'product.wishlist_btn': 'Yoqtirganlar',
        'notification.added_to_cart': "savatga qo'shildi!",
        'notification.removed_from_cart': "savatdan o'chirildi",
        'notification.added_to_wishlist': "Yoqtirganlarga qo'shildi!",
        'notification.removed_from_wishlist': "Yoqtirganlardan o'chirildi!",
        'notification.compare_limit': "Siz faqat 4 tagacha mahsulotni solishtirishingiz mumkin!",
        'notification.added_to_comparison': "Mahsulot solishtirishga qo'shildi!",
        'notification.removed_from_comparison': "Mahsulot solishtirishdan o'chirildi!",
        'notification.product_added': "Mahsulot savatga qo'shildi!"
        ,
        'notification.no_products_compare': "Solishtirish uchun mahsulotlar mavjud emas!",
        'notification.message_sent': "Xabaringiz muvaffaqiyatli yuborildi!",
        'notification.message_error': "Xabar yuborishda xatolik yuz berdi",
        'notification.message_sent_offline': "Xabaringiz yuborildi (Telegram integratsiyasi o'chirilgan)"
        ,
        'cart.empty': "Savat bo'sh",
        'cart.quantity_label': 'Soni',
        'cart.each_label': "har biri"
    },
    ru: {
        'nav.home': 'Главная',
        'nav.catalog': 'Каталог',
        'nav.wishlist': 'Избранное',
        'nav.about': 'О нас',
        'nav.contact': 'Контакты',
        'nav.cart': 'Корзина',
        'loading.welcome': 'Добро пожаловать',
        'loading.wishlist': 'Избранное',
        'hero.title': 'Mashxura Mebel',
        'hero.subtitle': 'Современная и удобная мебель для вашего дома',
        'cta.view_products': 'Посмотреть товары',
        'section.products': 'Товары',
        'price.note_label': 'Примечание:',
        'price.notice_text': 'Цены на сайте могут отличаться от актуальных в магазине. Свяжитесь с нами для уточнения цен.',
        'search.placeholder': 'Поиск...',
        'filters.all': 'Все',
        'filters.table': 'Столовые',
        'filters.sofa': 'Компактные',
        'filters.bed': 'Мягкая мебель',
        'filters.lamp': 'Спальня',
        'filters.stul': 'Столы',
        'filters.stuls': 'Стулья',
        'filters.penal': 'Шкафы',
        'about.title': 'Создаём комфорт с 2005 года',
        'about.p1': 'В Mashhura Mebel мы верим, что исключительный дизайн и комфорт идут рука об руку. Наша история началась с простой идеи: создать мебель, делающую дом по-настоящему уютным.',
        'about.p2': 'Каждый предмет коллекции изготовлен из устойчивых материалов с вечной эстетикой, чтобы ваше пространство оставалось стильным годами.',
        'contact.title': 'Контакты',
        'contact.heading': 'Наши данные',
        'contact.address': 'Высококачественная мебель в Узбекистане',
        'contact.phone': '+998 95 541 17 60',
        'contact.email': 'mebelmashhura.uz',
        'footer.brand': 'Mahhura Furniture',
        'footer.copy': '© 2025 Mebel Mashxura',
        'cart.title': 'Ваша корзина',
        'cart.total': 'Итого: $',
        'cart.checkout': 'Оформить заказ',
        'compare.title': 'Сравнение товаров',
        'wishlist.title': 'Избранное',
        'wishlist.subtitle': 'Ваши выбранные товары',
        'wishlist.empty.title': 'Пока нет избранного',
        'wishlist.empty.text': 'Просмотрите товары и добавьте понравившиеся в избранное',
        'wishlist.empty.cta': 'Просмотреть товары'
        ,
        'no_products': 'Товары не найдены. Попробуйте другой поиск.',
        'compare.features': 'Характеристики',
        'compare.price': 'Цена',
        'compare.rating': 'Рейтинг',
        'compare.material': 'Материал',
        'compare.dimensions': 'Размеры',
        'compare.action': 'Действие',
        'product.new': 'Новинка',
        'product.id_label': 'ID:',
        'product.view': 'Подробнее',
        'product.add_to_cart': 'Добавить в корзину'
        ,
        'product.reviews_label': 'отзывов',
        'product.wishlist_btn': 'Избранное',
        'notification.added_to_cart': 'добавлено в корзину!',
        'notification.removed_from_cart': 'удалено из корзины',
        'notification.added_to_wishlist': 'добавлено в избранное!',
        'notification.removed_from_wishlist': 'удалено из избранного!',
        'notification.compare_limit': 'Вы можете сравнивать не более 4 товаров!',
        'notification.added_to_comparison': 'Товар добавлен в сравнение!',
        'notification.removed_from_comparison': 'Товар удалён из сравнения!',
        'notification.product_added': 'Товар добавлен в корзину!'
        ,
        'notification.no_products_compare': 'Нет товаров для сравнения!',
        'notification.message_sent': 'Ваше сообщение успешно отправлено!',
        'notification.message_error': 'Произошла ошибка при отправке сообщения',
        'notification.message_sent_offline': 'Ваше сообщение отправлено (Telegram интеграция отключена)'
        ,
        'cart.empty': 'Ваша корзина пуста',
        'cart.quantity_label': 'Количество',
        'cart.each_label': 'каждый'
    }
};

// Populate missing product name/description keys in i18n from `products` as fallbacks
if (typeof products !== 'undefined') {
    products.forEach(p => {
        ['en','uz','ru'].forEach(lang => {
            if (!i18n[lang]) i18n[lang] = {};
            const nameKey = `product.name.${p.id}`;
            const descKey = `product.desc.${p.id}`;
            if (!i18n[lang][nameKey]) i18n[lang][nameKey] = p.name;
            if (!i18n[lang][descKey]) i18n[lang][descKey] = p.description;
        });
    });

    // Apply translations after populating keys so rendered product elements update
    const currentLang = localStorage.getItem('site-lang') || document.documentElement.lang || 'uz';
    if (typeof applyTranslations === 'function') applyTranslations(currentLang);
}

function applyTranslations(lang){
    if (typeof i18n === 'undefined') return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        // support dynamic keys like product.name.1 or product.desc.1
        let txt = el.textContent;
        if (i18n[lang] && i18n[lang][key]) {
            txt = i18n[lang][key];
        }
        el.textContent = txt;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const txt = (i18n[lang] && i18n[lang][key]) || el.placeholder || '';
        el.placeholder = txt;
    });
    // Some keys use composed HTML; update common ones
    const priceNote = document.querySelector('.price-notice');
    if(priceNote){
        const noteLabel = i18n[lang] && i18n[lang]['price.note_label'];
        const noteText = i18n[lang] && i18n[lang]['price.notice_text'];
        if(noteLabel && noteText){
            priceNote.innerHTML = `<i class="fas fa-info-circle"></i> <span><strong>${noteLabel}</strong> ${noteText}</span>`;
        }
    }
}

function setLang(lang){
    if(!['en','uz','ru'].includes(lang)) lang = 'uz';
    localStorage.setItem('site-lang', lang);
    document.querySelectorAll('#lang-select').forEach(s => s.value = lang);
    applyTranslations(lang);
}

// Initialize language selector reliably (run now or on DOMContentLoaded)
function initLanguageSelector(){
    const saved = localStorage.getItem('site-lang') || (navigator.language && navigator.language.slice(0,2)) || 'uz';
    const lang = ['en','uz','ru'].includes(saved) ? saved : 'uz';
    document.querySelectorAll('#lang-select').forEach(select => {
        select.value = lang;
        // Remove duplicate listeners by cloning the node (safe idempotent attach)
        select.addEventListener('change', (e) => setLang(e.target.value));
    });
    setLang(lang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSelector);
} else {
    // DOM already ready
    initLanguageSelector();
}

/* Additional micro-interactions and hero parallax */
(function(){
    // simple parallax for hero video on scroll (subtle)
    const heroVideo = document.getElementById('hero-video');
    if(heroVideo){
        let ticking = false;
        const onScroll = () => {
            if(!ticking){
                window.requestAnimationFrame(() => {
                    const y = window.scrollY || window.pageYOffset;
                    // small movement range for subtle effect
                    const move = Math.max(Math.min(y * 0.12, 120), -60);
                    heroVideo.style.transform = `translateY(${move}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, {passive: true});
        // initial frame
        onScroll();
    }

    // hero form: small feedback + notification
    const heroForm = document.getElementById('hero-form');
    if(heroForm){
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = heroForm.querySelector('.send-btn');
            if(btn) {
                btn.disabled = true;
                btn.classList.add('sending');
            }
            // emulate async submit
            setTimeout(() => {
                if(btn){ btn.disabled = false; btn.classList.remove('sending'); }
                const note = document.createElement('div');
                note.className = 'notification show';
                note.textContent = "Rahmat! Elektron pochta qabul qilindi.";
                document.body.appendChild(note);
                setTimeout(()=> note.classList.remove('show'), 2000);
                setTimeout(()=> note.remove(), 2600);
                heroForm.reset();
            }, 900);
        });
    }

    // keyboard focus visibility toggle for accessibility
    function handleFirstTab(e){
        if(e.key === 'Tab') document.body.classList.add('show-focus');
    }
    window.addEventListener('keydown', handleFirstTab, {once: true});

})();