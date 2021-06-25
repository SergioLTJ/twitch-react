import { Pagination } from './pagination';

export interface PagedData<T> {
  data: Array<T> | null,
  pagination: Pagination | null
}
