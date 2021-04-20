import request from '@/utils/request'

export function fetchPostComment(query) {
  return request({
    url: '/vue-element-admin/post/comment',
    method: 'get',
    params: query
  })
}

export function fetchPostList(query) {
  return request({
    url: '/vue-element-admin/post/list',
    method: 'get',
    params: query
  })
}

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/bbs/list',
    method: 'get',
    params: query
  })
}

export function createBbs(data) {
  return request({
    url: '/vue-element-admin/bbs/create',
    method: 'post',
    data
  })
}

export function updateBbs(data) {
  return request({
    url: '/vue-element-admin/bbs/update',
    method: 'post',
    data
  })
}

export function deleteBbs(data) {
  return request({
    url: '/vue-element-admin/bbs/delete',
    method: 'post',
    data
  })
}

export function deletePost(data) {
  return request({
    url: '/vue-element-admin/post/delete',
    method: 'post',
    data
  })
}

export function deletePostComment(data) {
  return request({
    url: '/vue-element-admin/post/comment/delete',
    method: 'post',
    data
  })
}
