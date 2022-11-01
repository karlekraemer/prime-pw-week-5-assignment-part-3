console.log('***** Music Collection *****')

const collection = [];


function addToCollection(title, artist, yearPublished) {
    record = {title, artist, yearPublished};
    this.title = collection.title;
    this.artist = collection.artist;
    this.yearPublished = collection.yearPublished;
    collection.push({record});
   return record
}

let inKeepingSecrets = addToCollection('In Keeping Secrets', 'Coheed', '2007');
let aDifferentMirror = addToCollection('A Different Mirror', 'Toki Wright', '2007');
let secondStage = addToCollection('2nd Stage Turbine Blade', 'Coheed', '2004');
let swimming = addToCollection('Swimming', 'Mac Miller', '2019');
let anAwesomeWave = addToCollection('An Awesome Wave', 'alt-j', '2010');
let dreamingOfABiggerLife = addToCollection('Dreaming of a Bigger Life', 'Michal Menert', '2010');

console.log(collection);



function showCollection(searchFor) {
    searchResults = [];
    for (i=0; i<collection.length; i++) {
        if (collection[i].record.artist === searchFor) {
            searchResults.push(collection[i].record);
        }
        if (collection[i].record.title === searchFor) {
            searchResults.push(collection[i].record);
        }
        if (collection[i].record.yearPublished === searchFor) {
            searchResults.push(collection[i].record);
        }
    } 
    return searchResults
}

console.log(showCollection('2007'));
// Could NOT get this one to work!!! I'm not 100% on what the instructions are wanting the function to achieve.

function findByArtist(artist) {
    artistResults = [];
    for (i=0; i<collection.length; i++) {
        if (collection[i].record.artist === artist) {
            artistResults.push(collection[i].record);
        }
    }
    return artistResults
}

console.log(findByArtist('Mac Miller'));

// function Game(title, havePlayed, genre){
//     this.title = title;
//     this.havePlayed = havePlayed;
//     this.genre = genre;
// }

// let tombRaider = new Game('Tomb Raider', true, 'Action');
// let marioPikmin = new Game('Pikmin Kart', false, 'Strategy Racing');
// let pacMan = new Game('Pacman', true, 'Arcade');

// pacMan.yearReleased = '1980';

// console.log(tombRaider, marioPikmin);
// console.log(pacMan)