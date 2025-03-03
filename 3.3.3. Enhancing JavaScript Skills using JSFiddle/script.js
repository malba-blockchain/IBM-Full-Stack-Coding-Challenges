//Exercise 1: Calculate total sales amount

// Step 1: Define an array of sales transactions with sample objects
const salesTransactions = [
    { item: "Laptop", quantity: 2, price: 1000.0 },
    { item: "Smartphone", quantity: 5, price: 300.0 },
    { item: "Headphones", quantity: 10, price: 50.0 }
];

// Step 2: Write a function calculateTotalSales that takes this array as input
function calculateTotalSales(transactions) {
    let totalSales = 0; // Initialize total sales to 0

    // Step 3: Use a loop to iterate through the array and calculate the total sales amount
    for (let transaction of transactions) {
        totalSales += transaction.quantity * transaction.price;
    }

    return totalSales; // Return the total sales amount
}

// Step 4: Print the total sales amount to the console
const totalAmount = calculateTotalSales(salesTransactions);
console.log("Total Sales Amount: $" + totalAmount.toFixed(2));


//Exercise 2: Generate an order receipt


// Step 1: Define an array of ordered items with sample entries
const orderedItems = [
    { item: "Laptop", quantity: 2, price: 1000.0 },
    { item: "Smartphone", quantity: 5, price: 300.0 },
    { item: "Headphones", quantity: 10, price: 50.0 }
];

// Step 2: Write a function generateReceipt that takes this array as input
function generateReceipt(items) {
    let grandTotal = 0; // Initialize grand total to 0
    let receipt = "=== Customer Receipt ===\n"; // Header for the receipt

    // Step 3: Use a loop to iterate through the items and calculate totals
    for (let item of items) {
        const totalCost = item.quantity * item.price; // Calculate total cost for the item
        grandTotal += totalCost; // Add to the grand total

        // Append item details to the receipt string
        receipt += `Item: ${item.item}\n`;
        receipt += `Quantity: ${item.quantity}\n`;
        receipt += `Price per unit: $${item.price.toFixed(2)}\n`;
        receipt += `Total: $${totalCost.toFixed(2)}\n`;
        receipt += "-------------------------\n";
    }

    // Add the grand total to the receipt
    receipt += `Grand Total: $${grandTotal.toFixed(2)}\n`;
    receipt += "=========================";

    return receipt; // Return the formatted receipt
}

// Step 4: Print the receipt in a formatted string
const receipt = generateReceipt(orderedItems);
console.log(receipt);

//Exercise 3: Validate passwords

// Step 1: Define an array of sample passwords
const passwords = [
    "SecurePass123",
    "weak",
    "ValidPassword12345",
    "Invalid@Password",
    "Short1",
    "ThisIsAVeryLongPasswordThatExceedsTheLimit"
];

// Step 2: Write a function validatePasswords that takes this array as input
function validatePasswords(passwordList) {
    // Loop through each password in the array
    for (let password of passwordList) {
        // Check if the password meets the validation criteria
        const isValid = /^[a-zA-Z0-9]+$/.test(password) && password.length >= 8 && password.length <= 20;

        // Log whether the password is valid or invalid
        if (isValid) {
            console.log(`"${password}" is valid.`);
        } else {
            console.log(`"${password}" is invalid.`);
        }
    }
}

// Step 3: Call the function with the sample passwords
validatePasswords(passwords);


//Exercise 4: Track product stock levels

// Step 1: Define an array of product objects with sample products
const products = [
    { product: "Laptop", stock: 15 },
    { product: "Smartphone", stock: 0 },
    { product: "Headphones", stock: 20 }
];

// Step 2: Write a function checkStockLevels that takes this array as input
function checkStockLevels(productList) {
    // Step 3: Use a loop to iterate through the array and check the stock level for each product
    for (let product of productList) {
        // Check if the stock level is greater than 0
        if (product.stock > 0) {
            console.log(`${product.product} is In Stock.`);
        } else {
            console.log(`${product.product} is Out of Stock.`);
        }
    }
}

// Step 4: Call the function with the sample products
checkStockLevels(products);