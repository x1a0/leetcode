/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *   Return true if this NestedInteger holds a single integer, rather than a nested list.
 *   @return {boolean}
 *   this.isInteger = function() {
 *     ...
 *   };
 *
 *   Return the single integer that this NestedInteger holds, if it holds a single integer
 *   Return null if this NestedInteger holds a nested list
 *   @return {integer}
 *   this.getInteger = function() {
 *     ...
 *   };
 *
 *   Return the nested list that this NestedInteger holds, if it holds a nested list
 *   Return null if this NestedInteger holds a single integer
 *   @return {NestedInteger[]}
 *   this.getList = function() {
 *     ...
 *   };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.pos = 0;
  this.list = nestedList;
  this.child = null;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  if (this.child) {
    if (this.child.hasNext()) {
      return true;
    }

    this.child = null;
  }

  if (this.pos >= this.list.length) {
    return false;
  }

  var next = this.list[this.pos];

  if (next.isInteger()) {
      return true;
  }

  this.child = new NestedIterator(next.getList());
  this.pos += 1;
  return this.hasNext();
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if (this.child) {
    return this.child.next();
  }

  return this.list[this.pos++].getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

