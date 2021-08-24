var  modelWrapper = document.querySelector('.modal-containers');
var openButton = document.querySelector('.buttons');
var closeButton = document.querySelector('.close-modal');
var submitButton = document.querySelector('.close-button');

console.dir(modelWrapper.style.display);
openButton.addEventListener('click', function(e){
    console.log(modelWrapper);
    modelWrapper.style.display= 'block';
    openButton.style.display = 'none';
});

closeButton.addEventListener('click', function(e){
        e.preventDefault();
        console.log('Clossing');
        modelWrapper.style.display= 'none';
        openButton.style.display = 'block';
})