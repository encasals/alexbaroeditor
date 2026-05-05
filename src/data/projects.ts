export interface Project {
  slug: string;
  title: string;
  year: string;
  coverImage: string;
  description?: string;
  videos: string[]; // Local video IDs (without .mp4 extension)
  youtubeIds?: string[]; // YouTube video IDs for embedding
  vimeoIds?: string[]; // Vimeo video IDs for embedding
  aspectRatio?: 'landscape' | 'portrait' | 'square'; // Video aspect ratio
}

export const projects: Project[] = [
  {
    slug: "playstation",
    title: "PlayStation x UEFA Woman's Champion League",
    year: "2023",
    coverImage: "/images/covers/playstation.jpg",
    description: "Video editing and camera operating a collection of social brand films for PlayStation with Fran Kirby, Millie Bright, Ona Batlle and Fridolina Rolfö.",
    videos: ["GwFEYwtfNZn", "-J6Ifkbr2dE", "-rNW2FHh52t", "-KjHIpjjVZr", "9KFJzbVJX43", "N9Rp2cRvvrI"],
    aspectRatio: "portrait"
  },
  {
    slug: "vice-media",
    title: "Vice Media",
    year: "2023",
    coverImage: "/images/covers/vice-media.png",
    description: "Client: Vice Media. Role: Videography and Editing. Promo assets for Vice's Snapchat channel featuring a day out with Lori Harvey.",
    videos: ["GvqhASjaxDM", "MMPGITBUR8t", "ShCen5jIhR2"],
    aspectRatio: "portrait"
  },
  {
    slug: "berghaus-kendall-mountain-festival",
    title: "Berghaus - Kendall Mountain Festival",
    year: "2023",
    coverImage: "/images/covers/berghaus-kendall-mountain-festival.jpg",
    description: "Client: Berghaus. Role: Editing. A piece of content showcasing the new Berghaus store in Keswick.",
    videos: ["ITpgaohoime"],
    aspectRatio: "portrait"
  },
  {
    slug: "history-is-what-makes-us",
    title: "history is what makes us",
    year: "2024",
    coverImage: "/images/covers/history-is-what-makes-us.png",
    description: "A mini documentary for Adidas about the history and culture of the Samba.",
    videos: [],
    vimeoIds: ["536719257"],
    aspectRatio: "landscape"
  },
  {
    slug: "waterbear",
    title: "Waterbear Network Documentary",
    year: "2020",
    coverImage: "/images/covers/waterbear.jpg",
    description: "The Waterbear Network is a free video-on-demand platform dedicated to the future of our planet. I was briefed to promote the launch of the Waterbear Network.",
    videos: [],
    youtubeIds: ["bYQlCdeRfOI", "K0lAn82rCP0", "6BF-HaoPGu8"],
    aspectRatio: "landscape"
  },
  {
    slug: "bmw-m3-m4",
    title: "BMW M3 & M4 / Social Campaign",
    year: "2020",
    coverImage: "/images/covers/bmw-m3-m4.png",
    description: "Client: BMW / Goodwood. Agency: Imagination. Role: Editing. Assets created for Goodwood social channel.",
    videos: ["GaQiVFAkLkB", "NSHUbNQkJiX"],
    aspectRatio: "landscape"
  },
  {
    slug: "goodwood-2020",
    title: "Goodwood Festival of Speed",
    year: "2021",
    coverImage: "/images/covers/goodwood-2020.png",
    description: "Client: Goodwood. Agency: Imagination. Role: Editing. Assets created to promote the annual Goodwood Festival of Speed.",
    videos: [],
    youtubeIds: ["2bSusXpKcYY"],
    aspectRatio: "landscape"
  },
  {
    slug: "football-your-way",
    title: "Football Your Way",
    year: "2023",
    coverImage: "/images/covers/football-your-way.png",
    description: "Client: Premier League Football. Agency: McCann. Role: Editing. A promotional film for the new fantasy football game.",
    videos: ["3igHJpvt_Be"],
    aspectRatio: "landscape"
  },
  {
    slug: "bowers-wilkins",
    title: "Bowers & Wilkins: Zeppelin",
    year: "2021",
    coverImage: "/images/covers/bowers-wilkins.png",
    description: "Client: Bowers & Wilkins. Role: Editing. Product video for the new Zeppelin speaker.",
    videos: ["3Nvu-3tthqN", "-CoQLr_shnm"],
    aspectRatio: "landscape"
  },
  {
    slug: "pura-case-study",
    title: "Pura Case Study",
    year: "2022",
    coverImage: "/images/covers/pura-case-study.png",
    description: "Client: Pura. Role: Editing. Case study video showcasing the Pura product.",
    videos: ["-imn6vNZGD_"],
    aspectRatio: "landscape"
  },
  {
    slug: "declan-mckenna",
    title: "Declan McKenna - What Happened To The Beach?",
    year: "2023",
    coverImage: "/images/covers/declan-mckenna.png",
    description: "Client: Sony Music. Role: Editing. Album campaign assets for Declan McKenna.",
    videos: [],
    youtubeIds: ["7faR-kQCAYo"],
    aspectRatio: "landscape"
  },
  {
    slug: "lymited-launch-campaign",
    title: "Lymited / Launch Campaign",
    year: "2020",
    coverImage: "/images/covers/lymited-launch-campaign.png",
    description: "Client: Lymited. Role: Editing. Launch video for new brand.",
    videos: ["ELmSV5QXq3J"],
    aspectRatio: "landscape"
  },
  {
    slug: "gb-snowsport",
    title: "GB Snowsport",
    year: "2023",
    coverImage: "/images/covers/gb-snowsport.jpg",
    description: "Client: GB Snowsport. Role: Editing. Promotional content for GB Snowsport athletes.",
    videos: ["NfIwT_PCVKY"],
    aspectRatio: "landscape"
  },
  {
    slug: "unbreakable-social-campaign",
    title: "Unbreakable Social Campaign",
    year: "2023",
    coverImage: "/images/covers/unbreakable-social-campaign.jpg",
    description: "Client: Unbreakable. Role: Social Campaign Directing and Editing. Creation of 3 different films showcasing the brand's products.",
    videos: [],
    youtubeIds: ["VbPn2uFpGjw"],
    aspectRatio: "landscape"
  },
  {
    slug: "london-in-one-minute",
    title: "London in One Minute",
    year: "2024",
    coverImage: "/images/covers/london-in-one-minute.png",
    description: "Client: Busabout. Role: Editor + Videographer.",
    videos: [],
    youtubeIds: ["CW7mV9A4ivc"],
    aspectRatio: "landscape"
  },
  {
    slug: "chubb-studio",
    title: "Chubb Studio",
    year: "2022",
    coverImage: "/images/covers/chubb-studio.png",
    description: "Client: Chubb Studio. Role: Editing.",
    videos: [],
    youtubeIds: ["dZeX6q_qOms"],
    aspectRatio: "landscape"
  },
  {
    slug: "broadway-east-social-campaign",
    title: "Broadway East / Social Campaign",
    year: "2023",
    coverImage: "/images/covers/broadway-east-social-campaign.png",
    description: "Client: Ignite TV / Berkeley Group. Role: Motion Graphics and editing for the new Broadway East development.",
    videos: [],
    youtubeIds: ["2seRSOCST08"],
    aspectRatio: "landscape"
  },
  {
    slug: "the-dalmore-brand-campaign",
    title: "The Dalmore / Brand Campaign",
    year: "2020",
    coverImage: "/images/covers/the-dalmore-brand-campaign.png",
    description: "Client: The Dalmore. Agency: Leagas Delaney. Role: Editing and sound mixing. Creation of different assets for their social brand campaign.",
    videos: ["-fUeMdChE2E"],
    aspectRatio: "landscape"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
