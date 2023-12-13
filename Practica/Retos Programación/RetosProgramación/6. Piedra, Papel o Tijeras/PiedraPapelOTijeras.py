

#   Crea un programa que calcule quien gana más partidas al piedra,
#   papel, tijera, lagarto, spock.

#   El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)

#   La función recibe un listado que contiene pares, representando cada jugada.

#   El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
#   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).

#  Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".

# Las tijeras cortan el papel.
# El papel cubre la piedra.
# La piedra aplasta el lagarto.
# El lagarto envenena a Spock.
# Spock aplasta las tijeras.
# Las tijeras decapitan el lagarto.
# El lagarto se come el papel.
# El papel refuta a Spock.
# Spock vaporiza la piedra.
# La piedra aplasta a las tijeras


def juego(jugadas):
    p1 = 0
    p2 = 0

    for jugada in jugadas:
        if jugada[0] == jugada[1]:
            continue
        elif (jugada[0] == "✂️" and jugada[1] == "📄") or (jugada[0] == "📄" and jugada[1] == "🗿") or (jugada[0] == "🗿" and jugada[1] == "🦎") or (jugada[0] == "🦎" and jugada[1] == "🖖") or (jugada[0] == "🖖" and jugada[1] == "✂️") or (jugada[0] == "✂️" and jugada[1] == "🦎") or (jugada[0] == "🦎" and jugada[1] == "📄") or (jugada[0] == "📄" and jugada[1] == "🖖") or (jugada[0] == "🖖" and jugada[1] == "🗿") or (jugada[0] == "🗿" and jugada[1] == "✂️"):
            p1 += 1
        else:
            p2 += 1

    print('Player 1') if p1 > p2 else print('Player 2') if p2 > p1 else print('Tie')


juego([("🗿","🗿"), ("🗿","🗿"), ("🗿","🗿")])