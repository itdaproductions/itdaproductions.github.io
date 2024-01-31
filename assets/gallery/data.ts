export type GalleryData = {
  directoryUrl: string;
  directoryTitle: string;
  directoryDescription?: string;
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
    directoryUrl: '3d',
    directoryTitle: 'Desenhos 3d',
    directoryDescription: "They don't suck, I swear",
    media: [
      {
        url: '1.png',
        title: 'This is a good title',
        description: 'A beautiful landscape with mountains',
      },
    ],
  },
  {
    directoryUrl: 'sculpture',
    directoryTitle: 'Sculpture',
    directoryDescription: "They don't suck, I swear",
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
