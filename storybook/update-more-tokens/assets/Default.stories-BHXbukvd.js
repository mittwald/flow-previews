import{L as o}from"./Link-N5fl_-fX.js";import{a as W}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{R as e}from"./index-B-o1Wr-g.js";import{T as A}from"./Text-CemaETXH.js";import{a as N,s as O}from"./storyBackgrounds-GFSAi-dI.js";import"./IconApp--rto3B0B.js";import{i as q}from"./IconWarning--ZE28x2f.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./utils-CCebJm36.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-CjESOWAx.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";const mr={title:"Navigation/Link",component:o,args:{onPress:W("onPress"),isDisabled:!1},render:r=>e.createElement(o,{...r},"Adjust project"),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>e.createElement(A,null,"Check our ",e.createElement(o,{...r},"onboarding")," for more information.")},t={args:{isDisabled:!0}},n={render:r=>e.createElement(o,{...r,href:"https://mittwald.de"},"Download invoice",e.createElement(q,{"aria-label":"download"}))},i={args:{color:"dark"},parameters:{backgrounds:N}},c={args:{color:"light"},parameters:{backgrounds:O}},m={args:{target:"_blank"},render:r=>e.createElement(o,{...r},"mittwald.de")},p={args:{target:"_blank",download:!0},render:r=>e.createElement(o,{...r},"Download file")};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,k,D;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
