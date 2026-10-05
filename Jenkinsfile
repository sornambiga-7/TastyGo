pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t tastygo:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop tastygo-app || exit /b 0'
                bat 'docker rm tastygo-app || exit /b 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d --name tastygo-app -p 8083:80 tastygo:latest'
            }
        }
    }
}
