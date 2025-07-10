let userrole = 'admin';
let access = '';

if (userrole === 'admin') {
    access = 'this provides full access';
} else if (userrole === 'manager') {
    access = 'this has limited access';
} else {
    access = 'no access';
}

console.log("access level" , access);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userrole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
