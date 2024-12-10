import p1_img from "./ajwain/3.jpg";
import b1_img from './ajwain/1.jpg';
import s1_img from './ajwain/7.jpg';

import p2_img from "./All in one masala front and back/1.jpg";
import b2_img from "./All in one masala front and back/0.jpg";
import s2_img from "./All in one masala front and back/0.jpg";

import p3_img from "./Amchur powder front and back/0.jpg";
import b3_img from "./Amchur powder front and back/1.jpg";
import s3_img from "./Amchur powder front and back/1.jpg";

import p4_img from "./black pepper/3.jpg";
import b4_img from "./black pepper/2.jpg";
import s4_img from "./black pepper/7.jpg";

import p5_img from "./black salt front and back/1.jpg";
import b5_img from "./black salt front and back/0.jpg";
import s5_img from "./black salt front and back/0.jpg";

import p6_img from "./Dhaniya (Corriander Powder)/1.jpg";
import b6_img from "./Dhaniya (Corriander Powder)/6.jpg";
import s6_img from "./Dhaniya (Corriander Powder)/3.jpg";

import p7_img from "./elaichi front and back/1.jpg";
import b7_img from "./elaichi front and back/0.jpg";
import s7_img from "./elaichi front and back/0.jpg";

import p8_img from "./Haldi  (Turmeric Powder)/1.jpg";
import b8_img from "./Haldi  (Turmeric Powder)/6.jpg";
import s8_img from "./Haldi  (Turmeric Powder)/4.jpg";

import p9_img from "./Jeera/2.jpg";
import b9_img from "./Jeera/0.jpg";
import s9_img from "./Jeera/8.jpg";

import p10_img from "./laung front and back/1.jpg";
import b10_img from "./laung front and back/0.jpg";
import s10_img from "./laung front and back/0.jpg";

import p11_img from "./methi dana/2.jpg";
import b11_img from "./methi dana/0.jpg";
import s11_img from "./methi dana/6.jpg";

import p12_img from "./Mirchi (Red Chilli Powder)/1.jpg";
import b12_img from "./Mirchi (Red Chilli Powder)/5.jpg";
import s12_img from "./Mirchi (Red Chilli Powder)/4.jpg";

import p13_img from "./pudina front and back/1.jpg";
import b13_img from "./pudina front and back/0.jpg";
import s13_img from "./pudina front and back/0.jpg";

import p14_img from "./Rai/3.jpg";
import b14_img from "./Rai/1.jpg";
import s14_img from "./Rai/8.jpg";

import p15_img from "./rock salt front and back/1.jpg";
import b15_img from "./rock salt front and back/0.jpg";
import s15_img from "./rock salt front and back/0.jpg";

import p16_img from "./saunf/4.jpg";
import b16_img from "./saunf/3.jpg";
import s16_img from "./saunf/11.jpg";


let all_product = [
  {
    id: 1,
    name: "Ajwain",
    category: "Spices",
    image: p1_img,
    image1: b1_img,
    image2: s1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "All in One Masala",
    category: "Spice_Powders",
    image: p2_img,
    image1 : b2_img,
    image3 : s2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Amchur",
    category: "Spice_Powders",
    image: p3_img,
    image1: b3_img,
    image2: s3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Black Pepper",
    category: "Spices",
    image: p4_img,
    image1: b4_img,
    image2: s4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Black Salt",
    category: "Salt_Variant",
    image: p5_img,
    image1: b5_img,
    image2: s5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Dhaniya",
    category: "Spices",
    image: p6_img,
    image1: b6_img,
    image2: s6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Elaichi",
    category: "Spices",
    image: p7_img,
    image1: b7_img,
    image2: s7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Haldi",
    category: "Spices",
    image: p8_img,
    image1: b8_img,
    image2: s8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Jeera",
    category: "Spices",
    image: p9_img,
    image1: b9_img,
    image2: s9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Laung",
    category: "Spices",
    image: p10_img,
    image1: b10_img,
    image2: s10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Methi Dana",
    category: "Spices",
    image: p11_img,
    image1: b11_img,
    image2: s11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Mirchi",
    category: "Spices",
    image: p12_img,
    image1: b12_img,
    image2: s12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Pudina",
    category: "Spice_Powders",
    image: p13_img,
    image1: b13_img,
    image2: s13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Rai",
    category: "Spices",
    image: p14_img,
    image1: b14_img,
    image2: s14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Rock Salt",
    category: "Salt_Variant",
    image: p15_img,
    image1: b15_img,
    image2: s15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Saunf",
    category: "Spice_Powders",
    image: p16_img,
    image1: b16_img,
    image2: s16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  
];

export default all_product;
