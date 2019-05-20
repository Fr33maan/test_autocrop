# What I expected
I want the image to be 64x64 without transparency around and with content centered.

# What I get
A 64x64 images, without any zone cropped

# Reproduce
`node index.js`

# Output
```js
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 19.97536472785929,
        saturation: 0.9291143070761537,
        skin: 0.4101309704985806,
        boost: 0,
        total: 0.0004462111800274518 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 17.987692344353995,
        saturation: 0.45745168954220267,
        skin: 0.4975024747605158,
        boost: 0,
        total: 0.0004196364730393813 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 16.629879248245597,
        saturation: 0.8838248354871783,
        skin: 0.2339380599658057,
        boost: 0,
        total: 0.00035460862066718634 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 18.144834662790167,
        saturation: 0.8500939655978964,
        skin: 0.6686880682233016,
        boost: 0,
        total: 0.00045466113645707896 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 21.572030852570688,
        saturation: 0.7544537678112752,
        skin: 0.7137673105924717,
        boost: 0,
        total: 0.0005246516925260462 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 23.098847846066015,
        saturation: 0.9323008291694941,
        skin: 0.7227855774727698,
        boost: 0,
        total: 0.0005560293723725165 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 21.432282017442805,
        saturation: 0.8783640834814911,
        skin: 0.9632422366370578,
        boost: 0,
        total: 0.0005647308466885554 } } }
{ topCrop:
   { x: 0,
     y: 0,
     width: 104,
     height: 104,
     score:
      { detail: 15.41865471040234,
        saturation: 0.603885329373316,
        skin: 0.13820984041139567,
        boost: 0,
        total: 0.0003136924175072404 } } }
```