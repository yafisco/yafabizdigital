// Types pour les réponses API
export type ApiError = {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
};

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
};

export type ApiErrorResponse = {
  success: false;
  error: ApiError;
};

export type ApiResult<T> = ApiSuccessResponse<T> | ApiErrorResponse;
