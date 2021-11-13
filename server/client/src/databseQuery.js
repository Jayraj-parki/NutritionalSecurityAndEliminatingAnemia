// ---------------add nutrient
const setFoodItems=async ()=>{
    try {
        // e.preventDefault()
        const result = await fetch(("/enter"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                nutrient:"carbohydrate",
                items:[
                    { 
                        title:"Quinoa",
                        path:"carbohydrate/1.png",
                        content:"Cooked quinoa is 21.3% carbs, making it a high-carb food. However, it is also a good source of protein and fiber.",
                        heading:"Quinoa",
                        data:[
                            {
                                info:"Quinoa is a nutritious seed that has become incredibly popular in the natural health community."
                            },
                            {
                                info:"It is classified as a pseudocereal, a seed that is prepared and eaten like a grain."
                            },
                            {
                                info:"Quinoa is rich in many minerals and plant compounds. It has been linked to health benefits including improved blood sugar control."
                            },
                            {
                                info:"It does not contain any gluten, making it a popular alternative to wheat for those on a gluten-free diet."
                            },
                        ],
                        images:[
                            { 
                                name:"Quinoa chilli with avocado & coriander",
                                path:"carbohydrate/dish/quinoa/1.png",
                            },
                            { 
                                name:"Fennel-roasted cauliflower with quinoa",
                                path:"carbohydrate/dish/quinoa/2.png",
                            },
                            { 
                                name:"Halloumi & quinoa fattoush",
                                path:"carbohydrate/dish/quinoa/3.png",
                            },
                            { 
                                name:"Coriander salmon with curried quinoa & pomegranate",
                                path:"carbohydrate/dish/quinoa/4.png",
                            },
                            { 
                                name:"Quinoa salad with eggs & dill",
                                path:"carbohydrate/dish/quinoa/5.png",
                            },
                            { 
                                name:"Quinoa salad with avocado mayo",
                                path:"carbohydrate/dish/quinoa/6.png",
                            },
                            { 
                                name:"South American-style quinoa with fried eggs",
                                path:"carbohydrate/dish/quinoa/7.png",
                            },
                            { 
                                name:"Vegan beetroot & quinoa burgers",
                                path:"carbohydrate/dish/quinoa/8.png",
                            },
                            { 
                                name:"Vegetable tagine with apricot quinoa",
                                path:"carbohydrate/dish/quinoa/9.png",
                            },
                            { 
                                name:"Quinoa-stuffed peppers",
                                path:"carbohydrate/dish/quinoa/10.png",
                            },
                            
                        ]
                    }
                ] 

            })
        })
        // 
        const data = await result.json()
        console.log(data)
        console.log(result)

    } catch (err) {
        console.log("Error in client Registeration")
    }
}



// add carbohydatre nutrient
const setFoodItems=async ()=>{
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                nutrient:"carbohydrate",
                items:[
                    { 
                        title:"Quinoa",
                        path:"carbohydrate/1.png",
                        content:"Cooked quinoa is 21.3% carbs, making it a high-carb food. However, it is also a good source of protein and fiber.",
                        heading:"Quinoa",
                        data:[
                            {
                                info:"Quinoa is a nutritious seed that has become incredibly popular in the natural health community."
                            },
                            {
                                info:"It is classified as a pseudocereal, a seed that is prepared and eaten like a grain."
                            },
                            {
                                info:"Quinoa is rich in many minerals and plant compounds. It has been linked to health benefits including improved blood sugar control."
                            },
                            {
                                info:"It does not contain any gluten, making it a popular alternative to wheat for those on a gluten-free diet."
                            },
                        ],
                        images:[
                            { 
                                name:"Quinoa chilli with avocado & coriander",
                                path:"carbohydrate/dish/quinoa/1.png",
                            },
                            { 
                                name:"Fennel-roasted cauliflower with quinoa",
                                path:"carbohydrate/dish/quinoa/2.png",
                            },
                            { 
                                name:"Halloumi & quinoa fattoush",
                                path:"carbohydrate/dish/quinoa/3.png",
                            },
                            { 
                                name:"Coriander salmon with curried quinoa & pomegranate",
                                path:"carbohydrate/dish/quinoa/4.png",
                            },
                            { 
                                name:"Quinoa salad with eggs & dill",
                                path:"carbohydrate/dish/quinoa/5.png",
                            },
                            { 
                                name:"Quinoa salad with avocado mayo",
                                path:"carbohydrate/dish/quinoa/6.png",
                            },
                            { 
                                name:"South American-style quinoa with fried eggs",
                                path:"carbohydrate/dish/quinoa/7.png",
                            },
                            { 
                                name:"Vegan beetroot & quinoa burgers",
                                path:"carbohydrate/dish/quinoa/8.png",
                            },
                            { 
                                name:"Vegetable tagine with apricot quinoa",
                                path:"carbohydrate/dish/quinoa/9.png",
                            },
                            { 
                                name:"Quinoa-stuffed peppers",
                                path:"carbohydrate/dish/quinoa/10.png",
                            },
                            
                        ]
                    },
                    { 
                        title:"Oats",
                        path:"carbohydrate/2.png",
                        content:"Raw oats contain 66% carbs, nearly 11% of which is fiber. They are particularly high in a powerful soluble fiber called oat beta-glucan.",
                        heading:"Oats",
                        data:[
                            {
                                info:"Oats may be the healthiest whole grain food on the planet."
                            },
                            {
                                info:"They are a great source of many vitamins, minerals and antioxidants."
                            },
                            {
                                info:"Oats are also a relatively good source of protein, containing more than most grains."
                            },
                            {
                                info:"Eating oats may also lower blood sugar levels, especially in people with type 2 diabetes."
                            },
                        ],
                        images:[
                            { 
                                name:"Chai Pomegranate Overnight Oats",
                                path:"carbohydrate/dish/oats/1.png",
                            },
                            { 
                                name:"Chia-Berry Swirl Oat",
                                path:"carbohydrate/dish/oats/2.png",
                            },
                            { 
                                name:"Berry Overnight Oats",
                                path:"carbohydrate/dish/oats/3.png",
                            },
                            { 
                                name:"SunButter Overnight Oats",
                                path:"carbohydrate/dish/oats/4.png",
                            },
                            { 
                                name:"Classic Overnight Oats",
                                path:"carbohydrate/dish/oats/5.png",
                            },
                            { 
                                name:"Almond Butter & Jam Overnight Oats",
                                path:"carbohydrate/dish/oats/6.png",
                            },
                            { 
                                name:"Mango Overnight Oats",
                                path:"carbohydrate/dish/oats/7.png",
                            },
                            { 
                                name:"Maple-Pumpkin Overnight Oats",
                                path:"carbohydrate/dish/oats/8.png",
                            },
                            { 
                                name:"Easy Vegan Overnight Oats",
                                path:"carbohydrate/dish/oats/9.png",
                            },
                            { 
                                name:"Overnight Chia Oats",
                                path:"carbohydrate/dish/oats/10.png",
                            },
                            
                        ]
                    },
                    { 
                        title:"Buckwheat",
                        path:"carbohydrate/3.png",
                        content:"Raw buckwheat contains 71.5% carbs, while cooked buckwheat groats contain about 20% carbs.",
                        heading:"Buckwheat",
                        data:[
                            {
                                info:"Buckwheat is also a pseudocereal."
                            },
                            {
                                info:"Buckwheat is very nutritious, containing both protein and fiber. It also has more minerals and antioxidants than most grains."
                            },
                            {
                                info:"Additionally, it may be particularly beneficial for heart health and blood sugar control, especially in people with diabetes."
                            },
                            {
                                info:"Buckwheat is the main ingredient in soba noodles, which are popular in Japan."
                            },
                        ],
                        images:[
                            { 
                                name:"Buckwheat Cereal with Mushrooms and Onions",
                                path:"carbohydrate/dish/buckwheat/1.png",
                            },
                            { 
                                name:"Buckwheat Granola",
                                path:"carbohydrate/dish/buckwheat/2.png",
                            },
                            { 
                                name:"Buckwheat Pancakes",
                                path:"carbohydrate/dish/buckwheat/3.png",
                            },
                            { 
                                name:"Gluten-Free Blueberry Banana Buckwheat Pancakes",
                                path:"carbohydrate/dish/buckwheat/4.png",
                            },
                            { 
                                name:"Sourdough Buckwheat Pancakes",
                                path:"carbohydrate/dish/buckwheat/5.png",
                            },
                            { 
                                name:"Buckwheat and Bacon Side Dish",
                                path:"carbohydrate/dish/buckwheat/6.png",
                            },
                            { 
                                name:"Buckwheat Waffles",
                                path:"carbohydrate/dish/buckwheat/7.png",
                            },
                            { 
                                name:"Anise Buckwheat Bread",
                                path:"carbohydrate/dish/buckwheat/8.png",
                            },
                            { 
                                name:"Wholesome Buckwheat Crepes",
                                path:"carbohydrate/dish/buckwheat/9.png",
                            },
                            { 
                                name:"Best Buckwheat Pancakes",
                                path:"carbohydrate/dish/buckwheat/10.png",
                            },
                            
                        ]
                    },
                    { 
                        title:"Bananas",
                        path:"carbohydrate/4.png",
                        content:"They are made up of about 23% carbs, either in the form of starches or sugars.",
                        heading:"Bananas",
                        data:[
                            {
                                info:"Bananas are among the world’s most popular fruits."
                            },
                            {
                                info:"Unripe, green bananas are higher in starches, which transform into natural sugars as the bananas ripen, turning yellow in the process."
                            },
                            {
                                info:"Bananas are high in potassium, vitamin B6 and vitamin C. They also contain several beneficial plant compounds."
                            },
                            {
                                info:"Due to their potassium content, bananas may help lower blood pressure and improve heart health."
                            },
                        ],
                        images:[
                            { 
                                name:"Very Banana-y Whole Wheat Banana Bread",
                                path:"carbohydrate/dish/banana/1.png",
                            },
                            { 
                                name:"Banana Banana Strawberry Smoothie",
                                path:"carbohydrate/dish/banana/2.png",
                            },
                            { 
                                name:"Banana Bars",
                                path:"carbohydrate/dish/banana/3.png",
                            },
                            { 
                                name:"Banana Flips",
                                path:"carbohydrate/dish/banana/4.png",
                            },
                            { 
                                name:"Grandma's Banana Bread",
                                path:"carbohydrate/dish/banana/5.png",
                            },
                            { 
                                name:"Sinful Banana Pudding",
                                path:"carbohydrate/dish/banana/6.png",
                            },
                            { 
                                name:"Banana Muffins",
                                path:"carbohydrate/dish/banana/7.png",
                            },
                            { 
                                name:"Hot Banana Salsa",
                                path:"carbohydrate/dish/banana/8.png",
                            },
                            { 
                                name:"Banana Banana Bread",
                                path:"carbohydrate/dish/banana/9.png",
                            },
                            { 
                                name:"Baked Banana Fritters",
                                path:"carbohydrate/dish/banana/10.png",
                            },
                            
                        ]
                    },
                    { 
                        title:"Sweet Potatoes",
                        path:"carbohydrate/5.png",
                        content:"Cooked sweet potatoes contain about 18–21% carbs. This carb content consists of starch, sugar and fiber.",
                        heading:"Sweet Potatoes",
                        data:[
                            {
                                info:"Sweet potatoes are a delicious, nutritious tuber."
                            },
                            {
                                info:"Sweet potatoes are a rich source of provitamin A (from beta-carotene), vitamin C and potassium."
                            },
                            {
                                info:"They are very rich in antioxidants"
                            },
                            {
                                info:"They reduce oxidative damage, lowering the risk of several diseases."
                            },
                        ],
                        images:[
                            { 
                                name:"Silky Sweet Potato Puree",
                                path:"carbohydrate/dish/sweet_potato/1.png",
                            },
                            { 
                                name:"Sweet Sweet Potato Casserole",
                                path:"carbohydrate/dish/sweet_potato/2.png",
                            },
                            { 
                                name:"Delicious Sweet Potato Muffins",
                                path:"carbohydrate/dish/sweet_potato/3.png",
                            },
                            { 
                                name:"Sweet Potato Casserole with Coconut",
                                path:"carbohydrate/dish/sweet_potato/4.png",
                            },
                            { 
                                name:"Sweet Potato Waffles",
                                path:"carbohydrate/dish/sweet_potato/5.png",
                            },
                            { 
                                name:"Roasted Sweet Potato Fries",
                                path:"carbohydrate/dish/sweet_potato/6.png",
                            },
                            { 
                                name:"Zesty Sweet Potato Cheesecake",
                                path:"carbohydrate/dish/sweet_potato/7.png",
                            },
                            { 
                                name:"Sweetest Southern Sweet Potato Pie",
                                path:"carbohydrate/dish/sweet_potato/8.png",
                            },
                            
                            
                        ]
                    },
                    { 
                        title:"Beetroots",
                        path:"carbohydrate/6.png",
                        content:"Raw and cooked beets contain about 8–10% carbs, mainly from sugar and fiber.",
                        heading:"Beetroots",
                        data:[
                            {
                                info:"Beetroots are a purple root vegetable, commonly referred to as beets."
                            },
                            {
                                info:"They are packed with vitamins, minerals, potent antioxidants and plant compounds."
                            },
                            {
                                info:"Beets are also high in inorganic nitrates, which transform into nitric oxide in your body. Nitric oxide lowers blood pressure and may decrease the risk of several diseases."
                            },
                            {
                                info:"Beet juice is also very high in inorganic nitrates and is often used to enhance physical performance during endurance exercises."
                            },
                        ],
                        images:[
                            { 
                                name:"Sweet Beet Smoothie",
                                path:"carbohydrate/dish/beetroot/1.png",
                            },
                            { 
                                name:"Roasted Beet Salad",
                                path:"carbohydrate/dish/beetroot/2.png",
                            },
                            { 
                                name:"Marinated Beet Salad",
                                path:"carbohydrate/dish/beetroot/3.png",
                            },
                            { 
                                name:"Beet Soup",
                                path:"carbohydrate/dish/beetroot/4.png",
                            },
                            { 
                                name:"Easy Beet Greens",
                                path:"carbohydrate/dish/beetroot/5.png",
                            },
                            { 
                                name:"Chocolate Beet Muffins",
                                path:"carbohydrate/dish/beetroot/6.png",
                            },
                            { 
                                name:"Polish Beet Soup",
                                path:"carbohydrate/dish/beetroot/7.png",
                            },
                            { 
                                name:"Beet Pasta",
                                path:"carbohydrate/dish/beetroot/8.png",
                            },
                            { 
                                name:"Beet Summer Salad",
                                path:"carbohydrate/dish/beetroot/9.png",
                            },
                            { 
                                name:"Russian Beet Salad with Sour Cream",
                                path:"carbohydrate/dish/beetroot/10.png",
                            },      
                        ]
                    },
                    { 
                        title:"Oranges",
                        path:"carbohydrate/7.png",
                        content:"They are mainly composed of water and contain 11.8% carbs. Oranges are also a good source of fiber.",
                        heading:"Oranges",
                        data:[
                            {
                                info:"Oranges are among the world’s most popular fruits."
                            },
                            {
                                info:"Oranges are especially rich in vitamin C, potassium and some B vitamins."
                            },
                            {
                                info:"In addition, they contain citric acid as well as several very potent plant compounds and antioxidants."
                            },
                            {
                                info:"Eating oranges may improve heart health and help prevent kidney stones."
                            },
                        ],
                        images:[
                            { 
                                name:"Lemon-Orange Orange Roughy",
                                path:"carbohydrate/dish/orange/1.png",
                            },
                            { 
                                name:"Orange and Fennel Salad",
                                path:"carbohydrate/dish/orange/2.png",
                            },
                            { 
                                name:"Orange Loaf",
                                path:"carbohydrate/dish/orange/3.png",
                            },
                            { 
                                name:"Orange Juice Goji Berries Smoothie",
                                path:"carbohydrate/dish/orange/4.png",
                            },
                            { 
                                name:"Orange Glazed Ham",
                                path:"carbohydrate/dish/orange/5.png",
                            },
                            { 
                                name:"Orange Bread",
                                path:"carbohydrate/dish/orange/6.png",
                            },
                            { 
                                name:"Fresh Orange Juice",
                                path:"carbohydrate/dish/orange/7.png",
                            },
                            { 
                                name:"Spicy Orange Chicken Wing Sauce",
                                path:"carbohydrate/dish/orange/8.png",
                            },     
                        ]
                    },
                    { 
                        title:"Blueberries",
                        path:"carbohydrate/8.png",
                        content:"They consist mostly of water as well as about 14.5% carbs.",
                        heading:"Blueberries",
                        data:[
                            {
                                info:"Blueberries are incredibly delicious."
                            },
                            {
                                info:"They are frequently marketed as a superfood due to their high amounts of plant compounds and antioxidants."
                            },
                            {
                                info:"Blueberries also contain high amounts of many vitamins and minerals, including vitamin C, vitamin K and manganese."
                            },
                            {
                                info:"Studies have shown that blueberries safeguard your body from oxidative damage."
                            },
                        ],
                        images:[
                            { 
                                name:"Blueberry Pie",
                                path:"carbohydrate/dish/blueberry/1.png",
                            },
                            { 
                                name:"Blueberry Flax Pancakes",
                                path:"carbohydrate/dish/blueberry/2.png",
                            },
                            { 
                                name:"Best of the Best Blueberry Muffins",
                                path:"carbohydrate/dish/blueberry/3.png",
                            },
                            { 
                                name:"Blueberry Sauce",
                                path:"carbohydrate/dish/blueberry/4.png",
                            },
                            { 
                                name:"Blueberry Zucchini Bread",
                                path:"carbohydrate/dish/blueberry/5.png",
                            },
                            { 
                                name:"Blueberry Sour Cream Coffee Cake",
                                path:"carbohydrate/dish/blueberry/6.png",
                            },
                            { 
                                name:"Blueberry Cream Muffins",
                                path:"carbohydrate/dish/blueberry/7.png",
                            },
                            { 
                                name:"Blueberry Crisp",
                                path:"carbohydrate/dish/blueberry/8.png",
                            },     
                            { 
                                name:"Blueberry Crumb Bars",
                                path:"carbohydrate/dish/blueberry/9.png",
                            },
                            { 
                                name:"Overnight Blueberry French Toast",
                                path:"carbohydrate/dish/blueberry/10.png",
                            },     
                        ]
                    },
                    { 
                        title:"Grapefruit",
                        path:"carbohydrate/9.png",
                        content:"It contains about 9% carbs and has high amounts of several vitamins, minerals and plant compounds.",
                        heading:"Grapefruit",
                        data:[
                            {
                                info:"Grapefruit is a citrus fruit with a sweet, bitter and sour flavor."
                            },
                            {
                                info:"Eating grapefruit can aid weight loss and reduce insulin resistance "
                            },
                            {
                                info:"Furthermore, eating grapefruit may help prevent kidney stones, lower cholesterol levels and protect against colon cancer "
                            },
                            
                        ],
                        images:[
                            { 
                                name:"Ruby Red Grapefruit Martini",
                                path:"carbohydrate/dish/grapefruit/1.png",
                            },
                            { 
                                name:"Grapefruit Margaritas",
                                path:"carbohydrate/dish/grapefruit/2.png",
                            },
                            { 
                                name:"Cool-Down Grapefruit Smoothie",
                                path:"carbohydrate/dish/grapefruit/3.png",
                            },
                            { 
                                name:"Grapefruit Marmalade",
                                path:"carbohydrate/dish/grapefruit/4.png",
                            },
                            { 
                                name:"Grapefruit Vinaigrette",
                                path:"carbohydrate/dish/grapefruit/5.png",
                            },
                            { 
                                name:"Jennifer's Fennel and Grapefruit Summer Salad",
                                path:"carbohydrate/dish/grapefruit/6.png",
                            },
                            { 
                                name:"Drunken Grapefruit Salad",
                                path:"carbohydrate/dish/grapefruit/7.png",
                            },
                            { 
                                name:"Sparkling Grapefruit Pie",
                                path:"carbohydrate/dish/grapefruit/8.png",
                            },     
                            { 
                                name:"Grapefruit Soda",
                                path:"carbohydrate/dish/grapefruit/9.png",
                            },
                            { 
                                name:"Grapefruit Smoothie",
                                path:"carbohydrate/dish/grapefruit/10.png",
                            },     
                        ]
                    },
                    { 
                        title:"Apples",
                        path:"carbohydrate/10.png",
                        content:"They are available in many colors, sizes and flavors, all of which generally contain 13–15% carbs.",
                        heading:"Apples",
                        data:[
                            {
                                info:"Apples are a popular fruit with a sweet flavor and a distinctive crunchy texture."
                            },
                            {
                                info:"Apples boast many vitamins and minerals, but usually only in small amounts."
                            },
                            {
                                info:"However, they are a decent source of vitamin C, antioxidants and healthy plant compounds."
                            },
                            {
                                info:"Eating apples may benefit health in several ways, such as improving blood sugar control and reducing the risk of heart disease."
                            },
                            
                        ],
                        images:[
                            { 
                                name:"Apple Blackberry Pie",
                                path:"carbohydrate/dish/apple/1.png",
                            },
                            { 
                                name:"Apple Muffins",
                                path:"carbohydrate/dish/apple/2.png",
                            },
                            { 
                                name:"Amish Apple Dumplings",
                                path:"carbohydrate/dish/apple/3.png",
                            },
                            { 
                                name:"Apple Pie",
                                path:"carbohydrate/dish/apple/4.png",
                            },
                            { 
                                name:"Apple Almond Pie",
                                path:"carbohydrate/dish/apple/5.png",
                            },
                            { 
                                name:"Chef John's Easy Apple Pie",
                                path:"carbohydrate/dish/apple/6.png",
                            },
                            { 
                                name:"German Apple Cake",
                                path:"carbohydrate/dish/apple/7.png",
                            },
                            { 
                                name:"Apple Turnovers",
                                path:"carbohydrate/dish/apple/8.png",
                            },     
                            { 
                                name:"Peanut Butter Apple Dip",
                                path:"carbohydrate/dish/apple/9.png",
                            },
                            { 
                                name:"Caramel-Apple Crisp",
                                path:"carbohydrate/dish/apple/10.png",
                            },     
                        ]
                    },
                    { 
                        title:"Kidney-Beans",
                        path:"carbohydrate/11.png",
                        content:"Cooked kidney beans contain 22.8% carbs in the form of starches and fiber. They are also high in protein.",
                        heading:"Kidney-Beans",
                        data:[
                            {
                                info:"Kidney beans are a variety of the common bean. They are part of the legume family."
                            },
                            {
                                info:"Kidney beans are rich in many vitamins, minerals and plant compounds. They’re also rich in antioxidants like anthocyanins and isoflavones."
                            },
                            {
                                info:"Their numerous health benefits include improved blood sugar control and reduced risk of colon cancer."
                            },
                            {
                                info:"However, never eat them raw. Raw or improperly cooked kidney beans are toxic."
                            },
                            
                        ],
                        images:[
                            { 
                                name:"Summer Kidney Bean Salad",
                                path:"carbohydrate/dish/kidneybean/1.png",
                            },
                            { 
                                name:"Vinny's Red Kidney Bean Salad",
                                path:"carbohydrate/dish/kidneybean/2.png",
                            },
                            { 
                                name:"Kidney Bean Hemp Hummus",
                                path:"carbohydrate/dish/kidneybean/3.png",
                            },
                            { 
                                name:"Amy's Kidney Bean Salad",
                                path:"carbohydrate/dish/kidneybean/4.png",
                            },
                            { 
                                name:"Kidney Bean Salad",
                                path:"carbohydrate/dish/kidneybean/5.png",
                            },
                            { 
                                name:"Kidney Beans and Corn",
                                path:"carbohydrate/dish/kidneybean/6.png",
                            },
                            { 
                                name:"Kidney Bean Soup",
                                path:"carbohydrate/dish/kidneybean/7.png",
                            },
                            { 
                                name:"Kidney Bean and Sweet Pickle Salad",
                                path:"carbohydrate/dish/kidneybean/8.png",
                            },     
                            { 
                                name:"Hamburger, Potato, and Kidney Bean Casserole",
                                path:"carbohydrate/dish/kidneybean/9.png",
                            },
                            { 
                                name:"Fasoulia",
                                path:"carbohydrate/dish/kidneybean/10.png",
                            },     
                        ]
                    },
                    { 
                        title:"Chickpeas",
                        path:"carbohydrate/12.png",
                        content:"Cooked chickpeas contain 27.4% carbs, 8% of which are fiber.",
                        heading:"Chickpeas",
                        data:[
                            {
                                info:"Also known as garbanzo beans, chickpeas are part of the legume family."
                            },
                            {
                                info:"Chickpeas contain many vitamins and minerals, including iron, phosphorus and B-vitamins."
                            },
                            {
                                info:"Chickpeas are linked to improved heart and digestive health. They may also help prevent cancer"
                            },
                            {
                                info:"They are also a good source of plant-based protein."
                            },
                            
                        ],
                        images:[
                            { 
                                name:"Roasted Chickpeas",
                                path:"carbohydrate/dish/chickpeas/1.png",
                            },
                            { 
                                name:"Indian-Spiced Roasted Chickpeas",
                                path:"carbohydrate/dish/chickpeas/2.png",
                            },
                            { 
                                name:"Chole (Vegetarian Indian Chickpeas)",
                                path:"carbohydrate/dish/chickpeas/3.png",
                            },
                            { 
                                name:"Pakistani Spicy Chickpeas",
                                path:"carbohydrate/dish/chickpeas/4.png",
                            },
                            { 
                                name:"Chana Masala ",
                                path:"carbohydrate/dish/chickpeas/5.png",
                            },
                            { 
                                name:"Chickpea Curry",
                                path:"carbohydrate/dish/chickpeas/6.png",
                            },
                            { 
                                name:" Marinated Chickpeas",
                                path:"carbohydrate/dish/chickpeas/7.png",
                            },
                            { 
                                name:"Falafel with Canned Chickpeas",
                                path:"carbohydrate/dish/chickpeas/8.png",
                            },     
                            { 
                                name:"Leah's Chicken with Chickpeas",
                                path:"carbohydrate/dish/chickpeas/9.png",
                            },
                            { 
                                name:"Italian Chicken and Chickpeas",
                                path:"carbohydrate/dish/chickpeas/10.png",
                            },     
                        ]
                    },
                ] 

            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData") 
    }
}


