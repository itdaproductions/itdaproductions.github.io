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
    directoryUrl: 'digital_painting',
    directoryTitle: 'Digital Painting',
    directoryDescription: "They don't suck, I swear",
    media: [
      {
        url: 'Poirot.jpg',
        title: 'Poirot',
        description: 'Poirot',
      },
    ],
  },
  {
    directoryUrl: 'sculpture',
    directoryTitle: 'Sculpture',
    directoryDescription: "They DO suck, I swear",
    media: [
      {
        url: '1.png',
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
