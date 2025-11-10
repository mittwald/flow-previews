import{j as r}from"./iframe-CVnOevS7.js";import{B as e}from"./Button-Cf7B0HY9.js";import{d as m,c as d,V as u}from"./IconWarning-B_svJUl9.js";import{T as l}from"./Text-Bxez-FPO.js";import{A as x}from"./Avatar-D3cwiEC5.js";import{a as g,T as h}from"./Tooltip-Dzxj1hFf.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-B5CmC758.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./index-Cr689PiB.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./utils-CGDhhS2B.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1NGcly_.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./browser-DLVk8Qjw.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./AlertIcon-DHgwBo_e.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,J={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(m,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(m,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},p={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
