function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
    };  
    
    return Promise.resolve(fruits[name])
}

async function makeSmoothie() {

  const strawberry = await getFruit('strawberry');
  console.log(strawberry);

  const kiwi = await getFruit('kiwi');
  console.log(kiwi);


    // getFruit('strawberry').then((res) => {
    //     console.log()

    // getFruit('kiwi').then(console.log())
    // })
}

makeSmoothie()