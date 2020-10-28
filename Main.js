var csv_file_API = './Data11.csv';
//var excel_file_API = './Data.xlsx';
var jsonData = "";
//----------------------------------**************-SEMESTER 1- Start**********************-----------------------
// read csv file and convert to json format
$.ajax({
    type: 'GET',
    url: csv_file_API,
    dataType: 'text',
    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },
    success: function (data) {
        jsonData = $.csv.toObjects(data);
       // console.log(jsonData);
       // console.log(jsonData.filter(value => value.Semester =="1").length);   // These populate subjectCode DEFAULT value
        $('#SubjectCode1_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode2_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode3_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode4_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode5_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode6_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode7_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode8_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $('#SubjectCode9_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        $.each(jsonData, function (index, value) {
           // console.log(value['SubjectCode']);
            if(value['Semester']=="1"){ // Populate semester 1 subjects to the subjectCode dropdown
                $('#SubjectCode1_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode2_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode3_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode4_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode5_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode6_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode7_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode8_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                $('#SubjectCode9_Sem1').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
            }            
          });   
    } // end: Ajax success API call
}); // end: of Ajax call  
  
//This function assigns subject code credits
$(function(){  //subject 1 changed 
   
    //Boolean =true;
   $('#SubjectCode1_Sem1').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem1(data);
     //console.log("unique came   "+Boolean);
     if(Boolean){
        document.getElementById('subjectName1_Sem1').hidden =false;
        $('#subjectName1_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem1').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem1').value != '') {
           document.getElementById('grade1_Sem1').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem1').innerHTML ="";
        document.getElementById('credits1_Sem1').value ="";
         document.getElementById('grade1_Sem1').disabled = true;
     }
     

   });
});


$(function(){//subject 2 changed
    
   // Boolean=true;
   $('#SubjectCode2_Sem1').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem1(data);
     if(Boolean){
        $('#subjectName2_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem1').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem1').value != '') {
           document.getElementById('grade2_Sem1').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem1').innerHTML ="";
        document.getElementById('credits2_Sem1').value ="";
         document.getElementById('grade2_Sem1').disabled = true;
    }
 
   });
});

$(function(){//subject 3 changed 
    
   $('#SubjectCode3_Sem1').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem1(data);
     if(Boolean){
        $('#subjectName3_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem1').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem1').value != '') {
           document.getElementById('grade3_Sem1').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem1').innerHTML ="";
        document.getElementById('credits3_Sem1').value ="";
         document.getElementById('grade3_Sem1').disabled = true;
}
   });
});

$(function(){//subject 4 changed 
    
   $('#SubjectCode4_Sem1').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem1(data);
     if(Boolean){
        $('#subjectName4_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem1').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem1').value != '') {
           document.getElementById('grade4_Sem1').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem1').innerHTML ="";
        document.getElementById('credits4_Sem1').value ="";
         document.getElementById('grade4_Sem1').disabled = true;
    }
   
   });
});

$(function(){//subject 5 changed 
    
  $('#SubjectCode5_Sem1').change(function(){
    var data= $(this).val();
    Boolean = checkUniqueSem1(data);
    if(Boolean){
       $('#subjectName5_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
       $('#credits5_Sem1').val(data.substr(data.length - 1));
       if (document.getElementById('credits5_Sem1').value != '') {
          document.getElementById('grade5_Sem1').disabled = false;
      }
   }
   else{
       $('#SubjectCode5_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
       document.getElementById('subjectName5_Sem1').innerHTML ="";
       document.getElementById('credits5_Sem1').value ="";
        document.getElementById('grade5_Sem1').disabled = true;
   }
  
  });
});

$(function(){//subject 6 changed 
    
  $('#SubjectCode6_Sem1').change(function(){
    var data= $(this).val();
    Boolean = checkUniqueSem1(data);
    if(Boolean){
       $('#subjectName6_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
       $('#credits6_Sem1').val(data.substr(data.length - 1));
       if (document.getElementById('credits6_Sem1').value != '') {
          document.getElementById('grade6_Sem1').disabled = false;
      }
   }
   else{
       $('#SubjectCode6_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
       document.getElementById('subjectName6_Sem1').innerHTML ="";
       document.getElementById('credits6_Sem1').value ="";
        document.getElementById('grade6_Sem1').disabled = true;
   }
  
  });
});

$(function(){//subject 7 changed 
    
  $('#SubjectCode7_Sem1').change(function(){
    var data= $(this).val();
    Boolean = checkUniqueSem1(data);
    if(Boolean){
       $('#subjectName7_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
       $('#credits7_Sem1').val(data.substr(data.length - 1));
       if (document.getElementById('credits7_Sem1').value != '') {
          document.getElementById('grade7_Sem1').disabled = false;
      }
   }
   else{
       $('#SubjectCode7_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
       document.getElementById('subjectName7_Sem1').innerHTML ="";
       document.getElementById('credits7_Sem1').value ="";
        document.getElementById('grade7_Sem1').disabled = true;
   }
  
  });
});

$(function(){//subject 8 changed 
    
  $('#SubjectCode8_Sem1').change(function(){
    var data= $(this).val();
    Boolean = checkUniqueSem1(data);
    if(Boolean){
       $('#subjectName8_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
       $('#credits8_Sem1').val(data.substr(data.length - 1));
       if (document.getElementById('credits8_Sem1').value != '') {
          document.getElementById('grade8_Sem1').disabled = false;
      }
   }
   else{
       $('#SubjectCode8_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
       document.getElementById('subjectName8_Sem1').innerHTML ="";
       document.getElementById('credits8_Sem1').value ="";
        document.getElementById('grade8_Sem1').disabled = true;
   }
  
  });
});

$(function(){//subject 9 changed 
    
  $('#SubjectCode9_Sem1').change(function(){
    var data= $(this).val();
    Boolean = checkUniqueSem1(data);
    if(Boolean){
       $('#subjectName9_Sem1').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
       $('#credits9_Sem1').val(data.substr(data.length - 1));
       if (document.getElementById('credits9_Sem1').value != '') {
          document.getElementById('grade9_Sem1').disabled = false;
      }
   }
   else{
       $('#SubjectCode9_Sem1').append('<option selected="true" disabled>Select Subject code</option>');
       document.getElementById('subjectName9_Sem1').innerHTML ="";
       document.getElementById('credits9_Sem1').value ="";
        document.getElementById('grade9_Sem1').disabled = true;
   }
  
  });
});

function checkUniqueSem1(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem1 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem1').value,
        document.getElementById('SubjectCode2_Sem1').value,
        document.getElementById('SubjectCode3_Sem1').value,
        document.getElementById('SubjectCode4_Sem1').value,
        document.getElementById('SubjectCode5_Sem1').value,
        document.getElementById('SubjectCode6_Sem1').value,
        document.getElementById('SubjectCode7_Sem1').value,
        document.getElementById('SubjectCode8_Sem1').value,
        document.getElementById('SubjectCode9_Sem1').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}



//----------------------------------**************-SEMESTER 1- End**********************----------------------------------------------


//------------------------------------******************--Semester 2- Start-*******************--------------------------------------------------------------


function valueChangedSem2_Checkbox()
    {
        if($('#semester2checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="2"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem2').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable2").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem2').empty();
            $('#SubjectCode2_Sem2').empty();
            $('#SubjectCode3_Sem2').empty();
            $('#SubjectCode4_Sem2').empty();
            $('#SubjectCode5_Sem2').empty();
            $('#SubjectCode6_Sem2').empty();
            $('#SubjectCode7_Sem2').empty();
            $('#SubjectCode8_Sem2').empty();
            $('#SubjectCode9_Sem2').empty();
        $("#GPACalcTable2").hide();   
    }
                  
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem2').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem2(data);
     if(Boolean=true){
        $('#subjectName1_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem2').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem2').value != '') {
           document.getElementById('grade1_Sem2').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem2').innerHTML ="";
         document.getElementById('credits1_Sem2').value ="";
          document.getElementById('grade1_Sem2').disabled = true;
     }
     

   });
});


$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName2_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem2').value != '') {
           document.getElementById('grade2_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem2').innerHTML ="";
        document.getElementById('credits2_Sem2').value ="";
         document.getElementById('grade2_Sem2').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName3_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem2').value != '') {
           document.getElementById('grade3_Sem2').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem2').innerHTML ="";
        document.getElementById('credits3_Sem2').value ="";
         document.getElementById('grade3_Sem2').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName4_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem2').value != '') {
           document.getElementById('grade4_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem2').innerHTML ="";
        document.getElementById('credits4_Sem2').value ="";
         document.getElementById('grade4_Sem2').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName5_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem2').value != '') {
           document.getElementById('grade5_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem2').innerHTML ="";
        document.getElementById('credits5_Sem2').value ="";
         document.getElementById('grade5_Sem2').disabled = true;
    }

   });
});
$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName6_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem2').value != '') {
           document.getElementById('grade6_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem2').innerHTML ="";
        document.getElementById('credits6_Sem2').value ="";
         document.getElementById('grade6_Sem2').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName7_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem2').value != '') {
           document.getElementById('grade7_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem2').innerHTML ="";
        document.getElementById('credits7_Sem2').value ="";
         document.getElementById('grade7_Sem2').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName8_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem2').value != '') {
           document.getElementById('grade8_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem2').innerHTML ="";
        document.getElementById('credits8_Sem2').value ="";
         document.getElementById('grade8_Sem2').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem2').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem2(data);
     if(Boolean){
        $('#subjectName9_Sem2').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem2').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem2').value != '') {
           document.getElementById('grade9_Sem2').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem2').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem2').innerHTML ="";
        document.getElementById('credits9_Sem2').value ="";
         document.getElementById('grade9_Sem2').disabled = true;
    }

   });
});


 
function checkUniqueSem2(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem2 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem2').value,
        document.getElementById('SubjectCode2_Sem2').value,
        document.getElementById('SubjectCode3_Sem2').value,
        document.getElementById('SubjectCode4_Sem2').value,
        document.getElementById('SubjectCode5_Sem2').value,
        document.getElementById('SubjectCode6_Sem2').value,
        document.getElementById('SubjectCode7_Sem2').value,
        document.getElementById('SubjectCode8_Sem2').value,
        document.getElementById('SubjectCode9_Sem2').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}

