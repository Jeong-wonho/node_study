const cook = {
    create : recipe => recipe.start()
}

const pasta = {
    start: () =>  console.log('파스타 요리가 시작됩니다.')
}

const steak = {
    start : () => console.log("스테이크 요리가 시작됩니다.")
}

cook.create(pasta);
cook.create(steak);