//LOCAL STORAGE
localStorage.setItem('name', 'Mike')//name is Key & value is Bob
localStorage.getItem('name')
console.log(localStorage.getItem('name'))//testing
//Notes:
//When we comment out localStorage, the information still appears
//in dev tools bc localStorage is persistant - just like 
//session storage - but session storage will end if we close out browser
//To remove from localStorage, use "removeItem"
localStorage.removeItem('name')


//SESSION STORAGE
//Session storage is exactly the same as local
sessionStorage.setItem('name', 'Ainne')
sessionStorage.getItem('name')
console.log(sessionStorage.getItem('name'))// testing
sessionStorage.removeItem("name")//removes from sessions tab
//Local & Session are very simular


//COOKIES
//Very different from local/session the only way we can interact with them is
document.cookie = ''
document.cookie = 'name = Evans; expires=' + new Date(2021, 8, 8).toUTCString() //add exp date
document.cookie = 'lastName = Oum'
console.log(document.cookie)//to view all cookies
