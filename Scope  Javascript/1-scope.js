let globalVariable = 'Global Value';

function outerFunction() {
  let scopedVariable = 'Scoped Value';

  function innerFunction() {
    let innerVariable = 'Inner Valuse';
    console.log(scopedVariable);
  }

  innerFunction();
}

outerFunction();
