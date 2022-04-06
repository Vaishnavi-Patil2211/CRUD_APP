//const { $where } = require("../../server/model/model");


$("#add_user").submit(function(event){
    alert("data inserted sucessfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();

    var data={}

$.map(unindexed_array,function(n,i){
data[n['name']]=n['value']
})

   // console.log(data);

    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("data updated sucessfully!");
    })
})


if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
          
        }

        if(confirm("do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("data deleted sucessfully!");
                location.reload();
            })
        }
    
    })
}


// if(window.location.pathname=="/"){
//          $ondelete = $(".table tbody td a.delete");
//          $ondelete.click(function(){
//              alert("error");



//          })
        
// }