// add lipid mutient
const setFoodItems=async ()=>{
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                nutrient:"lipid",
                items:[
                    { 
                        title:"Avocados",
                        path:"fat/1.png",
                        content:"avocados are about 77% fat, by calories, making them even higher in fat than most animal foods.",
                        heading:"Avocados",
                        data:[
                            {
                                info:"The avocado is different from most other fruits."
                            },
                            {
                                info:"Whereas most fruits primarily contain carbs, avocados are loaded with fats."
                            },
                            {
                                info:"The main fatty acid is a monounsaturated fat called oleic acid. This is also the predominant fatty acid in olive oil, associated with various health benefits."
                            },
                            {
                                info:"Avocados are among the best sources of potassium in the diet, even containing 40% more potassium than bananas, a typical high potassium food."
                            },
                        ],
                        images:[
                            { 
                                name:"Avocado Gazpacho",
                                path:"fat/dish/avocado/1.png",
                            },
                            { 
                                name:"Fried Plantains With Avocado Dip",
                                path:"fat/dish/avocado/2.png",
                            },
                            { 
                                name:"Easy Avocado Chicken Salad",
                                path:"fat/dish/avocado/3.png",
                            },
                            { 
                                name:"Avocado Aioli",
                                path:"fat/dish/avocado/4.png",
                            },
                            { 
                                name:"Pasta Salad with Avocado and Shrimp",
                                path:"fat/dish/avocado/5.png",
                            },
                            { 
                                name:"Avocado Dressing",
                                path:"fat/dish/avocado/6.png",
                            },
                            { 
                                name:"Avocado Toast",
                                path:"fat/dish/avocado/7.png",
                            },
                            { 
                                name:"Avocado Dessert",
                                path:"fat/dish/avocado/8.png",
                            },
                            
                            
                        ]
                    },
                    { 
                        title:"Cheese",
                        path:"fat/2.png",
                        content:"Cheese, like other high-fat dairy products, also contains powerful fatty acids that have been linked to all sorts of benefits, including reduced risk of type 2 diabetes.",
                        heading:"Cheese",
                        data:[
                            {
                                info:"Cheese is incredibly nutritious."
                            },
                            {
                                info:"This makes sense, given that an entire cup of milk is used to produce a single thick slice of cheese."
                            },
                            {
                                info:"It is also very rich in protein, with a single thick slice of cheese containing 6.7 grams of protein, same as a glass of milk."
                            },
                            {
                                info:"It is a great source of calcium, vitamin B12, phosphorus and selenium, and contains all sorts of other nutrients."
                            },
                        ],
                        images:[
                            { 
                                name:"Three-Cheese and Basil Grilled Cheese Sandwich",
                                path:"fat/dish/cheese/1.png",
                            },
                            { 
                                name:"Four-Cheese Grilled Cheese Sandwich",
                                path:"fat/dish/cheese/2.png",
                            },
                            { 
                                name:"Pimento Cheese without Cream Cheese",
                                path:"fat/dish/cheese/3.png",
                            },
                            { 
                                name:"Spicy Jalapeno-Bacon Mac and Cheese",
                                path:"fat/dish/cheese/4.png",
                            },
                            { 
                                name:"Mac and Cheese in a Cheese Waffle Cone",
                                path:"fat/dish/cheese/5.png",
                            },
                            { 
                                name:"Cheese Ball with Cream Cheese",
                                path:"fat/dish/cheese/6.png",
                            },
                            { 
                                name:"Jim's Beer Mac and Cheese Gratin",
                                path:"fat/dish/cheese/7.png",
                            },
                            { 
                                name:"Tangy Cheese Bites",
                                path:"fat/dish/cheese/8.png",
                            },
                            
                            
                        ]
                    },
                    { 
                        title:"Dark-Chocolate",
                        path:"fat/3.png",
                        content:"It is very high in fat, with fat at around 65% of calories.",
                        heading:"Dark-Chocolate",
                        data:[
                            {
                                info:"Dark chocolate is one of those rare health foods that actually taste incredible."
                            },
                            {
                                info:"Dark chocolate is 11% fiber and contains over 50% of the RDA for iron, magnesium, copper and manganese."
                            },
                            {
                                info:"It is also loaded with antioxidants, so much that it is one of the highest scoring foods tested, even outranking blueberries."
                            },
                            {
                                info:"Some of the antioxidants in it have potent biological activity, and can lower blood pressure and protect LDL cholesterol in the blood from becoming oxidized."
                            },
                        ],
                        images:[
                            { 
                                name:"Dark Chocolate Cupcakes",
                                path:"fat/dish/dark_chocolate/1.png",
                            },
                            { 
                                name:"Dark Chocolate Souffle Cake",
                                path:"fat/dish/dark_chocolate/2.png",
                            },
                            { 
                                name:"Dark Chocolate Orange Pudding",
                                path:"fat/dish/dark_chocolate/3.png",
                            },
                            { 
                                name:"Dark Chocolate Cake",
                                path:"fat/dish/dark_chocolate/4.png",
                            },
                            { 
                                name:"Dark Chocolate Biscuit",
                                path:"fat/dish/dark_chocolate/5.png",
                            },
                            { 
                                name:"Choco Pie",
                                path:"fat/dish/dark_chocolate/6.png",
                            },
                            { 
                                name:"Chocolate Shortbread",
                                path:"fat/dish/dark_chocolate/7.png",
                            },
                            { 
                                name:"Dark Chocolate Almond Bar",
                                path:"fat/dish/dark_chocolate/8.png",
                            },
                            { 
                                name:"Dark Chocolate Balls",
                                path:"fat/dish/dark_chocolate/9.png",
                            },
                            { 
                                name:"Dark chocolate",
                                path:"fat/dish/dark_chocolate/10.png",
                            },         
                        ]
                    },
                    { 
                        title:"Whole-Eggs",
                        path:"fat/4.png",
                        content:"a single egg contains 212 mg of cholesterol, which is 71% of the recommended daily intake. Plus, 62% of the calories in whole eggs are from fat.",
                        heading:"Whole-Eggs",
                        data:[
                            {
                                info:"Whole eggs used to be considered unhealthy because the yolks are high in cholesterol and fat."
                            },
                            {
                                info:"However, new studies have shown that cholesterol in eggs doesn’t affect the cholesterol in the blood, at least not in the majority of people."
                            },
                            {
                                info:"What we’re left with is one of the most nutrient dense foods on the planet."
                            },
                            {
                                info:"Eggs are also a weight loss friendly food. They are very fulfilling and high in protein, the most important nutrient for weight loss."
                            },
                        ],
                        images:[
                            { 
                                name:"Egg custard",
                                path:"fat/dish/whole_egg/1.png",
                            },
                            { 
                                name:"Easter egg cheesecake",
                                path:"fat/dish/whole_egg/2.png",
                            },
                            { 
                                name:"Breakfast egg wraps",
                                path:"fat/dish/whole_egg/3.png",
                            },
                            { 
                                name:"Gordon's eggs benedict",
                                path:"fat/dish/whole_egg/4.png",
                            },
                            { 
                                name:"Easy egg muffins",
                                path:"fat/dish/whole_egg/5.png",
                            },
                            { 
                                name:"Noodles with crispy chilli oil eggs",
                                path:"fat/dish/whole_egg/6.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"fat/dish/whole_egg/7.png",
                            },
                            { 
                                name:"Soft-boiled eggs",
                                path:"fat/dish/whole_egg/8.png",
                            },
                            { 
                                name:"Smoky beans & baked eggs",
                                path:"fat/dish/whole_egg/9.png",
                            },
                            { 
                                name:"Classic devilled eggs",
                                path:"fat/dish/whole_egg/10.png",
                            },         
                        ]
                    },
                    { 
                        title:"Fatty-Fish",
                        path:"fat/5.png",
                        content:"These fish are loaded with heart-healthy omega-3 fatty acids, high quality proteins and all sorts of important nutrients.",
                        heading:"Fatty-Fish",
                        data:[
                            {
                                info:"One of the few animal products that most people agree is healthy, is fatty fish."
                            },
                            {
                                info:"This includes fish like salmon, trout, mackerel, sardines and herring."
                            },
                            {
                                info:"Studies show that people who eat fish tend to be much healthier, with a lower risk of heart disease, depression, dementia and all sorts of common diseases."
                            },
                            {
                                info:"If you can’t (or won’t) eat fish, then taking a fish oil supplement can be useful. Cod fish liver oil is best, it contains all the omega-3s that you need, as well as plenty of vitamin D."
                            },
                        ],
                        images:[
                            { 
                                name:"Pan-Seared Tilapia In Tomato Basil Sauce",
                                path:"fat/dish/fatty_fish/1.png",
                            },
                            { 
                                name:"Spicy Sriracha-Glazed Salmon With Yogurt Sauce",
                                path:"fat/dish/fatty_fish/2.png",
                            },
                            { 
                                name:"Lemon Garlic Butter Fish In Parchment",
                                path:"fat/dish/fatty_fish/3.png",
                            },
                            { 
                                name:"sheet-Pan Chili-Lime Tilapia Recipe With Veggies",
                                path:"fat/dish/fatty_fish/4.png",
                            },
                            { 
                                name:"Baked Salmon In Foil With Asparagus And Garlic Lemon Butter Sauce",
                                path:"fat/dish/fatty_fish/5.png",
                            },
                            { 
                                name:"Lemon Garlic Butter Salmon With Zucchini Noodles",
                                path:"fat/dish/fatty_fish/6.png",
                            },
                            { 
                                name:"Spicy Mackerel Stew With Fennel",
                                path:"fat/dish/fatty_fish/7.png",
                            },
                            { 
                                name:"Creamy Shrimp And Salmon Foil Packs",
                                path:"fat/dish/fatty_fish/8.png",
                            },
                            { 
                                name:"Pan Seared Salmon With Sun-Dried Tomato Cream Sauce",
                                path:"fat/dish/fatty_fish/9.png",
                            },
                            { 
                                name:"Lemon Garlic Butter Salmon In Foil With Pineapple",
                                path:"fat/dish/fatty_fish/10.png",
                            },         
                        ]
                    },
                    
                    { 
                        title:"Nuts",
                        path:"fat/6.png",
                        content:"They are high in healthy fats and fiber, and are a good plant-based source of protein.",
                        heading:"Nuts",
                        data:[
                            {
                                info:"Nuts are incredibly healthy."
                            },
                            {
                                info:"Nuts are also high in vitamin E and loaded with magnesium, a mineral that most people don’t get enough of."
                            },
                            {
                                info:"Studies show that people who eat nuts tend to be healthier, and have a lower risk of various diseases."
                            },
                            {
                                info:"Healthy nuts include almonds, walnuts, macadamia nuts and numerous others."
                            },
                        ],
                        images:[
                            { 
                                name:"Swedish Nuts",
                                path:"fat/dish/nuts/1.png",
                            },
                            { 
                                name:"Glazed Nuts",
                                path:"fat/dish/nuts/2.png",
                            },
                            { 
                                name:"Hickory Nut Cake",
                                path:"fat/dish/nuts/3.png",
                            },
                            { 
                                name:"Sweet, Salty, Spicy Party Nuts",
                                path:"fat/dish/nuts/4.png",
                            },
                            { 
                                name:"Beer Nut Cookies",
                                path:"fat/dish/nuts/5.png",
                            },
                            { 
                                name:"Pignoli Nut Pie",
                                path:"fat/dish/nuts/6.png",
                            },
                            { 
                                name:"Orange Nut Raisin Cake",
                                path:"fat/dish/nuts/7.png",
                            },
                            { 
                                name:"Asparagus with Prosciutto and Pine Nuts",
                                path:"fat/dish/nuts/8.png",
                            },
                                   
                        ]
                    },
                    { 
                        title:"Chia-Seeds",
                        path:"fat/7.png",
                        content:"In fact, by calories, chia seeds are around 80% fat. This makes them an excellent high-fat plant food.",
                        heading:"Chia-Seeds",
                        data:[
                            {
                                info:"Chia seeds are generally not perceived as a “fatty” food."
                            },
                            {
                                info:"However, an ounce (28 grams) of chia seeds actually contains 9 grams of fat."
                            },
                            {
                                info:"Considering that almost all the carbs in chia seeds are fiber, the majority of calories in them actually comes from fat."
                            },
                            {
                                info:"These aren’t just any fats either, the majority of the fats in chia seeds consists of the heart-healthy omega-3 fatty acid called ALA."
                            },
                        ],
                        images:[
                            { 
                                name:"Vegan Overnight Oats with Chia Seeds and Fruit",
                                path:"fat/dish/chiaseed/1.png",
                            },
                            { 
                                name:"Cornmeal Waffles with Chia Seeds",
                                path:"fat/dish/chiaseed/2.png",
                            },
                            { 
                                name:"Chocolate Chia Seed Pudding",
                                path:"fat/dish/chiaseed/3.png",
                            },
                            { 
                                name:"Mexican Mocha Chia Seed Pudding (Keto)",
                                path:"fat/dish/chiaseed/4.png",
                            },
                            { 
                                name:"Oatmeal Chia Seed Cookies",
                                path:"fat/dish/chiaseed/5.png",
                            },
                            { 
                                name:"Mango, Coconut, and Chia Seed Pots",
                                path:"fat/dish/chiaseed/6.png",
                            },
                            { 
                                name:"Almond Strawberry Chia Seed Pudding",
                                path:"fat/dish/chiaseed/7.png",
                            },
                            { 
                                name:"Super Fruit Parfait",
                                path:"fat/dish/chiaseed/8.png",
                            },
                                   
                        ]
                    },
                    { 
                        title:"Olive-Oil",
                        path:"fat/8.png",
                        content:"Another fatty food that almost everyone agrees is healthy, is extra virgin olive oil.",
                        heading:"Olive-Oil",
                        data:[
                            {
                                info:"This fat is an essential component of the Mediterranean diet, which has been shown to have numerous health benefits."
                            },
                            {
                                info:"Extra virgin olive oil contains vitamins E and K, and is loaded with powerful antioxidants."
                            },
                            {
                                info:"Some of these antioxidants can fight inflammation and help protect the LDL particles in the blood from becoming oxidized."
                            },
                            {
                                info:"It has also been shown to lower blood pressure, improve cholesterol markers and have all sorts of benefits related to heart disease risk."
                            },
                        ],
                        images:[
                            { 
                                name:"Mashed Potatoes with Olive Oil and Parmesan",
                                path:"fat/dish/oil/1.png",
                            },
                            { 
                                name:"Olive Oil Roasted Eggplant with Lemon",
                                path:"fat/dish/oil/2.png",
                            },
                            { 
                                name:"Italian Herb Infused Olive Oil",
                                path:"fat/dish/oil/3.png",
                            },
                            { 
                                name:"Infused Olive Oil",
                                path:"fat/dish/oil/4.png",
                            },
                            { 
                                name:"Olive Oil Banana Bread",
                                path:"fat/dish/oil/5.png",
                            },
                            { 
                                name:"Garlic and Olive Oil",
                                path:"fat/dish/oil/6.png",
                            },
                            { 
                                name:"Olive Oil-Poached Tuna",
                                path:"fat/dish/oil/7.png",
                            },
                            { 
                                name:"Spiced Orange Olive Oil Cake",
                                path:"fat/dish/oil/8.png",
                            },
                                   
                        ]
                    },
                    { 
                        title:"Coconut-and-Coconut-Oil",
                        path:"fat/9.png",
                        content:"Coconuts, and coconut oil, are the richest sources of saturated fat on the planet.In fact, about 90% of the fatty acids in them are saturated.",
                        heading:"Coconut-and-Coconut-Oil",
                        data:[
                            {
                                info:"Even so, populations that consume large amounts of coconut do not have high levels of heart disease, and are in excellent health."
                            },
                            {
                                info:"Coconut fats are actually different than most other fats, and consist largely of medium-chain fatty acids."
                            },
                            {
                                info:"These fatty acids are metabolized differently, going straight to the liver where they may be turned into ketone bodies."
                            },
                            {
                                info:"Studies show that medium-chain fats suppress appetite, helping people eat fewer calories, and can boost metabolism by up to 120 calories per day "
                            },
                        ],
                        images:[
                            { 
                                name:"Pasta and Veggies in Coconut Oil",
                                path:"fat/dish/coconutandoil/1.png",
                            },
                            { 
                                name:"Coconut Oil Popcorn",
                                path:"fat/dish/coconutandoil/2.png",
                            },
                            { 
                                name:"Coconut Oil Sugar Cookies",
                                path:"fat/dish/coconutandoil/3.png",
                            },
                            { 
                                name:"Cornbread Made with Coconut Oil",
                                path:"fat/dish/coconutandoil/4.png",
                            },
                            { 
                                name:"Coconut Cake",
                                path:"fat/dish/coconutandoil/5.png",
                            },
                            { 
                                name:"Coconut Pie",
                                path:"fat/dish/coconutandoil/6.png",
                            },
                            { 
                                name:"Coconut Cupcakes",
                                path:"fat/dish/coconutandoil/7.png",
                            },
                            { 
                                name:"Raspberry Coconut Layer Bars",
                                path:"fat/dish/coconutandoil/8.png",
                            },
                            
                                   
                        ]
                    },
                    { 
                        title:"Full-Fat-Yogurt",
                        path:"fat/10.png",
                        content:"It has all the same important nutrients as other high-fat dairy products.",
                        heading:"Full-Fat-Yogurt",
                        data:[
                            {
                                info:"Real, full-fat yogurt is incredibly healthy."
                            },
                            {
                                info:"But it’s also loaded with healthy, probiotic bacteria, that can have powerful effects on your health."
                            },
                            {
                                info:"Studies show that yogurt can lead to major improvements in digestive health, and may even help fight heart disease and obesity"
                            },
                            {
                                info:"Unfortunately, many of the yogurts found on store shelves are low in fat, but loaded with added sugar instead."
                            },
                        ],
                        images:[
                            { 
                                name:"Yogurt Soup",
                                path:"fat/dish/yogurt/1.png",
                            },
                            { 
                                name:"Creamy Vanilla Frozen Yogurt",
                                path:"fat/dish/yogurt/2.png",
                            },
                            { 
                                name:"Yogurt Cake",
                                path:"fat/dish/yogurt/3.png",
                            },
                            { 
                                name:"Banana Pudding and Yogurt Parfaits",
                                path:"fat/dish/yogurt/4.png",
                            },
                            { 
                                name:"Lamb Chops with Minted Yogurt Sauce",
                                path:"fat/dish/yogurt/5.png",
                            },
                            { 
                                name:"Kefir Yogurt",
                                path:"fat/dish/yogurt/6.png",
                            },
                            { 
                                name:"Greek Yogurt Carbonara",
                                path:"fat/dish/yogurt/7.png",
                            },
                            { 
                                name:"Slow Cooker Yogurt",
                                path:"fat/dish/yogurt/8.png",
                            },
                            
                                   
                        ]
                    },
                ] 

            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData") 
    }
}

