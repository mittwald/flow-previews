import{j as o}from"./iframe-CBpAxFwW.js";import{B as e}from"./Button-DJILh_tx.js";import{c,d as l,e as m}from"./IconWarning-gYJb7yiz.js";import{T as p}from"./Text-DmIlada7.js";import{A as d}from"./Avatar-COhgiUOT.js";import{T as u,a as x}from"./Tooltip-BXJ36UFn.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{I as f}from"./Image-D_Ho8Rvj.js";import{S as i}from"./StoryBackground-k6rCwjWp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./remote-Bqh6MTep.js";import"./Button-B6LJ-bNf.js";import"./utils-DlBHsIHw.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./AlertIcon-DpBhbRLN.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ro={title:"Actions/Button",component:e,args:{onPress:h("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1,isReadOnly:!1,isPending:!1,isSucceeded:!1,isFailed:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isPending:{control:"boolean"},isSucceeded:{control:"boolean"},isFailed:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,children:"Button"})})},t={},n={render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,"aria-label":"Add to favorites",children:o.jsx(l,{})})})},s={render:r=>o.jsx(i,{color:r.color,children:o.jsxs(e,{...r,children:[o.jsx(p,{children:"Add email address"}),o.jsx(m,{})]})})},a={parameters:{controls:{disable:!0}},render:r=>o.jsxs(u,{children:[o.jsxs(e,{...r,children:[o.jsx(d,{size:"l",children:o.jsx(f,{alt:"Gopher",src:g.imageSrc})}),o.jsx(c,{})]}),o.jsx(x,{children:"Profilbild ändern"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Button {...props} aria-label="Add to favorites">
        <IconPlus />
      </Button>
    </StoryBackground>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <StoryBackground color={props.color}>
      <Button {...props}>
        <Text>Add email address</Text>
        <IconChevronDown />
      </Button>
    </StoryBackground>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <TooltipTrigger>
      <Button {...props}>
        <Avatar size="l">
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
        <IconCamera />
      </Button>
      <Tooltip>Profilbild ändern</Tooltip>
    </TooltipTrigger>
}`,...a.parameters?.docs?.source}}};const eo=["Default","WithIcon","WithTextAndIcon","WithAvatar"];export{t as Default,a as WithAvatar,n as WithIcon,s as WithTextAndIcon,eo as __namedExportsOrder,ro as default};
