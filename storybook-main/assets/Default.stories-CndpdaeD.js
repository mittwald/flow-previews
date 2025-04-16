import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as e}from"./Link-oLXHDEhg.js";import{a as A}from"./index-B-lxVbXh.js";import"./index-F2Fta7eo.js";import{T as N}from"./Text-2peEn3wM.js";import{a as O,s as R}from"./storyBackgrounds-GFSAi-dI.js";import{w as q}from"./IconWarning-DbC7dOQ5.js";import"./PropsContextProvider-CwIJmh-g.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./utils-D0arg4qg.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-Tcmfb9SA.js";import"./v4-CtRu48qb.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-AN1gvCNp.js";const pr={title:"Navigation/Link",component:e,args:{onPress:A("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(N,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(q,{"aria-label":"download"})]})},i={args:{color:"dark"},parameters:{backgrounds:O}},c={args:{color:"light"},parameters:{backgrounds:R}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},p={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,k,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var D,b,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var w,x,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...(L=(x=t.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var j,S,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var B,E,v;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var P,C,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const mr=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,p as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,mr as __namedExportsOrder,pr as default};
