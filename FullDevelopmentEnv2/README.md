# Environment details

## List of software installed

- CentOS 7
- MongoDB 4.2.13
- Redis 6.2.1
- RabbitMQ 3.8.14 + Erlang 23.2.3
- ELK stack 7.12

## Forwarded ports

- 27017 (MongoDB)
- 6379 (Redis)
- 5672 (RabbitMQ)
- 15672 (RabbitMQ management)
- 9200 (ElasticSearch) 
- 5601 (Kibana)

## Access

- MongoDB mongoadmin/mongoadminpass
- RabbitMQ mqadmin/mqadminpass
- Redis - no auth
- ElasticSearch - no auth
- Kibana - no auth

> This environment comes with a logstash configuration to consume messages from queue 
"transactions" on RabbitMQ and store on transactions-%{+YYYY.MM.dd} index on ElasticSearch. 
