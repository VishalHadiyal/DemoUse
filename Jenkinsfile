pipeline {
    agent any
    environment {
        name = "Vishal"
    }
    parameters {
        string(name: 'gender', defaultValue: "male", description: "This is for test use")
    }
    stages {
        stage('Test') {
            steps {
                echo 'Hello World'
                sh 'echo ${gender}'
            }
        }
        stage('Deploy in Stage') {
            steps {
                echo 'Done Deploy in Stage'
            }
        }
        stage('Deploy in Production') {
            steps {
                echo 'Deploy Done in Production'
            }
        }
        stage('Print Date') {
            steps {
                sh 'date'
                sh 'pwd'
                sh 'ls'
            }
        }
        stage('Add Multiple Commands in One Block') {
            environment {
                additional_name = "Hadiyal"
            }
            steps {
                sh '''
                date
                ls 
                pwd
                echo ${additional_name}
                '''
            }
        }
        stage('Environment Variables') {
            steps {
                sh 'echo ${BUILD_ID}'
                sh 'echo ${name}'
            }
        }
    }
}
