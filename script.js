function agecalc(){
    var birthyear= prompt("What year were you born?? ");
    var res=(2020-birthyear)*365;
    var h1=document.createElement('h1');
     var textAnswer=document.createTextNode('You are '+ res + ' days old');
  //var textAnswer= 'You are'+ res +'days old';
    h1.setAttribute('id','hid');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(textAnswer);


}














function reset()
{
    document.getElementById('hid').remove();
}
function addcalc(){
    var abc=new Date();
    var DOB=prompt("Enter your DOB in DD/MM/YYYY");
    var cur_year=abc.getFullYear();
    var cur_month=abc.getMonth()+1;
    var cur_date=abc.getDate();
    var year=DOB.split("/")[2];
    var date=DOB.split('/')[0];
    var month=DOB.split("/")[1];
    console.log(year+' '+month+' '+date);


    if (date>cur_date) 
    {
        date=date+30;
        month=month-1;
    }

    if (month>cur_month)
    {
        month=month+12;
        year=year-1;
    }

    var now_date=cur_date-date;
    var now_month=cur_month-month;
    var now_year=cur_year-year;


    var h1=document.createElement("h1");
    var textAnswer=document.createTextNode("you are "+now_year+" years, "+now_month+"months and "+now_date+"days");
    h1.setAttribute('id',"hid");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);

}
