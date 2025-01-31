export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  details: string;
  img: string;
  reviews: [
    {
      userId: string;
      userName: string;
      rating: number;
      comment: string;
      postedAt: string;
    }[]
  ];
  popularity: number;
  createdAt: string;
};