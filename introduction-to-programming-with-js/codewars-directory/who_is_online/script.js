"use strict";

// *=*=*=*=*=*=*=*=*=*=* passed all tests *=*=*=*=*==*=**=

// Who is online and available to chat? -> online
// who is online but not available? -> away
// who is not online? -> offline

// 1) turn object in array___DONE
// 2) create 3 variables: online, away, offline___DONE
// 3) Iterate over arrays___DONE
// 4) if offline put username in offline
// 5) if online and last activity less than 10 minutes put username in online
// 6) if online but last activty more than 10 minutes put username in away

const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "doob",
    status: "online",
    lastActivity: 4,
  },
  {
    username: "Boedb",
    status: "online",
    lastActivity: 4,
  },
  {
    username: "doobyob",
    status: "online",
    lastActivity: 4,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 4,
  },
];

const whosOnline = (friends) => /* function whosOnline(friends)  */ {
  friends = Object.entries(friends);
  let statusFriends = {};
  let online = [];
  let offline = [];
  let away = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1].status === "online" && friends[i][1].lastActivity <= 10) {
      statusFriends.online = online;
      online.push(friends[i][1].username);
    } else if (
      friends[i][1].status === "online" &&
      friends[i][1].lastActivity > 10
    ) {
      statusFriends.away = away;
      away.push(friends[i][1].username);
    } else if (friends[i][1].status === "offline") {
      statusFriends.offline = offline;
      offline.push(friends[i][1].username);
    }
  }

  return statusFriends;
};

console.log(whosOnline(friends));

console.log("===== Test Test Test =====");
