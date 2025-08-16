pipeline {
    agent any

    environment {
        NODE_PATH = '/opt/homebrew/bin' // adjust if needed
    }

    stages {
        stage('Check Node & NPM') {
            steps {
                sh "${NODE_PATH}/node --version"
                sh "${NODE_PATH}/npm --version"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh "${NODE_PATH}/npm install"
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for this Node.js app'
            }
        }

        stage('Test') {
            steps {
                sh "${NODE_PATH}/npm test"
            }
        }

        stage('Run') {
            steps {
                sh "${NODE_PATH}/node app.js &"
                echo 'App started in background'
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
