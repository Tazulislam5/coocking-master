const searchMeal = () =>{
    const searchName = document.getElementById('input').value;
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meal =>{
    const mealContainer = document.getElementById('mealContainer');
  meal.forEach(mealItem => {
    //    console.log(mealItem);
     const mealDiv = document.createElement('div');
     mealDiv.className = 'meal';
     mealDiv.innerHTML = `
     <img src="${mealItem.strMealThumb}">
     `
     mealContainer.appendChild(mealDiv);

  });
}

 

displayIngredients = id =>{
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
  fetch(url)
  .then(res = res.json())
  .then(data => console.log(data))
}




 
