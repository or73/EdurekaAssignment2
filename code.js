
const firstUser = function () {
    console.log('User One');
};

const secondUser = () => {
    console.log('User Two');
};
console.log('\n---------------- sampleFunction1 ----------------');
const sampleFunction = () => {
    console.log('sampleFunction');
    setTimeout(firstUser, 0);
    secondUser();
};
sampleFunction();

/*console.log('\n---------------- sampleFunction2 ----------------');
const sampleFunction2 = () => {
    console.log('Sample function 2');
    setTimeout(firstUser, 0);
    new Promise(resolve => resolve('Resolved data'))
        .then(resolve => console.log(resolve));
    secondUser();
};
sampleFunction2();*/

/*console.log('\n---------------- sampleFunction3 ----------------');
let getUserDetails1 = new Promise(resolve => setTimeout(() => resolve(1), 100));
getUserDetails1
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
        return result * 2;
    })
    .then(result => {
        console.log(result);
        return result * 2;
    });*/

/*console.log('\n---------------- sampleFunction4 ----------------');
let getUserDetails2 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
getUserDetails2
    .then(result => {
        console.log(result);
        return result * 2;
    });

getUserDetails2
    .then(result => {
        console.log(result);
        return result * 2;
    });

getUserDetails2
    .then(result => {
        console.log(result);
        return result * 2;
    });*/

/*console.log('\n---------------- sampleFunction5 ----------------');
let getUserDetails3 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
getUserDetails3
    .then(result => {
        console.log(result);
        return new Promise(resolve => setTimeout(() => resolve(result * 2), 1000));
    })
    .then(result => {
            console.log(result);
            return new Promise(resolve => setTimeout(() => resolve(result * 2), 1000));
        })
    .then(result => {
            console.log(result);
            return new Promise(resolve => setTimeout(() => resolve(result * 2), 1000));
        });*/

/*console.log('\n---------------- sampleFunction6 ----------------');
let getUserDetails4 = new Promise((resolve, reject) => {
    console.log('User details retrieved');
    resolve();
})
    .then(() => {
        throw new Error('Something failed');
        console.log('Do this');
    })
    .catch(() => console.log('Do that'))
    .then(() => console.log('Do this, no matter what happened before'));
*/

/*console.log('---------------- sampleFunction7 ----------------');
(function () {
    function setUserInfo() {
        return setUserName;
    }
    function setUserName(name) {
        userName = name;
        return setUserAge;
    }
    function setUserAge(age) {
        userAge = age;
        return setUserDesignation;
    }
    function setUserDesignation(designation) {
        userDesignation = designation;
        showAllDetails();
    }
    function showAllDetails() {
        console.log(userName + ' ' + userAge + ' ' + userDesignation);
    }
    setUserInfo()('Test Name')(10)('Test Designation');
})();
console.log('---------------- sampleFunction8 ----------------');
*/
