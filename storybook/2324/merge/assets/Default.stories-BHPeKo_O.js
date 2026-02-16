import{r as h,j as r}from"./iframe-CdHyQgwh.js";import{P as m}from"./PasswordCreationField-XJ4Xsv0U.js";import{L as u}from"./Label-C70YwB90.js";import{B as g}from"./Button-B83uT_W5.js";import{m as C}from"./IconWarning-DGc3SgEa.js";import{C as w}from"./CopyButton-B-68JWXZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CJo41kua.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./clsx-B-dksMZM.js";import"./index--KyPRnlY.js";import"./ActionBatch-DZLzYfk2.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./browser-CBJMDWdB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./FieldDescription-BPEDfYs_.js";import"./Text-CG9Jqgcw.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./utils-B0AChKxF.js";import"./Tooltip-BEzYuSq0.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useFocus-D4xdQDkq.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./context--lHaHpmz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Ba3uGuMn.js";import"./useControlledState-D2jLiTCX.js";import"./useFocusable-CIZyv2_u.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./ContextualHelpTrigger-COROVZsr.js";import"./Popover-DRYK2Zvg.js";import"./OverlayContextProvider-CjArtki4.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./RSPContexts-DthjkPm0.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./VisuallyHidden-U7btBlyO.js";import"./OverlayTrigger-A2pu6fZJ.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./useFieldComponent-t62DY9AA.js";import"./FieldError-BmlEdUcT.js";import"./FieldError-BTLVyZmC.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";import"./useControlledHostValueProps-CK9PLT7P.js";import"./TextField-C7oeVSLc.js";import"./Form-BHZ6w-7V.js";import"./Group-B7D8BaP2.js";import"./Input-DK8ERkio.js";import"./useTextField-BoVwwEYl.js";import"./useFormReset-D88R_CF2.js";import"./useFormValidation-8M-A-L7s.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DJPu7RL-.js";import"./remote-BRyh19SP.js";import"./react-children-utilities-DGneWI-I.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
