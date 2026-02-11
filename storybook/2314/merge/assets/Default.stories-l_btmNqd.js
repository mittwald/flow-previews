import{r as h,j as r}from"./iframe-lphi5Fln.js";import{P as m}from"./PasswordCreationField-Be58zJ-H.js";import{L as u}from"./Label-CqftOgdQ.js";import{B as g}from"./Button-Luzxnqg_.js";import{m as C}from"./IconWarning-Dv_szZY_.js";import{C as w}from"./CopyButton-Bw9gLXyM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dz56l0zD.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./Action-DdOAmdm4.js";import"./context-D_Cvxd07.js";import"./useStatic-DoydbngC.js";import"./browser-DxP0Rs6D.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./FieldDescription-CbFWtu2W.js";import"./Text-DhRxTRp1.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./utils-Is-sFETw.js";import"./Tooltip-DGqwwfT5.js";import"./OverlayArrow-CILdtqTg.js";import"./useFocus-BYwX3hbJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./context-hul-JKEa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-y2NKP0hv.js";import"./useControlledState-D2ulvinQ.js";import"./useFocusable-CWG73OOy.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./ContextualHelpTrigger-ByKSwl8K.js";import"./Popover-BEcdv2wn.js";import"./useOverlayController-DEMdk2HW.js";import"./OverlayContextProvider-Cdtv7zJY.js";import"./Dialog-any5Q92a.js";import"./Button-DBLw-vMJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ByR9A8gc.js";import"./RSPContexts-D5Dv-vEP.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./VisuallyHidden-DjAmLvSg.js";import"./OverlayTrigger-DqdhJFXL.js";import"./Heading-CdmYtBXv.js";import"./Heading-DnWdAz5V.js";import"./useFieldComponent-6mmayeW0.js";import"./FieldError-CHFlSzPg.js";import"./FieldError-nA_6I3J3.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";import"./useControlledHostValueProps-BjCXTivP.js";import"./TextField-DUKlMQEe.js";import"./Form-BQ7FIPf4.js";import"./Group-Co1kbRjJ.js";import"./Input-CYD73VvK.js";import"./useTextField-BUGG9crO.js";import"./useFormReset-CSRdRe02.js";import"./useFormValidation-fTAeqOxz.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./remote-B9VD8JHH.js";import"./react-children-utilities-CfiAj_ax.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
