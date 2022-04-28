const numPointsScored = name => gameObject.find(name)

function numPointsScored(name) {
    let players = gameObject()[home][players]
    //console.log()
    for (const key in players) {
      //console.log(players[key]);
    }

//console.log(numPointsScored('Alan Anderson'))

function shoeSize(name) {
    //returns shoe size of player
}

function teamColors(team) {
    //returns array of team's colors
}

function teamNames() {
    //returns an array of team names
}

function playerNumbers(team) {
    //returns an array of jersey numbers for team
}

function playerStats(name) {
    //returns an object of player's stats
}

function bigShoeRebounds() {
    //returns the number of rebounds of the player with the largest shoe size
}


function gameObject() {
    return { 
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson":
                    {number: "0",
                    Shoe: "16",
                    points: "22",
                    rebounds:  "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                    },
                "Reggie Evans":
                    {number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds:  "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                    },
                "Brook Lopez":
                    {number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds:  "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                    },
                "Mason Plumlee":
                    {number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds:  "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                    },
                "Jason Terry":
                    {number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds:  "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                    },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players: {
                "Jeff Adrien":
                {number: "4",
                shoe: "18",
                points: "10",
                rebounds:  "1",
                assists: "1",
                steals: "2",
                blocks: "7",
                slamDunks: "2",
                },
            "Bismak Biyombo":
                {number: "0",
                shoe: "16",
                points: "12",
                rebounds:  "4",
                assists: "7",
                steals: "7",
                blocks: "5",
                slamDunks: "5",
                },
            "DeSagna Diop":
                {number: "2",
                shoe: "14",
                points: "24",
                rebounds:  "12",
                assists: "12",
                steals: "4",
                blocks: "5",
                slamDunks: "5",
                },
            "Ben Gordon":
                {number: "8",
                shoe: "15",
                points: "33",
                rebounds:  "3",
                assists: "2",
                steals: "1",
                blocks: "1",
                slamDunks: "0",
                },
            "Brendan Haywood":
                {number: "33",
                shoe: "15",
                points: "6",
                rebounds:  "12",
                assists: "12",
                steals: "22",
                blocks: "5",
                slamDunks: "12",
                },
            },
        },
    }
} 
  
// console.log(gameObject().home)