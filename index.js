function toggleModal()
{
    var modal = document.getElementById("draft-post-modal")
    var modalBackdrop = document.getElementById("modal-backdrop")

    modal.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")

}

var draftPostbutton = document.getElementById("draft-button")
draftPostbutton.addEventListener("click", toggleModal)

var closePost = document.getElementById("c-b")
closePost.addEventListener("click", toggleModal)