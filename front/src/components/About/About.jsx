import React from "react";
import styles from "./About.module.css";

class About extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <>
            <div className={styles.container}>
                <p>"Soy Andrés, un apasionado de la animación y el arte digital con raíces en Michoacán, México. 
                    Después de obtener una carrera en Animación y Arte Digital y una Maestría en Diseño Multimedia, 
                    me enfrenté a un desafío laboral cuando fui despedido de mi último empleo debido al crecimiento 
                    insuficiente de la app en la que trabajaba. Dos meses de incertidumbre y búsqueda sin éxito de trabajo 
                    me llevaron a una encrucijada, pero mi pareja me animó a seguir mi verdadera pasión: la programación. 
                    A pesar de no haber podido estudiarla anteriormente, decidí dar un giro en mi vida y me uní a Henry 
                    para aprender programación y abrirme a nuevas oportunidades laborales. Con determinación y dedicación, 
                    encontré en la programación una nueva forma de expresar mi creatividad y habilidades técnicas. 
                    Ahora, estoy emocionado por el camino que he tomado, buscando mejorar mi calidad de vida y enfrentando 
                    el futuro con entusiasmo y una mentalidad de crecimiento constante."</p>
            </div>
            </>
        );
    }
}

export default About;