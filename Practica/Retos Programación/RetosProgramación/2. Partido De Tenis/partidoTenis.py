
def partido(secuencia):
    puntajes = {
    '0:0': 'Love - Love','1:0': '15 - Love','0:1': 'Love - 15','1:1': '15 - 15','2:0': '30 - Love','0:2': 'Love - 30','2:1': '30 - 15','1:2': '15 - 30','2:2': '30 - 30','3:0': '40 - Love','0:3': 'Love - 40','3:1': '40 - 15','1:3': '15 - 40','3:2': '40 - 30','2:3': '30 - 40','3:3': 'Deuce','4:3': 'Ventaja P1','3:4': 'Ventaja P2','4:4': 'Deuce','5:4': 'Ventaja P1','4:5': 'Ventaja P2','5:5': 'All','6:5': 'Ventaja P1','5:6': 'Ventaja P2'}

    p1 = 0
    p2 = 0

    for i in secuencia:
        marcadorActual = f'{p1}:{p2}'
        print(puntajes.get(marcadorActual, 'Deuce'))

        if p1 == 5 or p2 == 5:
            break
        elif i.lower() == 'p1':
            p1 += 1
        elif i.lower() == 'p2':
            p2 += 1
        else:
            continue

    if p1 > p2:
        print(f'\nMarcador Final: {puntajes.get(marcadorActual)}')
        print('\nEl ganador es: P1')
    elif p2 > p1:
        print(f'\nMarcador Final: {puntajes.get(marcadorActual)}')
        print('\nEl ganador es: P2')
    else:
        print('\nNo valido')


partido(['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P1'])