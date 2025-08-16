pipeline {
    agent any

    stages {
        stage('Check NPM') {
            steps {
                sh '/opt/homebrew/bin/which npm'
                sh '/opt/homebrew/bin/npm --version'
            }
        }

        stage('Install') {
            steps {
                sh '/opt/homebrew/bin/npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for Node.js script'
            }
        }

        stage('Test') {
            steps {
                sh '/opt/homebrew/bin/npm test'
            }
        }

        stage('Run') {
            steps {
                sh 'node app.js &'
                echo 'App started in background'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
