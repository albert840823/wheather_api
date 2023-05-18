$(function(){
    $.ajax({
        url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-941C04E2-AE96-4130-88B7-11E799BB523C&elementName=T",
        type:"GET",
        dataTYpe:"json",
        success:function(res){
            console.log(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value)
            
            $('#city_name').html(res.records.locations[0].location[0].locationName)
            $('#district').html(res.records.locations[0].locationsName)
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");

            
            for(var i=0 ; i<5 ;i++){

            }




        },
        error:function(error){console.error(error)}
    })
});




//純js寫法

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-941C04E2-AE96-4130-88B7-11E799BB523C&elementName=T")
 .then(t1 =>{ return t1.json()})
 .then(data =>{
   let block = document.getElementsByClassName("block");
   const oc = [] ;
   let dayin = [] ;

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
// 


// let now = week[dayi];
// console.log(data.records.locations[0].location[0].weatherElement[0].time);

let getday ; 

    for(let n=0 ; n<13 ; n+=2 ){
        oc.push(data.records.locations[0].location[0].weatherElement[0].time[n].elementValue[0].value); 
        getday = data.records.locations[0].location[0].weatherElement[0].time[n].startTime ;
        dayin.push(new Date(getday).getDay());
    }
    oc.splice(0,1);
    oc.splice(oc.length-1,1);
    // console.log(oc);
    
    // for(let n =0 ; n<block.length ; n++ ){
    //     for(let a=0 ;a<oc.length; a++){
    //         if(a == n){
    //             block[n].querySelector("strong").innerText = oc[a]
    //         }
      
    //     }
    // }
    let j = 0 ;
    let nd ;
console.log(data.records.locations[0].location[0].weatherElement[0].time )
    for(let n of block){
 
        n.querySelector("strong").innerText = oc[j];
        nd = dayin[j]
        n.querySelector(".text-muted").innerText = week[dayin[j+1]]
        
        // let d = data.records.locations[0].location[0].weatherElement[0].time[0].startTime;
        j ++ ;
    }








    })
 .catch(error =>console.error(error));

