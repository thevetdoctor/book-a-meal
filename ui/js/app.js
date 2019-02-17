const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
    dropdown.style.display = 'none';
    dropdownContent.style.marginTop = '20px';
});

// dropdownContent.addEventListener('mouseleave', () => {
//     dropdownContent.style.display = 'none';
//     dropdown.style.display = 'block';
//     dropdownContent.style.marginTop = '20px';
// });

