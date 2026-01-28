import{r as h,j as r}from"./iframe-BE2KIrNP.js";import{P as m}from"./PasswordCreationField-WqHxClyc.js";import{L as u}from"./Label-BBYAWH-Z.js";import{B as g}from"./Button-DTG6_onu.js";import{m as C}from"./IconWarning-pheKtU5F.js";import{C as w}from"./CopyButton-2OUInVSA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DKw0AuDc.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./clsx-B-dksMZM.js";import"./index-BeVui2PP.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./browser-B5VZQlUE.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./FieldDescription-B7Q7zUwA.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./utils-CetDBScY.js";import"./Tooltip-x26d8Z3r.js";import"./OverlayArrow-B7hxVbyO.js";import"./useFocus-D19rPtJ7.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./context-Cl9Jg8XT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CXSA7vN6.js";import"./useControlledState-O9ITVI5k.js";import"./useFocusable-PS7GdwKW.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./ContextualHelpTrigger-BP4bIKdz.js";import"./Popover-Ba9XQcrf.js";import"./useOverlayController-CtV9FOyM.js";import"./OverlayContextProvider-DV_-MJEg.js";import"./Dialog-C3P1Ogqg.js";import"./Button-DX-gXX1k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wlnUrUkL.js";import"./RSPContexts-B5Mb9Vey.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./VisuallyHidden-KypC6JrD.js";import"./OverlayTrigger-DnihfWmG.js";import"./Heading-C03aqcaL.js";import"./Heading-CDAU15CX.js";import"./useFieldComponent-8fOA-m-u.js";import"./FieldError-DLWZre89.js";import"./FieldError-CYuYbE_Y.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";import"./useControlledHostValueProps-BjkpzwSM.js";import"./TextField-W3j8ZdtU.js";import"./Form-7VWdSJkH.js";import"./Group-BgqvKisC.js";import"./Input-lgtpKVFw.js";import"./useTextField-BkiiDUW1.js";import"./useFormReset-DGFO0EL0.js";import"./useFormValidation-BVWNV9RZ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CpXmc85g.js";import"./remote-BDPI1xTN.js";import"./react-children-utilities-DEl2g9ZF.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
