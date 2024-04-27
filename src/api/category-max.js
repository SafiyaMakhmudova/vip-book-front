import api from "../plugins/axios"

const url1 = import.meta.env.VITE_BASE_URL

export function addCategoryApi(createFormData){
    return api({
        url:url1+"/api/categoryMax/create",
        method:'post',
        data:createFormData,
        headers:{
            'Content-Type':"multipart/form-data",
            'Access-Control-Allow-Origin':"*",
            'Accept':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('access_token')
        }
    })
}

export function findAllBookCategoryApi(pagination){
    return api.get(url1+`category-max/all/book/category?limit=${pagination.limit}&skip=${pagination.skip}`)
}

export function findAllCansCategoryApi(){
    return api.get(url1+`category-max/all/canstavar/category?limit=${pagination.limit}&skip=${pagination.skip}`)
}

