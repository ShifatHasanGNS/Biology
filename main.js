function create_table() {

    // var myInit = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     mode: 'cors',
    //     cache: 'default'
    // };

    // let myRequest = new Request("./data.json", muInit);

    let instance = document.getElementById("tableBody");
    instance.innerHTML = ""
    
    fetch("./data.json").then(function(data){
        return data.json();
    }).then(function(data){
        console.log(data);
        // data.forEach(element => {
        //     instance.innerHTML += "<tr>"
        //         + "<td>" + element.No + "</td>"
        //         + "<td>" + element.Date + "</td>"
        //         + "<td>" + element.Chapter + "</td>"
        //         + "<td>" + element.Title + "</td>"
        //         + "<td> <a href={" + element.Class + "}>Class</a> </td>"
        //         + "<td> <a href={" + element.Question + "}>Question</a> </td>"
        //         + "<td> <a href={" + element.Suggestion + "}>Suggestion</a> </td>"
        //         + "</tr>"
        // });
    });
}