// Pseudo Code Steps for the Project:
//Step 1: Fetch Country data using .then() 
//from the API https://themealdb.com/
// a) Search by country cuisine ()
// b) Search for actual recipe instruction, youtube video

function fetchData(country, mealId) {
// write code here
  removeCountry()
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  axios.get(url, url2)
    .then((res) => {
      // console.log(res.data.meals[0])
      const countryData = res.data.meals[0]
      const mealIdData = res.data.meals[0]
      showCountryData(countryData, mealIdData)
      return countryData
      return mealIdData
    })
    .catch((error) => {
    console.error(error)
  })
}
// fetchData('canadian')

function showCountryData(data) {
  // console.log(data.strMealThumb)
  // Step 2.
// strMeal
// strMealThumb
// idMeal
//Step 2. Create dynamic HTML for SEARCH BY AREA 
  let countryElements = `
  <h1>${data.strMeal}</h1>
  <img src="${data.strMealThumb}">
  <h3>${data.idMeal}</h3>
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


   






// Step 2. // Make a request and (convert response to dropdown menu) render data on the page... 
// for SEARCH BY AREA "http://www.themealdb.com/api/json/v1/1/list.php?a=list"
// WIP
// for SEARCH BY RANDOM "www.themealdb.com/api/json/v1/1/random.php";
//http://www.themealdb.com/api/json/v1/1/randomselection.php
// const get_meal_btn = document.getElementById('get_meal');
// ONE OF THE OPTIONS:
// const meal_container = document.getElementById('meal');
//get_meal_btn.addEventListener('click', () => {
//	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//  .then(res => res.json())
// .then(res => {
//     createMeal(res.meals[0]);
//   })
//   .catch(e => {
//     console.warn(e);
//   });
// });


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


