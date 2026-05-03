// Central content config — easily editable to update the landing page.
const imagePath = (name: string) => `/assets/images/${name}`;
const menuImagePath = (name: string) => `/assets/images/menu/${name}`;

const counter1 = imagePath("palette-counter-1.jpg");
const counter2 = imagePath("palette-counter-2.jpg");
const interior = imagePath("palette-interior.jpg");
const fingerfood = imagePath("palette-fingerfood.jpg");
const photobooth = imagePath("palette-photobooth.jpg");
const pose = imagePath("palette-pose.jpg");
const bottle = imagePath("palette-bottle.jpg");
const coffeeAnswer = imagePath("palette-coffee-answer.jpg");
const drink = imagePath("palette-drink.jpg");

// Menu images
const imgClassic = menuImagePath("classic-coffee.jpg");
const imgKopiSusu = menuImagePath("kopi-susu.jpg");
const imgSeaSalt = menuImagePath("sea-salt.jpg");
const imgBestTea = menuImagePath("best-tea.jpg");
const imgChocoFactory = menuImagePath("chocolate-factory.jpg");
const imgSugar1 = menuImagePath("sugar-white-1.jpg");
const imgSugar2 = menuImagePath("sugar-white-2.jpg");
const imgSugar3 = menuImagePath("sugar-white-3.jpg");
const imgSugar4 = menuImagePath("sugar-white-4.jpg");
const imgSweet1 = menuImagePath("sweet-memories-1.jpg");
const imgSweet2 = menuImagePath("sweet-memories-2.jpg");
const imgSweet3 = menuImagePath("sweet-memories-3.jpg");
const imgOat1 = menuImagePath("oatmilk-1.jpg");
const imgOat2 = menuImagePath("oatmilk-2.jpg");
const imgBlack1 = menuImagePath("black-magic-1.jpg");
const imgBlack2 = menuImagePath("black-magic-2.jpg");
const imgBlack3 = menuImagePath("black-magic-3.jpg");
const imgZero1 = menuImagePath("zero-proof-1.jpg");
const imgZero2 = menuImagePath("zero-proof-2.jpg");
const imgZero3 = menuImagePath("zero-proof-3.jpg");
const imgMojito = menuImagePath("mojito.jpg");
const imgSnack1 = menuImagePath("snack-1.jpg");
const imgSnack2 = menuImagePath("snack-2.jpg");
const imgSnack3 = menuImagePath("snack-3.jpg");
const imgSnack4 = menuImagePath("snack-4.jpg");
const imgSnack5 = menuImagePath("snack-5.jpg");
const imgSnack6 = menuImagePath("snack-6.jpg");
const imgSnack7 = menuImagePath("snack-7.jpg");
const imgSnack8 = menuImagePath("snack-8.jpg");
const imgSnack9 = menuImagePath("snack-9.jpg");
const imgSnack10 = menuImagePath("snack-10.jpg");
const imgSnack11 = menuImagePath("snack-11.jpg");
const imgSnack12 = menuImagePath("snack-12.jpg");
const imgSnack13 = menuImagePath("snack-13.jpg");
const imgSnack14 = menuImagePath("snack-14.jpg");
const imgSnack15 = menuImagePath("snack-15.jpg");
const imgSnack16 = menuImagePath("snack-16.jpg");
const imgWP1 = menuImagePath("wings-pasta-1.jpg");
const imgWP2 = menuImagePath("wings-pasta-2.jpg");
const imgWP3 = menuImagePath("wings-pasta-3.jpg");
const imgWP4 = menuImagePath("wings-pasta-4.jpg");
const imgWP5 = menuImagePath("wings-pasta-5.jpg");
const imgSalad1 = menuImagePath("salad-1.jpg");
const imgSalad2 = menuImagePath("salad-2.jpg");
const imgMain1 = menuImagePath("main-1.jpg");
const imgMain2 = menuImagePath("main-2.jpg");
const imgRice1 = menuImagePath("rice-1.jpg");
const imgRice2 = menuImagePath("rice-2.jpg");
const imgRice3 = menuImagePath("rice-3.jpg");
const imgRice4 = menuImagePath("rice-4.jpg");
const imgRice5 = menuImagePath("rice-5.jpg");
const imgRice6 = menuImagePath("rice-6.jpg");
const imgRice7 = menuImagePath("rice-7.jpg");
const imgRice8 = menuImagePath("rice-8.jpg");
const imgBundle1 = menuImagePath("bundle-1.jpg");
const imgBundle2 = menuImagePath("bundle-2.jpg");
const imgBundle3 = menuImagePath("bundle-3.jpg");
const imgBundle4 = menuImagePath("bundle-4.jpg");
const imgBundle5 = menuImagePath("bundle-5.jpg");

