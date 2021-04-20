import request from '@/utils/request'

export function fetchOrder(query) {
  return request({
    url: '/vue-element-admin/order/list',
    method: 'get',
    params: query
  })
}

export function fetchAssets(query) {
  return request({
    url: '/vue-element-admin/pay/assets',
    method: 'get',
    params: query
  })
}

export function fetchPayments(query) {
  return request({
    url: '/vue-element-admin/pay/payments',
    method: 'get',
    params: query
  })
}

export function Cashout(query) {
  return request({
    url: '/vue-element-admin/assets/cashout',
    method: 'post',
    params: query
  })
}

export function deleteOrder(data) {
  return request({
    url: '/vue-element-admin/order/delete',
    method: 'post',
    data
  })
}

export function createPayment(data) {
  return request({
    url: '/vue-element-admin/payment/create',
    method: 'post',
    data
  })
}
export function updatePayment(data) {
  return request({
    url: '/vue-element-admin/payment/update',
    method: 'post',
    data
  })
}
export function deletePayment(data) {
  return request({
    url: '/vue-element-admin/payment/delete',
    method: 'post',
    data
  })
}
