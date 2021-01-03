'''

0. Insomnia Core 설치(Rest 클라이언트)
http://Insomnia.net

1. npm i -g @nestjs/cli(프레임워크 생성 라이브러리)

2. 프로젝트 생성
nest new 
what name? hi-nest
[참고] Visual studio code에서 실행 안되어서 외부 cmd에서 실행, vsc를 관리자 모드로 실행하면 될지도

3. Controller 생성
: nest g cd

4. Service 생성
nest g service

5. class 유효성 검사
npm i class-validator

5. class 내 자동 타입 변경
npm i class-transformer

6. 타입을 변환 사용할 수 있게 만드는 페이지
npm i @nestjs/mapped-types

7. 모듈 생성
nest g mo

------------------------------------------
#3 UNIT TESTRING
------------------------------------------

8. 실시간 테스팅 범위
npm run test:cov (coverage)

9. 실시간 테스팅(spec) - spec파일 변경시 마다 테스트
npm run test:watch


------------------------------------------
#3 E2E TESTRING
------------------------------------------

Super Test 사용

'''