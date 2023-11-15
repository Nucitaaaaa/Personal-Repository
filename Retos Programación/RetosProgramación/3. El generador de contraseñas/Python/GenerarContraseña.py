
import random as r

while True:
    print('\n\n--- Bienvenido al generador de contraseñas ---')

    lowerCase = 'abcdefghijklmopqrstuvwxyz'
    upperCase = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'
    nums = '1234567890'
    symbols = '#$%&()*+,-./:;<=>?@[]^_`{|}~'
    password = ''

    mayus = str(input('\n- Desea que se incluyan mayusculas en su contraseña? (y/n): '))
    num = str(input('\n- Desea que se incluyan numeros en su contraseña? (y/n): '))
    sym = str(input('\n- Desea que se incluya simbolos en su contraseña? (y/n): '))

    lon = int(input('\n\n- De cuantos caracteres desea su contraseña? (min: 8 max: 16): '))

    opc = lowerCase
    opc += upperCase if mayus.lower() == 'y' else ""
    opc += nums if num.lower() == 'y' else ""
    opc += symbols if sym.lower() == 'y' else ""

    if lon > 7 and lon < 17:
        for i in range(lon):
            char = r.choice(opc)
            password += char
    else:
        print('--- Longitud de contraseña invalida ---')
        continue

    print(f'\n\n--- Su contraseña es: || {password} || ---')

    salir = str(input('\n- Quiere salir del generador de contraseñas? (y/n): '))
    if salir.lower() == 'y':
        break 