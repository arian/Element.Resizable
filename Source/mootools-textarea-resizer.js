/*
---
description: Mootools TextareaResizer plugin

license: MIT-style

authors:
  - Joshua Partogi (http://scrum8.com/)
  - Arian Stolwijk

requires:
  core/1.2.4:Core
  more/1.2.4:Drag

provides: [Element.resizable]

...
*/

Element.implement('resizable',function(){
	var el = this;
	var handle = new Element('div',{
		'class': 'grippie',
		styles: {
			width: el.getSize().x
		}
	}),
	wrapper = new Element('div',{
		'class' : 'resizable-textarea-wrapper'
	}).inject(el,'after')
		.adopt(el)
		.adopt(handle);

	el.makeResizable({
		modifiers: {x: false, y: 'height'},
		limit: {y: [50, false]},
		handle: handle,
		onStart: function(){
			el.setStyle('opacity',0.3);
		},
		onComplete: function(){
			el.setStyle('opacity',1);
		}
	});
});