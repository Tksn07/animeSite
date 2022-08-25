import { fetchGetTemplate } from "../../api"

/** API処理を書いていきます */
export const DOG_API_BASE = "https://images.dog.ceo/breeds/mexicanhairless/"


/** イベント参加者を取得するAPI */
export const requestFetchMusicAlbum = async () => {
  const url = "https://dog.ceo/api/breeds/image/random"
  // const res = await fetchGetTemplate(url)
  const res = await fetch(url)
  console.log(res)
  return res
}