ARG NODE_VERSION="13"

FROM node:$NODE_VERSION

LABEL name="Expo Cli for Docker"
LABEL repository="https://github.com/yzzhang/machine-learning/tree/master/mobile_apps/expo_cli_docker"
LABEL homepage="https://github.com/yzzhang/machine-learning/tree/master/mobile_apps/expo_cli_docker"
LABEL maintainer="Yuefeng Zhang"

EXPOSE 19000
EXPOSE 19001

ENV REACT_NATIVE_PACKAGER_HOSTNAME="10.0.1.198"

ARG EXPO_VERSION="latest"

RUN yarn global add expo-cli@$EXPO_VERSION \
	&& yarn cache clean

COPY entrypoint.sh LICENSE.md README.md /

ENTRYPOINT ["/entrypoint.sh"]
CMD ["--help"]
