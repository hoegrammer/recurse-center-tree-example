var expect = require('chai').expect;
var find = require('../');

describe('find', () => {
	var a = {name: "a", children: [{name: "c"}, {name: "d"}]};
	context('when "a" is the only node', () => {
		var tree = a;
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
  });
	context('when "a" is the only child of the root', () => {
		var tree = {name: "root", children: [a]};
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
  });
	context('when the tree has a single branch with "a" on it', () => {
		var tree = {children: [{children: [{children: [{children: [a]}]}]}]};
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
  });
	context('when the tree has two short branches and "a" is on the second', () => {
		var tree = {name: "root", children: [{children: []}, a]};
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
	});
	context('when the tree has two long branches and "a" is on the second', () => {
		var tree = {name: "root", children: [
			{name: "1", children: [{name: "1.1", children: [{name: "1.2", children: []}]}]},
			{name: "2", children: [{name: "2.1", children: [{name: "2.2", children: [a]}]}]},
		]};
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
  });
	context('when the tree has complex branching', () => {
		var tree = {name: "root", children: [
			{name: "1", children: [{name: "1.1", children: [{name: "1.2", children: []}]}]},
			{name: "2", children: [{name: "2.1", children: [
				{name: "2.1.1", children: []},
				{name: "2.1.2", children: [{name: "2.1.2.1", children:[a]}]},
				{name: "2.1.3", children: [{name: "2.1.3.1", children:[a]}]}
			]}]},
		]};
		it('should find it', () => {
			expect(find(tree, "a")).to.eql(a);
	  });
  });
});
