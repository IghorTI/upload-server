Comandos executados para iniciar um projeto:

pnpm init

pnpm i typescript @types/node tsx -D

pnpm i @biomejs/biome -D

pnpm i fastify @fastify/cors zod fastify-type-provider-zod

pnpm tsc --init

https://github.com/tsconfig/bases
Obs: Se basear na versão do Node, copiar o tsconfig.json e substituir na aplicação.


Alterar o tsconfig para: 

{
  "$schema": "https://www.schemastore.org/tsconfig",
  "_version": "22.0.0",

  "compilerOptions": {
    "lib": ["es2024", "ESNext.Array", "ESNext.Collection", "ESNext.Iterator"],
    "module": "esnext",
    "target": "esnext",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "bundler"
  },
  "paths": {
    "@/*" : ["./src/*"]
  }
}


Alterar o package.json para 

{
	"type": "module",
	"scripts": {
		"dev": "tsx watch src/infra/http/server.ts"
	},
	"devDependencies": {
		"@biomejs/biome": "^2.3.11",
		"@types/node": "^25.0.9",
		"tsx": "^4.21.0",
		"typescript": "^5.9.3"
	},
	"dependencies": {
		"@fastify/cors": "^11.2.0",
		"fastify": "^5.7.1",
		"fastify-type-provider-zod": "^6.1.0",
		"zod": "^4.3.5"
	}
}


pnpm biome -h

pnpm biome init 

Alterar o biome.json para: 

{
	"$schema": "https://biomejs.dev/schemas/2.3.11/schema.json",
	"vcs": {
		"enabled": false,
		"clientKind": "git",
		"useIgnoreFile": false
	},
	"files": {
		"ignoreUnknown": false
	},
	"formatter": {
		"enabled": true,
		"indentStyle": "space",
		"indentWidth": 2,
		"lineWidth": 80
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	},
	"javascript": {
		"formatter": {
			"quoteStyle": "single",
			"semicolons": "asNeeded",
			"arrowParentheses": "asNeeded",
			"jsxQuoteStyle": "double",
			"trailingCommas": "es5"
		}
	},
	"assist": {
		"enabled": true,
		"actions": {
			"source": {
				"organizeImports": "on"
			}
		}
	}
}


> settings Preferences: Open Workspace Settings (JSON)

No arquivo settings.json alterar para: 

{
    "editor.formatOnSave": true,
    "[typescript]": {
        "editor.defaultFormatter": "biomejs.biome"
    },
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "explicit"
    }
}

Criar o .gitignore:

node_modules
.env*
dist

# Documentação das Rotas

pnpm i @fastify/swagger @fastify/swagger-ui

pnpm i @fastify/multipart


# Frameword de Teste

pnpm i vitest -D

pnpm i vite-tsconfig-paths -D

pnpm i dotenv-cli -D

# ORM

pnpm i drizzle-orm

pnpm i drizzle-kit -D

pnpm i drizzle-kit studio

# Drive do postgress

pnpm i postgres

# ID 

pnpm i uuidv7

# CLOUADFLARE R2

pnpm i @aws-sdk/lib-storage @aws-sdk/client-s3