import{r as h,j as r}from"./iframe-DsvUdpXw.js";import{P as m}from"./PasswordCreationField-B26olpr1.js";import{L as u}from"./Label-V0M08dzp.js";import{B as g}from"./Button-Bh17vETd.js";import{m as C}from"./IconWarning-DeQxeoQB.js";import{C as w}from"./CopyButton-CPvmC3ov.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-6cr1cE.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./useStatic-B4i3epQD.js";import"./browser-BtOTkQbR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./FieldDescription-GkX1e7wK.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./utils-elFy1-Tx.js";import"./Tooltip-Ij_pUzlc.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useFocus-DN2AExbL.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./context-BSJoRVhT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DkxfWW5E.js";import"./useControlledState-HbpZAl0m.js";import"./useFocusable-CD1pLlOX.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./ContextualHelpTrigger-Bg-5aUF-.js";import"./Popover-CqiNCQcV.js";import"./useOverlayController-DxWxo43I.js";import"./OverlayContextProvider-DlpSiBKI.js";import"./Dialog-DDWgyAFS.js";import"./Button-RLHEBlnW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BFT-1ljl.js";import"./RSPContexts-C2fytUZa.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./OverlayTrigger-iXNxq1oc.js";import"./Heading-B52qHDza.js";import"./Heading-BVURhSI-.js";import"./useFieldComponent-CWVnpPPS.js";import"./FieldError-DMawyIiV.js";import"./FieldError-S3zhgpi7.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./useControlledHostValueProps-CBts7xi2.js";import"./TextField-D9iaV1ub.js";import"./Form-_ij7bXRe.js";import"./Group-VzCh1Jz3.js";import"./Input-B3qlT_4M.js";import"./useTextField-CImQ85Uo.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DQcVqwZx.js";import"./remote-Bzinmuoi.js";import"./react-children-utilities-z0EZLu3u.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
