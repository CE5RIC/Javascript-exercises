/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




const img = document.querySelector('img');
const originalImg = img.src;





img.addEventListener('mouseover',()=>{
    img.src = img.getAttribute('data-hover')
})

img.addEventListener('mouseout',()=>{
    img.src = originalImg;
})



