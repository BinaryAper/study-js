class ApiService
{
    constructor(baseUrl)
    {
        this.url = baseUrl
    }

    async createPost(post)
    {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'POST',
                body: JSON.stringify(post)
            })
            const response = await fetch(request)

            return await response.json()
        } catch (e) {
            console.error(e)
        }

    }

    async fetchPosts()
    {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'get'
            })

            const response = await fetch(request)

            return await response.json()
        } catch (e) {

        }
    }
}

export const apiService = new ApiService('https://someshit-at-kyiv-default-rtdb.firebaseio.com')