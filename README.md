# typescript-blockchain
## 타입스크립트를 사용해서 블록체인을 구현합니다. 
다만 이 프로젝트는 블록체인에 대한 이해보다는 타입스크립트의 대한 내용을 익히고 정리하는 것이 주 목적입니다.

## 블록체인
서로의 정보가 이전 정보를 참고하여 마치 체인처럼 연결되어 있는 기술로 블록(Block) + 체인(Chain)의 합성어로 누구나 열람할 수 있는 장부에 거래 내역을 투명하게 기록하고 여러 대의 컴퓨터에 이를 복제하여 저장하는 분산형 데이터 저장 기술입니다.

### 프로젝트 다운 -> npm i -> 로그 확인

### 블록체인 생성 확인
프로젝트를 다운받은 후 로그를 확인 하게되면 프로젝트에서 임의로 생성된 블록 들이 이전의 정보를 참고하여 마치 사슬처럼 연결되어 있는 것을 확인하실 수 있습니다.

### typescript설치에 관한 부가 설명
npm i -D typescript

### package.json 초기화
npm init -y

### tsconfig.json설정
디렉터리에 tsconfig.json 파일이 있으면 해당 디렉터리가 TypeScript 프로젝트의 루트임을 나타냅니다. tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정합니다.

### Target (기본값: ES3)
최신 브라우저는 모든 ES6 기능을 지원하므로 ES6는 좋은 선택입니다. 코드가 이전 환경에 배포된 경우 더 낮은 target을 설정하거나 최신 환경에서 코드 실행이 보장되는 경우 더 높은 target을 설정하도록 선택할 수 있습니다.
ex) 화살표 함수() => this는 ES5 이하이면 함수 표현식으로 바뀝니다.

특별한 ESNext 값은 TypeScript 버전이 지원하는 가장 높은 버전을 나타냅니다. 이 설정은 다른 TypeScript 버전 간에 동일한 의미가 아니며 업그레이드를 예측하기 어렵게 만들 수 있으므로 주의해서 사용해야 합니다.

### lib
타입스크립트에게 어떤 API를 사용하고 어떤 환경에서 코드를 실행하는 지를 지정할 수 있습니다.
(target 런타임 환경이 무엇인지를 지정합니다.)
프로그램이 브라우저에서 실행되면 lib에 "DOM" 유형 정의를 할 수 있습니다.
DOM: window, document 등
ex) "lib": ["ES6","DOM"]
