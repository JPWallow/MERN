const faker = require('faker');
const express = require('express');
const app = express();
const port = 8000;


const createUserObject = () => {
    return(
        {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber:faker.phone.phoneNumber (),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            _id: faker.datatype.uuid(),            

        }
    )
}

const createCompObject = () => {
    return(
        {
            _id: faker.datatype.uuid(),     
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),
            }       

        }
    )
}

app.get("/api/users/new", (req, res) => {
    const newUser = createUserObject();
    res.json(newUser);
})

app.get("/api/companies/new", (req, res) => {
    const newComp = createCompObject();
    res.json(newComp);
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUserObject();
    const newComp = createCompObject();
    const newUserAndComp = {
        user: newUser,
        company: newComp,
    };
    res.json(newUserAndComp);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );