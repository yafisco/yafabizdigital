// Types communs réutilisables dans tout le projet

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  status: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type SortDirection = 'asc' | 'desc';

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: SortDirection;
};

export type SearchParams = PaginationParams & {
  query?: string;
};
