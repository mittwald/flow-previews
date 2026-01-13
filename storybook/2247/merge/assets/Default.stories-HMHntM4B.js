import{r as h,j as r}from"./iframe-D5OSMSYj.js";import{P as m}from"./PasswordCreationField-D22CVkAk.js";import{L as u}from"./Label-CF1-K3Zk.js";import{B as g}from"./Button-DTe5su69.js";import{m as C}from"./IconWarning-aBoV8v8e.js";import{C as w}from"./CopyButton-Ed8SLshv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B1x5IqP1.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./clsx-B-dksMZM.js";import"./index-Bwk6EGM5.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./browser-CPg_spJX.js";import"./getActionGroupSlot-BAkzknoy.js";import"./FieldDescription--3BD_Kcq.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./utils-B2fStg81.js";import"./Tooltip-CloE64M8.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useFocus-C6h-AdFL.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./context-CCC3vGzE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BLX_f1Wx.js";import"./useFocusable-BBmYajA6.js";import"./useFocusRing-D5zyjxEp.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./ContextualHelpTrigger-CLaI04-N.js";import"./Popover-ToxN3N_z.js";import"./useOverlayController-Dbdtg8pO.js";import"./OverlayContextProvider-DZuBuoMh.js";import"./Dialog-DOlt_k3K.js";import"./Button-CTfGmXCg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Db_mMnan.js";import"./RSPContexts-BzWalm_3.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";import"./OverlayTrigger-DrBj6jwS.js";import"./Heading-CnkvXclq.js";import"./Heading-BpBqAeXs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-yQbkUBpw.js";import"./FieldError-DkXkFVgN.js";import"./FieldError-SdvWZoRR.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";import"./useControlledHostValueProps-d9R3T6JC.js";import"./TextField-TgU68DEX.js";import"./Form-RJ7gT7dr.js";import"./Group-DPq_fDos.js";import"./Input-DK63hDT9.js";import"./useTextField-CYoB5YV1.js";import"./useFormReset-C4H0cf_a.js";import"./useFormValidation-BzDFxNXO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BD9yQcJP.js";import"./remote-DoBIDVY0.js";import"./react-children-utilities-BKdWvkEI.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
