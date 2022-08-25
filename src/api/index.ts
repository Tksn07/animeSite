// import { camelizeKeys } from 'humps'
// // import utilities
// import deserializer from '../utilities/deserializer'
// import { getCSRFToken } from '../utilities/html/getSelectorValue'
// // import error message
// import { COMMON_ERROR_MESSAGE } from '../constants/ErrorMessages'
// import constants

import { Deserializer, DeserializerOptions } from 'jsonapi-serializer'

const deserializer = (
  resJson: string,
  keyCase: DeserializerOptions['keyForAttribute'] = 'camelCase'
) => new Deserializer({ keyForAttribute: keyCase }).deserialize(resJson)


const POST_HEADERS_ACCEPT = 'application/json'
const POST_HEADERS_CONTENT_TYPE = 'application/x-www-form-urlencoded; charset=utf-8'

export const POST_HEADERS = {
  Accept: POST_HEADERS_ACCEPT,
  'Content-Type': POST_HEADERS_CONTENT_TYPE,
  // 'X-CSRF-Token': getCSRFToken(),
}

// export const POST_FORM_DATA_HEADERS = {
//   Accept: POST_HEADERS_ACCEPT,
//   'X-CSRF-Token': getCSRFToken(),
// }

export const fetchGetTemplate = async (
  url: string,
  keyCase: 'camelCase' | 'snake_case' = 'camelCase',
  isJsonApi = true
) => {
  try {
    const response = await fetch(url, { credentials: 'same-origin' })
    if (!response.ok) {
      throw Error(String(response.status))
    }
    const resJson = await response.json()

    if (isJsonApi) {
      const resDeserializer = await deserializer(resJson, keyCase)
      return { payload: resDeserializer }
    }

    return { payload: resJson }
  } catch {
    return { error: "�ǂ�ǂ�" }
  }
}

// Meta�f�[�^�𓯎��Ɏ擾����ꍇ
// export const fetchGetTemplateWithMetaData = async (url: string, key: string) => {
//   try {
//     const response = await fetch(url, { credentials: 'same-origin' })
//     if (!response.ok) {
//       throw Error(String(response.status))
//     }
//     const resJson = await response.json()
//     const camelizeMetaData = camelizeKeys(resJson.meta)

//     const resDeserializer = await deserializer(resJson)
//     const payload = {
//       ...camelizeMetaData,
//       [key]: resDeserializer,
//     }
//     return { payload }
//   } catch {
//     return { error: COMMON_ERROR_MESSAGE.PAGE_RELOAD }
//   }
// }

// export const fetchPostTemplate = async (
//   url: string,
//   body: string | FormData,
//   isJsonApi = true,
//   headers: HeadersInit = POST_HEADERS
// ) => {
//   try {
//     const response = await fetch(url, {
//       credentials: 'same-origin',
//       method: 'POST',
//       headers,
//       body,
//     })
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     const resJson = await response.json()
//     if (isJsonApi) {
//       const resDeserializer = await deserializer(resJson)
//       return { payload: resDeserializer }
//     }

//     return { payload: resJson }
//   } catch (error) {
//     return { error: COMMON_ERROR_MESSAGE.PAGE_RELOAD }
//   }
// }

// export const fetchPatchTemplate = async (url: string, body: string, isJsonApi = true) => {
//   try {
//     const response = await fetch(url, {
//       credentials: 'same-origin',
//       method: 'PATCH',
//       headers: POST_HEADERS,
//       body,
//     })
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     const resJson = await response.json()
//     if (isJsonApi) {
//       const resDeserializer = await deserializer(resJson)
//       return { payload: resDeserializer }
//     }
//     return { payload: resJson }
//   } catch (error) {
//     return { error: COMMON_ERROR_MESSAGE.PAGE_RELOAD }
//   }
// }

// export const fetchDeleteTemplate = async (url: string) => {
//   try {
//     const response = await fetch(url, {
//       credentials: 'same-origin',
//       method: 'DELETE',
//       headers: POST_HEADERS,
//     })
//     if (!response.ok) {
//       throw Error(response.statusText)
//     }
//     return { payload: 'success' }
//   } catch (error) {
//     return { error: COMMON_ERROR_MESSAGE.PAGE_RELOAD }
//   }
// }