import Script from 'next/script'

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/66866b5c9d7f358570d6f71d/1i1uh6p7v';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->
//https://embed.tawk.to/6082a08d62662a09efc16533/1f3v46arb';

export default function TawkToComponent() {
  return (
    <Script src="https://embed.tawk.to/6082a08d62662a09efc16533/1f3v46arb"
    strategy='lazyOnload'
    />
  )
}
