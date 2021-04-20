import request from '@/utils/request'

export function fetchTestpaper(query) {
  return request({
    url: '/vue-element-admin/tool/testpaper/list',
    method: 'get',
    params: query
  })
}

export function readTestpaper(query) {
  return request({
    url: '/vue-element-admin/tool/testpaper/read',
    method: 'get',
    params: query
  })
}

export function createTestpaper(data) {
  return request({
    url: '/vue-element-admin/tool/testpaper/create',
    method: 'post',
    data
  })
}

export function updateTestpaper(data) {
  return request({
    url: '/vue-element-admin/tool/testpaper/update',
    method: 'post',
    data
  })
}

export function deleteTestpaper(data) {
  return request({
    url: '/vue-element-admin/tool/testpaper/update',
    method: 'post',
    data
  })
}

export function fetchUserTest(query) {
  return request({
    url: '/vue-element-admin/tool/user_test/list',
    method: 'get',
    params: query
  })
}

export function updateUserTest(data) {
  return request({
    url: '/vue-element-admin/tool/user_test/update',
    method: 'post',
    data
  })
}

export function deleteUserTest(data) {
  return request({
    url: '/vue-element-admin/tool/user_test/update',
    method: 'post',
    data
  })
}

export function readUserTest(query) {
  return request({
    url: '/vue-element-admin/tool/user_test/read',
    method: 'get',
    params: query
  })
}
