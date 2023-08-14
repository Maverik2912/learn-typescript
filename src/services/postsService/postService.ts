import {PostType} from "../../components";
import {baseURL, urls} from "../../constants/urls";

const postService = {
    getAll: async (): Promise<PostType[]> => {
        const response = await fetch(`${baseURL}${urls.posts}`)
        return response.json();
    }
}

export {
    postService
}