document.addEventListener("DOMContentLoaded", function () {

    var PostArray = document.getElementsByClassName("blog-post-container");
    var PostCopy = [...PostArray];
    var ParentPost = document.querySelector(".blog-container");
    var postBlogButton = document.querySelector(".new-post-button");
    var modal = document.getElementById("draft-post-modal");
    var closeModalBtn = document.getElementById("c-b");
    var modalBackdrop = document.getElementById("modal-backdrop");
    var submitPostButton = document.getElementById("submit-post");
  
    // open modal
    const openModal = function () {
      modal.classList.remove("hidden");
      modalBackdrop.classList.remove("hidden");
    };
  
    // close modal
    const closeModal = function () {
      modal.classList.add("hidden");
      modalBackdrop.classList.add("hidden");
    };
  
    // new post event listener
    if (postBlogButton) {
      postBlogButton.addEventListener("click", openModal);
    }
  
    // submit button event listener (inside modal)
    if (submitPostButton) {
      submitPostButton.addEventListener("click", function () {
        closeModal(); 
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }
  

//function to filter and display blog posts
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
//filter to restore web page
function RestoreWebpage() {
    while (ParentPost.firstChild) {
        ParentPost.removeChild(ParentPost.firstChild);
    }

    for (var i = 0; i < PostCopy.length; i++) {
        ParentPost.appendChild(PostCopy[i])
    }
}
var filterUpdateButton = document.getElementById("filter-update-button")

if (filterUpdateButton) {
    filterUpdateButton.addEventListener("click", function () {
        // Get filter criteria from various input fields
        var textFilter = document.getElementById("filter-text").value.toLowerCase();
        var dateFilter = document.querySelector('input[name="filter"]:checked').value;

        // actual logic to determine the filter criteria
        var filterCriteria = {
            text: textFilter,
            date: dateFilter,
            // may need more
        };

        // imlement this....
        applyFiltersAndDisplayPosts(filterCriteria);
    });
}


var postBlog = document.getElementById("submitBlog");

if (postBlog) {
    postBlog.addEventListener("click", function () {
        console.log("Event listener triggered!");
        var title = document.getElementById("postTitle").value;
        var content = document.getElementById("postContent").value;
        var URL = document.getElementById("postImage").value;
        if (!title || !content || !URL) {
            alert("You must fill out all fields");
        } else {
            var postId = getPostNumberFromURL();
            var promise = fetch("/adminpage.html/addBlog", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    content: content,
                    photoURL: URL,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            promise.then(function (res) {
                if (res.status !== 200) {
                    alert("An error occurred");
                }
            });
        }
    });
}








var makeBlog = document.getElementById("submit-post");

if (makeBlog) {
    makeBlog.addEventListener("click", function () {
        console.log("Event listener triggered!")
        var title = document.getElementById("post-title").value
        var content = document.getElementById("post-content").value
        var URL = document.getElementById("post-image-url").value
        if (!title || !content || !URL) {
            alert("You must fill out all fields");
        } else {
            var promise = fetch("/testmain", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    content: content,
                    photoURL: URL,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            promise.then(function (res) {
                if (res.status !== 200) {
                    alert("An error occurred");
                }
            })
        }
    })
}

























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
        var name = document.getElementById("selectUsername").value
        console.log("USERNAME: ", username)
        if(!comment || !name)
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

var filterClick = document.getElementById("filter-update-button")
if(filterClick)
{
filterClick.addEventListener("click", function () {
    var text = document.getElementById("filter-text").value
    var radiobuttons =  document.getElementsByName("filter")
    var date
    //getting radio button that was clickjed
    for(var i =0; i<4; i++)
    {
        if(radiobuttons[i].checked)
            date = radiobuttons[i].value
    }
    
    //if no filter conditions, skip 
    if (text == "" && date == "all") {
        console.log("PostCopy:", PostCopy)
        console.log("ParentCopy:", ParentPost)
        RestoreWebpage()
        CancelExit()
    }
    //Finding Indexes that should/should not be included
    var TestArray = FindIndex(text,date)
    //removing pages which do not match filters
    FilterWebpage(TestArray)
})



//Function to convert the timestamp given by JS Date function into an integer
function convertStringMonthToNumber(strMonth) {
    // Convert the input string to lowercase for case-insensitivity
    var lowerCaseMonth = strMonth.toLowerCase();
  
    // Define an object to map string months to numeric values
    var monthMap = {
      jan: 1,
      feb: 2,
      mar: 3,
      apr: 4,
      may: 5,
      jun: 6,
      jul: 7,
      aug: 8,
      sep: 9,
      oct: 10,
      nov: 11,
      dec: 12
    };
  
    // Check if the input month is a valid key in the monthMap
    if (lowerCaseMonth in monthMap) {
      // Return the corresponding numeric value
      return monthMap[lowerCaseMonth];
    } else {
      // If the input is not a valid month, return an error value or handle accordingly
      return -1; // Or you can return null, undefined, throw an error, etc.
    }
  }



  function getdaysinmonth(month) {

    var DaysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

      return DaysInMonth[month -1]

    }

function FindIndex(text,date) {

    
    //getting the current date to compare to post dates
    var currentDate = new Date()
    console.log(currentDate)
    dateString = currentDate.toDateString()
    var words = dateString.split(' ')
    var month = convertStringMonthToNumber(words[1])
    var day = parseInt(words[2])
    var year = parseInt(words[3])

    var IndexArray = []
    IndexArray.length = PostCopy.length
    var title
    //Iterate through each blog post to check if it meets filter conditions
    for (var i = 0; i < PostCopy.length; i++) {

        title = PostCopy[i].querySelector(".blog-post-title h2").innerText
        //Checking ig the text matches
        if (title.toLowerCase().includes(text.toLowerCase())) {
            IndexArray[i] = i
        } else if (text != '') {
            IndexArray[i] = 'X'
        }

        //checking if dates match
        if(IndexArray[i] != 'X' && date != "all")
        {

        //getting the dates for each post
        var timestamp = PostCopy[i].getAttribute("data-time")
        timestamp = timestamp.trim();
        var split_timestamp = timestamp.split('-')
        var postDay = parseInt(split_timestamp[1])
        var postMonth = parseInt(split_timestamp[0])
        var postYear = parseInt(split_timestamp[2])

        var currentDate = new Date()
        var dayOfWeek = currentDate.getDay() // 0 for Sunday, 1 for Monday, and so on
        var startOfWeek = new Date(currentDate)
        startOfWeek.setDate(currentDate.getDate() - dayOfWeek) // Start of the week
        var endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - dayOfWeek))
            
        //comparing dates to see if post was made today
            if(date == "today")
            {
                if(!(day == postDay && year == postYear && month == postMonth ))
                    IndexArray[i] = 'X'

            }
            //comparing posts to see if post was made this week
            else if(date == "this-week")
            {
                var timestamp = PostCopy[i].getAttribute('data-time');
                timestamp = timestamp.trim();
                var split_timestamp = timestamp.split('-');
                var postDate = new Date(split_timestamp[2], split_timestamp[0] - 1, split_timestamp[1])
    
                if (!(postDate >= startOfWeek && postDate <= endOfWeek))
                IndexArray[i] = 'X'
            }

            //comparing if date of blog matches current month
            else if(date == "this-month")
            {
                if(!(month == postMonth && postYear == year))
                    IndexArray[i] = 'X'
            }
        }
    }
    //returning array
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


/*function toggleModal() {
    var modal = document.getElementById("draft-post-modal");
    var modalBackdrop = document.getElementById("modal-backdrop");
    modal.classList.toggle("hidden");
    modalBackdrop.classList.toggle("hidden");
  }

  var draftPostbutton = document.getElementById("draft-button");
  if (draftPostbutton) {
    draftPostbutton.addEventListener("click", toggleModal);
  }

  var closePost = document.getElementById("c-b");
  if (closePost) {
    closePost.addEventListener("click", toggleModal);
}
})*/
})