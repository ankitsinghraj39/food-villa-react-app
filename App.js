import React from "react";
import ReactDOM from "react-dom/client";

import logo from './logo.png';
import burger from './burger.jpg';
const rootElement = document.getElementById('root');


//LOGO 
const Title=()=>{

  return(<a href="/"><img src={logo} alt="logo" className="logo"></img></a>);

}


//HEADER Component
const Header_component = () => {
  return(
    <div className="header">
      <Title/>
      {/* navbar */}
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}


// RESTRAUNT LIST (from swigy)
const restrauntList = [
  {
    type: "restaurant",
      data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "dominos-pizza-majura-nondh-test_surat",
          city: "surat",
        },
        cityState: "21",
        address:
          "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        parentId: 2456,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "74453",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          lastMileTravel: 0,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "410476",
        name: "The Brooklyn Creamery - Healthy Ice Cream",
        uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
        city: "21",
        area: "althan bhatar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "ldtibwymvzehvmdwl8la",
        cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
          city: "surat",
        },
        cityState: "21",
        address:
          "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
        locality: "Adajan FC",
        parentId: 236673,
        unserviceable: true,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "410476",
          deliveryTime: 31,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "81094",
        name: "Richie Rich Juices & Shakes",
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
        city: "21",
        area: "Athwa",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
        cuisines: ["Ice Cream"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 5.599999904632568,
        slugs: {
          restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
        locality: "Parle Point",
        parentId: 771,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "81094",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 5.599999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311443",
        name: "Siddhi Icecream & Thick Shake",
        uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
        city: "21",
        area: "Nanpura",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "spd3y5gok3vvwqulgmda",
        cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "siddhi-icecream-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
        locality: "Athwa",
        parentId: 387846,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311443",
          deliveryTime: 30,
          minDeliveryTime: 25,
          maxDeliveryTime: 35,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.5",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "307070",
        name: "Pizza Pie",
        uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
        city: "21",
        area: "Nanpura",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "bvr70adr30ejyr5ua79k",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        slaString: "35-45 MINS",
        lastMileTravel: 4,
        slugs: {
          restaurant: "pizza-pie-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
        locality: "Nanpura",
        parentId: 158854,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "307070",
          deliveryTime: 37,
          minDeliveryTime: 35,
          maxDeliveryTime: 45,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "76858",
        name: "Feeling Hungry",
        uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
        cuisines: ["Chinese", "North Indian", "Biryani"],
        tags: [],
        costForTwo: 2000,
        costForTwoString: "₹20 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 3.700000047683716,
        slugs: {
          restaurant: "feeling-hungry-adajan-gam-adajan",
          city: "surat",
        },
        cityState: "21",
        address:
          "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
        locality: "Royal Residency, Adajan Gam",
        parentId: 79237,
        unserviceable: true,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "76858",
          deliveryTime: 35,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 3.700000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.2",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
  }
];


// RESTRAUNT LIST (creating using simple object)
const burgerKing={
  Name:"Burger King",
  Image:{burger},
  Cuisines:["Burger","American"],
  Rating:"4.2"
}


//RESTRAUNT CARD inside Body
const Restraunt_card=({restraunt})=>{
  // console.log("restraunt is", restraunt);
  const {name, cuisines, lastMileTravelString, cloudinaryImageId}=restraunt;

  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
}


// BODY PART
const Body=()=>{
  return(
    <div className="body">

    { restrauntList.map((res)=>{
      {/* console.log("res is", res); */}
        return <Restraunt_card restraunt={res.data} key={res.data.id}></Restraunt_card>
    })}

    </div>
  );
}


// FOOTER
const Footer=()=>{
  return(
    <h1 className="footer">Footer</h1>
  );
}


//LAYOUT
const App_layout=()=>{
  return(
    // <React.Fragment></React.Fragment>
    <>
      <Header_component/>
      <Body></Body>
      <Footer/>
    </>
  );
}


const root = ReactDOM.createRoot(rootElement);

root.render(<App_layout/>)
