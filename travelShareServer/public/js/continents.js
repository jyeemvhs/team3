  let postNum = 0
      var list=[];
      var name = document.currentScript.getAttribute("name")

       $(document).ready(function(){

              console.log(name)
                 $.ajax({
                  url: "/read",
                  type: "GET",            
                  data: {continent:name},
                  success: function(data){
                      console.log("working")
                      if (data!=null)
                          $("#form").append("<li>" +  "Name: " + data.name + "<br>"+"country:" + data.country+ "<br>" + "<img src= 'images/" + data.image+"'> </img> <br> Description: " + data.description+"</li>");
                      },    
                  dataType: "json"
                });    
            });
