const margaritas = [
    {
        "name": "Sriracha Citrus",
        "ingredients": "lemon, lime, sriracha",
        "alcohol": "tequila",
        "countryOfOrigin": "Vietnam",
        "image": "url",
        "createdBy": "Kirsty"
    },
    {
        "name": "Original",
        "ingredients": "lime juice, triple sec, agave syrup",
        "alcohol": "tequila",
        "countryOfOrigin": "Mexico",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thecookierookie.com%2Fwp-content%2Fuploads%2F2019%2F07%2Ffrozen-margaritas-recipe-3-of-8.jpg&f=1&nofb=1",
        "createdBy": "Kirsty"
    },
    {
        "name": "Sriracha Mango",
        "ingredients": "mango nectar, mango chunks, sriracha chili sauce, lime juice",
        "alcohol": "Blanco tequila",
        "countryOfOrigin": "Thailand",
        "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rX33O34y231VqCm3BxfJRQHaHa%26pid%3DApi&f=1",
        "createdBy": ""
    },
    {
        "name": "Pink Moscato",
        "ingredients": "strawberries, moscato, triple sec, lime juice, sugar",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190502-moscato-margarita-horizontal-2-1557959685.png?crop=0.616xw:0.923xh;0.133xw,0.0332xh&resize=768:*",
        "createdBy": ""
    },
    {
        "name": "Mistletoe",
        "ingredients": "cranberries, cranberry juice, triple sec, lime juice",
        "alcohol": "silver tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mistletoe-margaritas-vertical-1545061104.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Watermelon",
        "ingredients": "watermelon, lime juice, triple sec",
        "alcohol": "silver tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200302-frozen-watermelon-margaritas-0333-portrait-pf-1590008412.jpg?crop=1xw:1xh;center,top&resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Blue Crush",
        "ingredients": "blue curacao, tripe sec, lime juice, seltzer",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/640x959/gallery-1498505142-delish-blue-crush-pin-1.jpg?resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Blueberry Lemonade",
        "ingredients": "blueberry syrup, triple sec, lemonade",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-blueberry-lemonade-margs-still001-1528494858.jpg?crop=0.376xw:1.00xh;0.335xw,0&resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Cottontail",
        "ingredients": "marshmallow fluff, shredded coconut, coconut milk, triple sec, pineapple juice, lime",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-cottontail-margaritas-pinterest-still001-1522173347.jpg?crop=0.999546485260771xw:1xh;center,top&resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Mimosa",
        "ingredients": "orange juice, prosecco, lime juice",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200305-mimosa-margaritas-0306-landscape-pf-1584049549.jpg?crop=0.668xw:1.00xh;0.134xw,0&resize=768:*",
        "createdBy": ""
    },
    {
        "name": "Sangria Margarita",
        "ingredients": "red wine, orange juice, lime juice, limeade",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1600x1066/gallery-1463081564-delish-sangria-frozen.jpg?resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Bulldog",
        "ingredients": "cointreau, coronitas, lime juice, sugar",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/del.h-cdn.co/assets/16/16/1461255932-shot-1-075.jpg?crop=1xw:0.99975xh;center,top&resize=980:*",
        "createdBy": ""
    },
    {
        "name": "Raspberry Lemonade",
        "ingredients": "raspberries, lemons, triple sec",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://www.crazyforcrust.com/wp-content/uploads/2017/04/Raspberry-Margarita-7-of-7-640x959.jpg",
        "createdBy": ""
    },
    {
        "name": "Spicy Cucumber",
        "ingredients": "lime juice, orange juice, jalapeno, cucumber, agave syrup, sweet chili rim salt",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://www.gimmesomeoven.com/wp-content/uploads/2015/03/Spicy-Cucumber-Margaritas-4.jpg",
        "createdBy": ""
    },
    {
        "name": "Creamsicle",
        "ingredients": "triple sec, heavy cream, lime, honey, orange juice",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-creamsicle-margaritas-still002-1562858383.jpg?crop=0.519xw:0.921xh;0.241xw,0.0242xh&resize=768:*",
        "createdBy": ""
    },
    {
        "name": "Skinny Peach",
        "ingredients": "peaches, peach sparkling water, agave nectar, lime juice",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://www.thecookierookie.com/wp-content/uploads/2018/06/skinny-peach-frozen-margarita-recipe-6-of-12.jpg",
        "createdBy": ""
    },
    {
        "name": "Rhubarb Raspberry",
        "ingredients": "cointreau, lime juice, rhubarb and raspberry puree, raspberries",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://c1.staticflickr.com/5/4168/34596602261_f6c7a83c7d_b.jpg",
        "createdBy": ""
    },
    {
        "name": "Strawberry Mango",
        "ingredients": "mango, strawberries, agave nectar, lime juice, chili powder",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://images.squarespace-cdn.com/content/v1/525d98f0e4b0f07bb3deb091/1524760040527-7BVOPP1T0Q74UU36NQ5V/Frozen+Strawberry+Mango+Margaritas%3A+My+Diary+of+Us?format=750w",
        "createdBy": ""
    },
    {
        "name": "Frozen Berries",
        "ingredients": "cointreau, lime juice, mixed frozen berries, mint",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://img.jamieoliver.com/jamieoliver/recipe-database/83911433.jpg?tr=w-800,h-1066",
        "createdBy": ""
    },
    {
        "name": "Cherry Limeade",
        "ingredients": "limeade, tart cherry juice",
        "alcohol": "tequila",
        "countryOfOrigin": "",
        "image": "https://www.thecookierookie.com/wp-content/uploads/2014/04/cherry-limeade-margaritas-recipe-4-of-8-650x862.jpg",
        "createdBy": ""
    },
    {
        "name": "Red White and Blue",
        "ingredients": "strawberries, cointreau, grenadine, lime juice, blue curacao",
        "alcohol": "tequila",
        "countryOfOrigin": "USA",
        "image": "https://www.thecookierookie.com/wp-content/uploads/2020/06/margarita-slushies-red-white-blue-2-of-9-650x975.jpg",
        "createdBy": ""
    }
]
export default margaritas;