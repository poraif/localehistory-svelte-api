import bcrypt from "bcrypt";

const saltRounds = 10;

export const seedData = {
  // ----------------- User ----------------- //
  
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: bcrypt.hashSync("secret", saltRounds),
      admin: false
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: bcrypt.hashSync("secret", saltRounds),
      admin: false
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: bcrypt.hashSync("secret", saltRounds),
      admin: false
    },
    abe: {
      firstName: "Abe",
      lastName: "Simpson",
      email: "abe@simpson.com",
      password: bcrypt.hashSync("secret", saltRounds),
      admin: true
    },
  },



// ----------------- Street ----------------- //
  // streets: {
  //   _model: "Street",
  //   oconnell: {
  //     name: "O'Connell Street",
  //     userid: "->users.homer"
  //   },
  //   mall: {
  //     name: "The Mall",
  //     userid: "->users.marge"
  //   },
  //   kieran: {
  //     name: "St Kieran's Street",
  //     userid: "->users.bart"
  //   },
  // },

// ----------------- Placemark ----------------- //
  placemarks: {
    _model : "Placemark",
    tricolour: {
      title: "Flying of tricolour",
      description: "The first time the Irish flag was flown",
      year: 1848,
      lat: 52.6784,
      lng: -6.2926,
      category: "Event",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    kyteler: {
      title: "Kyteler's Inn",
      description: "Where Alice Kyteler was accused of witchcraft",
      year: 1324,
      lat: 52.6547,
      lng: -7.2523,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark1: {
      title: "Dublin Castle",
      description: "Historic castle in Dublin",
      year: 1661,
      lat: 53.344,
      lng: -6.267,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark2: {
      title: "Cork City Gaol",
      description: "Former prison turned museum",
      year: 1824,
      lat: 51.899,
      lng: -8.488,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark3: {
      title: "Galway Hooker Monument",
      description: "Monument celebrating traditional fishing boats",
      year: 1996,
      lat: 53.273,
      lng: -9.048,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark4: {
      title: "Belfast City Hall",
      description: "Civic building in Belfast",
      year: 1906,
      lat: 54.596,
      lng: -5.929,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark5: {
      title: "King John's Castle",
      description: "13th-century castle in Limerick",
      year: 1210,
      lat: 52.668,
      lng: -8.625,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark6: {
      title: "Derry Walls",
      description: "Historic walls surrounding Derry",
      year: 1619,
      lat: 54.995,
      lng: -7.321,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
    },
    placemark7: {
      title: "Reginald's Tower",
      description: "Medieval tower in Waterford",
      year: 1700,
      lat: 52.259,
      lng: -7.106,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark8: {
      title: "Millmount Fort",
      description: "Historic fort in Drogheda",
      year: 1808,
      lat: 53.716,
      lng: -6.348,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark9: {
      title: "Dundalk Gaol",
      description: "Historic prison in Dundalk",
      year: 1850,
      lat: 54.000,
      lng: -6.401,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark10: {
      title: "Sligo Abbey",
      description: "Medieval Dominican friary in Sligo",
      year: 1252,
      lat: 54.271,
      lng: -8.477,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark11: {
      title: "Ennis Friary",
      description: "Medieval Franciscan friary in Ennis",
      year: 1350,
      lat: 52.841,
      lng: -8.983,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark12: {
      title: "St. Patrick's Cathedral",
      description: "Historic cathedral in Armagh",
      year: 1840,
      lat: 54.35,
      lng: -6.65,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark13: {
      title: "GPO Dublin",
      description: "General Post Office, headquarters of the 1916 Rising",
      year: 1916,
      lat: 53.349,
      lng: -6.260,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark14: {
      title: "Cobh Cathedral",
      description: "St. Colman's Cathedral in Cobh",
      year: 1879,
      lat: 51.851,
      lng: -8.295,
      category: "Landmark",
      userid: "->users.homer"
    },
    placemark15: {
      title: "Spanish Arch",
      description: "Part of Galway's medieval city walls",
      year: 1584,
      lat: 53.269,
      lng: -9.053,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark16: {
      title: "Titanic Belfast",
      description: "Museum on the site of the ship's construction",
      year: 2012,
      lat: 54.608,
      lng: -5.910,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark17: {
      title: "Hunt Museum",
      description: "Museum housing a private collection in Limerick",
      year: 1978,
      lat: 52.665,
      lng: -8.624,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark18: {
      title: "St. Columb's Cathedral",
      description: "Historic cathedral in Derry",
      year: 1633,
      lat: 54.996,
      lng: -7.319,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark19: {
      title: "House of Waterford Crystal",
      description: "Visitor center and factory tour",
      year: 1783,
      lat: 52.258,
      lng: -7.122,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark20: {
      title: "Oldbridge House",
      description: "Battle of the Boyne Visitor Centre",
      year: 1690,
      lat: 53.707,
      lng: -6.398,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark21: {
      title: "Dundalk Courthouse",
      description: "Historic courthouse in Dundalk",
      year: 1813,
      lat: 54.005,
      lng: -6.406,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark22: {
      title: "Sligo County Museum",
      description: "Museum featuring local history exhibits",
      year: 1955,
      lat: 54.269,
      lng: -8.472,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark23: {
      title: "O'Connell Statue",
      description: "Statue of Daniel O'Connell in Dublin",
      year: 1882,
      lat: 53.349,
      lng: -6.259,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark24: {
      title: "University College Cork",
      description: "Historic university campus",
      year: 1845,
      lat: 51.893,
      lng: -8.492,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark25: {
      title: "Galway Cathedral",
      description: "20th-century cathedral in Galway",
      year: 1965,
      lat: 53.276,
      lng: -9.057,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark26: {
      title: "Ulster Museum",
      description: "Museum in Belfast's Botanic Gardens",
      year: 1929,
      lat: 54.581,
      lng: -5.934,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark27: {
      title: "Limerick City Gallery",
      description: "Art gallery in Limerick",
      year: 1948,
      lat: 52.663,
      lng: -8.623,
      category: "Other",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark28: {
      title: "Grianan of Aileach",
      description: "Ancient stone fort in Donegal",
      year: 1700,
      lat: 55.015,
      lng: -7.454,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark29: {
      title: "Viking Triangle",
      description: "Historic area in Waterford",
      year: 2010,
      lat: 52.258,
      lng: -7.106,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    placemark30: {
      title: "St. Peter's Church",
      description: "Historic church in Drogheda",
      year: 1793,
      lat: 53.717,
      lng: -6.354,
      category: "Landmark",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    event1: {
      title: "Easter Rising",
      description: "The Easter Rising took place, marking a pivotal moment in Irish history.",
      year: 1916,
      lat: 53.347,
      lng: -6.259,
      category: "Event",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    event2: {
      title: "Battle of Clontarf",
      description: "The historic battle where Brian Boru defeated the Vikings.",
      year: 1014,
      lat: 53.361,
      lng: -6.207,
      category: "Event",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    event3: {
      title: "Cork Butter Market Opening",
      description: "The opening of the Cork Butter Market, significant for trade.",
      year: 1770,
      lat: 51.896,
      lng: -8.476,
      category: "Event",
      userid: "->users.homer",
      // img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    event4: {
      title: "Galway Races",
      description: "Annual horse racing event attracting large crowds.",
      year: 1869,
      lat: 53.286,
      lng: -9.060,
      category: "Event",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    event5: {
      title: "Derry Halloween Festival",
      description: "One of Europe's largest Halloween festivals held annually.",
      year: 1986,
      lat: 54.994,
      lng: -7.320,
      category: "Event",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    residence1: {
      title: "Leinster House",
      description: "Official residence of the Oireachtas (Irish Parliament).",
      year: 1745,
      lat: 53.339,
      lng: -6.252,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    residence2: {
      title: "Aras an Uachtarain",
      description: "Official residence of the President of Ireland.",
      year: 1751,
      lat: 53.359,
      lng: -6.326,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    residence3: {
      title: "Bantry House",
      description: "Historic house overlooking Bantry Bay.",
      year: 1700,
      lat: 51.683,
      lng: -9.451,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    residence4: {
      title: "Kylemore Abbey",
      description: "A Benedictine monastery founded in 1920, originally a castle built in the 19th century.",
      year: 1868,
      lat: 53.561,
      lng: -9.887,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    },
    residence5: {
      title: "Glenveagh Castle",
      description: "A 19th-century castellated mansion in County Donegal.",
      year: 1870,
      lat: 55.034,
      lng: -7.991,
      category: "Residence",
      userid: "->users.homer",
      img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"

    }
  }
}

      // img: "https://res.cloudinary.com/dn7kkzdb6/image/upload/v1710151723/rwfpc4cxujghkbph2qlm.png"
