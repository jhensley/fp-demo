'use strict';

const values = { a: 1 };

const impureFunction = function (items) {

    const b = 1;
    items.a = items.a * b + 2;
    return items.a;
};

const c = impureFunction(values);
return c;
