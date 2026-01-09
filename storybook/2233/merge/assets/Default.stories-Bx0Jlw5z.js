import{r as h,j as r}from"./iframe-tI_lG94_.js";import{P as m}from"./PasswordCreationField-Bj9nsyt3.js";import{L as u}from"./Label-CdVUwStZ.js";import{B as g}from"./Button-WUI-ZJ9l.js";import{o as C}from"./IconWarning-BFYQkdin.js";import{C as w}from"./CopyButton-hoYgXexT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DqOiE30k.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./clsx-B-dksMZM.js";import"./index-CBk6rXlg.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./browser-DuhBvQkx.js";import"./getActionGroupSlot-DPvye52P.js";import"./FieldDescription-CSWmc1EX.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./utils-bmh-HeLH.js";import"./Tooltip-DZr1j3bU.js";import"./OverlayArrow-DuDGHp0O.js";import"./useFocus-DCHopMY8.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./context-CBF_EHvQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BE5RFE46.js";import"./useFocusable-BnM0ssdw.js";import"./useFocusRing-Dgbmnyxw.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./ContextualHelpTrigger-ShJ-vFCO.js";import"./Popover-DkoOxFI-.js";import"./useOverlayController-B_c7Bk6_.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./Dialog-Bo5p_Zqr.js";import"./Button-EHR8zEQX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C1ke7TUF.js";import"./RSPContexts-C1ceWNax.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./OverlayTrigger-CuZ4GO5W.js";import"./Heading-BGy3_a0K.js";import"./Heading-Ds7I4FP5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-_Dyiwxtg.js";import"./FieldError-DYW7UPuf.js";import"./FieldError-CdG59lLT.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./useControlledHostValueProps-Mo_orcSi.js";import"./TextField-U30YbphT.js";import"./Form-B72YgAOe.js";import"./Group-CWqc5_8a.js";import"./Input-DTXfGVIZ.js";import"./useTextField-DIaV0kgB.js";import"./useFormReset-LNt8buNd.js";import"./useFormValidation--MR_E_GW.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-KbaLfraT.js";import"./remote-CmKo-bli.js";import"./react-children-utilities-CcY8tZWQ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
