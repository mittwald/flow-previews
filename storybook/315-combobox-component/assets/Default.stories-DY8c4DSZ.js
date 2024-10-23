import{I as n}from"./IllustratedMessage-CuDL_gxb.js";import{R as r}from"./index-Cs7sjTYM.js";import{H as I}from"./Heading-B2P7mSpw.js";import{T as B}from"./Text-Cd3nXJGb.js";import{B as D}from"./Button-BuU2L9Cz.js";import{I as b}from"./IconApp-B6hDZZIl.js";import{f as y}from"./IconWarning-Drpj9upb.js";import{a as v,s as x}from"./storyBackgrounds-GFSAi-dI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BPK-Va1R.js";import"./index-Cf-03bMR.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./LoadingSpinner-CgFD_RmC.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-DzOzTnc5.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-C99EnWuo.js";import"./useFocusRing-CT1maULe.js";import"./usePress-BCyoy2Gl.js";const sr={title:"Content/Illustrated Message",component:n,render:s=>r.createElement(n,{...s},r.createElement(b,null),r.createElement(I,null,"No apps installed"),r.createElement(B,null,"Create your first app to start working on your website."),r.createElement(D,null,"Create app")),argTypes:{color:{control:"inline-radio"}},args:{color:"info"}},e={},o={render:s=>r.createElement(n,{...s,color:"negative"},r.createElement(y,null),r.createElement(I,null,"No access"),r.createElement(B,null,"You do not have the required permissions to access this page."),r.createElement(D,null,"Go back"))},t={args:{color:"dark"},parameters:{backgrounds:v}},a={args:{color:"light"},parameters:{backgrounds:x}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="negative">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,k;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,h,E;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(E=(h=a.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const nr=["Default","Negative","Dark","Light"];export{t as Dark,e as Default,a as Light,o as Negative,nr as __namedExportsOrder,sr as default};
