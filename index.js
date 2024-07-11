//# 3️⃣ Escrevendo as classes de um Jogo

class Heroi {
	constructor(nome , idade , tipo) {
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
   }
   
    atacar() {
   		let ataque;
      
        
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
         	case 'guerreiro':
            	ataque = 'espada';
                break;
            case 'monge':
            	ataque = 'artes maciais';
                break;
            case 'ninja':
            	ataque = 'shueriken';
              	break;
            default:
            	ataque = 'realizou um ataque';
           
       }
         
       console.log (`O ${this.tipo} atacou usando ${ataque}`);
       
    }                          
}

const heroi1 = new Heroi('Odin', 165, 'mago');
const heroi2 = new Heroi('Herbert', 68, 'guerreiro');
const heroi3 = new Heroi('Tavor Dosteri', 124, 'monge');
const heroi4 = new Heroi('Hattori Hanzo', 98, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();