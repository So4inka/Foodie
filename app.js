// Pseudo Code Steps for the Project:
//Step 1: Fetch Country data from the API https://themealdb.com/
// a) Search by country cuisine ()
// b) Search for actual recipe instruction, youtube video

const fetchData = async (country) => {
  removeRecipe()
  try {
    const url = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    const mealsArr = url.data.meals
    for (let i = 0; i < 5; i++) {
      const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsArr[i].idMeal}`)
      const mealRecipe = meal.data.meals[0]
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
  <h1 class="meal-name">${meals.strMeal}</h1>
  <img class="meal-image" src="${meals.strMealThumb}">
  <h2 class="meal-instructions">Instructions:</h2>
  <h4 class="instructions">${meals.strInstructions}</h4>  
  <a  class="channel" href="${meals.strYoutube}"> Watch it on Youtube! </a>
  `
    document.querySelector('#recipe-data').insertAdjacentHTML('beforeend', mealElements)
  }
  const form = document.querySelector('#recipe-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const textInput = document.querySelector
      ('#recipe-search')
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




  