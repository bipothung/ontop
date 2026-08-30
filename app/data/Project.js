import i1 from "../projects/assets/i1.png";
import i2 from "../projects/assets/i2.png";
import i3 from "../projects/assets/i3.png";
import i4 from "../projects/assets/i4.png";
import i5 from "../projects/assets/i5.png";

export const projects = [
  {
    id: 1,
    title: "Coastal Villa",
    category: "Residential",
    location: "Amalfi Coast",
    year: 2022,
    image: i1,
    description:
      "A Mediterranean villa that cascades down a coastal cliff, with terraces and infinity pools that merge visually with the sea beyond.",
    details: {
      client: "Private Client",
      leadArchitect: "Gabriella Rossi",
      size: "7,500 sq ft",
      completion: "July 2022",
      services: [
        "Architectural Design",
        "Landscape Architecture",
        "Structural Engineering",
      ],
    },
    gallery: [i1, i2, i3, i4, i5], // replace with real images
  },
  {
    id: 2,
    title: "Harmony Cultural Center",
    category: "Cultural",
    location: "Berlin",
    year: 2021,
    image: i2,
    description:
      "An innovative cultural hub in Berlin, promoting art, music, and community gatherings.",
    details: {
      client: "Berlin City Council",
      leadArchitect: "Hans Müller",
      size: "12,000 sq ft",
      completion: "March 2021",
      services: ["Cultural Architecture", "Interior Design"],
    },
    gallery: [i2, i3, i4],
  },
  {
    id: 3,
    title: "Urban Oasis Tower",
    category: "Commercial",
    location: "Singapore",
    year: 2023,
    image: i3,
    description:
      "A futuristic commercial skyscraper designed with biophilic architecture and smart office spaces.",
    details: {
      client: "Urban Group",
      leadArchitect: "Wei Ling",
      size: "25,000 sq ft",
      completion: "August 2023",
      services: ["Commercial Design", "Green Building"],
    },
    gallery: [i3, i1, i4],
  },
  {
    id: 4,
    title: "Seaside Retreat Villa",
    category: "Residential",
    location: "Malibu",
    year: 2020,
    image: i4,
    description:
      "Beachfront luxury villa designed for serene living with natural materials and ocean views.",
    details: {
      client: "Private Client",
      leadArchitect: "Michael Carter",
      size: "6,000 sq ft",
      completion: "October 2020",
      services: ["Luxury Residential Design", "Interior Styling"],
    },
    gallery: [i4, i1, i2],
  },
  {
    id: 5,
    title: "Global Innovation Hub",
    category: "Commercial",
    location: "Tokyo",
    year: 2023,
    image: i5,
    description:
      "A collaborative workspace fostering innovation, technology startups, and creative industries.",
    details: {
      client: "Tech Tokyo",
      leadArchitect: "Akira Tanaka",
      size: "18,000 sq ft",
      completion: "May 2023",
      services: ["Workspace Design", "Innovation Labs"],
    },
    gallery: [i5, i3, i4],
  },
];
