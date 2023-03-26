const g = require('./answer.js');


test('input:7', () => { 
    expect(g(7)).toBe(1);
});

test('input:20', () => { 
    expect(g(20)).toBe(2);
});
test('input:70', () => { 
    expect(g(70)).toBe(8);
});
test('input:77', () => { 
    expect(g(77)).toBe(15);
});
test('input:100', () => { 
    expect(g(100)).toBe(19);
});
test('input:700', () => { 
    expect(g(700)).toBe(134);
});
test('input:1000', () => { 
    expect(g(1000)).toBe(271);
});

