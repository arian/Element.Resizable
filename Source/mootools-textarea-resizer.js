/*
---

name: Element.Resizable
description: Adds a handle at the bottom of a element to resize it's height
authors: [Arian Stolwijk, Joshua Partogi (http://scrum8.com/)]
license: MIT-style license.
requires: [Core/Element, More/Drag]
provides: Element.Resizable

...
*/

Element.implement('resizable', function(){
	var el = this;

	var handle = new Element('div.grippie', {
		styles: {width: el.getSize().x}
	});

	new Element('div.resizable-textarea-wrapper')
		.inject(el, 'after')
		.adopt(el)
		.adopt(handle);

	el.store('resizable', el.makeResizable({
		modifiers: {x: false, y: 'height'},
		limit: {y: [50, false]},
		handle: handle,
		onStart: function(){
			el.setStyle('opacity', 0.3);
		},
		onComplete: function(){
			el.setStyle('opacity', 1);
		}
	}));
	return this;
});
