const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button",
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInpt = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescrInpt = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostNameInpt = newPostModal.querySelector("#card-caption-input");
const newPostLinkInpt = newPostModal.querySelector("#card-image-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescrEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInpt.value = profileNameEl.textContent.trim();
  editProfileDescrInpt.value = profileDescrEl.textContent.trim();
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");
  profileNameEl.textContent = editProfileNameInpt.value;
  profileDescrEl.textContent = editProfileDescrInpt.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handledNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostNameInpt.value);
  console.log(newPostLinkInpt.value);
  newPostModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handledNewPostSubmit);
