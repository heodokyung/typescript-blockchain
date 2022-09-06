# typescript-blockchain
## 타입스크립트를 사용해서 블록체인에 대한 기본 개념을 익혀 봅니다. 블록체인의 개념보다는 타입스크립트에 대한 개념을 익히는게 주 목적입니다.

### 타입스크립트를 사용해야 하는 이유
#### ⭐ Javascript
- 자바스크립트는 매우 유연한 언어라 에러를 사전에 보여주지 않기 때문에 코드에서 오류가 발생할 가능성이 높아집니다.

```javascript
// 예시) 🚫 숫자 배열 + false
[1,2,3,4] + false → '1,2,3,4false' // 배열이 사라지고 string으로 바뀜
```

```javascript
// 🚫 함수의 인자가 잘못 들어가도 실행됨
function add(a, b) {
  return a + b
}
add(1) → NaN //return값이 NaN일 뿐, 에러가 나지 않음
```

```javascript
const a = { a: "A" };
a.hello();
// 선언 되지 않은 함수를 호출할 때: 실행 시 에러 발생(실행 전에 에러 감지 불가)
```

#### ⭐ Tyescript
- 타입 안정성과 사전에 에러를 발생시켜 오류(버그)감소
- TypeScript는 JavaScript에 추가적인 구문을 추가하여 editor와의 단단한 통합을 지원합니다. editor에서 초기에 오류를 잡을 수 있습니다.
- TypeScript 코드는 JavaScript가 실행되는 모든 곳(브라우저, Node.js 또는 Deno 및 앱 등)에서 JavaScript로 변환될 수 있습니다.
- TypeScript는 JavaScript를 이해하고 타입 추론(type inference)을 사용하여 추가 코드 없이도 훌륭한 도구를 제공합니다.

### 타입스크립트 코드 테스트
<a href="https://www.typescriptlang.org/play" target="_blank">https://www.typescriptlang.org/play</a>

### 타입스크립트 핸드북
<a href="https://typescript-kr.github.io/pages/basic-types.html" target="_blank">https://typescript-kr.github.io/pages/basic-types.html</a>


### 타입스크립트 Type 정의
- ✅ 배열: 자료형[]
- ✅ 숫자: number
- ✅ 문자열: string
- ✅ 논리: boolean
- ✅ optional

#### 명시적 정의(변수 선언 시 타입 정의)
```javascript
let a: boolean = "x"
// 🚫 boolean 타입에 string타입 할당 불가 알림
```

#### 변수만 생성(타입 추론)
```javascript
let b = "hello"; // b가 string 타입이라고 추론
b = 1 // string으로 선언한 변수에 number값 할당
// 🚫 string 타입에 number타입 할당 불가 알림
```

#### Alias(별칭) 타입, optional로 선언
<a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases" target="_blank">type-aliases</a>

→ 타입값에 ?로 값을 주면 optional
```javascript
❗ ?를 :앞에 붙이면 optional

// ✅ Alias(별칭) 타입
type Player = {
    name: string,
    age?:number
}

const player : Player = {
    name: "nico"
}

⭐ 함수에서는 어떻게 쓸까
type Player = {
    name: string,
    age?:number
}
```

```javascript
// ❌ player.age가 undefined일 가능성 알림
if(player.age < 10) {
}

// ⭕ player.age가 undefined일 가능성 체크
if(player.age && player.age < 10) {
}
```

#### 함수에서 사용시
```javascript
function playerMaker1(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12
```

#### readonly
JavaScript에서는 mutability(변경 가능성)이 기본값이지만 타입스크립트에서는 readonly를 통해 읽기 전용으로 만들 수 있습니다.
```javascript
interface Pizza {
  readonly x: number;
}

let pizza: Pizza = { x: 1 };
pizza.x = 12; // error


const numbers: readonly number[] = [1, 2, 3, 4]
🚫 numbers.push(1)

// ❗ readonly가 있으면 최초 선언 후 수정 불가 ⇒ immutability(불변성) 부여
// but, javascript에서는 그냥 배열
```
<a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const" target="_blank">readonly-and-const</a>

#### Tuple
정해진 개수와 순서에 따라 배열 선언
```javascript
const player: [string, number, boolean] = ["nico", 1, true]
// ❗ readonly도 사용가능 ⇒ readonly [...] 형태
```

#### undefined, null, any
- any: 아무 타입
- undefined: 선언X 할당X
- null: 선언O 할당X

#### unknown
unknown타입은 모든 값을 나타냅니다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전합니다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문입니다.
```javascript
// 예시1
let a:unknown

if(typeof a === 'number'){
  let b = a + 1
}
if(typeof a === 'string'){
  let b = a.toUpperCase()
}
🚫 let b = a + 1

// 예시2
function hello(a: any) {
  a.b(); // OK
}

function hello2(a: unknown) {
  a.b(); // 에러: Object is of type 'unknown'.
}
```

#### void
void는 값을 반환하지 않는 함수의 반환 값을 나타냅니다. 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입입니다.
```javascript
function hello() {
  console.log('x')
}

function noop() {
  return;
}
```

#### never
일부 함수는 값을 반환하지 않습니다. 이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미합니다.
```javascript
function fail(msg: string): never {
  throw new Error(msg);
}

function temp(name:string|number):never {
  if(typeof name === "string"){
    name
  } else if(typeof name === "number"){
    name
  } else {
    name
  }
}
```
- if 안에서는 string형의 name 반환합니다.
- else if 안에서는 number형의 name 반환합니다.
- else 안에서는 never형의 name 반환합니다.
⇒ 즉, 제대로 인자가 전달되었다면 else로 올 수 없습니다.
