import { useRef, useState } from "react"

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('100')
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroPrevio: string) => {

        // No aceptar doble puntos
        if (numero.includes('.') && numeroPrevio === '.') return

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // -Punto decimal
            if (numeroPrevio === '.') {
                setNumero(numero + numeroPrevio)
                // Evaluar si es otro cero y hay un punto
            } else if (numeroPrevio === '0' && numero.includes('.')) {
                setNumero(numero + numeroPrevio)
                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroPrevio !== "0" && !numero.includes('.')) {
                setNumero(numeroPrevio)
                // Evitar 0.000
            } else if (numeroPrevio === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroPrevio)
            }

        } else {
            setNumero(numero + numeroPrevio)
        }
    }

    const postivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const deleteNumero = () => {
        if (numero.length == 2) {
            if (numero.startsWith('-')) {
                setNumero('0')
            } else {
                setNumero(numero.slice(0, -1))
            }
        } else if (numero.length == 1) {
            setNumero('0')
        } else {
            setNumero(numero.slice(0, -1))
        }
    }

    const cambiarNumeroPorAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }

        setNumero('0')
    }

    const btnSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const btnRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }

    const calcular = () => {
        const numero1 = Number(numero)
        const numero2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`)
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`)
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`)
                break;

            default:
                break;
        }

        setNumeroAnterior('0')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        postivoNegativo,
        deleteNumero,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        armarNumero,
        calcular
    }
}