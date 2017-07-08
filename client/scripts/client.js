$(document).ready(function(){
	$('#submit').on('click', function(){
		collectDisplayFormInfo()
 	});
});

	function collectDisplayFormInfo(){
		firstName = $('#firstName').val();	
    	var lastName = $('#lastName').val();
    	var email = $('#email').val();
    	var company = $('#company').val();
    	var title = $('#title').val();
    	var country = $('#country').val();
    	var state = $('#state').val();
    	var additionalComments = $('#additionalComments').val();

    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'First Name: ' + '</b>' + firstName + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Last Name: ' + '</b>' + lastName + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Email: ' + '</b>' + email + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Company: ' + '</b>' + company + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Title: ' + '</b>' + title + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Country: ' + '</b>' + country + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'State: ' + '</b>' + state + '</p>');
    	$('#outputContainer').append('<p class="displayedFormData">' + '<b>' + 'Additional Comments: ' + '</b>' + additionalComments + '</p>')	
	}
	


    