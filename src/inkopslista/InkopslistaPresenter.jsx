import React from "react";

const inArray = [
    {
      "recipe": {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "weightWatcherSmartPoints": 21,
        "gaps": "no",
        "lowFodmap": false,
        "ketogenic": false,
        "whole30": false,
        "servings": 10,
        "sourceUrl": "http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
        "spoonacularSourceUrl": "https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
        "aggregateLikes": 0,
        "creditText": "Epicurious",
        "sourceName": "Epicurious",
        "extendedIngredients": [
          {
            "id": 1022009,
            "aisle": "Ethnic Foods",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
            "name": "ancho chile powder",
            "amount": 1.5,
            "unit": "teaspoons",
            "unitShort": "t",
            "unitLong": "teaspoons",
            "originalString": "1 1/2 teaspoons chipotle chile powder or ancho chile powder",
            "metaInformation": []
          },
          {
            "id": 13926,
            "aisle": "Meat",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-tenderloin.jpg",
            "name": "beef tenderloin",
            "amount": 3.5,
            "unit": "pound",
            "unitShort": "lb",
            "unitLong": "pounds",
            "originalString": "1 3 1/2-pound beef tenderloin",
            "metaInformation": []
          },
          {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
            "name": "black pepper",
            "amount": 0.5,
            "unit": "teaspoon",
            "unitShort": "t",
            "unitLong": "teaspoons",
            "originalString": "1/2 teaspoon freshly ground black pepper",
            "metaInformation": [
              "black",
              "freshly ground"
            ]
          },
          {
            "id": 1082047,
            "aisle": "Spices and Seasonings",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
            "name": "coarse kosher salt",
            "amount": 1,
            "unit": "tablespoon",
            "unitShort": "T",
            "unitLong": "tablespoon",
            "originalString": "1 tablespoon coarse kosher salt",
            "metaInformation": []
          },
          {
            "id": 10019334,
            "aisle": "Baking",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-sugar-dark.jpg",
            "name": "dark brown sugar",
            "amount": 2,
            "unit": "tablespoons",
            "unitShort": "T",
            "unitLong": "tablespoons",
            "originalString": "2 tablespoons dark brown sugar",
            "metaInformation": [
              "dark"
            ]
          },
          {
            "id": 11165,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/cilantro.png",
            "name": "fresh cilantro",
            "amount": 2,
            "unit": "cups",
            "unitShort": "c",
            "unitLong": "cups",
            "originalString": "2 cups (packed) stemmed fresh cilantro",
            "metaInformation": [
              "fresh",
              "packed",
              "stemmed",
              "()"
            ]
          },
          {
            "id": 2064,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg",
            "name": "fresh mint",
            "amount": 1,
            "unit": "cup",
            "unitShort": "c",
            "unitLong": "cup",
            "originalString": "1 cup (packed) stemmed fresh mint",
            "metaInformation": [
              "fresh",
              "packed",
              "stemmed",
              "()"
            ]
          },
          {
            "id": 11297,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg",
            "name": "fresh parsley",
            "amount": 3,
            "unit": "cups",
            "unitShort": "c",
            "unitLong": "cups",
            "originalString": "3 cups (packed) stemmed fresh parsley",
            "metaInformation": [
              "fresh",
              "packed",
              "stemmed",
              "()"
            ]
          },
          {
            "id": 11215,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg",
            "name": "garlic cloves",
            "amount": 3,
            "unit": "",
            "unitShort": "",
            "unitLong": "",
            "originalString": "3 garlic cloves, peeled",
            "metaInformation": [
              "peeled"
            ]
          },
          {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg",
            "name": "ground pepper",
            "amount": 1,
            "unit": "teaspoon",
            "unitShort": "t",
            "unitLong": "teaspoon",
            "originalString": "1 teaspoon ground black pepper",
            "metaInformation": [
              "black"
            ]
          },
          {
            "id": 9152,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
            "name": "lemon juice",
            "amount": 3,
            "unit": "tablespoons",
            "unitShort": "T",
            "unitLong": "tablespoons",
            "originalString": "3 tablespoons fresh lemon juice",
            "metaInformation": [
              "fresh"
            ]
          },
          {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
            "name": "olive oil",
            "amount": 0.75,
            "unit": "cup",
            "unitShort": "c",
            "unitLong": "cups",
            "originalString": "3/4 cup olive oil",
            "metaInformation": []
          },
          {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
            "name": "olive oil",
            "amount": 2,
            "unit": "tablespoons",
            "unitShort": "T",
            "unitLong": "tablespoons",
            "originalString": "2 tablespoons olive oil",
            "metaInformation": []
          },
          {
            "id": 11821,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/red-bell-pepper.png",
            "name": "red pepper",
            "amount": 0.5,
            "unit": "teaspoon",
            "unitShort": "t",
            "unitLong": "teaspoons",
            "originalString": "1/2 teaspoon dried crushed red pepper",
            "metaInformation": [
              "dried",
              "red",
              "crushed"
            ]
          },
          {
            "id": 1022068,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg",
            "name": "red wine vinegar",
            "amount": 3,
            "unit": "tablespoons",
            "unitShort": "T",
            "unitLong": "tablespoons",
            "originalString": "3 tablespoons Sherry wine vinegar or red wine vinegar",
            "metaInformation": [
              "red"
            ]
          },
          {
            "id": 1012047,
            "aisle": "Spices and Seasonings",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
            "name": "sea salt",
            "amount": 1,
            "unit": "teaspoon",
            "unitShort": "t",
            "unitLong": "teaspoon",
            "originalString": "1 teaspoon fine sea salt",
            "metaInformation": [
              "fine"
            ]
          },
          {
            "id": 11677,
            "aisle": "Produce",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg",
            "name": "shallots",
            "amount": 2,
            "unit": "",
            "unitShort": "",
            "unitLong": "",
            "originalString": "2 medium shallots, peeled, quartered",
            "metaInformation": [
              "medium",
              "peeled",
              "quartered"
            ]
          },
          {
            "id": 1002028,
            "aisle": "Spices and Seasonings",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg",
            "name": "sweet paprika",
            "amount": 1,
            "unit": "tablespoon",
            "unitShort": "T",
            "unitLong": "tablespoon",
            "originalString": "1 tablespoon sweet smoked paprika*",
            "metaInformation": [
              "smoked"
            ]
          }
        ],
        "id": 156992,
        "title": "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
        "readyInMinutes": 45,
        "image": "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg",
        "imageType": "jpg",
        "instructions": "PreparationFor spice rub:                                        Combine all ingredients in small bowl.                                                                            Do ahead: Can be made 2 days ahead. Store airtight at room temperature.                                    For chimichurri sauce:                                        Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition.                                                                            Do ahead: Can be made 3 hours ahead. Cover; chill.                                    For beef tenderloin:                                        Let beef stand at room temperature 1 hour.                                                                            Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce.                                                                            *Available at specialty foods stores and from tienda.com."
      },
      "portions": 6
    }
  ]

