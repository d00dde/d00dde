class MyTip {
	constructor (options) {
		this.default = {
		delay: 500,
		class: ".tiped",
		attribute: "data",
		color: "#FFB173",
		padding: "5px 10px",
		borderRadius: "5px"
	}
		if(!options)
			this.options = this.default;
		else
			this.options = options;
		this.timer = 0;
		this.tip = 0;
		this.that = this;
		this.tiped = document.querySelectorAll (this.options.class);
		this.tiped.forEach(elem => {
			elem.addEventListener ('mouseover', (event) => {
				this.timer = setTimeout (this.createTip, this.options.delay, this.that, event);
			});
			elem.addEventListener ('mouseout', () => {
				clearTimeout(this.timer);
				this.timer = 0;
				if(this.tip.parentNode)
					this.tip.parentNode.removeChild(this.tip);
			});

		});
	}

	createTip (that, event) {
		that.tip = document.createElement('div');
		that.tip.innerHTML = event.target.getAttribute(that.options.attribute);
		that.tip.style.position = "fixed";
		that.tip.style.backgroundColor = that.options.color;
		that.tip.style.padding = that.options.padding;
		that.tip.style.borderRadius = that.options.borderRadius;
		that.tip.style.top = (event.clientY - 35) + "px";
		that.tip.style.left = event.clientX + "px";
		document.body.appendChild(that.tip);
	}
}