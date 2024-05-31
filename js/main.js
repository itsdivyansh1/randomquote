const btn = document.getElementById("btn");
const show_quote = document.getElementById("show-quote");
const show_author = document.getElementById("show-author");
btn.addEventListener("click", () => {
    $.ajax({
        method: "GET",
        url: `https://api.api-ninjas.com/v1/quotes?category`,
        headers: { "X-Api-Key":  API_KEY},
        contentType: "application/json",
        success: function (result) {
            // let res = JSON.stringify(result);
            let quote = result[0].quote;
            let author = result[0].author;
            show_author.innerText = author;
            show_quote.innerText = quote;
        },
        error: function ajaxError(jqXHR) {
            alert("No quote found for the related category.");
            console.error("Error: ", jqXHR.responseText);
        },
    });
});
