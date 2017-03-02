describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual([]);
  });

  it('handles an array with values', function(){
    expect( bubbleSort([1,4,2,3,-5,32,333,65,7]) ).toEqual([-5,1,2,3,4,7,32,65,333]);
  });
});