import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class ECommerceProductOrderBy extends LightningElement {
    ICONOS_PRODUCTOS =ICONOS_PRODUCTOS ='https://ecommerce-starmedica.cs65.force.com/file-asset/IconosBusquedaProductos?oid=00D0m0000001wlQ&';
    arrowdown =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/Icondown.svg#downarrow1`;
    connectedCallback(){
        loadStyle(this, "../RobotoBlack.css")
        .then(res=>{
            console.log('Fuentes cargadas')
        })
    }
}