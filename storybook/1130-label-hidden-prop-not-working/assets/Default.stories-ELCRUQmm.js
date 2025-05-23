import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as e}from"./Link-mZ-kuTN2.js";import{a as A}from"./index-B-lxVbXh.js";import"./index-BZISi7jw.js";import{T as N}from"./Text-BPAvSiAh.js";import{a as O,s as R}from"./storyBackgrounds-GFSAi-dI.js";import"./IconApp-DZf0STiH.js";import{u as q}from"./IconWarning-BqX4qer7.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./utils-BAtcVSHo.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./v4-CtRu48qb.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-CxIdO6ok.js";const lr={title:"Navigation/Link",component:e,args:{onPress:A("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(N,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(q,{"aria-label":"download"})]})},i={args:{color:"dark"},parameters:{backgrounds:O}},c={args:{color:"light"},parameters:{backgrounds:R}},p={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},d={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,k,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var D,b,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,L,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...(w=(L=t.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var j,S,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var B,E,v;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...(v=(E=p.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var P,C,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...(W=(C=d.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const ur=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,d as Download,p as ExternalLink,s as Inline,c as Light,t as WithIcon,ur as __namedExportsOrder,lr as default};
