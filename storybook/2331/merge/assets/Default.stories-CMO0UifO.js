import{r as h,j as r}from"./iframe-BDFzVZbC.js";import{P as m}from"./PasswordCreationField-BeyQggo5.js";import{L as u}from"./Label-LyL-GXC8.js";import{B as g}from"./Button-C7bK1-uf.js";import{m as C}from"./IconWarning-aDXn3__r.js";import{C as w}from"./CopyButton-BZ4XU0kR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-78IPl_xO.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./clsx-B-dksMZM.js";import"./index-CcbRX2xZ.js";import"./ActionBatch-dkJpCMmD.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./browser-D6pVd-JB.js";import"./getActionGroupSlot-DJwqOljU.js";import"./FieldDescription-CoqoTaGo.js";import"./Text-DCO-oE1a.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./utils-DRqoG6OW.js";import"./Tooltip-bUOTRM31.js";import"./OverlayArrow-BhJrUQVC.js";import"./useFocus-BE-kuowd.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./context-sVk6h2Ud.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CxM1MJ0B.js";import"./useControlledState-CxpqxoPE.js";import"./useFocusable-nLh15Hem.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./ContextualHelpTrigger-CgUXpJoa.js";import"./Popover-DEUzSgQe.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./RSPContexts-CK_xwACt.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";import"./OverlayTrigger-BwyAupi1.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./useFieldComponent-DJTCy7fJ.js";import"./FieldError-BgOx5Pdv.js";import"./FieldError-4UEPVceR.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";import"./useControlledHostValueProps-CEpJHasI.js";import"./TextField-BtoWGrMx.js";import"./Form-MSkU5_70.js";import"./Group-DLMWWecZ.js";import"./Input-CI5lEjHT.js";import"./useTextField-BGQ_V9mX.js";import"./useFormReset-CQpdwD5T.js";import"./useFormValidation-CtBJZQwA.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CPBqqCdo.js";import"./remote-C6miTdu_.js";import"./react-children-utilities-Brx0Ao47.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
