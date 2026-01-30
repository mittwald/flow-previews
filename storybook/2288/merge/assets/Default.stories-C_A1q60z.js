import{j as r}from"./iframe-DkT4d7Ot.js";import{B as e}from"./Button-B3KXRm13.js";import{E as c,n as d,G as u}from"./IconWarning-K6asu7lY.js";import{T as l}from"./Text-CN56Aq7p.js";import{A as x}from"./Avatar-ClD90Wm0.js";import{T as g,a as h}from"./Tooltip-CJlwYS3o.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-B-dJ2Q5A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./remote-B8vjNxTl.js";import"./Button-DKCc9Jm1.js";import"./utils-up3lG_mb.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loL-ySzv.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocusable-oFwI_mrj.js";import"./browser-CwBpRuL-.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./AlertIcon-CGIGsQoy.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
