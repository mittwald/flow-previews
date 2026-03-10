import{r as h,j as r}from"./iframe-BJFPIndf.js";import{P as m}from"./PasswordCreationField-lBzojQSj.js";import{L as u}from"./Label-CVJICKuL.js";import{B as g}from"./Button-CMLIz8EV.js";import{m as C}from"./IconWarning-BUqpCqdO.js";import{C as w}from"./CopyButton-DydeSX4U.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ds5yn-UC.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./ActionBatch-91iU7Ul_.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./browser-DqcTc9Nr.js";import"./getActionGroupSlot-ggari8la.js";import"./FieldDescription-D_PxiSL1.js";import"./Text-CGF68X8s.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./utils-WT8FFEB4.js";import"./Tooltip-DkJnxsmF.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useFocus-DPdw3svt.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./context-Dnh7V-Fy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BgEwvKKQ.js";import"./useControlledState-DywfuSZK.js";import"./useFocusable-DGQMpBVb.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./ContextualHelpTrigger-CU9ZJdyv.js";import"./Popover-DcH799mS.js";import"./OverlayContextProvider-BuTLd76h.js";import"./Dialog-eRNfCnmO.js";import"./Button-DuameHsj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./RSPContexts-BXfCPyGV.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./OverlayTrigger-CKuXx8bv.js";import"./Heading-BgaQQLIq.js";import"./Heading-BMtUgZaT.js";import"./useFieldComponent-gU-XMME4.js";import"./FieldError-CerVitTZ.js";import"./FieldError-Coj9-PqS.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";import"./useControlledHostValueProps-D9H6S5M8.js";import"./TextField-C4VgOiC3.js";import"./Form-x5xxOUHd.js";import"./Group-Cnjfsww6.js";import"./Input-BWdvoxfF.js";import"./useTextField-D6MsdQlq.js";import"./useFormReset-CwfjSagb.js";import"./useFormValidation-BhmC515N.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-mc2sXUEG.js";import"./remote-BMkebNs4.js";import"./react-children-utilities-JRqGcIWy.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
