import{r as h,j as r}from"./iframe-Bas3a7fO.js";import{P as m}from"./PasswordCreationField-KroNNBB1.js";import{L as u}from"./Label-QWyaEZ02.js";import{B as g}from"./Button-CCev3q47.js";import{m as C}from"./IconWarning-9FMOeqa7.js";import{C as w}from"./CopyButton-B_igU4Yu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtBYvx23.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./ActionBatch-Ctg3LC0z.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./browser-CI0OqVn7.js";import"./getActionGroupSlot-DxyevWSt.js";import"./FieldDescription-BqudxJ-b.js";import"./Text-D06q46lu.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./utils-eswKxOcw.js";import"./Tooltip-lg1qHEl3.js";import"./OverlayArrow-B1y4rBya.js";import"./useFocus-BpOhXbga.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./context-C6ovHfpS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing--4ecJhRH.js";import"./useControlledState-DnKF_srQ.js";import"./useFocusable-Dz64TW3s.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./ContextualHelpTrigger-8UkW2lEt.js";import"./Popover-DFE_w-KD.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./Dialog-BsJqG9mx.js";import"./Button-cgxxNusA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXALpkIT.js";import"./RSPContexts-BxdWTHUz.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";import"./OverlayTrigger-BU9PdTSa.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./useFieldComponent-CHbV_zSr.js";import"./FieldError-B_qklWB_.js";import"./FieldError-CYd-7Lc_.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./useControlledHostValueProps-BxfqBB9J.js";import"./TextField-DFKlupdW.js";import"./Form-C6AVvH4S.js";import"./Group-CjauqOEv.js";import"./Input-CDjrJnAd.js";import"./useTextField-DKwOo1j6.js";import"./useFormReset-C6M9OYlp.js";import"./useFormValidation-nso2YHkv.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CaJGFcVk.js";import"./remote-CQRN9i7s.js";import"./react-children-utilities-CKwozpx-.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