//------------------------------------******************--Semester 2- End-*******************--------------------------------------------------------------


//------------------------------------******************--Semester 3- Start-*******************--------------------------------------------------------------

function valueChangedSem3_Checkbox()
    {
        if($('#semester3checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="3"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem3').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable3").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem3').empty();
            $('#SubjectCode2_Sem3').empty();
            $('#SubjectCode3_Sem3').empty();
            $('#SubjectCode4_Sem3').empty();
            $('#SubjectCode5_Sem2').empty();
            $('#SubjectCode6_Sem2').empty();
            $('#SubjectCode7_Sem2').empty();
            $('#SubjectCode8_Sem2').empty();
            $('#SubjectCode9_Sem2').empty();
        $("#GPACalcTable3").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem3').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem3(data);
     if(Boolean=true){
        $('#subjectName1_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem3').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem3').value != '') {
           document.getElementById('grade1_Sem3').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem3').innerHTML ="";
         document.getElementById('credits1_Sem3').value ="";
          document.getElementById('grade1_Sem3').disabled = true;
     }
     

   });
});

$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName2_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem3').value != '') {
           document.getElementById('grade2_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem3').innerHTML ="";
        document.getElementById('credits2_Sem3').value ="";
         document.getElementById('grade2_Sem3').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName3_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem3').value != '') {
           document.getElementById('grade3_Sem3').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem3').innerHTML ="";
        document.getElementById('credits3_Sem3').value ="";
         document.getElementById('grade3_Sem3').disabled = true;
}
   });
});

$(function(){ //subject 4 changed
   $('#SubjectCode4_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName4_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem3').value != '') {
           document.getElementById('grade4_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem3').innerHTML ="";
        document.getElementById('credits4_Sem3').value ="";
         document.getElementById('grade4_Sem3').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName5_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem3').value != '') {
           document.getElementById('grade5_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem3').innerHTML ="";
        document.getElementById('credits5_Sem3').value ="";
         document.getElementById('grade5_Sem3').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName6_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem3').value != '') {
           document.getElementById('grade6_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem3').innerHTML ="";
        document.getElementById('credits6_Sem3').value ="";
         document.getElementById('grade6_Sem3').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName7_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem3').value != '') {
           document.getElementById('grade7_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem3').innerHTML ="";
        document.getElementById('credits7_Sem3').value ="";
         document.getElementById('grade7_Sem3').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName8_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem3').value != '') {
           document.getElementById('grade8_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem3').innerHTML ="";
        document.getElementById('credits8_Sem3').value ="";
         document.getElementById('grade8_Sem3').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem3').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem3(data);
     if(Boolean){
        $('#subjectName9_Sem3').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem3').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem3').value != '') {
           document.getElementById('grade9_Sem3').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem3').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem3').innerHTML ="";
        document.getElementById('credits9_Sem3').value ="";
         document.getElementById('grade9_Sem3').disabled = true;
    }

   });
});

 
function checkUniqueSem3(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem3 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem3').value,
        document.getElementById('SubjectCode2_Sem3').value,
        document.getElementById('SubjectCode3_Sem3').value,
        document.getElementById('SubjectCode4_Sem3').value,
        document.getElementById('SubjectCode5_Sem3').value,
        document.getElementById('SubjectCode6_Sem3').value,
        document.getElementById('SubjectCode7_Sem3').value,
        document.getElementById('SubjectCode8_Sem3').value,
        document.getElementById('SubjectCode9_Sem3').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}
//------------------------------------******************--Semester 3- End-*******************--------------------------------------------------------------



//------------------------------------******************--Semester 4- Start-*******************--------------------------------------------------------------
function valueChangedSem4_Checkbox()
    {
        if($('#semester4checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="4"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem4').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable4").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem4').empty();
            $('#SubjectCode2_Sem4').empty();
            $('#SubjectCode3_Sem4').empty();
            $('#SubjectCode4_Sem4').empty();
            $('#SubjectCode5_Sem4').empty();
            $('#SubjectCode6_Sem4').empty();
            $('#SubjectCode7_Sem4').empty();
            $('#SubjectCode8_Sem4').empty();
            $('#SubjectCode9_Sem4').empty();
        $("#GPACalcTable4").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem4').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem4(data);
     if(Boolean=true){
        $('#subjectName1_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem4').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem4').value != '') {
           document.getElementById('grade1_Sem4').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem4').innerHTML ="";
         document.getElementById('credits1_Sem4').value ="";
          document.getElementById('grade1_Sem4').disabled = true;
     }
     

   });
});

$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName2_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem4').value != '') {
           document.getElementById('grade2_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem4').innerHTML ="";
        document.getElementById('credits2_Sem4').value ="";
         document.getElementById('grade2_Sem4').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName3_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem4').value != '') {
           document.getElementById('grade3_Sem4').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem4').innerHTML ="";
        document.getElementById('credits3_Sem4').value ="";
         document.getElementById('grade3_Sem4').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName4_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem4').value != '') {
           document.getElementById('grade4_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem4').innerHTML ="";
        document.getElementById('credits4_Sem4').value ="";
         document.getElementById('grade4_Sem4').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName5_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem4').value != '') {
           document.getElementById('grade5_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem4').innerHTML ="";
        document.getElementById('credits5_Sem4').value ="";
         document.getElementById('grade5_Sem4').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName6_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem4').value != '') {
           document.getElementById('grade6_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem4').innerHTML ="";
        document.getElementById('credits6_Sem4').value ="";
         document.getElementById('grade6_Sem4').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName7_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem4').value != '') {
           document.getElementById('grade7_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem4').innerHTML ="";
        document.getElementById('credits7_Sem4').value ="";
         document.getElementById('grade7_Sem4').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName8_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem4').value != '') {
           document.getElementById('grade8_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem4').innerHTML ="";
        document.getElementById('credits8_Sem4').value ="";
         document.getElementById('grade8_Sem4').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem4').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem4(data);
     if(Boolean){
        $('#subjectName9_Sem4').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem4').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem4').value != '') {
           document.getElementById('grade9_Sem4').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem4').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem4').innerHTML ="";
        document.getElementById('credits9_Sem4').value ="";
         document.getElementById('grade9_Sem4').disabled = true;
    }

   });
});

 
function checkUniqueSem4(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem4 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem4').value,
        document.getElementById('SubjectCode2_Sem4').value,
        document.getElementById('SubjectCode3_Sem4').value,
        document.getElementById('SubjectCode4_Sem4').value,
        document.getElementById('SubjectCode5_Sem4').value,
        document.getElementById('SubjectCode6_Sem4').value,
        document.getElementById('SubjectCode7_Sem4').value,
        document.getElementById('SubjectCode8_Sem4').value,
        document.getElementById('SubjectCode9_Sem4').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}

//------------------------------------******************--Semester 4- End-*******************--------------------------------------------------------------


//------------------------------------******************--Semester 5- Start-*******************--------------------------------------------------------------

function valueChangedSem5_Checkbox()
    {
        if($('#semester5checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="5"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem5').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable5").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem5').empty();
            $('#SubjectCode2_Sem5').empty();
            $('#SubjectCode3_Sem5').empty();
            $('#SubjectCode4_Sem5').empty();
            $('#SubjectCode5_Sem5').empty();
            $('#SubjectCode6_Sem5').empty();
            $('#SubjectCode7_Sem5').empty();
            $('#SubjectCode8_Sem5').empty();
            $('#SubjectCode9_Sem5').empty();
        $("#GPACalcTable5").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem5').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem5(data);
     if(Boolean=true){
        $('#subjectName1_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem5').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem5').value != '') {
           document.getElementById('grade1_Sem5').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem5').innerHTML ="";
         document.getElementById('credits1_Sem5').value ="";
          document.getElementById('grade1_Sem5').disabled = true;
     }
     

   });
});


