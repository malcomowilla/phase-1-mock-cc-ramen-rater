// write your code here
// write your code here
document.addEventListener('DOMContentLoaded',() => {
fetch('http://localhost:3000/ramens')
.then((response) => response.json())
.then(data => {
   console.log(data)
  for(item of data){
    //console.log(item.image)
    const div =document.getElementById('ramen-menu')
   const img =document.createElement('img')
    img.src=`${item.image}`
    
    const mealName =document.querySelector('#ramen-detail .name')
    const mealRating =document.querySelector('#rating-display')
    const restaurantName =document.querySelector('.restaurant')
    img.addEventListener('click',() =>{   
        mealName.textContent=`${item.name}`
        mealRating.textContent = `${item.rating}`
        restaurantName.textContent =`${item.restaurant}`
      })
      div.appendChild(img)
  }

})



})
