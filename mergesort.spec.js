describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,3,2,5])).toEqual([[1,3],[2,5]]);
  });
});
describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([6,1,3,5,0,-1]) ).toEqual([-1,0,1,3,5,6]);
   });
});