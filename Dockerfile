FROM node as builder
# 다음 From 까지는 builder 스테이지 라는 것을 명시
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# nginx가 요청에 맞게 제공해줄 수 있는 파일 위치를 설정하고 목사해준다.