$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName2_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem5').value != '') {
           document.getElementById('grade2_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem5').innerHTML ="";
        document.getElementById('credits2_Sem5').value ="";
         document.getElementById('grade2_Sem5').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName3_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem5').value != '') {
           document.getElementById('grade3_Sem5').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem5').innerHTML ="";
        document.getElementById('credits3_Sem5').value ="";
         document.getElementById('grade3_Sem5').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName4_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem5').value != '') {
           document.getElementById('grade4_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem5').innerHTML ="";
        document.getElementById('credits4_Sem5').value ="";
         document.getElementById('grade4_Sem5').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName5_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem5').value != '') {
           document.getElementById('grade5_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem5').innerHTML ="";
        document.getElementById('credits5_Sem5').value ="";
         document.getElementById('grade5_Sem5').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName6_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem5').value != '') {
           document.getElementById('grade6_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem5').innerHTML ="";
        document.getElementById('credits6_Sem5').value ="";
         document.getElementById('grade6_Sem5').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName7_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem5').value != '') {
           document.getElementById('grade7_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem5').innerHTML ="";
        document.getElementById('credits7_Sem5').value ="";
         document.getElementById('grade7_Sem5').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName8_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem5').value != '') {
           document.getElementById('grade8_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem5').innerHTML ="";
        document.getElementById('credits8_Sem5').value ="";
         document.getElementById('grade8_Sem5').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem5').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem5(data);
     if(Boolean){
        $('#subjectName9_Sem5').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem5').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem5').value != '') {
           document.getElementById('grade9_Sem5').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem5').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem5').innerHTML ="";
        document.getElementById('credits9_Sem5').value ="";
         document.getElementById('grade9_Sem5').disabled = true;
    }

   });
});
 
function checkUniqueSem5(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem5 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem5').value,
        document.getElementById('SubjectCode2_Sem5').value,
        document.getElementById('SubjectCode3_Sem5').value,
        document.getElementById('SubjectCode4_Sem5').value,
        document.getElementById('SubjectCode5_Sem5').value,
        document.getElementById('SubjectCode6_Sem5').value,
        document.getElementById('SubjectCode7_Sem5').value,
        document.getElementById('SubjectCode8_Sem5').value,
        document.getElementById('SubjectCode9_Sem5').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}

//------------------------------------******************--Semester 5- End-*******************--------------------------------------------------------------


//------------------------------------******************--Semester 6- Start-*******************--------------------------------------------------------------

function valueChangedSem6_Checkbox()
    {
        if($('#semester6checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="6"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem6').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable6").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem6').empty();
            $('#SubjectCode2_Sem6').empty();
            $('#SubjectCode3_Sem6').empty();
            $('#SubjectCode4_Sem6').empty();
            $('#SubjectCode5_Sem6').empty();
            $('#SubjectCode6_Sem6').empty();
            $('#SubjectCode7_Sem6').empty();
            $('#SubjectCode8_Sem6').empty();
            $('#SubjectCode9_Sem6').empty();
        $("#GPACalcTable6").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem6').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem6(data);
     if(Boolean=true){
        $('#subjectName1_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem6').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem6').value != '') {
           document.getElementById('grade1_Sem6').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem6').innerHTML ="";
         document.getElementById('credits1_Sem6').value ="";
          document.getElementById('grade1_Sem6').disabled = true;
     }
     

   });
});


$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName2_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem6').value != '') {
           document.getElementById('grade2_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem6').innerHTML ="";
        document.getElementById('credits2_Sem6').value ="";
         document.getElementById('grade2_Sem6').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName3_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem6').value != '') {
           document.getElementById('grade3_Sem6').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem6').innerHTML ="";
        document.getElementById('credits3_Sem6').value ="";
         document.getElementById('grade3_Sem6').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName4_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem6').value != '') {
           document.getElementById('grade4_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem6').innerHTML ="";
        document.getElementById('credits4_Sem6').value ="";
         document.getElementById('grade4_Sem6').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName5_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem6').value != '') {
           document.getElementById('grade5_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem6').innerHTML ="";
        document.getElementById('credits5_Sem6').value ="";
         document.getElementById('grade5_Sem6').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName6_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem6').value != '') {
           document.getElementById('grade6_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem6').innerHTML ="";
        document.getElementById('credits6_Sem6').value ="";
         document.getElementById('grade6_Sem6').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName7_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem6').value != '') {
           document.getElementById('grade7_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem6').innerHTML ="";
        document.getElementById('credits7_Sem6').value ="";
         document.getElementById('grade7_Sem6').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName8_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem6').value != '') {
           document.getElementById('grade8_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem6').innerHTML ="";
        document.getElementById('credits8_Sem6').value ="";
         document.getElementById('grade8_Sem6').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem6').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem6(data);
     if(Boolean){
        $('#subjectName9_Sem6').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem6').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem6').value != '') {
           document.getElementById('grade9_Sem6').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem6').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem6').innerHTML ="";
        document.getElementById('credits9_Sem6').value ="";
         document.getElementById('grade9_Sem6').disabled = true;
    }

   });
});

 
function checkUniqueSem6(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem6 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem6').value,
        document.getElementById('SubjectCode2_Sem6').value,
        document.getElementById('SubjectCode3_Sem6').value,
        document.getElementById('SubjectCode4_Sem6').value,
        document.getElementById('SubjectCode5_Sem6').value,
        document.getElementById('SubjectCode6_Sem6').value,
        document.getElementById('SubjectCode7_Sem6').value,
        document.getElementById('SubjectCode8_Sem6').value,
        document.getElementById('SubjectCode9_Sem6').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}
//------------------------------------******************--Semester 6- End-*******************--------------------------------------------------------------


//------------------------------------******************--Semester 7- Start-*******************--------------------------------------------------------------

function valueChangedSem7_Checkbox()
    {
        if($('#semester7checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="7"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem7').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable7").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem7').empty();
            $('#SubjectCode2_Sem7').empty();
            $('#SubjectCode3_Sem7').empty();
            $('#SubjectCode4_Sem7').empty();
            $('#SubjectCode5_Sem7').empty();
            $('#SubjectCode6_Sem7').empty();
            $('#SubjectCode7_Sem7').empty();
            $('#SubjectCode8_Sem7').empty();
            $('#SubjectCode9_Sem7').empty();
        $("#GPACalcTable7").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem7').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem7(data);
     if(Boolean=true){
        $('#subjectName1_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem7').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem7').value != '') {
           document.getElementById('grade1_Sem7').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem7').innerHTML ="";
         document.getElementById('credits1_Sem7').value ="";
          document.getElementById('grade1_Sem7').disabled = true;
     }
     

   });
});


$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName2_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem7').value != '') {
           document.getElementById('grade2_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem7').innerHTML ="";
        document.getElementById('credits2_Sem7').value ="";
         document.getElementById('grade2_Sem7').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName3_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem7').value != '') {
           document.getElementById('grade3_Sem7').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem7').innerHTML ="";
        document.getElementById('credits3_Sem7').value ="";
         document.getElementById('grade3_Sem7').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName4_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem7').value != '') {
           document.getElementById('grade4_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem7').innerHTML ="";
        document.getElementById('credits4_Sem7').value ="";
         document.getElementById('grade4_Sem7').disabled = true;
    }
   
   });
});

$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName5_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem7').value != '') {
           document.getElementById('grade5_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem7').innerHTML ="";
        document.getElementById('credits5_Sem7').value ="";
         document.getElementById('grade5_Sem7').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName6_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem7').value != '') {
           document.getElementById('grade6_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem7').innerHTML ="";
        document.getElementById('credits6_Sem7').value ="";
         document.getElementById('grade6_Sem7').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName7_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem7').value != '') {
           document.getElementById('grade7_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem7').innerHTML ="";
        document.getElementById('credits7_Sem7').value ="";
         document.getElementById('grade7_Sem7').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName8_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem7').value != '') {
           document.getElementById('grade8_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem7').innerHTML ="";
        document.getElementById('credits8_Sem7').value ="";
         document.getElementById('grade8_Sem7').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem7').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem7(data);
     if(Boolean){
        $('#subjectName9_Sem7').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem7').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem7').value != '') {
           document.getElementById('grade9_Sem7').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem7').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem7').innerHTML ="";
        document.getElementById('credits9_Sem7').value ="";
         document.getElementById('grade9_Sem7').disabled = true;
    }

   });
});


 
function checkUniqueSem7(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem7 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem7').value,
        document.getElementById('SubjectCode2_Sem7').value,
        document.getElementById('SubjectCode3_Sem7').value,
        document.getElementById('SubjectCode4_Sem7').value,
        document.getElementById('SubjectCode5_Sem7').value,
        document.getElementById('SubjectCode6_Sem7').value,
        document.getElementById('SubjectCode7_Sem7').value,
        document.getElementById('SubjectCode8_Sem7').value,
        document.getElementById('SubjectCode9_Sem7').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}
//------------------------------------******************--Semester 7- End-*******************--------------------------------------------------------------


