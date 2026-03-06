import{j as r}from"./iframe-BLMVSPV3.js";import{B as e}from"./Button-RfhP7QLX.js";import{J as c,n as d,L as u}from"./IconWarning-DFK0SIT3.js";import{T as l}from"./Text-CGLO_VNW.js";import{A as x}from"./Avatar-6WZJIgHY.js";import{T as g,a as h}from"./Tooltip-Cn4nFX1Z.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-meUkFuWq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./index-B-iUx4vd.js";import"./LoadingSpinner-BCnxKzgI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./remote-B_iWR4WH.js";import"./Button-4lGsfIj0.js";import"./utils-je6Mfjnf.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgsdN2D5.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useFocusable-DsXmOaAq.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./AlertIcon-BrGMsY0L.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
