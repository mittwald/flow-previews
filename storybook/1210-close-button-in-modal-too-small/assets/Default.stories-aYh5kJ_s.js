import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{c as S}from"./clsx-B-dksMZM.js";import{f as I}from"./flowComponent-BYduNA4_.js";import{B as _}from"./Button-C7laaEmM.js";import"./IconApp-Bv3EfL7N.js";import{w}from"./IconWarning-BQfoWbD3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./LoadingSpinner-BSAtCngE.js";import"./Text-D9M1FVhy.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";const y="flow--counter-badge",D={counterBadge:y},n=I("CounterBadge",r=>{const{className:N,count:i,ref:j,...W}=r,b=S(D.counterBadge,N);return o.jsx("span",{className:b,...W,"aria-hidden":!0,ref:j,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const sr={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(_,{"aria-label":"Notifications: 7",children:[o.jsx(w,{}),o.jsx(n,{...r,count:7})]})};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const nr=["Default","WithoutContent","WithHighNumber","WithButton"];export{t as Default,s as WithButton,a as WithHighNumber,e as WithoutContent,nr as __namedExportsOrder,sr as default};
