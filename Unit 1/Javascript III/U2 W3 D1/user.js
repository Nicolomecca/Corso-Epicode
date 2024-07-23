//primo esercizio
class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName=_firstName
        this.lastName=_lastName
        this.age=_age
        this.location=_location
    }
    comparison= function(otherUser){
       if(!(otherUser instanceof User) ){
        throw new Error ('il parametro deve essere un istanza della classe User')
       }
    
       if(this.age > otherUser.age){
        return`${this.firstName} è più vecchio di ${otherUser.firstName}.`
    
    } else if (this.age < otherUser.age){
        return `${this.firstName} è più giovane di ${otherUser.firstName}.`

    }else{
        return `${this.firstName} e ${otherUser-firstName} hanno la stessa età`
    } 
}
}

const freddy= new User(
    'Freddy',
    'Mercurio',
    60,
    'Las Vegas'
)

const john= new User(
    'John',
    'stravolto',
    50,
    'Brooklin'
)
console.log(freddy.comparison(john))
//Secondo esercizio
class Pet {
    constructor(_petName,_ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    sameOwner = function(otherPet){
         return this.ownerName === otherPet.ownerName
    }
  
}
//punto il form 
//successivamente punto i valori delgli imput
//creo le istanze 
// creo una lista e appendo i dati
const memory = []
const petForm = document.getElementsByTagName('form')[0]

petForm.addEventListener('submit',function(e){
    e.preventDefault()
    
const petName = document.getElementById('petName').value
const ownerName = document.getElementById('ownerName').value
const species = document.getElementById('species').value
const breed = document.getElementById('breed').value

const animals = new Pet (
    petName,
    ownerName,
    species,
    breed
)

memory.push(animals)
const list = document.getElementById('lista')
list.innerHTML=''
for (let i = 0; i < memory.length; i++){
    const newLi = document.createElement('li')
      newLi.innerText =
        memory[i].petName +
        ', ' +
        memory[i].ownerName +
        ', ' +
        memory[i].species +

        ' ,' +
        memory[i].breed 

      newLi.classList.add('list-group-item')
    
      list.appendChild(newLi)
      document.getElementsByTagName('form')[0].reset()

}
})