//------------------------------------******************--Semester 8- Start-*******************--------------------------------------------------------------
function valueChangedSem8_Checkbox()
    {
        if($('#semester8checkbox').is(":checked"))   
        {
            $('#SubjectCode1_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode2_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode3_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode4_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode5_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode6_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode7_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode8_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $('#SubjectCode9_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
            $.each(jsonData, function (index, value) {
               // console.log(value['SubjectCode']);
                if(value['Semester']=="8"){ // Populate semester 1 subjects to the subjectCode dropdown
                    $('#SubjectCode1_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode2_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode3_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode4_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode5_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode6_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode7_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode8_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                    $('#SubjectCode9_Sem8').append($('<option></option>').attr('value', value['SubjectCode']).text(value['SubjectCode']));
                }            
              }); 
            $("#GPACalcTable8").show();  
        }
            
        else
        {  
            $('#SubjectCode1_Sem8').empty();
            $('#SubjectCode2_Sem8').empty();
            $('#SubjectCode3_Sem8').empty();
            $('#SubjectCode4_Sem8').empty();
            $('#SubjectCode5_Sem8').empty();
            $('#SubjectCode6_Sem8').empty();
            $('#SubjectCode7_Sem8').empty();
            $('#SubjectCode8_Sem8').empty();
            $('#SubjectCode9_Sem8').empty();

        $("#GPACalcTable8").hide();

    
        
    }
         
            
    }

$(function(){ //This function assigns subject code credits
    //subject 1 changed 
    //Boolean =true;
   $('#SubjectCode1_Sem8').change(function(){
     var data= $(this).val(); //fetches the selected SubjectCode 
     Boolean = checkUniqueSem8(data);
     if(Boolean=true){
        $('#subjectName1_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);// get subject title by SubjectCode
        $('#credits1_Sem8').val(data.substr(data.length - 1)); // get last character of SubjectCode
        if (document.getElementById('credits1_Sem8').value != '') {
           document.getElementById('grade1_Sem8').disabled = false;
       }
     }
     else{
         $('#SubjectCode1_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
         document.getElementById('subjectName1_Sem8').innerHTML ="";
         document.getElementById('credits1_Sem8').value ="";
          document.getElementById('grade1_Sem8').disabled = true;
     }
     

   });
});


$(function(){ //subject 2 changed
   
   // Boolean=true;
   $('#SubjectCode2_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName2_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits2_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits2_Sem8').value != '') {
           document.getElementById('grade2_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode2_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName2_Sem8').innerHTML ="";
        document.getElementById('credits2_Sem8').value ="";
         document.getElementById('grade2_Sem8').disabled = true;
    }
 
   });
});

$(function(){ //subject 3 changed   
   $('#SubjectCode3_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName3_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits3_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits3_Sem8').value != '') {
           document.getElementById('grade3_Sem8').disabled = false;
       }
}
else{
        $('#SubjectCode3_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName3_Sem8').innerHTML ="";
        document.getElementById('credits3_Sem8').value ="";
         document.getElementById('grade3_Sem8').disabled = true;
}
   });
});

$(function(){ //subject 4 changed   
   $('#SubjectCode4_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName4_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits4_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits4_Sem8').value != '') {
           document.getElementById('grade4_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode4_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName4_Sem8').innerHTML ="";
        document.getElementById('credits4_Sem8').value ="";
         document.getElementById('grade4_Sem8').disabled = true;
    }
   
   });
});
$(function(){ //subject 5 changed
   $('#SubjectCode5_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName5_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits5_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits5_Sem8').value != '') {
           document.getElementById('grade5_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode5_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName5_Sem8').innerHTML ="";
        document.getElementById('credits5_Sem8').value ="";
         document.getElementById('grade5_Sem8').disabled = true;
    }

   });
});

$(function(){ //subject 6 changed
   $('#SubjectCode6_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName6_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits6_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits6_Sem8').value != '') {
           document.getElementById('grade6_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode6_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName6_Sem8').innerHTML ="";
        document.getElementById('credits6_Sem8').value ="";
         document.getElementById('grade6_Sem8').disabled = true;
    }

   });
});

$(function(){ //subject 7 changed
   $('#SubjectCode7_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName7_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits7_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits7_Sem8').value != '') {
           document.getElementById('grade7_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode7_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName7_Sem8').innerHTML ="";
        document.getElementById('credits7_Sem8').value ="";
         document.getElementById('grade7_Sem8').disabled = true;
    }

   });
});

$(function(){ //subject 8 changed
   $('#SubjectCode8_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName8_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits8_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits8_Sem8').value != '') {
           document.getElementById('grade8_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode8_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName8_Sem8').innerHTML ="";
        document.getElementById('credits8_Sem8').value ="";
         document.getElementById('grade8_Sem8').disabled = true;
    }

   });
});

$(function(){ //subject 9 changed
   $('#SubjectCode9_Sem8').change(function(){
     var data= $(this).val();
     Boolean = checkUniqueSem8(data);
     if(Boolean){
        $('#subjectName9_Sem8').text(jsonData.filter(value => value.SubjectCode==data)[0].Title);
        $('#credits9_Sem8').val(data.substr(data.length - 1));
        if (document.getElementById('credits9_Sem8').value != '') {
           document.getElementById('grade9_Sem8').disabled = false;
       }
    }
    else{
        $('#SubjectCode9_Sem8').append('<option selected="true" disabled>Select Subject code</option>');
        document.getElementById('subjectName9_Sem8').innerHTML ="";
        document.getElementById('credits9_Sem8').value ="";
         document.getElementById('grade9_Sem8').disabled = true;
    }

   });
});

 
function checkUniqueSem8(data) { //this function checks whether you have selected the same subject more than once
    var elt =data;  
    console.log("checkUniqueSem8 started");
    var c =0;
    console.log('elt='+elt);                     
    var valCounter = {};

    var othercodes = [ // add more elements when you are adding more subjects
        document.getElementById('SubjectCode1_Sem8').value,
        document.getElementById('SubjectCode2_Sem8').value,
        document.getElementById('SubjectCode3_Sem8').value,
        document.getElementById('SubjectCode4_Sem8').value,
        document.getElementById('SubjectCode5_Sem8').value,
        document.getElementById('SubjectCode6_Sem8').value,
        document.getElementById('SubjectCode7_Sem8').value,
        document.getElementById('SubjectCode8_Sem8').value,
        document.getElementById('SubjectCode9_Sem8').value
    ];

    othercodes.forEach(element => {
        if(element==elt)
        {
            c = c+1;  
        }
        else{}
    });
    
    console.log('log c='+c);
        if(c>1){
            window.alert(elt+ " Subject Already Choosen!");
            return false;
        }
        else
        {
        return true;
        }
     
 
    //document.getElementById("notification").innerHTML = "";
   // document.getElementById("submit").removeAttribute("disabled");    
    // so that it allows form submission again;
}
//------------------------------------******************--Semester 8- End-*******************--------------------------------------------------------------




 
//-----------------------------------------------GPA CALC FUNCTION-----------------------------------------------------//

//declaring variables
var credits1_Sem1 =0;
var grade1_Sem1   =0;
var credits2_Sem1 =0;
var grade2_Sem1   =0;
var credits3_Sem1 =0;
var grade3_Sem1   =0;
var credits4_Sem1 =0;
var grade4_Sem1   =0;
var credits5_Sem1 =0;
var grade5_Sem1   =0;
var credits6_Sem1 =0;
var grade6_Sem1   =0;
var credits7_Sem1 =0;
var grade7_Sem1   =0;
var credits8_Sem1 =0;
var grade8_Sem1   =0;
var credits9_Sem1 =0;
var grade9_Sem1   =0;

var CGPSubject1_Sem1=0;
var CGPSubject2_Sem1=0; 
var CGPSubject3_Sem1=0;
var CGPSubject4_Sem1=0;
var CGPSubject5_Sem1=0;
var CGPSubject6_Sem1=0;
var CGPSubject7_Sem1=0;
var CGPSubject8_Sem1=0;
var CGPSubject9_Sem1=0;
var Sem1TotalCredits =0;

var credits1_Sem2 =0;
var grade1_Sem2   =0;
var credits2_Sem2 =0;
var grade2_Sem2   =0;
var credits3_Sem2 =0;
var grade3_Sem2   =0;
var credits4_Sem2 =0;
var grade4_Sem2   =0;
var credits5_Sem2 =0;
var grade5_Sem2   =0;
var credits6_Sem2 =0;
var grade6_Sem2   =0;
var credits7_Sem2 =0;
var grade7_Sem2   =0;
var credits8_Sem2 =0;
var grade8_Sem2   =0;
var credits9_Sem2 =0;
var grade9_Sem2   =0;

var CGPSubject1_Sem2=0;
var CGPSubject2_Sem2=0; 
var CGPSubject3_Sem2=0;
var CGPSubject4_Sem2=0;
var CGPSubject5_Sem2=0;
var CGPSubject6_Sem2=0;
var CGPSubject7_Sem2=0;
var CGPSubject8_Sem2=0;
var CGPSubject9_Sem2=0;
var Sem2TotalCredits =0;

var credits1_Sem3 =0;
var grade1_Sem3   =0;
var credits2_Sem3 =0;
var grade2_Sem3   =0;
var credits3_Sem3 =0;
var grade3_Sem3   =0;
var credits4_Sem3 =0;
var grade4_Sem3   =0;
var credits5_Sem3 =0;
var grade5_Sem3   =0;
var credits6_Sem3 =0;
var grade6_Sem3   =0;
var credits7_Sem3 =0;
var grade7_Sem3   =0;
var credits8_Sem3 =0;
var grade8_Sem3   =0;
var credits9_Sem3 =0;
var grade9_Sem3   =0;

var CGPSubject1_Sem3=0;
var CGPSubject2_Sem3=0; 
var CGPSubject3_Sem3=0;
var CGPSubject4_Sem3=0;
var CGPSubject5_Sem3=0;
var CGPSubject6_Sem3=0;
var CGPSubject7_Sem3=0;
var CGPSubject8_Sem3=0;
var CGPSubject9_Sem3=0;
var Sem3TotalCredits =0;

