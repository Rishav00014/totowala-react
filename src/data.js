//Home page imports
import customer1 from './img/customer-1.png';
import customer2 from './img/customer-2.png';
import serviceImg1 from './img/home-3.png';
import serviceImg2 from './img/home-4.png';

//Footer imports
import sIcon1 from './img/facebook.webp' 
import sIcon2 from './img/insta.webp'
import sIcon3 from './img/tweeter.webp'
import sIcon4 from './img/youtube.webp'
import sIcon5 from './img/linkdin.png'

//Ride page imports
import featureImg1 from './img/Safe_Icon.webp';
import featureImg2 from './img/Fast_Icon.webp';
import featureImg3 from './img/doortodoor-icon-2.webp';
import featureImg4 from './img/Economical_Icon.webp';
import featureImg5 from './img/EcoFriendly_Icon.webp';
import featureImg6 from './img/Cashless_Icon.webp';
import featureImg7 from './img/24-7-icon.webp';
import featureImg8 from './img/sos-icon.webp';
import featureImg9 from './img/top-rated-icon.webp';


//Delivery page imports
import dFeatureImg1 from './img/icon-7.webp';
import dFeatureImg2 from './img/icon-22.webp';
import dFeatureImg3 from './img/icon-20.webp';
import dFeatureImg4 from './img/icon-21.webp';
import dFeatureImg5 from './img/icon-10.webp';
import dFeatureImg6 from './img/icon-19.webp';
import dFeatureImg7 from './img/icon-9.webp';
import dFeatureImg8 from './img/icon-14.webp';
import dFeatureImg9 from './img/top-rated-icon.webp';

// import about page
import cardV from './img/vision.png'
import cardM from './img/mission.webp'


//contact page import 
import contect1 from './img/contect1.png'
import contect2 from './img/contect2.png'
import contect3 from './img/contect3.png'

import logo1 from './img/paper-plane-solid.svg';
import logo2 from './img/phone-solid.svg';
import logo3 from './img/telegram-brands.svg';


//Home Page Data
export const menuItem =  [
    {name :"Home" ,source : "/"},
    {name :"Ride" ,source : "ride"},
    {name :"Delivery" ,source : "delivery"},
    {name :"About" ,source : "about"},
    {name :"Blog" ,source : "blog"},
    {name :"Media Center" ,source : "media"},
    {name :"Contact Us" ,source : "contact"},
    {name :"How To Book" ,source : "book"}
];

export const homeData =
  {
    title : ["About ","Totowala"],
    essey : [
      "Totowala is a Jharkhand based E-Rickshaw mobility facility. We are on a mission to solve the first and last mile commute and logistics issue in a very affordable price.",
      " Our mission is also to increase the daily income of E-Rickshaw drivers and to create employment among unemployed person. Totowala was founded in 2021 by Danish Alam with his friends.",
      " Totowala has raised some funds from angel investors"
    ]
  }
export const sliderItem =[
    {
        id : 1,
        name : "-Binod Thakur",
        source : customer1,
        review :"Traveling will be fun with totowala inovative idea."
    },
    {
        id : 2,
        name : "-Joti Sarma",
        source : customer2,
        review : "I'm happy to see this type of problem solving approch. Well done Guys."
    }
];

export const serviceItem =[
    {
        id : 1,
        source : serviceImg1,
        title : "Ride"
    },
    {
        id : 2,
        source : serviceImg2,
        title : "Delivery"
    }
];
// footer social media
export const socialMedia =[
    {
        id : 1,
        source: sIcon1,
        link :"https://www.facebook.com/Totowalacom-102411649178695/"
    },
    {
        id : 2,
        source: sIcon2,
        link :"https://www.instagram.com/invites/contact/?i=12rmt1dgspnqv&utm_content=opyc90t"
    },
    {
        id : 3,
        source: sIcon3,
        link :"https://twitter.com/Totowala_Com?s=08"
    },
    {
        id : 4,
        source: sIcon4,
        link :"https://www.youtube.com/shorts/P1JZ9wYDZpM"
    },
    {
        id : 5,
        source: sIcon5,
        link :"https://www.linkedin.com/in/toto-wala-8983b3242"
    }
]

//Ride Page Data

