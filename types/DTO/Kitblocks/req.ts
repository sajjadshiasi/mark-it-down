export interface IAllKitblocksProps {
  Authorization?: string;
  params: {
    page?: number;
    limit?: number;
    query?: string;
    order_column?: 'likes' | 'names' | 'created_at' | 'pieces';
    order_type?: 'asc' | 'desc';
  };
}

export interface IKitDetailsProps {
  id: string | string[];
  Authorization?: string;
}

export interface IKitDetailsLatestBuildingsProps {
  id: string | string[];
  params?: {
    page?: number;
    limit?: number;
  };
}
