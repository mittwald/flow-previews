import{L as c}from"./Link-CeGUTapo.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as e}from"./index-uCp2LrAq.js";import{T as B}from"./Text-CUixX_oz.js";import"./IconApp-DtUWP9rs.js";import{e as P}from"./IconWarning-YjEBVGoW.js";import{s as j,a as C}from"./storyBackgrounds-BHxp8d-8.js";import"./flowComponent-vzWTOrGV.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DL4LW3M_.js";import"./useFocusable-DIAzcF9v.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";const Z={title:"Navigation/Link",component:c,args:{onPress:w("onPress")},render:r=>e.createElement(c,{...r},"Adjust project"),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},o={},a={render:r=>e.createElement(B,null,"Check our ",e.createElement(c,{...r},"onboarding")," for more information.")},t={args:{isDisabled:!0}},s={render:r=>e.createElement(c,{...r,href:"https://mittwald.de"},"mittwald.de",e.createElement(P,{"aria-label":"external link"}))},n={args:{color:"dark"},parameters:{backgrounds:j}},i={args:{color:"light"},parameters:{backgrounds:C}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,f,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var L,b,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      mittwald.de
      <IconExternalLink aria-label="external link" />
    </Link>
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,E,y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var I,S,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const $=["Default","Inline","Disabled","WithIcon","Dark","Light"];export{n as Dark,o as Default,t as Disabled,a as Inline,i as Light,s as WithIcon,$ as __namedExportsOrder,Z as default};
