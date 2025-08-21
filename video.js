
// Old System Load data any api........................
// const loadCategories = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then(res => res.json())
//         .then(data => displayCategories(data.categories))
// }



const loadCategories = async () => {
   const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   const data = await res.json()
   displayCategories(data.categories)

}




const displayCategories = async (data) => {
    const categoryContainer = document.getElementById('category-container')
    categoryContainer.innerHTML = '' // Clear previous content
  data.forEach(category => {
   const button = document.createElement('button')
    button.classList.add('btn', 'btn-error' , 'rounded-6', 'px-4', 'py-2')
    button.innerText = category.category;
    categoryContainer.appendChild(button)
  })
}


// ........Load videos...............................
const loadVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json()
    displayVideos(data.videos)
}

// ............display videos......................

const displayVideos = (data) => {
   const videoContainer = document.getElementById('videoContainer')
    videoContainer.innerHTML = '' // Clear previous content
    data.forEach( video => {
        
        const videoCard = document.createElement('div')
        videoCard.classList.add( 'bg-blue-100','mt-6', 'rounded-lg', 'shadow-lg', 'p-4', 'flex', 'flex-col', )
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
               
                 
        `
        videoContainer.appendChild(videoCard)
      
       
    })
}

loadCategories()
loadVideos()