function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }

    function json (){
        $.getJSON(`info.json`, function (data) {
        console.log(data);
    })
}   
