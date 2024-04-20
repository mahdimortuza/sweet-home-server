export type TOwner = {
  name: string;
  image: string;
  status: "Seller" | "Owner" | "Agent";
};

export type TProperty = {
  title: string;
  image: string;
  optImage1?: string;
  optImage2?: string;
  optImage3?: string;
  video?: String;
  bath: number;
  toilet: number;
  price: number;
  kitchen: "Yes" | "No";
  category: "Residential" | "Hostel";
  ratings: number;
  description: string;
  status: "For sale" | "For rent" | "Sold Out" | "Rented";
  location: string;
  owner: TOwner;
  offer?: number;
};
