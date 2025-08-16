pipeline {
    agent {
        docker { 
            image 'node:18' 
            args '-u root' 
        }
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'No build needed for Node.js script'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
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