var credits1_Sem4 =0;
var grade1_Sem4   =0;
var credits2_Sem4 =0;
var grade2_Sem4   =0;
var credits3_Sem4 =0;
var grade3_Sem4   =0;
var credits4_Sem4 =0;
var grade4_Sem4   =0;
var credits5_Sem4 =0;
var grade5_Sem4   =0;
var credits6_Sem4 =0;
var grade6_Sem4   =0;
var credits7_Sem4 =0;
var grade7_Sem4   =0;
var credits8_Sem4 =0;
var grade8_Sem4   =0;
var credits9_Sem4 =0;
var grade9_Sem4   =0;

var CGPSubject1_Sem4=0;
var CGPSubject2_Sem4=0; 
var CGPSubject3_Sem4=0;
var CGPSubject4_Sem4=0;
var CGPSubject5_Sem4=0;
var CGPSubject6_Sem4=0;
var CGPSubject7_Sem4=0;
var CGPSubject8_Sem4=0;
var CGPSubject9_Sem4=0;
var Sem4TotalCredits =0;

var credits1_Sem5 =0;
var grade1_Sem5   =0;
var credits2_Sem5 =0;
var grade2_Sem5   =0;
var credits3_Sem5 =0;
var grade3_Sem5   =0;
var credits4_Sem5 =0;
var grade4_Sem5   =0;
var credits5_Sem5 =0;
var grade5_Sem5   =0;
var credits6_Sem5 =0;
var grade6_Sem5   =0;
var credits7_Sem5 =0;
var grade7_Sem5   =0;
var credits8_Sem5 =0;
var grade8_Sem5   =0;
var credits9_Sem5 =0;
var grade9_Sem5   =0;

var CGPSubject1_Sem5=0;
var CGPSubject2_Sem5=0; 
var CGPSubject3_Sem5=0;
var CGPSubject4_Sem5=0;
var CGPSubject5_Sem5=0;
var CGPSubject6_Sem5=0;
var CGPSubject7_Sem5=0;
var CGPSubject8_Sem5=0;
var CGPSubject9_Sem5=0;
var Sem5TotalCredits =0;

var credits1_Sem6 =0;
var grade1_Sem6   =0;
var credits2_Sem6 =0;
var grade2_Sem6   =0;
var credits3_Sem6 =0;
var grade3_Sem6   =0;
var credits4_Sem6 =0;
var grade4_Sem6   =0;
var credits5_Sem6 =0;
var grade5_Sem6   =0;
var credits6_Sem6 =0;
var grade6_Sem6   =0;
var credits7_Sem6 =0;
var grade7_Sem6   =0;
var credits8_Sem6 =0;
var grade8_Sem6   =0;
var credits9_Sem6 =0;
var grade9_Sem6   =0;

var CGPSubject1_Sem6=0;
var CGPSubject2_Sem6=0; 
var CGPSubject3_Sem6=0;
var CGPSubject4_Sem6=0;
var CGPSubject5_Sem6=0;
var CGPSubject6_Sem6=0;
var CGPSubject7_Sem6=0;
var CGPSubject8_Sem6=0;
var CGPSubject9_Sem6=0;
var Sem6TotalCredits =0;

var credits1_Sem7 =0;
var grade1_Sem7   =0;
var credits2_Sem7 =0;
var grade2_Sem7   =0;
var credits3_Sem7 =0;
var grade3_Sem7   =0;
var credits4_Sem7 =0;
var grade4_Sem7   =0;
var credits5_Sem7 =0;
var grade5_Sem7   =0;
var credits6_Sem7 =0;
var grade6_Sem7   =0;
var credits7_Sem7 =0;
var grade7_Sem7   =0;
var credits8_Sem7 =0;
var grade8_Sem7   =0;
var credits9_Sem7 =0;
var grade9_Sem7   =0;

var CGPSubject1_Sem7=0;
var CGPSubject2_Sem7=0; 
var CGPSubject3_Sem7=0;
var CGPSubject4_Sem7=0;
var CGPSubject5_Sem7=0;
var CGPSubject6_Sem7=0;
var CGPSubject7_Sem7=0;
var CGPSubject8_Sem7=0;
var CGPSubject9_Sem7=0;
var Sem7TotalCredits =0;

var credits1_Sem8 =0;
var grade1_Sem8   =0;
var credits2_Sem8 =0;
var grade2_Sem8   =0;
var credits3_Sem8 =0;
var grade3_Sem8   =0;
var credits4_Sem8 =0;
var grade4_Sem8   =0;
var credits5_Sem8 =0;
var grade5_Sem8   =0;
var credits6_Sem8 =0;
var grade6_Sem8   =0;
var credits7_Sem8 =0;
var grade7_Sem8   =0;
var credits8_Sem8 =0;
var grade8_Sem8   =0;
var credits9_Sem8 =0;
var grade9_Sem8   =0;

var CGPSubject1_Sem8=0;
var CGPSubject2_Sem8=0; 
var CGPSubject3_Sem8=0;
var CGPSubject4_Sem8=0;
var CGPSubject5_Sem8=0;
var CGPSubject6_Sem8=0;
var CGPSubject7_Sem8=0;
var CGPSubject8_Sem8=0;
var CGPSubject9_Sem8=0;
var Sem8TotalCredits =0;



var Sem1TotalCGP =0;
var Sem2TotalCGP =0;
var Sem3TotalCGP =0;
var Sem4TotalCGP =0;
var Sem5TotalCGP =0;
var Sem6TotalCGP =0;
var Sem7TotalCGP =0;
var Sem8TotalCGP =0;

