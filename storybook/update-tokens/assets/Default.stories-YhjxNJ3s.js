import{L as o}from"./Link-BOebTgv5.js";import{a as W}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{R as e}from"./index-Cs7sjTYM.js";import{T as A}from"./Text-Kq1Uppf8.js";import{a as N,s as O}from"./storyBackgrounds-GFSAi-dI.js";import"./IconApp-DqdQf8xk.js";import{i as q}from"./IconWarning-Bz8aDAH7.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ioG1zo33.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dcn7RY69.js";import"./useFocusRing-CqFdZJbR.js";import"./useFocusable-CKybZYMg.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";const mr={title:"Navigation/Link",component:o,args:{onPress:W("onPress"),isDisabled:!1},render:r=>e.createElement(o,{...r},"Adjust project"),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>e.createElement(A,null,"Check our ",e.createElement(o,{...r},"onboarding")," for more information.")},t={args:{isDisabled:!0}},n={render:r=>e.createElement(o,{...r,href:"https://mittwald.de"},"Download invoice",e.createElement(q,{"aria-label":"download"}))},i={args:{color:"dark"},parameters:{backgrounds:N}},c={args:{color:"light"},parameters:{backgrounds:O}},m={args:{target:"_blank"},render:r=>e.createElement(o,{...r},"mittwald.de")},p={args:{target:"_blank",download:!0},render:r=>e.createElement(o,{...r},"Download file")};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,k,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var b,f,L;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(L=(f=t.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var w,h,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,S,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var I,_,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var B,v,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...(P=(v=m.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var j,C,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const pr=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,t as Disabled,p as Download,m as ExternalLink,s as Inline,c as Light,n as WithIcon,pr as __namedExportsOrder,mr as default};
