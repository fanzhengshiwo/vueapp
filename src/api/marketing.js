import request from '@/utils/request'

export function fetchGroup(query) {
  return request({
    url: '/vue-element-admin/marketing/group/list',
    method: 'get',
    params: query
  })
}

export function createGroup(data) {
  return request({
    url: '/vue-element-admin/marketing/group/create',
    method: 'post',
    data
  })
}

export function updateGroup(data) {
  return request({
    url: '/vue-element-admin/marketing/group/update',
    method: 'post',
    data
  })
}

export function fetchFlashsale(query) {
  return request({
    url: '/vue-element-admin/marketing/flashsale/list',
    method: 'get',
    params: query
  })
}

export function createFlashsale(data) {
  return request({
    url: '/vue-element-admin/marketing/flashsale/create',
    method: 'post',
    data
  })
}

export function updateFlashsale(data) {
  return request({
    url: '/vue-element-admin/marketing/flashsale/update',
    method: 'post',
    data
  })
}

export function fetchCoupon(query) {
  return request({
    url: '/vue-element-admin/marketing/coupon/list',
    method: 'get',
    params: query
  })
}

export function createCoupon(data) {
  return request({
    url: '/vue-element-admin/marketing/coupon/create',
    method: 'post',
    data
  })
}

export function updateCoupon(data) {
  return request({
    url: '/vue-element-admin/marketing/coupon/update',
    method: 'post',
    data
  })
}
