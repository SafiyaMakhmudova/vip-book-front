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
