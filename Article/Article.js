// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = domElement.querySelector('.expandButton');
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.textContent = "expand";
//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     this.expandButton.addEventListener('click', () => {
//     this.expandArticle();
//     })
//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     this.domElement.classList.toggle('article-open');
//     //this.domElement.classList.toggle('close');
//   }
// }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// let articles = document.querySelectorAll('.article');

// articles.forEach(e => {
//   return new Article(e);
// });

const accordian = document.querySelector('.articles')

accordian.appendChild(panelComponent());

function panelComponent() {
  const articles = document.createElement('div');
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const paragraph4 = document.createElement('p');
  const button = document.createElement('span');

  articles.appendChild(article);
  articles.appendChild(paragraph1);
  articles.appendChild(paragraph2);
  articles.appendChild(paragraph3);
  articles.appendChild(paragraph4);
  article.appendChild(title);
  article.appendChild(button);

  articles.classList.add('.articles');
  article.classList.add('.article');
  button.classList.add('.expandButton');

  
  return articles;

}