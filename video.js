
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

loadCategories()