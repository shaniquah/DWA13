// Challenge 1

// Provinces Array
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// Names Array
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']


// Use `.forEach()` to console log each name to the console
names.forEach(name => {
    console.log(name)
});

// Use `.forEach()` to console log each name with a matching province
provinces.forEach(province => {
    names.forEach(name => {
         console.log(`${name} (${province})`)
    })
   
});

// Use `.map()` to loop over all province names and turn the string to all uppercase then log new array to console
provinces.map(province => {
    console.log(province.toUpperCase())
})

// Create a new array with `.map()` that has the amount of characters in each name
const namesCharNumber = names.map(name => {
    console.log(name.length)
})

// Use `.toSorted()` to sort all provinces alphabetically
function toSorted(array) {
    return array.sort((a, b) => a.localeCompare(b))
}
console.log(toSorted(provinces))

// Use `.filter()` to remove all provinces that have the word "Cape" in them and return amount of provinces left
console.log(provinces.filter(entry => entry.includes('Cape')).length)

// Create a boolean array by using `.map()` and `.some()` to determine whether a name contains an "S" character
console.log(names.map(entry => entry.includes('s')))

console.log(names.map(entry => entry.includes('s')).some(value => value))

// Turn the original arrays above(Provinces Array and Names Array) into an object that indicates the province of an individual only using `.reduce()`
const arraysObj = names.reduce((obj, name, index) => {
    obj[name] = provinces[index]
    return obj
}, {})
console.log(arraysObj)

// Products Object Array
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


//   Use forEach to console.log each product name to the console
products.forEach(item => {
    console.log(item.product)
})

// Use filter to filter out products that have a name longer than 5 characters
console.log(products.filter(item => item.product.length > 5))

// Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.
console.log(products
    .filter((item) => item.price !== '' && !isNaN(parseFloat(item.price)))
    .map((item) => ({ ...item, price: parseFloat(item.price) }))
    .reduce((total, item) => total + item.price, 0)
)
  

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea
console.log(
    products.reduce((accum, item, index) => {
        if (index === 0) {
          return item.product;
        } else if (index === products.length - 1) {
          return `${accum} and ${item.product}`;
        } else {
          return `${accum}, ${item.product}`;
        }
    }, '')
)

// Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: Highest: coffee. Lowest: banana
let highest = ''
let lowest = ''

products.reduce((_, item) => { /* used `_` as a placeholder to indicate that the parameter in intentionally unused */
    const price = parseInt(item.price)

    if (!isNaN(price)) {
        if (highest === '' || price > highest.price) {
            highest = { name: item.product, price }
        }

        if (lowest === '' || price < lowest.price) {
            lowest = { name: item.product, price}
        }
    }
}, [])

console.log(
    `Highest: ${highest.name}, Lowest: ${lowest.name}`
)

// Using only `Object.entries()` and `.reduce()` recreate the object with the exact same values. However, the following object keys should be changed in the new array: 'product' should be changed to 'name', 'price' should be changed to 'cost'

modifiedProductsObj = products.map((product) => 
    Object.entries(product).reduce((accum, [key, value]) => {
        let modifiedKey = key

        if (key === 'product') {
            modifiedKey = 'name'
        } else if (key === 'price') {
            modifiedKey = 'cost'
        }
        accum[modifiedKey] = value
        return accum
    }, {})
)

console.log(modifiedProductsObj)

// Adding all bonus task code to the console using a single `console.log()`
console.log(
    products.forEach((item) => {console.log(item.product)}),
  
    '\n' +
      products.filter((item) => item.product.length > 5),
  
    '\n' +
      products
        .filter((item) => item.price !== '' && !isNaN(parseFloat(item.price)))
        .map((item) => ({ ...item, price: parseFloat(item.price) }))
        .reduce((total, item) => total + item.price, 0),
  
    '\n' +
      products.reduce((accum, item, index) => {
        if (index === 0) {
          return item.product;
        } else if (index === products.length - 1) {
          return `${accum} and ${item.product}`;
        } else {
          return `${accum}, ${item.product}`;
        }
      }, ''),
  
    '\n' +
      `Highest: ${highest.name}, Lowest: ${lowest.name}`,
  
    '\n' +
      modifiedProductsObj
  );
  