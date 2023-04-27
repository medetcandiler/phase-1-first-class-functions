function receivesAFunction(cb){
  cb();
}

function returnsANamedFunction(){
  return function namedFnc(){
    console.log('I am a named function.');
  };
}

function returnsAnAnonymousFunction(){
  return () => {
    console.log('I am a nonamed function.');
  };
}