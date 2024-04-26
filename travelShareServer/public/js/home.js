
      let action = "";
        function setAction(actionParam) {
        //called 1.  
          console.log("setAction = " + actionParam);
          action = actionParam;
        }


     function uploadSuccess (data) {
      console.log("uploadSuccess====="+action)
          if (action == "Create")
          {

              $.ajax({
                url: "/create",
                type: "POST",
                data: {continent:$("#continent_name").val(), name:$("#name").val(), country:$("#country").val(), description:$("#description").val(), image: null},
                success:successCreate,
                dataType: "json"
              })
          }

   }

      function successCreate(data) {
        if (data!=null)
          alert("CREATE SUCCESSFUL");
        else
         alert("ERROR");
      }



      $(document).ready(function(){

        $("form").submit(function(event) {  
         //  let data = new FormData($(this)[7]);
          //console.log(data.)
          //console.log ()
          let data = new FormData($(this)[0]);
          console.log($(this)[0])
          console.log(data)

          $.ajax({
            url: "/uploadSuccessPath",
            type: "POST",
            data: data,
            processData: false, // These two are needed to prevent JQuery from processing the form data
            contentType: false,
            mimeType: 'multipart/form-data',
            success: uploadSuccess,    
            dataType: "json"
          });



          return false;
        });

        //let data = new FormData($(this)[7]);


      });  
