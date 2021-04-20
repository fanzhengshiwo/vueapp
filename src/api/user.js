import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/user/list',
    method: 'get',
    params: query
  })
}

export function fetchUserDetail(query) {
  return request({
    url: '/vue-element-admin/user_detail',
    method: 'get',
    params: query
  })
}

export function fetchUserCourse(query) {
  return request({
    url: '/vue-element-admin/user_course',
    method: 'get',
    params: query
  })
}

export function fetchUserColumn(query) {
  return request({
    url: '/vue-element-admin/user_column',
    method: 'get',
    params: query
  })
}

export function fetchUserOrder(query) {
  return request({
    url: '/vue-element-admin/user_order',
    method: 'get',
    params: query
  })
}

export function fetchUserHistory(query) {
  return request({
    url: '/vue-element-admin/user_history',
    method: 'get',
    params: query
  })
}

export function fetchUserComment(query) {
  return request({
    url: '/vue-element-admin/user_comment',
    method: 'get',
    params: query
  })
}

export function changeCommentStatus(query) {
  return request({
    url: '/vue-element-admin/user/no_comment',
    method: 'post',
    params: query
  })
}

export function changeAccessStatus(query) {
  return request({
    url: '/vue-element-admin/user/no_access',
    method: 'post',
    params: query
  })
}

export function fetchRole(query) {
  return request({
    url: '/vue-element-admin/role/list',
    method: 'get',
    params: query
  })
}
