/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp,
    this.numberOfLikes = numberOfLikes,
    this.comments = comments;
  }
incrementLikes() {
  this.numberOfLikes++
}

addComment(newComment) {
  this.comments.push(newComment);
}
};

var tweetOne = new Tweet ("Ali", "Minnesota Weather", "12:00 12/24/2020", 100, ["Too cold!", "So much snow"]);
var tweetTwo = new Tweet ("Lara", "Baby Updates", "15:30 10/28/2020", 1000, ["She's perfect!", "So cute!"]);
var tweetThree = new Tweet ("Nicole", "Link to cat facts", "17:00 07/07/2020", 50, ["Hahaha", "Love it"]);
var tweetFour = new Tweet ("Lauren", "Local wedding venues", "14:00 08/10/2020", 250, ["Beautiful", "These are great"]);

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);
console.log(tweetThree);

tweetOne.incrementLikes();
console.log(tweetOne);

tweetTwo.incrementLikes();
console.log(tweetOne);

tweetTwo.addComment("Thank you for sharing");
console.log(tweetTwo);

tweetThree.incrementLikes();
tweetThree.addComment("Love a good cat fact");
console.log(tweetThree);
