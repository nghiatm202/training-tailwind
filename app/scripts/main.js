const hamburgerIcon = document.querySelector('.hamburger-icon')
const sidebarSubMenuList = document.querySelectorAll('.sidebar-sub-menu-list')
const chevronIcon = document.querySelectorAll('.fa-chevron-down')
const sidebarMenuItem = document.querySelectorAll('.sidebar-menu-item')
const sidebar = document.querySelector('.sidebar')

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('fa-times')
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('block')
})

sidebarMenuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        chevronIcon[index].classList.toggle('fa-chevron-up')
        if (item.style.color) {
            item.style.color = ''
        } else {
            item.style.color = 'rgb(134 239 172)'
        }
        sidebarSubMenuList[index].classList.toggle('hidden')
        sidebarSubMenuList[index].classList.toggle('block')
    })

})