class MyTip {
	constructor (options) {
		this.options = {
		delay: 500,
		class: ".tiped",
		attribute: "data",
		backgroundColor: "#FFB173",
		padding: "5px 10px",
		borderRadius: "5px",
		fontSize: "14px"
 
	}
		if(options){
			for (let key in this.options){
				if(options[key]){
					this.options[key] = options[key];
				}
			}
		}

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
		that.tip.style.backgroundColor = that.options.backgroundColor;
		that.tip.style.padding = that.options.padding;
		that.tip.style.borderRadius = that.options.borderRadius;
		that.tip.style.fontSize = that.options.fontSize;
		that.tip.style.top = (event.clientY - 35) + "px";
		that.tip.style.left = event.clientX + "px";
		document.body.appendChild(that.tip);
	}
}

class MyPopup {
	constructor (options){
		this.options = {
			links: [
				{href: "#", i: "fas fa-phone", text: "Phone"},
				{href: "#", i: "far fa-envelope", text: "Email"},
				{href: "#", i: "fab fa-telegram-plane", text: "Telegram"},
				{href: "#", i: "fab fa-linkedin-in", text: "Linkedin"}
			],
			borderRadius: "15px",
			fontSize: "25px",
			color: "#009999",
			colorHover: "lightgrey",
			button: document.querySelector('.contact-btn'),
			trigger: function (button, handler, context) {
				console.log(this);
				button.addEventListener('click', context.bind(handler, context));
			},


		}
		if(options){
			for (let key in this.options){
				if(options[key]){
					this.options[key] = options[key];
				}
			}
		}

		this.options.trigger(this.options.button, this.createPopup, this);
	}

	bind (func, context) {
		return function (){
			return func.apply(context, arguments);
		};
	}

	createPopup () {
		const popup = document.createElement('div');
		popup.setAttribute('id', 'popup');
		popup.style.position = "fixed";
		popup.style.width = "100%";
		popup.style.height = "100%";
		popup.style.top = "0";
		popup.style.left = "0";
		popup.style.backgroundColor = "rgba(40, 40, 40, .9)";
		popup.style.zIndex = "11";
		popup.addEventListener('click', this.deletePopup);
		const central = document.createElement('div');
		central.style.position = "absolute";
		central.style.display = "flex";
		central.style.flexDirection = "column";
		central.style.paddingBottom = "10px";
		central.style.top = "50%";
		central.style.left = "50%";
		central.style.transform = "translate(-50%,-50%)";
		central.style.transform = "translate(-50%,-50%)";
		central.style.borderRadius = this.options.borderRadius;
		central.style.backgroundColor = "white";
		const close = document.createElement('div');
		close.setAttribute('id', 'close');
		close.style.alignSelf = "flex-end";
		close.style.textAlign = "center";
		close.style.width = "20px";
		close.style.margin = "10px 10px 10px 0";
		close.style.cursor = "pointer";
		close.style.color = this.options.color;
		close.style.fontWeight = "800";
		close.innerText = "X";
		close.addEventListener('click', this.deletePopup);
		central.appendChild(close);
		this.options.links.forEach (link => {
			const a = document.createElement('a');
			a.setAttribute('href', link.href);
			a.style.display = "block";
			a.style.textAlign = "left";
			a.style.fontSize = this.options.fontSize;
			a.style.padding = "30px 50px 30px 50px";
			a.style.textDecoration = "none";
			a.style.color = this.options.color;
			a.innerHTML = `<i class="${link.i}" style="margin-right: 10px;"></i>${link.text}`;
			a.addEventListener('mouseover', (event) => {
				event.target.style.backgroundColor = this.options.colorHover;
				if(event.target.tagName == "I")
					event.target.parentNode.style.backgroundColor = this.options.colorHover;
			});
			a.addEventListener('mouseout', (event) => {

				event.target.style.backgroundColor = "transparent";
			});
			central.appendChild(a);
		});
		popup.appendChild(central);
		document.body.appendChild(popup);
	}

	deletePopup(event) {
		let popup = document.querySelector('#popup');
		let close = document.querySelector('#close');
		if(event.target == popup || event.target == close) 
			popup.parentNode.removeChild(popup);
	};
}