import{j as r}from"./iframe-CFTqgbub.js";import{B as e}from"./Button-DYo4uywI.js";import{J as c,n as d,L as u}from"./IconWarning-BmBcYBZE.js";import{T as l}from"./Text-DGb4Yj-N.js";import{A as x}from"./Avatar-DYbItyG9.js";import{T as g,a as h}from"./Tooltip-DJu3FJXh.js";import{d as T}from"./dummyText-CX_I_Wpl.js";import{I as A}from"./Image-BYmweDIt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./remote-BlniWp0j.js";import"./Button-BKBgz7xZ.js";import"./utils-B4tY5r2S.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./AlertIcon-DR1EaW6b.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Actions/Button",component:e,args:{onPress:I("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:o=>r.jsx(e,{...o,children:"Continue/Action"})},s={},t={args:{size:"s"}},a={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})})},n={render:o=>r.jsx(e,{...o,"aria-label":"Add to favorites",children:r.jsx(c,{})}),args:{size:"s"}},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]})},p={render:o=>r.jsxs(e,{...o,children:[r.jsx(l,{children:"Add email address"}),r.jsx(d,{})]}),args:{size:"s"}},m={render:o=>r.jsxs(g,{children:[r.jsxs(e,{...o,children:[r.jsx(x,{size:"l",children:r.jsx(A,{alt:"Gopher",src:T.imageSrc})}),r.jsx(u,{})]}),r.jsx(h,{children:"Profilbild ändern"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
