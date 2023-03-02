interface announcement {
  title?: string;
  year?: string;
  mileage?: number;
  price?: number;
  description?: string;
  typeVehicle?: "car" | "motorcycle";
  announcementImgs?: {
    update?: {
      where: { id: number };
      data: {
        coverImage: string;
        imageGallery: Array<string>;
      };
    };
  };
}

interface Comment {
  text: string;
  userId: number;
}

type announcementRequired =
  | "title"
  | "year"
  | "mileage"
  | "price"
  | "description"
  | "typeVehicle";

export { announcement, announcementRequired, Comment };

interface AnnouncementCreateInput {
  typeAnnouncement: type_announcement_options;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  typeVehicle: type_vehicle_options;
  userId: number;
  intermediarys?: {
    create?: Array<{
      commentId: number;
    }>;
  };
  announcementImgs?: {
    create?: Array<{
      coverImage: string;
      imageGallery: string[];
    }>;
  };
}

type type_announcement_options = "sale";
("auction");

type type_vehicle_options = "car";
("motorcycle");

export {
  AnnouncementCreateInput,
  type_announcement_options,
  type_vehicle_options,
};
