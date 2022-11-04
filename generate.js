// const dataModel = {
// //   Country: [
// //     {
// //       Index: 0,
// //       primary_fuel: "Hydro",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 1,
// //       primary_fuel: "Solar",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 2,
// //       primary_fuel: "Gas",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 3,
// //       primary_fuel: "Oil",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 4,
// //       primary_fuel: "Wind",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 5,
// //       primary_fuel: "Nuclear",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 6,
// //       primary_fuel: "Coal",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 7,
// //       primary_fuel: "Waste",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 8,
// //       primary_fuel: "Biomass",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 9,
// //       primary_fuel: "Wave and Tidal",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 10,
// //       primary_fuel: "Petcoke",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 11,
// //       primary_fuel: "Geothermal",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 12,
// //       primary_fuel: "Storage",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 13,
// //       primary_fuel: "Cogeneration",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //     {
// //       Index: 14,
// //       primary_fuel: "Other",
// //       2013: 0,
// //       2014: 0,
// //       2015: 0,
// //       2016: 0,
// //       2017: 0,
// //     },
// //   ],
// // };

// const countries = [
//   "Azerbaijan",
//   "Bangladesh",
//   "Bhutan",
//   "China",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Lebanon",
//   "Liberia",
//   "Libya",
//   "Malaysia",
//   "Mongolia",
//   "Myanmar",
//   "Nepal",
//   "NorthKorea",
//   "Pakistan",
//   "Palestine",
//   "Philippines",
//   "Qatar",
//   "Singapore",
//   "SouthKorea",
//   "SriLanka",
//   "SyrianArabRepublic",
//   "Taiwan",
//   "Tajikistan",
//   "Thailand",
//   "Turkmenistan",
//   "UnitedArabEmirates",
//   "Uzbekistan",
//   "VietNam",
//   "Yemen",
// ];
// const angleList = [
//   0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336,
// ];

// let asiaData = {
//   Azerbaijan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Bangladesh: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Bhutan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   China: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   India: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Indonesia: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Iran: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Iraq: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Japan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Jordan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Kazakhstan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Kuwait: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Kyrgyzstan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Laos: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Lebanon: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Liberia: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Libya: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Malaysia: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Mongolia: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Myanmar: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Nepal: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   NorthKorea: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Pakistan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Palestine: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Philippines: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Qatar: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Singapore: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   SouthKorea: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   SriLanka: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   SyrianArabRepublic: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Taiwan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Tajikistan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Thailand: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Turkmenistan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   UnitedArabEmirates: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Uzbekistan: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   VietNam: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
//   Yemen: [
//     {
//       primary_fuel: "Hydro",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Solar",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Gas",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Oil",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wind",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Nuclear",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Coal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Waste",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Biomass",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Wave and Tidal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Petcoke",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Geothermal",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Storage",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Cogeneration",
//       angle: 0,
//       scale: 0,
//     },
//     {
//       primary_fuel: "Other",
//       angle: 0,
//       scale: 0,
//     },
//   ],
// };
// let keys = Object.keys(asiaData);
// let scale = [];
// let asiaDataByCountry = [];

// console.log(keys.length);
// console.log(countries[27]);

// function scaleFilter(data) {
//   data.forEach((d) => {
//     if (d["2017"] / 1000 < 1 && d["2017"] / 1000 != 0) {
//       d["2017"] = d["2017"] / 1000 + 1;
//     }
//     if (d["2017"] / 1000 > 1 && d["2017"] / 1000 < 2) {
//       d["2017"] = d["2017"] / 1000;
//     }
//     if (d["2017"] / 1000 > 2) {
//       d["2017"] = 2;
//     }
//     if (d["2017"] == 0) {
//       d["2017"] = 0;
//     }
//   });
// }

// d3.csv("./data/df_asia.csv").then((data) => {
//   console.log(data);
//   scaleFilter(data);
//   console.log(data);

//   for (let i = 0; i < countries.length; i++) {
//     asiaDataByCountry[i] = [];
//     for (let j = 0; j < data.length; j++) {
//       if (data[j]["country"] === countries[i]) {
//         asiaDataByCountry[i].push(data[j]);
//       }
//     }
//   }
//   console.log(asiaDataByCountry);

//   for (let i = 0; i < 22; i++) {
//     for (let j = 0; j < 15; j++) {
//       asiaData[countries[i]][j]["angle"] = angleList[j];
//     }
//   }

//   for (let i = 0; i < countries.length; i++) {
//     for (let j = 0; j < asiaDataByCountry[i].length; j++) {
//       for (let k = 0; k < 15; k++) {
//         if (
//           asiaData[countries[i]][k]["primary_fuel"] ===
//           asiaDataByCountry[i][j]["primary_fuel"]
//         ) {
//           asiaData[countries[i]][k]["scale"] = +asiaDataByCountry[i][j]['2017']
//         }
//       }
//     }
//   }

//   asiaJSON = JSON.stringify(asiaData);
//   // console.log(asiaJSON)
// });

const types = [
  "Hydro",
  "Solar",
  "Gas",
  "Oil",
  "Wind",
  "Nuclear",
  "Coal",
  "Waste",
  "Biomass",
  "Wave and Tidal",
  "Petcoke",
  "Geothermal",
  "Storage",
  "Cogeneration",
  "Other",
];
let countries = [];
let countriesLat = [];

d3.json("./data/birth.geojson").then((data) => {
  console.log(data);

  for (let i = 0; i < 249; i++) {
    countriesLat[i] = [];
    countriesLat[i][0] = data.features[i]["properties"]["COUNTRY"];
    countriesLat[i][1] = data.features[i]["geometry"]["coordinates"][0];
  }
  console.log(countriesLat);
});

d3.csv("./data/df_world.csv").then((data) => {

  console.log(data)
  data.forEach((d) => {
    for (let i = 0; i < 15; i++) {
      d[types[i]] = +d[types[i]];
    }
  });

  for (let i = 0; i < data.length; i++) {
    countries.push(data[i]["Country"]);
    for(let j = 0; j < countriesLat.length; j++) {
      if(countriesLat[j][0] === data[i]["Country"])
      data[i]['Lat'] = countriesLat[j][1] 
    }
  }

    worldJSON = JSON.stringify(data);
  console.log(worldJSON.length)

});
