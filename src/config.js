const dev = {
  STRIPE_KEY: "pk_test_QizypGeMoezZk1jnRUcJeZgj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-mono-uploads-dev-s3bucket-112p8wmmt8a0n"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dro9b4uyjd.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NYD9GpXnu",
    APP_CLIENT_ID: "25d8r1rbjpv68qpkmfad1p50k7",
    IDENTITY_POOL_ID: "us-east-1:ef86816c-8398-417f-88fd-f4f4afb3bc53"
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
