export interface IKitblockDefault {
  status: boolean;
  code: number;
}

export interface IKitblockDefaultError {
  code: number;
  status: boolean;
}

// -----------------------------------------------------------

export interface IAllKitblocksWithData extends IKitblockDefault {
  data: IAllKitblocks;
}

export interface IAllKitblocks {
  limit: number;
  page: number;
  sort: string;
  total_rows: number;
  total_pages: number;
  data: Array<IAllKitblockData>;
}

export interface IAllKitblockData {
  id: string;
  name: string;
  coming_soon: false;
  images: Array<string>;
  pieces: number;
  style: string;
  visitors: number;
  likes: number;
  dislike: number;
  liked: boolean;
  disliked: boolean;
  created_at: number;
}

// error

export interface IAllKitblocksWithDataError extends IKitblockDefaultError {
  error: {
    detail: [
      {
        message: string;
      }
    ];
    message: string;
  };
}

// -----------------------------------------------------------

export interface IKitDetails extends IKitblockDefault {
  data: IKitDetailsData;
}

export interface IKitDetailsData {
  config: string;
  created_at: number;
  description: string;
  dislike: number;
  disliked: boolean;
  file: string;
  id: string;
  images: Array<string>;
  liked: boolean;
  likes: number;
  name: string;
  pieces: number;
  style: string;
  updated_at?: number;
  visitors: number;
}

// error

export interface IKitDetailsError extends IKitblockDefaultError {
  error: {
    detail: [
      {
        field: string;
        message: string;
        rule: string;
      }
    ];
    message: string;
  };
}

// -----------------------------------------------------------

export interface IKitDetailsLatestBuildings extends IKitblockDefault {
  data: IAllRelatedBuildings;
}

export interface IAllRelatedBuildings {
  limit: number;
  page: number;
  sort: string;
  total_rows: number;
  total_pages: number;
  data: Array<IRelatedBuildings>;
}

export interface IRelatedBuildings {
  created_at: number;
  dislike: number;
  disliked: boolean;
  id: string;
  images: Array<string>;
  kit_block: {
    id: string;
    name: string;
  };
  liked: boolean;
  likes: number;
  name: string;
  pieces: number;
  user_id: string;
  visibility: boolean;
  visitors: number;
}

// error

export interface IKitDetailsLatestBuildingsError extends IKitblockDefaultError {
  error: {
    detail: string;
    message: string;
  };
}

// -----------------------------------------------------------
