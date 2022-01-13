import axios from "axios"

// const API_KEY = 'c25cf07a3a233ce462ab0010066ac6eb'
// const SHARED_SECRET = 'd67d505f94dfbc4facab580c9a7064cd'
// const BASIC_URL = 'http://ws.audioscrobbler.com/2.0'

// interface IYdMusic {
//     getMusicBySearch(query: string, type:string, page:string)
// }

export const getMusic = {
    async getMusicByQuery(query:string, type:string, page:string) {
        const { data } = await axios.get(`music.yandex.ru/fragment/search?text=${query}&type=${type}&page=${page}`)
        return data;
    }    
}