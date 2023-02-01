const container = document.querySelector('#container');

const cntParagraph = document.createElement('p');
const cntHeading = document.createElement('h3');

cntParagraph.textContent = 'Hey! I\'m Red!';
cntHeading.textContent = 'Hello! I\'m Blue Heading-3. Nice to meet you.';

// inline styles

cntParagraph.style.color = 'red';
cntHeading.style.color = 'blue';

// appending to container

container.appendChild(cntParagraph);
container.appendChild(cntHeading);

const cntDiv = document.createElement('div');
cntDiv.classList.add('divDesign');
cntDiv.style.border = '3px solid black';
cntDiv.style.padding = '15px';

container.appendChild(cntDiv);

        const divHeading = document.createElement('h1');
        divHeading.textContent = 'I\'m Inside a Div.';
        const divParagraph = document.createElement('p');
        divParagraph.textContent = 'OMG! Me Too!';

        cntDiv.appendChild(divHeading);
        cntDiv.appendChild(divParagraph);


