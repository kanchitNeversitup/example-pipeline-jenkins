# example-pipeline-jenkins
example code for pipeline jenkins


1. run build image dockerfile.jenkins-custom

docker build -t jenkins-custom -f dockerfile.jenkins-custom .


2. run container using jenkins-custom image 

docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080 -p 50000:50000  --name jenkins-custom-container jenkins-custom

3. set permisson

docker exec -d -u root jenkins-custom-container chmod 777 /var/run/docker.sock


using webhook
{url}/github-webhook/

add plug-in jenkins shoud restart docker containner
plug-in -> docker