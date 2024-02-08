let heftegunu = +prompt(`Sənə hansı gün lazımdı brat?`)
if(heftegunu > 0 && heftegunu <8)
{document.write (`Bu gün `)}
if(heftegunu === 1)
{document.write (`Bazar ertəsi`)}
else if (heftegunu === 2)
{document.write (`Çərşənbə axşamı`)}
else if (heftegunu === 3)
{document.write (`Çərşənbə`)}
else if (heftegunu === 4)
{document.write (`Cümə axşamı`)}
else if (heftegunu === 5)
{document.write (`Cümə`)}
else if (heftegunu === 6)
{document.write (`Şənbə`)}
else if (heftegunu === 7)
{document.write (`Bazar`)}
else {document.write(`Çıkmaz ayın son Çarşanbası`)}

if(heftegunu === 2 || heftegunu === 4 || heftegunu === 7)
{document.write (`dır`)}
else if(heftegunu === 1 || heftegunu === 3 || heftegunu === 5 || heftegunu === 6)
{document.write (`dir`)}
