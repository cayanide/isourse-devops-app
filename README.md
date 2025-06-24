# 📦 isourse-devops-app

This repository contains a Node.js application developed for the **Isourse DevOps Internship Assignment** – *Objective 1: Build It, Ship It*.

The application is a simple `Express.js` server with two endpoints: `/` and `/health`, and is deployed to **AWS Elastic Beanstalk** using a GitHub Actions CI/CD pipeline.

---

## 🚀 Project Overview

- **Language & Framework**: Node.js v22 + Express.js
- **Deployment**: AWS Elastic Beanstalk (Node.js 22, Amazon Linux 2023)
- **CI/CD**: GitHub Actions for test/build/deploy
- **Testing**: Jest + Supertest
- **Security**: AWS credentials managed via GitHub Secrets
- **Networking**: Custom VPC with public subnets

---

## 📁 Project Structure

```
isourse-devops-app/
├── .github/workflows/main.yml     # GitHub Actions CI/CD pipeline
├── app.js                         # Express app definition
├── app.test.js                    # Unit tests with Jest & Supertest
├── package.json                   # Dependencies and scripts
└── README.md                      # Project documentation
```

---

## 🌐 Deployed Application

The application is deployed to:

**URL**: [`http://My-web-app-env.eba-3pivtbzg.us-east-1.elasticbeanstalk.com`](http://My-web-app-env.eba-3pivtbzg.us-east-1.elasticbeanstalk.com)

![image](https://github.com/user-attachments/assets/d44ef87c-3fd3-40fa-8be2-9f94159704c7)


### 🔍 Available Endpoints

| Endpoint         | Method | Description              | Example Usage |
|------------------|--------|--------------------------|----------------|
| `/`              | GET    | Root route – sanity check | `curl http://My-web-app-env.eba-3pivtbzg.us-east-1.elasticbeanstalk.com` |
| `/health`        | GET    | Health check endpoint     | `curl http://My-web-app-env.eba-3pivtbzg.us-east-1.elasticbeanstalk.com/health` |

---

## 🧪 Local Development & Testing

### ⚙️ Prerequisites

- **Node.js v22** must be installed
  Check with:
  ```bash
  node -v
  ```

### 🧱 Setup & Run Locally

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```

Test endpoints locally:
```bash
curl http://localhost:8080/
curl http://localhost:8080/health
```

Run unit tests:
```bash
npm test
```

---

## 🛠️ Deployment Process

### 🚨 Automatic CI/CD

- Pushes to the `main` branch trigger:
  - Tests with Jest
  - App packaging into `deploy.zip`
  - Deployment to AWS Elastic Beanstalk

### 📤 Manual Deployment

1. Make code changes
2. Commit & push:
   ```bash
   git add .
   git commit -m "Update for deployment"
   git push origin main
   ```
3. Monitor status in GitHub Actions:
   [Actions Dashboard](https://github.com/cayanide/isourse-devops-app/actions)

---

## 🏗️ AWS Setup Details

- **Elastic Beanstalk App**: `my-web-app`
- **Environment**: `My-web-app-env`
- **Platform**: Node.js 22 on 64bit Amazon Linux 2023/6.5.2
- **Domain**: `http://My-web-app-env.eba-3pivtbzg.us-east-1.elasticbeanstalk.com`

### 🌐 Networking

- **VPC**: `vpc-03826ba2262af215e`
- **Subnets**:
  - `subnet-008a6a4fb84ab5eeb`
  - `subnet-031b6e89ca7ec9c6b`

### 🔐 IAM Roles

- `aws-elasticbeanstalk-service-role`
- `aws-elasticbeanstalk-ec2-role`

### 🔄 GitHub Actions Configuration

- Location: `.github/workflows/main.yml`


Secrets used:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `APPLICATION_NAME`
- `ENVIRONMENT_NAME`
- `S3_BUCKET`

---

## 📎 Repository

- **GitHub**: [https://github.com/cayanide/isourse-devops-app](https://github.com/cayanide/isourse-devops-app)

---

## 👨‍💻 Author

**Cayanide** 
