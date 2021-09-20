const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words)
assertEqual(words.length, 3); // checks if words did not get modified