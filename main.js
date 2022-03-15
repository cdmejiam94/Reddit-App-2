const container = document.getElementById("container");

const fetchList = async () => {
    fetch("https://www.reddit.com/subreddits/popular.json")
    .then((result) =>  result.json())
    .then((data) =>  data.data.children.map((item) => getPostItem(item.data)))
}

const getPostItem = ({header_title, mobile_banner_image, url}) => {
    if(!header_title || !mobile_banner_image){
        return
    }
    const post = document.createElement("div")
    post.className = "col-12 mb-4"
    
    const postInnertHTML = `
    <div  class="card" > 
        <div class="card-body">
            <h6 class="card-title text-uppercase">${header_title} </h6>
            <img class="mw-100" src=${mobile_banner_image} alt="">
            </hr>
            <a class="d-block" href=https://www.reddit.com${url}>${url} </a>
        </div>
    </div>
    `
    post.innerHTML=postInnertHTML
    container.appendChild(post)
}

fetchList()