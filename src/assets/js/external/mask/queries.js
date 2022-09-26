if (jQuery().mask) {
	$(function() {

		$('.mask-pass').mask('C', {
			translation: { 'C': {
				pattern: /[\D\g,""]/, recursive: true
			}},
			onKeyPress: function(value, event) {
				event.currentTarget.value = value.replace(/[ÀÁÂÃÄÅÆàáâãäåæ]/g,'a').replace(/[ÈÉÊËèéêë]/g,'e').replace(/[ÌÍÎÏìíîï]/g,'i').replace(/[ÒÓÔÕÖØøòóôõö]/g,'o').replace(/[ÙÚÛÜÝùúûüý]/g,'u').replace(/[Çç]/g,'c').replace(/[ÐÑðñ]/g,'n').replace(/[^a-z0-9\s]/gi, '');
			}
		});

		$('.mask-non').mask('C', {
			translation: {'C': {
				pattern: /[]/,
				recursive: true
			}}
		});

		$('.mask-str').mask('C', {
			translation: {'C': {
				pattern: /[\D\g,'']/,
				recursive: true
			}}
		});

		$('.mask-num').mask('N', {
			translation: {'N': {
				pattern: /[0-9 ]/,
				recursive: true
			}}
		});

		$('.mask-str-lower').mask('C', {
			translation: {'C': {
				pattern: /[\D\g,'']/,
				recursive: true
			}},
			onKeyPress: function(value, event) {
				event.currentTarget.value = value.toLowerCase()
			}
		});

		$('.mask-str-upper').mask('C', {
			translation: {'C': {
				pattern: /[\D\g,'']/,
				recursive: true
			}},
			onKeyPress: function(value, event) {
				event.currentTarget.value = value.toUpperCase()
			}
		});

		$('.mask-str-num-lower').mask('C', {
			translation: {'C': {
				pattern: /[\D\d\g,'']/,
				recursive: true
			}},
			onKeyPress: function(value, event) {
				event.currentTarget.value = value.toLowerCase()
			}
		});

		$('.mask-str-num-upper').mask('C', {
			translation: {'C': {
				pattern: /[\D\d\g,'']/,
				recursive: true
			}},
			onKeyPress: function(value, event) {
				event.currentTarget.value = value.toUpperCase()
			}
		});

		$('.mask-date').mask('00/00/0000', {

		});

		$('.mask-time').mask('00:00:00', {

		});

		$('.mask-date-time').mask('00/00/0000 00:00:00', {

		});

		$('.mask-cep').mask('00000-000', {

		});

		$('.mask-cnpj').mask('00.000.000/0000-00', {
			reverse: true
		});

		$('.mask-cpf').mask('000.000.000-00', {
			reverse: true
		});

		$('.mask-money').mask('#.##0,00', {
			reverse: true
		});

		$('.mask-percent').mask('##0,00%', {
			reverse: true
		});

		$('.mask-ip-address').mask('099.099.099.099', {

		});

		$('.mask-mixed').mask('AAA 000-S0S', {

		});

		$('.mask-phone-us').mask('(000) 000-0000', {
			
		});

		$('.mask-phone-br').mask('(00) 0000-00009', {
			
		}).focusout(function(event) {  
            var target;
			var phone;
			var element;

            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();

            if (phone.length > 10) {
                element.mask('(00) 00000-0009');
            }
			else {  
                element.mask('(00) 0000-00009');
            }  
        });

	});
}