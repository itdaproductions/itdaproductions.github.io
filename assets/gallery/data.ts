export type GalleryData = {
  directoryUrl: string;
  directoryTitle: string;
  directoryDescription?: string;
  directoryDisplayMedia?: boolean;
  media: GalleryFiles[];
};

export type GalleryFiles = {
  url: string;
  title?: string;
  description?: string;
  type?: 'image' | 'video';
};

export const PortfolioGallery: GalleryData[] = [
  {
    directoryUrl: 'music',
    directoryTitle: 'data-music-directory-title',
    directoryDescription: 'data-music-directory-desc',
    directoryDisplayMedia: false,
    media: [
      {
        url: 'https://www.youtube.com/embed/hIrF2mh1g8U',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
        type: 'video',
      },
      {
        url: 'https://www.youtube.com/embed/hIrF2mh1g8U',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
        type: 'video',
      },
      {
        url: '2.png',
        description: 'A cute kitten playing with a ball of yarn',
      },
    ],
  },
  {
    directoryUrl: 'dp',
    directoryTitle: 'Digital Painting',
    directoryDescription: "They don't suck, I swear",
    media: [
      {
        url: 'Poirot.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: 'The Polarity of Drowning.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: 'Scraptrap.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: 'Red.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: 'Powder.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: 'Self-Portrait.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
    ],
  },
  {
    directoryUrl: 'sculpture',
    directoryTitle: 'Sculpture',
    directoryDescription: "They really DOOOO suck, I swear",
    media: [
      {
        url: 'Old Man.jpg',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
      {
        url: '2.png',
        description: 'A cute kitten playing with a ball of yarn',
      },
      {
        url: '3.png',
        description: 'A delicious plate of spaghetti carbonara',
      },
    ],
  },
];
