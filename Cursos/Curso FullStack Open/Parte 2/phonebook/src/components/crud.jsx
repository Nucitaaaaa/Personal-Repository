
import React from 'react';
import axios from 'axios';

const dbUrl = 'http://localhost:3001/persons'

const getData = () => {
    return axios.get(dbUrl)
    .then(response => response.data)
    .catch((error => console.log('Ha habido un error')))
}

const getPerson = (id) => {
    return axios.get(`${dbUrl}/${id}`)
    .then(response => response.data)
    .catch((error => console.log('Ha habido un error')))
}

const postData = (newPerson) => {
    return axios.post(dbUrl, newPerson)
    .then(response => response.data)
    .catch((error => console.log('Ha habido un error')))
}

const putData = (id, newPerson) => {
    return axios.put(`${dbUrl}/${id}`, {...newPerson, number: newPerson.number })
    .then(response => response.data)
    .catch((error => console.log('Ha habido un error')))
}

const deleteData = (id) => {
    return axios.delete(`${dbUrl}/${id}`)
    .then(() => console.log('Se ha eliminado con exito.'))
    .catch((error => console.log('Ha habido un error')))
}

export default { getData, getPerson, postData, putData, deleteData }