var totalCreditsOfAllSems=0;
var cumulativeGPA = 0;

 function CalculateSemGPA(){

  //.............fetch Sem 1 user input...........................
  credits1_Sem1= parseFloat(document.getElementById('credits1_Sem1').value);
  grade1_Sem1  =  parseFloat(document.getElementById('grade1_Sem1').value);
  CGPSubject1_Sem1= (credits1_Sem1 * grade1_Sem1); 
     // console.log("CGPSubject1_Sem1 = "+CGPSubject1_Sem1);

  credits2_Sem1= parseFloat(document.getElementById('credits2_Sem1').value);
     //console.log("credits2_Sem1 = "+credits2_Sem1);
  grade2_Sem1  = parseFloat(document.getElementById('grade2_Sem1').value);
    // console.log("grade2_Sem1 = "+grade2_Sem1);
  CGPSubject2_Sem1= (credits2_Sem1*grade2_Sem1); 
     //console.log("CGPSubject2_Sem1 = "+CGPSubject2_Sem1);

  credits3_Sem1= parseFloat(document.getElementById('credits3_Sem1').value);
  grade3_Sem1  =  parseFloat(document.getElementById('grade3_Sem1').value);
  CGPSubject3_Sem1= (credits3_Sem1 * grade3_Sem1); 

  credits4_Sem1= parseFloat(document.getElementById('credits4_Sem1').value);
  grade4_Sem1  =  parseFloat(document.getElementById('grade4_Sem1').value);
  CGPSubject4_Sem1= (credits4_Sem1 * grade4_Sem1); 

  credits5_Sem1= parseFloat(document.getElementById('credits5_Sem1').value);
  grade5_Sem1  =  parseFloat(document.getElementById('grade5_Sem1').value);
  CGPSubject5_Sem1= (credits5_Sem1 * grade5_Sem1); 

  credits6_Sem1= parseFloat(document.getElementById('credits6_Sem1').value);
  grade6_Sem1  =  parseFloat(document.getElementById('grade6_Sem1').value);
  CGPSubject6_Sem1= (credits6_Sem1 * grade6_Sem1); 

  credits7_Sem1= parseFloat(document.getElementById('credits7_Sem1').value);
  grade7_Sem1  =  parseFloat(document.getElementById('grade7_Sem1').value);
  CGPSubject7_Sem1= (credits7_Sem1 * grade7_Sem1); 

  credits8_Sem1= parseFloat(document.getElementById('credits8_Sem1').value);
  grade8_Sem1  =  parseFloat(document.getElementById('grade8_Sem1').value);
  CGPSubject8_Sem1= (credits8_Sem1 * grade8_Sem1); 

  credits9_Sem1= parseFloat(document.getElementById('credits9_Sem1').value);
  grade9_Sem1  =  parseFloat(document.getElementById('grade9_Sem1').value);
  CGPSubject9_Sem1= (credits9_Sem1 * grade9_Sem1); 

  Sem1TotalCGP = (CGPSubject1_Sem1 + CGPSubject2_Sem1 + CGPSubject3_Sem1 + CGPSubject4_Sem1 +CGPSubject5_Sem1 +CGPSubject6_Sem1 + CGPSubject7_Sem1 +  CGPSubject8_Sem1 +  CGPSubject9_Sem1);
  Sem1TotalCredits = (credits1_Sem1 + credits2_Sem1 + credits3_Sem1 + credits4_Sem1+ credits5_Sem1+ credits6_Sem1+ credits7_Sem1+ credits8_Sem1 + credits9_Sem1);

  var Sem1GPA = Sem1TotalCGP/Sem1TotalCredits;
    //console.log("Zigma CiGi = "+(Sem1TotalCGP));
    //console.log("Zigma Ci = "+Sem1TotalCredits);
  $('#Semester1GPA ').val(Sem1GPA); //--Assigning sem1 gpa to html ui


 //..........fetch Sem 2 user input.................................
 if($('#semester2checkbox').is(":checked")){
  credits1_Sem2= parseFloat(document.getElementById('credits1_Sem2').value);
  grade1_Sem2  = parseFloat(document.getElementById('grade1_Sem2').value);
  CGPSubject1_Sem2=credits1_Sem2*grade1_Sem2; 

  credits2_Sem2= parseFloat(document.getElementById('credits2_Sem2').value);
  grade2_Sem2  = parseFloat(document.getElementById('grade2_Sem2').value);
  CGPSubject2_Sem2=credits2_Sem2*grade2_Sem2; 

  credits3_Sem2= parseFloat(document.getElementById('credits3_Sem2').value);
  grade3_Sem2  = parseFloat(document.getElementById('grade3_Sem2').value);
  CGPSubject3_Sem2=credits3_Sem2*grade3_Sem2; 

  credits4_Sem2= parseFloat(document.getElementById('credits4_Sem2').value);
  grade4_Sem2  = parseFloat(document.getElementById('grade4_Sem2').value);
  CGPSubject4_Sem2=credits4_Sem2*grade4_Sem2;

  credits5_Sem2= parseFloat(document.getElementById('credits5_Sem2').value);
  grade5_Sem2  = parseFloat(document.getElementById('grade5_Sem2').value);
  CGPSubject5_Sem2=credits5_Sem2*grade5_Sem2;

  credits6_Sem2= parseFloat(document.getElementById('credits6_Sem2').value);
  grade6_Sem2  = parseFloat(document.getElementById('grade6_Sem2').value);
  CGPSubject6_Sem2=credits6_Sem2*grade6_Sem2;

  credits7_Sem2= parseFloat(document.getElementById('credits7_Sem2').value);
  grade7_Sem2  = parseFloat(document.getElementById('grade7_Sem2').value);
  CGPSubject7_Sem2=credits7_Sem2*grade7_Sem2;

  credits8_Sem2= parseFloat(document.getElementById('credits8_Sem2').value);
  grade8_Sem2  = parseFloat(document.getElementById('grade8_Sem2').value);
  CGPSubject8_Sem2=credits8_Sem2*grade8_Sem2;

  credits9_Sem2= parseFloat(document.getElementById('credits9_Sem2').value);
  grade9_Sem2  = parseFloat(document.getElementById('grade9_Sem2').value);
  CGPSubject9_Sem2=credits9_Sem2*grade9_Sem2;

  Sem2TotalCGP = (CGPSubject1_Sem2 + CGPSubject2_Sem2 + CGPSubject3_Sem2 + CGPSubject4_Sem2 + CGPSubject5_Sem2 + CGPSubject6_Sem2 + CGPSubject9_Sem2 + CGPSubject8_Sem2 + CGPSubject9_Sem2);
  Sem2TotalCredits = credits1_Sem2 + credits2_Sem2 + credits3_Sem2 + credits4_Sem2 + credits5_Sem2 + credits6_Sem2 + credits7_Sem2 + credits8_Sem2 + credits9_Sem2;

  var Sem2GPA = Sem2TotalCGP/Sem2TotalCredits;
    //console.log("Zigma CiGi = "+(Sem2TotalCGP));
    //console.log("Zigma Ci = "+Sem2TotalCredits);
  $('#Semester2GPA').val(Sem2GPA); //--Assigning sem2 gpa to html ui
 }

  //..........fetch Sem 3 user input.................................
  if($('#semester3checkbox').is(":checked")){
    credits1_Sem3= parseFloat(document.getElementById('credits1_Sem3').value);
    grade1_Sem3  = parseFloat(document.getElementById('grade1_Sem3').value);
    CGPSubject1_Sem3=credits1_Sem3*grade1_Sem3; 
  
    credits2_Sem3= parseFloat(document.getElementById('credits2_Sem3').value);
    grade2_Sem3  = parseFloat(document.getElementById('grade2_Sem3').value);
    CGPSubject2_Sem3=credits2_Sem3*grade2_Sem3; 
  
    credits3_Sem3= parseFloat(document.getElementById('credits3_Sem3').value);
    grade3_Sem3  = parseFloat(document.getElementById('grade3_Sem3').value);
    CGPSubject3_Sem3=credits3_Sem3*grade3_Sem3; 
  
    credits4_Sem3= parseFloat(document.getElementById('credits4_Sem3').value);
    grade4_Sem3  = parseFloat(document.getElementById('grade4_Sem3').value);
    CGPSubject4_Sem3=credits4_Sem3*grade4_Sem3;

    credits5_Sem3= parseFloat(document.getElementById('credits5_Sem3').value);
    grade5_Sem3  = parseFloat(document.getElementById('grade5_Sem3').value);
    CGPSubject5_Sem3=credits5_Sem3*grade5_Sem3;

    credits6_Sem3= parseFloat(document.getElementById('credits6_Sem3').value);
    grade6_Sem3  = parseFloat(document.getElementById('grade6_Sem3').value);
    CGPSubject6_Sem3=credits6_Sem3*grade6_Sem3;

    credits7_Sem3= parseFloat(document.getElementById('credits7_Sem3').value);
    grade7_Sem3  = parseFloat(document.getElementById('grade7_Sem3').value);
    CGPSubject7_Sem3=credits7_Sem3*grade7_Sem3;

    credits8_Sem3= parseFloat(document.getElementById('credits8_Sem3').value);
    grade8_Sem3  = parseFloat(document.getElementById('grade8_Sem3').value);
    CGPSubject8_Sem3=credits8_Sem3*grade8_Sem3;

    credits9_Sem3= parseFloat(document.getElementById('credits9_Sem3').value);
    grade9_Sem3  = parseFloat(document.getElementById('grade9_Sem3').value);
    CGPSubject9_Sem3=credits9_Sem3*grade9_Sem3;
  
    Sem3TotalCGP = (CGPSubject1_Sem3 + CGPSubject2_Sem3 + CGPSubject3_Sem3 + CGPSubject4_Sem3 + CGPSubject5_Sem3 + CGPSubject6_Sem3 + CGPSubject7_Sem3 + CGPSubject8_Sem3 + CGPSubject9_Sem3);
    Sem3TotalCredits = credits1_Sem3 + credits2_Sem3 + credits3_Sem3 + credits4_Sem3 + credits5_Sem3 + credits6_Sem3 + credits7_Sem3 + credits8_Sem3 + credits9_Sem3;
  
    var Sem3GPA = Sem3TotalCGP/Sem3TotalCredits;
      //console.log("Zigma CiGi = "+(Sem3TotalCGP));
      //console.log("Zigma Ci = "+Sem3TotalCredits);
    $('#Semester3GPA').val(Sem3GPA); //--Assigning Sem3 gpa to html ui
   }

     //..........fetch Sem 4 user input.................................
  if($('#semester4checkbox').is(":checked")){
    credits1_Sem4= parseFloat(document.getElementById('credits1_Sem4').value);
    grade1_Sem4  = parseFloat(document.getElementById('grade1_Sem4').value);
    CGPSubject1_Sem4=credits1_Sem4*grade1_Sem4; 
  
    credits2_Sem4= parseFloat(document.getElementById('credits2_Sem4').value);
    grade2_Sem4  = parseFloat(document.getElementById('grade2_Sem4').value);
    CGPSubject2_Sem4=credits2_Sem4*grade2_Sem4; 
  
    credits3_Sem4= parseFloat(document.getElementById('credits3_Sem4').value);
    grade3_Sem4  = parseFloat(document.getElementById('grade3_Sem4').value);
    CGPSubject3_Sem4=credits3_Sem4*grade3_Sem4; 
  
    credits4_Sem4= parseFloat(document.getElementById('credits4_Sem4').value);
    grade4_Sem4  = parseFloat(document.getElementById('grade4_Sem4').value);
    CGPSubject4_Sem4=credits4_Sem4*grade4_Sem4;

    credits5_Sem4= parseFloat(document.getElementById('credits5_Sem4').value);
    grade5_Sem4  = parseFloat(document.getElementById('grade5_Sem4').value);
    CGPSubject5_Sem4=credits5_Sem4*grade5_Sem4;

    credits6_Sem4= parseFloat(document.getElementById('credits6_Sem4').value);
    grade6_Sem4  = parseFloat(document.getElementById('grade6_Sem4').value);
    CGPSubject6_Sem4=credits6_Sem4*grade6_Sem4;

    credits7_Sem4= parseFloat(document.getElementById('credits7_Sem4').value);
    grade7_Sem4  = parseFloat(document.getElementById('grade7_Sem4').value);
    CGPSubject7_Sem4=credits7_Sem4*grade7_Sem4;

    credits8_Sem4= parseFloat(document.getElementById('credits8_Sem4').value);
    grade8_Sem4  = parseFloat(document.getElementById('grade8_Sem4').value);
    CGPSubject8_Sem4=credits8_Sem4*grade8_Sem4;

    credits9_Sem4= parseFloat(document.getElementById('credits9_Sem4').value);
    grade9_Sem4  = parseFloat(document.getElementById('grade9_Sem4').value);
    CGPSubject9_Sem4=credits9_Sem4*grade9_Sem4;
  
    Sem4TotalCGP = (CGPSubject1_Sem4 + CGPSubject2_Sem4 + CGPSubject3_Sem4 + CGPSubject4_Sem4 + CGPSubject5_Sem4 + CGPSubject6_Sem4 + CGPSubject7_Sem4 + CGPSubject8_Sem4 + CGPSubject9_Sem4);
    Sem4TotalCredits = credits1_Sem4 + credits2_Sem4 + credits3_Sem4 + credits4_Sem4 + credits5_Sem4 + credits6_Sem4 + credits7_Sem4 + credits8_Sem4 + credits9_Sem4;
  
    var Sem4GPA = Sem4TotalCGP/Sem4TotalCredits;
      //console.log("Zigma CiGi = "+(Sem4TotalCGP));
      //console.log("Zigma Ci = "+Sem4TotalCredits);
    $('#Semester4GPA').val(Sem4GPA); //--Assigning Sem4 gpa to html ui
   }

        //..........fetch Sem 5 user input.................................
  if($('#semester5checkbox').is(":checked")){
    credits1_Sem5= parseFloat(document.getElementById('credits1_Sem5').value);
    grade1_Sem5  = parseFloat(document.getElementById('grade1_Sem5').value);
    CGPSubject1_Sem5=credits1_Sem5*grade1_Sem5; 
  
    credits2_Sem5= parseFloat(document.getElementById('credits2_Sem5').value);
    grade2_Sem5  = parseFloat(document.getElementById('grade2_Sem5').value);
    CGPSubject2_Sem5=credits2_Sem5*grade2_Sem5; 
  
    credits3_Sem5= parseFloat(document.getElementById('credits3_Sem5').value);
    grade3_Sem5  = parseFloat(document.getElementById('grade3_Sem5').value);
    CGPSubject3_Sem5=credits3_Sem5*grade3_Sem5; 
  
    credits4_Sem5= parseFloat(document.getElementById('credits4_Sem5').value);
    grade4_Sem5  = parseFloat(document.getElementById('grade4_Sem5').value);
    CGPSubject4_Sem5=credits4_Sem5*grade4_Sem5;

    credits5_Sem5= parseFloat(document.getElementById('credits5_Sem5').value);
    grade5_Sem5  = parseFloat(document.getElementById('grade5_Sem5').value);
    CGPSubject5_Sem5=credits5_Sem5*grade5_Sem5;

    credits6_Sem5= parseFloat(document.getElementById('credits6_Sem5').value);
    grade6_Sem5  = parseFloat(document.getElementById('grade6_Sem5').value);
    CGPSubject6_Sem5=credits6_Sem5*grade6_Sem5;

    credits7_Sem5= parseFloat(document.getElementById('credits7_Sem5').value);
    grade7_Sem5  = parseFloat(document.getElementById('grade7_Sem5').value);
    CGPSubject7_Sem5=credits7_Sem5*grade7_Sem5;

    credits8_Sem5= parseFloat(document.getElementById('credits8_Sem5').value);
    grade8_Sem5  = parseFloat(document.getElementById('grade8_Sem5').value);
    CGPSubject8_Sem5=credits8_Sem5*grade8_Sem5;

    credits9_Sem5= parseFloat(document.getElementById('credits9_Sem5').value);
    grade9_Sem5  = parseFloat(document.getElementById('grade9_Sem5').value);
    CGPSubject9_Sem5=credits9_Sem5*grade9_Sem5;
  
    Sem5TotalCGP = (CGPSubject1_Sem5 + CGPSubject2_Sem5 + CGPSubject3_Sem5 + CGPSubject4_Sem5 + CGPSubject5_Sem5 + CGPSubject6_Sem5 + CGPSubject7_Sem5 + CGPSubject8_Sem5 + CGPSubject9_Sem5);
    Sem5TotalCredits = credits1_Sem5 + credits2_Sem5 + credits3_Sem5 + credits4_Sem5 + credits5_Sem5 + credits6_Sem5 + credits7_Sem5 + credits8_Sem5 + credits9_Sem5;

  
    var Sem5GPA = Sem5TotalCGP/Sem5TotalCredits;
      //console.log("Zigma CiGi = "+(Sem5TotalCGP));
      //console.log("Zigma Ci = "+Sem5TotalCredits);
    $('#Semester5GPA').val(Sem5GPA); //--Assigning Sem5 gpa to html ui
   }

        //..........fetch Sem 6 user input.................................
  if($('#semester6checkbox').is(":checked")){
    credits1_Sem6= parseFloat(document.getElementById('credits1_Sem6').value);
    grade1_Sem6  = parseFloat(document.getElementById('grade1_Sem6').value);
    CGPSubject1_Sem6=credits1_Sem6*grade1_Sem6; 
  
    credits2_Sem6= parseFloat(document.getElementById('credits2_Sem6').value);
    grade2_Sem6  = parseFloat(document.getElementById('grade2_Sem6').value);
    CGPSubject2_Sem6=credits2_Sem6*grade2_Sem6; 
  
    credits3_Sem6= parseFloat(document.getElementById('credits3_Sem6').value);
    grade3_Sem6  = parseFloat(document.getElementById('grade3_Sem6').value);
    CGPSubject3_Sem6=credits3_Sem6*grade3_Sem6; 
  
    credits4_Sem6= parseFloat(document.getElementById('credits4_Sem6').value);
    grade4_Sem6  = parseFloat(document.getElementById('grade4_Sem6').value);
    CGPSubject4_Sem6=credits4_Sem6*grade4_Sem6;

    credits5_Sem6= parseFloat(document.getElementById('credits5_Sem6').value);
    grade5_Sem6  = parseFloat(document.getElementById('grade5_Sem6').value);
    CGPSubject5_Sem6=credits5_Sem6*grade5_Sem6;

    credits6_Sem6= parseFloat(document.getElementById('credits6_Sem6').value);
    grade6_Sem6  = parseFloat(document.getElementById('grade6_Sem6').value);
    CGPSubject6_Sem6=credits6_Sem6*grade6_Sem6;

    credits7_Sem6= parseFloat(document.getElementById('credits7_Sem6').value);
    grade7_Sem6  = parseFloat(document.getElementById('grade7_Sem6').value);
    CGPSubject7_Sem6=credits7_Sem6*grade7_Sem6;

    credits8_Sem6= parseFloat(document.getElementById('credits8_Sem6').value);
    grade8_Sem6  = parseFloat(document.getElementById('grade8_Sem6').value);
    CGPSubject8_Sem6=credits8_Sem6*grade8_Sem6;

    credits9_Sem6= parseFloat(document.getElementById('credits9_Sem6').value);
    grade9_Sem6  = parseFloat(document.getElementById('grade9_Sem6').value);
    CGPSubject9_Sem6=credits9_Sem6*grade9_Sem6;
  
    Sem6TotalCGP = (CGPSubject1_Sem6 + CGPSubject2_Sem6 + CGPSubject3_Sem6 + CGPSubject4_Sem6 + CGPSubject5_Sem6 + CGPSubject6_Sem6 + CGPSubject7_Sem6 + CGPSubject8_Sem6 + CGPSubject9_Sem6);
    Sem6TotalCredits = credits1_Sem6 + credits2_Sem6 + credits3_Sem6 + credits4_Sem6 + credits5_Sem6 + credits6_Sem6 + credits7_Sem6 + credits8_Sem6 + credits9_Sem6;
  
    var Sem6GPA = Sem6TotalCGP/Sem6TotalCredits;
      //console.log("Zigma CiGi = "+(Sem6TotalCGP));
      //console.log("Zigma Ci = "+Sem6TotalCredits);
    $('#Semester6GPA').val(Sem6GPA); //--Assigning Sem6 gpa to html ui
   }

        //..........fetch Sem 7 user input.................................
  if($('#semester7checkbox').is(":checked")){
    credits1_Sem7= parseFloat(document.getElementById('credits1_Sem7').value);
    grade1_Sem7  = parseFloat(document.getElementById('grade1_Sem7').value);
    CGPSubject1_Sem7=credits1_Sem7*grade1_Sem7; 
  
    credits2_Sem7= parseFloat(document.getElementById('credits2_Sem7').value);
    grade2_Sem7  = parseFloat(document.getElementById('grade2_Sem7').value);
    CGPSubject2_Sem7=credits2_Sem7*grade2_Sem7; 
  
    credits3_Sem7= parseFloat(document.getElementById('credits3_Sem7').value);
    grade3_Sem7  = parseFloat(document.getElementById('grade3_Sem7').value);
    CGPSubject3_Sem7=credits3_Sem7*grade3_Sem7; 
  
    credits4_Sem7= parseFloat(document.getElementById('credits4_Sem7').value);
    grade4_Sem7  = parseFloat(document.getElementById('grade4_Sem7').value);
    CGPSubject4_Sem7=credits4_Sem7*grade4_Sem7;

    credits5_Sem7= parseFloat(document.getElementById('credits5_Sem7').value);
    grade5_Sem7  = parseFloat(document.getElementById('grade5_Sem7').value);
    CGPSubject5_Sem7=credits5_Sem7*grade5_Sem7;

    credits6_Sem7= parseFloat(document.getElementById('credits6_Sem7').value);
    grade6_Sem7  = parseFloat(document.getElementById('grade6_Sem7').value);
    CGPSubject6_Sem7=credits6_Sem7*grade6_Sem7;

    credits7_Sem7= parseFloat(document.getElementById('credits7_Sem7').value);
    grade7_Sem7  = parseFloat(document.getElementById('grade7_Sem7').value);
    CGPSubject7_Sem7=credits7_Sem7*grade7_Sem7;

    credits8_Sem7= parseFloat(document.getElementById('credits8_Sem7').value);
    grade8_Sem7  = parseFloat(document.getElementById('grade8_Sem7').value);
    CGPSubject8_Sem7=credits8_Sem7*grade8_Sem7;

    credits9_Sem7= parseFloat(document.getElementById('credits9_Sem7').value);
    grade9_Sem7  = parseFloat(document.getElementById('grade9_Sem7').value);
    CGPSubject9_Sem7=credits9_Sem7*grade9_Sem7;

    Sem7TotalCGP = (CGPSubject1_Sem7 + CGPSubject2_Sem7 + CGPSubject3_Sem7 + CGPSubject4_Sem7 + CGPSubject5_Sem7 + CGPSubject6_Sem7 + CGPSubject7_Sem7 + CGPSubject8_Sem7 + CGPSubject9_Sem7);
    Sem7TotalCredits = credits1_Sem7 + credits2_Sem7 + credits3_Sem7 + credits4_Sem7 + credits5_Sem7 + credits6_Sem7 + credits7_Sem7 + credits8_Sem7 + credits9_Sem7;


  
    var Sem7GPA = Sem7TotalCGP/Sem7TotalCredits;
      //console.log("Zigma CiGi = "+(Sem7TotalCGP));
      //console.log("Zigma Ci = "+Sem7TotalCredits);
    $('#Semester7GPA').val(Sem7GPA); //--Assigning Sem7 gpa to html ui
   }

        //..........fetch Sem 8 user input.................................
  if($('#semester8checkbox').is(":checked")){
    credits1_Sem8= parseFloat(document.getElementById('credits1_Sem8').value);
    grade1_Sem8  = parseFloat(document.getElementById('grade1_Sem8').value);
    CGPSubject1_Sem8=credits1_Sem8*grade1_Sem8; 
  
    credits2_Sem8= parseFloat(document.getElementById('credits2_Sem8').value);
    grade2_Sem8  = parseFloat(document.getElementById('grade2_Sem8').value);
    CGPSubject2_Sem8=credits2_Sem8*grade2_Sem8; 
  
    credits3_Sem8= parseFloat(document.getElementById('credits3_Sem8').value);
    grade3_Sem8  = parseFloat(document.getElementById('grade3_Sem8').value);
    CGPSubject3_Sem8=credits3_Sem8*grade3_Sem8; 
  
    credits4_Sem8= parseFloat(document.getElementById('credits4_Sem8').value);
    grade4_Sem8  = parseFloat(document.getElementById('grade4_Sem8').value);
    CGPSubject4_Sem8=credits4_Sem8*grade4_Sem8;

    credits5_Sem8= parseFloat(document.getElementById('credits5_Sem8').value);
    grade5_Sem8  = parseFloat(document.getElementById('grade5_Sem8').value);
    CGPSubject5_Sem8=credits5_Sem8*grade5_Sem8;

    credits6_Sem8= parseFloat(document.getElementById('credits6_Sem8').value);
    grade6_Sem8  = parseFloat(document.getElementById('grade6_Sem8').value);
    CGPSubject6_Sem8=credits6_Sem8*grade6_Sem8;

    credits7_Sem8= parseFloat(document.getElementById('credits7_Sem8').value);
    grade7_Sem8  = parseFloat(document.getElementById('grade7_Sem8').value);
    CGPSubject7_Sem8=credits7_Sem8*grade7_Sem8;

    credits8_Sem8= parseFloat(document.getElementById('credits8_Sem8').value);
    grade8_Sem8  = parseFloat(document.getElementById('grade8_Sem8').value);
    CGPSubject8_Sem8=credits8_Sem8*grade8_Sem8;

    credits9_Sem8= parseFloat(document.getElementById('credits9_Sem8').value);
    grade9_Sem8  = parseFloat(document.getElementById('grade9_Sem8').value);
    CGPSubject9_Sem8=credits9_Sem8*grade9_Sem8;

  
    Sem8TotalCGP = (CGPSubject1_Sem8 + CGPSubject2_Sem8 + CGPSubject3_Sem8 + CGPSubject4_Sem8 + CGPSubject5_Sem8 + CGPSubject6_Sem8 + CGPSubject7_Sem8 + CGPSubject8_Sem8 + CGPSubject9_Sem8);
    Sem8TotalCredits = credits1_Sem8 + credits2_Sem8 + credits3_Sem8 + credits4_Sem8 + credits5_Sem8 + credits6_Sem8 + credits7_Sem8 + credits8_Sem8 + credits9_Sem8;
  
    var Sem8GPA = Sem8TotalCGP/Sem8TotalCredits;
      //console.log("Zigma CiGi = "+(Sem8TotalCGP));
      //console.log("Zigma Ci = "+Sem8TotalCredits);
    $('#Semester8GPA').val(Sem8GPA); //--Assigning Sem8 gpa to html ui
   }


 totalCreditsOfAllSemsFunction();// call totalCreditsOfAllSemsFunction() <-this function calculates the total amount of credits

 cumulativeGPA =(Sem1TotalCGP + Sem2TotalCGP + Sem3TotalCGP + Sem4TotalCGP + Sem5TotalCGP + Sem6TotalCGP+ Sem7TotalCGP+ Sem8TotalCGP) /(Sem1TotalCredits+Sem2TotalCredits+Sem3TotalCredits+Sem4TotalCredits+Sem5TotalCredits+Sem6TotalCredits+Sem7TotalCredits+Sem8TotalCredits);
 $('#CumulativeGPA').val(cumulativeGPA); //--Assigning sem2 gpa to html ui
 }


 function totalCreditsOfAllSemsFunction(){// Calculate total credit of all semesters
  console.log("totalCreditsOfAllSemsFunction started");
  console.log(jsonData);
  $.each(jsonData, function (index, value) {

  var subjectCodeLastDigit = value['SubjectCode'].substr(value['SubjectCode'].length - 1);
  totalCreditsOfAllSems = totalCreditsOfAllSems + parseFloat(subjectCodeLastDigit);
         
   }); 
   console.log("totalCreditsOfAllSems = "+ totalCreditsOfAllSems);
 }


