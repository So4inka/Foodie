# Project Name

Gourmie

## Project Link

[ Click here to view the website ](https://so4inka.github.io/Foodie_Project/)

```jason
"meals": [
        {
            "idMeal": "52946",
            "strMeal": "Kung Po Prawns",
            "strDrinkAlternate": null,
            "strCategory": "Seafood",
            "strArea": "Chinese",
            "strInstructions": "Mix the cornflour and 1 tbsp soy sauce, toss in the prawns and set aside for 10 mins. Stir the vinegar, remaining soy sauce, tomato purée, sugar and 2 tbsp water together to make a sauce.\r\n\r\nWhen you’re ready to cook, heat a large frying pan or wok until very hot, then add 1 tbsp oil. Fry the prawns until they are golden in places and have opened out– then tip them out of the pan.\r\n\r\nHeat the remaining oil and add the peanuts, chillies and water chestnuts. Stir-fry for 2 mins or until the peanuts start to colour, then add the ginger and garlic and fry for 1 more min. Tip in the prawns and sauce and simmer for 2 mins until thickened slightly. Serve with rice.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1525873040.jpg",
            "strTags": "BBQ",
            "strYoutube": "https://www.youtube.com/watch?v=ysiuZm9FIxs",
            "strIngredient1": "Prawns",
            "strIngredient2": "Soy Sauce",
```

## Project Description

Gourmie is a website that allows you to search for country quisine and make your recipe from scratch!

## API and Data Sample

[The Meal DB](https://themealdb.com/)

```json
{
    "meals": [
        {
            "strMeal": "Roast fennel and aubergine paella",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/1520081754.jpg",
            "idMeal": "52942"
        },
        {
            "strMeal": "Seafood fideuà",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
            "idMeal": "52836"
        },
```

## Wireframes

![alt text](https://i.imgur.com/xuophMM.png?1 "Wireframe")

#### MVP

- Create a website using HTML/ CSS & Javascript
- Create a beautifully designed webpage
- Render data on page using 3rd party API
- User will see food recipe & image
- User will be able to do Search by cuisine
- Website will maintain responsive design

#### PostMVP

- Add second type of image - representing the country of the selected cuisine
- Use local storage to save user favorites
- Add Random Search

## Project Schedule

| Day      | Deliverable                                      | Status             |
| -------- | ------------------------------------------------ | ------------------ |
| August 2 | Wireframes / Priority Matrix / Timeframes        | Complete           |
| August 3 | Core Application Structure (HTML, CSS)Pseudocode | Complete           |
| August 4 | Actual code / Initial Clickable Model            | Complete           |
| August 5 | Check list for MVP / Add post MVP                | Partially complete |
| August 6 | Presentations                                    | Incomplete         |

## Priority Matrix

![alt text](https://i.imgur.com/gBMfUSA.png?1 "Priority Matrix")

## Timeframes

| Component                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Working with API                           |    H     |      3hrs      |     3hrs      |    3hrs     |
| HTML Structure                             |    H     |      2hrs      |     2hrs      |    2hrs     |
| Adding fonts & background colors           |    H     |      3hrs      |     3hrs      |    3hrs     |
| Pseudo code                                |    H     |      2hrs      |     2hrs      |    2hrs     |
| Actual code                                |    H     |      3hrs      |     3hrs      |    3hrs     |
| Adding form                                |    H     |      2hrs      |     2hrs      |    2hrs     |
| Async call for mealId & associated country |    H     |      3hrs      |     3hrs      |    3hrs     |
| Appending data to the page                 |    H     |      2hrs      |     3hrs      |    3hrs     |
| Adding Eventlist                           |    H     |      3hrs      |     3hrs      |    3hrs     |
| Removing previous searcg data              |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS styling Page                           |    H     |      3hrs      |     3hrs      |    3hrs     |
| Adding media query                         |    H     |      1hrs      |     2hrs      |    2hrs     |
| Adding flexbox                             |    H     |      1hrs      |     1hrs      |    1hrs     |
| Check MVP/ Fixing                          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Post MVP                                   |    H     |      3hrs      |     3hrs      |    3hrs     |
| Total                                      |    H     |     37hrs      |     38hrs     |    38hrs    |

## Code Snippet

```
 const mealsArr = url.data.meals
    for (let i = 0; i < 3; i++) {
      const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsArr[i].idMeal}`)
      const mealRecipe = meal.data.meals[0]
}
```

## Change Log

Used only one search
didn't finish post MVP
