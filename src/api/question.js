import request from '@/utils/request'

export function fetchQuestion(query) {
  return request({
    url: '/vue-element-admin/tool/question/list',
    method: 'get',
    params: query
  })
}

export function createQuestion(data) {
  return request({
    url: '/vue-element-admin/tool/question/create',
    method: 'post',
    data
  })
}

export function updateQuestion(data) {
  return request({
    url: '/vue-element-admin/tool/question/update',
    method: 'post',
    data
  })
}

export function deleteQuestion(data) {
  return request({
    url: '/vue-element-admin/tool/question/update',
    method: 'post',
    data
  })
}
