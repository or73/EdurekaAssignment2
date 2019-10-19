'use strict';

const express = require('express');
const fs = require('fs');
const request = require('request');

const app = express();
const port = 3000;

const fileDataPath = './data/';
const fileNameEmployee = 'employee.json';
const fileNameProjects = 'projects.json';

app.get('/', (req, res) => {
    console.log('Main path');
    res.send('This path does not contain any data...');
});

// Fetch Employee Data by provided id
app.get('/employee/:id', (req, res) => {
    let employeeId = parseInt(req.params.id);
    readFile(fileDataPath + fileNameEmployee, employeeId) ?
        res.json(readFile(fileDataPath + fileNameEmployee, employeeId)) :
        res.send('Required employee (' + employeeId + ') does not exist');
});

// Fetch Project Data by provided id
app.get('/project/:id', (req, res) => {
    // Read Projects JSON data from file
    let projectId = parseInt(req.params.id);
    readFile(fileDataPath + fileNameProjects, projectId) ?
        res.json(readFile(fileDataPath + fileNameProjects, projectId)) :
        res.send('Required project (' + projectId + ') does not exist');
});

// Fetch Employee & Project Data
app.get('/getemployeedetails/:id', (req, res) => {
    let employeeId = parseInt(req.params.id);
    let employeeData = getData('employee', employeeId);
    
    console.log('/getemployeedetails/' + employeeId);
    
    // Get employee details from URL
    employeeData
        .then(dataEmployee => { return JSON.parse(dataEmployee); })
        .then(jsonEmployee => {
            console.log('typeof jsonEmployee: ', typeof jsonEmployee);
            console.log('jsonEmployee: ', jsonEmployee);
            console.log('*** jsonEmployee[project_id]: ', jsonEmployee['project_id']);
            
            let projectData = getData('project', parseInt(jsonEmployee['project_id']));
            
            projectData
                .then(dataProject => { return JSON.parse(dataProject); })
                .then(jsonProject => {
                    console.log('typeof jsonProject: ', typeof jsonProject);
                    console.log('jsonProject: ', jsonProject);
                    jsonEmployee['projectData'] = jsonProject;
                    return jsonEmployee;
                })
                .then(joinData => {
                    console.log('typeof joinData: ', typeof joinData);
                    console.log('joinData: ', joinData);
                    res.json(joinData);
                });
        });
});

// Employees list
app.get('/employees/', (req, res) => {
    res.json(readFile(fileDataPath + fileNameEmployee, -333));
});

// Initiate server
app.listen(port, err => {
    if (err) { console.log('Error in API call'); throw err; }
    else { console.log('Server running on port: ', port); }
});

/*
* Description: Fetch data from a provided URL, with Promises
* */
const getData = (url, dataId) => {
    console.log('dataId: ', dataId);
    // Setting URL and headers for request
    let options = {
        url: 'http://localhost:' + port + '/' + url + '/' + dataId,
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new Promise
    return new Promise((resolve, reject) => {
        // Do async job
        request.get(options, (err, resp, body) => {
            if (err) { reject(err); }
            else { resolve(body); }
        });
    });
};

/*
* Description: Load data from a local JSON file
* */
const readFile = (filePath, dataId) => {
    let fileData = fs.readFileSync(filePath, {encoding: 'utf8'});
    let jsonData = JSON.parse(fileData.toString());
    if (dataId !== -333) { return existDataInArray(jsonData, dataId); }
    else { return jsonData; }
};

/*
* Description: Search a 'dataId' in 'jsonData' array (array of employees JSON data)
* */
const existDataInArray = (jsonData, dataId) => {
    let i=0, len=jsonData.length;
    for (; i < len; i++) {
        if (jsonData[i]['id'] === dataId) {
            return(jsonData[i]);
        }
    }
    return false;
};
