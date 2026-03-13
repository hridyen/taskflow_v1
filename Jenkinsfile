pipeline {

    agent {
        label 'ubuntu-agent'
    }

    parameters {
        choice(
            name: 'ACTION',
            choices: ['DEPLOY', 'STOP'],
            description: 'Choose what action to perform'
        )
    }

    stages {

        stage('Verify Docker') {
            when {
                expression { params.ACTION == 'DEPLOY' }
            }
            steps {
                sh 'docker --version'
                sh 'docker compose version'
            }
        }

        stage('Build Containers') {
            when {
                expression { params.ACTION == 'DEPLOY' }
            }
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start Application') {
            when {
                expression { params.ACTION == 'DEPLOY' }
            }
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Stop Application') {
            when {
                expression { params.ACTION == 'STOP' }
            }
            steps {
                sh 'docker compose down'
            }
        }

    }

}