import random
import string

# ------------------------
# GERADOR DE SENHAS
# ------------------------
def gerar_senha(tamanho=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation
    senha = ''.join(random.choice(caracteres) for _ in range(tamanho))
    return senha

# ------------------------
# AVALIADOR DE SENHAS
# ------------------------
def avaliar_senha(senha):
    pontos = 0

    # Comprimento
    if len(senha) >= 8:
        pontos += 1
    if len(senha) >= 12:
        pontos += 1

    # Letras maiúsculas e minúsculas
    if any(c.islower() for c in senha):
        pontos += 1
    if any(c.isupper() for c in senha):
        pontos += 1

    # Números
    if any(c.isdigit() for c in senha):
        pontos += 1

    # Símbolos
    if any(c in string.punctuation for c in senha):
        pontos += 1

    # Avaliação final
    if pontos <= 2:
        return "Senha fraca"
    elif pontos == 3 or pontos == 4:
        return "Senha média"
    elif pontos == 5:
        return "Senha forte"
    else:
        return "Senha muito forte"

# ------------------------
# MENU PRINCIPAL
# ------------------------
def menu():
    while True:
        print("\n=== MENU PRINCIPAL ===")
        print("1 - Gerar senha")
        print("2 - Avaliar senha")
        print("3 - Sair")

        escolha = input("Escolha uma opção: ")

        if escolha == "1":
            try:
                tamanho = int(input("Digite o tamanho da senha: "))
                senha = gerar_senha(tamanho)
                print("\nSenha gerada:")
                print(senha)
            except ValueError:
                print("Por favor, digite um número válido.")

        elif escolha == "2":
            senha = input("Digite a senha que deseja avaliar: ")
            resultado = avaliar_senha(senha)
            print("\nAvaliação:")
            print(resultado)

        elif escolha == "3":
            print("Encerrando...")
            break

        else:
            print("Opção inválida! Tente novamente.")

# ------------------------
# INICIO DO PROGRAMA
# ------------------------
if __name__ == "__main__":
    menu()
