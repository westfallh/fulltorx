export type GalleryCard = {
  id: string;
  src?: string;
  alt?: string;
  widthVw: number;
  maxWidthPx: number;
  rounded?: boolean;
  placeholder?: boolean;
  project?: {
    title: string;
    description: string;
    credits: string[];
    /** Shown under title; opens in new tab */
    linkUrl?: string;
    linkLabel?: string;
  };
  /** In-place 3D spin (rotateY), no marquee */
  spin3d?: boolean;
};

export const railItems = ["TO: HWSTFALL.COM", "2026 WORK"];
export const services: string[] = [];
export const process: string[] = [];

export const galleryCards: GalleryCard[] = [
  {
    id: "fulltorx-logo",
    src: "/stack/fulltorxlogospin.gif",
    alt: "Full Torx logo",
    widthVw: 90,
    maxWidthPx: 1080,
  },
  {
    id: "fulltorx-bumper-sticker",
    src: "/stack/fulltorxbumpersticker%201.png",
    alt: "Full Torx bumper sticker artwork",
    widthVw: 91,
    maxWidthPx: 1368,
  },
  {
    id: "fulltorx-glow",
    src: "/stack/fulltorxglow.png",
    alt: "Full Torx glow wordmark",
    widthVw: 96,
    maxWidthPx: 1400,
  },
  {
    id: "meantime-work",
    src: "/stack/meantimeworkres.png",
    alt: "Meantime work screenshot",
    widthVw: 96,
    maxWidthPx: 1400,
    project: {
      title: "MEANTIME 2026",
      description:
        "MEANTIME IS LEADING THE FAST LANE BY REIMAGINING WHAT ART GALLERIES SHOULD BE. INSTEAD OF STICKING TO ART THEY ARE RUNNING POP UPS FOR PEOPLE IN THE VINTAGE SPACE, AND EXPANDING WHAT A SPACE COULD BE USED FOR. I TOOK THIS ETHOS AND DESIGNED A WEB PRESENCE THAT EXPANDS ON IT.",
      linkUrl: "https://meantimela.com",
      linkLabel: "MEANTIMELA.COM",
      credits: [
        "WEB DESIGN AND DEVELOPMENT: HAYDEN WESTFALL",
        "GRAPHIC DESIGN AND BRAND IDENTITY: CAM GILLY",
        "CREATIVE DIRECTION: HAYDEN WESTFALL & CAM GILLY",
        "MEANTIME TEAM: SAM MALAKOOTI & CAM GILLY",
      ],
    },
  },
  {
    id: "fulltorx-screenprint",
    src: "/stack/SCREENPRINT.jpg",
    alt: "Full Torx screenprint project",
    widthVw: 96,
    maxWidthPx: 1400,
  },
  {
    id: "varsity-3d",
    src: "/varsity-logo.png",
    alt: "Varsity",
    widthVw: 100,
    maxWidthPx: 9999,
    spin3d: true,
    project: {
      title: "VARSITY",
      description:
        "WORK IN PROGRESS INTERFACE DESIGN AND DEVELOPMENT FOR VARSITY LOS ANGELES",
      linkUrl: "https://www.hwstfall.com/",
      linkLabel: "WWW.HWSTFALL.COM",
      credits: [
        "WEB DESIGN AND DEVELOPMENT: HAYDEN WESTFALL",
      ],
    },
  },
];
