# Expo Cli for Docker

This repository is for building a new Expo Cli docker image. It is based on the following great work: 
* C.V. Putten, https://github.com/byCedric/expo-cli-images 
* H. Majid, https://medium.com/@hmajid2301/running-expo-react-native-in-docker-ff9c4f2a4388

The image to be built shall contain all necessary libraries to perform all commands of the Expo CLI.

## Supported versions

image                 | node  | expo  | status
---                   | ---   | ---   | ---
`zhangyuefeng123/expo-cli:3` | `13`  | `3`   | **latest**

## What's inside the Dokerfile?

The entry point of this image forwards to the [Expo CLI][link-cli].
It automatically authenticates when both `EXPO_CLI_USERNAME` and `EXPO_CLI_PASSWORD` are defined.
When these environment variables are undefined, it skips this step and forwards the command directly to Expo.

As Majid pointed out, the REACT_NATIVE_PACKAGER_HOSTNAME environment variable in Dockerfile is very important because it sets which IP address Expo (cli) is running on, this is the IP Address your phone will try to connect to. If this is not set correctly, you’ll run into an error for the following reason. When you run in a Docker container you cannot connect to it because it’s trying to use the Docker IP address (one of the ones starting with 172.xxx.xxx.xxx). You can work out the correct IP address on Mac by using the ifconfig command. The IP address with en0 should be the host IP (10.0.1.198 on my Mac laptop).

## How to build a new image?

You can build a custom version of both node and expo-cli as below.
It accepts both `NODE_VERSION` and `EXPO_VERSION` as build arguments.

```bash
# create a node 10 and expo cli 2 image
$ docker build . \
    --build-arg NODE_VERSION=13 \
    --build-arg EXPO_VERSION=3 \
    --tag awsomeorg/expo-cli
```

## How to run the new image?

In order to run the new image in a container, you should go to your Expo project directory first and then run the following command:

```bash
# perform authenticated expo commands directly
$ docker run \
    --tty \
    --env EXPO_CLI_USERNAME=byyuefeng \
    --env EXPO_CLI_PASSWORD=mypass \
    awsomeorg/expo-cli publish

# mount your project as volume and use the cli manually
$ docker run \
    --tty \
    --interactive \
    --workdir /code \
    --volume $PWD:/code \
    --env EXPO_CLI_USERNAME=byyuefeng \
    --env EXPO_CLI_PASSWORD=mypass \
    -p 19000:19000 -p 19001:19001 \
    awsomeorg/expo-cli bash
```

## How to start Expo project?

Since the docker container workdir is mapped to the current directory (your Expo project location) on the host machine, you can start the Expo project as usual:

```bash
$ expo start
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

--- ---

<p align="center">
    with :heart: <a href="https://bycedric.com" target="_blank">byCedric</a>
</p>

[link-cli]: https://docs.expo.io/versions/latest/workflow/expo-cli
[link-docs]: https://docs.expo.io/versions/latest/guides/setting-up-continuous-integration
