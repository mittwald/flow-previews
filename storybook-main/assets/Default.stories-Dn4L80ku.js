import{j as o}from"./iframe-DHE-6oks.js";import{L as e}from"./Link-BMNsKwnm.js";import{T as A}from"./Text-DvqkAO4K.js";import{a as N,s as R}from"./storyBackgrounds-GFSAi-dI.js";import{f as W}from"./IconWarning-Cic1MV-m.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./context-DFltFWpJ.js";import"./utils-x8BQYX4-.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DKLIgAwR.js";import"./useFocus-DYGSM8hG.js";import"./useFocusRing-OVXrKScL.js";import"./useFocusable-BqyWOhG-.js";import"./browser-DInQ8S6B.js";import"./EmulatedBoldText-h05YTKz1.js";import"./Text-NjMLt3Ri.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Navigation/Link",component:e,args:{onPress:K("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(A,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(W,{"aria-label":"download"})]})},i={args:{color:"dark"},parameters:{backgrounds:N}},c={args:{color:"light"},parameters:{backgrounds:R}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},p={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,k,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var D,b,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var L,x,w;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var _,j,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var I,T,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var O,B,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var v,C,P;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...(P=(C=p.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const ir=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,p as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,ir as __namedExportsOrder,tr as default};
