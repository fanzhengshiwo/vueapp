import request from '@/utils/request'

export function fetchStaff(query) {
  return request({
    url: '/vue-element-admin/staff/list',
    method: 'get',
    params: query
  })
}

export function createStaff(data) {
  return request({
    url: '/vue-element-admin/staff/create',
    method: 'post',
    data
  })
}

export function setRoles(data) {
  return request({
    url: '/vue-element-admin/staff/setroles',
    method: 'post',
    data
  })
}

export function deleteStaff(data) {
  return request({
    url: '/vue-element-admin/staff/delete',
    method: 'post',
    data
  })
}
