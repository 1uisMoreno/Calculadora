class Display{
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.tipoOperador = undefined;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos={
            sumar: "+",
            restar: "-",
            dividir: "%",
            multiplicar: "x"
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirNumero();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperador = undefined;
        this.imprimirNumero();
    }
    computar(tipo){
        this.tipoOperador !== 'igual' && this.calcular();
        this.tipoOperador = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirNumero();
    }
    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirNumero();
    }

    imprimirNumero(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperador] || ''}`;
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperador](valorAnterior,valorActual);
    }


}
