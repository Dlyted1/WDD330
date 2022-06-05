// A the code that is responsible to get and set data for a part of the application is often called a model.
class CommentType {
    constructor(type) {
        this.type;
        this.comments=readFromLS(this.type) || [];
    }

    getComments(q === null) {
        if (q === null) {
            return this.comments;
        } else {
            //filter by name
            return this.comments.filter(el => el.name === q);
        }
    }

    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        writeToLS(this.type, this.comments);
    }
}

function writeToLS(key, data) {
    // JSON.stringify to convert our object to a string that can be stored in localStorage
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
}

// These methods create the HTML that is needed to output our list of comments to the screen.  Anything dealing with output to the browser is catagorized as view code.
const commentUI = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;

function renderCommentList(element, comments) {
    element.innerHTML = '';
    // add the new list of comments
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `
            ${el.name}: ${el.comment}
      `;

    element.appendChild(item);
  });
}


// Comments: this code handles getting the list of comments from the data source, and outputting them to the screen at the right time.