export const cafe = {
  name: "PALETTE COFFEE",
  concept: "Coffee & Space",
  tagline: "a place of happiness to paint the canvas of your life",
  address:
    "Jl. Banjarsari Barat No.10, RT.07/RW.III, Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50275",
  shortAddress: "Banyumanik, Semarang",
  hours: "Mon–Sun · 09.00 – 01.00",
  instagram: "palettespace__",
  instagramUrl: "https://www.instagram.com/palettespace__/",
  maps: "https://maps.app.goo.gl/hKyQ1QhFsZAdQi2s9",
  whatsapp: "https://wa.me/6282220029293",
  whatsappLabel: "+62 822-2002-9293",
};

export const heroImages = { counter1, interior, counter2 };

export const highlights = [
  {
    icon: "☕",
    title: "Tempat Nongkrong",
    desc: "Suasana immersive, playful, dan nyaman untuk quality time dari siang sampai malam.",
  },
  {
    icon: "🎨",
    title: "Tempat Berkarya",
    desc: "Layout space yang inspiratif buat ide, diskusi, dan produktivitas komunitas kreatif.",
  },
  {
    icon: "📸",
    title: "Tempat Foto",
    desc: "Setiap sudut dirancang instagrammable untuk feed aesthetic dan brand content kamu.",
  },
];

// ---------------------------------------------------------------------------
// MENU
// ---------------------------------------------------------------------------

export type MenuItem = {
  name: string;
  price: string; // formatted Rupiah without the "Rp" prefix
  desc?: string;
  image: string;
  badge?: string;
  /** sub-section inside the parent category, e.g. "Classic Coffee · Black" */
  group?: string;
};

