# Running Spark NLP in Docker Container

This repository is to show how to setup a docker environment for running [Spark NLP](https://www.johnsnowlabs.com/spark-nlp) in docker container. It is based on the [Spark NLP Docker image](https://hub.docker.com/r/johnsnowlabs/spark-nlp-workshop) with the following modifications:
* removed tutorials and related notebooks and data files
* replaced Spark NLP 2.4.5 with Spark NLP 2.5.1
* adjusted docker hub username 
* adjusted the home directory name in docker container
* added the command line --volumn option to map the current host direcrory to the home directory in docker container
* removed Jupyter notebook configuration

## Docker setup

Method 1- Get the existing docker image for spark-nlp:

```bash
docker pull zhangyuefeng123/sparknlp:1.0
```

Method 2- Build a new docker image

```bash
docker build -t zhangyuefeng123/sparknlp:1.0 .
```

2- Run the image locally with port binding

```bash
 docker run -it --volume $PWD:/home/yuefeng -p 8888:8888 -p 4040:4040 zhangyuefeng123/sparknlp:1.0
```

3- Open Jupyter notebooks inside your browser by using the token printed on the console like below:

```bash
http://127.0.0.1:8888/?token=d7e598479d9f3ce5b62d6e91276d9a557f68b6e3c919ddbc
```

Once the Jupyter notebook starts, we can use it as usual. 

