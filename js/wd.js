// console.log(document);
// console.log(document.body);
// console.log(document.head);
const student = {name:'Saymun',age:14,height:5.5}
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.height);

const frist = document.getElementById('one');
frist.style.backgroundColor = 'green'
// console.log(frist);

const tags = document.getElementsByTagName('h3');
// console.log(tags);
for(const tag of tags) {
    // console.log(tag.innerText);
} 

const paras = document.getElementsByTagName('p');
for (const para of paras) {
    // console.log(para.innerHTML);
}

const article = document.getElementsByClassName('web');
// console.log(article);


for (const article of articles) {
    article.style.border = '2px solid gray'
    // console.log(article);
}

