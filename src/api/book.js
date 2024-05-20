import api from "@/plugins/axios";

const url = import.meta.env.VITE_BASE_URL;

export function findAllBooks(pagination) {
  return api.get(
    url + `books/all/book?limit=${pagination.limit}&skip=${pagination.skip}`
  );
}

export function findAllCanstavar(pagination) {
  return api.get(
    url +
      `books/all/canstavar?limit=${pagination.limit}&skip=${pagination.skip}`
  );
}

export function findAllBookCategoryMiniApi(pagination, categoryMini){
  return api.get(url+`books/search?name=${categoryMini.name}&limit=${pagination.limit}&skip=${pagination.skip}`)
}

export function findTopRatedBookApi(){
  return api.get(url+'books/topRated')
}

export function findTopSoldBookApi(){
  return api.get(url+'books/soldRated')
}

export function SearchBookApi(data){
  return api.post(url+'books/search/book', data)
}

export function SingleBookApi(id){
  return api.get(url+`books/${id}`)
}

