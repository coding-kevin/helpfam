// seed data

const ticketsData = [
  {
    title: "Mouse broken",
    description: "Won't turn on",
    submittedBy: "Jason",
    worknotes: [
      {
        timestamp: "2022-07-17T02:22:15.056Z",
        worknotes: "Requested replacement mouse",
        author: "Sarah",
      },
      {
        timestamp: "2022-07-17T02:22:15.056Z",
        worknotes: "Tried replacing batteries but still not working",
        author: "Fred",
      },
      {
        timestamp: "2022-06-207T02:12:15.123Z",
        worknotes: "Batteries seemed dead",
        author: "Sarah",
      },
    ],
    resolved: false,
    visible: true,
  },
  {
    title: "WiFi down",
    description: "Blinking red",
    submittedBy: "Dave",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Working after hard reset",
        author: "Sarah",
      },
      {
        timestamp: "2022-07-11T02:16:15.056Z",
        worknotes: "Needs hard reset",
        author: "Sarah",
      },
    ],
    resolved: true,
    visible: true,
  },
  {
    title: "Keyboard broken",
    description: "Missing J key",
    submittedBy: "Jason",
    worknotes: [],
    resolved: false,
    visible: true,
  },
  {
    title: "Hard drive failure",
    description: "Lost TPS reports",
    submittedBy: "Bill",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Found TPS reports on floppy disk and restored",
        author: "Sarah",
      },
    ],
    resolved: true,
    visible: true,
  },
  {
    title: "Need access to network drives",
    description: "Says insufficient priviliges",
    submittedBy: "Sarah",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Messaged Tom for access",
        author: "Sarah",
      },
    ],
    resolved: true,
    visible: true,
  },
  {
    title: "Mouse broken",
    description: "Won't turn on",
    submittedBy: "Sarah",
    worknotes: [
      {
        timestamp: "2022-07-17T02:22:15.056Z",
        worknotes: "Requested replacement mouse",
        author: "Sarah",
      },
      {
        timestamp: "2022-07-17T02:22:15.056Z",
        worknotes: "Tried replacing batteries but still not working",
        author: "Fred",
      },
      {
        timestamp: "2022-06-207T02:12:15.123Z",
        worknotes: "Batteries seemed dead",
        author: "Sarah",
      },
    ],
    resolved: false,
    visible: true,
  },
  {
    title: "WiFi down",
    description: "Blinking red",
    submittedBy: "Jason",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Working after hard reset",
        author: "Fred",
      },
      {
        timestamp: "2022-07-11T02:16:15.056Z",
        worknotes: "Needs hard reset",
        author: "Fred",
      },
    ],
    resolved: true,
    visible: true,
  },
  {
    title: "Keyboard broken",
    description: "Missing J key",
    submittedBy: "Sarah",
    worknotes: [],
    resolved: false,
    visible: true,
  },
  {
    title: "Hard drive failure",
    description: "Lost TPS reports",
    submittedBy: "Steve",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Found TPS reports on floppy disk and restored",
        author: "Sarah",
      },
    ],
    resolved: true,
    visible: true,
  },
  {
    title: "Need access to network drives",
    description: "Says insufficient priviliges",
    submittedBy: "Dan",
    worknotes: [
      {
        timestamp: "2022-07-11T02:26:15.056Z",
        worknotes: "Messaged Tom for access",
        author: "Sarah",
      },
    ],
    resolved: true,
    visible: true,
  },
];

module.exports = ticketsData;