function clearForm(){
  document.getElementById("CompleteForm").reset();
 }

  //enable grade dropdown menues per No. of Credits textfields that are filled
  //also used to enable repeat check boxes. same condition.

  //grade 1
  function genable1() {
    if (document.getElementById('credits1').value != '') {
      document.getElementById('grade1').disabled = false;
    } else {
      document.getElementById('grade1').selectedIndex = 0;
      document.getElementById('grade1').disabled = true;
    }
  }

  //grade 2
  function genable2() {
    if (document.getElementById('credits2').value != '') {
      document.getElementById('grade2').disabled = false;
    } else {
      document.getElementById('grade2').selectedIndex = 0;
      document.getElementById('grade2').disabled = true;
    }
  }

  //grade 3
  function genable3() {
    if (document.getElementById('credits3').value != '') {
      document.getElementById('grade3').disabled = false;
    } else {
      document.getElementById('grade3').selectedIndex = 0;
      document.getElementById('grade3').disabled = true;
    }
  }

  //grade 4
  function genable4() {
    if (document.getElementById('credits4').value != '') {
      document.getElementById('grade4').disabled = false;
    } else {
      document.getElementById('grade4').selectedIndex = 0;
      document.getElementById('grade4').disabled = true;
    }
  }

  //grade 5
  function genable5() {
    if (document.getElementById('credits5').value != '') {
      document.getElementById('grade5').disabled = false;
    } else {
      document.getElementById('grade5').selectedIndex = 0;
      document.getElementById('grade5').disabled = true;
    }
  }

  //grade 6
  function genable6() {
    if (document.getElementById('credits6').value != '') {
      document.getElementById('grade6').disabled = false;
    } else {
      document.getElementById('grade6').selectedIndex = 0;
      document.getElementById('grade6').disabled = true;
    }
  }

  //grade 7
  function genable7() {
    if (document.getElementById('credits7').value != '') {
      document.getElementById('grade7').disabled = false;
    } else {
      document.getElementById('grade7').selectedIndex = 0;
      document.getElementById('grade7').disabled = true;
    }
  }

  //grade 8
  function genable8() {
    if (document.getElementById('credits8').value != '') {
      document.getElementById('grade8').disabled = false;
    } else {
      document.getElementById('grade8').selectedIndex = 0;
      document.getElementById('grade8').disabled = true;
    }
  }

   //grade 9
   function genable9() {
    if (document.getElementById('credits9').value != '') {
      document.getElementById('grade9').disabled = false;
    } else {
      document.getElementById('grade9').selectedIndex = 0;
      document.getElementById('grade9').disabled = true;
    }
  }
     //grade 10
     function genable10() {
      if (document.getElementById('credits10').value != '') {
        document.getElementById('grade10').disabled = false;
      } else {
        document.getElementById('grade10').selectedIndex = 0;
        document.getElementById('grade10').disabled = true;
      }
    }
       //grade 11
   function genable11() {
    if (document.getElementById('credits11').value != '') {
      document.getElementById('grade11').disabled = false;
    } else {
      document.getElementById('grade11').selectedIndex = 0;
      document.getElementById('grade11').disabled = true;
    }
  }
     //grade 12
     function genable12() {
      if (document.getElementById('credits12').value != '') {
        document.getElementById('grade12').disabled = false;
      } else {
        document.getElementById('grade12').selectedIndex = 0;
        document.getElementById('grade12').disabled = true;
      }
    }
  