pipeline {
  agent any
    
  tools {
      nodejs "node"
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
            dir('Frontend'){
                sh 'npm test' 
            }

            dir('Backend'){
                sh 'npm test'
            }
        }
    }
 }
}