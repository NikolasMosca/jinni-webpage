/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';

  }
  else if( userAgent.match( /Android/i ) )
  {

    return 'Android';
  }
  else
  {
    return 'unknown';
  }
}

function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop == to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}

function checkUrlValue(id, http) {
	if(window.innerWidth >= 1024 && document.getElementById(id).value.length === 0) {
		document.getElementById(http).style.display = 'block';
	} else {
		document.getElementById(http).style.display = 'none';
	}
}

function copyTextToClipboardMain() {
  var text = 'http://' + document.getElementById('share_jinni').innerHTML;
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

function copyTextToClipboardTop() {
  var text = 'http://' + document.getElementById('top_share_jinni').innerHTML;
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

function fadeIn(id, opacity) {
	var menu = document.getElementById(id);
	menu.style.left = '0px';
	setTimeout(function() {document.getElementById(id).style.opacity = opacity;} , 100);
	document.body.style.overflowY = 'hidden';
}

function fadeOut(id) {
	var menu = document.getElementById(id);
	menu.style.opacity = 0;
	setTimeout(function() {document.getElementById(id).style.left = '100%';} , 1000);
	document.body.style.overflowY = 'scroll';
}

function resetFields() {
	document.getElementById('JinniUpName').value = '';
	document.getElementById('JinniUpEmail').value = '';
	document.getElementById('JinniUpPassword').value = '';
	document.getElementById('JinniEmail').value = '';
	document.getElementById('JinniPassword').value = '';
}

function resetErrors() {
	document.getElementById('JinniError').style.display = 'none';
	document.getElementById('JinniUpError').style.display = 'none';
}

function ShowShare() {
	//Check mobile
	var os = getMobileOperatingSystem();
	if(os === 'unknown') {
		//Desktop
		document.getElementById('main_share').style.visibility = 'visible';
		document.getElementById('top_share').style.visibility = 'visible';
	} else {
		//Android / iOs
		document.getElementById('main_share').style.visibility = 'visible';
		document.getElementById('top_share').style.visibility = 'visible';

		//Main Button
		var button = document.getElementById('share_copy');
			button.style.width = '150px';
			button.style.fontSize = '12px';
		var link = document.createElement('a');
			link.style.position = "absolute";
			link.style.top = "0px";
			link.style.left = "0px";
			link.style.width = "100%";
			link.style.height = "100%";
			link.style.textDecoration = 'none';
			link.style.color = 'white';
			link.href = 'http://jin.ni/fSDhwu';
		link.onclick = function() {
			return false;
		}
		button.innerHTML = 'Long tap and copy';
		button.appendChild(link);

		var button = document.getElementById('top_share_copy');
			button.style.width = '150px';
			button.style.fontSize = '12px';
		var link = document.createElement('a');
			link.style.position = "absolute";
			link.style.top = "0px";
			link.style.left = "0px";
			link.style.width = "100%";
			link.style.height = "100%";
			link.style.textDecoration = 'none';
			link.style.color = 'white';
			link.href = 'http://jin.ni/fSDhwu';
		link.onclick = function() {
			return false;
		}
		button.innerHTML = 'Long tap and copy';
		button.appendChild(link);

	}
}

document.addEventListener('DOMContentLoaded', function() {

/*
==============================================================================
============================ INPUT TYPE TEXT =================================
==============================================================================
*/
  var os = getMobileOperatingSystem();
	if(os === 'unknown') {
		//Desktop
		document.getElementById('main_url_shortener').placeholder='Paste a link to start';
    document.getElementById('top_url_shortener').placeholder='Paste a link to start';
	} else {
    //Mobile
    document.getElementById('main_url_shortener').placeholder='Tap & Paste a link to start';
    document.getElementById('top_url_shortener').placeholder='Tap & Paste a link to start';

    //Listener for mobile view
    document.getElementById('main_url_shortener').addEventListener('click', function() {
      var background = document.createElement('div');
      background.style.background = 'white';
      background.style.position = 'fixed';
      background.style.zIndex = 300;
      background.style.width = '100%';
      background.style.height = '100%';
      background.style.left = '0px';
      background.style.top = '0px';
      background.id = 'shortener_box';

      var input = document.createElement('input');
      input.type = 'text';
      input.id = 'url_box';
      input.style.background = 'white';
      input.style.position = 'relative';
      input.style.float = 'left';
      input.style.width = '77%';
      input.style.border = 'none';
      input.style.marginRight = '50px';
      input.style.height = '65px';
      input.style.fontSize = '28px';
      input.style.fontFamily = 'RooneySansLight';
      input.style.color = '#4a4a4a';
      input.autofocus = true;
      input.oninput = function() {

        var result = document.createElement('div');
        result.style.position = 'absolute';
        result.style.width = '100%';
        result.style.height = '100%';
        result.style.top = '65px';
        result.style.left = '0px';
        result.style.background = 'black';

        var short = document.createElement('a');
        short.style.fontSize = '28px';
        short.style.fontFamily = 'RooneySansLight';
        short.style.color = '#ffffff';
        short.style.position = 'absolute';
        short.style.top = '90px';
        short.style.left = '0px';
        short.style.width = '100%';
        short.style.height = '60px';
        short.style.textAlign = 'center';
        short.style.textDecoration = 'none';
        short.id = 'mobile_shortener';
  			short.href = 'http://jin.ni/fSDhwu';
    		short.onclick = function() {
    			return false;
    		}
        short.appendChild( document.createTextNode('jin.ni/fSDhwu') );

        var message = document.createElement('div');
        message.style.fontFamily = 'proxima-nova';
        message.style.fontWeight = 'bold';
        message.style.fontSize = '32px';
        message.style.color = '#ffffff';
        message.style.width = '100%';
        message.style.left = '0px';
        message.style.top = '150px';
        message.style.textAlign = 'center';
        message.style.position = 'absolute';
        message.appendChild( document.createTextNode('Tap & Paste a link to start') );


        document.getElementById('shortener_box').appendChild(result);
        document.getElementById('shortener_box').appendChild(short);
        document.getElementById('shortener_box').appendChild(message);

      }

      var close = document.createElement('img');
      close.style.position = 'absolute';
      close.style.right = '12px';
      close.style.top = '12px';
      close.src = 'img/menu/dark_close.png';
      close.style.width = '40px';
      close.style.height = '40px';
      close.onclick = function() {
        var target = document.getElementById('shortener_box');
        document.body.removeChild(target);
        document.body.style.overflowY = 'scroll';
      }

      background.appendChild(input);
      background.appendChild(close);



      document.body.appendChild(background);
      document.body.style.overflowY = 'hidden';
    });
  }

/*
==============================================================================
=============================== SCROLLING ====================================
==============================================================================
*/
	window.onscroll = function() {
		var rect = document.getElementById('main_url_shortener').getBoundingClientRect();
		var my_scroll = document.body.scrollTop;
		if(rect.top > 0) {

			if(!document.getElementById('jinni_toolbar').classList.contains('move_up')) {
				document.getElementById('jinni_toolbar').classList.add('move_up');
			}
			if(document.getElementById('jinni_toolbar').classList.contains('move_down')) {
				document.getElementById('jinni_toolbar').classList.remove('move_down');
			}

		} else {

			if(!document.getElementById('jinni_toolbar').classList.contains('move_down')) {
				document.getElementById('jinni_toolbar').classList.add('move_down');
			}
			if(document.getElementById('jinni_toolbar').classList.contains('move_up')) {
				document.getElementById('jinni_toolbar').classList.remove('move_up');
			}

		}
	}

/*
==============================================================================
================================= RESIZE =====================================
==============================================================================
*/
	window.addEventListener("resize", function() {
		if(window.innerWidth < 1024) {
			document.getElementById('main_http').style.display = '';
			document.getElementById('top_http').style.display = '';
		}
	});
/*
==============================================================================
================================== MENU ======================================
==============================================================================
*/
	document.getElementById('jinni_menu').addEventListener('click' , function() {
		fadeIn('jinni_menu_box', 1);
	});
	document.getElementById('jinni_menu_top').addEventListener('click' , function() {
		fadeIn('jinni_menu_box', 1);
	});

	document.getElementById('jinni_menu_close').addEventListener('click' , function() {
		fadeOut('jinni_menu_box');
	});

/*
==============================================================================
=============================== AUTOSCROLL ===================================
==============================================================================
*/
	document.getElementById('button_arrow_down').addEventListener('click' , function() {
		var rect = document.getElementById('target_arrow_down').getBoundingClientRect();
		var my_scroll = document.body.scrollTop;
		if(my_scroll < rect.top) {
			//document.body.scrollTop = document.body.scrollTop + rect.top-30;
			var to = document.body.scrollTop + rect.top-30;
			scrollTo(document.body, to, 600);
		}
	});

/*
==============================================================================
================================== HTTP ======================================
==============================================================================
*/
	document.getElementById('main_url_shortener').addEventListener('click' , function() {
		if(window.innerWidth >= 1024) {
			document.getElementById('main_http').style.display = 'none';
		}
	});

	document.getElementById('main_url_shortener').addEventListener('blur' , function() {
		if(window.innerWidth >= 1024 && document.getElementById('main_url_shortener').value.length === 0) {
			document.getElementById('main_http').style.display = 'block';
		}
	});

	document.getElementById('top_url_shortener').addEventListener('click' , function() {
		if(window.innerWidth >= 1024) {
			document.getElementById('top_http').style.display = 'none';
		}
	});

	document.getElementById('top_url_shortener').addEventListener('blur' , function() {
		if(window.innerWidth >= 1024 && document.getElementById('top_url_shortener').value.length === 0) {
			document.getElementById('top_http').style.display = 'block';
		}
	});

	/*
	==============================================================================
	================================== SHARE =====================================
	==============================================================================
	*/
	document.getElementById('main_url_shortener').addEventListener('input' , function() {
		//Condivisione dei valori fra gli input
		document.getElementById('top_url_shortener').value = document.getElementById('main_url_shortener').value;
		checkUrlValue('main_url_shortener', 'main_http');
		checkUrlValue('top_url_shortener', 'top_http');

		//Visualizzazione blocco share
		if(document.getElementById('main_url_shortener').value.length > 0) {
			ShowShare();
		} else {
			document.getElementById('main_share').style.visibility = 'hidden';
			document.getElementById('top_share').style.visibility = 'hidden';
		}
	} , false);

	document.getElementById('top_url_shortener').addEventListener('input' , function() {
		//Condivisione dei valori fra gli input
		document.getElementById('main_url_shortener').value = document.getElementById('top_url_shortener').value;
		checkUrlValue('main_url_shortener', 'main_http');
		checkUrlValue('top_url_shortener', 'top_http');

		//Visualizzazione blocco share
		if(document.getElementById('main_url_shortener').value.length > 0) {
			ShowShare();
		} else {
			document.getElementById('main_share').style.visibility = 'hidden';
			document.getElementById('top_share').style.visibility = 'hidden';
		}
	} , false);

	var os = getMobileOperatingSystem();
	if(os === 'unknown') {
		document.getElementById('share_copy').addEventListener('click' , copyTextToClipboardMain);
		document.getElementById('top_share_copy').addEventListener('click' , copyTextToClipboardTop);
	}

/*
==============================================================================
================================= SIGNIN =====================================
==============================================================================
*/
	document.getElementById('jinni_login').addEventListener('click' , function() {
		fadeIn('jinni_signin_transparent', 0.8);
		fadeIn('jinni_signin', 1);
	});
	document.getElementById('jinni_login_top').addEventListener('click' , function() {
		fadeIn('jinni_signin_transparent', 0.8);
		fadeIn('jinni_signin', 1);
	});

	document.getElementById('jinni_signin_close').addEventListener('click' , function() {
		fadeOut('jinni_signin_transparent');
		fadeOut('jinni_signin');
	});

	document.getElementById('jinni_signin_close_button').addEventListener('click' , function() {
		fadeOut('jinni_signin_transparent');
		fadeOut('jinni_signin');
	});

	document.getElementById('JinniLogin').addEventListener('click' , function() {
		resetErrors();
		var email = document.getElementById('JinniEmail').value;
		var password = document.getElementById('JinniPassword').value;

		if(email.length > 0 && password.length > 0) {
			console.log('login ok')
			resetFields();
		} else {
			document.getElementById('JinniError').style.display = 'block';
		}
	});

/*
==============================================================================
================================= SIGNUP =====================================
==============================================================================
*/
	document.getElementById('jinni_sign_up_button').addEventListener('click' , function() {
		fadeOut('jinni_signin_transparent');
		fadeOut('jinni_signin');
		fadeIn('jinni_signup_transparent', 0.8);
		fadeIn('jinni_signup', 1);
	});

	document.getElementById('jinni_signup_close').addEventListener('click' , function() {
		fadeOut('jinni_signup_transparent');
		fadeOut('jinni_signup');
	});

	document.getElementById('jinni_signup_close_button').addEventListener('click' , function() {
		fadeOut('jinni_signup_transparent');
		fadeOut('jinni_signup');
	});

	document.getElementById('jinni_sign_in_button').addEventListener('click' , function() {
		fadeOut('jinni_signup_transparent');
		fadeOut('jinni_signup');
		fadeIn('jinni_signin_transparent', 0.8);
		fadeIn('jinni_signin', 1);
	});

	document.getElementById('JinniUpSignUp').addEventListener('click' , function() {
		//document.getElementById('JinniUpError').style.display = 'block';
		resetErrors();
		var name = document.getElementById('JinniUpName').value;
		var email = document.getElementById('JinniUpEmail').value;
		var password = document.getElementById('JinniUpPassword').value;

		if(name.length > 0 &&  email.length > 0 && password.length > 0) {
			//Assign values on the confirmation
			document.getElementById('JinniConfName').innerHTML = name;
			document.getElementById('JinniConfEmail').innerHTML = email;
			document.getElementById('JinniConfNewsLetter').value = email;

			fadeOut('jinni_signup_transparent');
			fadeOut('jinni_signup');
			fadeIn('jinni_signup_conf_transparent', 0.8);
			fadeIn('jinni_signup_conf', 1);

			resetFields();
		} else {
			document.getElementById('JinniUpError').style.display = 'block';
		}
	});

/*
==============================================================================
=========================== SIGNUP CONFIRMATION ==============================
==============================================================================
*/
	document.getElementById('jinni_signup_conf_close').addEventListener('click' , function() {
		fadeOut('jinni_signup_conf_transparent');
		fadeOut('jinni_signup_conf');
	});

	document.getElementById('jinni_signup_conf_close_button').addEventListener('click' , function() {
		fadeOut('jinni_signup_conf_transparent');
		fadeOut('jinni_signup_conf');
	});

	document.getElementById('JinniConfResend').addEventListener('click' , function() {
		console.log('resend')
	});

	document.getElementById('JinniConfSubscribe').addEventListener('click' , function() {
		console.log('subscribe')
		fadeOut('jinni_signup_conf_transparent');
		fadeOut('jinni_signup_conf');
	});

	document.getElementById('JinniConfNoThanks').addEventListener('click' , function() {
		console.log('no thanks subscribe')
		fadeOut('jinni_signup_conf_transparent');
		fadeOut('jinni_signup_conf');
	});

  http('POST' , GET_NEWS , '', {'command':'GET', 'language':'it'});
});

function resolveBlog(resp) {
  console.log(resp);
}
