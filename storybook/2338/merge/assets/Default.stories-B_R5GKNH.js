import{j as o}from"./iframe-DBOgS3cI.js";import{B as e}from"./Button-DeSyDtjE.js";import{c,d as l,e as m}from"./IconWarning-Bt9IWQ3I.js";import{T as p}from"./Text-V6WF8rgy.js";import{A as d}from"./Avatar-DZJuv25R.js";import{T as u,a as x}from"./Tooltip-BMbUJuQE.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{I as f}from"./Image-CTSbhjZG.js";import{S as i}from"./StoryBackground-KvMmkpZj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./LoadingSpinner-BMYl670W.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./remote-CBP3xLJb.js";import"./Button-Dkv5VJcx.js";import"./utils-BhJeINWq.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./AlertIcon-CCMDdz-U.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ro={title:"Actions/Button",component:e,args:{onPress:h("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1,isReadOnly:!1,isPending:!1,isSucceeded:!1,isFailed:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isPending:{control:"boolean"},isSucceeded:{control:"boolean"},isFailed:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,children:"Button"})})},t={},n={render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,"aria-label":"Add to favorites",children:o.jsx(l,{})})})},s={render:r=>o.jsx(i,{color:r.color,children:o.jsxs(e,{...r,children:[o.jsx(p,{children:"Add email address"}),o.jsx(m,{})]})})},a={parameters:{controls:{disable:!0}},render:r=>o.jsxs(u,{children:[o.jsxs(e,{...r,children:[o.jsx(d,{size:"l",children:o.jsx(f,{alt:"Gopher",src:g.imageSrc})}),o.jsx(c,{})]}),o.jsx(x,{children:"Profilbild ändern"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