// add protein
const setFoodItems=async ()=>{
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                nutrient:"protein",
                items:[
                    { 
                        title:"Eggs",
                        path:"protein/1.png",
                        content:"33% of calories in a whole egg. One large egg has 6 grams of protein and 78 calories.",
                        heading:"Eggs",
                        data:[
                            {
                                info:"Whole eggs are among the healthiest and most nutritious foods available."
                            },
                            {
                                info:"They’re an excellent source of vitamins, minerals, healthy fats, eye-protecting antioxidants, and brain nutrients that you need."
                            },
                            {
                                info:"Whole eggs are high in protein, but egg whites are almost pure protein."
                            },
                            {
                                info:"Egg and foods containing egg are not suitable for people with an egg allergy."
                            },
                        ],
                        images:[
                            { 
                                name:"Egg custard",
                                path:"protein/dish/egg/1.png",
                            },
                            { 
                                name:"Easter egg cheesecake",
                                path:"protein/dish/egg/2.png",
                            },
                            { 
                                name:"Breakfast egg wraps",
                                path:"protein/dish/egg/3.png",
                            },
                            { 
                                name:"Gordon's eggs benedict",
                                path:"protein/dish/egg/4.png",
                            },
                            { 
                                name:"Easy egg muffins",
                                path:"protein/dish/egg/5.png",
                            },
                            { 
                                name:"Noodles with crispy chilli oil eggs",
                                path:"protein/dish/egg/6.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"protein/dish/egg/7.png",
                            },
                            { 
                                name:"Soft-boiled eggs",
                                path:"protein/dish/egg/8.png",
                            },
                            { 
                                name:"Smoky beans & baked eggs",
                                path:"protein/dish/egg/9.png",
                            },
                            { 
                                name:"Classic devilled eggs",
                                path:"protein/dish/egg/10.png",
                            },         
                        ]
                    },
                    { 
                        title:"Almonds",
                        path:"protein/2.png",
                        content:"15% of calories. 6 grams and 164 calories per ounce (28 grams)",
                        heading:"Almonds",
                        data:[
                            {
                                info:"Almonds are a popular type of tree nut."
                            },
                            {
                                info:"They are rich in essential nutrients, including fiber, vitamin E, manganese, and magnesium."
                            },
                            {
                                info:"Almonds are not suitable for people who have a nut allergy."
                            },
                            {
                                info:"Pistachios (13% of calories) and cashews (11% of calories)."
                            },
                        ],
                        images:[
                            { 
                                name:"Almond Gelatin",
                                path:"protein/dish/almonds/1.png",
                            },
                            { 
                                name:"Almond Delight Cookies with Dark Chocolate",
                                path:"protein/dish/almonds/2.png",
                            },
                            { 
                                name:"Almond Milk from Oster",
                                path:"protein/dish/almonds/3.png",
                            },
                            { 
                                name:"Glazed Almond Bundt Cake",
                                path:"protein/dish/almonds/4.png",
                            },
                            { 
                                name:"Almond Joy Cocktai",
                                path:"protein/dish/almonds/5.png",
                            },
                            { 
                                name:"Almond Buttercrunch Candy",
                                path:"protein/dish/almonds/6.png",
                            },
                            { 
                                name:"Almond Squares",
                                path:"protein/dish/almonds/7.png",
                            },
                            { 
                                name:"Almond Cookies",
                                path:"protein/dish/almonds/8.png",
                            },
                                  
                        ]
                    },
                    { 
                        title:"Chicken-breast",
                        path:"protein/3.png",
                        content:"75% of calories. One roasted chicken breast without skin contains 53 grams and only 284 calories",
                        heading:"Chicken-breast",
                        data:[
                            {
                                info:"Chicken breast is one of the most popular protein-rich foods."
                            },
                            {
                                info:"If you eat it without the skin, most of its calories come from protein."
                            },
                            {
                                info:"Chicken breast is also very easy to cook and versatile."
                            },
                            {
                                info:"It can taste delicious in a wide range of dishes."
                            },
                        ],
                        images:[
                            { 
                                name:"Pesto-Stuffed Chicken Breast",
                                path:"protein/dish/chicken_breast/1.png",
                            },
                            { 
                                name:"Easy Mediterranean Baked Chicken Breast",
                                path:"protein/dish/chicken_breast/2.png",
                            },
                            { 
                                name:"Stuffed Chicken Breast Wrapped in Bacon",
                                path:"protein/dish/chicken_breast/3.png",
                            },
                            { 
                                name:"Caprese-Stuffed Chicken Breast with Balsamic Reduction",
                                path:"protein/dish/chicken_breast/4.png",
                            },
                            { 
                                name:"Airline Chicken Breast",
                                path:"protein/dish/chicken_breast/5.png",
                            },
                            { 
                                name:"Pan-Seared Chicken Breasts with Shallots",
                                path:"protein/dish/chicken_breast/6.png",
                            },
                            { 
                                name:"Instant Pot Teriyaki Chicken Breast",
                                path:"protein/dish/chicken_breast/7.png",
                            },
                            { 
                                name:"Spicy Grilled Stuffed Chicken Breast Sandwich",
                                path:"protein/dish/chicken_breast/8.png",
                            },
                                  
                        ]
                    },
                    { 
                        title:"Oats",
                        path:"protein/4.png",
                        content:"14% of calories. One cup of oats has 11 grams and 307 calories",
                        heading:"Oats",
                        data:[
                            {
                                info:"Oats are among the healthiest grains available."
                            },
                            {
                                info:"They provide healthy fibers, magnesium, manganese, thiamine (vitamin B1), and several other nutrients."
                            },
                            {
                                info:"Oats are also a relatively good source of protein, containing more than most grains."
                            },
                            {
                                info:"Eating oats may also lower blood sugar levels, especially in people with type 2 diabetes."
                            },
                        ],
                        images:[
                            { 
                                name:"Chai Pomegranate Overnight Oats",
                                path:"protein/dish/oats/1.png",
                            },
                            { 
                                name:"Chia-Berry Swirl Oat",
                                path:"protein/dish/oats/2.png",
                            },
                            { 
                                name:"Berry Overnight Oats",
                                path:"protein/dish/oats/3.png",
                            },
                            { 
                                name:"SunButter Overnight Oats",
                                path:"protein/dish/oats/4.png",
                            },
                            { 
                                name:"Classic Overnight Oats",
                                path:"protein/dish/oats/5.png",
                            },
                            { 
                                name:"Almond Butter & Jam Overnight Oats",
                                path:"protein/dish/oats/6.png",
                            },
                            { 
                                name:"Mango Overnight Oats",
                                path:"protein/dish/oats/7.png",
                            },
                            { 
                                name:"Maple-Pumpkin Overnight Oats",
                                path:"protein/dish/oats/8.png",
                            },
                            { 
                                name:"Easy Vegan Overnight Oats",
                                path:"protein/dish/oats/9.png",
                            },
                            { 
                                name:"Overnight Chia Oats",
                                path:"protein/dish/oats/10.png",
                            },
                                  
                        ]
                    },
                    { 
                        title:"Cottage-cheese",
                        path:"protein/5.png",
                        content:"69% of calories. One cup (226 grams) of low fat cottage cheese with 1% fat contains 28 grams of protein and 163 calories",
                        data:[
                            {
                                info:"Cottage cheese is a type of cheese that is low in fat and calories."
                            },
                            {
                                info:"It’s rich in calcium, phosphorus, selenium, vitamin B12, riboflavin (vitamin B2), and various other nutrients."
                            },
                            {
                                info:"Parmesan cheese (38% of calories), Swiss cheese (30%), mozzarella (29%), and cheddar (26%)."
                            },
                           
                        ],
                        images:[
                            { 
                                name:"Three-Cheese and Basil Grilled Cheese Sandwich",
                                path:"protein/dish/cheese/1.png",
                            },
                            { 
                                name:"Four-Cheese Grilled Cheese Sandwich",
                                path:"protein/dish/cheese/2.png",
                            },
                            { 
                                name:"Pimento Cheese without Cream Cheese",
                                path:"protein/dish/cheese/3.png",
                            },
                            { 
                                name:"Spicy Jalapeno-Bacon Mac and Cheese",
                                path:"protein/dish/cheese/4.png",
                            },
                            { 
                                name:"Mac and Cheese in a Cheese Waffle Cone",
                                path:"protein/dish/cheese/5.png",
                            },
                            { 
                                name:"Cheese Ball with Cream Cheese",
                                path:"protein/dish/cheese/6.png",
                            },
                            { 
                                name:"Jim's Beer Mac and Cheese Gratin",
                                path:"protein/dish/cheese/7.png",
                            },
                            { 
                                name:"angy Cheese Bites",
                                path:"protein/dish/cheese/8.png",
                            },
                           
                                  
                        ]
                    },
                    { 
                        title:"Greek-yogurt",
                        path:"protein/6.png",
                        content:"69% of calories. One 6-ounce (170-gram) container has 17 grams of protein and only 100 calories ",
                        data:[
                            {
                                info:"Greek yogurt, also called strained yogurt, is a very thick type of yogurt."
                            },
                            {
                                info:"When buying Greek yogurt, opt for one without added sugar."
                            },
                            {
                                info:"Full fat Greek yogurt is also high in protein but contains more calories."
                            },
                            {
                                info:"It pairs well with sweet and savory dishes. It has a creamy texture and is high in many nutrients."
                            },
                           
                        ],
                        images:[
                            { 
                                name:"Yogurt Soup",
                                path:"protein/dish/yogurt/1.png",
                            },
                            { 
                                name:"Creamy Vanilla Frozen Yogurt",
                                path:"protein/dish/yogurt/2.png",
                            },
                            { 
                                name:"Yogurt Cake",
                                path:"protein/dish/yogurt/3.png",
                            },
                            { 
                                name:"Banana Pudding and Yogurt Parfaits",
                                path:"protein/dish/yogurt/4.png",
                            },
                            { 
                                name:"Lamb Chops with Minted Yogurt Sauce",
                                path:"protein/dish/yogurt/5.png",
                            },
                            { 
                                name:"Kefir Yogurt",
                                path:"protein/dish/yogurt/6.png",
                            },
                            { 
                                name:"Greek Yogurt Carbonara",
                                path:"protein/dish/yogurt/7.png",
                            },
                            { 
                                name:"Slow Cooker Yogurt",
                                path:"protein/dish/yogurt/8.png",
                            },
                            
                                   
                        ]
                    },
                    { 
                        title:"Milk",
                        path:"protein/7.png",
                        content:"21% of calories. One cup of whole milk contains 8 grams of protein and 149 calories. One cup of soy milk contains 6.3 grams of protein and 105 calories ",
                        data:[
                            {
                                info:"Milk contains a little of nearly every nutrient that your body needs."
                            },
                            {
                                info:"It’s a good source of high quality protein, and it’s high in calcium, phosphorus, and riboflavin (vitamin B2)."
                            },
                            {
                                info:"If you are concerned about your fat intake, low or zero fat milk is an option."
                            },
                            {
                                info:"For those who wish to drink milk but either cannot tolerate it or follow a purely plant-based diet, alternatives include soy milk."
                            },
                           
                        ],
                        images:[
                            { 
                                name:"Milk Banana Smoothie",
                                path:"protein/dish/milk/1.png",
                            },
                            { 
                                name:"Sweetened Condensed Milk",
                                path:"protein/dish/milk/2.png",
                            },
                            { 
                                name:"Milk Bread",
                                path:"protein/dish/milk/3.png",
                            },
                            { 
                                name:" Hokkaido Milk Bread",
                                path:"protein/dish/milk/4.png",
                            },
                            { 
                                name:"Banana Milk Coffee",
                                path:"protein/dish/milk/5.png",
                            },
                            { 
                                name:"Milk Chocolate Peppermint Bark",
                                path:"protein/dish/milk/6.png",
                            },
                            { 
                                name:"Malted Milk Chip Cookies",
                                path:"protein/dish/milk/7.png",
                            },
                            { 
                                name:"Milk Chocolate Cheesecake",
                                path:"protein/dish/milk/8.png",
                            },
                            { 
                                name:"Vegan Sweetened Condensed Milk",
                                path:"protein/dish/milk/9.png",
                            },
                            { 
                                name:"Coconut Milk Flan",
                                path:"protein/dish/milk/10.png",
                            },
                            
                                   
                        ]
                    },
                    { 
                        title:"Broccoli",
                        path:"protein/8.png",
                        content:"33% of calories. One cup (96 grams) of chopped broccoli has 3 grams of protein and only 31 calories ",
                        data:[
                            {
                                info:"Broccoli is a healthy vegetable that provides vitamin C, vitamin K, fiber, and potassium."
                            },
                            {
                                info:"It also provides bioactive nutrients that may help protect against cancer."
                            },
                            {
                                info:"Calorie for calorie, it’s high in protein compared with most vegetables."
                            },
                            
                           
                        ],
                        images:[
                            { 
                                name:"Broccoli Baked",
                                path:"protein/dish/broccoli/1.png",
                            },
                            { 
                                name:"Broccoli Salad with French Dressing",
                                path:"protein/dish/broccoli/2.png",
                            },
                            { 
                                name:"Buttermilk Chicken with Chargrilled Broccoli",
                                path:"protein/dish/broccoli/3.png",
                            },
                            { 
                                name:"Chatpatti Broccoli",
                                path:"protein/dish/broccoli/4.png",
                            },
                            { 
                                name:"Broccoli and Cheddar Crepes",
                                path:"protein/dish/broccoli/5.png",
                            },
                            { 
                                name:"Cream of Broccoli Soup",
                                path:"protein/dish/broccoli/6.png",
                            },
                            { 
                                name:"Broccoli Pasta",
                                path:"protein/dish/broccoli/7.png",
                            },
                            { 
                                name:"Salmon with Broccoli",
                                path:"protein/dish/broccoli/8.png",
                            },
                            { 
                                name:"Roasted Bell Pepper with Broccoli Salad",
                                path:"protein/dish/broccoli/9.png",
                            },
                            { 
                                name:"Broccoli Soup with Wasabi",
                                path:"protein/dish/broccoli/10.png",
                            },             
                        ]
                    },
                    { 
                        title:"Lean-beef",
                        path:"protein/9.png",
                        content:"53% of calories. One 3-ounce (85-gram) serving of lean sirloin steak contains 25 grams of protein and 186 calories ",
                        data:[
                            {
                                info:"Lean beef is high in protein"
                            },
                            {
                                info:"as well as highly bioavailable iron, vitamin B12, and large amounts of other vital nutrients."
                            },
                            {
                                info:"Beef is suitable for people on a low carb diet."
                            },
                            
                           
                        ],
                        images:[
                            { 
                                name:"Hawaiian Beef Stew",
                                path:"protein/dish/lean_breef/1.png",
                            },
                            { 
                                name:"Beef and Bean Burritos",
                                path:"protein/dish/lean_breef/2.png",
                            },
                            { 
                                name:"Horsey Beef Pretzel Bites",
                                path:"protein/dish/lean_breef/3.png",
                            },
                            { 
                                name:" Beef and Potato Pie",
                                path:"protein/dish/lean_breef/4.png",
                            },
                            { 
                                name:"Shredded Beef",
                                path:"protein/dish/lean_breef/5.png",
                            },
                            { 
                                name:"Mushroom Beef Burgers",
                                path:"protein/dish/lean_breef/6.png",
                            },
                            { 
                                name:"Beef Stroganoff Sauce with Meatballs",
                                path:"protein/dish/lean_breef/7.png",
                            },
                            { 
                                name:"Dutch Oven Beef Stew",
                                path:"protein/dish/lean_breef/8.png",
                            },                 
                        ]
                    },
                    { 
                        title:"Tuna",
                        path:"protein/10.png",
                        content:"84% of calories in tuna canned in water. One can (142 grams) contains 27 grams of protein and only 128 calories",
                        data:[
                            {
                                info:"Tuna is a popular type of fish"
                            },
                            {
                                info:"You can eat it hot in a range of baked dishes or cold in salads."
                            },
                            {
                                info:"It’s low in fat and calories but a rich source of protein."
                            },
                            {
                                info:"Like other fish, tuna is a good source of various nutrients and contains omega-3 fats."
                            },
                            
                           
                        ],
                        images:[
                            { 
                                name:"Lemony tuna, tomato & caper one-pot pasta",
                                path:"protein/dish/tuna/1.png",
                            },
                            { 
                                name:"Pesto, cannellini bean & tuna jackets",
                                path:"protein/dish/tuna/2.png",
                            },
                            { 
                                name:"Seared tuna & cucumber salad",
                                path:"protein/dish/tuna/3.png",
                            },
                            { 
                                name:" Spice-cured tuna tacos",
                                path:"protein/dish/tuna/4.png",
                            },
                            { 
                                name:"Spinach & tuna pancakes",
                                path:"protein/dish/tuna/5.png",
                            },
                            { 
                                name:"Tuna & caper orzo with parsley",
                                path:"protein/dish/tuna/6.png",
                            },
                            { 
                                name:"Tuna, avocado & quinoa salad",
                                path:"protein/dish/tuna/7.png",
                            },
                            { 
                                name:"Tuna & sundried tomato pasta bake",
                                path:"protein/dish/tuna/8.png",
                            },                 
                            { 
                                name:"Blistered sweet potatoes with herby tuna",
                                path:"protein/dish/tuna/9.png",
                            },
                            { 
                                name:" Healthy tuna lettuce wraps",
                                path:"protein/dish/tuna/10.png",
                            },                 
                        ]
                    },
                    { 
                        title:"Quinoa",
                        path:"protein/11.png",
                        content:"5% of calories. One cup (185 grams) of cooked quinoa has 8 grams and 222 calories",
                        data:[
                            {
                                info:"Quinoa is a popular pseudo-cereal that many consider a superfood."
                            },
                            {
                                info:"It’s rich in vitamins, minerals, fiber, and antioxidants."
                            },
                            {
                                info:"Quinoa has numerous health benefits."
                            },
                           
                        ],
                        images:[
                            { 
                                name:"Quinoa chilli with avocado & coriander",
                                path:"protein/dish/quinoa/1.png",
                            },
                            { 
                                name:"Fennel-roasted cauliflower with quinoa",
                                path:"protein/dish/quinoa/2.png",
                            },
                            { 
                                name:"Halloumi & quinoa fattoush",
                                path:"protein/dish/quinoa/3.png",
                            },
                            { 
                                name:"Coriander salmon with curried quinoa & pomegranate",
                                path:"protein/dish/quinoa/4.png",
                            },
                            { 
                                name:"Quinoa salad with eggs & dill",
                                path:"protein/dish/quinoa/5.png",
                            },
                            { 
                                name:"Quinoa salad with avocado mayo",
                                path:"protein/dish/quinoa/6.png",
                            },
                            { 
                                name:"South American-style quinoa with fried eggs",
                                path:"protein/dish/quinoa/7.png",
                            },
                            { 
                                name:"Vegan beetroot & quinoa burgers",
                                path:"protein/dish/quinoa/8.png",
                            },
                            { 
                                name:"Vegetable tagine with apricot quinoa",
                                path:"protein/dish/quinoa/9.png",
                            },
                            { 
                                name:"Quinoa-stuffed peppers",
                                path:"protein/dish/quinoa/10.png",
                            },                
                        ]
                    },
                ] 
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData") 
    }
}

