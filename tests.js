describe('Calculator', function() {
    it('should add numbers', function() {
        expression = '2+3';
        calculate();
        chai.expect(document.getElementById('expression').value).to.equal('5');
    });

    it('should handle invalid expressions', function() {
        expression = '2a+3';
        calculate();
        chai.expect(document.getElementById('expression').value).to.equal('');
    });
});
