// Created by iWeb 3.0.4 local-build-20120420

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.800000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Projetos_files/ProjetosMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
