const more = document.getElementById('more')
const secondPosts = document.querySelector('.second-three-posts')

more.addEventListener('click', function(){
    secondPosts.style.display = 'flex'
    secondPosts.style.gap = '1em'
    secondPosts.style.flexWrap = 'wrap'
    secondPosts.style.justifyContent = 'space-between'
    secondPosts.style.marginBottom = '2em'
    more.style.display = 'none'
})