//Piece of separated state of our application

import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Blessed",
      artist: "Moods Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#EB7AAE", "#71BEE1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
    },

    {
      name: "Escape World",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FEE5CD", "#791939"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28957",
    },

    {
      name: "Summer in Cotuit",
      artist: "Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/87fc7eed9ec0459ce68555bde53e65b02be5acf5-1024x1024.png",
      id: uuidv4(),
      active: false,
      color: ["#274172", "#CFA600"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35355",
    },

    {
      name: "Daylight",
      artist: "Aiguille",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FCCBB9", "#645B96"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    },

    {
      name: "Tropical Midnight",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#92A7B8", "#10352A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31516",
    },

    {
      name: "Chrysalism",
      artist: "Toonorth",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#92A7B8", "#58543B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8405",
    },

    {
      name: "Vibe Vibe",
      artist: "Moods, Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b9345777ac06217801ed6b44c66800829e122c3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#92A92A7B87B8", "#58543B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10002",
    },

    {
      name: "Hyperspace",
      artist: "Shrimpnose, nobuddy",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#AE8F9F", "#909EB5"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
    },

    {
      name: "Takin' You For A Ride",
      artist: "Pandrezz",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FBC588", "#CE957F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8642",
    },

    {
      name: "Night Fishing",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/1a32362ec1ba749448678975a905ae2b66caf80f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#ACBDEF", "#529949"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
    },

    {
      name: "Monolith",
      artist: "Toonorth",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/06/0fe2c45f6e5410339c1040b8d72a137294a95d95-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DCD2B8", "#2D4B68"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41654",
    },
  ];
}

export default chillHop;
