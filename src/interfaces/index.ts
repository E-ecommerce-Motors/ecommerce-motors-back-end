interface announcement {
  title?: string;
  year?: string;
  mileage?: number;
  price?: number;
  description?: string;
  typeVehicle?: "car" | "motorcycle";
}

type announcementRequired =
  | "title"
  | "year"
  | "mileage"
  | "price"
  | "description"
  | "typeVehicle";

export { announcement, announcementRequired };
