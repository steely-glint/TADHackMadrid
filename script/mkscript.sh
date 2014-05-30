#!/bin/sh
min=/project2/github/phono/PhonoSDK.master/modules/phono-js
sdir=../../../LazarSoft/jsqrcode/src
cat  ${sdir}/grid.js \
${sdir}/version.js \
${sdir}/detector.js \
${sdir}/formatinf.js \
${sdir}/errorlevel.js \
${sdir}/bitmat.js \
${sdir}/datablock.js \
${sdir}/bmparser.js \
${sdir}/datamask.js \
${sdir}/rsdecoder.js \
${sdir}/gf256poly.js \
${sdir}/gf256.js \
${sdir}/decoder.js \
${sdir}/qrcode.js \
${sdir}/findpat.js \
${sdir}/alignpat.js \
${sdir}/databr.js \
> LazarQr.js

java -jar ${min}/yuicompressor-2.4.2.jar --type js  -o LazarQr.min.js -v  LazarQr.js

