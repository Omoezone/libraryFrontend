import { useQuery } from 'react-query';
import ApiClient, { FetchResponse } from '../service/apiClient';
import { Book } from '../types/book';

const apiClient = new ApiClient<Book>("/books");

const useBooks = () => {
  return useQuery<FetchResponse<Book>, Error>('books', () => apiClient.getAll());
};



export default useBooks;