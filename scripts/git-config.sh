#!/usr/bin/env bash

# Encerra o script em caso de erro
set -euo pipefail

# Verifica se o comando está sendo executado dentro de um repositório Git
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Erro: este comando deve ser executado dentro de um repositório Git." >&2
    exit 1
fi

ARQUIVO_CONFIG=".git-config"

# Na primeira execução, solicita os dados e cria o arquivo de configuração
if [[ ! -f "$ARQUIVO_CONFIG" ]]; then
    echo "Configuração do Git não encontrada."
    echo

    read -rp "Nome: " GIT_USER_NAME
    read -rp "E-mail: " GIT_USER_EMAIL

    if [[ -z "$GIT_USER_NAME" ]]; then
        echo "Erro: o nome não pode ser vazio." >&2
        exit 1
    fi

    if [[ -z "$GIT_USER_EMAIL" ]]; then
        echo "Erro: o e-mail não pode ser vazio." >&2
        exit 1
    fi

    cat > "$ARQUIVO_CONFIG" <<EOF
GIT_USER_NAME="$GIT_USER_NAME"
GIT_USER_EMAIL="$GIT_USER_EMAIL"
EOF

    echo
    echo "Arquivo $ARQUIVO_CONFIG criado."
    echo "Faça commit desse arquivo para reutilizar a configuração em outros clones."
    echo
fi

# Carrega as configurações armazenadas
source "$ARQUIVO_CONFIG"

# Verifica se as variáveis necessárias foram definidas
if [[ -z "${GIT_USER_NAME:-}" ]]; then
    echo "Erro: GIT_USER_NAME não foi definido em $ARQUIVO_CONFIG." >&2
    exit 1
fi

if [[ -z "${GIT_USER_EMAIL:-}" ]]; then
    echo "Erro: GIT_USER_EMAIL não foi definido em $ARQUIVO_CONFIG." >&2
    exit 1
fi

# Aplica as configurações somente ao repositório atual
git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"
git config core.editor vim

echo "Configurações locais do Git aplicadas:"
echo
echo "  user.name  = $(git config user.name)"
echo "  user.email = $(git config user.email)"
echo "  core.editor = $(git config core.editor)"