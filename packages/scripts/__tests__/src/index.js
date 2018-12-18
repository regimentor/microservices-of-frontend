function a() {
  console.log('222');
}

async function asyncFuncTestFoo() {
  return true;
}

class Foo {
  state = {
    art: 'art'
  };
}

const fooIn = new Foo();

console.log(fooIn.state.art);

asyncFuncTestFoo();

a();

const t = 1;
const b = 1;
const r = 1;
const ae = 1;

a(t, b, r, ae);
