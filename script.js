/**
 * 
 */
(function() {
	var $ = function(id) { return document.getElementById(id); }
	window.onload = function() {
		$("close-nav").onclick = closeNav;
		$("open-nav").onclick = openNav;
	};
	function openNav() {
		$("open-nav").style.display = "none";
	    $("mySidenav").style.width = "100%";
	    $("mySidenav").style.height = "10%";
	}

	function closeNav() {
		$("open-nav").style.display = "unset";
	    $("mySidenav").style.width = "0";
	    $("mySidenav").style.height = "0";
	}
})();
