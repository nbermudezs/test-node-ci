describe('First', function() {
	it('should contain a heading', function() {
		browser.get('/');
		expect($('h1').getText()).toBe('POTATOO');
	});
});