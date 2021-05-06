const config = {
  STRIPE_KEY: "pk_test_51H2zMpE3A8tyQ3KyvOj1SSQtIMREirXtbeMaZwt5AgBVBTA3dW5FKww3zjU0HhUgjP4mSfwGR4qB3gDhDr45PhsT000sQfhYzs",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "mo-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kh8xcoz8z4.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_GooKIoFQ4",
    APP_CLIENT_ID: "5kkpdptbk1itvks5fsre1l2ss0",
    IDENTITY_POOL_ID: "us-east-1:62e260f3-f642-4079-8148-0d67d5edb1ef",
  },
};

export default config;
