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
const panelData = [
  {
    title: "Lambda School Students: Were the best!",
    date: "Nov 5th, 2017",
    content1: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando  moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon. ",
    content2: "Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2 windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba owen jinn tatooine sith organa.",
    content3: "Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.",
 },
 {
   title: "Javascript and You, ES6",
   date: "Nov 7th, 2017",
   content1: "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.",
   content2: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.",
 },
 {
   title: "React vs Angular vs Vue",
   date: "Nov 7th, 2017",
   content1: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing elit.",     
   content2: "Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor  sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum",
 },
 {
   title: "Professional Software Development in 2018",
   date: "Nov 7th, 2017",
   content1: "Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor?",
   content2: "Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor?",
   content3: "Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.",
   content4: "Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor?",
 },
 {
   title: "High Tech Education!",
   date: "Nov 7th, 2017",
   content1: "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.",
   content2: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.",
 },
 {
   title: "All the Teachers",
   date: "Nov 7th, 2017",
   content1: "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.",
   content2: "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.",
 },
] 



const accordian = document.querySelector('.articles')

//accordian.appendChild(panelComponent());
panelData.forEach(data => {
  console.log('creating panel:', data.title)
  accordian.appendChild(panelComponent(data.title, data.date, data.content1, data.content2, data.content3, data.content4))
})

function panelComponent(title, date, content1, content2, content3, content4,) {
  const articles = document.createElement('div');
  const article = document.createElement('div');
  const panelTitle = document.createElement('h2');
  const panelDate = document.createElement('p');
  const button = document.createElement('div');
  const buttonOpen = document.createElement('button');
  const buttonClose = document.createElement('button');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const paragraph4 = document.createElement('p');
  

  articles.appendChild(article);
  articles.appendChild(paragraph1);
  articles.appendChild(paragraph2);
  articles.appendChild(paragraph3);
  articles.appendChild(paragraph4);
  article.appendChild(panelTitle);
  article.appendChild(panelDate);
  article.appendChild(button);
  button.appendChild(buttonOpen);
  button.appendChild(buttonClose);
 

  articles.classList.add('.articles');
  article.classList.add('.article');
  button.classList.add('.expandButton');
  buttonOpen.classList.add('btn-open');
  buttonClose.classList.add('btn-close', 'hide-btn');
  paragraph1.classList.add('content1');
  paragraph2.classList.add('content2');
  paragraph3.classList.add('content3');
  paragraph4.classList.add('content4');



  buttonOpen.textContent = 'Expand'
  buttonClose.textContent = 'Close'
  panelTitle.textContent = title
  panelDate.textContent = date
  paragraph1.textContent = content1
  paragraph2.textContent = content2
  paragraph3.textContent = content3
  paragraph4.textContent = content4

  button.addEventListener('click', event => {
    console.log('button clicked', event.target)
    buttonOpen.classList.toggle('hide-btn')
    buttonClose.classList.toggle('hide-btn')
    paragraph1.classList.toggle('toggle-on')
    paragraph2.classList.toggle('toggle-on')
    paragraph3.classList.toggle('toggle-on')
    paragraph4.classList.toggle('toggle-on')
  })

  return articles;

}

function createPanel2(title, date, content1, content2, content3, content4) {
  const panel = document.createElement('div')
  panel.innerHTML = `<div class="article">
                        <h2>${title}</h3> 
                        <p class="date">${date}</p>
                        <div class="expandButton"> 
                          <button class="btn-open>Expand</button>
                          <button class="btn-close hide-btn">Close</button>
                        </span>
                        <p>${content1}</p>
                        <p>${content2}</p>
                        <p>${content3}</p>
                        <p>${content4}</p>
                        </div>`
  return panel
}