
lenguajeHacker = { 'a':'4', 'b':'l3', 'c':'[', 'd':')','e':'3', 'f':'|=', 'g':'&', 'h':'#', 'i':'1', 'j':'_|', 'k':'>|', 'l':'7', 'm':'|V|', 'n':'^/', 'o':'0', 'p':'|*', 'q':'()_', 'r':'I2', 's':'5', 't':'+', 'u':'(_)', 'v':'\/', 'w': 'VV', 'x':'><', 'y':'`/', 'z':'2'}

print('Hola, Bienvenido al traductor de Español a Hacker :D\n')

def traductor(word):
    traduccion = ""
    
    for i in word:
        if i == " ":
            traduccion += " "
            
        for j,k in lenguajeHacker.items():
            if i.lower() == j:
                traduccion += k      

    print(f'Texto normal:\n{word}\n\nTexto traducido:\n{traduccion}')
    
traductor(str(input('Ingrese el texto que quiere traducir a lenguaje Hacker: ')))


