import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class ECommerceProductOrderBy extends LightningElement {
    ICONOS_PRODUCTOS ='../IconosBusquedaProductos.zip';
    arrowdown =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/Icondown.svg#downarrow1`;
    connectedCallback(){
        loadStyle(this, "../RobotoBlack.css")
        .then(res=>{
            console.log('Fuentes cargadas')
        })
    }
}