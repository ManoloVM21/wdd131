myInfo = {
    name: "Brother T",
    photo: "../images/profile.jpg",
    favoriteFoods: ["Fettuccini","Steak","Chicken","Baked Pork"],
    hoobies: ["Reading","Fishing","Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place:"Sandy, UT",
            length: "1 year",
        },
    ],
};

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood4 = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4 = myInfo.favoriteFoods[3];

document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);
