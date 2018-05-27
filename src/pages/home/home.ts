import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array <any>;
  _item: Array <any>;
  constructor(
    public navCtrl: NavController, 
    public Api: ApiProvider, 
    private barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController
  ) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [{"api_id":"1","title":"\u0e1e\u0e23\u0e30\u0e1a\u0e23\u0e21\u0e2b\u0e32\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07","detail":"","images":["a111.jpg","a112.jpg","a113.jpg"],"lat":"13.7500301","lng":"100.4890995"},{"api_id":"2","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e40\u0e14\u0e34\u0e21","detail":"","images":["b111.jpg","b112.jpg","b113.jpg"],"lat":"13.7500299","lng":"100.4825334"},{"api_id":"3","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e1a\u0e27\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e21\u0e07\u0e04\u0e25(\u0e27\u0e31\u0e07\u0e2b\u0e19\u0e49\u0e32)","detail":"","images":["c111.jpg","c112.jpg","c113.jpg"],"lat":"13.7757799","lng":"100.4980087"},{"api_id":"4","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e1a\u0e27\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e20\u0e34\u0e21\u0e38\u0e02(\u0e27\u0e31\u0e07\u0e2b\u0e25\u0e31\u0e07)","detail":"","images":["d111.jpg","d112.jpg","d113.jpg"],"lat":"13.7570678","lng":"100.4843034"},{"api_id":"5","title":"\u0e27\u0e31\u0e07\u0e17\u0e48\u0e32\u0e1e\u0e23\u0e30","detail":"","images":["e111.jpg","e112.jpg","e113.jpg"],"lat":"13.7526495","lng":"100.4870796"},{"api_id":"6","title":"\u0e27\u0e31\u0e07\u0e23\u0e34\u0e21\u0e27\u0e31\u0e14\u0e42\u0e1e\u0e18\u0e34\u0e4c","detail":"","images":["f111.jpg","f112.jpg","f113.jpg"],"lat":"13.7468985","lng":"100.4893578"},{"api_id":"7","title":"\u0e27\u0e31\u0e07\u0e1a\u0e49\u0e32\u0e19\u0e2b\u0e21\u0e49\u0e2d","detail":"","images":["gg111.jpg","g112.jpg","g113.jpg"],"lat":"13.7459022","lng":"100.4944807"},{"api_id":"8","title":"\u0e27\u0e31\u0e07\u0e23\u0e34\u0e21\u0e04\u0e25\u0e2d\u0e07\u0e1a\u0e32\u0e07\u0e25\u0e33\u0e1e\u0e39","detail":"","images":["h111.jpg","h112.jpg","h113.jpg"],"lat":"13.7579843","lng":"100.5112676"},{"api_id":"9","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e2a\u0e23\u0e32\u0e0d\u0e23\u0e21\u0e22\u0e4c","detail":"","images":["i111.jpg","i112.jpg","i113.jpg"],"lat":"13.7504499","lng":"100.4921814"},{"api_id":"10","title":"\u0e27\u0e31\u0e07\u0e1a\u0e39\u0e23\u0e1e\u0e32\u0e20\u0e34\u0e23\u0e21\u0e22\u0e4c","detail":"","images":["j111.jpg","j112.jpg","j113.jpg"],"lat":"13.7435651","lng":"100.4945436"},{"api_id":"11","title":"\u0e27\u0e31\u0e07\u0e01\u0e23\u0e21\u0e1e\u0e23\u0e30\u0e19\u0e23\u0e32\u0e18\u0e34\u0e1b\u0e1b\u0e23\u0e30\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e1e\u0e07\u0e28\u0e4c","detail":"","images":["k111.jpg","k112.jpg","k113.jpg"],"lat":"13.7526412","lng":"100.4972033"},{"api_id":"12","title":"\u0e27\u0e31\u0e07\u0e1a\u0e32\u0e07\u0e02\u0e38\u0e19\u0e1e\u0e23\u0e2b\u0e21","detail":"","images":["l111.jpg","l112.jpg","l113.jpg"],"lat":"13.7684579","lng":"100.4974962"},{"api_id":"13","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e14\u0e38\u0e2a\u0e34\u0e15","detail":"","images":["m111.jpg","m112.jpg","m113.jpg"],"lat":"13.7765053","lng":"100.5005320"},{"api_id":"14","title":"\u0e2a\u0e27\u0e19\u0e2a\u0e38\u0e19\u0e31\u0e19\u0e17\u0e32","detail":"","images":["n111.jpg","n112.jpg","n113.jpg"],"lat":"13.7769632","lng":"100.5065958"},{"api_id":"15","title":"\u0e1e\u0e23\u0e30\u0e23\u0e32\u0e0a\u0e27\u0e31\u0e07\u0e1e\u0e0d\u0e32\u0e44\u0e17","detail":"","images":["o111.jpg","o112.jpg","o113.jpg"],"lat":"13.7686261","lng":"100.5329005"},{"api_id":"16","title":"\u0e27\u0e31\u0e07\u0e19\u0e32\u0e07\u0e40\u0e25\u0e34\u0e49\u0e07","detail":"","images":["p111.jpg","p112.jpg","p113.jpg"],"lat":"13.7706389","lng":"100.5022800"},{"api_id":"17","title":"\u0e15\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e08\u0e34\u0e15\u0e23\u0e25\u0e14\u0e32\u0e27\u0e31\u0e07\u0e1b\u0e32\u0e23\u0e38\u0e2a\u0e01\u0e27\u0e31\u0e19","detail":"","images":["q111.jpg","q112.jpg","q113.jpg"],"lat":"13.7675566","lng":"100.5081755"},{"api_id":"18","title":"\u0e27\u0e31\u0e07\u0e1b\u0e32\u0e23\u0e38\u0e2a\u0e01\u0e27\u0e31\u0e19","detail":"","images":["r111.jpg","r112.jpg","r113.jpg"],"lat":"13.7680542","lng":"100.5081755"},{"api_id":"19","title":"\u0e27\u0e31\u0e07\u0e08\u0e31\u0e19\u0e17\u0e23\u0e40\u0e01\u0e29\u0e21","detail":"","images":["s111.jpg","s112.jpg","s113.jpg"],"lat":"14.0653190","lng":"100.2616631"},{"api_id":"20","title":"\u0e27\u0e31\u0e07\u0e27\u0e23\u0e14\u0e34\u0e28","detail":"","images":["t111.jpg","t112.jpg","t113.jpg"],"lat":"13.7556527","lng":"100.5107040"},{"api_id":"21","title":"\u0e27\u0e31\u0e07\u0e40\u0e17\u0e27\u0e30\u0e40\u0e27\u0e2a\u0e21\u0e4c","detail":"","images":["u111.jpg","u112.jpg","u113.jpg"],"lat":"13.7678970","lng":"100.5009637"},{"api_id":"22","title":"\u0e15\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e1b\u0e25\u0e32\u0e22\u0e40\u0e19\u0e34\u0e19","detail":"","images":["v111.jpg","v112.jpg","v113.jpg"],"lat":"13.7211939","lng":"100.5515219"},{"api_id":"23","title":"\u0e27\u0e31\u0e07\u0e2a\u0e27\u0e19\u0e1c\u0e31\u0e01\u0e01\u0e32\u0e14","detail":"","images":["w111.jpg","w112.jpg","w113.jpg"],"lat":"13.7568933","lng":"100.5354011"},{"api_id":"24","title":"\u0e27\u0e31\u0e07\u0e2a\u0e23\u0e30\u0e1b\u0e17\u0e38\u0e21","detail":"","images":["x111.jpg","x112.jpg","x113.jpg"],"lat":"13.7482025","lng":"100.5310779"}]
    // this.Api.getWang().then( (data: any) => {
    //   this.items = data;
    // })   
  }
  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    let val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.indexOf(val) > -1);
      })
    }else{
      this.initializeItems();
    }
  }
  goToOtherPage(_item) {
    this.navCtrl.push(DetailPage, { item: _item })
  }
  scanCode() {
    this.barcodeScanner.scan().then(result => {
      let alert = this.alertCtrl.create({
        title: 'Low battery',
        subTitle: "Result: " + result.text + "\n" +
        "Format: " + result.format + "\n" +
        "Cancelled: " + result.cancelled,
        buttons: ['Dismiss']
      });
      alert.present();    
      this.navCtrl.push(DetailPage, { item: result.text })
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
