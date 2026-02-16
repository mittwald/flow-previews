import{r as h,j as r}from"./iframe-C5ZTNo7B.js";import{P as m}from"./PasswordCreationField-DkFvtnQJ.js";import{L as u}from"./Label-D_0GeMuu.js";import{B as g}from"./Button-CTD3uiWd.js";import{m as C}from"./IconWarning-Bhk_rtuP.js";import{C as w}from"./CopyButton-DNy_6vF0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bw3_nZ9y.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./clsx-B-dksMZM.js";import"./index-L0hXSSnD.js";import"./ActionBatch-DQnznSVa.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./browser-CszbwzXz.js";import"./getActionGroupSlot-D914C5WA.js";import"./FieldDescription-COkKjWuk.js";import"./Text-vc01bOb1.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./utils-BuDA3Ujk.js";import"./Tooltip-BlelyQUD.js";import"./OverlayArrow-F8uV4qkU.js";import"./useFocus-wNGus_RY.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./context-Zfd40gqJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-rbh4dKQ_.js";import"./useControlledState-e_mWhKHk.js";import"./useFocusable-DlWx3Zdp.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./ContextualHelpTrigger-Dc210HME.js";import"./Popover-pQAuXdpQ.js";import"./OverlayContextProvider-CtLnis9C.js";import"./Dialog-n3Xabcyo.js";import"./Button-B6XpNhBF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ef-k5VSc.js";import"./RSPContexts-BwPNB4Pl.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./OverlayTrigger-B9JYxYmq.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./useFieldComponent-hFC9tXxl.js";import"./FieldError-BDB9mSsz.js";import"./FieldError-CU71BOGK.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";import"./useControlledHostValueProps-C7ReQGpt.js";import"./TextField-DgUE_Mti.js";import"./Form-CMpIiu9M.js";import"./Group-DGqA1oIQ.js";import"./Input-DU4gQuZk.js";import"./useTextField-BXRdWvZ1.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DA9Opfj3.js";import"./remote-DVpXA9eO.js";import"./react-children-utilities-DbEx9DG7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
