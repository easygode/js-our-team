'use strict';
//MILESTONE 0 - 1. creo un array con le informazioni fornite

const team = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        position: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        position: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        position: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        position: 'Social Media Managr',
        img: 'angela-lopez-social-media-manager.jpg'
    }, 
   {
        firstName: 'Scott',
        lastName: 'Estrada',
        position: 'Developer',
        img: 'scott-estrada-developer.jpg'
    }, 
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        position: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

//MILESTONE 1 - 2. stampo a console per ogni membro del team le informazioni di nome, ruolo e la stringa della foto

// prova con una persona
// console.log (team[0].firstName);
// console.log (team[0].lastName);
// console.log (team[0].position);
// console.log (team[0].img);

for (let i = 0; i < team.length; i++) {
    console.log(`Staff Member ${i + 1}: `);
    console.log(`First Name:${team[i].firstName}`);
    console.log(`Last Name:${team[i].lastName}`);
    console.log(`Position:${team[i].position}`);
    console.log(`Picture:${team[i].img}`);
}

//MILESTONE 2 - con innerHTML visualizzo nella pagina HTML le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
const teamList = document.getElementById("team");

for (let i = 0; i < team.length; i++) {

    const member = document.createElement("div");
    member.classList.add("member");
    teamList.append(member);

    const firstName = document.createElement("div");
    firstName.innerHTML = `First Name: ${team[i].firstName}`;
    member.append(firstName);

    const lastName = document.createElement("div");
    lastName.innerHTML = `Last Name: ${team[i].lastName}`;
    member.append(lastName);

    const position = document.createElement("div");
    position.innerHTML = `Position: ${team[i].position}`;
    member.append(position);

    const img = document.createElement("img");
    img.src = "img/" + team[i].img;
    member.append(img);
}