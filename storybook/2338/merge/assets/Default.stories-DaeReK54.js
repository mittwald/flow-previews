import{j as o}from"./iframe-BXGfha1q.js";import{B as e}from"./Button-DfmOHFsC.js";import{c,d as l,e as m}from"./IconWarning-1Z1PxSqQ.js";import{T as p}from"./Text-BbFupL_Y.js";import{A as d}from"./Avatar-DFoUENWr.js";import{T as u,a as x}from"./Tooltip-CBhJ0Ia9.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{I as f}from"./Image-2zXtAN5U.js";import{S as i}from"./StoryBackground-ERSKuX9a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./LoadingSpinner-CnywtlQ4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./remote-DEIhwdad.js";import"./Button-DxgvyAFC.js";import"./utils-DDzB-hS3.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./AlertIcon-DqNX7jjv.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ro={title:"Actions/Button",component:e,args:{onPress:h("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1,isReadOnly:!1,isPending:!1,isSucceeded:!1,isFailed:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isPending:{control:"boolean"},isSucceeded:{control:"boolean"},isFailed:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,children:"Button"})})},t={},n={render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,"aria-label":"Add to favorites",children:o.jsx(l,{})})})},s={render:r=>o.jsx(i,{color:r.color,children:o.jsxs(e,{...r,children:[o.jsx(p,{children:"Add email address"}),o.jsx(m,{})]})})},a={parameters:{controls:{disable:!0}},render:r=>o.jsxs(u,{children:[o.jsxs(e,{...r,children:[o.jsx(d,{size:"l",children:o.jsx(f,{alt:"Gopher",src:g.imageSrc})}),o.jsx(c,{})]}),o.jsx(x,{children:"Profilbild ändern"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
