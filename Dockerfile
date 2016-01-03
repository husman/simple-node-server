FROM centos:centos6

RUN yum install -y epel-release

RUN yum install -y nodejs npm

COPY . /opt

WORKDIR /opt

EXPOSE 9090

CMD node server.js