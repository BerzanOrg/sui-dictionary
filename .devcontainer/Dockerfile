FROM debian:bookworm-slim

# Install dependencies.
RUN apt update && apt install git fish wget curl nodejs npm -y

# Copy Fish shell configuration.
COPY config.fish /root/.config/fish/

# Install Sui.
RUN set -ex \
    && wget https://github.com/MystenLabs/sui/releases/download/devnet-v1.10.1/sui-devnet-v1.10.1-ubuntu-x86_64.tgz \
    && tar -xf sui-devnet-v1.10.1-ubuntu-x86_64.tgz \
    && rm sui-devnet-v1.10.1-ubuntu-x86_64.tgz \
    && mv target/release/sui-ubuntu-x86_64 /usr/local/bin/sui \
    && rm -rf target 
    
