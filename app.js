// Init

let inputValue = document.getElementById('search');

// Buttons

const searchBtn = document.getElementById('search-btn');

const addContactBtn = document.querySelector('.add-contact-btn');
const addForum = document.querySelector('#add-forum')

const editBtn = document.querySelector('.edit')
const saveBtn = document.querySelector('#save')

const deleteBtn = document.querySelector('.delete')

// Forums

const popUpAdd = document.querySelector('.add-forum-wrapper')
const popUpedit = document.querySelector('.edit-forum-wrapper')

let editDeleteBtn = document.querySelectorAll('.icon');
let editDeleteBlock = document.querySelectorAll('.edit-delete');

let editDeleteBtnArray = editDeleteBtn;
let editDeleteBlockArray = editDeleteBlock;


if(editDeleteBtnArray.length > 0){
    editDeleteBtnArray.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            editDeleteBlockArray.forEach((block,index1) => {
                block.classList.remove('pop-up')
                if( index === index1){
                    block.classList.toggle('pop-up')
                }
            })
        })
        
    })
}



addContactBtn.addEventListener('click', () => {
    popUpAdd.classList.add('active')
    document.body.style.overflow = 'hidden';
})


// editBtn.addEventListener('click', () => {
//     popUpedit.classList.add('active')
//     document.body.style.overflow = 'hidden';
// })




class Contact{
    constructor(name, phone, email, status){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.status = status;
    }
     displayContacts(){
        
    }
     addContact(book) {
        console.log(book)
    }
}





addForum.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value
    const phone = document.querySelector('#phone').value
    const email = document.querySelector('#email').value
    const status = document.querySelector('#status').value

    if( name === '' || phone === '' || email === '' || status === '' ) {
        alert('fill')
    } else {
        
        const contact = new Contact(name,phone,email,status)
        const obj = contact;
        contact.addContact(obj)
    }
    
})































// if(editDeleteBtnArray.length > 0){
    
//     editDeleteBtnArray.forEach((btn,index) => {
//         btn.addEventListener('mouseover', (e) =>  {
//             togglePopup(index)
//         })
//         btn.addEventListener('mouseout', (e) =>  {
//             removeBlock()
//         })
//     })
// }


// // document.body.addEventListener('click' ,(e) => {
// //     const element = e.target;

// //     console.log(e.target.className)

// //     if(!element.className.includes('dots')){
// //         removeBlock()
// //     }
// // })


// function togglePopup(index) {
//     editDeleteBlockArray[index].classList.add('pop-up')
// }

// function removeBlock(){
//     editDeleteBlockArray.forEach(block => {
//         block.classList.remove('pop-up')
//     })
// }