function outObj(name, amount, unit){
    return {
        name: name,
        amount: amount,
        unit: unit
    };
}

const shopListObject = () => {
    let outArray;
    for(let i = 0; i < inArray.length; i++){
        for(let j = 0; inArray[i].extendedIngredients.length; j++){
            for(let k = 0; outArray.length; k++){
                addAmount = (inArray[i].extendedIngredients[j].amount * (inArray[i].portions / inArray[i].servings));
                if(outArray[k].name == inArray[i].extendedIngredients[j].name){
                    outArray[k].amount += addAmount
                }
                else{
                    outArray.push(
                        outObj(
                            inArray[i].extendedIngredients[j].name,
                            addAmount,
                            inArray[i].extendedIngredients[j].unitShort
                        )
                    )
                }
            }
        }
    }
    return outArray;
}

const shopListObject1 = () => {
    let outArray;
    for(let i = 0; i < inArray.length; i++){
        for(let j = 0; inArray[i].extendedIngredients.length; j++){
            addAmount = (inArray[i].extendedIngredients[j].amount * (inArray[i].portions / inArray[i].servings));
            if(outArray.includes(inArray[i].extendedIngredients[j].name)){
                outArray[k].amount += addAmount
            }
            else{
                outArray.push(
                    outObj(
                        inArray[i].extendedIngredients[j].name,
                        addAmount,
                        inArray[i].extendedIngredients[j].unitShort
                    )
                )
            }
        }
    }
    return outArray;
}

export default shopListObject;

