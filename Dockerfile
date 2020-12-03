FROM amaysim/serverless:2.13.0
ENV APP_NAME=coba-serverless-express 
WORKDIR /app
COPY . /app
RUN sls deploy