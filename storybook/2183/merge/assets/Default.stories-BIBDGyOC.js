import{r as h,j as r}from"./iframe-B9uPShpw.js";import{L as u}from"./Label-KwkmvcNF.js";import{B as g}from"./Button-BmSId73m.js";import"./IconApp-Dlsy_N62.js";import{I as C}from"./IconDanger-q09hWhBt.js";import{C as w}from"./CopyButton-Bii2sixt.js";import{P as m}from"./PasswordCreationField-CV1jR3T1.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./context-C9xya_TD.js";import"./Label-DMYXGfMz.js";import"./utils-Daj4d2Cf.js";import"./Hidden-DXuNaD-Y.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./Text-CNAgZ6Gu.js";import"./browser-DkOndk9b.js";import"./EmulatedBoldText-CttSSL63.js";import"./Text-BY4f0OUC.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BWMO5jwH.js";import"./Button-CfSbOp9X.js";import"./ProgressBar-BCTL0_PO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./IconCopy-BRf1pdav.js";import"./Tooltip-BhhNc5qc.js";import"./OverlayArrow-D2N0P4yy.js";import"./useControlledState-DaoeHdVs.js";import"./react-children-utilities-CBTGkbnu.js";import"./Action-BG9uiL-h.js";import"./useStatic-DxPieb3u.js";import"./getActionGroupSlot-MOt65LPv.js";import"./context-B0UTB4Wa.js";import"./dynamic-DCdgkrTe.js";import"./FieldDescription-DLWMndWC.js";import"./TranslationProvider-qjpO-oQa.js";import"./IconCircleCheck-DXYqfVMU.js";import"./ContextualHelpTrigger-CLxJ50AJ.js";import"./Popover-BVGGuKiU.js";import"./OverlayContextProvider-pgZNK9TS.js";import"./Dialog-D67Qmi5f.js";import"./RSPContexts-D3LiPnZ6.js";import"./Collection-CsRpAj9n.js";import"./CollectionBuilder-g4fV9EQ5.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./Separator-BAZWFUsp.js";import"./SelectionManager-CuNUAezw.js";import"./useEvent-B8UCcaDh.js";import"./useCollator-YFGcYRYP.js";import"./FocusScope-DabbQPzk.js";import"./VisuallyHidden-C1crbJmY.js";import"./useOverlayController-hWFovTxl.js";import"./OverlayTrigger-C31b0Mhi.js";import"./IconInfo-Bfvw7frE.js";import"./Heading-DBAsiMEO.js";import"./Heading-CYXOOsdy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BtkWQmwv.js";import"./FieldError-CWcQNDFm.js";import"./FieldError-B2c6KACK.js";import"./useControlledHostValueProps-BbXEocRi.js";import"./TextField-CwEytWoI.js";import"./Form-CxeKG7IW.js";import"./Group-DF2dyCo5.js";import"./Input-D-KO421J.js";import"./useTextField-DSbVcLWI.js";import"./useFormReset-BDYhp5bc.js";import"./useFormValidation-Bgk2NLp4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
