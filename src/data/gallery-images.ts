export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: "science" | "craft" | "sports" | "cultural" | "events";
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/events/science-lab-01.jpg",
    alt: "Students conducting science experiments in the laboratory",
    caption: "Hands-on Science Lab",
    category: "science",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/classroom-activity-01.jpg",
    alt: "Students engaged in interactive classroom learning",
    caption: "Interactive Classroom Sessions",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/classroom-activity-02.jpg",
    alt: "Collaborative group work in class",
    caption: "Collaborative Learning",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/sports-day-01.jpg",
    alt: "Students participating in annual sports day events",
    caption: "Annual Sports Day",
    category: "sports",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/sports-day-02.jpg",
    alt: "Athletic competitions and team sports",
    caption: "Team Sports & Athletics",
    category: "sports",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/cultural-program-01.jpg",
    alt: "Students performing in cultural program",
    caption: "Cultural Celebration",
    category: "cultural",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/cultural-program-02.jpg",
    alt: "Stage performance during school festival",
    caption: "Festival Performance",
    category: "cultural",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/outdoor-activity-01.jpg",
    alt: "Children enjoying outdoor team building activities",
    caption: "Outdoor Fun & Learning",
    category: "sports",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/art-craft-01.jpg",
    alt: "Students creating art projects in craft class",
    caption: "Creative Arts Workshop",
    category: "craft",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/art-craft-02.jpg",
    alt: "Colorful art and craft exhibition",
    caption: "Art & Craft Exhibition",
    category: "craft",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/craft-day-01.jpg",
    alt: "Young students proudly showing their craft creations",
    caption: "Craft Day Showcase",
    category: "craft",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/school-event-01.jpg",
    alt: "Students gathering for a school assembly",
    caption: "School Assembly",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/school-event-02.jpg",
    alt: "Special event celebrations at school",
    caption: "Special Celebrations",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/school-event-03.jpg",
    alt: "Community participation in school events",
    caption: "Community Day",
    category: "events",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/events/school-event-04.jpg",
    alt: "Award ceremony and recognition event",
    caption: "Awards & Recognition",
    category: "events",
    width: 1200,
    height: 900,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "science", label: "Science" },
  { id: "craft", label: "Art & Craft" },
  { id: "sports", label: "Sports" },
  { id: "cultural", label: "Cultural" },
  { id: "events", label: "Events" },
] as const;
