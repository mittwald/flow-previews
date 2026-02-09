import{j as r}from"./iframe-C-RKPwSE.js";import{B as e}from"./Button-C4QFurWq.js";import{G as c,n as d,J as u}from"./IconWarning-B9kpDIcu.js";import{T as l}from"./Text-DceSOphz.js";import{A as x}from"./Avatar-BVAQQ1MR.js";import{T as g,a as h}from"./Tooltip-YcJ1TK9J.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-PMk04Lr0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./remote-Dp4k7gKv.js";import"./Button-BUrsQ2n2.js";import"./utils-BNo7v4Co.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./AlertIcon-EwQ99KQC.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
