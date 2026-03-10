import{j as o}from"./iframe-Bge_iwzq.js";import{B as e}from"./Button-DYq5oiR6.js";import{c,d as l,e as m}from"./IconWarning-CnGwh2Y2.js";import{T as p}from"./Text-Bo3CKbUr.js";import{A as d}from"./Avatar-D60EbKtz.js";import{T as u,a as x}from"./Tooltip-BhcamjbY.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{I as f}from"./Image-arBWudKN.js";import{S as i}from"./StoryBackground-Bt6nVvMb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./remote-CO23tKXG.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./AlertIcon-DJ3CSUsO.js";import"./OverlayArrow-CPd1sFKC.js";import"./useControlledState-CyAGSHwZ.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ro={title:"Actions/Button",component:e,args:{onPress:h("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1,isReadOnly:!1,isPending:!1,isSucceeded:!1,isFailed:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isPending:{control:"boolean"},isSucceeded:{control:"boolean"},isFailed:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,children:"Button"})})},t={},n={render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,"aria-label":"Add to favorites",children:o.jsx(l,{})})})},s={render:r=>o.jsx(i,{color:r.color,children:o.jsxs(e,{...r,children:[o.jsx(p,{children:"Add email address"}),o.jsx(m,{})]})})},a={parameters:{controls:{disable:!0}},render:r=>o.jsxs(u,{children:[o.jsxs(e,{...r,children:[o.jsx(d,{size:"l",children:o.jsx(f,{alt:"Gopher",src:g.imageSrc})}),o.jsx(c,{})]}),o.jsx(x,{children:"Profilbild ändern"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
