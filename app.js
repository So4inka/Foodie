// Pseudo Code Steps for the Project:
//Step 1: Fetch Country data using .then() 
//from the API https://themealdb.com/
// a) Search by country cuisine ()
// b) Search for actual recipe instruction, youtube video

const fetchData = async (country) => {
  removeRecipe()
  try {
    const url = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    // const mealId = url.data.meals[0].idMeal
    console.log(url.data.meals)
    const mealsArr = url.data.meals
    for (let i = 0; i < 3; i++) {
      const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsArr[i].idMeal}`)
      const mealRecipe = meal.data.meals[0]
      console.log(mealRecipe)
      showMealRecipe(mealRecipe)
      
    }
      
  }
  catch (error) {
    console.error(error)
  }
}

// Step 2. Create dynamic HTML for SEARCH BY AREA
// Step 3. Dynamicly search county using HHTNL form with eventHadler 
// Step 4. Append data

function showMealRecipe(meals) {
  // strMeal
  // strMealThumb
  // idMeal etc...
  
    let mealElements = `
  <h1>${meals.strMeal}</h1>
  <img src="${meals.strMealThumb}">
  <h2>Instructions:</h2>
  <h4>${meals.strInstructions}</h4>  
  <a href="${meals.strYoutube}"> Watch it on Youtube! </a>
  `
    document.querySelector('#recipe-data').insertAdjacentHTML('beforeend', mealElements)
  }
  const form = document.querySelector('#recipe-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const textInput = document.querySelector
      ('#recipe-search')
    console.log(textInput.value)
    fetchData(textInput.value)
  })

// Step 5. Remove previous country data
// write  code here & call that function after
function removeRecipe() {
  const removeElement = document.querySelector('#recipe-data')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

// Do Steps from 1-6 for SEARCH BY RANDOM "www.themealdb.com/api/json/v1/1/random.php";


  // write code here
    // removeRandom()
    
  
// strMeal
// strMealThumb
// strCategory
// strArea
// strInstructions:
// strYoutube:
// strIngredient:
// strMeasure: 
// Step 2. Create dynamic HTML for SEARCH RANDOM 
 
  // console.log(randomElements)
// Step 4. Dynamicly search county using HTML form with eventHadler

// Step 5. Remove previous random data
// write  code here
// call that function








// for SEARCH BY RECIPE NAME
//// Step 3: Create dynamic HTML
// create img for each search result...
// Step 4: Append  Recipe Data
// Step 5: Dynamically search recipes using HTML form with eventHandler
// Step 6: Remove previous search data
 // Make sure to call this function
 
// Search by county cuisine - total 32 counties & each country meals...
// Do the same steps for search random recipes
// Do the same steps for search by name of the 