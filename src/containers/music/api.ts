import { fetchGetTemplate } from "../../api"

/** API�����������Ă����܂� */
export const DOG_API_BASE = "https://images.dog.ceo/breeds/mexicanhairless/"


/** �C�x���g�Q���҂��擾����API */
export const requestFetchMusicAlbum = async () => {
  const url = "https://dog.ceo/api/breeds/image/random"
  // const res = await fetchGetTemplate(url)
  const res = await fetch(url)
  console.log(res)
  return res
}