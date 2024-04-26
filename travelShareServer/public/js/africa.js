      function update(data) { 
        if (data!=null)
        {
          alert("READ SUCCESS");
          $("#name").val(data.name);
          $("#rating").val(data.rating);
          display.src = "images/" + data.image;
        }
        else
          alert("INDEX ERROR");
      }

  
  		function readClicked(){
        //let num =$("#index").val();

        //$.get('/read', num, update)

                $.ajax({
            url: "/read",
            type: "GET",
            data: {index:$("#index").val()},
            success:update,
            dataType: "json"
          });

  		  return false;
  		}


  		$(document).ready(function(){

  		  $("#readButton").click(readClicked);

       // return false

  		});  	
