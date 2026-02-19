import{r as h,j as r}from"./iframe-DYssR0ZO.js";import{P as m}from"./PasswordCreationField-CXXrJvQV.js";import{L as u}from"./Label-D9oETDcN.js";import{B as g}from"./Button-DWrm_dbc.js";import{m as C}from"./IconWarning-BhLXBIfL.js";import{C as w}from"./CopyButton-u141z0Zq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-3BYImiyG.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./clsx-B-dksMZM.js";import"./index-DD53_4h2.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./browser-BciskJv3.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./FieldDescription-DK9jbbdr.js";import"./Text-S9F4vE2H.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Text-C48KhL8P.js";import"./utils-C3q1cDFY.js";import"./Tooltip-DtbED8As.js";import"./OverlayArrow-Cf72_x8q.js";import"./useFocus-CQpADUyl.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./context-CUXiPoRo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CMEZAWj2.js";import"./useControlledState-CDSB3NYp.js";import"./useFocusable-CmCmEjiW.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./ContextualHelpTrigger-s1gV2ktf.js";import"./Popover-BQzuMW4U.js";import"./OverlayContextProvider-C4hsr81s.js";import"./Dialog-DF_yv1N5.js";import"./Button-Dmp7BHEZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-xSc99ptM.js";import"./RSPContexts-CDW_96-t.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./VisuallyHidden-B8I9N7kv.js";import"./OverlayTrigger-BzADejGr.js";import"./Heading-De8T3vTM.js";import"./Heading-CZjnkckI.js";import"./useFieldComponent-MDeHyLVI.js";import"./FieldError-BB68CtMB.js";import"./FieldError-Bq-6FZKj.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";import"./useControlledHostValueProps-cssSA_4f.js";import"./TextField-DDrLnvFP.js";import"./Form-C_ZwOWyd.js";import"./Group-DDubxubJ.js";import"./Input-VZe-sw4J.js";import"./useTextField-BW8H2oZa.js";import"./useFormReset-CxfaiCUr.js";import"./useFormValidation-D1fghWFH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-lL7MHRW7.js";import"./remote-cHYIdIzb.js";import"./react-children-utilities-MED-dOT4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
