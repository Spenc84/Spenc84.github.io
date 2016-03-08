var lastClicked = { id: "about", url: "About.html", pic: "Spencer.jpg" };
				var social = { id: "social", url: "Social.html", state: false };
				var contact = { id: "contact", url: "Contact.html", state: false };
        function change(url, id, pic) {
					if(social.state) {
						toggleOff(social);
					}
					if(contact.state) {
						toggleOff(contact);
					}
					document.getElementById(lastClicked.id).style = null;
					document.getElementById(id).style.fontWeight = "bold";
					if(id !== 'about')
						document.getElementById(id).style.backgroundColor = "#ccc";
					document.getElementById('main').src = url;
					document.getElementById('pic').src = pic;
					lastClicked.id = id;
					lastClicked.url = url;
					lastClicked.pic = pic;
        }
				function toggle (x) {
					switch(x) {
						case 'social':
							if(social.state) {
								toggleOff(social);
							}
							else {
								if(contact.state) {
									toggleOff(contact);
								}
								toggleOn(social);
							}
							break;
						case 'contact':
							if(contact.state) {
								toggleOff(contact);
							}
							else {
								if(social.state) {
									toggleOff(social);
								}
								toggleOn(contact);
							}
							break;
					}
				}
				function toggleOff(obj) {
					document.getElementById(obj.id).style = null;
					document.getElementById('main').src = lastClicked.url;
					obj.state = false;
				}
				function toggleOn(obj) {
					document.getElementById(obj.id).style.fontWeight = "bold";
					document.getElementById(obj.id).style.backgroundColor = "#ccc";
					document.getElementById(obj.id).style.border = "2px solid black";
					document.getElementById('main').src = obj.url;
					obj.state = true;
				}
