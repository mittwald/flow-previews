import{r as h,j as r}from"./iframe-1XlmVqd5.js";import{P as m}from"./PasswordCreationField-BPVEo3j9.js";import{L as u}from"./Label-DewN6HGl.js";import{B as g}from"./Button-QkNnHSXc.js";import{m as C}from"./IconWarning-B1VVAKEh.js";import{C as w}from"./CopyButton-C3ri-I54.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-pa5Mho8z.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./clsx-B-dksMZM.js";import"./index-TUds5Kez.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./browser-BzXr98QP.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./FieldDescription-DjwLwJSM.js";import"./Text-DoMRIGKc.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./utils-DcI_f0WL.js";import"./Tooltip-DGtPXeP5.js";import"./OverlayArrow-DrpYygg_.js";import"./useFocus-B3hq9TNr.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./context-cVtndIAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-nXz5Fj6s.js";import"./useControlledState-DjEU-0mZ.js";import"./useFocusable-BsD1LxMy.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./ContextualHelpTrigger-CreOVGRw.js";import"./Popover-DWs4oiku.js";import"./useOverlayController-NHPQla43.js";import"./OverlayContextProvider-D7BkXl4r.js";import"./Dialog-RsR3YLab.js";import"./Button-DLO0tbpP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CBxBnL8r.js";import"./RSPContexts-Dq529x8m.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./VisuallyHidden-Dm6nphJv.js";import"./OverlayTrigger-DCCWO6LH.js";import"./Heading-BHa3WEIV.js";import"./Heading-CLPLrGSK.js";import"./useFieldComponent--2vv_KDv.js";import"./FieldError-D3E1IfUM.js";import"./FieldError-gWTdIqt3.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";import"./useControlledHostValueProps-B5zGe4HV.js";import"./TextField-B-to4Icx.js";import"./Form-XQS-LbjO.js";import"./Group-B8VxNK8d.js";import"./Input-DiBS55Zj.js";import"./useTextField-BfHwKAxn.js";import"./useFormReset-DNo3mt-e.js";import"./useFormValidation-BKr0RaqD.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BDWb_Uug.js";import"./remote-BMRYc7VB.js";import"./react-children-utilities-DoT8SEzZ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
