const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navigationNav = document.getElementsByClassName('navigation')[0]

toggleButton.addEventListener('click', () =>{
    navigationNav.classList.toggle('active')
})