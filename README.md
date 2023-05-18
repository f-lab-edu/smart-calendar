# Smart-calendar

## 1️⃣ 프로젝트를 시작하게 된 계기
실제 업무를 할 때 스케줄 관리를 도와주는 구글캘린더를 많이 사용하면서 사용자가 사용하기에 편하고 잘 만들었다고 생각했고 비슷한 기능들을 직접 구현해 보면서 좋은 서비스를 만들고 싶었습니다.
또한 상태를 효율적으로 관리하는 부분에 대한 경험이 부족해서 프로젝트를 통해 스스로 배우는 시간이 되었으면 좋겠다는 생각으로 프로젝트를 시작하게 되었습니다.

</br>

## 2️⃣ 기술 스텍

- React
- Recoil
- React-query
- React-router-dom
- React-testing-libaray
- Typescript
- Styled-component
- Firebase auth
- Msw
- Yarn berry

</br>

## 3️⃣ Commit 규칙

- feat : 새로운 기능
- fix : 버그 수정
- build : 빌드 관련 파일
- chore : 자잘한 수정
- docs : 문서 수정
- style : 스타일 수정
- refactor : 코드 리팩토링
- test : 테스트 코드 수정

</br>

## 4️⃣ 상태 관리 전략
| Client State | Server State |
| --- | --- |
| Client에서 소유하며 제어 가능 | 원격의 공간에서 관리 및 유지 |
| Client 내에서 항상 최신 상태로 관리 | 다른 사람들과 공유되는 상태로 관리 |

Redux와 같은 상태관리로 Client 와 Server 상태를 동시에 관리하면 어플리케이션의 복잡도가 증가하고 성능상의 이슈가 있어 </br>
Client 와 Server 상태 관리를 각각 __Recoil__ 과 __React-query__ 로 사용하였고 위에 나와 있는 __상태 관리 전략__ 을 기준으로 Client와 Server 상태를 나눕니다.