// add vitamins
const setFoodItems = async () => {
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nutrient: "vitamin",
                items: [
                    {
                        title: "Fish",
                        path: "vitamin/1.png",
                        content: "Fish is a good source for 9 of 14 essential vitamins.",
                        heading: "Fish",
                        data: [
                            {
                                info: "These include Vitamins A, B1, B2, B3, B5, B6, B12, D, and E."
                            },
                            {
                                info: "Among all fish Tuna and Trout provide the most vitamins but be sure to eat a wide variety of fish for a healthy diet."
                            },
                            {
                                info: "Studies show that people who eat fish tend to be much healthier, with a lower risk of heart disease, depression, dementia and all sorts of common diseases."
                            },
                            {
                                info: "If you can’t (or won’t) eat fish, then taking a fish oil supplement can be useful. Cod fish liver oil is best, it contains all the omega-3s that you need, as well as plenty of vitamin D."
                            },


                        ],
                        images: [
                            {
                                name: "Pan-Seared Tilapia In Tomato Basil Sauce",
                                path: "vitamin/dish/fish/1.png",
                            },
                            {
                                name: "Spicy Sriracha-Glazed Salmon With Yogurt Sauce",
                                path: "vitamin/dish/fish/2.png",
                            },
                            {
                                name: "Lemon Garlic Butter Fish In Parchment",
                                path: "vitamin/dish/fish/3.png",
                            },
                            {
                                name: "sheet-Pan Chili-Lime Tilapia Recipe With Veggies",
                                path: "vitamin/dish/fish/4.png",
                            },
                            {
                                name: "Baked Salmon In Foil With Asparagus And Garlic Lemon Butter Sauce",
                                path: "vitamin/dish/fish/5.png",
                            },
                            {
                                name: "Lemon Garlic Butter Salmon With Zucchini Noodles",
                                path: "vitamin/dish/fish/6.png",
                            },
                            {
                                name: "Spicy Mackerel Stew With Fennel",
                                path: "vitamin/dish/fish/7.png",
                            },
                            {
                                name: "Creamy Shrimp And Salmon Foil Packs",
                                path: "vitamin/dish/fish/8.png",
                            },
                            {
                                name: "Pan Seared Salmon With Sun-Dried Tomato Cream Sauce",
                                path: "vitamin/dish/fish/9.png",
                            },
                            {
                                name: "Lemon Garlic Butter Salmon In Foil With Pineapple",
                                path: "vitamin/dish/fish/10.png",
                            },
                        ]
                    },
                    {
                        title: "Dark-Leafy-Greens",
                        path: "vitamin/2.png",
                        content: "Dark Leafy Greens are a good source for 8 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins A, B2, B3, B6, B9, C, E, K, and Beta-Carotene. "
                            },
                            {
                                info: "While all dark leafy greens are great, extra nutrient-dense sources include spinach and kale."
                            },

                        ],
                        images: [
                            {
                                name: "Black Eyed Pea Collard Rolls",
                                path: "vitamin/dish/leafy_green/1.png",
                            },
                            {
                                name: "Green Quiche and Whole Wheat Tart",
                                path: "vitamin/dish/leafy_green/2.png",
                            },
                            {
                                name: "Collard Greens With Cumin and Apricots",
                                path: "vitamin/dish/leafy_green/3.png",
                            },
                            {
                                name: "Thai-Style Stiry-Fried Greens With Coconut Milk",
                                path: "vitamin/dish/leafy_green/4.png",
                            },
                            {
                                name: "One-Skillet Shrimp With Rainbow Chard",
                                path: "vitamin/dish/leafy_green/5.png",
                            },
                            {
                                name: "Simple Stewed Pinto Beans and Collard Greens",
                                path: "vitamin/dish/leafy_green/6.png",
                            },
                            {
                                name: "Garlicky Greens With Vegan Parmesan Farro Risotto",
                                path: "vitamin/dish/leafy_green/7.png",
                            },
                            {
                                name: "Pork, Beans, Chicken, and Greens",
                                path: "vitamin/dish/leafy_green/8.png",
                            },

                        ]
                    },
                    {
                        title: "Seeds",
                        path: "vitamin/3.png",
                        content: "Seeds are a good source for 6 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B1, B2, B3, B5, B5, B6, and E. "
                            },
                            {
                                info: "Vitamin rich choices for seeds include sunflower and flax seeds."
                            },

                        ],
                        images: [
                            {
                                name: "Flax and Sunflower Seed Bread",
                                path: "vitamin/dish/seed/1.png",
                            },
                            {
                                name: " Poppy Seed Bread ",
                                path: "vitamin/dish/seed/2.png",
                            },
                            {
                                name: " Lemon Poppy Seed Cake",
                                path: "vitamin/dish/seed/3.png",
                            },
                            {
                                name: " Orange-Almond Poppy Seed Bread",
                                path: "vitamin/dish/seed/4.png",
                            },
                            {
                                name: "Pumpkin Seed Granola",
                                path: "vitamin/dish/seed/5.png",
                            },
                            {
                                name: "Lemon Poppy Seed Bundt Cake",
                                path: "vitamin/dish/seed/6.png",
                            },
                            {
                                name: "Lemon Poppy Seed Bread",
                                path: "vitamin/dish/seed/7.png",
                            },
                            {
                                name: "Chia Seed Muffins",
                                path: "vitamin/dish/seed/8.png",
                            },

                        ]
                    },
                    {
                        title: "Broccoli",
                        path: "vitamin/4.png",
                        content: "Broccoli is a good source for 6 of 14 essential vitamins",
                        data: [
                            {
                                info: "These include Vitamins A, B9, C, E, K, and Beta Carotene."
                            },
                            {
                                info: "Other nutritious cruciferous vegetables include brussels sprouts, cabbage, and cauliflower."
                            },
                            {
                                info:"It also provides bioactive nutrients that may help protect against cancer."
                            },
                            {
                                info:"Calorie for calorie, it’s high in protein compared with most vegetables."
                            },

                        ],
                        images: [
                            { 
                                name:"Broccoli Baked",
                                path:"vitamin/dish/broccoli/1.png",
                            },
                            { 
                                name:"Broccoli Salad with French Dressing",
                                path:"vitamin/dish/broccoli/2.png",
                            },
                            { 
                                name:"Buttermilk Chicken with Chargrilled Broccoli",
                                path:"vitamin/dish/broccoli/3.png",
                            },
                            { 
                                name:"Chatpatti Broccoli",
                                path:"vitamin/dish/broccoli/4.png",
                            },
                            { 
                                name:"Broccoli and Cheddar Crepes",
                                path:"vitamin/dish/broccoli/5.png",
                            },
                            { 
                                name:"Cream of Broccoli Soup",
                                path:"vitamin/dish/broccoli/6.png",
                            },
                            { 
                                name:"Broccoli Pasta",
                                path:"vitamin/dish/broccoli/7.png",
                            },
                            { 
                                name:"Salmon with Broccoli",
                                path:"vitamin/dish/broccoli/8.png",
                            },
                            { 
                                name:"Roasted Bell Pepper with Broccoli Salad",
                                path:"vitamin/dish/broccoli/9.png",
                            },
                            { 
                                name:"Broccoli Soup with Wasabi",
                                path:"vitamin/dish/broccoli/10.png",
                            }, 

                        ]
                    },
                    {
                        title: "Pork",
                        path: "vitamin/5.png",
                        content: "Pork is a good source for 6 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B1, B2, B3, B5, B6, and D."
                            },
                            {
                                info: "Good cuts of pork include pork chops (loin) and shoulder."
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Mojo Pork",
                                path:"vitamin/dish/pork/1.png",
                            },
                            { 
                                name:"Pork Chop Rub",
                                path:"vitamin/dish/pork/2.png",
                            },
                            { 
                                name:"Barbecued Pork Skewers",
                                path:"vitamin/dish/pork/3.png",
                            },
                            { 
                                name:"Pork Rub Rubbed and Baked Pork Chops",
                                path:"vitamin/dish/pork/4.png",
                            },
                            { 
                                name:"Garlic-Lime Pork Chops",
                                path:"vitamin/dish/pork/5.png",
                            },
                            { 
                                name:"Roasted Pork Belly",
                                path:"vitamin/dish/pork/6.png",
                            },
                            { 
                                name:"Pork Marinade",
                                path:"vitamin/dish/pork/7.png",
                            },
                            { 
                                name:"Chile Pork",
                                path:"vitamin/dish/pork/8.png",
                            },
                           

                        ]
                    },
                    {
                        title: "Mushrooms",
                        path: "vitamin/6.png",
                        content: "Mushrooms are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B2, B3, B5, and D. Mushrooms are highly nutritious while being low in carbs and calories."
                            },
                            {
                                info: "Good choices include portobello, cremini (button), and shiitake mushrooms."
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Vegan Mushroom and Kale Soup",
                                path:"vitamin/dish/mushroom/1.png",
                            },
                            { 
                                name:"Cooked Mushroom Salad",
                                path:"vitamin/dish/mushroom/2.png",
                            },
                            { 
                                name:"Easy Mushroom Rice",
                                path:"vitamin/dish/mushroom/3.png",
                            },
                            { 
                                name:"Vegan Gluten-Free Mushroom Soup",
                                path:"vitamin/dish/mushroom/4.png",
                            },
                            { 
                                name:"Wild Mushroom Sauce",
                                path:"vitamin/dish/mushroom/5.png",
                            },
                            { 
                                name:"Curried Squash-Mushroom Soup",
                                path:"vitamin/dish/mushroom/6.png",
                            },
                            { 
                                name:"Mushroom Salad",
                                path:"vitamin/dish/mushroom/7.png",
                            },
                            { 
                                name:"Mushroom and Swiss Burger",
                                path:"vitamin/dish/mushroom/8.png",
                            },
                           

                        ]
                    },
                    {
                        title: "Nuts",
                        path: "vitamin/7.png",
                        content: "Nuts are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B1, B2, B6, and E. Nuts are a heart-healthy, cholesterol-lowering snack."
                            },
                            {
                                info: "Try not to have more than 1-2 handfuls a day. Good choices for nuts include almonds and walnuts."
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Swedish Nuts",
                                path:"vitamin/dish/nuts/1.png",
                            },
                            { 
                                name:"Glazed Nuts",
                                path:"vitamin/dish/nuts/2.png",
                            },
                            { 
                                name:"Hickory Nut Cake",
                                path:"vitamin/dish/nuts/3.png",
                            },
                            { 
                                name:"Sweet, Salty, Spicy Party Nuts",
                                path:"vitamin/dish/nuts/4.png",
                            },
                            { 
                                name:"Beer Nut Cookies",
                                path:"vitamin/dish/nuts/5.png",
                            },
                            { 
                                name:"Pignoli Nut Pie",
                                path:"vitamin/dish/nuts/6.png",
                            },
                            { 
                                name:"Orange Nut Raisin Cake",
                                path:"vitamin/dish/nuts/7.png",
                            },
                            { 
                                name:"Asparagus with Prosciutto and Pine Nuts",
                                path:"vitamin/dish/nuts/8.png",
                            },
                                
                           

                        ]
                    },
                    {
                        title: "Eggs",
                        path: "vitamin/8.png",
                        content: "Eggs are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B2, B5, B12, and D."
                            },
                            {
                                info: "While eggs are now considered heart healthy, they are still high in cholesterol, so try not to eat more than 2 a day."
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Egg custard",
                                path:"vitamin/dish/eggs/1.png",
                            },
                            { 
                                name:"Easter egg cheesecake",
                                path:"vitamin/dish/eggs/2.png",
                            },
                            { 
                                name:"Breakfast egg wraps",
                                path:"vitamin/dish/eggs/3.png",
                            },
                            { 
                                name:"Gordon's eggs benedict",
                                path:"vitamin/dish/eggs/4.png",
                            },
                            { 
                                name:"Easy egg muffins",
                                path:"vitamin/dish/eggs/5.png",
                            },
                            { 
                                name:"Noodles with crispy chilli oil eggs",
                                path:"vitamin/dish/eggs/6.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"vitamin/dish/eggs/7.png",
                            },
                            { 
                                name:"Soft-boiled eggs",
                                path:"vitamin/dish/eggs/8.png",
                            },
                            { 
                                name:"Smoky beans & baked eggs",
                                path:"vitamin/dish/eggs/9.png",
                            },
                            { 
                                name:"Classic devilled eggs",
                                path:"vitamin/dish/eggs/10.png",
                            },    
                           

                        ]
                    },
                    {
                        title: "Sweet-Bell-Peppers",
                        path: "vitamin/9.png",
                        content: "Bell Peppers are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins A, and C, Beta-Carotene, and Lycopene."
                            },
                            {
                                info: "Bell Peppers are one of the foods highest in vitamin C"
                            },  
                            {
                                info: "Colorful red and yellow peppers have higher amounts of beta-carotene and lycopene than green peppers"
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Sweet Bell Pepper Rice",
                                path:"vitamin/dish/sweet_bell_paper/1.png",
                            },
                            { 
                                name:"Paper Salmon",
                                path:"vitamin/dish/sweet_bell_paper/2.png",
                            },
                            { 
                                name:"Potatoes in Paper",
                                path:"vitamin/dish/sweet_bell_paper/3.png",
                            },
                            { 
                                name:"Paper-Wrapped Chicken",
                                path:"vitamin/dish/sweet_bell_paper/4.png",
                            },
                            { 
                                name:"Paper-Wrapped Apple Pie",
                                path:"vitamin/dish/sweet_bell_paper/5.png",
                            },
                            { 
                                name:"Paper-Wrapped Apple Pie",
                                path:"vitamin/dish/sweet_bell_paper/6.png",
                            },
                            { 
                                name:"Rice Paper Fake Bacon",
                                path:"vitamin/dish/sweet_bell_paper/7.png",
                            },
                            { 
                                name:"Paper-Wrapped Apple Pie",
                                path:"vitamin/dish/sweet_bell_paper/8.png",
                            },
                            

                        ]
                    },
                    {
                        title: "Avocados",
                        path: "vitamin/10.png",
                        content: "Avocados are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins B5, B6, B9, and E."
                            },
                            {
                                info: "Avocados are high in calories and fat, so try not to eat more than 1/2 a large avocado, or 1 small avocado, a day."
                            },  
                            {
                                info:"The avocado is different from most other fruits."
                            },
                            {
                                info:"Avocados are among the best sources of potassium in the diet, even containing 40% more potassium than bananas, a typical high potassium food."
                            },
                            

                        ],
                        images: [
                            { 
                                name:"Avocado Gazpacho",
                                path:"vitamin/dish/avocado/1.png",
                            },
                            { 
                                name:"Fried Plantains With Avocado Dip",
                                path:"vitamin/dish/avocado/2.png",
                            },
                            { 
                                name:"Easy Avocado Chicken Salad",
                                path:"vitamin/dish/avocado/3.png",
                            },
                            { 
                                name:"Avocado Aioli",
                                path:"vitamin/dish/avocado/4.png",
                            },
                            { 
                                name:"Pasta Salad with Avocado and Shrimp",
                                path:"vitamin/dish/avocado/5.png",
                            },
                            { 
                                name:"Avocado Dressing",
                                path:"vitamin/dish/avocado/6.png",
                            },
                            { 
                                name:"Avocado Toast",
                                path:"vitamin/dish/avocado/7.png",
                            },
                            { 
                                name:"Avocado Dessert",
                                path:"vitamin/dish/avocado/8.png",
                            },

                        ]
                    },
                    {
                        title: "Green-Peas",
                        path: "vitamin/11.png",
                        content: "Peas are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins A, B1, E, and Beta Carotene. "
                            },
                            {
                                info: "Green peas are also a good vegetarian source of protein."
                            },  
                            
                        ],
                        images: [
                            { 
                                name:"Lazy Green Peas",
                                path:"vitamin/dish/green_peas/1.png",
                            },
                            { 
                                name:"Green Pea and Mint Soup",
                                path:"vitamin/dish/green_peas/2.png",
                            },
                            { 
                                name:"Green Pea Salad With Cheese",
                                path:"vitamin/dish/green_peas/3.png",
                            },
                            { 
                                name:"Green Pea and Ham Salad",
                                path:"vitamin/dish/green_peas/4.png",
                            },
                            { 
                                name:"Green Pea Pesto",
                                path:"vitamin/dish/green_peas/5.png",
                            },
                            { 
                                name:"Finnish Summer Soup",
                                path:"vitamin/dish/green_peas/6.png",
                            },
                            { 
                                name:"Green Pea Poulourie",
                                path:"vitamin/dish/green_peas/7.png",
                            },
                            { 
                                name:"reen Pea Casserole",
                                path:"vitamin/dish/green_peas/8.png",
                            },

                        ]
                    },
                    {
                        title: "Green-Peas",
                        path: "vitamin/11.png",
                        content: "Peas are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins A, B1, E, and Beta Carotene. "
                            },
                            {
                                info: "Green peas are also a good vegetarian source of protein."
                            },  
                            
                        ],
                        images: [
                            { 
                                name:"Lazy Green Peas",
                                path:"vitamin/dish/green_peas/1.png",
                            },
                            { 
                                name:"Green Pea and Mint Soup",
                                path:"vitamin/dish/green_peas/2.png",
                            },
                            { 
                                name:"Green Pea Salad With Cheese",
                                path:"vitamin/dish/green_peas/3.png",
                            },
                            { 
                                name:"Green Pea and Ham Salad",
                                path:"vitamin/dish/green_peas/4.png",
                            },
                            { 
                                name:"Green Pea Pesto",
                                path:"vitamin/dish/green_peas/5.png",
                            },
                            { 
                                name:"Finnish Summer Soup",
                                path:"vitamin/dish/green_peas/6.png",
                            },
                            { 
                                name:"Green Pea Poulourie",
                                path:"vitamin/dish/green_peas/7.png",
                            },
                            { 
                                name:"reen Pea Casserole",
                                path:"vitamin/dish/green_peas/8.png",
                            },

                        ]
                    },
                    {
                        title: "Dried-Fruits",
                        path: "vitamin/12.png",
                        content: "Dried Fruits are a good source for 4 of 14 essential vitamins.",
                        data: [
                            {
                                info: "These include Vitamins A, B6, K, and Beta Carotene."
                            },
                            {
                                info: "Dried fruits are high in sugar, try not to eat more than 1 handful a day."
                            },  
                            
                        ],
                        images: [
                            { 
                                name:"Delicious Dried Cranberry Muffins",
                                path:"vitamin/dish/dried_food/1.png",
                            },
                            { 
                                name:"Dried Cranberry Banana Bread",
                                path:"vitamin/dish/dried_food/2.png",
                            },
                            { 
                                name:"Winning Dried Cranberry Cookies",
                                path:"vitamin/dish/dried_food/3.png",
                            },
                            { 
                                name:"Cranberry Sauce",
                                path:"vitamin/dish/dried_food/4.png",
                            },
                            { 
                                name:"Dried Cranberry Bars",
                                path:"vitamin/dish/dried_food/5.png",
                            },
                            { 
                                name:"Delicious Cake Recipe Using Dried Cranberries",
                                path:"vitamin/dish/dried_food/6.png",
                            },
                            { 
                                name:"Cranberry Scones",
                                path:"vitamin/dish/dried_food/7.png",
                            },
                            { 
                                name:"Craisins Bread Recipe",
                                path:"vitamin/dish/dried_food/8.png",
                            },

                        ]
                    },
                ]
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData")
    }
}

// add mineral

