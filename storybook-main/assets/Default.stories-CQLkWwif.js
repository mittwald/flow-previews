import{r as h,j as r}from"./iframe-C037GO3p.js";import{P as m}from"./PasswordCreationField-1gQr-Go9.js";import{L as u}from"./Label-B8SETf0h.js";import{B as g}from"./Button-Cf9guGvq.js";import{m as C}from"./IconWarning-tMH4RyLr.js";import{C as w}from"./CopyButton-BM_OH3sn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CXANBhHf.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./clsx-B-dksMZM.js";import"./index-aVIlTX7l.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./browser-CtD1Hg4J.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./FieldDescription-BhLI0C98.js";import"./Text-1H8qvaGa.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Text-BlWqR5Lx.js";import"./utils-B21QcS96.js";import"./Tooltip-PaeEpN2O.js";import"./OverlayArrow-Ct00V4z2.js";import"./useFocus-CuP2Z3Ew.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./context-Cm0s8R8a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D8Rjq8L2.js";import"./useControlledState-DIGHyhBs.js";import"./useFocusable-DZHoKnFR.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./ContextualHelpTrigger-CiMnu7Bu.js";import"./Popover-B6RVLTNX.js";import"./OverlayContextProvider-saupE8AB.js";import"./Dialog-Sd6ebC5F.js";import"./Button-3UAE6tol.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DtHLFK3z.js";import"./RSPContexts-Cx4BM4L8.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./Heading-D6ofxLDB.js";import"./Heading-DNAjQtPl.js";import"./useFieldComponent-BW6tilSl.js";import"./FieldError-B5a1fJJd.js";import"./FieldError-BWfaawdZ.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";import"./useControlledHostValueProps-ClXNYq5v.js";import"./TextField-BZQwJmxp.js";import"./Form-DK0MW_mU.js";import"./Group-BPrnFgpr.js";import"./Input-COylKlun.js";import"./useTextField-CiTgdQeQ.js";import"./useFormReset-BmsW_IRy.js";import"./useFormValidation-kMumfte1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-7anO2L1H.js";import"./remote-BG6_lggN.js";import"./react-children-utilities-BmLO5X3m.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
