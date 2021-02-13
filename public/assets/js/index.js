$("#submit").click (function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Clicked")
    // var newBurger = {
    //     name: $("#formTextArea").val().trim(),
    // };

    // // Send the POST request.
    // $.ajax("/api/burgers", {
    //     type: "POST",
    //     data: newBurger
    // }).then(
    //     function () {
    //         console.log("created new burger");
    //         // Reload the page to get the updated list
    //         location.reload();
    //     }
    // );
});