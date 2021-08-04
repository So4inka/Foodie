// Pseudo Code Steps for the Project:
//Step 1: Fetch Country data using .then() 
//from the API https://themealdb.com/
// a) Search by country cuisine ()

function fetchData(country) {

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  axios.get(url)
    .then((res) => {
      // console.log(res.data.meals[0])
      const countryData = res.data.meals[0]
      showCountryData(countryData)
      return countryData 
    })
    .catch((error) => {
    console.error(error)
  })
}
fetchData('canadian')

function showCountryData(data) {
  // console.log(data.strMealThumb)
  // Step 2.
//strMeal
//strMealThumb
//Step 2. Create dynamic HTML for SEARCH BY AREA 
  let countryElements = `
  <h1>${data.strMeal}</h1>
  <img src="${data.strMealThumb}">
  `
  // console.log(countryElements)
// Step 4. Append country Data
 document.querySelector('#country-data').insertAdjacentHTML('beforeend', countryElements)
}


   






// Step 2. // Make a request and (convert response to dropdown menu) render data on the page... 
// for SEARCH BY AREA "http://www.themealdb.com/api/json/v1/1/list.php?a=list"
// for SEARCH BY RANDOM "www.themealdb.com/api/json/v1/1/random.php";
//http://www.themealdb.com/api/json/v1/1/randomselection.php
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