export const featuresItem =[
    {
        id : 1 ,
        source : featureImg1,
        title : "Easy and Safe",
        details :"Verified drivers and SOS safety feature for all our riders booking E-rickshaws."
    },
    {
        id : 2 ,
        source : featureImg2,
        title : "Fast",
        details :"Dedicated vehicles to serve you with real-time tracking"
    },
    {
        id : 2 ,
        source : featureImg3,
        title : "Door to Door service",
        details :"Book Private rides for point to point commute."
    },
    
    {
        id : 4 ,
        source : featureImg4,
        title : "Economical",
        details :"Cheapest e-rickshaw rides guaranteed."
    },
    {
        id : 5 ,
        source : featureImg5,
        title : "Eco Friendly",
        details : "No pollution vehicles which leads to a greener environment."
    },
    {
        id : 6 ,
        source : featureImg6,
        title : "Cashless",
        details : "Pay from the multiple payment methods available."
    },
    {
        id : 7 ,
        source : featureImg7,
        title : "Dedicated Customer Support",
        details :"Reach out to us anytime. Good service our top priority."
    },
    {
        id : 8 ,
        source : featureImg8,
        title : "SOS",
        details :"Your safety our first priority. call emergency services when in need."
    },
    {
        id : 9 ,
        source : featureImg9,
        title : "Top Rated Drivers",
        details :"Ride with the verified and trained drivers to deliver only the best experience."
    }
];

// Delivery page data

export const dFeature =[
    {
        id :  1,
        source : dFeatureImg1,
        title : "Huge Supply Pool"
    },
    {
        id :  2,
        source : dFeatureImg2,
        title : "Flexible rate card"
    },
    {
        id :  3,
        source : dFeatureImg3,
        title : "Quick development & expansion"
    },
    {
        id :  4,
        source : dFeatureImg4,
        title : "Dedicated support"
    },
    {
        id :  5,
        source : dFeatureImg5,
        title : "Environment Friendly"
    },
    {
        id :  6,
        source : dFeatureImg6,
        title : "Technology First"
    },
    {
        id :  7,
        source : dFeatureImg7,
        title : "Cost Reduction"
    },
    {
        id :  8,
        source : dFeatureImg8,
        title : "Trained manpower"
    },
    {
        id :  9,
        source : dFeatureImg9,
        title : "Top Rated Drivers"
    }
];

// about page

export const aboutData =
  {
    title : ["About","Totowala"],
    essey : [
      "Totowala is a Jharkhand based E-Rickshaw mobility facility. We are on a mission to solve the first and last mile commute and logistics issue in a very affordable price.",
      " Our mission is also to increase the daily income of E-Rickshaw drivers and to create employment among unemployed person. Totowala was founded in 2021 by Danish Alam with his friends.",
      " Totowala has raised some funds from angel investors.We are working towards making the most suitable ,eco friendly , convenient and pocket friendly mobility option for the people of India. Totowala’s tech-based EV ecosystem is based around its E-rickshaw driver partners. Driver partners enrolled can full fill first and last-mile rides by providing shared and private rides . Driver partners can also opt to delivery orders for major B2B and B2C brands.",
      "Totowala will be soon available in different tier 2 cities of Jharkhand and plans to expand aggressively in whole country in coming time.",
      "So when you think about travelling , think Totowala."
    ]
  }

export const aboutCard =[
    {
        title : ["Our","Vision"],
        source : cardV,
        essey : [
            "Totowala vision is to build a mobility platform for a billion Indians which provides them an affordable, reliable, convenient and seamless experience. Our technology stack is enabling an EV ecosystem created around our Driver Partners by integrating vehicle/accessory sellers, charging/swapping providers and public transportation/demand hubs on one platform. "
        ]
    },
    {
        title : ["Our"," Mission"],
        source : cardM,
        essey : [
            "Totowala is working to transform the way India moves by building a tech based EV ecosystem to give commute and logistics issue in a very affordable price. "
        ]
    }
];

export const contactList =[
    {
        id:"contact1",
        source :contect1,
        logo : logo1,
        text : "Email Us",
        alt : "Contact us on email",
        link: "mailto:alamdanish82117@gmail.com"
    },
    {
        id:"contact2",
        source :contect2,
        logo : logo2,
        text : "Phone Number",
        alt : "Contact us on phone",
        link : "tel:8789114893"
    },
    {
        id:"contact3",
        source :contect3,
        text:"Telegram Number",
        logo : logo3,
        alt :"Contact us on telegram",
        link:"https://t.me/+918789114893"
    }
];