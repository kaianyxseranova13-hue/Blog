/* =========================================================
   The Daily Brief — Sample Article Data
   Replace this file's contents with your own news stories.
   Each article needs: id, title, excerpt, category, author,
   date, readTime, image, and optional url.
   ========================================================= */

const NEWS = [
  {
    id: 1,
    title: "Major Global Tech Firms Announce Historic Climate Accord",
    excerpt: "The world's largest tech companies pledge to halve emissions by 2030 in a landmark agreement worth billions.",
    category: "Business",
    author: "Alex Rivera",
    date: "2 hours ago",
    readTime: "6 min",
    image: "assets/hero-1.svg",
    featured: true
  },
  {
    id: 2,
    title: "New Battery Technology Could Double EV Range by Next Year",
    excerpt: "Researchers unveil a solid-state battery breakthrough that could make electric vehicles far more practical.",
    category: "Technology",
    author: "Priya Nair",
    date: "5 hours ago",
    readTime: "4 min",
    image: "assets/news-2.svg"
  },
  {
    id: 3,
    title: "City Council Approves First All-Electric Public Bus Fleet",
    excerpt: "The $120 million project is expected to cut transit emissions by 70% and improve air quality downtown.",
    category: "World",
    author: "Marcus Lee",
    date: "7 hours ago",
    readTime: "3 min",
    image: "assets/news-3.svg"
  },
  {
    id: 4,
    title: "Federal Reserve Holds Interest Rates Steady for Third Month",
    excerpt: "Policymakers cite cooling inflation but signal caution over a possible late-year economic slowdown.",
    category: "Business",
    author: "Sofia Grant",
    date: "9 hours ago",
    readTime: "5 min",
    image: "assets/news-4.svg"
  },
  {
    id: 5,
    title: "Scientists Map the Deep Ocean Floor in Unprecedented Detail",
    excerpt: "A new international effort reveals thousands of previously unmapped underwater features.",
    category: "Science",
    author: "Tom Ibarra",
    date: "11 hours ago",
    readTime: "6 min",
    image: "assets/news-5.svg"
  },
  {
    id: 6,
    title: "Why More Workers Are Choosing the Four-Day Workweek",
    excerpt: "Pilot programs worldwide are showing surprising gains in productivity and employee satisfaction.",
    category: "Culture",
    author: "Elena Vasquez",
    date: "1 day ago",
    readTime: "7 min",
    image: "assets/news-6.svg"
  }
];

/* Editor's picks (subset, larger cards) */
const PICKS = [NEWS[3], NEWS[4], NEWS[1]];

/* "Most Read" ranking for sidebars */
const MOST_READ = [
  NEWS[0],
  NEWS[3],
  NEWS[1],
  NEWS[4],
  NEWS[5]
];