export type MenuCategory = {
  slug: "coffee" | "non-coffee" | "snacks" | "mains" | "bundling";
  label: string;
  blurb: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "coffee",
    label: "Coffee",
    blurb: "Espresso, kopi susu, sea salt series & manual brew dari biji pilihan.",
    items: [
      // Manual Brew
      {
        name: "Japanese Ice Manual Brew",
        price: "27.273 – 35.000",
        desc: "Manual brew dingin, ringan, dan clean. Tanya barista untuk pilihan biji.",
        image: imgClassic,
        group: "Manual Brew",
        badge: "Barista's Pick",
      },
      {
        name: "Hot Filter Manual Brew",
        price: "27.273 – 35.000",
        desc: "Filter coffee panas dengan profile rasa sesuai biji yang tersedia.",
        image: imgClassic,
        group: "Manual Brew",
      },
      // Classic Black
      {
        name: "Espresso",
        price: "15.000",
        desc: "Single shot espresso, bold dan pekat.",
        image: imgClassic,
        group: "Classic Coffee · Black",
      },
      {
        name: "Doppio",
        price: "19.091",
        desc: "Double shot espresso untuk yang butuh kick ekstra.",
        image: imgClassic,
        group: "Classic Coffee · Black",
      },
      {
        name: "Affogato",
        price: "21.000",
        desc: "Vanilla ice cream disiram hot espresso.",
        image: imgClassic,
        group: "Classic Coffee · Black",
      },
      {
        name: "Americano (Hot/Ice)",
        price: "22.000",
        desc: "Espresso dengan air hangat atau dingin, clean dan segar.",
        image: imgClassic,
        group: "Classic Coffee · Black",
      },
      {
        name: "Ice Long Black",
        price: "22.000",
        desc: "Long black dingin, smooth dan mellow.",
        image: imgClassic,
        group: "Classic Coffee · Black",
      },
      // Classic White
      {
        name: "Cafe Latte (Hot/Ice)",
        price: "25.000",
        desc: "Espresso dengan steamed milk creamy.",
        image: imgClassic,
        group: "Classic Coffee · White",
      },
      {
        name: "Flavoured Cafe Latte",
        price: "30.000",
        desc: "Cafe latte dengan pilihan flavour favoritmu.",
        image: imgClassic,
        group: "Classic Coffee · White",
      },
      {
        name: "Cappucino",
        price: "25.000",
        desc: "Espresso, steamed milk, dan microfoam balance.",
        image: imgClassic,
        group: "Classic Coffee · White",
      },
      {
        name: "Piccolo",
        price: "25.000",
        desc: "Ristretto dengan sedikit steamed milk — intens dan creamy.",
        image: imgClassic,
        group: "Classic Coffee · White",
      },
      {
        name: "Magic",
        price: "25.000",
        desc: "Double ristretto + steamed milk dalam cangkir 5oz.",
        image: imgClassic,
        group: "Classic Coffee · White",
      },
      // Kopi Susu
      {
        name: "Kopi Susu OG",
        price: "21.000",
        desc: "Brown sugar — manis legit khas kopi susu kekinian.",
        image: imgKopiSusu,
        group: "Kopi Susu",
        badge: "Best Seller",
      },
      {
        name: "Kopi Susu KAMU",
        price: "23.000",
        desc: "Salted caramel — manis-asin yang adiktif.",
        image: imgKopiSusu,
        group: "Kopi Susu",
      },
      {
        name: "Kopi Susu Havana",
        price: "23.000",
        desc: "Vanilla & rum — wangi, hangat, smooth.",
        image: imgKopiSusu,
        group: "Kopi Susu",
      },
      {
        name: "Kopi Susu Hazelnut",
        price: "23.000",
        desc: "Sentuhan nutty hazelnut yang familiar.",
        image: imgKopiSusu,
        group: "Kopi Susu",
      },
      {
        name: "Kopi Susu Mocha",
        price: "23.000",
        desc: "Chocolate paduan kopi susu — favorit pemula.",
        image: imgKopiSusu,
        group: "Kopi Susu",
      },
      {
        name: "Kopi Susu Pandan",
        price: "25.000",
        desc: "Pandan & coconut milk — twist tropikal yang fresh.",
        image: imgKopiSusu,
        group: "Kopi Susu",
      },
      {
        name: "Kopi Susu Palette",
        price: "27.273",
        desc: "Tiramisu & whipped cream — signature manis dan creamy.",
        image: imgKopiSusu,
        group: "Kopi Susu",
        badge: "Signature",
      },
      // Sea Salt
      {
        name: "Butterscotch Sea Salt",
        price: "27.273",
        desc: "Manis-gurih butterscotch dengan jejak sea salt.",
        image: imgSeaSalt,
        group: "Sea Salt Series",
        badge: "Recommended",
      },
      {
        name: "Coffee Banana Sea Salt",
        price: "27.273",
        desc: "Espresso, banana, sea salt — unik dan creamy.",
        image: imgSeaSalt,
        group: "Sea Salt Series",
      },
      {
        name: "Matcha Sea Salt",
        price: "27.273",
        desc: "Matcha earthy ketemu sea salt — balance sempurna.",
        image: imgSeaSalt,
        group: "Sea Salt Series",
      },
      {
        name: "Red Velvet Sea Salt",
        price: "27.273",
        desc: "Red velvet milky dengan sentuhan asin yang lembut.",
        image: imgSeaSalt,
        group: "Sea Salt Series",
      },
      // Black Magic (coldbrew based)
      {
        name: "Barista Choice",
        price: "26.364",
        desc: "Coldbrew, soda, milk, vanilla — segar dan lively.",
        image: imgBlack3,
        group: "Black Magic",
      },
      {
        name: "Red Bloom Coffee",
        price: "29.091",
        desc: "Coldbrew, watermelon, cranberry juice, peach, cherry.",
        image: imgBlack1,
        group: "Black Magic",
      },
      {
        name: "Candie Berry",
        price: "28.182",
        desc: "Coldbrew, cranberry juice, apple juice, strawberry jam.",
        image: imgBlack2,
        group: "Black Magic",
      },
    ],
  },
  {
    slug: "non-coffee",
    label: "Non-Coffee",
    blurb: "Tea, chocolate, sugar white, smoothies & mocktail untuk semua mood.",
    items: [
      // Best Tea
      {
        name: "Lychee Tea",
        price: "25.000",
        desc: "Tea dengan aroma lychee yang fruity dan segar.",
        image: imgBestTea,
        group: "Best Tea",
      },
      {
        name: "Lemon Tea (Hot/Ice)",
        price: "20.000",
        desc: "Tea klasik dengan perasan lemon segar.",
        image: imgBestTea,
        group: "Best Tea",
      },
      {
        name: "Vanilla Tea (Hot/Ice)",
        price: "20.000",
        desc: "Aroma vanilla yang lembut menemani black tea.",
        image: imgBestTea,
        group: "Best Tea",
      },
      {
        name: "Mint Tea (Hot/Ice)",
        price: "20.000",
        desc: "Mint dingin yang menyegarkan, cocok cuaca panas.",
        image: imgBestTea,
        group: "Best Tea",
      },
      {
        name: "Black Tea (Hot/Ice)",
        price: "18.182",
        desc: "Pure black tea — clean dan ringan.",
        image: imgBestTea,
        group: "Best Tea",
      },
      // Chocolate Factory
      {
        name: "Coklat Pisang Karamel",
        price: "28.182",
        desc: "Chocolate, banana, milk, caramel — manis indulgent.",
        image: imgChocoFactory,
        group: "Chocolate Factory",
      },
      {
        name: "Triple Layer Choco",
        price: "29.091",
        desc: "Chocolate, butterscotch, vanilla, milk, cheese syrup.",
        image: imgChocoFactory,
        group: "Chocolate Factory",
        badge: "Recommended",
      },
      {
        name: "Peanut Butter Chocolate",
        price: "28.182",
        desc: "Chocolate, peanut butter, milk, frappe — nutty creamy.",
        image: imgChocoFactory,
        group: "Chocolate Factory",
      },
      // Sugar White
      {
        name: "Like a Cheese Cake",
        price: "29.091",
        desc: "Butterscotch, vanilla, cheese, cookie, milk.",
        image: imgSugar1,
        group: "Sugar White",
      },
      {
        name: "Biscoff Latte",
        price: "29.091",
        desc: "Biscoff biscuit, caramel, milk — caramelized cookie.",
        image: imgSugar2,
        group: "Sugar White",
        badge: "Best Seller",
      },
      {
        name: "Rum Regal",
        price: "28.182",
        desc: "Rumbullion syrup, vanilla, cookie, milk.",
        image: imgSugar3,
        group: "Sugar White",
      },
      {
        name: "Cookies & Cream",
        price: "29.091",
        desc: "Oreo, vanilla, ice cream, milk — classic indulgent.",
        image: imgSugar4,
        group: "Sugar White",
      },
      // Sweet Memories
      {
        name: "Earl Gray Milk Tea",
        price: "22.000",
        desc: "Earl gray dengan susu — wangi bergamot khas.",
        image: imgSweet1,
        group: "Sweet Memories",
      },
      {
        name: "Red Velvet Latte",
        price: "26.364",
        desc: "Red velvet milky drink — silky dan photogenic.",
        image: imgSweet1,
        group: "Sweet Memories",
      },
      {
        name: "Matcha Latte",
        price: "26.364",
        desc: "Matcha premium dengan susu creamy.",
        image: imgSweet2,
        group: "Sweet Memories",
        badge: "Recommended",
      },
      {
        name: "Strawberry Matcha Latte",
        price: "30.000",
        desc: "Layer strawberry x matcha — fruity meets earthy.",
        image: imgSweet2,
        group: "Sweet Memories",
      },
      {
        name: "Chocolate Latte",
        price: "26.364",
        desc: "Chocolate latte rich dan smooth.",
        image: imgSweet3,
        group: "Sweet Memories",
      },
      {
        name: "Flavoured Chocolate Latte",
        price: "31.000",
        desc: "Chocolate latte dengan pilihan flavour ekstra.",
        image: imgSweet3,
        group: "Sweet Memories",
      },
      // Not so Healthy
      {
        name: "Strawberry Oatmilk",
        price: "32.000",
        desc: "Strawberry, oat, milk — fresh and creamy.",
        image: imgOat1,
        group: "Not So Healthy",
      },
      {
        name: "Blueberry Oatmilk",
        price: "32.000",
        desc: "Blueberry, oat, milk — light dengan tone fruity.",
        image: imgOat1,
        group: "Not So Healthy",
      },
      {
        name: "Mango Oatmilk",
        price: "34.545",
        desc: "Mango, oat, milk — tropikal dan smooth.",
        image: imgOat1,
        group: "Not So Healthy",
      },
      {
        name: "Red Banana Smoothies",
        price: "34.545",
        desc: "Dragonfruit, banana, milk — vibrant pink smoothies.",
        image: imgOat2,
        group: "Not So Healthy",
      },
      {
        name: "Banana Mango Smoothies",
        price: "34.545",
        desc: "Banana, mango, milk — kombinasi creamy dan tropikal.",
        image: imgOat2,
        group: "Not So Healthy",
      },
      // Zero Proof
      {
        name: "Creamy Butter Beer",
        price: "27.273",
        desc: "Butterscotch, cola, whipped cream — playful & sweet.",
        image: imgZero3,
        group: "Zero Proof",
      },
      {
        name: "Pocinki",
        price: "27.273",
        desc: "Soda, honey, apple, pomegranate, lemon juice.",
        image: imgZero2,
        group: "Zero Proof",
      },
      {
        name: "This is the Remix",
        price: "27.273",
        desc: "Cherry, vanilla, lime juice, soda — fizzy mocktail.",
        image: imgZero1,
        group: "Zero Proof",
      },
      // Classic Mocktail
      {
        name: "Cherry Mojito",
        price: "25.000",
        desc: "Soda, mint, cherry — fresh dan vibrant.",
        image: imgMojito,
        group: "Classic Mocktail",
      },
      {
        name: "Strawberry Mojito",
        price: "25.000",
        desc: "Soda, mint, lime juice, strawberry.",
        image: imgMojito,
        group: "Classic Mocktail",
      },
      {
        name: "Virgin Mojito",
        price: "25.000",
        desc: "Soda, mint, peppermint, lime juice — classic refresher.",
        image: imgMojito,
        group: "Classic Mocktail",
      },
      {
        name: "Kiwi Minty Mojito",
        price: "25.000",
        desc: "Soda, mint, kiwi pulp — tangy dan unik.",
        image: imgMojito,
        group: "Classic Mocktail",
      },
      {
        name: "Mango Mojito",
        price: "25.000",
        desc: "Soda, mint, mango flavour — tropikal dan ringan.",
        image: imgMojito,
        group: "Classic Mocktail",
      },
    ],
  },
  {
    slug: "snacks",
    label: "Snacks",
    blurb: "Dessert, finger food, dan platter sharing untuk teman ngopi.",
    items: [
      {
        name: "Monkey D Luffy",
        price: "25.000",
        desc: "Fried banana, peanut butter, chocolate, vanilla ice cream.",
        image: imgSnack1,
        group: "Dessert",
      },
      {
        name: "Jasuke",
        price: "20.000",
        desc: "Steam corn dengan caramel syrup & cheese.",
        image: imgSnack2,
        group: "Dessert",
      },
      {
        name: "Caramel Banana Wonton",
        price: "23.636",
        desc: "Crispy banana dumpling dengan caramel sauce.",
        image: imgSnack3,
        group: "Dessert",
      },
      {
        name: "Strawberry Butter Toast",
        price: "30.000",
        desc: "Butter toast dengan strawberry sauce, fruits & ice cream.",
        image: imgSnack4,
        group: "Dessert",
      },
      {
        name: "Blueberry Butter Toast",
        price: "30.000",
        desc: "Butter toast dengan blueberry sauce, fruits & ice cream.",
        image: imgSnack5,
        group: "Dessert",
      },
      {
        name: "Caramel Biscoff Butter Toast",
        price: "35.000",
        desc: "Butter toast, caramel, biscoff spread, biscuit & ice cream.",
        image: imgSnack6,
        group: "Dessert",
        badge: "Recommended",
      },
      {
        name: "Mushroom Fritters",
        price: "21.000",
        desc: "Enoki mushroom fries — crispy dan gurih.",
        image: imgSnack7,
        group: "Finger Food",
      },
      {
        name: "Corn Ribs",
        price: "25.000",
        desc: "Roasted corn dengan mentai sauce.",
        image: imgSnack8,
        group: "Finger Food",
      },
      {
        name: "Palette Mix Platter",
        price: "44.545",
        desc: "Mix french fries, corn ribs, chicken strip & crispy wonton.",
        image: imgSnack9,
        group: "Finger Food",
        badge: "Sharing",
      },
      {
        name: "French Fries",
        price: "23.000",
        desc: "Original crispy fries — comfort classic.",
        image: imgSnack10,
        group: "Finger Food",
      },
      {
        name: "Chicken Strip",
        price: "26.364",
        desc: "Crispy chicken dengan palette sauce.",
        image: imgSnack11,
        group: "Finger Food",
      },
      {
        name: "Loaded Cheese Fries — Chicken Katsu",
        price: "44.545",
        desc: "Shoestring fries, cheese sauce, buffalo sauce, chicken katsu.",
        image: imgSnack12,
        group: "Finger Food",
      },
      {
        name: "Hot Fire Fries",
        price: "25.000",
        desc: "Spicy french fries — kick yang nendang.",
        image: imgSnack13,
        group: "Finger Food",
      },
      {
        name: "Crispy Chicken Wonton",
        price: "25.000",
        desc: "Fried chicken dumpling dengan bangkok sauce.",
        image: imgSnack14,
        group: "Finger Food",
      },
      {
        name: "Loaded Cheese Fries — Bratwurst Sausage",
        price: "44.545",
        desc: "Shoestring fries, cheese sauce, buffalo sauce, bratwurst.",
        image: imgSnack15,
        group: "Finger Food",
      },
      {
        name: "Mentai Wings",
        price: "36.364",
        desc: "Chicken wings dengan mentai sauce creamy gurih.",
        image: imgWP1,
        group: "Wings",
      },
      {
        name: "Korean Wings",
        price: "38.182",
        desc: "Chicken wings coating dengan korean sauce manis pedas.",
        image: imgWP1,
        group: "Wings",
      },
      {
        name: "Garlic Chilli Butter Wings",
        price: "39.091",
        desc: "Chicken wings dengan garlic chilli butter sauce.",
        image: imgWP1,
        group: "Wings",
        badge: "Best Seller",
      },
      {
        name: "Aglio Olio",
        price: "35.000",
        desc: "Pasta dengan smoked beef, olive oil, garlic & chilli.",
        image: imgWP2,
        group: "Pasta",
      },
      {
        name: "Shrimp Marinara",
        price: "37.273",
        desc: "Pasta dengan marinara sauce & shrimp.",
        image: imgWP3,
        group: "Pasta",
      },
      {
        name: "Creamy Chicken Mushroom",
        price: "37.273",
        desc: "Pasta creamy sauce, chicken & champignon mushroom.",
        image: imgWP4,
        group: "Pasta",
      },
      {
        name: "Tuna Arrabbiata",
        price: "38.182",
        desc: "Pasta arrabbiata sauce dengan tuna chunk.",
        image: imgWP5,
        group: "Pasta",
      },
      {
        name: "Bolognese",
        price: "40.000",
        desc: "Pasta dengan rich bolognese sauce.",
        image: imgWP5,
        group: "Pasta",
      },
    ],
  },
  {
    slug: "mains",
    label: "Mains & Salad",
    blurb: "Rice bowl, salad, dan main course — bikin kenyang & happy.",
    items: [
      {
        name: "Salad with Caesar Dressing & Chicken",
        price: "29.091",
        desc: "Mix lettuce, onion, tomato cherry, chicken, parmesan, caesar dressing.",
        image: imgSalad2,
        group: "Salad",
      },
      {
        name: "Sesame Salad",
        price: "29.091",
        desc: "Mix lettuce, sweet corn, onion, tomato cherry, egg, chicken, sesame dressing.",
        image: imgSalad1,
        group: "Salad",
      },
      {
        name: "Fish n Fries",
        price: "37.273",
        desc: "Fish fillet, french fries, simple salad & tartar sauce.",
        image: imgMain2,
        group: "Main Course",
      },
      {
        name: "Chicken Nanban",
        price: "37.273",
        desc: "Crispy chicken nanban sauce, french fries, salad & tartar sauce.",
        image: imgMain1,
        group: "Main Course",
      },
      {
        name: "Chicken Blackpepper",
        price: "31.000",
        desc: "Rice bowl chicken blackpepper, crispy spinach, egg & simple salad.",
        image: imgRice1,
        group: "Rice Bowl",
      },
      {
        name: "Beef Teriyaki",
        price: "38.182",
        desc: "Rice bowl beef teriyaki, crispy spinach, egg & simple salad.",
        image: imgRice2,
        group: "Rice Bowl",
      },
      {
        name: "Chicken Teriyaki",
        price: "31.000",
        desc: "Rice bowl chicken teriyaki, crispy spinach, egg & simple salad.",
        image: imgRice3,
        group: "Rice Bowl",
        badge: "Best Seller",
      },
      {
        name: "Beef Blackpepper",
        price: "38.182",
        desc: "Rice bowl beef blackpepper, crispy spinach, egg & simple salad.",
        image: imgRice4,
        group: "Rice Bowl",
      },
      {
        name: "BBQ Chicken",
        price: "33.636",
        desc: "Rice bowl BBQ chicken, crispy spinach, egg & simple salad.",
        image: imgRice5,
        group: "Rice Bowl",
      },
      {
        name: "Korean Chicken",
        price: "31.000",
        desc: "Rice bowl korean chicken, crispy spinach, egg & simple salad.",
        image: imgRice6,
        group: "Rice Bowl",
      },
      {
        name: "Chicken Katsu Curry",
        price: "31.000",
        desc: "Chicken katsu curry dengan potato & carrot.",
        image: imgRice7,
        group: "Rice Bowl",
      },
      {
        name: "Garlic Butter Chilli Chicken",
        price: "31.000",
        desc: "Rice bowl garlic butter chilli chicken dengan omelette.",
        image: imgRice8,
        group: "Rice Bowl",
      },
    ],
  },
  {
    slug: "bundling",
    label: "Bundling",
    blurb: "Paket hemat — meal + drink mulai Rp 50.000.",
    items: [
      {
        name: "Chicken Katsu Curry & Es Kopi OG",
        price: "50.000",
        desc: "Paket hemat chicken katsu curry + es kopi OG.",
        image: imgBundle5,
        group: "Bundling",
        badge: "Hemat",
      },
      {
        name: "Korean Chicken & Mint Tea",
        price: "50.000",
        desc: "Paket korean chicken rice bowl + mint tea segar.",
        image: imgBundle3,
        group: "Bundling",
        badge: "Hemat",
      },
      {
        name: "Chicken Teriyaki & Lemon Tea",
        price: "50.000",
        desc: "Paket chicken teriyaki rice bowl + lemon tea.",
        image: imgBundle1,
        group: "Bundling",
        badge: "Hemat",
      },
      {
        name: "Chicken Blackpepper & Vanilla Tea",
        price: "50.000",
        desc: "Paket chicken blackpepper rice bowl + vanilla tea.",
        image: imgBundle2,
        group: "Bundling",
        badge: "Hemat",
      },
      {
        name: "Aglio Olio & Black Tea",
        price: "52.000",
        desc: "Paket pasta aglio olio + black tea.",
        image: imgBundle4,
        group: "Bundling",
        badge: "Hemat",
      },
    ],
  },
];

