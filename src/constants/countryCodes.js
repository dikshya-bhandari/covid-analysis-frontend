const countryCodes = [
  {
    iso: "CHN",
    name: "China",
  },
  {
    iso: "TWN",
    name: "Taipei and environs",
  },
  {
    iso: "USA",
    name: "US",
  },
  {
    iso: "JPN",
    name: "Japan",
  },
  {
    iso: "THA",
    name: "Thailand",
  },
  {
    iso: "KOR",
    name: "Korea, South",
  },
  {
    iso: "SGP",
    name: "Singapore",
  },
  {
    iso: "PHL",
    name: "Philippines",
  },
  {
    iso: "MYS",
    name: "Malaysia",
  },
  {
    iso: "VNM",
    name: "Vietnam",
  },
  {
    iso: "AUS",
    name: "Australia",
  },
  {
    iso: "MEX",
    name: "Mexico",
  },
  {
    iso: "BRA",
    name: "Brazil",
  },
  {
    iso: "COL",
    name: "Colombia",
  },
  {
    iso: "FRA",
    name: "France",
  },
  {
    iso: "NPL",
    name: "Nepal",
  },
  {
    iso: "CAN",
    name: "Canada",
  },
  {
    iso: "KHM",
    name: "Cambodia",
  },
  {
    iso: "LKA",
    name: "Sri Lanka",
  },
  {
    iso: "CIV",
    name: "Cote d'Ivoire",
  },
  {
    iso: "DEU",
    name: "Germany",
  },
  {
    iso: "FIN",
    name: "Finland",
  },
  {
    iso: "ARE",
    name: "United Arab Emirates",
  },
  {
    iso: "IND",
    name: "India",
  },
  {
    iso: "ITA",
    name: "Italy",
  },
  {
    iso: "GBR",
    name: "United Kingdom",
  },
  {
    iso: "RUS",
    name: "Russia",
  },
  {
    iso: "SWE",
    name: "Sweden",
  },
  {
    iso: "ESP",
    name: "Spain",
  },
  {
    iso: "BEL",
    name: "Belgium",
  },
  {
    iso: "Others",
    name: "Others",
  },
  {
    iso: "EGY",
    name: "Egypt",
  },
  {
    iso: "IRN",
    name: "Iran",
  },
  {
    iso: "ISR",
    name: "Israel",
  },
  {
    iso: "LBN",
    name: "Lebanon",
  },
  {
    iso: "IRQ",
    name: "Iraq",
  },
  {
    iso: "OMN",
    name: "Oman",
  },
  {
    iso: "AFG",
    name: "Afghanistan",
  },
  {
    iso: "BHR",
    name: "Bahrain",
  },
  {
    iso: "KWT",
    name: "Kuwait",
  },
  {
    iso: "AUT",
    name: "Austria",
  },
  {
    iso: "DZA",
    name: "Algeria",
  },
  {
    iso: "HRV",
    name: "Croatia",
  },
  {
    iso: "CHE",
    name: "Switzerland",
  },
  {
    iso: "PAK",
    name: "Pakistan",
  },
  {
    iso: "GEO",
    name: "Georgia",
  },
  {
    iso: "GRC",
    name: "Greece",
  },
  {
    iso: "MKD",
    name: "North Macedonia",
  },
  {
    iso: "NOR",
    name: "Norway",
  },
  {
    iso: "ROU",
    name: "Romania",
  },
  {
    iso: "DNK",
    name: "Denmark",
  },
  {
    iso: "EST",
    name: "Estonia",
  },
  {
    iso: "NLD",
    name: "Netherlands",
  },
  {
    iso: "SMR",
    name: "San Marino",
  },
  {
    iso: "AZE",
    name: "Azerbaijan",
  },
  {
    iso: "BLR",
    name: "Belarus",
  },
  {
    iso: "ISL",
    name: "Iceland",
  },
  {
    iso: "LTU",
    name: "Lithuania",
  },
  {
    iso: "NZL",
    name: "New Zealand",
  },
  {
    iso: "NGA",
    name: "Nigeria",
  },
  {
    iso: "IRL",
    name: "Ireland",
  },
  {
    iso: "LUX",
    name: "Luxembourg",
  },
  {
    iso: "MCO",
    name: "Monaco",
  },
  {
    iso: "QAT",
    name: "Qatar",
  },
  {
    iso: "ECU",
    name: "Ecuador",
  },
  {
    iso: "CZE",
    name: "Czechia",
  },
  {
    iso: "ARM",
    name: "Armenia",
  },
  {
    iso: "DOM",
    name: "Dominican Republic",
  },
  {
    iso: "IDN",
    name: "Indonesia",
  },
  {
    iso: "PRT",
    name: "Portugal",
  },
  {
    iso: "AND",
    name: "Andorra",
  },
  {
    iso: "LVA",
    name: "Latvia",
  },
  {
    iso: "MAR",
    name: "Morocco",
  },
  {
    iso: "SAU",
    name: "Saudi Arabia",
  },
  {
    iso: "SEN",
    name: "Senegal",
  },
  {
    iso: "ARG",
    name: "Argentina",
  },
  {
    iso: "CHL",
    name: "Chile",
  },
  {
    iso: "JOR",
    name: "Jordan",
  },
  {
    iso: "UKR",
    name: "Ukraine",
  },
  {
    iso: "BLM",
    name: "Saint Barthelemy",
  },
  {
    iso: "HUN",
    name: "Hungary",
  },
  {
    iso: "FRO",
    name: "Faroe Islands",
  },
  {
    iso: "GIB",
    name: "Gibraltar",
  },
  {
    iso: "LIE",
    name: "Liechtenstein",
  },
  {
    iso: "POL",
    name: "Poland",
  },
  {
    iso: "TUN",
    name: "Tunisia",
  },
  {
    iso: "PSE",
    name: "West Bank and Gaza",
  },
  {
    iso: "BIH",
    name: "Bosnia and Herzegovina",
  },
  {
    iso: "SVN",
    name: "Slovenia",
  },
  {
    iso: "ZAF",
    name: "South Africa",
  },
  {
    iso: "BTN",
    name: "Bhutan",
  },
  {
    iso: "CMR",
    name: "Cameroon",
  },
  {
    iso: "CRI",
    name: "Costa Rica",
  },
  {
    iso: "PER",
    name: "Peru",
  },
  {
    iso: "SRB",
    name: "Serbia",
  },
  {
    iso: "SVK",
    name: "Slovakia",
  },
  {
    iso: "TGO",
    name: "Togo",
  },
  {
    iso: "VAT",
    name: "Holy See",
  },
  {
    iso: "GUF",
    name: "French Guiana",
  },
  {
    iso: "MLT",
    name: "Malta",
  },
  {
    iso: "MTQ",
    name: "Martinique",
  },
  {
    iso: "BGR",
    name: "Bulgaria",
  },
  {
    iso: "MDV",
    name: "Maldives",
  },
  {
    iso: "BGD",
    name: "Bangladesh",
  },
  {
    iso: "MDA",
    name: "Moldova",
  },
  {
    iso: "PRY",
    name: "Paraguay",
  },
  {
    iso: "ALB",
    name: "Albania",
  },
  {
    iso: "CYP",
    name: "Cyprus",
  },
  {
    iso: "BRN",
    name: "Brunei",
  },
  {
    iso: "MAC",
    name: "Macao SAR",
  },
  {
    iso: "MAF",
    name: "Saint Martin",
  },
  {
    iso: "BFA",
    name: "Burkina Faso",
  },
  {
    iso: "GGY-JEY",
    name: "Channel Islands",
  },
  {
    iso: "MNG",
    name: "Mongolia",
  },
  {
    iso: "PAN",
    name: "Panama",
  },
  {
    iso: "cruise",
    name: "Cruise Ship",
  },
  {
    iso: "TWN",
    name: "Taiwan*",
  },
  {
    iso: "BOL",
    name: "Bolivia",
  },
  {
    iso: "HND",
    name: "Honduras",
  },
  {
    iso: "COD",
    name: "Congo (Kinshasa)",
  },
  {
    iso: "JAM",
    name: "Jamaica",
  },
  {
    iso: "REU",
    name: "Reunion",
  },
  {
    iso: "TUR",
    name: "Turkey",
  },
  {
    iso: "CUB",
    name: "Cuba",
  },
  {
    iso: "GUY",
    name: "Guyana",
  },
  {
    iso: "KAZ",
    name: "Kazakhstan",
  },
  {
    iso: "CYM",
    name: "Cayman Islands",
  },
  {
    iso: "GLP",
    name: "Guadeloupe",
  },
  {
    iso: "ETH",
    name: "Ethiopia",
  },
  {
    iso: "SDN",
    name: "Sudan",
  },
  {
    iso: "GIN",
    name: "Guinea",
  },
  {
    iso: "ATG",
    name: "Antigua and Barbuda",
  },
  {
    iso: "ABW",
    name: "Aruba",
  },
  {
    iso: "KEN",
    name: "Kenya",
  },
  {
    iso: "URY",
    name: "Uruguay",
  },
  {
    iso: "GHA",
    name: "Ghana",
  },
  {
    iso: "JEY",
    name: "Jersey",
  },
  {
    iso: "NAM",
    name: "Namibia",
  },
  {
    iso: "SYC",
    name: "Seychelles",
  },
  {
    iso: "TTO",
    name: "Trinidad and Tobago",
  },
  {
    iso: "VEN",
    name: "Venezuela",
  },
  {
    iso: "CUW",
    name: "Curacao",
  },
  {
    iso: "SWZ",
    name: "Eswatini",
  },
  {
    iso: "GAB",
    name: "Gabon",
  },
  {
    iso: "GTM",
    name: "Guatemala",
  },
  {
    iso: "GGY",
    name: "Guernsey",
  },
  {
    iso: "MRT",
    name: "Mauritania",
  },
  {
    iso: "RWA",
    name: "Rwanda",
  },
  {
    iso: "LCA",
    name: "Saint Lucia",
  },
  {
    iso: "VCT",
    name: "Saint Vincent and the Grenadines",
  },
  {
    iso: "SUR",
    name: "Suriname",
  },
  {
    iso: "RKS",
    name: "Kosovo",
  },
  {
    iso: "CAF",
    name: "Central African Republic",
  },
  {
    iso: "COG",
    name: "Congo (Brazzaville)",
  },
  {
    iso: "GNQ",
    name: "Equatorial Guinea",
  },
  {
    iso: "UZB",
    name: "Uzbekistan",
  },
  {
    iso: "GUM",
    name: "Guam",
  },
  {
    iso: "PRI",
    name: "Puerto Rico",
  },
  {
    iso: "BEN",
    name: "Benin",
  },
  {
    iso: "GRL",
    name: "Greenland",
  },
  {
    iso: "LBR",
    name: "Liberia",
  },
  {
    iso: "MYT",
    name: "Mayotte",
  },
  {
    iso: "SOM",
    name: "Somalia",
  },
  {
    iso: "TZA",
    name: "Tanzania",
  },
  {
    iso: "BHS",
    name: "Bahamas",
  },
  {
    iso: "BRB",
    name: "Barbados",
  },
  {
    iso: "MNE",
    name: "Montenegro",
  },
  {
    iso: "GMB",
    name: "Gambia",
  },
  {
    iso: "KGZ",
    name: "Kyrgyzstan",
  },
  {
    iso: "MUS",
    name: "Mauritius",
  },
  {
    iso: "ZMB",
    name: "Zambia",
  },
  {
    iso: "DJI",
    name: "Djibouti",
  },
  {
    iso: "TCD",
    name: "Chad",
  },
  {
    iso: "SLV",
    name: "El Salvador",
  },
  {
    iso: "FJI",
    name: "Fiji",
  },
  {
    iso: "NIC",
    name: "Nicaragua",
  },
  {
    iso: "MDG",
    name: "Madagascar",
  },
  {
    iso: "HTI",
    name: "Haiti",
  },
  {
    iso: "AGO",
    name: "Angola",
  },
  {
    iso: "CPV",
    name: "Cabo Verde",
  },
  {
    iso: "NER",
    name: "Niger",
  },
  {
    iso: "PNG",
    name: "Papua New Guinea",
  },
  {
    iso: "ZWE",
    name: "Zimbabwe",
  },
  {
    iso: "TLS",
    name: "Timor-Leste",
  },
  {
    iso: "ERI",
    name: "Eritrea",
  },
  {
    iso: "UGA",
    name: "Uganda",
  },
  {
    iso: "DMA",
    name: "Dominica",
  },
  {
    iso: "GRD",
    name: "Grenada",
  },
  {
    iso: "MOZ",
    name: "Mozambique",
  },
  {
    iso: "SYR",
    name: "Syria",
  },
  {
    iso: "BLZ",
    name: "Belize",
  },
  {
    iso: "LAO",
    name: "Laos",
  },
  {
    iso: "LBY",
    name: "Libya",
  },
  {
    iso: "NA-SHIP-DP",
    name: "Diamond Princess",
  },
  {
    iso: "GNB",
    name: "Guinea-Bissau",
  },
  {
    iso: "MLI",
    name: "Mali",
  },
  {
    iso: "KNA",
    name: "Saint Kitts and Nevis",
  },
  {
    iso: "BWA",
    name: "Botswana",
  },
  {
    iso: "BDI",
    name: "Burundi",
  },
  {
    iso: "SLE",
    name: "Sierra Leone",
  },
  {
    iso: "MMR",
    name: "Burma",
  },
  {
    iso: "MWI",
    name: "Malawi",
  },
  {
    iso: "SSD",
    name: "South Sudan",
  },
  {
    iso: "ESH",
    name: "Western Sahara",
  },
  {
    iso: "STP",
    name: "Sao Tome and Principe",
  },
  {
    iso: "NA-SHIP-MSZ",
    name: "MS Zaandam",
  },
  {
    iso: "YEM",
    name: "Yemen",
  },
  {
    iso: "COM",
    name: "Comoros",
  },
  {
    iso: "TJK",
    name: "Tajikistan",
  },
  {
    iso: "LSO",
    name: "Lesotho",
  },
  {
    iso: "SLB",
    name: "Solomon Islands",
  },
  {
    iso: "MHL",
    name: "Marshall Islands",
  },
  {
    iso: "VUT",
    name: "Vanuatu",
  },
  {
    iso: "WSM",
    name: "Samoa",
  },
  {
    iso: "KIR",
    name: "Kiribati",
  },
  {
    iso: "PLW",
    name: "Palau",
  },
  {
    iso: "TON",
    name: "Tonga",
  },
  {
    iso: "NRU",
    name: "Nauru",
  },
  {
    iso: "TUV",
    name: "Tuvalu",
  },
];

export default countryCodes;
