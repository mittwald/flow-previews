import{r as h,j as r}from"./iframe-Bz3NPU1o.js";import{P as m}from"./PasswordCreationField-du9d2LVM.js";import{L as u}from"./Label-DJFgm5M0.js";import{B as g}from"./Button-DmREI3b0.js";import{m as C}from"./IconWarning-Cqqx4tMU.js";import{C as w}from"./CopyButton-ClvRbTiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvekFh9y.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./clsx-B-dksMZM.js";import"./index-FgoIhbmz.js";import"./ActionBatch-DB6HM48H.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./browser-BaNqvzaa.js";import"./getActionGroupSlot--8oaPbEm.js";import"./FieldDescription-DXJo72US.js";import"./Text-ByJancxD.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Text-ClD1r8b1.js";import"./utils-DuUJF5nC.js";import"./Tooltip-XnO_0EDk.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useFocus-DMRfkGw8.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./context-pgk2HPHJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BLuP37PT.js";import"./useControlledState-e4YYsLZE.js";import"./useFocusable-DZRtaeEQ.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./ContextualHelpTrigger-BVGFfLuT.js";import"./Popover-BJF5ngPZ.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./Dialog-DrbZDX-D.js";import"./Button-BMxU8wWi.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BmxXpscc.js";import"./RSPContexts-BgkP6bIF.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./OverlayTrigger-DNmemUFh.js";import"./Heading-0jGXR_g9.js";import"./Heading-BkR9lkEu.js";import"./useFieldComponent-kW7iCi5m.js";import"./FieldError-fbbECv40.js";import"./FieldError-BDAUq_c5.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";import"./useControlledHostValueProps-CNkuswWa.js";import"./TextField-B0FIBjDK.js";import"./Form-DrqAye7f.js";import"./Group-CfiWYn5I.js";import"./Input-DW4bMgBP.js";import"./useTextField-BkVP-UnG.js";import"./useFormReset-D4UcXUYp.js";import"./useFormValidation-itgD5oYf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C6XGp2xl.js";import"./remote-D_M7roLC.js";import"./react-children-utilities-Bken2RrT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
