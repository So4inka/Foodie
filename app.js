// Pseudo Code Steps for the Project:
//Step 1: Fetch Country data using .then() 
//from the API https://themealdb.com/
// a) Search by country cuisine ()
// b) Search for actual recipe instruction, youtube video
const fetchData = async (country) => {
  try {
    const mealSearch = document.querySelector("#country-search").value
    const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    console.log(data.data.meals[0])
    const mealId = data.data.meals[0].idMeal
    console.log(mealId)
    const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    console.log(meal)
    const mealRecipe = meal.data.meals[0].strInstructions
    console.log(mealRecipe)
  }
  catch (error) {
    console.error(error)
  }
}
fetchData("canadian")




// function fetchData(country) {
// // write code here
//   removeCountry()
//   const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
//   // const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//   axios.get(url)
//     .then((res) => {
//       console.log(res.data.meals[0])
//       const countryData = res.data.meals[0]
//       // const mealIdData = res.data.meals[0]
//       // showCountryData(countryData, mealIdData)
//       return countryData
//       // return mealIdData
//     })
//     .catch((error) => {
//     console.error(error)
//   })
// }
// fetchData('canadian')



function showCountryData(data) {
  // console.log(data.strMealThumb)
  // Step 2.
// strMeal
// strMealThumb
// idMeal
// Step 2. Create dynamic HTML for SEARCH BY AREA 
  let countryElements = `
  <h1>${data.strMeal}</h1>
  <img src="${data.strMealThumb}">
  // <h3>${data.idMeal}</h3>
  `
  document.querySelector('#country-data').insertAdjacentHTML('beforeend', countryElements)
}
  // console.log(countryElements)
// Step 4. Dynamicly search county using HHTNL form with eventHadler
const form = document.querySelector('#country-form')
//  console.log(form)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const textInput = document.querySelector
    ('#country-search')
  console.log(textInput.value)
  fetchData(textInput.value)
})
// Step 5. Remove previous country data
// write  code here
// call that function
function removeCountry() {
  const removeElement = document.querySelector('#country-data')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}


   


// Do Steps from 1-6 for SEARCH BY RANDOM "www.themealdb.com/api/json/v1/1/random.php";

// function fetchRandom(random) {
//   // write code here
//     removeRandom()
//     const url = `https://www.themealdb.com/api/json/v1/1/${random}.php`
//     axios.get(url)
//       .then((res) => {
//         console.log(res.data.meals[0])
//         const randomData = res.data.meals[0]
        
//         return randomData
        
//       })
//       .catch((error) => {
//       console.error(error)
//     })
//   }
//   fetchRandom('random')
// // Steps 2-6

// function showRandomData(data) {
  
// strMeal
// strMealThumb
// strCategory
// strArea
// strInstructions:
// strYoutube:
// strIngredient:
// strMeasure: 
// Step 2. Create dynamic HTML for SEARCH RANDOM 
//   let randomElements = `
//   <h1>${data.strMeal}</h1>
//   <img src="${data.strMealThumb}">
//   <h2>${data.strInstructions}</h2>
//   <h3>${data.strIngredient}</h3>
//   <h3>${data.strMeasure}</h3>
//   <p>${data.strYoutube}</p>
//   `
//   document.querySelector('#random-data').insertAdjacentHTML('beforeend', randomElements)
// }
//   // console.log(randomElements)
// // Step 4. Dynamicly search county using HTML form with eventHadler
// const form = document.querySelector('#random-form')
// //  console.log(form)
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const textInput = document.querySelector
//     ('#random-search')
//   console.log(textInput.value)
//   fetchData(textInput.value)
// })
// Step 5. Remove previous random data
// write  code here
// call that function
function removeRandom() {
  const removeElement = document.querySelector('#random-data')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}


   






// for SEARCH BY RECIPE NAME
//// Step 3: Create dynamic HTML
// create img for each search result...
// Step 4: Append  Recipe Data
// Step 5: Dynamically search recipes using HTML form with eventHandler
// Step 6: Remove previous search data
 // Make sure to call this function
 
// Search by county cuisine - total 32 counties & each country meals...
// Do the same steps for search random recipes
// Do the same steps for search by name of the recipe


