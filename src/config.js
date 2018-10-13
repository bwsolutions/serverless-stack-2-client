const dev = {
  STRIPE_KEY: "pk_test_QizypGeMoezZk1jnRUcJeZgj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1w8twxh57odb1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://uqlien7vub.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8uPZvWNTi",
    APP_CLIENT_ID: "176k27ktpjb7b4md1s1rifneei",
    IDENTITY_POOL_ID: "us-east-1:9c80f142-cb02-40ed-9b49-593104e4158d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_QizypGeMoezZk1jnRUcJeZgj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-hed55mvwwj07"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kmlylpbpp1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_w5mnSEsIW",
    APP_CLIENT_ID: "6k64hncn742eu5ti8ucu3mjeqs",
    IDENTITY_POOL_ID: "us-east-1:1d61ec57-8757-4c35-b935-966ac433ae6e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
