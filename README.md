# Assignment 2 - Edureka

## Question 1: Write a Node program for the following scenario:   
1. Developer should provide two (2) JSON files:   
   - The First JSON file should contain Employee Name along with Employee Details and ProjectID.
   - Second JSON file should contain information about the Projects (containing ProjectID and Related Details).   
2. Create two (2) APIs, providing the following details:   
   - First API would take the Employee Id as Input and Queries the underlying JSON File to fetch Employee Data at: (localhost:3000/project/:id).   
   - Second API would take the Project ID as input and Query the JSON File to fetch Project Information at> (localhost:3000/project/:id).   
 3. Using the above specified APIs, create a new API at: (localhost>3000/getemployeedetails/:id).
    This API would get the Employee Data along with details about the Project.   (Make Use of fetch and promise to resolve it).      
    When a query is made to the Employee API, it will fetch Employee Details, along with the Project ID.  This Project ID can then be used in order to query the Project API to fetch the data.  The resultant data of the API at: (local host:3000/getemployeedetails/:id) should contain details about the employee as well as details about his Project and should be returned in form of JSON data to the Client.   
    
## Question 2: Create an Application which displays the Employees List to the user   
1. Application will make a call to the API (http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees) using Request Object.   
2. Once the data is available, the employee list  along with the details should be visible to the User.   
3. The employee details would contain:   
   - Name   
   - Id   
   - Created At   
   
## Run the App      
Run app using ```npm run dev``` and this will allow app to run with `nodemon`.    
The app is running on ```localhost:3000```.   
## Paths for each Question
1. `localhost:3000/employee/:id`:   
    This route shows all information associated to the provided **employee id**.   
2. `localhost:3000/project:id`: 
   This route shows all information associated to the provided **project id**.   
3. `localhost:3000/getemployeedetails/:id`:   
   This route shows all information associated to a provided **employee id**, and extract the **project id** and add all the project information to employee data.  All is done with `promises`, calling `localhost:3000/employee/:id` and `localhost:3000/project/:id` routes to obtain the information.   
   4. `localhost:3000/employees`:   
      This route makes a call to an **URL**: `http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees`, retrieve all employees data, and send all data to user.   
