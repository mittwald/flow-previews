import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{c as S}from"./clsx-B-dksMZM.js";import{f as I}from"./flowComponent-QaLaNUaQ.js";import{B as _}from"./Button-D1dLS-jR.js";import"./IconApp-2NmtClNa.js";import{v as y}from"./IconWarning-D17V2fWY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Wrap-DQq6jo70.js";import"./Text-Cf2tf5FC.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./LoadingSpinner-CBBIEtuR.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";const v="flow--counter-badge",w={counterBadge:v},n=I("CounterBadge",r=>{const{className:N,count:i,ref:j,...W}=r,b=S(w.counterBadge,N);return o.jsx("span",{className:b,...W,"aria-hidden":!0,ref:j,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const nr={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(_,{"aria-label":"Notifications: 7",children:[o.jsx(y,{}),o.jsx(n,{...r,count:7})]})};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    count: undefined
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,f,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    count: 120
  }
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,x,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Button aria-label="Notifications: 7">
      <IconNotification />
      <CounterBadge {...props} count={7}></CounterBadge>
    </Button>
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const ir=["Default","WithoutContent","WithHighNumber","WithButton"];export{t as Default,s as WithButton,a as WithHighNumber,e as WithoutContent,ir as __namedExportsOrder,nr as default};
