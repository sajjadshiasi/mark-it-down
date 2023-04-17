export interface ICategoryDefault {
  code: number;
  status: boolean;
}

export interface ICategoryDefaultError {
  code: number;
  error: {
    detail: string;
    message: string;
  };
  status: boolean;
}

// -----------------------------------------------------------

export interface ICategory {
  id: string;
  name: string;
}

export interface IAllCategoriesBuildings extends ICategoryDefault {
  data: ISingleCategoryWithData[];
}
export interface ISingleCategoryBuildings extends ICategoryDefault {
  data: ISingleCategoryWithData;
}

export interface ISingleCategoryWithData {
  data: ISingleCategoryBuilding;
  id: string;
  title: string;
}

export interface ISingleCategoryBuilding {
  data: ICategoryBuilding[];
  limit: number;
  page: number;
  sort: string;
  total_pages: number;
  total_rows: number;
}

export interface ICategoryBuilding {
  created_at: number;
  dislike: number;
  disliked: boolean;
  id: string;
  images: string[];
  kit_block: { id: string; name: string };
  liked: boolean;
  likes: number;
  name: string;
  pieces: number;
  user_id: string;
  visibility: true;
  visitors: number;
}
