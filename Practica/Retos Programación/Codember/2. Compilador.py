
def compilador(char):
    msg = 0

    for i in char:
        if i == '#':
            msg += 1
        elif i == '@':
            msg -= 1
        elif i == '*':
            msg *= msg
        elif i == '&':
            print(msg, end='')
        else:
            continue

compilador(str(input('Ingrese su mensaje a compilar aqui: ')))