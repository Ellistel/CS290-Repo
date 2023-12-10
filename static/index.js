var PostArray = document.getElementsByClassName("blog-post-container")
var PostCopy = [...PostArray]
var ParentPost = document.querySelector(".blog-container")

function FilterWebpage(IndexArray) {
    while (ParentPost.firstChild) {
        ParentPost.removeChild(ParentPost.firstChild);
    }

    for (var i = 0; i < IndexArray.length; i++) {
        if (IndexArray[i] != 'X') {
            ParentPost.appendChild(PostCopy[i])
        }
    }
}

function RestoreWebpage() {
    while (ParentPost.firstChild) {
        ParentPost.removeChild(ParentPost.firstChild);
    }

    for (var i = 0; i < PostCopy.length; i++) {
        ParentPost.appendChild(PostCopy[i])
    }
}
var filterClick = document.getElementById("filter-update-button")


var postComment = document.getElementById("comment-submit-button")

function getPostNumberFromURL()
{
    var path = window.location.pathname
    var pathParts = path.split('/')
    return pathParts[1]
}


if(postComment)
{

    postComment.addEventListener("click",function(event)
    
    {
        console.log("Event listener triggered!")
        var comment = document.getElementById("postContent").value
        var name = document.getElementById("theUsername").textContent
        console.log("USERNAME: ", username)
        if(!comment)
        {
        alert("you must fill out content field")
        }
        else
        {
            var postId = getPostNumberFromURL()
           var promise = fetch("/" + postId + "/addComment",
                {method: "POST",
                body: JSON.stringify({
                    username: name,
                    content: comment
                }), headers:{
                    "Content-Type": "application/json"
                }}
            )
            promise.then(function(res){

                if(res.status!==200)
                {
                    alert("am error occured")
                }
            })
        }


    }
    
    
    )




}


if(filterClick)
{
filterClick.addEventListener("click", function () {
    var text = document.getElementById("filter-text").value

    if (text == "") {
        console.log("PostCopy:", PostCopy)
        console.log("ParentCopy:", ParentPost)
        RestoreWebpage()
        CancelExit()
    }

    var TestArray = FindIndex(text)
    FilterWebpage(TestArray)
})

function FindIndex(text) {
    var IndexArray = []
    IndexArray.length = PostCopy.length
    var title

    for (var i = 0; i < PostCopy.length; i++) {
        title = PostCopy[i].querySelector(".blog-post-title h2").innerText

        if (title.toLowerCase().includes(text.toLowerCase())) {
            IndexArray[i] = i
        } else if (text != '') {
            IndexArray[i] = 'X'
        }
    }

    return IndexArray
}
}

function toggleModal() {
    var modal = document.getElementById("draft-post-modal")
    var modalBackdrop = document.getElementById("modal-backdrop")
    console.log("dasdasdas")
    modal.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")
}


var draftPostbutton = document.getElementById("draft-button")
if(draftPostbutton)
{
draftPostbutton.addEventListener("click", toggleModal)

var closePost = document.getElementById("c-b")
closePost.addEventListener("click", toggleModal)
}