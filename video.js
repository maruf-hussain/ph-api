
// Old System Load data any api........................
// const loadCategories = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then(res => res.json())
//         .then(data => displayCategories(data.categories))
// }

// ......time formatting...................
const formatTime = (second) => {
    const hour = Math.floor(second / 3600);
    const minute = Math.floor((second % 3600) / 60);
    const sec = second % 60;
    return `${hour > 0 ? hour + 'hour '  : ''}${minute > 0 ? minute + 'minute '  : ''}${sec}second`;
}

// ........................load Categories...................button................

const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    displayCategories(data.categories)

};
// ..........Load categories end................................................................

// ........Load videos...............................
const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json()
    displayVideos(data.videos)
}


// ........Load category videos...................

const loadcategoryvideo = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    const data = await res.json()
    displayVideos(data.category)
}   




const displayCategories = async (data) => {
    const categoryContainer = document.getElementById('category-container')
    categoryContainer.innerHTML = '' // Clear previous content
    data.forEach(item => {
        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('btn', 'btn-error', 'rounded-6', 'px-4', 'py-2')
        buttonContainer.innerHTML = `
            <button onclick="loadcategoryvideo(${item.category_id})" class="btn">
            ${item.category}
            </button>
            `;
        categoryContainer.appendChild(buttonContainer)
    })
}



// ............display videos......................

const displayVideos = (data) => {
    const videoContainer = document.getElementById('videoContainer')
    videoContainer.innerHTML = '' // Clear previous content


    // no video found .................................................
    if(data.length == 0){
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `<div class="min-h-[200px]  flex flex-col gap-6 justify-center items-center"><img  src="/assets/Icon.png" alt="no video"></div>`
      return;
    }
    else{
        videoContainer.classList.add('grid')
        
    }
        


    data.forEach(video => {
        const videoCard = document.createElement('div')
        videoCard.classList.add('bg-blue-100', 'mt-6', 'rounded-lg', 'shadow-lg', 'p-4', 'flex', 'flex-col',)
        videoCard.innerHTML = `
            <div class="w-full h-64 overflow-hidden rounded mb-4">
                <img class="h-full w-full object-cover" src="${video.thumbnail}" alt="img">
            </div>
            <div><img class="h-10 w-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" alt="img"></div>

             <div class="flex gap-2 mt-2">
                <p class="text-gray-600">${video.authors[0].profile_name}</p>
                ${video.authors[0].verified == true ? `<img class="w-5 object-cover" src="/assets/icons8-verified-48.png" alt="img">` : ''}
            </div>
            <h2 class="font-bold text-2xl py-2 text-red-900">${video.title}</h2>

            <p>${video.description}</p>
            <h2 class="font-bold text-2xl py-2 text-gray-600">Views: ${video.others.views}</h2>

            ${video.others.posted_date?.length == 0 ? '' : ` <p class="font-bold text-xs w-45 bg-black text-2xl p-2 text-yellow-500"> ${formatTime(video.others.posted_date)}</p>`}
                       


               
                 
        `
        videoContainer.appendChild(videoCard)


    })
}

loadCategories()
loadVideos()