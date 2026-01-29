import{r as h,j as r}from"./iframe-Bj8CIgLy.js";import{P as m}from"./PasswordCreationField-T6dPPpW1.js";import{L as u}from"./Label-DCfOJgVU.js";import{B as g}from"./Button-b_60CJFp.js";import{m as C}from"./IconWarning-KvO0562x.js";import{C as w}from"./CopyButton-CwFeFXIa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DEq-wVmB.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./useStatic-BJFVwiuT.js";import"./browser-Rl4DjN4H.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./FieldDescription-tBjikzHa.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./utils-D41FTHpf.js";import"./Tooltip-sa6qPAw7.js";import"./OverlayArrow-zA421arv.js";import"./useFocus-BJLP4kuV.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./context-RK9vgtK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./useFocusable-DNf9Dm0r.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./ContextualHelpTrigger-9o23bYp0.js";import"./Popover-BqYOhRmm.js";import"./useOverlayController-1hyOtPEK.js";import"./OverlayContextProvider-CVeWPhf8.js";import"./Dialog-vXYkYCcw.js";import"./Button-Kf97rzrP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BLrqdZMB.js";import"./RSPContexts-C3RQOwqv.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./OverlayTrigger-BDKA1kYb.js";import"./Heading-CKRtDLQC.js";import"./Heading-CLbyuN1D.js";import"./useFieldComponent-DFS7CEov.js";import"./FieldError-Dbjs-A5K.js";import"./FieldError-cTj-tlV1.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./useControlledHostValueProps-D2bTA6r2.js";import"./TextField-DWq53d6e.js";import"./Form-CdHdNrpC.js";import"./Group-C2p9sJyZ.js";import"./Input-DxRXMpsm.js";import"./useTextField-gMvFPb5G.js";import"./useFormReset-DPVe5t_C.js";import"./useFormValidation-CuYWsRMr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./remote-ChNLl0N8.js";import"./react-children-utilities-CJqcrfy-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
