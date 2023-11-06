const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was a stormy day, so :insertx: grabbed and umbrella and went out. When they got to :inserty:, they stared into space for a few moments, then :insertz:. Bob witnessed the events, but then remembered that :insertx: is just a silly lad.";
const insertX = [
    "Spider-Man",
    "Princess Peach",
    "Spongebob"
];
const insertY = [
    "Weenie Hut JR's",
    "the Earth-1612",
    "Bowser's Castle"
];

const insertZ = [
    "sobbed for no reason",
    "started slow dancing by themselves",
    "yelped"
]

console.log(storyText);
console.log(insertX);
console.log(insertY);
console.log(insertZ);



function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
  
}
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);


    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replaceAll(":inserty:",yItem);
    newStory = newStory.replaceAll(":insertz:",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);


  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade` ;
    newStory = newStory.replaceAll("94 farenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}