/* MCR Academy — widget QR code d'accès (mobiles). Autonome, sans dépendance. */
(function(){
  if (window.__mcrQRWidget) return; window.__mcrQRWidget = true;
  var URL = "https://mcrformations-sudo.github.io/mcr-academy/connexion.html";
  // Matrice QR 37x37 (niveau M) encodant l'URL ci-dessus — vérifiée par décodage.
  var M = [
"1111111011101110001101011110101111111","1000001011000010010010100110001000001",
"1011101010010001001011101110001011101","1011101000011111110111001101101011101",
"1011101010111100111110000100101011101","1000001000011111011001010110001000001",
"1111111010101010101010101010101111111","0000000000001011100011000110100000000",
"1001111110101011101111001010110010111","0011010100100010010011100011000111110",
"1100111000010000011000101001100101001","0010010000100011010000000001001111111",
"0100011000110010100110100000101101001","0011100010010111111000010011100011000",
"0011101011001111010111100101110011111","1100100001111100011000011011100101111",
"0110011111101110110011010101001000111","1010100100111100101011011111010101100",
"1000011111111001000010010111011000101","0100100100110100000000001100010111001",
"1101101100000011111010000010011111000","0110000101001011101101110011010010100",
"1001101111001101011010110001100101001","1101000110100101110001110001010111100",
"1101101010101111111001001000101100011","1001000010010000110110000011100011100",
"1100101001000010110110011011101010111","1001110001010101000010010000100101110",
"1010001011011100100010101100111110100","0000000011100111001110101100100010110",
"1111111010011101000111110100101010001","1000001010001111011100111101100010011",
"1011101010001101000101101011111110001","1011101011010000111001001110011000010",
"1011101001101111110111011100010010011","1000001000011010110110010001001010111",
"1111111010111011100000000000101101001"];
  function svg(){
    var n=M.length, q=4, s=8, t=(n+2*q)*s, r='';
    for(var i=0;i<n;i++){ for(var j=0;j<n;j++){ if(M[i][j]==='1'){ r+='<rect x="'+((j+q)*s)+'" y="'+((i+q)*s)+'" width="'+s+'" height="'+s+'"/>'; } } }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+t+' '+t+'" width="260" height="260" shape-rendering="crispEdges"><rect width="'+t+'" height="'+t+'" fill="#fff"/><g fill="#0b0e13">'+r+'</g></svg>';
  }
  function openModal(){
    if(document.getElementById('mcrQRm')) { document.getElementById('mcrQRm').style.display='flex'; return; }
    var o=document.createElement('div'); o.id='mcrQRm';
    o.style.cssText='position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;background:rgba(4,7,11,.82);font-family:system-ui,Segoe UI,Roboto,sans-serif;padding:20px';
    o.innerHTML='<div style="width:min(360px,92vw);background:#12161c;border:1px solid #262c34;border-radius:20px;padding:26px 24px;text-align:center;box-shadow:0 30px 80px -20px #000">'
      +'<div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#d6a338;font-weight:800">MCR Academy</div>'
      +'<h2 style="color:#e8edf2;font-size:18px;margin:8px 0 4px">Accès mobile</h2>'
      +'<p style="color:#9aa6b2;font-size:13px;margin:0 0 16px;line-height:1.5">Scannez avec l\'appareil photo du téléphone pour ouvrir la plateforme.</p>'
      +'<div style="background:#fff;border-radius:14px;padding:14px;display:inline-block">'+svg()+'</div>'
      +'<div id="mcrQRurl" style="margin:14px 0 6px;font-size:12px;color:#9aa6b2;word-break:break-all;background:#0f141a;border:1px solid #262c34;border-radius:10px;padding:9px 11px">'+URL+'</div>'
      +'<div style="display:flex;gap:9px;margin-top:12px">'
      +'<button id="mcrQRcopy" style="flex:1;border:0;border-radius:11px;padding:11px;font-weight:800;font-size:13px;cursor:pointer;background:linear-gradient(135deg,#d6a338,#b9842a);color:#1a1407;font-family:inherit">Copier le lien</button>'
      +'<button id="mcrQRclose" style="flex:1;border:1px solid #262c34;border-radius:11px;padding:11px;font-weight:800;font-size:13px;cursor:pointer;background:#1b2127;color:#e8edf2;font-family:inherit">Fermer</button>'
      +'</div></div>';
    document.body.appendChild(o);
    o.addEventListener('click',function(e){ if(e.target===o) o.style.display='none'; });
    document.getElementById('mcrQRclose').onclick=function(){ o.style.display='none'; };
    document.getElementById('mcrQRcopy').onclick=function(){
      var b=document.getElementById('mcrQRcopy');
      function done(){ b.textContent='Copié ✓'; setTimeout(function(){ b.textContent='Copier le lien'; },1500); }
      if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(URL).then(done,done); } else { done(); }
    };
  }
  function addBtn(){
    if(document.getElementById('mcrQRbtn')) return;
    var b=document.createElement('button'); b.id='mcrQRbtn'; b.type='button';
    b.innerHTML='📱 QR code d\'accès';
    b.style.cssText='position:fixed;right:18px;bottom:18px;z-index:2147483500;border:0;border-radius:99px;padding:12px 18px;font-weight:800;font-size:13.5px;cursor:pointer;background:linear-gradient(135deg,#d6a338,#b9842a);color:#1a1407;box-shadow:0 10px 26px -8px rgba(0,0,0,.7);font-family:system-ui,Segoe UI,Roboto,sans-serif';
    b.onclick=openModal;
    document.body.appendChild(b);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addBtn); else addBtn();
})();
