import { LightningElement ,api, track} from 'lwc';
import  'c/nsmjquery';
export default class NsmGenericSearchBar extends LightningElement {
    @api percentage;

    get style() {
        return `width: ${this.percentage}%`;
    }


    connectedCallback(){
        this.picklistvals = this.setvalues;
        console.log(this.picklistvals)
        if(this.sortAsc){
            this.picklistvals.sort();
        }else if(this.sortDesc){
            this.picklistvals.sort();
            this.picklistvals.reverse();
        }
        
    }

    renderedCallback(){
        
            this.loadstyles();

    }

    loadstyles(){
        let divisor =  this.nodivisor;
        console.log(divisor)
       if(divisor === "true"){
         let els = this.template.querySelector(".custom-select-trigger")
            $(els).addClass("nodivisor")
       }
         
    }


    handleselect(ev){
       let elem = ev.target
        console.log( $(elem)
              .parents(".custom-select-wrapper"))
            $(elem)
              .parents(".custom-select-wrapper")
              .find("select")
              .val($(elem).data("value"));
            $(elem)
              .parents(".custom-options")
              .find(".custom-option")
              .removeClass("selection");
            $(elem).addClass("selection");
            $(elem).parents(".custom-select").removeClass("opened");
            $(elem)
              .parents(".custom-select")
              .find(".custom-select-trigger")
              .text($(elem).text());

            $(elem).parents(".custom-select")
            .find(".custom-select-trigger")
            .removeClass("triggeropen");
    }

     
    
    handleclicktrigger(ev){
        $(ev.target)
        .parents(".custom-select")
        .toggleClass("opened");

        $(ev.target).addClass("triggeropen");
    }

    handlechange(ev){
        let value = ev.target.value;
        this.dispatchEvent(new CustomEvent('handlechange', { detail: value }));
    }
}