import{r as h,j as r}from"./iframe-DunzINT4.js";import{P as m}from"./PasswordCreationField-BXVNN2fU.js";import{L as u}from"./Label-CAkB50pb.js";import{B as g}from"./Button-D4ye7DRq.js";import{m as C}from"./IconWarning-kFcnfyhN.js";import{C as w}from"./CopyButton-D8ddIxxD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic--RH-hhxe.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./clsx-B-dksMZM.js";import"./index-Wl0ZfLjP.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./FieldDescription-Ci87Xxem.js";import"./Text-DTHO_DRR.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./Text-CMXpTIb-.js";import"./utils-B66WPIWK.js";import"./Tooltip-CJnwHDH3.js";import"./OverlayArrow-DJczCQVT.js";import"./useFocus-CLsD99Jd.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./context-XFBu4tuG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BpLynkPU.js";import"./useControlledState-BzLfbFoS.js";import"./useFocusable-BqXitQDl.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./ContextualHelpTrigger-Bxx5AV0e.js";import"./Popover-DJxHz7NJ.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VDpDAbVy.js";import"./RSPContexts-DYG4soUM.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./OverlayTrigger-B1b7JrEs.js";import"./Heading-ClXpNfz0.js";import"./Heading-B3Dcho9D.js";import"./useFieldComponent-mGz2JkQm.js";import"./FieldError-CxTapnNI.js";import"./FieldError-MxPTKBhw.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";import"./useControlledHostValueProps-iizhxm66.js";import"./TextField-E09LQuue.js";import"./Form-Dp-IAcVR.js";import"./Group-Cb2TDoEs.js";import"./Input-CibPE8Js.js";import"./useTextField-CDucbR-t.js";import"./useFormReset-BCoUHfvE.js";import"./useFormValidation-CAKGNU-r.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CzZyxAnt.js";import"./remote-BHsosJBg.js";import"./react-children-utilities-DL9biY8W.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
