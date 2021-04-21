function create_table() {
    fetch("./data.json").then(function(data){
        return data.json();
    }).then(function(data){
        data.forEach(element => {
            $('#tableBody').append(
                "<tr>"
                + "<td>" + element.No + "</td>" +
                + "<td>" + element.Date + "</td>" +
                + "<td>" + element.Chapter + "</td>" +
                + "<td>" + element.Title + "</td>" +
                + "<td> <a href={" + element.Class + "}>Class</a> </td>" +
                + "<td> <a href={" + element.Question + "}>Question</a> </td>" +
                + "<td> <a href={" + element.Suggestion + "}>Suggestion</a> </td>" +
                "</tr>"
            );
        });
    });
}