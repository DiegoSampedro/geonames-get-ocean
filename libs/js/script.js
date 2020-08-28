	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getOcean.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatitude').val(),
				lng: $('#selLongitude').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#Ocean').html(result['data']['ocean']['name']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		}); 
	

	});