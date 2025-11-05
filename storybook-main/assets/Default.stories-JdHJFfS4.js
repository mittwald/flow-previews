import{j as r}from"./iframe-B0zV29Ol.js";import{B as e}from"./Button-DMc7qjuD.js";import{d as m,c as d,V as u}from"./IconWarning-DElUfIyP.js";import{T as l}from"./Text-DNMpJh06.js";import{A as x}from"./Avatar-YRFl0AXp.js";import{a as g,T as h}from"./Tooltip-C70bKdpZ.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-CIQLgEEc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./index-Bap8DgrM.js";import"./LoadingSpinner-91ddITMV.js";import"./Button-B7c7aZAn.js";import"./utils-rMLWZEZ9.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CJ74nGTM.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./browser-D-MgOzku.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./AlertIcon-C4QVJ3jz.js";import"./ClearPropsContextView-DoK20Ig-.js";import"./OverlayArrow-CvdWoYZq.js";import"./useControlledState-BMTFuSH8.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,J={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(m,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(m,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},p={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props} aria-label="Add to favorites">
      <IconPlus />
    </Button>,
  args: {
    size: "s"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...p.parameters?.docs?.source}}};const Q=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,c as SmallWithTextAndIcon,p as WithAvatar,a as WithIcon,i as WithTextAndIcon,Q as __namedExportsOrder,J as default};
