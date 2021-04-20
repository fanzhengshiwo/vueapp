import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/media/list',
    method: 'get',
    params: query
  })
}

export function createMedia(data) {
  return request({
    url: '/vue-element-admin/media/create',
    method: 'post',
    data
  })
}

export function updateMedia(data) {
  return request({
    url: '/vue-element-admin/media/update',
    method: 'post',
    data
  })
}

export function deleteMedia(data) {
  return request({
    url: '/vue-element-admin/media/delete',
    method: 'post',
    data
  })
}
