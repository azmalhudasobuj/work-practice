var myFriends = ['sobuj', 'sathi', 'foysal', 'jahid', 'sahos', 'lima'];
// console.log(myFriends);

for (var i = 0; i < myFriends.length; i++) {
    element = myFriends[i];
    // console.log(element);
}

var myFriendCount = myFriends.length;
// console.log(myFriendCount);

var index = myFriends.indexOf('sathi');
// console.log(index);

myFriends[4] = 'dipjol';
// console.log(myFriends);

myFriends.push('manna', 'mowsumi')
// console.log(myFriends);

myFriends.pop();
// console.log(myFriends);




var numbers = [2, 44, 65, 76, 334];

// console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}

numbers[4] = 34;
// console.log(numbers);

numbers.push(100, 200);
// console.log(numbers);

numbers.pop();
console.log(numbers);