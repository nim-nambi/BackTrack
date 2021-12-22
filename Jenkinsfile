pipeline{
    agent any
    tools{
        nodejs "node"
    }
    environment{
        BUILD_VERSION = '0.0.0'
    }

    stages{
        stage("Install dependencies"){
            steps{
                dir('Frontend'){
                    sh "npm install" 
                }

                dir('Backend'){
                    sh "npm install" 
                }
            }
        }

        stage("Testing"){
            steps{
                dir('Frontend'){
                    sh "npm test" 
                }

                dir('Backend'){
                    sh "npm test" 
                }
            }
        }

        stage("Docker Login"){
            steps{
                withCredentials([
                    usernamePassword(credentials: 'Dockerhub-credentials', usernameVariable: USER, passwordVariable: PWD)
                ]) {
                    sh "docker login -u ${USER} -p ${PWD}"
                }
            }
        }

        stage("Docker Build"){
            steps{
                dir('Frontend'){
                    sh "docker build -t nim-nambi/Frontend:${BUILD_VERSION} ."
                    sh "docker push nim-nambi/Frontend:${BUILD_VERSION}" 
                }

                dir('Backend'){
                    sh "docker build -t nim-nambi/Backend:${BUILD_VERSION} ." 
                    sh "docker push nim-nambi/Backend:${BUILD_VERSION}"
                }
            }
        }

        stage("Clone Infrastructure Repo"){
            steps{
                git url: 'https://github.com/nim-nambi/AWS_IAC.git'
            }
        }

        stage("Build and configure EC2 instances"){
            steps{
                dir('Terraform_scripts'){
                    sh "terraform validate"
                    sh "terraform apply"
                }
            }
        }

        stage("Deploy pods"){
            steps{
                dir('Ansible'){
                    sh "ansible-playbook apply.yml"
                }
            }
        }

    }

    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}