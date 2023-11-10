
def partidoTenis(secuencia):
    p1 = 0
    p2 = 0

    for i in secuencia:
        print(f'Marcador: {p1}:{p2}')
        if p1 == 4 and p2 == 4:
            if p1 == 6 or p2 == 6:
                break
            elif i.lower() == 'p1':
                p1 += 1
            elif i.lower() == 'p2':
                p2 += 1
        
        if i.lower() == 'p1':
                p1 += 1
        elif i.lower() == 'p2':
                p2 += 1
        
        if  p1 > 4 and p2 < p1:
            break
        elif p2 > 4 and p1 < p2:
            break
        
    if p1 > p2:
        print(f'El ganador es P1')
    else:
        print(f'El ganador es P2')

partidoTenis(['P1', 'P2', 'P1', 'P2', 'P1', 'P2', 'P1', 'P2','P1','P2','P2'])