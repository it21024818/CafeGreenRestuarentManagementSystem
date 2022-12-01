<template>
    <div class="row expanded" ref="document">
    <main class="columns" id="element-to-convert">
        <div class="inner-container">
        <section class="row">
        <div class="callout large invoice-container">
            <table class="invoice">
            <tr class="header">
                <td class="">
                <img src="../assets/logo.jpg" alt="logo" width="100px"/>
                </td>
                <td class="align-right">
                <h2>Invoice</h2>
                </td>
            </tr>
            <tr class="intro">
                <td class="">
                Hello, Alex Harvey.<br><br>
                Thank you for your order.
                </td>
                <td class="text-right">
                <span class="num">Inv Num #00302</span><br>
                <span class="num">Inv Date #00302</span><br>
                    <span class="num">VAT No 942124841</span><br>
                </td>
            </tr>
            <tr class="itemdetails">
                <td colspan="2">
                <table>
                    <thead>
                    <tr>
                        <th class="desc">Item Description</th>
                        <th class="unp">Unit Price</th>
                        <th class="qty">Quantity</th>
                        <th class="amt">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="item">
                        <td class="desc">Mexican Chilli Bean </td>
                        <td class="unp">Rs. 340</td>
                        <td class="qty">10</td>
                        <td class="amt">Rs. 3400.00</td>
                    </tr>
                    </tbody>
                </table>
                </td> 
            </tr>
            <tr class="totals">
                <td></td>
                <td>
                <table>
                    <tr class="subtotal">
                    <td class="num tablePadding">Subtotal</td>
                    <td class="num">Rs. 3400.00</td>
                    </tr>
                    <tr class="fees">
                    <td class="num">Service charge</td>
                    <td class="num">Rs. 800.00</td>
                    </tr>
                    <tr class="tax">
                    <td class="num">VAT</td>
                    <td class="num">Rs. 400.20</td>
                    </tr>
                    <tr class="total">
                    <td>Total</td>
                    <td>Rs. 3600.40</td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
            
            <!-- <section class="additional-info">
            <div class="row">
            <div class="columns">
                <h5>Billing Information</h5>
                <!- <p>Alex Harvey,<br>Orderly</br>
                Derby<br>
            United Kingdom</br> --
                
            </div>
            <div class="columns">
                <h5>Payment Information</h5>
                <p>Credit Card<br>
                Card Type: Visa<br>
                &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 1234
                </p>
            </div>
            </div>
            </section> -->
            
        </div>
        </section>
        </div>
    </main>
    <v-btn class="formbtn" color="#20DC49" @click="exportToPDF">Download Invoice</v-btn>
    </div>
  
</template>

<script>

import html2pdf from "html2pdf.js";

export default {
  methods: {

    //export the invoice as a pdf
    exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"), {
				margin: 50,
  			filename: "invoice.pdf",
			});
    },
  },
};
</script>

<style lang="scss" scoped>
//fonts

@font-face {
font-family: "BrushCrush";
src: url("https://www.thefooddoctor.com/static/media/BrushCrush.43692cd0.eot");
src: url("https://www.thefooddoctor.com//static/media/BrushCrush.89984b62.woff") format("woff"),
url("https://www.thefooddoctor.com//static/media/BrushCrush.a4b4af27.ttf") format("ttf"),
}

 


// Variables
$primary-color: #6c9d20;
$secondary-color: #0b386f;
$gray:  #9b9b9b;
$light-gray: #eeeeee;
$medium-gray: #c8c3be;
$dark-gray: #96918c;
$black: #322d28;
$white: #f3f3f3;
$body-background: #ffffff;
$body-font-color: $black;

$sans: 'Montserrat', sans-serif;
$serif: 'Lora', Georgia, serif;
$brandfont: 'BrushCrush', serif; 


body {
  font-family: $sans;
  font-weight: 400;
  color: $body-font-color;
}
main {
  margin-top: 4rem;
  min-height: calc(100vh - 107px);
  .inner-container {
    max-width: 800px;
    margin: 0 auto;
  }
}

table.invoice {
  background: #fff;
  .unp {
   text-align:center;
  }
  .num {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: .8em;
  }
  tr, td {
    background: #fff;
    text-align: left;
    font-weight: 400;
    color: $body-font-color;
  }
  tr {
    &.header {
      td {
        img {
          max-width: 300px;
        }
        h2 {
          text-align: right;
          font-family: $brandfont;
          font-weight: 200;
          font-size: 2rem;
          color: $primary-color;
        }
      }
    }
    &.intro {
      td {
        &:nth-child(2) {
          text-align: right;
        }
      }
    }
    &.itemdetails {
      > td { 
        padding-top: 4rem; 
        padding-bottom: 0; 
      }
      td, th {
        &.id,
        &.qty {
          text-align: center;
        }
        &:last-child {
          text-align: right;
        }
      }
      table {
        thead, tbody {
          position: relative;
          &:after {
            content: '';
            height: 1px;
            position: absolute;
            width: 100%;
            left: 0;
            margin-top: -1px;
            background: $medium-gray;
          }
        }
      }
    }
    &.totals {
      td {
        padding-top: 0;
      }
      table {
        tr {
          td {
            padding-top:0;
            padding-bottom:0;
            &:nth-child(1) {
              font-weight: 500;
            }
            &:nth-child(2) {
              text-align: right;
              font-weight: 200;
            }
          }
          &:nth-last-child(2) {
            
            td {
              padding-bottom: .5em;
              &:last-child {
                position: relative;
                &:after {
                  content: '';
                  height: 4px;
                  width: 110%;
                  border-top: 1px solid $primary-color;
                  border-bottom: 1px solid $primary-color;
                  position: relative;
                  right: 0;
                  bottom: -.575rem;
                  display: block;
                }
              }
            }
            
          }
          &.total {
            td {
              font-size: 1.2em;
              padding-top: .5em;
              font-weight: 700;
              &:last-child {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}

.additional-info {
  h5 {
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: $brandfont; 
    color: $primary-color;
  }
}
</style>