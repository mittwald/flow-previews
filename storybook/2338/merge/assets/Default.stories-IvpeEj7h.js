import{j as o}from"./iframe-BZ1p44Xs.js";import{B as e}from"./Button-BXzJaHaH.js";import{c,d as l,e as m}from"./IconWarning-BeCXg6tW.js";import{T as p}from"./Text-CplKG2wk.js";import{A as d}from"./Avatar-WXSkv75C.js";import{T as u,a as x}from"./Tooltip-CqH1Sb2R.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{I as f}from"./Image-BdCDw9k5.js";import{S as i}from"./StoryBackground-B31Ag3zs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./remote-BEHhGsYi.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./AlertIcon-CBSVIKWa.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ro={title:"Actions/Button",component:e,args:{onPress:h("onPress"),variant:"solid",color:"primary",size:"m",isDisabled:!1,isReadOnly:!1,isPending:!1,isSucceeded:!1,isFailed:!1},argTypes:{color:{control:"inline-radio",options:["primary","accent","secondary","danger","dark","light"]},variant:{control:"inline-radio",options:["plain","solid","soft","outline"]},size:{control:"inline-radio",options:["m","s"]},isDisabled:{control:"boolean"},isReadOnly:{control:"boolean"},isPending:{control:"boolean"},isSucceeded:{control:"boolean"},isFailed:{control:"boolean"}},parameters:{controls:{exclude:["onPress"]}},render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,children:"Button"})})},t={},n={render:r=>o.jsx(i,{color:r.color,children:o.jsx(e,{...r,"aria-label":"Add to favorites",children:o.jsx(l,{})})})},s={render:r=>o.jsx(i,{color:r.color,children:o.jsxs(e,{...r,children:[o.jsx(p,{children:"Add email address"}),o.jsx(m,{})]})})},a={parameters:{controls:{disable:!0}},render:r=>o.jsxs(u,{children:[o.jsxs(e,{...r,children:[o.jsx(d,{size:"l",children:o.jsx(f,{alt:"Gopher",src:g.imageSrc})}),o.jsx(c,{})]}),o.jsx(x,{children:"Profilbild ändern"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
