import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/book/list',
    method: 'get',
    params: query
  })
}

export function fetchDetail(query) {
  return request({
    url: '/vue-element-admin/book/detail',
    method: 'get',
    params: query
  })
}

export function createBook(data) {
  return request({
    url: '/vue-element-admin/book/create',
    method: 'post',
    data
  })
}

export function updateBook(data) {
  return request({
    url: '/vue-element-admin/book/update',
    method: 'post',
    data
  })
}

export function deleteBook(data) {
  return request({
    url: '/vue-element-admin/book/delete',
    method: 'post',
    data
  })
}

export function fetchBookDetail(query) {
  return request({
    url: '/vue-element-admin/book_detail/list',
    method: 'get',
    params: query
  })
}

export function createBookDetail(data) {
  return request({
    url: '/vue-element-admin/book_detail/create',
    method: 'post',
    data
  })
}

export function updateBookDetail(data) {
  return request({
    url: '/vue-element-admin/book_detail/update',
    method: 'post',
    data
  })
}

export function deleteBookDetial(data) {
  return request({
    url: '/vue-element-admin/book_detail/delete',
    method: 'post',
    data
  })
}
