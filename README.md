### Inicializando um projeto com TypeScript

# 1. Primeiro você precisa do Node.js

```bash
node -v
```

- Caso não tenha o Node, baixe-o a partir desse link: https://nodejs.org/pt/download
- Após baixar podemos verificar a versão do Node.js com o mesmo comando `node -v`

# 2. Vamos inicializar o projeto

- Para inicializar o projeto podemos rodar o comando `npm init -y`. A flag `-y` serve para pular as perguntas do terminal

# 3. Baixar o TypeScript

- Rode o comando a seguir:

```bash
npm install typescript --save-dev
```

# 4. Inicializar o projeto com TypeScript

- Rode o comando a seguir:

```bash
npx tsc --init
```

# 5. Baixar o `ts-node-dev`

Para rodar o projeto com _hot reload_ (atualização do código sem ter que rodar no terminal novamente), podemos baixar o `ts-node-dev`, como dependência de desenvolvimento,pois como o TypeScript irá ser convertido para JavaScript, não precisaremos nos preocupar com atualização de um código em TypeScript no cenário de produção.

```bash
npm install ts-node-dev -D
```

# 6. Definir o comando de execução do projeto

Precisamos definir o comando que irá rodar o projeto para que de fato o código seja compilado.

```json
...
"start": "ts-node-dev --respawn --transpileOnly src/index.ts" 
...
```

- `--respawn`: inicializa o código novamente toda vez que ele é alterado
- `--transpileOnly`: transpila o código sem realizar a verificação de tipo
