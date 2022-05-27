import { LightningElement , track} from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class ECommerceSearchProdctsContainer extends LightningElement {
    ICONOS_PRODUCTOS= "../IconosBusquedaProductos.zip";
    hospitales =[{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"},{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"},{value:"Morelia", label:"Morelia"}, {value:"Tampico", label:"Tampico"}]
    categorias = [{value:"Maternidad", label:"Maternidad"}, {value:"Covid-19", label:"Covid-19"}, {value:"Checkups", label:"Checkups"}, {value:"Imagenología", label:"Imagenología"}, {value:"Laboratorio", label:"Laboratorio"}]
    subcategorias = [{value:"Paquetes", label:"Tamices"}]
    noborder = true
    filtergray = `${ICONOS_PRODUCTOS}pathinarchive=Expanded/filtergray.svg#filtergray1`;
    search = `${ICONOS_PRODUCTOS}pathinarchive=Expanded/search.svg#search1`
    rightarrow =`${ICONOS_PRODUCTOS}pathinarchive=Expanded/rightarrow.svg#rightarrow1`;
    connectedCallback(){
        loadStyle(this,  "../RobotoBlack.css")
        .then(res=>{
            console.log('Fuentes cargadas')
        })
    }
}