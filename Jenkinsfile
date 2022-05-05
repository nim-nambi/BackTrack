pipeline {
  agent any
    
  tools {
      nodejs "node"
      snyk "Snyk@latest"
    }
  environment{
        BUILD_VERSION = '1.0.0'
    }
    
  stages {
    stage('Cleanup Workspace') {
        steps {
            cleanWs()
            sh """
            echo "Cleaned Up Workspace For Project"
            """
        }
    }
    stage('Cloning Git') {
      steps {
        git branch: 'main', changelog: false, poll: false, url: 'https://github.com/nim-nambi/pipeline_testing.git'
      }
    }
    stage('Install dependencies') {
      steps {
        dir('backend'){
            sh 'npm install'
        }
      }
    }
    // stage('CQA'){
    //     steps {
    //         snykSecurity(
    //           organisation: 'nim-nambi',
    //           severity: 'high',
    //           snykInstallation: 'Snyk@latest',
    //           snykTokenId: 'Snyk_sec_token',
    //           //targetFile: 'frontend/',
    //           failOnIssues: 'true'
    //         )	
    //     }
    // }
    stage("Unit Testing"){
        steps{
            dir('frontend'){
                // sh 'npm test' 
                sh """
                echo "unit Testing frontend"
                """
            }

            dir('backend'){
                // sh 'npm test' 
                sh """
                echo "unit Testing Backend"
                """
            }
        }
    }

    stage("Docker Login"){
        // when {
        //     branch 'main'
        // }
        steps{
            withCredentials([usernamePassword(credentialsId: 'Dockerhub-credentials', passwordVariable: 'PWD', usernameVariable: 'USER')]) {
                sh "docker login -u ${USER} -p ${PWD}"
            }
        }
    }

    stage("Docker Build and push"){
        // when {
        //     branch 'main'
        // }
        steps{
            dir('backend'){
                sh 'docker build -t nimnambi/testbackend:${BUILD_VERSION} .' 
                sh 'docker push nimnambi/testbackend:${BUILD_VERSION}'
            }
        }
    }

    stage("Docker Build and push"){
        // when {
        //     branch 'main'
        // }
        steps{
            dir('Deployment'){
                sh 'ansible-playbook apply.yaml' 
            }
        }
    }
 }
}