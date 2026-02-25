import{r as h,j as r}from"./iframe-teIxY4wP.js";import{P as m}from"./PasswordCreationField-6fvwRupX.js";import{L as u}from"./Label-CKh72PTo.js";import{B as g}from"./Button-CCmGuoae.js";import{m as C}from"./IconWarning-C8c-iA3p.js";import{C as w}from"./CopyButton-Vh2RMAr2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bd0vnJCs.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./clsx-B-dksMZM.js";import"./index-SbFVnFKt.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./browser-ClA0f7pc.js";import"./getActionGroupSlot-BwsAD19l.js";import"./FieldDescription-wvwmziA3.js";import"./Text-CB74-0Ir.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Text-BEd6-Qqe.js";import"./utils-C8wUhSun.js";import"./Tooltip-mjvYh2yk.js";import"./OverlayArrow-BnOVUBMe.js";import"./useFocus-Pnl5w-Ue.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./context-Bkxu1haQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DM5Gti31.js";import"./useControlledState-Dnjkc9fO.js";import"./useFocusable-C4kMCM88.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./ContextualHelpTrigger-BHl7AyVK.js";import"./Popover-Bc-eSFBz.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./Dialog-CPTLkUM-.js";import"./Button-DPcEERaP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Znh85jsw.js";import"./RSPContexts-DVypfZug.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";import"./OverlayTrigger-DxY4DuAp.js";import"./Heading-BcZ49Txx.js";import"./Heading-CqSJbJuk.js";import"./useFieldComponent-DaZL5efl.js";import"./FieldError-4X4kCiGy.js";import"./FieldError-HPfFKZ-Z.js";import"./AlertText-B6Az6kDS.js";import"./AlertIcon-nbGMee0S.js";import"./useControlledHostValueProps-CZYJDwJ3.js";import"./TextField-BQVu9MxT.js";import"./Form-BrsNngNz.js";import"./Group-CXesKRc7.js";import"./Input-D4TpTGNB.js";import"./useTextField-DQ7VZjBn.js";import"./useFormReset-DcLCq2Kv.js";import"./useFormValidation-CRVUVzjp.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CKqfIoaL.js";import"./remote-DC3yMzFm.js";import"./react-children-utilities-nsxusDmH.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
