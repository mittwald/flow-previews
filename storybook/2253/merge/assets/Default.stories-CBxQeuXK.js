import{j as r}from"./iframe-DA37PzgD.js";import{B as e}from"./Button-C_3hQ6qU.js";import{E as c,n as d,G as u}from"./IconWarning-DMc9nDIB.js";import{T as l}from"./Text-CKy5VQ2_.js";import{A as x}from"./Avatar-D2qchoY4.js";import{T as g,a as h}from"./Tooltip-WQCQ-XqN.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-XmwLqecN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./context-KzPqYKh3.js";import"./remote-BJWo5b31.js";import"./Button-BzF7Ww8-.js";import"./utils-DtYp6psM.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./browser-Tq-Ovndo.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./AlertIcon-BbDcA2fv.js";import"./OverlayArrow-BTxrL9C1.js";import"./useControlledState-izS5uoD6.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
