import{j as o}from"./iframe-DyMBbPqz.js";import{L as e}from"./Link-k0csAJr-.js";import{T as N}from"./Text-CukGSnAt.js";import{f as R}from"./IconWarning-ZZpE0RLv.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./context-Da3l2mom.js";import"./utils-CVBG1xQY.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D3aMe8WM.js";import"./useFocus-DU8oSjU-.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocusable-DC8rXwC1.js";import"./browser-n8MK_CxL.js";import"./EmulatedBoldText-xvO4zYSH.js";import"./Text-CM2C2q3t.js";const{action:W}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Navigation/Link",component:e,args:{onPress:W("onPress"),isDisabled:!1},render:r=>o.jsx(e,{...r,children:"Adjust project"}),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]},isDisabled:{control:"boolean"}}},a={},s={render:r=>o.jsxs(N,{children:["Check our ",o.jsx(e,{...r,children:"onboarding"})," for more information."]})},n={args:{isDisabled:!0}},t={render:r=>o.jsxs(e,{...r,href:"https://mittwald.de",children:["Download invoice",o.jsx(R,{"aria-label":"download"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},d={args:{target:"_blank"},render:r=>o.jsx(e,{...r,children:"mittwald.de"})},l={args:{target:"_blank",download:!0},render:r=>o.jsx(e,{...r,children:"Download file"})};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,k,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(b=(k=s.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var h,D,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(D=n.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,w,L;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      Download invoice
      <IconDownload aria-label="download" />
    </Link>
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var _,j,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var I,T,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,v,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    target: "_blank"
  },
  render: props => <Link {...props}>mittwald.de</Link>
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var P,y,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    target: "_blank",
    download: true
  },
  render: props => <Link {...props}>Download file</Link>
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const sr=["Default","Inline","Disabled","WithIcon","Dark","Light","ExternalLink","Download"];export{i as Dark,a as Default,n as Disabled,l as Download,d as ExternalLink,s as Inline,c as Light,t as WithIcon,sr as __namedExportsOrder,ar as default};
