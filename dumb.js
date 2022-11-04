let asiaData = [];
let asiaDataByCountry = [];

for (let i = 0; i < countries.length; i++) {
  asiaDataByCountry[i] = [];
  for (let j = 0; j < data.length; j++) {
    if (data[j]["country"] === countries[i]) {
      asiaDataByCountry[i].push(data[j]);
    }
  }
}

for (let i = 0; i < countries.length; i++) {
  asiaData.push({
    country: [
      {
        Index: 0,
        angle: 0,
        primary_fuel: "Hydro",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 1,
        angle: 24,
        primary_fuel: "Solar",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 2,
        angle: 48,
        primary_fuel: "Gas",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 3,
        angle: 72,
        primary_fuel: "Oil",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 4,
        angle: 96,
        primary_fuel: "Wind",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 5,
        angle: 120,
        primary_fuel: "Nuclear",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 6,
        angle: 144,
        primary_fuel: "Coal",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 7,
        angle: 168,
        primary_fuel: "Waste",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 8,
        angle: 192,
        primary_fuel: "Biomass",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 9,
        angle: 216,
        primary_fuel: "Wave and Tidal",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 10,
        angle: 240,
        primary_fuel: "Petcoke",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 11,
        angle: 264,
        primary_fuel: "Geothermal",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 12,
        angle: 288,
        primary_fuel: "Storage",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 13,
        angle: 312,
        primary_fuel: "Cogeneration",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
      {
        Index: 14,
        angle: 336,
        primary_fuel: "Other",
        2013: 0,
        2014: 0,
        2015: 0,
        2016: 0,
        2017: 0,
      },
    ],
  });
}

for (let i = 0; i < countries.length; i++) {
  for (let j = 0; j < asiaDataByCountry[i].length; j++) {
    for (let k = 0; k < 15; k++) {
      if (
        asiaData[i]["country"][k]["primary_fuel"] ===
        asiaDataByCountry[i][j]["primary_fuel"]
      ) {
        for (let l = 2013; l < 2018; l++) {
          asiaData[i]["country"][k][`${l}`] = +asiaDataByCountry[i][j][`${l}`];
        }
      }
    }
  }
}
