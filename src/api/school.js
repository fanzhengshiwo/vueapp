import request from '@/utils/request'

export function fetchSchool(query) {
  return request({
    url: '/vue-element-admin/school/list',
    method: 'get',
    params: query
  })
}

export function createSchool(data) {
  return request({
    url: '/vue-element-admin/school/create',
    method: 'post',
    data
  })
}
