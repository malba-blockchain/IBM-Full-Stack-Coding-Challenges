const express = require('express');
const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "James",
        lastName: "Bond",
        email:"jamesbond@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET users in order of date of birth request: Retrieve all the users ordered by their date of birth
router.get("/sort", (req, res) => {
    console.log("Retrieving all users sorted by date of birth");
    console.log("Current users array:", users);

    // Create a copy of the users array
    let filtered_users = [...users];
    
    // Sort users by date of birth in ascending order
    filtered_users.sort((a, b) => {
        // Convert string dates to Date objects for proper comparison
        const dateA = new Date(a.DOB.split('-').reverse().join('-'));
        const dateB = new Date(b.DOB.split('-').reverse().join('-'));
        
        console.log(`Comparing dates: ${a.DOB} and ${b.DOB}`);
        // Compare the dates
        return dateA - dateB;
    });
 
    console.log("Sorted users:", filtered_users);
    // Send the sorted array as the response to the client
    res.send(filtered_users);
});

// GET by particular Last Name request: Retrieve all the users that have the particular Last Name
router.get("/lastName/:lastName",(req,res)=>{
    // Copy the code here
    const lastName = req.params.lastName;
  
    let filtered_users = users.filter((user) => user.lastName === lastName)
  
    // Send the filtered_users array as the response to the client
    res.send(filtered_users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
    // Copy the code here
    const email = req.params.email;

    // Filter the users array to find users whose email matches the extracted email parameter
    let filtered_users = users.filter((user) => user.email === email)

    // Send the filtered_users array as the response to the client
    res.send(filtered_users);
});

// GET request: Retrieve all users
router.get("/",(req,res)=>{
    console.log("Retrieving all users");
    // Copy the code here
    res.send(users);
    //res.send(JSON.stringify({users}, null, 4));
});

// POST request: Create a new user
router.post("/",(req,res)=>{
    // Push a new user object into the users array based on query parameters from the request
    users.push({
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "email": req.query.email,
        "DOB": req.query.DOB
    });
    // Send a success message as the response, indicating the user has been added
    res.send("The user " + req.query.firstName + " has been added!");
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    // Extract email parameter and find users with matching email
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    
    if (filtered_users.length > 0) {
        // Select the first matching user and update attributes if provided
        let filtered_user = filtered_users[0];
        
        // Extract and update DOB if provided
        let DOB = req.query.DOB;    
        if (DOB) {
            filtered_user.DOB = DOB;
        }
        // Replace old user entry with updated user
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        
        // Send success message indicating the user has been updated
        res.send(`User with the email ${email} updated.`);
    } else {
        // Send error message if no user found
        res.send("Unable to find user!");
    }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    // Copy the code here
    const email = req.params.email;

    users = users.filter((user) => user.email != email);

    res.send(`User with the email ${email} deleted.`);
});

module.exports=router;
