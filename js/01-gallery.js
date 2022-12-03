import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galeryMarkup = createGalleryMarkup(galleryItems);
console.log(createGalleryMarkup(galleryItems));
galleryContainer.insertAdjacentHTML("beforeend", galeryMarkup);



galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup(galleryItems) {
  return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
}

let modalWindow;
let onClickClose;
  function onGalleryContainerClick (evt){
    evt.preventDefault();

if(!evt.target.classList.contains('gallery__image')){
    return;
}
modalWindow = basicLightbox.create(
  ` <img src="${evt.target.dataset.source}"/>`
);
modalWindow.show(onClickClose);

// document.div.classList.add('basicLightbox');
window.addEventListener('keydown', onEscClose);

  }

  function onEscClose (event){
    modalWindow.close();
  }







//let modalWindow;
//let onClickClose;
//function onGalleryContainerClick(evt) {
//  evt.preventDefault();
//
//  if (!evt.target.classList.contains('galery__image')) {
//    return;
//  }
//  modalWindow = basicLightbox.create(
//    `<img src = "${evt.target.dataset.source}">`
//  );
//  modalWindow.show(onClickClose);
//
// document.div.classList.add('basicLightbox');
//window.addEventListener('keydown', onEscClose);

//  }

//  function onEscClose (event){
    //modalWindow.close();
 // }
// Change code below this line



