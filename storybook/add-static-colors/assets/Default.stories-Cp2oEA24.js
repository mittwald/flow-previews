import{L as c}from"./Link-CWeksfmF.js";import{a as I}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-C0kgWbNG.js";import"./IconApp-D-kcT16p.js";import{d as T}from"./IconWarning-Cw7drCLR.js";import{T as F}from"./Text-B0HvyfcO.js";import"./flowComponent-B3-LTTWn.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-D7InqjV7.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BZaguEpt.js";import"./useFocusable-Ddi47NB9.js";import"./v4-CQkTLCs1.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./Text-nCCH5eH7.js";const V={title:"Navigation/Link",component:c,args:{onPress:I("onPress")},render:r=>e.createElement(c,{...r},"Adjust project"),parameters:{controls:{exclude:["onPress"]}},argTypes:{color:{control:"inline-radio",options:["primary","static-black","static-white"]}}},a={},t={render:r=>e.createElement(F,null,"Check our ",e.createElement(c,{...r},"onboarding")," for more information.")},o={args:{isDisabled:!0}},s={render:r=>e.createElement(c,{...r,href:"https://mittwald.de"},"mittwald.de",e.createElement(T,{"aria-label":"external link"}))},n={args:{color:"static-black"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#E0EBFF"}]}}},i={args:{color:"static-white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,k;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Text>
      Check our <Link {...props}>onboarding</Link> for more information.
    </Text>
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,E,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Link {...props} href="https://mittwald.de">
      mittwald.de
      <IconExternalLink aria-label="external link" />
    </Link>
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var S,v,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: "static-black"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#E0EBFF"
      }]
    }
  }
}`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var w,B,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    color: "static-white"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#002A7B"
      }]
    }
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const X=["Default","Inline","Disabled","WithIcon","StaticBlack","StaticWhite"];export{a as Default,o as Disabled,t as Inline,n as StaticBlack,i as StaticWhite,s as WithIcon,X as __namedExportsOrder,V as default};
