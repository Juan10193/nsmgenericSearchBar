import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class ECommerceProductCard extends LightningElement {
    ICONOS_PRODUCTOS ='../IconosBusquedaProductos.zip';
    logoMaternidad =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/maternidad-expanded.svg#Capa_1`
    helpIcon =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/QUESTION-circle.svg#question1`;

    connectedCallback(){
        loadStyle(this, "../RobotoBlack.css")
        .then(res=>{
            console.log('Fuentes cargadas')
        })
    }
    
}