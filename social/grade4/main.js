const list = [
  {
    label: "States in South India",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/southIndiaStates.png",
      width: 342,
      height: 368,
      wordWidth: 100,
      isPractice: false,
      words: [
        { word: "Karnataka", x: 50, y: 180 },
        { word: "Andhra Pradesh", x: 115, y: 130 },
        { word: "Telangana", x: 140, y: 60 },
        { word: "Tamil Nadu", x: 110, y: 240 },
        { word: "Kerala", x: 40, y: 280 },
        { word: "Goa", x: 6, y: 120 },
        { word: "Maharashtra", x: 30, y: 10 },
      ],
    },
  },
  {
    label: "States and Capitals",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to match states and capitals.",
      styles: {
        fontSize: "1rem",
        dashWidth: 70,
      },
      text: `Andhra Pradhesh → ~Hyderabad~
      Karnataka → ~Bengaluru~
      Kerala → ~Thiruvananthapuram~
      Tamil Nadu 

      Goa → ~Panaji~
      Maharashtra → ~Mumbai~`,
    },
  },
  {
    label: "Rivers",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/southIndianRivers.png",
      width: 253,
      height: 286,
      wordWidth: 85,
      isPractice: false,
      words: [
        { word: "Cauvery", x: 70, y: 180 },
        { word: "Krishna", x: 125, y: 76 },
        { word: "Godavari", x: 60, y: 10 },
        { word: "Vaigai", x: 110, y: 240 },
        { word: "Tungabhadra", x: 40, y: 140 },
        { word: "Periyar", x: 26, y: 220 },
        { word: "Penner", x: 130, y: 126 },
      ],
    },
  },
  {
    label: "Languages",
    type: "matchByDragDrop",
    data: {
      isPractice: false,
      title: "Drag and drop to match states and language spoken.",
      styles: {
        fontSize: "1rem",
        dashWidth: 80,
      },
      text: `Andhra Pradhesh → ~Telugu~
        Karnataka → ~Kannada~
        Kerala → ~Malayalam~
        Tamil Nadu → ~Tamil~
        Goa → ~Konkani~
        Maharashtra → ~Marathi~`,
    },
  },
  {
    label: "Quiz",
    type: "mcq",
    data: {
      title: "Multiple Choice Question",
      questions: [
        {
          qText: `Which is the recently formed state?`,
          options: `Telangana, Goa, Andhra Pradesh, Kerala`,
        },
        {
          qText: `Which place is famous for Dasara?`,
          options: `Mysore, Bengaluru, Madurai, Kochi`,
        },
        {
          qText: `Which city is the capital of more than one state?`,
          options: `Hyderabad, Bengaluru, Chennai, Thiruvananthapuram`,
        },
        {
          qText: `Which state is called "God's own country"?`,
          options: `Kerala, Telangana, Goa, Andhra Pradesh`,
        },
        {
          qText: `Which town is present at the meeting point of Arabian Sea, Bay of Bengal and Indian Ocean?`,
          options: `Kanyakumari, Madurai, Trichy, Kochi`,
        },
        {
          qText: `Which town is an Island?`,
          options: `Rameswaram, Kanyakumari, Madurai, Kochi`,
        },
        {
          qText: `Which place is not a hill station?`,
          options: `Cochin, Ooty, Kodaikanal, Coorg`,
        },
        {
          qText: `Which city has cool climate?`,
          options: `Bangalore, Chennai, Hyderabad, Vishakapatnam`,
        },
      ],
    },
  },
  {
    label: "Map - Cities ",
    type: "dragAndDrop",
    data: {
      img:
        "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/indiaOutline.jpg",
      title: `Drag and drop the cities at appropriate places.`,
      width: 333,
      height: 433,
      wordWidth: 70,
      words: [
        { word: "Mumbai", x: 40, y: 240 },
        { word: "Kolkata", x: 215, y: 210 },
        { word: "Hyderabad", x: 110, y: 280 },
        { word: "New Delhi", x: 100, y: 110 },
        { word: "Bhopal", x: 100, y: 210 },
        { word: "Srinagar", x: 76, y: 35 },
        { word: "Itanagar", x: 260, y: 136 },
        { word: "Chennai", x: 130, y: 340 },
      ],
    },
  },
  {
    label: "Goods and Services - Passage",
    type: "passage",
    data: {
      title: "Goods and Services",
      text: `We, human beings cannot live alone, on our own. We interact with many people and do transations and get our requirements done. For examples, we cannot produce the food we eat on our own. We go to a store and buy different items, and come home and cook. Here the items what we bought from the store are known as 'goods'.
If we don't have time to cook on our own, then we go to a restaurant, where our ordered food will be delivered by a waiter. Here, what the restaurant provides is 'service'.
Why the food is not usually considered as 'goods' and rather considered as 'service'? Because, apart from the food, they also provide good atmosphere, tables and chairs for us to sit, waiter to take orders, and a chef to cook. If we buy service, we usually don't have to worry about internal workings and the service provider will take care of it.
Doctor, police, lawyer, Carpenter provides service to us. They don't sell anything to us. But their service is very important when we are in need. All kinds of stores, say super market, provional stores, medicals, stationery stores etc sells 'goods' to us.
With little bit of thinking, we can figure out whether something is 'goods' or 'service'.`,
    },
  },
  {
    label: "Profession - MCQ",
    type: "mcq",
    data: {
      title: "Multiple Choice Questions",
      questions: [
        {
          qText: `Where can we buy a bouquet ?`,
          options: `florists, toy shop, bakery`,
        },
        {
          qText: `Where can we buy a book ?`,
          options: `book stall, chemist, green grocers`,
        },
        {
          qText: `Where can we buy a plane ticket ?`,
          options: `travel agency, book stall, dairy`,
        },
        {
          qText: `Whom would your father approach when he has to get his car repaired?`,
          options: `mechanic, cobbler, plumber`,
        },
        {
          qText: `Whom would your father approach if there is a leaking pipe?`,
          options: `plumber, mechanic, cobbler, carpenter`,
        },
      ],
    },
  },
  {
    label: "Identify Goods and Services",
    type: "group",
    data: {
      title: "Drag and drop: Goods vs Services.",
      types: [
        {
          name: "Goods",
          text: `ice cream, toys, cake, selling used items`,
        },
        {
          name: "Services",
          text: `police officer, teacher, hair cut, airplane trip, gardening`,
        },
      ],
    },
  },
  {
    label: "Identify Producer and Consumer",
    type: "group",
    data: {
      title: "Drag and drop: Producer vs Consumer.",
      types: [
        {
          name: "Producer",
          text: `making dress, teaching, painting, fixing roof, selling candy, delivering pizza`,
        },
        {
          name: "Consumer",
          text: `going to movies, buying shoes, ordering pizza, watching TV `,
        },
      ],
    },
  },
];
