//@ts-check

// CommonJS: require
// - node standard library에 있는 모듈은 절대경로를 지정해 가져온다.
// - 이 프로젝트 내의 다른 파일은 상대경로를 지정해 가져온다.
// - 절대경로를 지정하면 Module.path의 경로 중 하나에서 해당 모듈이 있는지 검사해 가져온다.

const animalsA = require('./animals')
const animalsB = require('./animals')
const animalsC = require('./animals')

console.log(animalsA === animalsB)
// ECMAScript : export, express
