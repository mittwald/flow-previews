const{useChannel:o,useEffect:a}=__STORYBOOK_MODULE_PREVIEW_API__;function i(t){document.documentElement.dir=t}var r="storybook/rtl",l=`${r}/rtl-initialize`,u=`${r}/rtl-update`,c=t=>{let e=o({[u]:({direction:n})=>{i(n)}});return a(()=>{e(l)},[e]),t()},d={decorators:[c]},_=d;export{_ as default};