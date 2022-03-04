const container = document.getElementById("container");

const fetchList = async () => {
    return await fetch("https://www.reddit.com/subreddits/popular.json")
    .then((result) => {return result.json()})
    .then((data) => {
        return showPosts(data.data.children)
    })
}

const getPostItem = (item, element) => {

    if(item.data.header_title !== null && item.data.mobile_banner_image !== null){
        const post = document.createElement("div")
        post.className = "col mb-4"
        const card = document.createElement("div")
        card.className = "card"
        const body = document.createElement("div")
        body.className ="card-body"
        const title = document.createElement("h6")
        title.className = "card-title text-uppercase"
        title.innerHTML = item.data.header_title
        const line = document.createElement("hr")
        const image = document.createElement("img")
        image.src = item.data.mobile_banner_image
        const url = document.createElement("a")
        url.href = `https://www.reddit.com${item.data.url}`
        url.innerHTML = item.data.url

        card.appendChild(body)
        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(line)
        card.appendChild(url)
        post.appendChild(card)

        element.appendChild(post)
    }
}

const showPosts = (list = []) => {
    const postsContainer = document.createElement("div")
    postsContainer.className = "row"
    list.map((item) => {
        getPostItem(item, postsContainer)
    })
    return postsContainer
}

fetchList()
.then((result) => {
    container.appendChild(
        result
    )
})