import { Text, View } from "react-native"
import { styles } from "../theme/appTheme"
import { Boton } from "../components/Boton"
import { useCalculadora } from "../hooks/useCalculadora"

export const CalculadoraScreen = () => {

    const { 
        numero, 
        numeroAnterior,
        limpiar, 
        postivoNegativo, 
        armarNumero, 
        deleteNumero, 
        btnSumar,
        btnRestar, 
        btnMultiplicar, 
        btnDividir, 
        calcular
 } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {(numeroAnterior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)}
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <Boton color="#9B9B9B" texto="C" accion={limpiar} />
                <Boton color="#9B9B9B" texto="+/-" accion={postivoNegativo} />
                <Boton color="#9B9B9B" texto="del" accion={deleteNumero} />
                <Boton color="#FF9427" texto="/" accion={btnDividir} />
            </View>

            <View style={styles.fila}>
                <Boton texto="7" accion={armarNumero} />
                <Boton texto="8" accion={armarNumero} />
                <Boton texto="9" accion={armarNumero} />
                <Boton color="#FF9427" texto="x" accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="4" accion={armarNumero} />
                <Boton texto="5" accion={armarNumero} />
                <Boton texto="6" accion={armarNumero} />
                <Boton color="#FF9427" texto="-" accion={btnRestar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="1" accion={armarNumero} />
                <Boton texto="2" accion={armarNumero} />
                <Boton texto="3" accion={armarNumero} />
                <Boton color="#FF9427" texto="+" accion={btnSumar} />
            </View>

            <View style={styles.fila}>
                <Boton texto="0" ancho accion={armarNumero} />
                <Boton texto="." accion={armarNumero} />
                <Boton color="#FF9427" texto="=" accion={calcular} />
            </View>
        </View>
    )
}