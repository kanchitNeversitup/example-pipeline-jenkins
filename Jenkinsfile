pipeline {
    agent any
    
    environment {
        CONTAINER_NAME = 'example-express-jenkins-container'
        IMAGE_NAME = 'example-express-jenkins-image'
    }

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install and Test') {
            agent {
               docker { 
                   image 'node:18.17.1-alpine3.18'     
                   reuseNode true 
               }
            }         
            steps {
                sh 'npm i'
                sh 'npm test'
            }
        }

        stage('build') {
            steps {
               sh 'docker build -t ${IMAGE_NAME} .'
            }
        }
        
       stage('run') {
            steps {
                sh 'docker stop ${CONTAINER_NAME} || true'
                sh 'docker rm ${CONTAINER_NAME} || true'
                sh 'docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}'
            }
        }
    }
}
