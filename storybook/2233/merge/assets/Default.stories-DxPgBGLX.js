import{j as r}from"./iframe-BeQWUZkN.js";import{B as e}from"./Button-CGVqLO1a.js";import{E as c,n as d,G as u}from"./IconWarning-BINGtqrd.js";import{T as l}from"./Text-DBLOUBNs.js";import{A as x}from"./Avatar-Cd28HLfw.js";import{T as g,a as h}from"./Tooltip-DmO9pGJl.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-D9YnIp37.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./remote-BjhB0wla.js";import"./Button-CL6J7LkF.js";import"./utils-DahaGO1Z.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DC5PU-Mt.js";import"./useFocus-B8WX1wz4.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./browser-CC8M21FF.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./AlertIcon-Bvyhnsbm.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Button {...props}>
      <Text>Add email address</Text>
      <IconChevronDown />
    </Button>,
  args: {
    size: "s"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...m.parameters?.docs?.source}}};const sr=["Default","Small","WithIcon","SmallWithIcon","WithTextAndIcon","SmallWithTextAndIcon","WithAvatar"];export{s as Default,t as Small,n as SmallWithIcon,p as SmallWithTextAndIcon,m as WithAvatar,a as WithIcon,i as WithTextAndIcon,sr as __namedExportsOrder,er as default};
