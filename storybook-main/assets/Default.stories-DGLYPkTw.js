import{r as h,j as r}from"./iframe-BziZnbbf.js";import{P as m}from"./PasswordCreationField-C680i-ZA.js";import{L as u}from"./Label-7ab3WcOE.js";import{B as g}from"./Button-BsOsKcj7.js";import{l as C}from"./IconWarning-CJvxfsrj.js";import{C as w}from"./CopyButton-CaA-_wbp.js";import"./index-nuYtCEEu.js";import"./dynamic-BFzO3wyN.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./clsx-B-dksMZM.js";import"./index-_EM7mgZk.js";import"./useFieldComponent-yHiwdZcU.js";import"./utils-C0RTyIHD.js";import"./Text-fJHWLREE.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";import"./Group-aJmZoBky.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocus-ycXwMZE-.js";import"./Input-Diy1RLsK.js";import"./Hidden-Bnko_h1D.js";import"./TextField-DQ99mzfo.js";import"./RSPContexts-CRnpb7uM.js";import"./Form-lya1P3V3.js";import"./useLabel-fjbW-LOk.js";import"./Label-SVpetMhq.js";import"./useTextField-QUd2KG_L.js";import"./useFormReset-CzU-0SyG.js";import"./useControlledState-DwOoiAv5.js";import"./useFocusable-KPf6K6gw.js";import"./useFormValidation-CTvaA84d.js";import"./Action-CnCRBxQU.js";import"./context-OFPqHilR.js";import"./useStatic-D6NPOV-R.js";import"./browser-BTvp61GS.js";import"./getActionGroupSlot-CSQVqoba.js";import"./FieldDescription-mqFf-H3a.js";import"./Text-C2tTVpcM.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Tooltip-BbUB4qPf.js";import"./ClearPropsContextView-DtS_ulKQ.js";import"./OverlayArrow-CA6KUquN.js";import"./ProgressBar-BJFeHLpH.js";import"./context-BDhuSyDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./ReactAriaControlledValueFix-ufU0tNg8.js";import"./ContextualHelpTrigger-DGzhOykA.js";import"./Popover-CvdxzmgB.js";import"./useOverlayController-C_s7Psi1.js";import"./OverlayContextProvider-W-vbnOir.js";import"./Dialog-DGrVuAqN.js";import"./Button-Czn71cHm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D5emiALM.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./OverlayTrigger-BKJFJ3Ty.js";import"./ControlledNotification-uyFkqfCW.js";import"./Heading-HaPqK-C-.js";import"./Heading-CCWr2xNb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DlUVNO6E.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DE7xOG4e.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
