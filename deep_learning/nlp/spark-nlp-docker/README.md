# Docker Environment for Spark NLP

This repository is to show how to setup a docker environment for using [Spark NLP](https://www.johnsnowlabs.com/spark-nlp). It is based on the [Spark NLP Docker image](https://hub.docker.com/r/johnsnowlabs/spark-nlp-workshop).

The Docker Hub user name (e.g., zhangyuefeng123) and home path (e.g., /home/yuefeng) need to be adjusted appropriately.

## Docker setup

Method 1- Get the existing docker image for spark-nlp:

```bash
docker pull zhangyuefeng123/nlp:1.0
```

Method 2- Build a new docker image

```bash
docker build -t zhangyuefeng123/nlp:1.0 .
```

2- Run the image locally with port binding

```bash
 docker run -it --volume $PWD:/home/yuefeng -p 8888:8888 -p 4040:4040 zhangyuefeng123/nlp:1.0
```

3- Open Jupyter notebooks inside your browser by using the token printed on the console like below:

```bash
http://127.0.0.1:8888/?token=d7e598479d9f3ce5b62d6e91276d9a557f68b6e3c919ddbc
```

Once the Jupyter notebook starts, we can use it as usual. 