const setFoodItems = async () => {
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nutrient: "mineral",
                items: [
                    {
                        title: "Nuts-and-seeds",
                        path: "mineral/1.png",
                        content: "Nuts and seeds are packed with an array of minerals but particularly rich in magnesium, zinc, manganese, copper, selenium, and phosphorus",
                        data: [
                            {
                                info: "Certain nuts and seeds stand out for their mineral content."
                            },
                            {
                                info: "For example, just one Brazil nut provides 174% of your daily selenium needs, while a 1/4-cup (28-gram) serving of pumpkin seeds delivers 40% of your daily magnesium needs"
                            },
                            {
                                info: "Whole nuts and seeds make a convenient, nutrient-dense snack, while nut and seed butters can be incorporated into smoothies and oatmeal or paired with fresh fruit or vegetables."
                            },
                        ],
                        images: [
                            { 
                                name:"Swedish Nuts",
                                path:"mineral/dish/nuts/1.png",
                            },
                            { 
                                name:"Glazed Nuts",
                                path:"mineral/dish/nuts/2.png",
                            },
                            { 
                                name:"Hickory Nut Cake",
                                path:"mineral/dish/nuts/3.png",
                            },
                            { 
                                name:"Sweet, Salty, Spicy Party Nuts",
                                path:"mineral/dish/nuts/4.png",
                            },
                            { 
                                name:"Beer Nut Cookies",
                                path:"mineral/dish/nuts/5.png",
                            },
                            { 
                                name:"Pignoli Nut Pie",
                                path:"mineral/dish/nuts/6.png",
                            },
                            { 
                                name:"Orange Nut Raisin Cake",
                                path:"mineral/dish/nuts/7.png",
                            },
                            { 
                                name:"Asparagus with Prosciutto and Pine Nuts",
                                path:"mineral/dish/nuts/8.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Shellfish",
                        path: "mineral/2.png",
                        content: "Consuming 6 medium-sized oysters (84 grams) covers your daily needs for zinc and copper and provides 30% and 22% of your daily needs for selenium and iron, respectively",
                        data: [
                            {
                                info: "Shellfish, including oysters, clams, and mussels, are concentrated sources of minerals and packed with selenium, zinc, copper, and iron."
                            },
                            {
                                info: "Zinc is a nutrient that’s essential for immune function, DNA production, cellular division, and the production of proteins."
                            },
                            {
                                info: "Pregnant and breastfeeding women, those with gastrointestinal disease, people taking certain medications, adolescents, and older adults are populations that are at risk for zinc deficiency, which can impair immune response, hinder growth and development, and increase infection risk."
                            },
                        ],
                        images: [
                            { 
                                name:"Shellfish, orzo & saffron stew",
                                path:"mineral/dish/shellfish/1.png",
                            },
                            { 
                                name:"Thai shellfish pot",
                                path:"mineral/dish/shellfish/2.png",
                            },
                            { 
                                name:"Shellfish soup",
                                path:"mineral/dish/shellfish/3.png",
                            },
                            { 
                                name:"Spicy seafood spaghetti",
                                path:"mineral/dish/shellfish/4.png",
                            },
                            { 
                                name:"Spicy Sichuan-style prawns",
                                path:"mineral/dish/shellfish/5.png",
                            },
                            { 
                                name:"Thai mussels & prawns",
                                path:"mineral/dish/shellfish/6.png",
                            },
                            { 
                                name:"Seafood tagine",
                                path:"mineral/dish/shellfish/7.png",
                            },
                            { 
                                name:"Linguine with garlic butter prawns",
                                path:"mineral/dish/shellfish/8.png",
                            },
                            { 
                                name:"Spiced crab cakes with lemon & lime aïoli",
                                path:"mineral/dish/shellfish/9.png",
                            },
                            { 
                                name:"Special seafood & saffron pasta",
                                path:"mineral/dish/shellfish/10.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Cruciferous-vegetables",
                        path: "mineral/3.png",
                        content: "These health benefits are directly related to the nutrient density of these veggies, including their impressive concentration of minerals.",
                        data: [
                            {
                                info: "Eating cruciferous vegetables like cauliflower, broccoli, Swiss chard, and Brussels sprouts, is associated with numerous health benefits, including the reduction of chronic disease."
                            },
                            {
                                info: "Cruciferous vegetables, including broccoli, kale, cabbage, and watercress, are especially rich in sulfur, a mineral that’s necessary for cellular function, DNA production, detoxification, and the synthesis of glutathione, a powerful antioxidant produced by your body."
                            },
                            {
                                info: "In addition to sulfur, cruciferous vegetables are a good source of many other minerals, including magnesium, potassium, manganese, and calcium."
                            },
                        ],
                        images: [
                            { 
                                name:"Cauliflower with Capers and Lemon",
                                path:"mineral/dish/cruciferous/1.png",
                            },
                            { 
                                name:"Parmesan Roasted Cauliflower",
                                path:"mineral/dish/cruciferous/2.png",
                            },
                            { 
                                name:"Cabbage Balushka or Cabbage and Noodles",
                                path:"mineral/dish/cruciferous/3.png",
                            },
                            { 
                                name:"Buttered-Braised Cabbage",
                                path:"mineral/dish/cruciferous/4.png",
                            },
                            { 
                                name:" Whole Earth Kale Salad",
                                path:"mineral/dish/cruciferous/5.png",
                            },
                            { 
                                name:"Sausage, Kale, and White Bean Soup",
                                path:"mineral/dish/cruciferous/6.png",
                            },
                            { 
                                name:"Oven Roasted Cabbage",
                                path:"mineral/dish/cruciferous/7.png",
                            },
                            { 
                                name:"Easy Roasted Cabbage",
                                path:"mineral/dish/cruciferous/8.png",
                            },
                            
                                   
                        ]
                    },
                    {
                        title: "organ-meats",
                        path: "mineral/4.png",
                        content: "a slice (85 grams) of beef liver covers your daily copper needs and provides 55%, 41%, 31%, and 33% of your daily needs for selenium, zinc, iron, and phosphorus, respectively",
                        data: [
                            {
                                info: "Although not as popular as protein sources like chicken and steak, organ meats are amongst the most mineral-dense foods you can eat."
                            },
                            {
                                info: "Additionally, organ meats are high in protein and vitamins, including vitamin B12, vitamin A, and folate"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Meat fondue",
                                path:"mineral/dish/organ_meat/1.png",
                            },
                            { 
                                name:"Slow-cooker beef stew",
                                path:"mineral/dish/organ_meat/2.png",
                            },
                            { 
                                name:"Slow-cooked soy-glazed chicken",
                                path:"mineral/dish/organ_meat/3.png",
                            },
                            { 
                                name:"One-pot prawn & lentil currye",
                                path:"mineral/dish/organ_meat/4.png",
                            },
                            { 
                                name:" Slow cooker leg of lamb",
                                path:"mineral/dish/organ_meat/5.png",
                            },
                            { 
                                name:"Glazed gammon",
                                path:"mineral/dish/organ_meat/6.png",
                            },
                            { 
                                name:"Bang bang cauliflower",
                                path:"mineral/dish/organ_meat/7.png",
                            },
                            { 
                                name:"Next level ratatouille",
                                path:"mineral/dish/organ_meat/8.png",
                            },
                            { 
                                name:"Three-cheese meatball lasagne",
                                path:"mineral/dish/organ_meat/9.png",
                            },
                            { 
                                name:"Paella mixta",
                                path:"mineral/dish/organ_meat/10.png",
                            },
                            
                                   
                        ]
                    },
                    {
                        title: "Eggs",
                        path: "mineral/5.png",
                        content: "Eggs are often referred to as nature’s multivitamin — and for good reason. Whole eggs are rich in nutrients and provide many important minerals.",
                        data: [
                            {
                                info: "They’re high in iron, phosphorus, zinc, and selenium, as well as many vitamins, healthy fats, antioxidants, and proteins ."
                            },
                            {
                                info: "Although many people avoid egg yolks due to their cholesterol content, the yolks contain nearly all of the vitamins, minerals, and other beneficial compounds, so make sure to eat the whole egg, not just the white"
                            },
                            {
                                info:"What we’re left with is one of the most nutrient dense foods on the planet."
                            },
                            {
                                info:"Eggs are also a weight loss friendly food. They are very fulfilling and high in protein, the most important nutrient for weight loss."
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Egg custard",
                                path:"mineral/dish/egg/1.png",
                            },
                            { 
                                name:"Easter egg cheesecake",
                                path:"mineral/dish/egg/2.png",
                            },
                            { 
                                name:"Breakfast egg wraps",
                                path:"mineral/dish/egg/3.png",
                            },
                            { 
                                name:"Gordon's eggs benedict",
                                path:"mineral/dish/egg/4.png",
                            },
                            { 
                                name:"Easy egg muffins",
                                path:"mineral/dish/egg/5.png",
                            },
                            { 
                                name:"Noodles with crispy chilli oil eggs",
                                path:"mineral/dish/egg/6.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"mineral/dish/egg/7.png",
                            },
                            { 
                                name:"Soft-boiled eggs",
                                path:"mineral/dish/egg/8.png",
                            },
                            { 
                                name:"Smoky beans & baked eggs",
                                path:"mineral/dish/egg/9.png",
                            },
                            { 
                                name:"Classic devilled eggs",
                                path:"mineral/dish/egg/10.png",
                            },         
                            
                                   
                        ]
                    },
                    {
                        title: "Beans",
                        path: "mineral/6.png",
                        content: "Beans are known for being packed with fiber and protein, but they also happen to be an abundant source of minerals, including calcium, magnesium, iron, phosphorus, potassium, manganese, copper, and zinc",
                        data: [
                            {
                                info: "beans also contain antinutrients, including phytates, which can decrease nutrient absorption."
                            },
                            {
                                info: "research has shown that properly preparing beans by sprouting or soaking and cooking them can help increase the bioavailability of minerals."
                            },
                        
                        ],
                        images: [
                            { 
                                name:"Bob's Bean Salad",
                                path:"mineral/dish/bean/1.png",
                            },
                            { 
                                name:"Hot Mexican Bean Dip",
                                path:"mineral/dish/bean/2.png",
                            },
                            { 
                                name:"Marinated Green Bean Salad",
                                path:"mineral/dish/bean/3.png",
                            },
                            { 
                                name:"Three Bean Salad",
                                path:"mineral/dish/bean/4.png",
                            },
                            { 
                                name:"Bean Salad",
                                path:"mineral/dish/bean/5.png",
                            },
                            { 
                                name:"Easy Cheesy Bean Dip",
                                path:"mineral/dish/bean/6.png",
                            },
                            { 
                                name:" Dairy-Free Green Bean Casserole",
                                path:"mineral/dish/bean/7.png",
                            },
                            { 
                                name:"Creamy Black Bean Soup",
                                path:"mineral/dish/bean/8.png",
                            },
                          
                                   
                        ]
                    },  
                    {
                        title: "Cocoa",
                        path: "mineral/7.png",
                        content: "Adding cocoa to smoothies, munching on a piece of dark chocolate, or sprinkling your yogurt with cacao nibs are satisfying ways to increase your mineral intake.",
                        data: [
                            {
                                info: "Although they’re not often associated with being nutrient-dense, cocoa products are loaded with minerals. Cocoa and cocoa products are particularly rich in magnesium and copper"
                            },
                            {
                                info: "Magnesium is needed for energy production, blood pressure regulation, nerve function, blood sugar control, and more"
                            },
                            {
                                info: "Copper is required for proper growth and development, carbohydrate metabolism, iron absorption, and red blood cell formation, in addition to many other important bodily processes"
                            },
                        
                        ],
                        images: [
                            { 
                                name:"Healthy Hot Cocoa",
                                path:"mineral/dish/cocoa/1.png",
                            },
                            { 
                                name:"Cocoa Rub",
                                path:"mineral/dish/cocoa/2.png",
                            },
                            { 
                                name:"Cocoa Oatmeal Cookies",
                                path:"mineral/dish/cocoa/3.png",
                            },
                            { 
                                name:"Snow Flake Cocoa",
                                path:"mineral/dish/cocoa/4.png",
                            },
                            { 
                                name:"Oatmeal Cocoa Macaroons",
                                path:"mineral/dish/cocoa/5.png",
                            },
                            { 
                                name:"Cocoa-Nut Pancakes",
                                path:"mineral/dish/cocoa/6.png",
                            },
                            { 
                                name:"Coconut Hot Cocoa",
                                path:"mineral/dish/cocoa/7.png",
                            },
                            { 
                                name:"Cold Cocoa Smoothie",
                                path:"mineral/dish/cocoa/8.png",
                            },
                          
                                   
                        ]
                    },
                    {
                        title: "Avocados",
                        path: "mineral/8.png",
                        content: "Avocados are creamy fruits packed with healthy fats, fiber, vitamins, and minerals. They’re especially rich in magnesium, potassium, manganese, and copper",
                        data: [
                            {
                                info: "Potassium is a mineral that’s essential for blood pressure regulation and heart health. Studies have shown that diets high in potassium-rich foods like avocados may help reduce your risk of heart disease and stroke."
                            },
                            {
                                info: "A review of 33 studies that included 128,644 people found that higher potassium intake was associated with a 24% reduced risk of stroke and reduction in heart disease risk factors like high blood pressure levels "
                            },
                        
                        ],
                        images: [
                            { 
                                name:"Avocado Gazpacho",
                                path:"mineral/dish/avocado/1.png",
                            },
                            { 
                                name:"Fried Plantains With Avocado Dip",
                                path:"mineral/dish/avocado/2.png",
                            },
                            { 
                                name:"Easy Avocado Chicken Salad",
                                path:"mineral/dish/avocado/3.png",
                            },
                            { 
                                name:"Avocado Aioli",
                                path:"mineral/dish/avocado/4.png",
                            },
                            { 
                                name:"Pasta Salad with Avocado and Shrimp",
                                path:"mineral/dish/avocado/5.png",
                            },
                            { 
                                name:"Avocado Dressing",
                                path:"mineral/dish/avocado/6.png",
                            },
                            { 
                                name:"Avocado Toast",
                                path:"mineral/dish/avocado/7.png",
                            },
                            { 
                                name:"Avocado Dessert",
                                path:"mineral/dish/avocado/8.png",
                            },

                          
                                   
                        ]
                    },  
                    {
                        title: "Berries",
                        path: "mineral/9.png",
                        content: "Berries, including strawberries, blueberries, blackberries, and raspberries, are not only delicious but also an excellent source of important minerals.",
                        data: [
                            {
                                info: "Berries are a good source of potassium, magnesium, and manganese. Manganese is a mineral that’s essential for a number of metabolic functions involved in energy metabolism, as well as immune and nervous system function"
                            },
                            {
                                info: "This mineral is also needed for the growth and maintenance of healthy bone and connective tissues, as well as the creation of antioxidants that help protect cells against oxidative damage"
                            },
                        
                        ],
                        images: [
                            { 
                                name:"Mixed Berry Compote",
                                path:"mineral/dish/berry/1.png",
                            },
                            { 
                                name:"Berry Saft",
                                path:"mineral/dish/berry/2.png",
                            },
                            { 
                                name:"Saskatoon Berry (Serviceberry) Pie",
                                path:"mineral/dish/berry/3.png",
                            },
                            { 
                                name:"Chia-Berry Swirl Oats",
                                path:"mineral/dish/berry/4.png",
                            },
                            { 
                                name:"Very Berry Chocolate Milk Shake",
                                path:"mineral/dish/berry/5.png",
                            },
                            { 
                                name:"Champagne Sorbet with Berry Medley",
                                path:"mineral/dish/berry/6.png",
                            },
                            { 
                                name:"Mixed Berries Smoothie",
                                path:"mineral/dish/berry/7.png",
                            },
                            { 
                                name:"Berry Fruit Salad",
                                path:"mineral/dish/berry/8.png",
                            },

                          
                                   
                        ]
                    },   
                    {
                        title: "Yogurt-and-cheese",
                        path: "mineral/10.png",
                        content: "Dairy products, including yogurt and cheese, are some of the most common sources of calcium in the diet",
                        data: [
                            {
                                info: "Calcium is needed to maintain a healthy skeletal system and essential for your nervous system and heart health"
                            },
                            {
                                info: "Studies show that many people, especially older adults, do not consume enough calcium in their diets "
                            },
                            {
                                info: "Adding high quality dairy like yogurt and cheese to your diet is a good way to increase your intake of calcium, as well as other minerals like potassium, phosphorus, zinc, and selenium "
                            },
                            {
                                info: "However, many people are intolerant to dairy products. If you cannot eat dairy, many other foods contain calcium, including beans, nuts, and leafy greens. "
                            },
                        
                        ],
                        images: [
                            { 
                                name:"Yogurt Soup",
                                path:"mineral/dish/yogurt_cheese/1.png",
                            },
                            { 
                                name:"Creamy Vanilla Frozen Yogurt",
                                path:"mineral/dish/yogurt_cheese/2.png",
                            },
                            { 
                                name:"Yogurt Cake",
                                path:"mineral/dish/yogurt_cheese/3.png",
                            },
                            { 
                                name:"Banana Pudding and Yogurt Parfaits",
                                path:"mineral/dish/yogurt_cheese/4.png",
                            },
                            { 
                                name:"Lamb Chops with Minted Yogurt Sauce",
                                path:"mineral/dish/yogurt_cheese/5.png",
                            },
                            { 
                                name:"Cheese Ball with Cream Cheese",
                                path:"mineral/dish/yogurt_cheese/6.png",
                            },
                            { 
                                name:"Jim's Beer Mac and Cheese Gratin",
                                path:"mineral/dish/yogurt_cheese/7.png",
                            },
                            { 
                                name:"Tangy Cheese Bites",
                                path:"mineral/dish/yogurt_cheese/8.png",
                            },

                          
                                   
                        ]
                    },
                    {
                        title: "Sardines",
                        path: "mineral/11.png",
                        content: "Sardines are nutritional powerhouses and contain almost every vitamin and mineral your body needs to thrive.",
                        data: [
                            {
                                info: "One 3.75-ounce (106-gram) can of sardines provides 27%, 15%, 9%, 36%, 8%, and 88% of your daily needs for calcium, iron, magnesium, phosphorus, potassium, and selenium, respectively."
                            },
                            {
                                info: "They’re also an excellent source of anti-inflammatory omega-3 fats"
                            },
                           
                        ],
                        images: [
                            { 
                                name:"Sardines & peperonata on wholemeal toast",
                                path:"mineral/dish/sardines/1.png",
                            },
                            { 
                                name:"Sardine pasta with crunchy parsley crumbs",
                                path:"mineral/dish/sardines/2.png",
                            },
                            { 
                                name:" BBQ sardines with chermoula sauce",
                                path:"mineral/dish/sardines/3.png",
                            },
                            { 
                                name:"Grilled harissa sardines with fennel & potato sala",
                                path:"mineral/dish/sardines/4.png",
                            },
                            { 
                                name:"Sardines & tomatoes on toast",
                                path:"mineral/dish/sardines/5.png",
                            },
                            { 
                                name:"Spicy fennel linguine with sardines & capers",
                                path:"mineral/dish/sardines/6.png",
                            },
                            { 
                                name:"Salsa spaghetti with sardines",
                                path:"mineral/dish/sardines/7.png",
                            },
                            { 
                                name:"Spaghetti with sardines",
                                path:"mineral/dish/sardines/8.png",
                            },
                            { 
                                name:"Chimichurri-style steak sarnies & cheat's spicy fries",
                                path:"mineral/dish/sardines/9.png",
                            },
                            { 
                                name:"Sardine storecupboard spaghetti",
                                path:"mineral/dish/sardines/10.png",
                            },

                          
                                   
                        ]
                    }, 
                    {
                        title: "Spirulina",
                        path: "mineral/12.png",
                        content: "It’s loaded with minerals like iron, magnesium, potassium, copper, and manganese, and consuming it may benefit your health in many ways",
                        data: [
                            {
                                info: "Spirulina is a blue-green alga that’s sold in powder form and can be added to beverages like smoothies, as well as dishes like yogurt and oatmeal."
                            },
                            {
                                info: "For example, research shows that consuming spirulina may help reduce heart disease risk factors, including high LDL (bad) cholesterol levels"
                            },
                            {
                                info: "Plus, it may help decrease blood sugar levels and markers of inflammation"
                            },
                           
                        ],
                        images: [
                            { 
                                name:"Spirulina Chia Pudding",
                                path:"mineral/dish/spirulina/1.png",
                            },
                            { 
                                name:"Spirulina Banana Whip",
                                path:"mineral/dish/spirulina/2.png",
                            },
                            { 
                                name:" Spirulina Protein Power Bites",
                                path:"mineral/dish/spirulina/3.png",
                            },
                            { 
                                name:"Grilled Eggplant With Spirulina Basil Pesto and Tofu",
                                path:"mineral/dish/spirulina/4.png",
                            },
                            { 
                                name:"Mermaid Salmon Toast",
                                path:"mineral/dish/spirulina/5.png",
                            },
                            { 
                                name:"Superpowered Quinoa Vegan Risotto",
                                path:"mineral/dish/spirulina/6.png",
                            },
                            { 
                                name:"Spirulina Pesto Pasta",
                                path:"mineral/dish/spirulina/7.png",
                            },
                            { 
                                name:"Raw Spirulina Chocolate",
                                path:"mineral/dish/spirulina/8.png",
                            },
                                 
                        ]
                    },                    
                ]
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData")
    }
}



// add Water
const setFoodItems = async () => {
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nutrient: "water",
                items: [
                    {
                        title: "Watermelon",
                        path: "water/1.png",
                        content: "92%",
                        data: [
                            {
                                info: "A 1-cup (154-gram) serving contains over a half cup (118 ml) of water, in addition to some fiber and several important nutrients, including vitamin C, vitamin A and magnesium. It is also quite low in calories, providing only 46 calories per cup "
                            },
                            {
                                info: "Because of their high water content, watermelons have a very low calorie density. That means that a relatively large portion of watermelon contains very few calories."
                            },
                            {
                                info: "Foods with low calorie densities have been shown to help with weight loss by promoting fullness and reducing appetite"
                            },
                        ],
                        images: [
                            { 
                                name:"French Watermelon",
                                path:"water/dish/watermelon/1.png",
                            },
                            { 
                                name:" Boozy Watermelon",
                                path:"water/dish/watermelon/2.png",
                            },
                            { 
                                name:"Watermelon Surprize",
                                path:"water/dish/watermelon/3.png",
                            },
                            { 
                                name:"Watermelon Delight",
                                path:"water/dish/watermelon/4.png",
                            },
                            { 
                                name:"Watermelon and Blue Cheese Salad",
                                path:"water/dish/watermelon/5.png",
                            },
                            { 
                                name:"Easy Watermelon Salad",
                                path:"water/dish/watermelon/6.png",
                            },
                            { 
                                name:"Watermelon Salad",
                                path:"water/dish/watermelon/7.png",
                            },
                            { 
                                name:"Watermelon Soup",
                                path:"water/dish/watermelon/8.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Strawberries",
                        path: "water/2.png",
                        content: "91%",
                        data: [
                            {
                                info: "Strawberries have a high water content, making them a very hydrating food. "
                            },
                            {
                                info: "Because about 91% of strawberries’ weight comes from water, eating them will contribute to your daily water intake."
                            },
                            {
                                info: "Furthermore, strawberries provide lots of fiber, disease-fighting antioxidants and vitamins and minerals, including vitamin C, folate and manganese"
                            },
                            {
                                info: "It is easy to include strawberries in your diet by blending them into smoothies or incorporating them into salads. They also make for a unique addition to sandwiches and wraps."
                            },
                        ],
                        images: [
                            { 
                                name:"Strawberry Delight",
                                path:"water/dish/strawberries/1.png",
                            },
                            { 
                                name:" Fresh Strawberry Cake",
                                path:"water/dish/strawberries/2.png",
                            },
                            { 
                                name:"Strawberry Blast Smoothie",
                                path:"water/dish/strawberries/3.png",
                            },
                            { 
                                name:"Fresh Strawberry Bread",
                                path:"water/dish/strawberries/4.png",
                            },
                            { 
                                name:"Fresh Strawberry Muffins",
                                path:"water/dish/strawberries/5.png",
                            },
                            { 
                                name:" Simple Strawberry Sauce",
                                path:"water/dish/strawberries/6.png",
                            },
                            { 
                                name:"Healthy and Tasty Strawberry Sherbet",
                                path:"water/dish/strawberries/7.png",
                            },
                            { 
                                name:"Simple Strawberry Syrup",
                                path:"water/dish/strawberries/8.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Cantaloupe",
                        path: "water/3.png",
                        content: "90%",
                        data: [
                            {
                                info: "Cantaloupe is a melon that’s extremely nutritious and may boost your health in several ways."
                            },
                            {
                                info: "One cup (177 grams) of cantaloupe is composed of about 90% water and delivers more than a half cup (118 ml) of water per serving"
                            },
                            {
                                info: "One cup of cantaloupe also contains 2 grams of fiber, which works together with water to promote fullness and reduce your appetite"
                            },
                            {
                                info: "Additionally, cantaloupe is rich in vitamin A, providing 120% of your daily needs in a 1-cup (177-gram) serving. Studies have shown that vitamin A may boost immune health by protecting against infection."
                            },
                        ],
                        images: [
                            { 
                                name:"Cantaloupe Frenzyt",
                                path:"water/dish/cantaloupe/1.png",
                            },
                            { 
                                name:" Quick Cantaloupe Juice",
                                path:"water/dish/cantaloupe/2.png",
                            },
                            { 
                                name:"Cantaloupe Berry Smoothie",
                                path:"water/dish/cantaloupe/3.png",
                            },
                            { 
                                name:"Cantaloupe Crunch",
                                path:"water/dish/cantaloupe/4.png",
                            },
                            { 
                                name:"Spinach Cantaloupe Salad with Mint",
                                path:"water/dish/cantaloupe/5.png",
                            },
                            { 
                                name:" Cantaloupe Muffins with Praline Topping",
                                path:"water/dish/cantaloupe/6.png",
                            },
                            { 
                                name:"Cantaloupe Bread with Praline Glaze",
                                path:"water/dish/cantaloupe/7.png",
                            },
                            { 
                                name:"Gee-Gee's Chicken Salad with Cantaloupe",
                                path:"water/dish/cantaloupe/8.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Peaches",
                        path: "water/4.png",
                        content: "89%",
                        data: [
                            {
                                info: "Peaches are a very nutrient-dense and hydrating fruit."
                            },
                            {
                                info: "Close to 90% of their weight is water. They also provide several important vitamins and minerals, such as vitamin A, vitamin C, B vitamins and potassium"
                            },
                            {
                                info: "Furthermore, eating peaches with the skin on may also contribute disease-fighting antioxidants like chlorogenic acid to your diet"
                            },
                            {
                                info: "Peaches’ water and fiber contents are why they are so filling and low in calories, with only 60 calories in a medium peach "
                            },
                        ],
                        images: [
                            { 
                                name:"Pickled Peaches",
                                path:"water/dish/peaches/1.png",
                            },
                            { 
                                name:"The Dreamiest Peaches",
                                path:"water/dish/peaches/2.png",
                            },
                            { 
                                name:"Delicious Pickled Peaches",
                                path:"water/dish/peaches/3.png",
                            },
                            { 
                                name:"Baked Peaches in Cream",
                                path:"water/dish/peaches/4.png",
                            },
                            { 
                                name:"Grilled Peaches and Ice Cream",
                                path:"water/dish/peaches/5.png",
                            },
                            { 
                                name:"Tipsy Peaches",
                                path:"water/dish/peaches/6.png",
                            },
                            { 
                                name:" Honey-Spiced Peaches",
                                path:"water/dish/peaches/7.png",
                            },
                            { 
                                name:"Grilled Peaches",
                                path:"water/dish/peaches/8.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Oranges",
                        path: "water/5.png",
                        content: "88%",
                        data: [
                            {
                                info: "Oranges are incredibly healthy and may provide a number of health benefits.."
                            },
                            {
                                info: "There is almost a half cup (118 ml) of water in one orange, along with fiber and several nutrients"
                            },
                            {
                                info: "These include vitamin C and potassium, which may boost your immune function and heart health"
                            },
                            {
                                info: "Oranges are also rich in disease-fighting antioxidants, including flavonoids, which may prevent cell damage by reducing inflammation "
                            },
                        ],
                        images: [
                            { 
                                name:"Lemon-Orange Orange Roughy",
                                path:"water/dish/orange/1.png",
                            },
                            { 
                                name:"Orange and Fennel Salad",
                                path:"water/dish/orange/2.png",
                            },
                            { 
                                name:"Orange Loaf",
                                path:"water/dish/orange/3.png",
                            },
                            { 
                                name:"Orange Juice Goji Berries Smoothie",
                                path:"water/dish/orange/4.png",
                            },
                            { 
                                name:"Orange Glazed Ham",
                                path:"water/dish/orange/5.png",
                            },
                            { 
                                name:"Orange Bread",
                                path:"water/dish/orange/6.png",
                            },
                            { 
                                name:"Fresh Orange Juice",
                                path:"water/dish/orange/7.png",
                            },
                            { 
                                name:"Spicy Orange Chicken Wing Sauce",
                                path:"water/dish/orange/8.png",
                            },     
                                   
                        ]
                    },
                    {
                        title: "Skim-Milk",
                        path: "water/6.png",
                        content: "91%",
                        data: [
                            {
                                info: "It’s made up of mostly water and provides a considerable amount of vitamins and minerals, including vitamin A, calcium, riboflavin, vitamin B12, phosphorus and potassium"
                            },
                            {
                                info: "Not only does milk help with overall hydration, but it may also help you rehydrate after strenuous exercise"
                            },
                            {
                                info: "A few studies have shown that low-fat milk helped people stay hydrated after a workout, compared to sports drinks or plain water "
                            },
                            {
                                info: "This is partly due to milk’s electrolytes and protein content, which may help replace body fluid losses"
                            },
                        ],
                        images: [
                            { 
                                name:"Milk Banana Smoothie",
                                path:"water/dish/milk/1.png",
                            },
                            { 
                                name:"Sweetened Condensed Milk",
                                path:"water/dish/milk/2.png",
                            },
                            { 
                                name:"Milk Bread",
                                path:"water/dish/milk/3.png",
                            },
                            { 
                                name:" Hokkaido Milk Bread",
                                path:"water/dish/milk/4.png",
                            },
                            { 
                                name:"Banana Milk Coffee",
                                path:"water/dish/milk/5.png",
                            },
                            { 
                                name:"Milk Chocolate Peppermint Bark",
                                path:"water/dish/milk/6.png",
                            },
                            { 
                                name:"Malted Milk Chip Cookies",
                                path:"water/dish/milk/7.png",
                            },
                            { 
                                name:"Milk Chocolate Cheesecake",
                                path:"water/dish/milk/8.png",
                            },
                            { 
                                name:"Vegan Sweetened Condensed Milk",
                                path:"water/dish/milk/9.png",
                            },
                            { 
                                name:"Coconut Milk Flan",
                                path:"water/dish/milk/10.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Cucumber",
                        path: "water/7.png",
                        content: "95%",
                        data: [
                            {
                                info: "They are made up almost entirely of water and also provide a small amount of some nutrients, such as vitamin K, potassium and magnesium"
                            },
                            {
                                info: "Compared to other water-rich vegetables, cucumbers are one of the lowest in calories. There are only 8 calories in a half-cup (52-gram) serving, and their water content makes them very refreshing"
                            },
                            {
                                info: "You can eat a relatively large portion of cucumbers without adding a significant number of calories to your diet, which is helpful for maintaining your weight"
                            },
                            {
                                info: "It’s easy to incorporate cucumbers into your diet. They are commonly added to salads and sandwiches, but they can also be included in cooked dishes like stir-fries and soups."
                            },
                        ],
                        images: [
                            { 
                                name:"Japanese Cucumber Sunomonoe",
                                path:"water/dish/cucumber/1.png",
                            },
                            { 
                                name:"Cucumber Pear Smoothie",
                                path:"water/dish/cucumber/2.png",
                            },
                            { 
                                name:"Cucumber Salad with Borage Flowers",
                                path:"water/dish/cucumber/3.png",
                            },
                            { 
                                name:"Tissy's Cucumber Salad",
                                path:"water/dish/cucumber/4.png",
                            },
                            { 
                                name:"Chilled Cucumber and Wood Ear Mushroom Salad",
                                path:"water/dish/cucumber/5.png",
                            },
                            { 
                                name:"Vegetarian Keema Matar with Cucumber Raita",
                                path:"water/dish/cucumber/6.png",
                            },
                            { 
                                name:"Cucumber Caprese Salad",
                                path:"water/dish/cucumber/7.png",
                            },
                            { 
                                name:"Easy Tangy Cucumber Salad",
                                path:"water/dish/cucumber/8.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Lettuce",
                        path: "water/8.png",
                        content: "96%",
                        data: [
                            {
                                info: "One cup (72 grams) of lettuce provides more than a quarter cup (59 ml) of water, in addition to 1 gram of fiber. It also provides 5% of your daily needs for folate"
                            },
                            {
                                info: "Folate is important for pregnant women, as it can help prevent neural tube birth defects "
                            },
                            {
                                info: "Additionally, lettuce is high in vitamins K and A, both of which have been studied for their roles in keeping your bones and immune system healthy"
                            },
                            {
                                info: "Furthermore, the combination of water and fiber in lettuce makes it very filling for a low number of calories. There are only 10 calories in a 1-cup (72-gram) serving"
                            },
                        ],
                        images: [
                            { 
                                name:"Iceberg Lettuce Salad with Radishes",
                                path:"water/dish/lettuce/1.png",
                            },
                            { 
                                name:"Vegan Asian Lettuce Wraps",
                                path:"water/dish/lettuce/2.png",
                            },
                            { 
                                name:"Easy Lettuce Wraps",
                                path:"water/dish/lettuce/3.png",
                            },
                            { 
                                name:"Asian Lettuce Wraps",
                                path:"water/dish/lettuce/4.png",
                            },
                            { 
                                name:"Dressing for Garden Lettuce",
                                path:"water/dish/lettuce/5.png",
                            },
                            { 
                                name:"Taco Lettuce Wraps",
                                path:"water/dish/lettuce/6.png",
                            },
                            { 
                                name:"Easy Peking Duck Lettuce Cups",
                                path:"water/dish/lettuce/7.png",
                            },
                            { 
                                name:"Tuna Lettuce Wraps",
                                path:"water/dish/lettuce/8.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Broths-and-Soups",
                        path: "water/9.png",
                        content: "92%",
                        data: [
                            {
                                info: "Broths and soups are usually water-based and have the potential to be very hydrating and nutritious."
                            },
                            {
                                info: "For example, 1 cup (240 grams) of chicken broth is made almost entirely of water, which contributes a decent amount to your daily hydration needs"
                            },
                            {
                                info: "Consuming water-rich foods like broths and soups regularly may also promote weight loss due to their low calorie content."
                            },
                            {
                                info: "Many studies have found that those who consume soup before the main course of a meal eat fewer calories and therefore end up with a lower daily calorie intake "
                            },
                        ],
                        images: [
                            { 
                                name:"Mussels in Lime-Coconut Broth",
                                path:"water/dish/brothssoup/1.png",
                            },
                            { 
                                name:" Rich Homemade Chicken Broth",
                                path:"water/dish/brothssoup/2.png",
                            },
                            { 
                                name:"Slow Cooker Beef Bone Broth",
                                path:"water/dish/brothssoup/3.png",
                            },
                            { 
                                name:"Roasted Chicken Broth",
                                path:"water/dish/brothssoup/4.png",
                            },
                            { 
                                name:"Instant Pot Vegetable Broth",
                                path:"water/dish/brothssoup/5.png",
                            },
                            { 
                                name:"Marge's Bone Broth",
                                path:"water/dish/brothssoup/6.png",
                            },
                            { 
                                name:"Slow Cooker Bone Broth",
                                path:"water/dish/brothssoup/7.png",
                            },
                            { 
                                name:"Beef Bone Broth",
                                path:"water/dish/brothssoup/8.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Zucchini",
                        path: "water/10.png",
                        content: "94%",
                        data: [
                            {
                                info: "Zucchini is a nutritious vegetable that may provide several health benefits."
                            },
                            {
                                info: "A 1-cup (124-gram) serving of chopped zucchini contains more than 90% water and provides 1 gram of fiber. Both these components are great for keeping you full"
                            },
                            {
                                info: "And as a result of its high water content, zucchini is fairly low in calories by volume, with only 20 calories in 1 cup (124 grams) ."
                            },
                            {
                                info: "Eating zucchini will contribute several nutrients to your diet, especially vitamin C, since 1 cup (124 grams) of it contains 35% of your daily needs"
                            },
                        ],
                        images: [
                            { 
                                name:"Marinated Zucchini",
                                path:"water/dish/zucchini/1.png",
                            },
                            { 
                                name:" Grandma's Chocolate Zucchini Bread",
                                path:"water/dish/zucchini/2.png",
                            },
                            { 
                                name:"Mascarpone Zucchini Pizza",
                                path:"water/dish/zucchini/3.png",
                            },
                            { 
                                name:"Zucchini Parmesan",
                                path:"water/dish/zucchini/4.png",
                            },
                            { 
                                name:"Zucchini Smoothie",
                                path:"water/dish/zucchini/5.png",
                            },
                            { 
                                name:"Zucchini Puffs",
                                path:"water/dish/zucchini/6.png",
                            },
                            { 
                                name:"Vegan Zucchini Brownies",
                                path:"water/dish/zucchini/7.png",
                            },
                            { 
                                name:"Steamed Zucchini",
                                path:"water/dish/zucchini/8.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Celery",
                        path: "water/11.png",
                        content: "95%",
                        data: [
                            {
                                info: "Celery is a very healthy and hydrating food to include in your diet."
                            },
                            {
                                info: "Like other water-rich vegetables, celery may be a beneficial weight loss food due to its high water content and low number of calories"
                            },
                            {
                                info: "It’s particularly high in vitamin K and potassium, which may protect against heart disease, certain types of cancer and bone-related diseases like osteoporosis ."
                            },
                            {
                                info: "It’s quite simple to incorporate celery into your diet, as it can be eaten raw or cooked. You can add it to soups and salads, or eat celery sticks along with a healthy dip such as hummus or Greek yogurt."
                            },
                        ],
                        images: [
                            { 
                                name:"Celery Salti",
                                path:"water/dish/celery/1.png",
                            },
                            { 
                                name:" Cream of Celery Soup",
                                path:"water/dish/celery/2.png",
                            },
                            { 
                                name:"Fennel and Celery Salad",
                                path:"water/dish/celery/3.png",
                            },
                            { 
                                name:"Creamy Celery Casserole",
                                path:"water/dish/celery/4.png",
                            },
                            { 
                                name:"Stuffed Celery",
                                path:"water/dish/celery/5.png",
                            },
                            { 
                                name:"Curried Celery",
                                path:"water/dish/celery/6.png",
                            },
                            { 
                                name:"Zesty Celery Sour",
                                path:"water/dish/celery/7.png",
                            },
                            { 
                                name:"Egg Salad with Celery",
                                path:"water/dish/celery/8.png",
                            },
                           
                        ]
                    },
                    {
                        title: "Plain-Yogurt",
                        path: "water/12.png",
                        content: "88%",
                        data: [
                            {
                                info: "Plain yogurt contains lots of water and nutrients that may boost several aspects of your health."
                            },
                            {
                                info: "A 1-cup (245-gram) serving of plain yogurt is made up of more than 75% water. It also provides several vitamins and minerals, such as calcium, phosphorus and potassium, all of which are known to help promote bone health"
                            },
                            {
                                info: "Yogurt is also a great source of protein, providing more than 8 grams and about 17% of your daily needs in a 1-cup (245-gram) serving"
                            },
                            {
                                info: "Eating yogurt on a regular basis has been shown to promote weight loss, an effect that’s largely due to the appetite-reducing effects of its high water and protein contents"
                            },
                        ],
                        images: [
                            { 
                                name:"Yogurt Soup",
                                path:"water/dish/yogurt/1.png",
                            },
                            { 
                                name:"Creamy Vanilla Frozen Yogurt",
                                path:"water/dish/yogurt/2.png",
                            },
                            { 
                                name:"Yogurt Cake",
                                path:"water/dish/yogurt/3.png",
                            },
                            { 
                                name:"Banana Pudding and Yogurt Parfaits",
                                path:"water/dish/yogurt/4.png",
                            },
                            { 
                                name:"Lamb Chops with Minted Yogurt Sauce",
                                path:"water/dish/yogurt/5.png",
                            },
                            { 
                                name:"Kefir Yogurt",
                                path:"water/dish/yogurt/6.png",
                            },
                            { 
                                name:"Greek Yogurt Carbonara",
                                path:"water/dish/yogurt/7.png",
                            },
                            { 
                                name:"Slow Cooker Yogurt",
                                path:"water/dish/yogurt/8.png",
                            },
                        ]
                    },
                                     
                ]
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData")
    }
}



// add iron
const setFoodItems = async () => {
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nutrient: "iron",
                items: [
                    {
                        title: "Shellfish",
                        path: "iron/1.png",
                        content: "For instance, a 3.5-ounce (100-gram) serving of clams may contain up to 3 mg of iron, which is 17% of the DV",
                        data: [
                            {
                                info: "Shellfish is tasty and nutritious. All shellfish is high in iron, but clams, oysters, and mussels are particularly good sources. "
                            },
                            {
                                info: "However, the iron content of clams is highly variable, and some types may contain much lower amounts"
                            },
                            {
                                info: "The iron in shellfish is heme iron, which your body absorbs more easily than the non-heme iron found in plants."
                            },
                            {
                                info: "A 3.5-ounce serving of clams also provides 26 grams of protein, 24% of the DV for vitamin C, and a whopping 4,125% of the DV for vitamin B12."
                            },
                        ],
                        images: [
                            { 
                                name:"Shellfish, orzo & saffron stew",
                                path:"iron/dish/shellfish/1.png",
                            },
                            { 
                                name:"Thai shellfish pot",
                                path:"iron/dish/shellfish/2.png",
                            },
                            { 
                                name:"Shellfish soup",
                                path:"iron/dish/shellfish/3.png",
                            },
                            { 
                                name:"Spicy seafood spaghetti",
                                path:"iron/dish/shellfish/4.png",
                            },
                            { 
                                name:"Spicy Sichuan-style prawns",
                                path:"iron/dish/shellfish/5.png",
                            },
                            { 
                                name:"Thai mussels & prawns",
                                path:"iron/dish/shellfish/6.png",
                            },
                            { 
                                name:"Seafood tagine",
                                path:"iron/dish/shellfish/7.png",
                            },
                            { 
                                name:"Linguine with garlic butter prawns",
                                path:"iron/dish/shellfish/8.png",
                            },
                            { 
                                name:"Spiced crab cakes with lemon & lime aïoli",
                                path:"iron/dish/shellfish/9.png",
                            },
                            { 
                                name:"Special seafood & saffron pasta",
                                path:"iron/dish/shellfish/10.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Spinach",
                        path: "iron/2.png",
                        content: "About 3.5 ounces (100 grams) of raw spinach contain 2.7 mg of iron, or 15% of the DV",
                        data: [
                            {
                                info: "Spinach provides many health benefits but very few calories. "
                            },
                            {
                                info: "Although this is non-heme iron, which isn’t absorbed very well, spinach is also rich in vitamin C. This is important since vitamin C significantly boosts iron absorption"
                            },
                            {
                                info: "Spinach is also rich in antioxidants called carotenoids, which may reduce your risk of cancer, decrease inflammation, and protect your eyes from disease"
                            },
                            {
                                info: "Consuming spinach and other leafy greens with fat helps your body absorb the carotenoids, so make sure to eat a healthy fat like olive oil with your spinach"
                            },
                        ],
                        images: [
                            { 
                                name:"Creamed spinach",
                                path:"iron/dish/spinach/1.png",
                            },
                            { 
                                name:"Chicken, spinach & bacon alfredo pasta bake",
                                path:"iron/dish/spinach/2.png",
                            },
                            { 
                                name:"Caramelised squash & spinach lasagne",
                                path:"iron/dish/spinach/3.png",
                            },
                            { 
                                name:"Spinach, sweet potato & lentil dhal",
                                path:"iron/dish/spinach/4.png",
                            },
                            { 
                                name:"Tomato & spinach kitchari",
                                path:"iron/dish/spinach/5.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"iron/dish/spinach/6.png",
                            },
                            { 
                                name:"Lamb & spinach spanakopita",
                                path:"iron/dish/spinach/7.png",
                            },
                            { 
                                name:"Chickpea, spinach & almond butter bowl",
                                path:"iron/dish/spinach/8.png",
                            },
                            { 
                                name:"Creamy garlic, lemon & spinach salmon",
                                path:"iron/dish/spinach/9.png",
                            },
                            { 
                                name:"Sweet potato, spinach & feta tortilla",
                                path:"iron/dish/spinach/10.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Organ-Meat",
                        path: "iron/3.png",
                        content: "a 3.5-ounce (100-gram) serving of beef liver contains 6.5 mg of iron, or 36% of the DV",
                        data: [
                            {
                                info: "Organ meats are extremely nutritious. Popular types include liver, kidneys, brain, and heart — all of which are high in iron. "
                            },
                            {
                                info: "Organ meats are also high in protein and rich in B vitamins, copper, and selenium."
                            },
                            {
                                info: "Liver is especially high in vitamin A, providing an impressive 1,049% of the DV per 3.5-ounce serving."
                            },
                            {
                                info: "What’s more, organ meats are among the best sources of choline, an important nutrient for brain and liver health that many people don’t get enough of"
                            },
                        ],
                        images: [
                            { 
                                name:"Meat fondue",
                                path:"iron/dish/organ_meat/1.png",
                            },
                            { 
                                name:"Slow-cooker beef stew",
                                path:"iron/dish/organ_meat/2.png",
                            },
                            { 
                                name:"Slow-cooked soy-glazed chicken",
                                path:"iron/dish/organ_meat/3.png",
                            },
                            { 
                                name:"One-pot prawn & lentil currye",
                                path:"iron/dish/organ_meat/4.png",
                            },
                            { 
                                name:" Slow cooker leg of lamb",
                                path:"iron/dish/organ_meat/5.png",
                            },
                            { 
                                name:"Glazed gammon",
                                path:"iron/dish/organ_meat/6.png",
                            },
                            { 
                                name:"Bang bang cauliflower",
                                path:"iron/dish/organ_meat/7.png",
                            },
                            { 
                                name:"Next level ratatouille",
                                path:"iron/dish/organ_meat/8.png",
                            },
                            { 
                                name:"Three-cheese meatball lasagne",
                                path:"iron/dish/organ_meat/9.png",
                            },
                            { 
                                name:"Paella mixta",
                                path:"iron/dish/organ_meat/10.png",
                            },   
                        ]
                    }, 
                    {
                        title: "Legumes",
                        path: "iron/4.png",
                        content: "They’re a great source of iron, especially for vegetarians. One cup (198 grams) of cooked lentils contains 6.6 mg, which is 37% of the DV",
                        data: [
                            {
                                info: "Beans like black beans, navy beans, and kidney beans can all help easily bump up your iron intake."
                            },
                            {
                                info: "In fact, a half-cup (86-gram) serving of cooked black beans provides around 1.8 grams of iron, or 10% of the DV"
                            },
                            {
                                info: "Legumes are also a good source of folate, magnesium, and potassium."
                            },
                            {
                                info: "What’s more, studies have shown that beans and other legumes can reduce inflammation in people with diabetes. Legumes can also decrease heart disease risk for people with metabolic syndrome"
                            },
                        ],
                        images: [
                            { 
                                name:"SALADS",
                                path:"iron/dish/legumes/1.png",
                            },
                            { 
                                name:"SOUPS & STEWS",
                                path:"iron/dish/legumes/2.png",
                            },
                            { 
                                name:"DIPS",
                                path:"iron/dish/legumes/3.png",
                            },
                            { 
                                name:"hicken, Leek and Dijon Casserole",
                                path:"iron/dish/legumes/4.png",
                            },
                            { 
                                name:"Cilantro Lime Chicken and Lentil Rice Bowls",
                                path:"iron/dish/legumes/5.png",
                            },
                            { 
                                name:"Lentil Greek Salad with Dill Sauce",
                                path:"iron/dish/legumes/6.png",
                            },
                            { 
                                name:"Creamy Borracho Beans",
                                path:"iron/dish/legumes/7.png",
                            },
                            { 
                                name:"Yellow Split Pea and Bacon Soup",
                                path:"iron/dish/legumes/8.png",
                            },
                            { 
                                name:"Instant Pot Mujadara",
                                path:"iron/dish/legumes/9.png",
                            },
                            { 
                                name:"Easy Taco Soup",
                                path:"iron/dish/legumes/10.png",
                            },   
                        ]
                    },    
                    {
                        title: "Red-meat",
                        path: "iron/5.png",
                        content: "A 3.5-ounce (100-gram) serving of ground beef contains 2.7 mg of iron, which is 15% of the DV",
                        data: [
                            {
                                info: "Meat is also rich in protein, zinc, selenium, and several B vitamins (24Trusted Source)."
                            },
                            {
                                info: "Researchers have suggested that iron deficiency may be less likely in people who eat meat, poultry, and fish on a regular basis"
                            },
                            {
                                info: "In fact, red meat is probably the single most easily accessible source of heme iron, potentially making it an important food for people who are prone to anemia."
                            },
                            {
                                info: "In one study looking at changes in iron stores after aerobic exercise, women who consumed meat retained iron better than those who took iron supplements"
                            },
                        ],
                        images: [
                            { 
                                name:"Doreen's Steak Marinade",
                                path:"iron/dish/red_meat/1.png",
                            },
                            { 
                                name:"Ravioli With Shrimp Rose Sauce",
                                path:"iron/dish/red_meat/2.png",
                            },
                            { 
                                name:"Fried Steak with Peppercorn Gravy Sauce",
                                path:"iron/dish/red_meat/3.png",
                            },
                            { 
                                name:"Chicken Pepper Steak",
                                path:"iron/dish/red_meat/4.png",
                            },
                            { 
                                name:"Borscht with Meat",
                                path:"iron/dish/red_meat/5.png",
                            },
                            { 
                                name:"Bolognese Tagliatelle",
                                path:"iron/dish/red_meat/6.png",
                            },
                            { 
                                name:"Chanterelle Shazam",
                                path:"iron/dish/red_meat/7.png",
                            },
                            { 
                                name:"Garlic and Herb Marinade for Steak",
                                path:"iron/dish/red_meat/8.png",
                            },
                            { 
                                name:"Meat Candy",
                                path:"iron/dish/red_meat/9.png",
                            },
                            { 
                                name:"Meat Gravy",
                                path:"iron/dish/red_meat/10.png",
                            },   
                        ]
                    },  
                    {
                        title: "Pumpkin-seeds",
                        path: "iron/6.png",
                        content: "A 1-ounce (28-gram) serving of pumpkin seeds contains 2.5 mg of iron, which is 14% of the DV",
                        data: [
                            {
                                info: "Pumpkin seeds are a tasty, portable snack."
                            },
                            {
                                info: "In addition, pumpkin seeds are a good source of vitamin K, zinc, and manganese. They’re also among the best sources of magnesium, which many people are low in."
                            },
                            {
                                info: "A 1-ounce (28-gram) serving contains 40% of the DV for magnesium, which helps reduce your risk of insulin resistance, diabetes, and depression "
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Healing Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/1.png",
                            },
                            { 
                                name:"Baked Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/2.png",
                            },
                            { 
                                name:"Spiced Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/3.png",
                            },
                            { 
                                name:"Air Fryer Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/4.png",
                            },
                            { 
                                name:"Caramelized Spicy Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/5.png",
                            },
                            { 
                                name:"Cinnamon Toast Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/6.png",
                            },
                            { 
                                name:"Toasted Pumpkin Seeds with Sugar and Spice",
                                path:"iron/dish/pumpkin_seeds/7.png",
                            },
                            { 
                                name:"Cajun Spiced Roasted Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/8.png",
                            },
                            { 
                                name:"Maryland Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/9.png",
                            },
                            { 
                                name:"Seasoned Pumpkin Seeds",
                                path:"iron/dish/pumpkin_seeds/10.png",
                            },   
                        ]
                    },   
                    {
                        title: "Quinoa",
                        path: "iron/7.png",
                        content: "Quinoa is a popular grain known as a pseudocereal. One cup (185 grams) of cooked quinoa provides 2.8 mg of iron, which is 16% of the DV ",
                        data: [
                            {
                                info: "Furthermore, quinoa contains no gluten, making it a good choice for people with celiac disease or other forms of gluten intolerance.."
                            },
                            {
                                info: "Quinoa is also higher in protein than many other grains, as well as rich in folate, magnesium, copper, manganese, and many other nutrients."
                            },
                            {
                                info: "In addition, quinoa has more antioxidant activity than many other grains. "
                            },
                            {
                                info: "Antioxidants help protect your cells from damage from free radicals, which are formed during metabolism and in response to stress "
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Quinoa chilli with avocado & coriander",
                                path:"iron/dish/quinoa/1.png",
                            },
                            { 
                                name:"Fennel-roasted cauliflower with quinoa",
                                path:"iron/dish/quinoa/2.png",
                            },
                            { 
                                name:"Halloumi & quinoa fattoush",
                                path:"iron/dish/quinoa/3.png",
                            },
                            { 
                                name:"Coriander salmon with curried quinoa & pomegranate",
                                path:"iron/dish/quinoa/4.png",
                            },
                            { 
                                name:"Quinoa salad with eggs & dill",
                                path:"iron/dish/quinoa/5.png",
                            },
                            { 
                                name:"Quinoa salad with avocado mayo",
                                path:"iron/dish/quinoa/6.png",
                            },
                            { 
                                name:"South American-style quinoa with fried eggs",
                                path:"iron/dish/quinoa/7.png",
                            },
                            { 
                                name:"Vegan beetroot & quinoa burgers",
                                path:"iron/dish/quinoa/8.png",
                            },
                            { 
                                name:"Vegetable tagine with apricot quinoa",
                                path:"iron/dish/quinoa/9.png",
                            },
                            { 
                                name:"Quinoa-stuffed peppers",
                                path:"iron/dish/quinoa/10.png",
                            },     
                        ]
                    },   
                    {
                        title: "Turkey",
                        path: "iron/8.png",
                        content: "A 3.5-ounce (100-gram) portion of dark turkey meat has 1.4 mg of iron, which is 8% of the DV",
                        data: [
                            {
                                info: "Turkey meat is a healthy and delicious food. It’s also a good source of iron, especially dark turkey meat."
                            },
                            {
                                info: "In comparison, the same amount of white turkey meat contains only 0.7 mg "
                            },
                            {
                                info: "Dark turkey meat also packs an impressive 28 grams of protein per serving and several B vitamins and minerals, including 32% of the DV for zinc and 57% of the DV for selenium."
                            },
                            {
                                info: "Consuming high protein foods like turkey may aid weight loss, as protein makes you feel full and increases your metabolic rate after a meal"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Turkey tikka masala",
                                path:"iron/dish/turkey/1.png",
                            },
                            { 
                                name:"Crispy chilli turkey noodles",
                                path:"iron/dish/turkey/2.png",
                            },
                            { 
                                name:"Next level roast turkey",
                                path:"iron/dish/turkey/3.png",
                            },
                            { 
                                name:"Leftover turkey fricassee",
                                path:"iron/dish/turkey/4.png",
                            },
                            { 
                                name:"Turkey curry patties",
                                path:"iron/dish/turkey/5.png",
                            },
                            { 
                                name:"Next level turkey & ham pie",
                                path:"iron/dish/turkey/6.png",
                            },
                            { 
                                name:"Mediterranean turkey-stuffed peppers",
                                path:"iron/dish/turkey/7.png",
                            },
                            { 
                                name:"Turkey escalopes & giant couscous",
                                path:"iron/dish/turkey/8.png",
                            },
                            { 
                                name:"Harissa turkey burgers",
                                path:"iron/dish/turkey/9.png",
                            },
                            { 
                                name:" Roast turkey breast",
                                path:"iron/dish/turkey/10.png",
                            },     
                        ]
                    },      
                    {
                        title: "Broccoli",
                        path: "iron/9.png",
                        content: "Broccoli is incredibly nutritious. A 1-cup (156-gram) serving of cooked broccoli contains 1 mg of iron, which is 6% of the DV",
                        data: [
                            {
                                info: "What’s more, a serving of broccoli also packs 112% of the DV for vitamin C, which helps your body absorb the iron better"
                            },
                            {
                                info: "The same serving size is also high in folate and provides 5 grams of fiber, as well as some vitamin K. Broccoli is a member of the cruciferous vegetable family, which also includes cauliflower, Brussels sprouts, kale, and cabbage."
                            },
                            {
                                info: "Cruciferous vegetables contain indole, sulforaphane, and glucosinolates, which are plant compounds believed to protect against cancer."
                            },
                        ],
                        images: [
                            { 
                                name:"Broccoli Baked",
                                path:"iron/dish/broccoli/1.png",
                            },
                            { 
                                name:"Broccoli Salad with French Dressing",
                                path:"iron/dish/broccoli/2.png",
                            },
                            { 
                                name:"Buttermilk Chicken with Chargrilled Broccoli",
                                path:"iron/dish/broccoli/3.png",
                            },
                            { 
                                name:"Chatpatti Broccoli",
                                path:"iron/dish/broccoli/4.png",
                            },
                            { 
                                name:"Broccoli and Cheddar Crepes",
                                path:"iron/dish/broccoli/5.png",
                            },
                            { 
                                name:"Cream of Broccoli Soup",
                                path:"iron/dish/broccoli/6.png",
                            },
                            { 
                                name:"Broccoli Pasta",
                                path:"iron/dish/broccoli/7.png",
                            },
                            { 
                                name:"Salmon with Broccoli",
                                path:"iron/dish/broccoli/8.png",
                            },
                            { 
                                name:"Roasted Bell Pepper with Broccoli Salad",
                                path:"iron/dish/broccoli/9.png",
                            },
                            { 
                                name:"Broccoli Soup with Wasabi",
                                path:"iron/dish/broccoli/10.png",
                            },             
                        ]
                    },
                    {
                        title: "Tofu",
                        path: "iron/10.png",
                        content: "A half-cup (126-gram) serving provides 3.4 mg of iron, which is 19% of the DV",
                        data: [
                            {
                                info: "Tofu is a soy-based food that’s popular among vegetarians and in some Asian countries."
                            },
                            {
                                info: "Tofu is also a good source of thiamine and several minerals, including calcium, magnesium, and selenium. In addition, it provides 22 grams of protein per serving."
                            },
                            {
                                info: "Tofu contains unique compounds called isoflavones, which have been linked to improved insulin sensitivity, a decreased risk of heart disease, and relief from menopausal symptoms"
                            },
                        ],
                        images: [
                            { 
                                name:" Crispy tofu",
                                path:"iron/dish/tofu/1.png",
                            },
                            { 
                                name:"Sweet & sour tofu",
                                path:"iron/dish/tofu/2.png",
                            },
                            { 
                                name:"Tofu scramble",
                                path:"iron/dish/tofu/3.png",
                            },
                            { 
                                name:"Mapo tofu",
                                path:"iron/dish/tofu/4.png",
                            },
                            { 
                                name:"Salt & pepper tofu",
                                path:"iron/dish/tofu/5.png",
                            },
                            { 
                                name:"Smoked tofu vegan burger",
                                path:"iron/dish/tofu/6.png",
                            },
                            { 
                                name:" Miso mushroom & tofu noodle soup",
                                path:"iron/dish/tofu/7.png",
                            },
                            { 
                                name:"Charred spring onions & teriyaki tofu",
                                path:"iron/dish/tofu/8.png",
                            },
                            { 
                                name:"Sticky tofu with noodles",
                                path:"iron/dish/tofu/9.png",
                            },
                            { 
                                name:"Thai green tofu noodles",
                                path:"iron/dish/tofu/10.png",
                            },             
                        ]
                    }, 
                    {
                        title: "Dark-Chocolate",
                        path: "iron/11.png",
                        content: "A 1-ounce (28-gram) serving contains 3.4 mg of iron, which is 19% of the DV",
                        data: [
                            {
                                info: "Dark chocolate is incredibly delicious and nutritious."
                            },
                            {
                                info: "This small serving also packs 56% and 15% of the DVs for copper and magnesium, respectively."
                            },
                            {
                                info: "A study found that cocoa powder and dark chocolate had more antioxidant activity than powders and juices made from acai berries and blueberries."
                            },
                            {
                                info: "However, not all chocolate is created equal. It’s believed that compounds called flavanols are responsible for chocolate’s benefits, and the flavanol content of dark chocolate is much higher than that of milk chocolate"
                            },
                        ],
                        images: [
                            { 
                                name:"Dark Chocolate Cupcakes",
                                path:"iron/dish/chocolate/1.png",
                            },
                            { 
                                name:"Dark Chocolate Souffle Cake",
                                path:"iron/dish/chocolate/2.png",
                            },
                            { 
                                name:"Dark Chocolate Orange Pudding",
                                path:"iron/dish/chocolate/3.png",
                            },
                            { 
                                name:"Dark Chocolate Cake",
                                path:"iron/dish/chocolate/4.png",
                            },
                            { 
                                name:"Dark Chocolate Biscuit",
                                path:"iron/dish/chocolate/5.png",
                            },
                            { 
                                name:"Choco Pie",
                                path:"iron/dish/chocolate/6.png",
                            },
                            { 
                                name:"Chocolate Shortbread",
                                path:"iron/dish/chocolate/7.png",
                            },
                            { 
                                name:"Dark Chocolate Almond Bar",
                                path:"iron/dish/chocolate/8.png",
                            },
                            { 
                                name:"Dark Chocolate Balls",
                                path:"iron/dish/chocolate/9.png",
                            },
                            { 
                                name:"Dark chocolate",
                                path:"iron/dish/chocolate/10.png",
                            },                
                        ]
                    }, 
                    {
                        title: "Fish",
                        path: "iron/12.png",
                        content: "In fact, a 3-ounce (85-gram) serving of canned tuna contains about 1.4 mg of iron, which is approximately 8% of the DV",
                        data: [
                            {
                                info: "Fish is a highly nutritious ingredient, and certain varieties like tuna are especially high in iron."
                            },
                            {
                                info: "Fish is also brimming with omega-3 fatty acids, which are a type of heart-healthy fat associated with a number of health benefits."
                            },
                            {
                                info: "particular, omega-3 fatty acids have been shown to promote brain health, enhance immune function, and support healthy growth and development"
                            },
                            {
                                info: "Fish also contains several other essential nutrients, including niacin, selenium, and vitamin B12"
                            },
                        ],
                        images: [
                            { 
                                name:"Shellfish, orzo & saffron stew",
                                path:"iron/dish/shellfish/1.png",
                            },
                            { 
                                name:"Thai shellfish pot",
                                path:"iron/dish/shellfish/2.png",
                            },
                            { 
                                name:"Shellfish soup",
                                path:"iron/dish/shellfish/3.png",
                            },
                            { 
                                name:"Spicy seafood spaghetti",
                                path:"iron/dish/shellfish/4.png",
                            },
                            { 
                                name:"Spicy Sichuan-style prawns",
                                path:"iron/dish/shellfish/5.png",
                            },
                            { 
                                name:"Thai mussels & prawns",
                                path:"iron/dish/shellfish/6.png",
                            },
                            { 
                                name:"Seafood tagine",
                                path:"iron/dish/shellfish/7.png",
                            },
                            { 
                                name:"Linguine with garlic butter prawns",
                                path:"iron/dish/shellfish/8.png",
                            },
                            { 
                                name:"Spiced crab cakes with lemon & lime aïoli",
                                path:"iron/dish/shellfish/9.png",
                            },
                            { 
                                name:"Special seafood & saffron pasta",
                                path:"iron/dish/shellfish/10.png",
                            },               
                        ]
                    }, 
                ]
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData")
    }
}


// add b12

const setFoodItems = async () => {
    try {
        // e.preventDefault()
        const result = await fetch(("/setNutrientsData"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nutrient: "Vitamin-B12",
                items: [
                    {
                        title: "Animal-liver-and-kidneys",
                        path: "b12/1.png",
                        content: "A 3.5-ounce (100-gram) serving of lamb liver provides an incredible 3,571% of the Daily Value (DV) for vitamin B12",
                        data: [
                            {
                                info: "Organ meats are some of the most nutritious foods out there. Liver and kidneys, especially from lamb, are rich in vitamin B12."
                            },
                            {
                                info: "While lamb liver is generally higher in vitamin B12 than beef or veal liver, the latter two may still contain about 3,000% of the DV per 3.5 ounces (100 grams)"
                            },
                            {
                                info: "Lamb liver is also very high in copper, selenium, and vitamins A and B2"
                            },
                            {
                                info: "Lamb, veal, and beef kidneys are also high in vitamin B12. Lamb kidneys provide about 3,000% of the DV per 3.5-ounce (100-gram) serving."
                            },
                        ],
                        images: [
                            { 
                                name:"Absolute Best Liver and Onions",
                                path:"b12/dish/liver_kidney/1.png",
                            },
                            { 
                                name:"Boxty with Liver and Bacon",
                                path:"b12/dish/liver_kidney/2.png",
                            },
                            { 
                                name:"Chili Liver",
                                path:"b12/dish/liver_kidney/3.png",
                            },
                            { 
                                name:"Liver and Bacon",
                                path:"b12/dish/liver_kidney/4.png",
                            },
                            { 
                                name:"Steak and Kidney Pie ",
                                path:"b12/dish/liver_kidney/5.png",
                            },
                            { 
                                name:"Steak and Kidney Pie ",
                                path:"b12/dish/liver_kidney/6.png",
                            },
                            { 
                                name:"Port & chicken liver pate",
                                path:"b12/dish/liver_kidney/7.png",
                            },
                            { 
                                name:"Steak & kidney pudding",
                                path:"b12/dish/liver_kidney/8.png",
                            },
                            { 
                                name:"Liver & mash",
                                path:"b12/dish/liver_kidney/9.png",
                            },
                            { 
                                name:"Liver parfait with Sauternes jelly",
                                path:"b12/dish/liver_kidney/10.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Clams",
                        path: "b12/2.png",
                        content: "This mollusk is a lean source of protein and contains very high concentrations of vitamin B12. You can get more than 7,000% of the DV in just 20 small clams",
                        data: [
                            {
                                info: "Clams are small, chewy shellfish that are packed with nutrients."
                            },
                            {
                                info: "Clams, especially whole baby clams, also provide great amounts of iron, with almost 200% of the DV in a 100-gram (3.5-ounce) serving of small clams "
                            },
                            {
                                info: "Clams have also been shown to be a good source of antioxidants"
                            },
                            {
                                info: "Interestingly, the broth of boiled clams is also high in vitamin B12. Canned broth has been shown to provide 113–588% of the DV per 3.5 ounces (100 grams)."
                            },
                        ],
                        images: [
                            { 
                                name:"Clam chowder",
                                path:"b12/dish/clams/1.png",
                            },
                            { 
                                name:"Spicy clam & kale linguine",
                                path:"b12/dish/clams/2.png",
                            },
                            { 
                                name:"Clams with sherry & Serrano ham",
                                path:"b12/dish/clams/3.png",
                            },
                            { 
                                name:"Korean clam broth - Jogaetang",
                                path:"b12/dish/clams/4.png",
                            },
                            { 
                                name:"Spicy clam & pork paella ",
                                path:"b12/dish/clams/5.png",
                            },
                            { 
                                name:"Clam, chorizo & white bean stew",
                                path:"b12/dish/clams/6.png",
                            },
                            { 
                                name:"20-minute seafood pasta",
                                path:"b12/dish/clams/7.png",
                            },
                            { 
                                name:"Steamed clams in saffron & spring green broth",
                                path:"b12/dish/clams/8.png",
                            },
                            { 
                                name:"New England clam chowder",
                                path:"b12/dish/clams/9.png",
                            },
                            { 
                                name:"Spanish meatballs with clams, chorizo & squid",
                                path:"b12/dish/clams/10.png",
                            },
                                   
                        ]
                    },
                    {
                        title: "Sardines",
                        path: "b12/3.png",
                        content: "A 1-cup (150-gram) serving of drained sardines provides 554% of the DV for vitamin B12 ",
                        data: [
                            {
                                info: "Sardines are small, soft-boned saltwater fish. They’re usually sold canned in water, oil, or sauces, though you can also buy them fresh."
                            },
                            {
                                info: "Sardines are super nutritious because they contain virtually every single nutrient in good amounts. "
                            },
                            {
                                info: "Furthermore, sardines are an excellent source of omega-3 fatty acids, which have been shown to provide many health benefits, such as reducing inflammation and improving heart health"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Sardines & peperonata on wholemeal toast",
                                path:"b12/dish/sardines/1.png",
                            },
                            { 
                                name:"Sardine pasta with crunchy parsley crumbs",
                                path:"b12/dish/sardines/2.png",
                            },
                            { 
                                name:" BBQ sardines with chermoula sauce",
                                path:"b12/dish/sardines/3.png",
                            },
                            { 
                                name:"Grilled harissa sardines with fennel & potato sala",
                                path:"b12/dish/sardines/4.png",
                            },
                            { 
                                name:"Sardines & tomatoes on toast",
                                path:"b12/dish/sardines/5.png",
                            },
                            { 
                                name:"Spicy fennel linguine with sardines & capers",
                                path:"b12/dish/sardines/6.png",
                            },
                            { 
                                name:"Salsa spaghetti with sardines",
                                path:"b12/dish/sardines/7.png",
                            },
                            { 
                                name:"Spaghetti with sardines",
                                path:"b12/dish/sardines/8.png",
                            },
                            { 
                                name:"Chimichurri-style steak sarnies & cheat's spicy fries",
                                path:"b12/dish/sardines/9.png",
                            },
                            { 
                                name:"Sardine storecupboard spaghetti",
                                path:"b12/dish/sardines/10.png",
                            },
   
                        ]
                    },
                    {
                        title: "Beef",
                        path: "b12/4.png",
                        content: "One grilled flat iron steak (about 190 grams) provides 467% of the DV for vitamin B12",
                        data: [
                            {
                                info: "Beef is an excellent source of vitamin B12.."
                            },
                            {
                                info: "Also, the same amount of steak contains reasonable amounts of vitamins B2, B3, and B6, as well as more than 100% of the DVs for selenium and zinc"
                            },
                            {
                                info: "If you’re looking for higher concentrations of vitamin B12, it’s recommended to choose from low fat cuts of meat. It’s also better to grill or roast it instead of frying. This helps preserve the vitamin B12 content"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Beef bourguignon",
                                path:"b12/dish/beef/1.png",
                            },
                            { 
                                name:"Beef curry",
                                path:"b12/dish/beef/2.png",
                            },
                            { 
                                name:"Slow-cooker beef stew",
                                path:"b12/dish/beef/3.png",
                            },
                            { 
                                name:" Beef stroganoff",
                                path:"b12/dish/beef/4.png",
                            },
                            { 
                                name:"Beef goulash",
                                path:"b12/dish/beef/5.png",
                            },
                            { 
                                name:"Beef ragout",
                                path:"b12/dish/beef/6.png",
                            },
                            { 
                                name:"Slow cooker beef bourguignon",
                                path:"b12/dish/beef/7.png",
                            },
                            { 
                                name:"Next level beef stroganoff",
                                path:"b12/dish/beef/8.png",
                            },
                            { 
                                name:"Next level minced beef tacos",
                                path:"b12/dish/beef/9.png",
                            },
                            { 
                                name:"Easy beef burritos",
                                path:"b12/dish/beef/10.png",
                            },
   
                        ]
                    },
                    {
                        title: "Fortified-cereal",
                        path: "b12/5.png",
                        content: "Malt-O-Meal Raisin Bran offer up to 62% of the DV for vitamin B12 in 1 cup (59 grams) ",
                        data: [
                            {
                                info: "This source of vitamin B12 may work well for vegetarians and vegans, as it’s synthetically made and not derived from animal sources"
                            },
                            {
                                info: "Although not commonly recommended as part of a healthy diet, fortified cereals can be a good source of B vitamins, especially B12. Food fortification is the process of adding nutrients that are not originally in the food."
                            },
                            {
                                info: "The same serving of this cereal also packs 29% of the DV for vitamin B6 and good amounts of vitamin A, folate, and iron "
                            },
                            {
                                info: "In fact, one study showed that when participants ate 1 cup (240 ml) of fortified cereal containing 4.8 mcg (200% of the DV) of vitamin B12 daily for 14 weeks, their vitamin B12 levels increased significantly "
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Cereal milk ice lollies",
                                path:"b12/dish/fortified_cereal/1.png",
                            },
                            { 
                                name:"Cereal Bread",
                                path:"b12/dish/fortified_cereal/2.png",
                            },
                            { 
                                name:"Cereal Treats",
                                path:"b12/dish/fortified_cereal/3.png",
                            },
                            { 
                                name:"Special Cereal Bars",
                                path:"b12/dish/fortified_cereal/4.png",
                            },
                            { 
                                name:"Chewy Cereal Cookies",
                                path:"b12/dish/fortified_cereal/5.png",
                            },
                            { 
                                name:"Crispy Cereal Mix",
                                path:"b12/dish/fortified_cereal/6.png",
                            },
                            { 
                                name:"Delicious Oat Bran Cereal",
                                path:"b12/dish/fortified_cereal/7.png",
                            },
                            { 
                                name:"Frosted Cereal Bars",
                                path:"b12/dish/fortified_cereal/8.png",
                            },
                            { 
                                name:"Cereal Chocolate Roll",
                                path:"b12/dish/fortified_cereal/9.png",
                            },
                            { 
                                name:"Healthy Cereal Jar",
                                path:"b12/dish/fortified_cereal/10.png",
                            },
   
                        ]
                    },
                    {
                        title: "Tuna",
                        path: "b12/6.png",
                        content: "A 3.5-ounce (100-gram) serving of cooked tuna contains 453% of the DV for the vitamin",
                        data: [
                            {
                                info: "Tuna is a commonly consumed fish and great source of nutrients, including protein, vitamins, and minerals."
                            },
                            {
                                info: "Tuna contains high concentrations of vitamin B12, especially in the muscles right beneath the skin, which are known as dark muscles "
                            },
                            {
                                info: "This same serving size also packs a good amount of lean protein, phosphorus, selenium, and vitamins A and B3 "
                            },
                            {
                                info: "Canned tuna also contains a decent amount of vitamin B12. In fact, a can (165 grams) of light tuna canned in water contains 115% of the DV"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Lemony tuna, tomato & caper one-pot pasta",
                                path:"b12/dish/tuna/1.png",
                            },
                            { 
                                name:"Pesto, cannellini bean & tuna jackets",
                                path:"b12/dish/tuna/2.png",
                            },
                            { 
                                name:"Seared tuna & cucumber salad",
                                path:"b12/dish/tuna/3.png",
                            },
                            { 
                                name:" Spice-cured tuna tacos",
                                path:"b12/dish/tuna/4.png",
                            },
                            { 
                                name:"Spinach & tuna pancakes",
                                path:"b12/dish/tuna/5.png",
                            },
                            { 
                                name:"Tuna & caper orzo with parsley",
                                path:"b12/dish/tuna/6.png",
                            },
                            { 
                                name:"Tuna, avocado & quinoa salad",
                                path:"b12/dish/tuna/7.png",
                            },
                            { 
                                name:"Tuna & sundried tomato pasta bake",
                                path:"b12/dish/tuna/8.png",
                            },                 
                            { 
                                name:"Blistered sweet potatoes with herby tuna",
                                path:"b12/dish/tuna/9.png",
                            },
                            { 
                                name:" Healthy tuna lettuce wraps",
                                path:"b12/dish/tuna/10.png",
                            },    
   
                        ]
                    },
                    {
                        title: " Fortified-nutritional-yeast",
                        path: "b12/7.png",
                        content: "Vitamin B12 is not naturally present in nutritional yeast. However, it’s commonly fortified, making it a great source of vitamin B12.",
                        data: [
                            {
                                info: "Nutritional yeast is a good vegan source of protein, vitamins, and minerals."
                            },
                            {
                                info: "It’s a species of yeast especially grown to be used as food, not as a leavening agent in bread and beer."
                            },
                            {
                                info: "As with fortified cereals, the vitamin B12 in nutritional yeast is vegan-friendly because it’s synthetically made "
                            },
                            {
                                info: "Two tablespoons (15 grams) of nutritional yeast may contain up to 733% of the DV for vitamin B12"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Quick Yeast Rolls",
                                path:"b12/dish/nutritional_yeast/1.png",
                            },
                            { 
                                name:"Lemon-Blueberry Yeast Bread",
                                path:"b12/dish/nutritional_yeast/2.png",
                            },
                            { 
                                name:"Glazed Yeast Doughnuts",
                                path:"b12/dish/nutritional_yeast/3.png",
                            },
                            { 
                                name:"Yeast Hot Rolls",
                                path:"b12/dish/nutritional_yeast/4.png",
                            },
                            { 
                                name:"Indian Tacos with Yeast Fry Bread",
                                path:"b12/dish/nutritional_yeast/5.png",
                            },
                            { 
                                name:"Corn Yeast Rolls",
                                path:"b12/dish/nutritional_yeast/6.png",
                            },
                            { 
                                name:"Yeast Raised Christmas Waffles",
                                path:"b12/dish/nutritional_yeast/7.png",
                            },
                            { 
                                name:"Yeast Pancakes from Transylvania",
                                path:"b12/dish/nutritional_yeast/8.png",
                            },                 
                            { 
                                name:"Easy Refrigerator Yeast Rolls",
                                path:"b12/dish/nutritional_yeast/9.png",
                            },
                            { 
                                name:" Yeast Waffles",
                                path:"b12/dish/nutritional_yeast/10.png",
                            },    
   
                        ]
                    },
                    {
                        title: "Trout",
                        path: "b12/8.png",
                        content: "A 3.5-ounce (100-gram) serving of trout fillet offers about 312% of the DV for vitamin B12 and 1,171 mg of omega-3 fatty acids.",
                        data: [
                            {
                                info: "Rainbow trout is considered to be one of the healthiest fish."
                            },
                            {
                                info: "This freshwater species is a great source of protein, healthy fats, and B vitamins."
                            },
                            {
                                info: "Experts recommend that the combined daily intake of the omega-3 fatty acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) should be 250–500 mg"
                            },
                            {
                                info: "Trout is also a great source of minerals such as manganese, phosphorus, and selenium"
                            },
                            
                        ],
                        images: [
                            { 
                                name:"Tandoori trout",
                                path:"b12/dish/trout/1.png",
                            },
                            { 
                                name:"Smoked trout & horseradish pâté",
                                path:"b12/dish/trout/2.png",
                            },
                            { 
                                name:"Steamed trout with mint & dill dressing",
                                path:"b12/dish/trout/3.png",
                            },
                            { 
                                name:"Harissa trout, beetroot & grapefruit salad with whipped feta",
                                path:"b12/dish/trout/4.png",
                            },
                            { 
                                name:"Grilled sea trout, prosciutto, samphire & lentils",
                                path:"b12/dish/trout/5.png",
                            },
                            { 
                                name:"Creamy gnocchi with smoked trout & dill",
                                path:"b12/dish/trout/6.png",
                            },
                            { 
                                name:"Scandi trout with fennel potato salad",
                                path:"b12/dish/trout/7.png",
                            },
                            { 
                                name:"Vietnamese caramel trout",
                                path:"b12/dish/trout/8.png",
                            },                 
                            { 
                                name:"Trout risotto",
                                path:"b12/dish/trout/9.png",
                            },
                            { 
                                name:"Trout with tomato sauce",
                                path:"b12/dish/trout/10.png",
                            },    
   
                        ]
                    },
                    {
                        title: "Salmon",
                        path: "b12/9.png",
                        content: "A half fillet (178 grams) of cooked salmon can pack 208% of the DV for vitamin B12",
                        data: [
                            {
                                info: "Salmon is well known for having one of the highest concentrations of omega-3 fatty acids. However, it’s also an excellent source of B vitamins."
                            },
                            {
                                info: "The same serving size may also provide 4,123 mg of omega-3 fatty acids"
                            },
                            {
                                info: "Alongside its high fat content, salmon offers a high amount of protein, with about 40 grams in a half fillet (178 grams) "
                            },
                            
                            
                        ],
                        images: [
                            { 
                                name:"Creamy salmon, leek & potato traybake",
                                path:"b12/dish/salmon/1.png",
                            },
                            { 
                                name:"Spiced salmon with traybaked sag aloo",
                                path:"b12/dish/salmon/2.png",
                            },
                            { 
                                name:"Spiced salmon & tomato traybake",
                                path:"b12/dish/salmon/3.png",
                            },
                            { 
                                name:"Pesto salmon pasta bake",
                                path:"b12/dish/salmon/4.png",
                            },
                            { 
                                name:"Pasta with salmon & peas",
                                path:"b12/dish/salmon/5.png",
                            },
                            { 
                                name:"One-pan Thai green salmon",
                                path:"b12/dish/salmon/6.png",
                            },
                            { 
                                name:" Creamy salmon, prawn & almond curry",
                                path:"b12/dish/salmon/7.png",
                            },
                            { 
                                name:"Creamy garlic, lemon & spinach salmon",
                                path:"b12/dish/salmon/8.png",
                            },                 
                            { 
                                name:"Pan-fried salmon",
                                path:"b12/dish/salmon/9.png",
                            },
                            { 
                                name:"Baked salmon",
                                path:"b12/dish/salmon/10.png",
                            },    
   
                        ]
                    },
                    {
                        title: "Fortified-nondairy-milk",
                        path: "b12/10.png",
                        content: "One example is soy milk, which can provide up to 86% of the DV for vitamin B12 in 1 cup ",
                        data: [
                            {
                                info: "Nondairy milk is popular among those who want a nutritious vegan replacement for dairy milk."
                            },
                            {
                                info: "While soy, almond, and rice milks are not naturally high in vitamin B12, they are usually fortified, making them an excellent source of this vitamin."
                            },
                            {
                                info: "For this reason, fortified nondairy milks could be a great option for those wanting to increase their vitamin B12 intake and avoid deficiency "
                            },
                            {
                                info: "Similarly to the vitamin B12 in other fortified sources, the vitamin B12 in nondairy milk is synthetically made, so it’s vegan-friendly "
                            },
                            
                            
                        ],
                        images: [
                            { 
                                name:"Milk Banana Smoothie",
                                path:"b12/dish/nondairy_milk/1.png",
                            },
                            { 
                                name:"Sweetened Condensed Milk",
                                path:"b12/dish/nondairy_milk/2.png",
                            },
                            { 
                                name:"Milk Bread",
                                path:"b12/dish/nondairy_milk/3.png",
                            },
                            { 
                                name:" Hokkaido Milk Bread",
                                path:"b12/dish/nondairy_milk/4.png",
                            },
                            { 
                                name:"Banana Milk Coffee",
                                path:"b12/dish/nondairy_milk/5.png",
                            },
                            { 
                                name:"Milk Chocolate Peppermint Bark",
                                path:"b12/dish/nondairy_milk/6.png",
                            },
                            { 
                                name:"Malted Milk Chip Cookies",
                                path:"b12/dish/nondairy_milk/7.png",
                            },
                            { 
                                name:"Milk Chocolate Cheesecake",
                                path:"b12/dish/nondairy_milk/8.png",
                            },
                            { 
                                name:"Vegan Sweetened Condensed Milk",
                                path:"b12/dish/nondairy_milk/9.png",
                            },
                            { 
                                name:"Coconut Milk Flan",
                                path:"b12/dish/nondairy_milk/10.png",
                            },  
   
                        ]
                    },
                    {
                        title: "Milk-and-dairy-products",
                        path: "b12/11.png",
                        content: "One cup (240 ml) of whole milk supplies 46% of the DV for vitamin B12",
                        data: [
                            {
                                info: "Milk and dairy products like yogurt and cheese are great sources of protein and several vitamins and minerals, including vitamin B12."
                            },
                            {
                                info: "Cheese is also a rich source of vitamin B12. One large slice (22 grams) of Swiss cheese can contain about 28% of the DV "
                            },
                            {
                                info: "Full fat plain yogurt can also be a decent source. It has even been shown to help improve vitamin B12 status in people who are deficient in the vitamin 1 "
                            },
                            {
                                info: "Interestingly, studies have shown that the body absorbs the vitamin B12 in milk and dairy products better than the vitamin B12 in beef, fish, or eggs"
                            },
                            
                            
                        ],
                        images: [
                            { 
                                name:"Milk Banana Smoothie",
                                path:"b12/dish/nondairy_milk/1.png",
                            },
                            { 
                                name:"Sweetened Condensed Milk",
                                path:"b12/dish/nondairy_milk/2.png",
                            },
                            { 
                                name:"Milk Bread",
                                path:"b12/dish/nondairy_milk/3.png",
                            },
                            { 
                                name:" Hokkaido Milk Bread",
                                path:"b12/dish/nondairy_milk/4.png",
                            },
                            { 
                                name:"Banana Milk Coffee",
                                path:"b12/dish/nondairy_milk/5.png",
                            },
                            { 
                                name:"Milk Chocolate Peppermint Bark",
                                path:"b12/dish/nondairy_milk/6.png",
                            },
                            { 
                                name:"Malted Milk Chip Cookies",
                                path:"b12/dish/nondairy_milk/7.png",
                            },
                            { 
                                name:"Milk Chocolate Cheesecake",
                                path:"b12/dish/nondairy_milk/8.png",
                            },
                            { 
                                name:"Vegan Sweetened Condensed Milk",
                                path:"b12/dish/nondairy_milk/9.png",
                            },
                            { 
                                name:"Coconut Milk Flan",
                                path:"b12/dish/nondairy_milk/10.png",
                            },  
   
                        ]
                    },
                    {
                        title: "Eggs",
                        path: "b12/12.png",
                        content: "Two large eggs (100 grams) supply about 46% of the DV for vitamin B12, plus 39% of the DV for vitamin B2",
                        data: [
                            {
                                info: "Eggs are a great source of complete protein and B vitamins, especially B2 and B12."
                            },
                            {
                                info: "Research has shown that egg yolks have higher levels of vitamin B12 than egg whites, as well as that the vitamin B12 in egg yolks is easier to absorb. Therefore, it’s recommended to eat whole eggs instead of just their whites"
                            },
                            {
                                info: "In addition to getting a good dose of vitamin B12, you’ll get a healthy amount of vitamin D. Eggs are one of the few foods that naturally contain it, with 11% of the DV in two large eggs"
                            },
                        ],
                        images: [
                            { 
                                name:"Egg custard",
                                path:"b12/dish/eggs/1.png",
                            },
                            { 
                                name:"Easter egg cheesecake",
                                path:"b12/dish/eggs/2.png",
                            },
                            { 
                                name:"Breakfast egg wraps",
                                path:"b12/dish/eggs/3.png",
                            },
                            { 
                                name:"Gordon's eggs benedict",
                                path:"b12/dish/eggs/4.png",
                            },
                            { 
                                name:"Easy egg muffins",
                                path:"b12/dish/eggs/5.png",
                            },
                            { 
                                name:"Noodles with crispy chilli oil eggs",
                                path:"b12/dish/eggs/6.png",
                            },
                            { 
                                name:"Curried spinach, eggs & chickpeas",
                                path:"b12/dish/eggs/7.png",
                            },
                            { 
                                name:"Soft-boiled eggs",
                                path:"b12/dish/eggs/8.png",
                            },
                            { 
                                name:"Smoky beans & baked eggs",
                                path:"b12/dish/eggs/9.png",
                            },
                            { 
                                name:"Classic devilled eggs",
                                path:"b12/dish/eggs/10.png",
                            },         
                              
   
                        ]
                    },


                ]
            })
        })
        // 
        const data = await result.json()
        // console.log(data)
        // console.log(result)

    } catch (err) {
        console.log("Error in setNutrientsData")
    }
}