export const getCategory = (slug: string) => menuCategories.find((c) => c.slug === slug);

export const allMenuItems = (): { category: MenuCategory; item: MenuItem }[] =>
  menuCategories.flatMap((c) => c.items.map((item) => ({ category: c, item })));

export const gallery = [
  { src: counter1, alt: "Palette Coffee counter dengan neon sign", tall: true },
  { src: interior, alt: "Interior cafe dengan mezzanine kuning" },
  { src: fingerfood, alt: "Finger food platter Palette" },
  { src: counter2, alt: "Bar dan barista Palette Coffee" },
  { src: drink, alt: "Pengunjung menikmati minuman" },
  { src: bottle, alt: "Fifty-fifty bottle series" },
  { src: coffeeAnswer, alt: "Coffee's the answer — Palette", tall: true },
  { src: pose, alt: "Photo studio Pose & Pop" },
  { src: photobooth, alt: "Suasana photobooth Palette" },
];

export const testimonials = [
  {
    name: "Rifka A.",
    role: "Content Creator",
    text: "Tempatnya estetik banget, tiap sudut bisa jadi spot foto. Mocha Canvas-nya juara, balik lagi pasti!",
  },
  {
    name: "Bima P.",
    role: "Mahasiswa",
    text: "Cocok buat ngerjain tugas sampai malem. Wifi kenceng, kopi enak, suasana adem walau rame.",
  },
  {
    name: "Salsabila",
    role: "Freelance Designer",
    text: "Photo studio-nya solid buat brand content. Crew-nya helpful, harga menu juga masih bersahabat.",
  },
];
