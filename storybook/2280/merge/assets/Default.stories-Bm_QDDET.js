import{r as h,j as r}from"./iframe-Cx5kJuuA.js";import{P as m}from"./PasswordCreationField-5PF5iYOt.js";import{L as u}from"./Label-Da9GdDN8.js";import{B as g}from"./Button-OP9_q8AM.js";import{m as C}from"./IconWarning-BDhnLpaV.js";import{C as w}from"./CopyButton-DRO383Yb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-RASAkScQ.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./clsx-B-dksMZM.js";import"./index-BqoyVlZ7.js";import"./Action-CnBQ_Jk4.js";import"./context-BmiLu6TN.js";import"./useStatic-C9KIiqww.js";import"./browser-D-pbaBij.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./FieldDescription-qsUNwdZ0.js";import"./Text-C98Jvmov.js";import"./EmulatedBoldText--C3vSC84.js";import"./Text-CA_aswYo.js";import"./utils-Nk4paMN-.js";import"./Tooltip-Bm0B2C4H.js";import"./OverlayArrow-BNHP_74G.js";import"./useFocus-DbL3EqSH.js";import"./ProgressBar-DpP1vNCR.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B4Wunpgz.js";import"./context-CpMzWCEP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-idhb0ztA.js";import"./useControlledState-D1xezhK5.js";import"./useFocusable-BtlUXhgP.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./ContextualHelpTrigger-B4vrmQrW.js";import"./Popover-Bzh2FLih.js";import"./useOverlayController-UN8cxawL.js";import"./OverlayContextProvider-MJQePfMZ.js";import"./Dialog-CDKKMn1j.js";import"./Button-BlKGeUP9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-LbgF0OFY.js";import"./RSPContexts-CFLmy0zp.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./useCollator-BUzaHxjg.js";import"./FocusScope-wgzi2f-G.js";import"./VisuallyHidden-i8gu61hs.js";import"./OverlayTrigger-CDfftEDM.js";import"./Heading-p9Lbmv6e.js";import"./Heading-BkX6j8w8.js";import"./useFieldComponent-DpBpP7du.js";import"./FieldError-BCxxTn6h.js";import"./FieldError-UHRLTLut.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";import"./useControlledHostValueProps-DL-qn0XD.js";import"./TextField-IuNOPpvt.js";import"./Form-BHxxWVUu.js";import"./Group-C2As7-rT.js";import"./Input-DHKVlQVM.js";import"./useTextField-7cUM2FsT.js";import"./useFormReset-roVUmu5c.js";import"./useFormValidation-CmFpdOnE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BWQXNo8s.js";import"./remote-C9UyjJTP.js";import"./react-children-utilities-DVZlzG2X.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
