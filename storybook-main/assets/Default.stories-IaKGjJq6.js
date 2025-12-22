import{r as h,j as r}from"./iframe-DALg75d7.js";import{P as m}from"./PasswordCreationField-BPE4Hfji.js";import{L as u}from"./Label-CllN_pGF.js";import{B as g}from"./Button-CxCFU3Sm.js";import{n as C}from"./IconWarning-CIuZ66pt.js";import{C as w}from"./CopyButton-icwE7zvY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DnyVnPzZ.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./Action-B-LX0Gdh.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./browser-BOjJAEEq.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./FieldDescription-CPnssZ8z.js";import"./Text-BfSm9wB3.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./utils-CCMGMBS3.js";import"./Tooltip-fK_VMBXs.js";import"./OverlayArrow-DlELcq_K.js";import"./useFocus-uyJaeSg2.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./context-D-SwIuvT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-10c65vgi.js";import"./useFocusable-KXnvIYuK.js";import"./useFocusRing-DgbRXdyO.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./ContextualHelpTrigger-D1Z_d8HK.js";import"./Popover-DFPDtyNS.js";import"./useOverlayController-CJNm9GBn.js";import"./OverlayContextProvider-BeL-SPbw.js";import"./Dialog-BcVnlKtW.js";import"./Button-CAn5W5h2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlF5TfdE.js";import"./RSPContexts-Bv06n-kH.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./OverlayTrigger-DY2Hgbuf.js";import"./Heading-CnbEZOuS.js";import"./Heading-D55KeDUv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BaBZIB3g.js";import"./FieldError-JMY6vjHT.js";import"./FieldError-B5AAUQ1i.js";import"./useControlledHostValueProps-Ce6KWhnZ.js";import"./TextField-aWZOiaVk.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useTextField-B5pPfAtE.js";import"./useFormReset-D3blZuYj.js";import"./useFormValidation-jiwCVXG0.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DKmXkdSk.js";import"./remote-Bn6u74KD.js";import"./react-children-utilities-Cil9A_jw.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
