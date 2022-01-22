function fullpageInit() {
	var element = document.getElementById("works");
	if (typeof element != "undefined" && element != null) {
		new fullpage("#fullpage", {
			slidesNavigation: true,
		});
	}
}

function destroyFullpage() {
	fullpage_api.destroy("all");
}

fullpageInit();
