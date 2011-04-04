$(document).ready(function() {
	var Gallery = {
		init: function() {
			PreLoader.showLoader();
		},
		setContainer: function(container) {
			this.container = container;
		},
		setContent: function(content) {
//			alert(1);
			PreLoader.showLoader();
			setTimeout(function(){
				Gallery.container.html(content);
				PreLoader.hideLoader();
			}, 1000);
		},
		getContainerSize: function() {
			return [this.container.outerWidth(), this.container.outerHeight()];
		}
	};

	var PreLoader = {
		loader: $("#overlay"),
		showLoader: function() {
			var dim = Gallery.getContainerSize();
			this.loader.css({
				display: 'block',
				width: dim[0] + 'px',
				height: dim[1] + 'px'
			});

		},
		hideLoader: function() {
			this.loader.css({display: 'none'});
		}
	};

	var Navigation = {
		nav: $("#navigation"),
		links: $('a', this.nav),
		navigate: function() {
			this.links.click(function() {
				sendRequest($(this).html());
				return false;
			});
		}
	};

	function sendRequest(page) {
		$.ajax({
			url: "index.html",
			success: function(r){
//				console.log($("#main", r).html());
				Gallery.setContent($("#main", r).html());
			},
			dataType: 'html'
		});
	}
//	function buildNavigation(el) {
//		return {
//			links: $("a", el),
//			navigate: function() {
//				this.links.click(function() {
//					alert($(this));
//					return false;
//				});
//			}
//		}
//	}
	Gallery.setContainer($("#main"));
//	Gallery.init();
	Navigation.navigate();
});