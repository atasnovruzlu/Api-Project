fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {

    }
    data.forEach(element => {
      let id = element.id;
      let email = element.email;
      let name = element.name;
      let username = element.username;
      let addrres = element.addrres;
      let cardsDiv = document.querySelector('.cardsDiv');

      let cards = `
            <div class="card m-1 myCard" style="width: 18rem">
                <div class="card-body">
           <h5 class="card-title">id:${id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${email}</h6>
    <p class="card-text">${name}</p>


    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary openModal" data-toggle="modal" data-target="#exampleModal">
  More About
</button>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 
  </div>
</div>`
      $("body").click(function (e) {
        if (e.target.className == 'btn btn-primary openModal') {

          console.log(this);

        }
      })
      cardsDiv.innerHTML += cards;

    });


  });

$(document).ready(function () {

  // var currentid = $(this).closest("tr").children("td").eq(0).text();
  // var currentUseId = $(this).closest("tr").children("td").eq(3).text();
  // var currentTitle = $(this).closest("tr").children("td").eq(1).text();
  // var currentBody = $(this).closest("tr").children("td").eq(2).text();
  // var paragraph = "<p>";
  // paragraph = paragraph +
  //   "Id: " + "  " + currentid + "<br>" +
  //   "Title: " + "  " + currentTitle + "<br>" +
  //   "Body: " + "  " + currentBody + "<br>" +
  //   "UserId: " + "  " + currentUseId + "<br>" +

  //   "</p>";
  // $(".view").html(paragraph);

})