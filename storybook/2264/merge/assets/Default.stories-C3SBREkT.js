import{r as h,j as r}from"./iframe-CL_XwmGn.js";import{P as m}from"./PasswordCreationField-BggESQoI.js";import{L as u}from"./Label-D8wjF5yZ.js";import{B as g}from"./Button-D2VcFxMo.js";import{m as C}from"./IconWarning-BJDkWSaD.js";import{C as w}from"./CopyButton-xBawpOAy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-qzGoZAaQ.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./clsx-B-dksMZM.js";import"./index-E9PNAIL6.js";import"./Action-BeuDPcZa.js";import"./context-C4d2ZO_d.js";import"./useStatic-KIt4AINJ.js";import"./browser-BUAGSuau.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./FieldDescription-B8hcReII.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./utils-pMOpDdKA.js";import"./Tooltip-ru0_7Mnb.js";import"./OverlayArrow-CguIeEaq.js";import"./useFocus-BpR4SkFv.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./context-BrZvYWUs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CguvIA_y.js";import"./useFocusable-CrdCOPEw.js";import"./useFocusRing-vwKb8oQw.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./ContextualHelpTrigger-CGS7Anth.js";import"./Popover-DNdwUWwE.js";import"./useOverlayController-BHc_huao.js";import"./OverlayContextProvider-DerEZw4j.js";import"./Dialog-BknS8Hxj.js";import"./Button-CWqxXJtj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BzQNsH-t.js";import"./RSPContexts-A2U_AiO5.js";import"./Collection-D-2fJfX0.js";import"./CollectionBuilder-D2SZxLcC.js";import"./SelectionIndicator-KxjlcYOr.js";import"./Separator-CW5j6fDP.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";import"./OverlayTrigger-2Lg8C4JA.js";import"./Heading-DNlihVQQ.js";import"./Heading-CAyFlpGN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CJlPbBit.js";import"./FieldError-p9GwIgel.js";import"./FieldError-B4bZwJpA.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";import"./useControlledHostValueProps-DhDFNqRj.js";import"./TextField-CWJX0VqQ.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useTextField-BhxE74Xi.js";import"./useFormReset-Dt36AuVA.js";import"./useFormValidation-B17WGe6J.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./remote-vDvbK7RM.js";import"./react-children-utilities-D5DVgEhI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
