pipeline {
    agent any

    environment {
        // Ensure node and npm are available in Jenkins shell
        PATH = "/opt/homebrew/bin:/usr/local/bin:$PATH"
    }

    stages {
        stage('Check Node & NPM') {
            steps {
                sh 'node --version'
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
                echo 'No build step required for this app'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                // Stop anything already running on port 3000
                sh 'lsof -ti:3000 | xargs kill -9 || true'

                // Start app in background and redirect logs
                sh 'nohup node app.js > app.log 2>&1 &'

                echo '🚀 App started in background (http://localhost:3000/add?a=1&b=2)'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
        always {
            echo '📦 Pipeline finished.'
        }
    }
}
