/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  // .then((response) => {
  //   console.log(response);
  //   response.data.forEach( items => {
  //     const newCard = cardCreator(items)
  //     cards.appendChild(newCard)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios.get('https://api.github.com/users/AdanRodriguez')
  .then(data => {
    console.log('data: ', data)
    const myInfo = data.data;
    console.log("UserInfo: ", myInfo)

    const cards = document.querySelector('.cards');
    const CardInfo = cardCreator(myInfo);
    cards.appendChild(CardInfo);
  });

const followersArray = [
  'tetondan',
  'dustinmyers',
  'rleslie1015',
  'SGonzalez44',
  'DanielWallen87',
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then (data => {
    const Card = cardCreator(data.data);
    const cards = document.querySelector('.cards');
    cards.appendChild(Card);
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



function cardCreator(item) {
  
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const github = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(github);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');

  

  image.src = item.avatar_url;
  h3.textContent = item.name;
  userName.textContent = item.login;
  location.textContent = `Location: ${item.location}`;
  followers.textContent = `Followers: ${item.followers}`;
  following.textContent = `Following: ${item.following}`;
  bio.textContent = `Bio: ${item.bio}`;
  const Link = item.url;
  github.innerHTML = `Profile: ${Link.link(item.url)}`;



  return card;
};





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
