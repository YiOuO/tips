Search.setIndex({"docnames": ["DMD", "Dual+Torch", "DualSPHysics", "MSoffice/index", "MSoffice/ppt_to_png/contents", "MachineLearning", "Matplotlib", "OpenFOAM", "PPT2PNG", "Paraview", "Printer", "Reef3d", "Trivial", "Word2PDF", "index"], "filenames": ["DMD.md", "Dual+Torch.md", "DualSPHysics.md", "MSoffice/index.rst", "MSoffice/ppt_to_png/contents.rst", "MachineLearning.md", "Matplotlib.md", "OpenFOAM.md", "PPT2PNG.md", "Paraview.md", "Printer.md", "Reef3d.md", "Trivial.md", "Word2PDF.md", "index.rst"], "titles": ["A quick start guide to DMD", "AI-assisted DualSPHysics", "Some tips to use DualSPHysics", "\u8bba\u6587\u5199\u4f5c\u4e2dOffice", "&lt;no title&gt;", "Machine learning\u4e4b\u4e1c\u62fc\u897f\u51d1\u7248", "Matplotlib \u4f7f\u7528latex\u6e32\u67d3\u516c\u5f0f", "A quick start guide to use OpenFOAM", "PPT \u56fe\u53e6\u5b58\u4e3a\u9ad8\u5206\u8fa8\u7387\u56fe\u7247", "Paraview \u4fdd\u5b58\u9ad8\u5206\u8fa8\u7387\u56fe\u7247", "306\u65b0\u6253\u5370\u673a\u4f7f\u7528\u6307\u5357", "A quick start guide to use Reef3d", "Trivial tricks", "Word\u8f6cPDF\u65f6\u56fe\u7247\u65e0\u635f\u8f93\u51fa", "Welcome to Some tips\u2019s documentation!"], "terms": {"In": 1, "thi": 1, "part": 1, "we": 1, "introduc": 1, "coupl": 1, "machin": [1, 14], "learn": 1, "cfd": 1, "tool": 1, "name": 1, "compil": 1, "dualsphysci": 1, "link": 1, "libtorch": 1, "import": [2, 6, 9], "stl": 2, "file": 2, "transfer": 2, "drawfilestl": 2, "casewavemaker2d_structur": 2, "autofil": 2, "true": [2, 6], "advanc": 2, "drawmov": 2, "x": [2, 6], "4": [2, 6, 10, 13], "y": [2, 6], "0": [2, 6], "z": 2, "drawscal": 2, "2": [2, 6, 9, 10, 13], "drawrot": 2, "angx": 2, "xang": 2, "angi": 2, "angz": 2, "depth": 2, "depthmin": 2, "dp": 2, "1": [2, 6, 9, 10, 13], "setmkbound": 2, "mk": 2, "move": 2, "holepl": 2, "matrixreset": 2, "debug": 2, "g": 2, "vem": 2, "dualsphysics_v5": 2, "2_beta": 2, "exampl": 2, "main": 2, "20_osdp": 2, "caseosdp2d_out": 2, "caseosdp2d": 2, "dirdataout": 2, "data": 2, "svre": 2, "measur": 2, "from": [2, 9], "specif": 2, "interv": 2, "set": [2, 12, 13], "dirout2": 2, "dirout": 2, "measuretool": 2, "dirin": 2, "diroutdata": 2, "point": [2, 9], "casewavemaker2d_wg0_2d": 2, "txt": 2, "onlytyp": 2, "all": 2, "fluid": 2, "elev": 2, "first": 2, "2200": 2, "last": 2, "3000": 2, "savecsv": 2, "_wg1": 2, "savevtk": 2, "wg1": 2, "errorlevel": 2, "goto": 2, "fail": 2, "ppt": 4, "\u9ad8\u6e05\u8f6c": 4, "png": [4, 6, 8, 9], "\u6625\u7720\u4e0d\u89c9\u6653": 4, "\u5904\u5904\u95fb\u557c\u9e1f": 4, "\u4e3a\u4ec0\u4e48\u795e\u7ecf\u7f51\u7edc\u9700\u8981": 5, "\u6fc0\u6d3b\u51fd\u6570": 5, "http": [5, 6], "www": [5, 6], "zhihu": 5, "com": [5, 6], "question": 5, "22334626": 5, "\u6b63\u53cd\u5411\u4f20\u64ad": 5, "cnblog": 5, "charlotte77": 5, "p": 5, "5629865": 5, "html": 5, "\u5f3a\u5316\u5b66\u4e60\u4e4b": 5, "mdp": 5, "bellman": 5, "\u65b9\u7a0b": 5, "shixiangwan": 5, "10938440": 5, "\u76f4\u63a5\u4f7f\u7528time": 6, "new": 6, "roman\u5b57\u4f53": 6, "\u6ce8\u610f\u8981\u5c06\u5176\u4e2d\u6570\u5b66\u516c\u5f0f\u90e8\u5206\u6362\u6210\u53e6\u4e00\u4e2a\u548ctimes\u5f88\u50cf\u7684\u5b57\u4f53": 6, "stix": 6, "\u5426\u5219\u5199\u51fa\u6765\u7684\u516c\u5f0f\u4f1a\u9ed8\u8ba4\u52a0\u7c97": 6, "\u611f\u8c22\u5434\u4f73\u6615\u63d0\u4f9b\u7684\u5efa\u8bae": 6, "pyplot": 6, "plt": 6, "mpl": 6, "\u8bbe\u7f6e\u5b57\u4f53\u4e3a": 6, "time": 6, "roman": 6, "rcparam": 6, "font": 6, "famili": 6, "text": 6, "usetex": 6, "fals": 6, "rc": 6, "mathtext": 6, "fontset": 6, "math_fontfamili": 6, "\u521b\u5efa\u793a\u4f8b\u6570\u636e": 6, "3": [6, 9, 10, 13], "5": [6, 10], "9": 6, "16": 6, "25": 6, "fig": [6, 9], "ax": 6, "subplot": 6, "\u7ed8\u5236\u56fe\u5f62": 6, "plot": 6, "label": 6, "r": 6, "beta": 6, "beta_l": 6, "10": [6, 10], "50": 6, "gamma_l": 6, "20": 6, "xlabel": 6, "ylabel": 6, "legend": 6, "titl": 6, "greek": 6, "letter": 6, "\u8bbe\u7f6e": 6, "\u8f74\u523b\u5ea6\u6807\u7b7e\u4e3a\u5e0c\u814a\u5b57\u6bcd": 6, "xtick": 6, "alpha": 6, "gamma": 6, "delta": 6, "epsilon": 6, "savefig": 6, "test2": 6, "bbox_inch": 6, "tight": 6, "dpi": 6, "500": 6, "pdf": [6, 13], "svg": 6, "show": [6, 12], "\u91c7\u7528latex": 6, "\u6e32\u67d3\u5668\u6e32\u67d3": 6, "\u76f4\u63a5\u5bfc\u51fasvg\u5b57\u4f53\u4f1a\u53d8\u7ec6": 6, "\u53c8\u662f\u5947\u602a\u7684bug": 6, "\u9700\u8981\u5bfc\u51fapdf\u540e\u7136\u540e\u8f6c\u6210svg": 6, "\u5982\u679c\u9700\u8981\u7684\u8bdd": 6, "\u7136\u800c\u5373\u4fbf\u662f\u8fd9\u6837": 6, "\u6e32\u67d3\u8fc7\u540e\u7684\u5b57\u4f53\u4e5f\u548ctimes\u4e0d\u5b8c\u5168\u4e00\u6837": 6, "\u53ef\u4ee5\u770b\u5750\u6807\u8f74\u6570\u5b575": 6, "\u5947\u602a\u7684bug": 6, "pylab": 6, "param": 6, "size": 6, "12": 6, "titles": 6, "labels": 6, "ytick": 6, "line": [6, 12], "linewidth": 6, "fontsiz": 6, "labelpad": 6, "figur": 6, "figsiz": 6, "6": [6, 10], "updat": 6, "\u8bbe\u7f6e\u4f7f\u7528": 6, "latex": 6, "\u6e32\u67d3": 6, "preambl": 6, "usepackag": 6, "amsmath": 6, "i2pdf": 6, "cn": 6, "underdevelop": 7, "\u672c\u6587\u9002\u7528\u4e8e\u5982\u4e0b\u573a\u666f": 8, "\u901a\u8fc7ppt\u5bf9\u56fe\u7247\u505a\u7ec4\u5408": 8, "\u88c1\u526a\u7b49\u4fee\u6539\u540e": 8, "\u5bfc\u51fa\u56fe\u7247\u6e05\u6670\u5ea6\u4e0d\u591f": 8, "jpg\u7b49\u975e\u77e2\u91cf\u56fe\u683c\u5f0f": 8, "\u5bf9\u4e8e\u77e2\u91cf\u56fe": 8, "\u6216\u8005\u76f4\u63a5\u4eceppt\u5b58\u6210\u77e2\u91cf\u56fe\u683c\u5f0f\u8bf7\u5ffd\u7565": 8, "sdasd": 8, "\u672c\u6587\u7528\u4e8e\u89e3\u51b3\u4ee5\u4e0b\u95ee\u9898": [9, 13], "\u91c7\u7528paraview\u8fdb\u884c\u7c92\u5b50\u6cd5": 9, "\u7f51\u683c\u6cd5\u6a21\u62df\u540e\u5904\u7406": 9, "\u4fdd\u5b58\u9ad8\u5206\u8fa8\u7387\u6d41\u573a\u56fe\u7247": 9, "\u672c\u6587\u4e0d\u9002\u7528\u4e8e\u4ee5\u4e0b\u60c5\u666f": [9, 13], "\u5bf9\u56fe\u7247\u5206\u8fa8\u7387\u6ca1\u8981\u6c42": 9, "\u6216\u8005\u5bfc\u51fa\u6570\u636e\u91c7\u7528\u5176\u4ed6\u8f6f\u4ef6\u540e\u5904\u7406": 9, "\u5bf9\u4e8e\u6d41\u573a\u56fe": 9, "\u901a\u5e38\u6211\u4eec\u65e0\u6cd5\u5c06\u5176\u4fdd\u5b58\u6210\u77e2\u91cf\u56fe": 9, "\u4f46\u662f\u53c8\u4e0d\u60f3\u635f\u5931\u592a\u591a\u753b\u8d28": 9, "\u8d77\u521d\u6211\u7684\u65b9\u6cd5\u662f\u76f4\u63a5\u91c7\u7528\u4e00\u4e9b\u622a\u56fe\u5de5\u5177\u622a\u56fe": 9, "\u53d1\u73b0\u653e\u5927\u540e\u662f\u5168\u635f\u753b\u8d28": 9, "\u540e\u6765\u5c06\u6570\u636e\u8f93\u51fa": 9, "\u91c7\u7528matlab\u4e00\u5e27\u5e27\u753b": 9, "\u8d39\u4e8b\u5e76\u4e14matlab\u4e09\u7ef4\u53ef\u89c6\u5316\u5c40\u9650\u8fd8\u662f\u592a\u660e\u663e\u4e86": 9, "\u5982\u679c\u4e00\u5b9a\u8981\u5b58\u6210\u77e2\u91cf\u56fe\u683c\u5f0f\u53ef\u4ee5\u91c7\u7528": 9, "paraview\u662f\u975e\u5e38\u5f3a\u5927\u7684\u53ef\u89c6\u5316\u5de5\u5177": 9, "\u76f4\u63a5\u91c7\u7528paraview\u4fdd\u5b58\u56fe\u7247\u4e5f\u80fd\u83b7\u5f97\u6bd4\u8f83\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": 9, "\u5176\u5b9e\u539f\u7406\u548cmatlab\u753b\u6ca1\u5565\u533a\u522b": 9, "\u5177\u4f53\u5730\u6d41\u7a0b": 9, "\u6ce8\u610f": 9, "\u7f51\u683c\u6cd5\u540e\u5904\u7406\u76f4\u63a5\u8df3\u5230\u7b2c\u4e8c\u6b65": 9, "\u5bfc\u5165\u7c92\u5b50\u540e\u9009\u62e9": 9, "gaussian": 9, "\u5e76\u5728\u5de6\u4fa7\u5c5e\u6027\u680f\u91cc": 9, "\u8bbe\u7f6e\u7c92\u5b50\u663e\u793a\u5c3a\u5bf8": 9, "\u901a\u5e38\u7b49\u4e8e0": 9, "5dp\u6216\u8005\u66f4\u5927": 9, "\u548c": 9, "\u663e\u793a\u683c\u5f0f": 9, "plain": 9, "circl": 9, "\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u5176\u4ed6\u7684": 9, "\u4f46\u662f\u6211\u8bd5\u8fc7\u51e0\u4e2a\u6548\u679c\u4e0d\u662f\u5f88\u597d": 9, "\u70b9\u51fb\u56fe\u7247\u4e0a\u65b9\u7c7b\u4f3c\u4e8e\u7167\u76f8\u673a\u7684\u6309\u94ae": 9, "\u5219\u53ef\u4ee5\u5c06\u5c4f\u5e55\u4fdd\u5b58\u6210png\u683c\u5f0f\u56fe\u7247": 9, "\u5e76\u4e14\u9009\u62e9\u5206\u8fa8\u7387": 9, "\u5efa\u8bae\u9009\u62e9\u9ad8\u5206\u8fa8\u7387": 9, "\u57fa\u4e8e": 9, "\u5f97\u5230\u7684\u56fe\u7247": 9, "\u901a\u5e38\u6709\u8f83\u5927\u90e8\u5206\u767d\u8fb9": 9, "\u53ef\u4ee5\u91c7\u7528\u7cfb\u7edf\u81ea\u5e26\u88c1\u526a\u5de5\u5177\u6216\u8005office\u76f8\u5173\u5de5\u5177\u88c1\u526a": 9, "\u5199\u5728\u540e\u5934": 9, "\u5982\u679c\u51fa\u73b0\u9700\u8981\u6279\u91cf\u5904\u7406\u7684\u60c5\u51b5\u4e0b": 9, "\u6b65\u9aa4": 9, "\u53ef\u4ee5\u91c7\u7528paraview\u5f55\u5236\u5b8f\u751f\u6210python\u811a\u672c": 9, "\u7136\u540e\u901a\u8fc7\u8fd0\u884c\u811a\u672c": 9, "\u8c37\u6b4c\u641c\u5173\u952e\u8bcd": 9, "python": 9, "trace": 9, "macro": 9, "\u4e5f\u53ef\u4ee5\u76f4\u63a5\u91c7\u7528python\u811a\u672c\u6765\u5904\u7406": 9, "\u8fd9\u6837\u65e2\u7701\u4e8b\u53c8\u80fd\u4fdd\u8bc1\u6bcf\u5f20\u56fe\u957f\u5bbd\u662f\u56fa\u5b9a\u503c": 9, "o": 9, "pil": 9, "imag": 9, "def": 9, "crop_imag": 9, "input_path": 9, "output_path": 9, "left": 9, "upper": 9, "right": 9, "lower": 9, "\u6253\u5f00\u56fe\u50cf": 9, "open": 9, "\u526a\u88c1\u56fe\u50cf": 9, "cropped_imag": 9, "crop": 9, "\u4fdd\u5b58\u526a\u88c1\u540e\u7684\u56fe\u50cf": 9, "save": 9, "\u793a\u4f8b\u7528\u6cd5": 9, "_press": 9, "\u8f93\u5165\u56fe\u50cf\u7684\u8def\u5f84": 9, "vemoutput": 9, "\u8f93\u51fa\u56fe\u50cf\u7684\u8def\u5f84": 9, "\u627e\u5230\u67d0\u4e2a\u6587\u4ef6\u4e0b\u4e0b\u6240\u6709\u6587\u4ef6": 9, "get_file_nam": 9, "folder_path": 9, "file_nam": 9, "listdir": 9, "append": 9, "return": 9, "\u66ff\u6362\u4e3a\u4f60\u7684\u6587\u4ef6\u5939\u8def\u5f84": 9, "print": [9, 13], "\u81ea\u5df1\u786e\u5b9a\u4e00\u4e0b\u56fe\u7247\u8fb9\u754c": 9, "995": 9, "\u526a\u88c1\u6846\u7684\u5de6\u8fb9\u754c": 9, "495": 9, "\u526a\u88c1\u6846\u7684\u4e0a\u8fb9\u754c": 9, "2845": 9, "\u526a\u88c1\u6846\u7684\u53f3\u8fb9\u754c": 9, "1665": 9, "\u526a\u88c1\u6846\u7684\u4e0b\u8fb9\u754c": 9, "item": 9, "after": 9, "\u611f\u8c22\u53f6\u6d32\u817e\u548c\u6bb7\u94ed\u7b80\u535a\u58eb\u5bf9\u672c\u6587\u7684\u5e2e\u52a9": 9, "\u611f\u8c22\u7f57\u8001\u5e08\u8d75\u8001\u5e08\u7ecf\u8d39\u652f\u6301": 10, "\u611f\u8c22\u601d\u6587\u54e5\u63d0\u4f9b\u5de5\u4f4d\u548c\u7535\u8111": 10, "\u672c\u6253\u5370\u673a\u4f18\u70b9": 10, "\u53cc\u9762\u5f69\u6253\u590d\u5370": 10, "\u52a0\u58a8\u65b9\u4fbf": 10, "\u652f\u6301wifi\u548c\u5fae\u4fe1\u4f20\u6587\u4ef6": 10, "\u7f3a\u70b9": 10, "\u9f9f\u901f\u6253\u5370": 10, "\u5982\u4f55\u4f7f\u7528": 10, "\u53d7\u9650\u4e8e\u6821\u56ed\u7f51\u548c\u8fa3\u9e21\u7535\u8111": 10, "\u76ee\u524d\u8fd8\u662f\u4e56\u4e56\u7528\u8fdc\u7a0b\u8fde\u63a5\u6253\u5370": 10, "\u6253\u5f00windows\u8fdc\u7a0b\u684c\u9762\u8fde\u63a5": 10, "\u8f93\u5165ip\u5730\u5740": 10, "92": 10, "152": 10, "233": 10, "\u8d26\u6237\u540d": 10, "zhang": 10, "sw": 10, "\u5bc6\u7801": 10, "\u7a7a\u683c\u952e": 10, "\u590d\u5236\u4f60\u8981\u6253\u5370\u7684\u6587\u4ef6\u7c98\u8d34\u5230\u8fdc\u7a0b\u684c\u9762": 10, "\u6253\u5370\u5b8c\u8bb0\u5f97\u5220\u9664": 10, "\u6ce8\u610f\u4e8b\u9879": 10, "\u6253\u5370\u673a\u4e0a\u653e\u4e86\u4e00\u672c\u624b\u518c": 10, "\u78b0\u5230\u95ee\u9898\u8bf7\u5148\u7ffb\u9605\u624b\u518c": 10, "\u7ffb\u9605\u5b8c\u8bf7\u653e\u56de\u539f\u5904": 10, "\u9009\u62e9\u53cc\u9762\u6253\u5370\u7684\u8bdd": 10, "\u8010\u5fc3\u7b49\u5f85": 10, "\u6ca1\u6253\u5b8c\u4e0d\u8981\u628a\u7eb8\u62ff\u8d70": 10, "\u5426\u5219\u4f1a\u5361\u4f4f": 10, "\u62d4\u6389\u6253\u5370\u673a\u7535\u6e90\u91cd\u65b0\u63d2\u4e0a": 10, "\u5b83\u4f1a\u81ea\u5df1\u6062\u590d": 10, "\u80fd\u89e3\u51b3\u5927\u90e8\u5206\u95ee\u9898": 10, "\u4fdd\u4fee\u5361\u4e4b\u7c7b\u7684\u90fd\u5728\u4e66\u67b6\u4e0a\u7684\u6253\u5370\u673a\u7bb1\u5b50\u91cc": 10, "\u6279\u91cf\u6253\u5370\u8bf7\u6700\u597d\u4e0d\u8981\u5f69\u6253": 10, "\u8bf7\u4fdd\u6301\u653e\u5165a4\u7eb8\u5e73\u6574": 10, "\u5982\u9047\u5361\u7eb8": 10, "\u5c06\u6253\u5370\u673a\u540e\u90e8\u76d6\u677f\u6253\u5f00": 10, "\u626f\u51fa\u5e9f\u7eb8": 10, "number": 12, "ipynb": 12, "vscode": 12, "notebook": 12, "lin": 12, "\u7531word\u6587\u6863\u8f6c\u6210pdf\u540e": 13, "\u56fe\u7247": 13, "\u975e\u77e2\u91cf\u56fe": 13, "\u5206\u8fa8\u7387\u4e0b\u964d": 13, "word\u6587\u6863\u4e2d\u6240\u6709\u56fe\u7247\u90fd\u662f\u77e2\u91cf\u56fe": 13, "\u6216\u8005\u5bf9\u56fe\u7247\u5206\u8fa8\u7387\u8981\u6c42\u4e0d\u9ad8": 13, "latex\u7528\u6237": 13, "\u4e0d\u91c7\u7528adob": 13, "acrobat\u5c06word\u8f6c\u6362\u6210pdf\u7684\u7528\u6237": 13, "\u5148\u8d34\u51fa\u7ed3\u679c\u5bf9\u6bd4": 13, "\u53ef\u4ee5\u770b\u51fa\u5728\u653e\u5927600": 13, "\u7684\u60c5\u51b5\u4e0b": 13, "\u4e0d\u540c\u65b9\u6cd5\u5df2\u7ecf\u51fa\u73b0\u4e86\u660e\u663e\u7684\u5206\u8fa8\u7387\u5dee\u5f02": 13, "\u5177\u4f53\u505a\u6cd5": 13, "\u9996\u5148\u5728word\u4e2d\u4fdd\u8bc1\u4e0d\u5bf9\u56fe\u7247\u8fdb\u884c\u538b\u7f29": 13, "\u6253\u5f00\u4efb\u610f\u4e00\u4e2aword\u6587\u6863": 13, "\u5de6\u4e0a\u89d2": 13, "\u6587\u4ef6": 13, "\u9009\u9879": 13, "\u9ad8\u7ea7": 13, "\u4e2d\u627e\u5230\u5982\u4e0b\u9009\u9879\u5e76\u6309\u56fe\u4e2d\u9009\u62e9": 13, "\u9ad8\u4fdd\u771f\u548c\u4e0d\u538b\u7f29\u56fe\u50cf": 13, "\u5728word\u6587\u6863\u4e2d\u6253\u5f00\u6253\u5370\u754c\u9762": 13, "\u9009\u4e2d\u6253\u5370\u673a\u4e3aadob": 13, "\u5e76\u9009\u62e9\u6253\u5370\u673a\u5c5e\u6027": 13, "\u5728adob": 13, "\u8bbe\u7f6e\u4e2d\u9009\u62e9": 13, "\u9ad8\u8d28\u91cf\u6253\u5370": 13, "\u81f3\u6b64": 13, "\u6253\u5370\u5230pdf\u7684\u5206\u8fa8\u7387\u76f8\u6bd4\u521a\u5f00\u59cb\u5df2\u7ecf\u83b7\u5f97\u4e86\u8f83\u5927\u63d0\u5347": 13, "\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e9b\u5bf9\u56fe\u7247dpi\u8981\u6c42\u8f83\u4e3a\u4e25\u683c\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u6309\u4e0b\u9762\u60c5\u51b5\u7ee7\u7eed\u8bbe\u7f6e": 13, "\u70b9\u51fb\u9ad8\u8d28\u91cf\u6253\u5370\u65c1\u8fb9\u7684": 13, "\u7f16\u8f91": 13, "\u6309\u94ae": 13, "\u5e76\u8fdb\u5165\u5230": 13, "\u56fe\u50cf": 13, "\u6a21\u5757": 13, "\u53ef\u4ee5\u9009\u62e9\u5173\u95ed\u6240\u6709\u91c7\u6837\u548c\u538b\u7f29": 13, "\u8fd9\u6837\u4f1a\u5bfc\u81f4\u6587\u6863\u4f53\u79ef\u5f88\u5927": 13, "\u4e0d\u538b\u7f29\u60c5\u51b5\u4e0b\u548cword\u6587\u6863\u5927\u5c0f\u57fa\u672c\u4e00\u81f4": 13, "\u6216\u8005\u91c7\u7528\u9ed8\u8ba4\u7684\u91c7\u6837\u538b\u7f29": 13, "\u5728\u53f3\u8fb9\u7ea2\u8272\u6846\u4e2d": 13, "\u6839\u636e\u671f\u520a\u8981\u6c42\u8bbe\u7f6e\u50cf\u7d20": 13, "\u50cf\u7d20\u8d8a\u9ad8\u6587\u6863\u5c3a\u5bf8\u8d8a\u5927": 13, "\u5b9e\u9645\u9009\u62e9\u5e94\u517c\u987e\u5206\u8fa8\u7387\u548c\u6587\u6863\u5927\u5c0f": 13, "\u63a5\u4e0b\u6765\u662f\u5f88\u5173\u952e\u7684\u4e00\u6b65": 13, "\u70b9\u51fb": 13, "\u786e\u5b9a\u6216\u8005\u53e6\u5b58\u4e3a": 13, "\u5c06\u5f53\u524d\u914d\u7f6e\u4fdd\u5b58\u4e0b\u6765": 13, "\u4fdd\u5b58\u8def\u5f84\u4e00\u5b9a\u8981\u4e0eadob": 13, "pdf\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u4e00\u81f4": 13, "\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u8bbe\u7f6e": 13, "\u90a3\u4e48\u9ed8\u8ba4\u7684\u8def\u5f84\u5c31\u662f\u5bf9\u7684": 13, "\u4e0d\u8981\u6539\u8def\u5f84": 13, "\u6211\u5f53\u65f6\u5c31\u662f\u56e0\u4e3a\u6539\u4e86\u4fdd\u5b58\u8def\u5f84\u7ed3\u679c\u600e\u4e48\u8bbe\u7f6e\u90fd\u6ca1\u7528": 13, "\u6298\u817e\u4e86\u5927\u534a\u5929": 13, "\u5982\u679c\u4f60\u4e0d\u5c0f\u5fc3\u6539\u8fc7\u4e86": 13, "\u90a3\u4e48\u4fdd\u5b58\u5230\u9ed8\u8ba4\u8def\u5f84": 13, "c": 13, "user": 13, "\u4f60\u7684\u7535\u8111\u7528\u6237\u540d": 13, "appdata": 13, "roam": 13, "adob": 13, "\u5176\u4e2d": 13, "\u5728\u6587\u4ef6\u5939\u4e2d\u9ed8\u8ba4\u662f\u9690\u85cf\u7684": 13, "\u81ea\u5df1google\u4e00\u4e0b\u5982\u4f55\u663e\u793a\u8be5\u6587\u4ef6\u5939": 13, "\u5728\u4e2d\u6587\u7cfb\u7edf\u4e0b\u5e94\u8be5\u662f\u540d\u5b57\u5e94\u8be5\u662f": 13, "\u7528\u6237": 13, "\u4fdd\u5b58\u597d\u4e86\u540e": 13, "\u5c31\u53ef\u4ee5\u9009\u62e9\u4ee5\u4f60\u7684\u8bbe\u5b9a\u6765\u8f6c\u6362pdf\u4e86": 13, "\u5728\u6b64\u6211\u5c06\u6211\u7684\u914d\u7f6e\u547d\u540d\u4e3a": 13, "high": 13, "qualiti": 13, "No": 13, "compress": 13, "\u9009\u4e2d\u5373\u53ef": 13, "\u5982\u6ca1\u8fd9\u4e2a\u9009\u9879": 13, "\u8bf4\u660e\u6ca1\u4fdd\u5b58\u5bf9\u8def\u5f84": 13, "\u6700\u540e\u4e00\u6b65": 13, "\u5bfc\u51fapdf": 13, "word\u4e2d\u5bfc\u51fapdf\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u79cd": 13, "\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u53e6\u5b58\u4e3apdf": 13, "\u6253\u5370pdf": 13, "\u6216\u8005\u901a\u8fc7adobe\u63d2\u4ef6": 13, "\u8fd9\u51e0\u79cd\u65b9\u6cd5\u6211\u8fd9\u51e0\u5929\u90fd\u6298\u817e\u4e86": 13, "\u7531\u4e8eword": 13, "adobe\u518d\u52a0\u4e0amathtype\u7684\u7248\u672c\u517c\u5bb9\u6027\u78b0\u5230\u4e86\u5404\u79cd\u95ee\u9898": 13, "\u6700\u7ec8\u6d4b\u8bd5\u4e0b\u6765\u8fd8\u662f\u76f4\u63a5": 13, "\u53e6\u5b58\u4e3aadob": 13, "\u5c31\u53ef\u4ee5\u4e86": 13, "\u8fd9\u6837\u65e2\u80fd\u4fdd\u8bc1\u975e\u77e2\u91cf\u5f69\u56fe\u5206\u8fa8\u7387": 13, "\u53c8\u80fd\u4fdd\u8bc1\u77e2\u91cf\u56fe\u4e0d\u4f1a\u53d8\u6210\u975e\u77e2\u91cf\u56fe": 13, "\u9009\u62e9\u6253\u5370pdf\u77e2\u91cf\u56fe\u51fa\u6765\u662f\u975e\u77e2\u91cf\u56fe": 13, "\u6211\u4e5f\u4e0d\u77e5\u9053\u4e3a\u5565": 13, "\u8fd8\u80fd\u4fdd\u8bc1mathtype\u516c\u5f0f\u5f15\u7528\u4ea4\u53c9\u5f15\u7528\u8fd8\u5728": 13, "\u5173\u4e8e\u8fd9\u4e2amathtype\u516c\u5f0f\u81ea\u5e26\u7684\u4ea4\u53c9\u5f15\u7528\u4e5f\u662f\u4e2a\u5751": 13, "\u5728word\u91cc\u597d\u597d\u7684": 13, "\u8f6c\u6210pdf\u540e\u5f15\u7528\u53ef\u80fd\u90fd\u6ca1\u4e86": 13, "\u6539\u65e5\u53e6\u5f00\u65b0\u5e16\u518d\u8c08\u5427": 13, "\u8fd9\u6837\u751f\u6210\u7684pdf\u56fe\u7247\u5206\u8fa8\u7387\u5c31\u6bd4\u8f83\u9ad8\u4e5f\u76f8\u5bf9\u53ef\u63a7": 13, "word\u8f6cpdf\u65f6\u56fe\u7247\u65e0\u635f\u8f93\u51fa": 14, "us": 14, "dualsphys": 14, "A": 14, "quick": 14, "start": 14, "guid": 14, "openfoam": 14, "learning\u4e4b\u4e1c\u62fc\u897f\u51d1\u7248": 14, "paraview": 14, "\u4fdd\u5b58\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": 14, "matplotlib": 14, "\u4f7f\u7528latex\u6e32\u67d3\u516c\u5f0f": 14, "ai": 14, "assist": 14, "306\u65b0\u6253\u5370\u673a\u4f7f\u7528\u6307\u5357": 14, "trivial": 14, "trick": 14, "index": 14, "modul": 14, "search": 14, "page": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"A": [0, 7, 11], "quick": [0, 7, 11], "start": [0, 7, 11], "guid": [0, 7, 11], "dmd": 0, "ai": 1, "assist": 1, "dualsphys": [1, 2], "some": [2, 14], "tip": [2, 14], "us": [2, 7, 11], "\u8bba\u6587\u5199\u4f5c\u4e2doffic": 3, "machin": 5, "learning\u4e4b\u4e1c\u62fc\u897f\u51d1\u7248": 5, "matplotlib": 6, "\u4f7f\u7528latex\u6e32\u67d3\u516c\u5f0f": 6, "openfoam": 7, "ppt": 8, "\u56fe\u53e6\u5b58\u4e3a\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": 8, "\u4e8c\u7ea7\u6807\u9898": 8, "\u4e09\u7ea7\u6807\u9898": 8, "\u56db\u7ea7\u6807\u9898": 8, "paraview": 9, "\u4fdd\u5b58\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": 9, "306\u65b0\u6253\u5370\u673a\u4f7f\u7528\u6307\u5357": 10, "reef3d": 11, "trivial": 12, "trick": 12, "word\u8f6cpdf\u65f6\u56fe\u7247\u65e0\u635f\u8f93\u51fa": 13, "welcom": 14, "": 14, "document": 14, "content": 14, "indic": 14, "tabl": 14}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"A quick start guide to DMD": [[0, "a-quick-start-guide-to-dmd"]], "AI-assisted DualSPHysics": [[1, "ai-assisted-dualsphysics"]], "Some tips to use DualSPHysics": [[2, "some-tips-to-use-dualsphysics"]], "\u8bba\u6587\u5199\u4f5c\u4e2dOffice": [[3, "office"]], "Machine learning\u4e4b\u4e1c\u62fc\u897f\u51d1\u7248": [[5, "machine-learning"]], "Matplotlib \u4f7f\u7528latex\u6e32\u67d3\u516c\u5f0f": [[6, "matplotlib-latex"]], "A quick start guide to use OpenFOAM": [[7, "a-quick-start-guide-to-use-openfoam"]], "PPT \u56fe\u53e6\u5b58\u4e3a\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": [[8, "ppt"]], "\u4e8c\u7ea7\u6807\u9898": [[8, "id1"]], "\u4e09\u7ea7\u6807\u9898": [[8, "id2"]], "\u56db\u7ea7\u6807\u9898": [[8, "id3"]], "Paraview \u4fdd\u5b58\u9ad8\u5206\u8fa8\u7387\u56fe\u7247": [[9, "paraview"]], "306\u65b0\u6253\u5370\u673a\u4f7f\u7528\u6307\u5357": [[10, "id1"]], "A quick start guide to use Reef3d": [[11, "a-quick-start-guide-to-use-reef3d"]], "Trivial tricks": [[12, "trivial-tricks"]], "Word\u8f6cPDF\u65f6\u56fe\u7247\u65e0\u635f\u8f93\u51fa": [[13, "wordpdf"]], "Welcome to Some tips\u2019s documentation!": [[14, "welcome-to-some-tips-s-documentation"]], "Contents:": [[14, null]], "Indices and tables": [[14, "indices-and-tables"]]}, "indexentries": {}})