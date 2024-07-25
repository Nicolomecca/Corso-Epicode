const myLibrery = function(){
  fetch('https://striveschool-api.herokuapp.com/books')
  .then((response)=>{
      if(response.ok){
          return response.json()
      }else{
          throw new Error('qualcosa che non va'  )
      }
      
  
  })
  .then((libreryData)=> {
  console.log(libreryData)
  const firstBook = libreryData[0].title
  const secondBook = libreryData[1].title
  const thirdBook = libreryData[2].title
  const fourthBook = libreryData[3].title
  
  const spanFirst = document.getElementById('first')
  const spanSecond = document.getElementById('second')
  const spanThird = document.getElementById('third')
  const spanFourth = document.getElementById('fourth')
  
  spanFirst.innerText = firstBook
  spanSecond.innerText = secondBook
  spanThird.innerText = thirdBook
  spanFourth.innerText = fourthBook
  
  const firstPrice = libreryData[0].price
  const secondPrice = libreryData[1].price
  const thirdPrice = libreryData[2].price
  const fourthPrice = libreryData[3].price
  
  const spanonePrice = document.getElementById('onePrice')
  const spantwoPrice= document.getElementById('twoPrice')
  const spanthreePrice= document.getElementById('threePrice')
  const spanfourPrice = document.getElementById('fourPrice')
  
  spanonePrice.innerText = firstPrice
  spantwoPrice.innerText = secondPrice
  spanthreePrice.innerText = thirdPrice
  spanfourPrice.innerText = fourthPrice
  
  let scartaButtons = document.querySelectorAll('.btn-danger');
  
  scartaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      let card = this.closest('.col-md-3');
      
      card.style.display = 'none';
    });
  });
  
  
  })
  .catch((err)=>{
  
  })
  }
  myLibrery()