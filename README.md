Mootools Element.Resizable
==========================

A simple element resizer plugin.


How to use
----------

Now with this plugin you shall be able to transform your textarea, iframe or any other element into a resizable element with one line of code like this:

    window.addEvent('load', function() {
        $$('textarea').resizable();
    });

- Any Mootools Element function will work.
- More than one textarea will also work.
- Heck, it even works on iframe

Take a look at the demo in the demo folder.

### Other stuff

This works pretty good with [DynamicMather](https://github.com/cpojer/mootools-dynamic-matcher) from [PowerTools!](http://cpojer.net/PowerTools)

	var Matcher = new DynamicMatcher;
	Matcher.register('textarea:not(.mceEditor):not(.noResizable)', function(elements){
		for (var element, i = elements.length - 1; element = elements[i--];){
			if (!element.retrieve('resizable')) element.resizable();
		}
	}).update();

Now you can call `Matcher.update()` elsewhere if you added new elements to your page.


Credits
-------

This is roughly based on the work of Joshua Partogi (http://scrum8.com/) (c) 2009.

