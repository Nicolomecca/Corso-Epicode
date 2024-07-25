const apiKey = 'Mwr68UJ5Wpe2apOFidE1MyQRRkAPJktMKvlBbGhL0ZFu8uSLHy39Hye4'; 

const imageData = function(image) {
fetch(`https://api.pexels.com/v1/search?query=${image}`,{
  headers:{
    authorization: apiKey,
  },
})
.then((response)=> {
if(response.ok){
  return response.json()
}else{
  throw new Error('qualcosa non va')
}
})
.then((data)=> {
console.log('Data Img',data)
const actualPicture = document.querySelectorAll('.card-img-top')
console.log(actualPicture)
for (let i = 0; i < actualPicture.length; i++) {
  // per OGNI immagine di un cane vado a sostituire la sua "src"
  // con quella di UNA delle foto di pexels
  actualPicture[i].src = data.photos[i].src.medium
}
})
.catch((err) => {
  console.log('error', err)
})
}
const loadButton = document.querySelector('.btn-primary').addEventListener('click', function () {
  imageData('esoterico')})

const secondLoadButton = document.querySelector('.btn-secondary').addEventListener('click', function () {
    imageData('camper')})


const thirdButton = document.querySelector('.btn-info').addEventListener('click',function(){
const valueInput = document.getElementById('search').value
imageData(valueInput)
})
