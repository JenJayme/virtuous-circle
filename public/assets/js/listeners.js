//Event handlers for button actions

// Open modal when add button is clicked
$('#openModalBtn').on('click', function () {
    "use strict";
    event.preventDefault();
    modal();
});

$(document).ready(function () {


    // Add new bundle / on submit send POST request ajax query
    $('#submitNewBtn').on('click', function (event) {
        // debugger;
        'use strict';
        event.preventDefault();
        console.log("SubmitNew button clicked.");

        var newBundle = {
            bundle_name: $('#inputBox').val().trim(),
            quantity: $('#quantityInputBox').val().trim(),
            claimed: 0,
        };

        console.log("New bundle created", newBundle);

        //Send POST request.
        $.ajax('/api/foodcircle/', {
            type: 'POST',
            data: newBundle
        }).then(
            function () {
                console.log('Created new bundle', newBundle);
                //Reload page
                location.reload();
            });
    })


    //Grab the claim button and change the claimed status on click
    $(function changeClaimStatus() {
        $('.claimItem').on('click', function (event) {
            console.log("Claim button clicked");
            var id = $(this).data("id");
            var newClaimStatus = $(this).data("claimed");
            var set = { claimed: newClaimStatus };
            console.log('set =', set);

            // var claimState = {
            //     claimed: newClaimStatus
            // };
            // Send PUT request
            $.ajax('/api/foodcircle/' + id, {
                type: 'PUT',
                data: set
            }).then(
                function () {
                    console.log('changed claim status to' + newClaimStatus);
                    // Reload the page to get an updated list
                    location.reload();
                }
            );
        });
    });

    //Grab the delete button and capture the id of the item to delete
    $('.delete').on('click', function (event) {
        var id = $(this).data('id');

        //Send DELETE request
        $.ajax('/api/foodcircle/' + id, {
            type: 'DELETE',
        }).then(
            function () {
                console.log('Deleted bundle ' + id);
                //Reload page
                location.reload();
            }
        );
    });

    $('.modal').modal();
});
