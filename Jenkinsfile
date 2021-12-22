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

        stage("Install dependencies"){
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