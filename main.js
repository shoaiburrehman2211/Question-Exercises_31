/*
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed
*/
var userName2 = ["Ali", "Madad", "Faisal", "Admin", "Ayaz", "Tariq"];
// to remove all members
//userName2 = [];
//console.log(userName2);
if (userName2.length > 0) {
    for (var i = 0; i < userName2.length; i++) {
        if (userName2[i] == "Admin") {
            console.log("\n Hello ".concat(userName2[i], " would you like to see a status repot?\n"));
        }
        else {
            console.log("Hello ".concat(userName2[i], " thank you for logging in again!"));
        }
    }
}
else {
    console.log("we need to find some user!");
}
