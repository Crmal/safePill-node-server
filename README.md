# safePill

2022 명지대학교 캡스톤디자인2 safePill API Server

## How to start development server

```shell
yarn start:dev
```

## Commit conventions

- feat : 기능 추가
- refactor : 리팩토링, 기능은 그대로 두고 코드를 수정
- fix : 버그 수정
- style : 코드에 지장 안 가는 스타일적 코드 수정
- setting : eslint 변경, 라이브러리 설치 등
- docs : 주석 추가삭제, readme 변경 등

## .env

```
DB_PASSWORD=
DB_NAME=

```

## Pre-installation

```
MySQL
Redis
docker-compose
```

[Docker Compose](https://docs.docker.com/compose/)를 이용하여 쉽게 실행할 수 있습니다.

실행 전 .env파일이 설정되어 있어야 합니다.

```shell
docker-compose up --build -d
```

## File-structure

```
safepill
┣ src
┃ ┣ common
┃ ┃ ┗ interceptors
┃ ┃ ┗ ┗ wrap-response.interceptor.ts
┃ ┣ axios
┃ ┣ ┣ axios.module.ts
┃ ┣ ┗ axios.service.ts
┃ ┣ comment
┃ ┣ ┣ comment.controller.ts
┃ ┣ ┣ comment.entity.ts
┃ ┣ ┣ comment.module.ts
┃ ┣ ┣ comment.service.ts
┃ ┣ ┗ commnet-repository.ts
┃ ┣ pill
┃ ┃ ┣ dto
┃ ┃ ┃ ┣ etc_otc_code.enum.ts
┃ ┃ ┃ ┣ findByName.dto.ts
┃ ┃ ┃ ┗ findBySymptom.dto.ts
┃ ┃ ┣ pipes
┃ ┃ ┃ ┣ pill-name-vaildation.pipe.ts
┃ ┃ ┃ ┗ pill-symptom-vaildation.pipe.ts
┃ ┃ ┣ pill-repository.ts
┃ ┃ ┣ pill.controller.ts
┃ ┃ ┣ pill.entity.ts
┃ ┃ ┣ pill.module.ts
┃ ┃ ┗ pill.service.ts
┃ ┣ app.controller.spec.ts
┃ ┣ app.controller.ts
┃ ┣ app.module.ts
┃ ┣ app.service.ts
┃ ┗ main.ts
┣ .dockerignore
┣ .env
┣ .eslintrc.js
┣ .gitignore
┣ .prettierrc
┣ Dockerfile
┣ README.md
┣ docker-compose.yml
┣ nest-cli.json
┣ package.json
┣ tsconfig.build.json
┣ tsconfig.json
┗ yarn.lock
```
