pipeline {
    agent any

    environment {
        PORT = '3000'
    }

    stages {
        stage('Check Node & NPM') {
            steps {
                sh 'which node'
                sh 'node --version'
                sh 'which npm'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for this Node.js app'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests (none for now)...'
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                echo 'Starting app in background'
                sh 'nohup node app.js &'
            }
        }
    }

    post {
        always {
            echo '✅ Pipeline completed.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
