import request from '@/utils/request'

export function fetchMobileList(query) {
  return request({
    url: '/vue-element-admin/renovation/mobile/list',
    method: 'get',
    params: query
  })
}

export function createMobile(data) {
  return request({
    url: '/vue-element-admin/renovation/mobile/create',
    method: 'post',
    data
  })
}

export function updateMobile(data) {
  return request({
    url: '/vue-element-admin/renovation/mobile/update',
    method: 'post',
    data
  })
}

export function deleteMobile(data) {
  return request({
    url: '/vue-element-admin/renovation/mobile/delete',
    method: 'post',
    data
  })
}

export function fetchPcList(query) {
  return request({
    url: '/vue-element-admin/renovation/pc/list',
    method: 'get',
    params: query
  })
}

export function createPc(data) {
  return request({
    url: '/vue-element-admin/renovation/pc/create',
    method: 'post',
    data
  })
}

export function updatePc(data) {
  return request({
    url: '/vue-element-admin/renovation/pc/update',
    method: 'post',
    data
  })
}

export function deletePc(data) {
  return request({
    url: '/vue-element-admin/renovation/pc/delete',
    method: 'post',
    data
  })
}
