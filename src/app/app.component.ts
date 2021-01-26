import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open';
  items = ['Products','Solutions','Pricing','Login','Get Started'];
  cards=[
    {icon:"'/assets/img/Get Paid Instantly.png'",title:"Quick cash disbursement", subtitle:"Get terms loans that your business needs within 72 hrs",class:"rectangle23",whiteText:false},
    {icon:"'/assets/img/freelancer_feature_icon_6@1.5x.png'",title:"Ace your business finances", subtitle:"Manage banking, accounting & everything in between, on one platform",class:"rectangle2",whiteText:true},
    {icon:"'/assets/img/Low interest rate.png'",title:"Low-interest rate", subtitle:"Achieve your financial goals with an amazing interest rate starting at 13% per annum",class:"rectangle19",whiteText:false},
    {icon:"'/assets/img/Covid.png'",title:"Loans to fight COVID-19", subtitle:"Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh",class:"rectangle25",whiteText:false},
    {icon:"'/assets/img/Secure Payments.png'",title:"Zero Paperwork", subtitle:"Get started instantly by submitting only your basic details & bank statements",class:"rectangle17",whiteText:false}
  ] 
}
