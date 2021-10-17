


function productsAdd() {
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody");
    }

    $("#productTable tbody").append("<tr>" +
        "<td>My JavaScript Project</td>" +
        "<td>10/13/2021</td>" +
        "<td>wwww.javascriptprojs.com</td>" +
        "</td>");

        $("#productTable tbody").append("<tr>" +
        "<td>My Second JavaScript Project</td>" +
        "<td>10/19/2021</td>" +
        "<td>wwww.javascriptprojs.com</td>" +
        "</td>");
}

function productUpdate() {
    if($("#productName").val() != null && $("#productName").val() != '') {
        productsAddToTable();
        formClear();
        $("#productName").focus();
    }
}

function productsAddToTable() {
    if($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    $("#productTable tbody").append("<tr>" +
        "<td>" + $("#productName").val() + "</td>" +
        "<td>" + $("#introDate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +    
    "</tr>");
}

function formClear() {
    $("#productName").val("");
    $("#introDate").val("");
    $("#url").val("");
}


