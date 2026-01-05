import{r as h,j as r}from"./iframe-CnrbHwTe.js";import{P as m}from"./PasswordCreationField-Dds4PlCg.js";import{L as u}from"./Label-CIbW0Z8y.js";import{B as g}from"./Button-DoJYz9nf.js";import{n as C}from"./IconWarning-DgLNPfaL.js";import{C as w}from"./CopyButton-DeobnBF6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D-DaJWqs.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./clsx-B-dksMZM.js";import"./index-CUZGjyPT.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./useStatic-D1Vs9fsX.js";import"./browser-TZQakXKU.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./FieldDescription-B5czV7Ha.js";import"./Text-eTz9hgbN.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./Text-nMrjd92_.js";import"./utils-r4y_43wh.js";import"./Tooltip-BM722GKF.js";import"./OverlayArrow-CJqqEQZv.js";import"./useFocus-CW3ebFsS.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./context-B7MLny9I.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CcfbhOaY.js";import"./useFocusable-DrwEzR41.js";import"./useFocusRing-CRQTw2D7.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./ContextualHelpTrigger-CVdzoZMJ.js";import"./Popover-tLLFCijH.js";import"./useOverlayController-CZACBNcH.js";import"./OverlayContextProvider-DyMWHvaJ.js";import"./Dialog-CsKt9ioo.js";import"./Button-CDvqfYYW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoQNUybf.js";import"./RSPContexts-CU1Sv8RV.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./OverlayTrigger-QfzKXgOG.js";import"./Heading-4nCu50xU.js";import"./Heading-7TXA4VJI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./FieldError-BJU6XwC7.js";import"./FieldError-DsDXGDD4.js";import"./useControlledHostValueProps-B_45Kqg7.js";import"./TextField-Cw8BSFYt.js";import"./Form-CpewxKmk.js";import"./Group-Cm3CM_7W.js";import"./Input-U8_Yl4jm.js";import"./useTextField-oXE-_SAT.js";import"./useFormReset-n7eHOhOu.js";import"./useFormValidation-C9gosTEe.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BfrmZLfO.js";import"./remote-CmycR9zC.js";import"./react-children-utilities-Cnc3tfG3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
