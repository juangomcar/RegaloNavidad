import turtle as tur

class DecoratedFlower:
    def __init__(self):
        self.screen = tur.Screen()
        self.screen.bgcolor("darkgrey")
        self.tur = tur.Turtle()
        self.tur.speed(0)  # Velocidad máxima para dibujar rápido

    def draw_flower(self):
        tur = self.tur
        tur.penup()
        tur.goto(200, -100)  # Posición inicial a la derecha de la pantalla
        tur.pendown()

        # Dibujar la flor
        tur.fillcolor("yellow")
        tur.begin_fill()
        tur.circle(10, 180)
        tur.circle(25, 110)
        tur.left(50)
        tur.circle(60, 45)
        tur.circle(20, 170)
        tur.right(24)
        tur.forward(30)
        tur.left(10)
        tur.circle(30, 110)
        tur.forward(20)
        tur.left(40)
        tur.circle(90, 70)
        tur.circle(30, 150)
        tur.right(30)
        tur.forward(15)
        tur.circle(80, 90)
        tur.left(15)
        tur.forward(45)
        tur.right(165)
        tur.forward(20)
        tur.left(155)
        tur.circle(150, 80)
        tur.left(50)
        tur.circle(150, 90)
        tur.end_fill()

        # Dibujar las hojas
        tur.left(150)
        tur.circle(-90, 70)
        tur.left(20)
        tur.circle(75, 105)
        tur.setheading(60)
        tur.circle(80, 98)
        tur.circle(-90, 40)
        tur.left(180)
        tur.circle(90, 40)
        tur.circle(-80, 98)
        tur.setheading(-83)

        tur.forward(30)
        tur.left(90)
        tur.forward(25)
        tur.left(45)
        tur.fillcolor("dark green")
        tur.begin_fill()
        tur.circle(-80, 90)
        tur.right(90)
        tur.circle(-80, 90)
        tur.end_fill()
        tur.right(135)
        tur.forward(60)
        tur.left(180)
        tur.forward(85)
        tur.left(90)
        tur.forward(80)

        tur.right(90)
        tur.right(45)
        tur.fillcolor("green")
        tur.begin_fill()
        tur.circle(80, 90)
        tur.left(90)
        tur.circle(80, 90)
        tur.end_fill()
        tur.left(135)
        tur.forward(60)
        tur.left(180)
        tur.forward(60)
        tur.right(90)
        tur.circle(200, 60)

    def add_text_and_heart(self):
        tur = self.tur

        # Agregar texto
        tur.penup()
        tur.goto(200, 200)  # Ajustar posición del texto
        tur.pendown()
        tur.color("black")
        tur.write("PARA TI HERMOSA!!", align="center", font=("Stencil", 18, "italic"))

        # Dibujar corazón
        tur.penup()
        tur.goto(350, 250)  # Cambia las coordenadas según tus preferencias
        tur.pendown()
        tur.fillcolor("red")
        tur.begin_fill()
        tur.pensize(1)

        # Mitad izquierda del corazón
        tur.left(140)
        tur.forward(40)
        for _ in range(200):
            tur.right(1)
            tur.forward(0.3)

        # Mitad derecha del corazón
        tur.left(120)
        for _ in range(200):
            tur.right(1)
            tur.forward(0.3)

        tur.forward(40)
        tur.end_fill()

    def draw(self):
        self.draw_flower()
        self.add_text_and_heart()
        self.tur.hideturtle()
        self.screen.mainloop()


# Crear y llamar a la flor
flower = DecoratedFlower()
flower.draw()
