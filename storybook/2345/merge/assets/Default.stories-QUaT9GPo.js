import{r as h,j as r}from"./iframe-CAK8FS83.js";import{P as m}from"./PasswordCreationField-B_gIywm1.js";import{L as u}from"./Label-B8vv94Ak.js";import{B as g}from"./Button-itgufTCs.js";import{m as C}from"./IconWarning-EFpx-Gs1.js";import{C as w}from"./CopyButton-CZWKOAW6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8OXR4zz.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./clsx-B-dksMZM.js";import"./index-CbMMdC0j.js";import"./ActionBatch-BT7PEprG.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./browser-Bqr1AXz8.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./FieldDescription-1ru89KYu.js";import"./Text-DLuRhlhH.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./utils-th26LVD6.js";import"./Tooltip-DCW_5X8R.js";import"./OverlayArrow-DH2T_qZc.js";import"./useFocus-CUz8YQ_V.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./context-Cva5eEgc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dri4WoMi.js";import"./useControlledState-ik7lpKJV.js";import"./useFocusable-wkYmEvUK.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./ContextualHelpTrigger-C1d0ae1y.js";import"./Popover-BcIzS5Zx.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./Dialog-Bg78UE4C.js";import"./Button-Bm8bnERu.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYhFSapw.js";import"./RSPContexts-B_v10Iug.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./OverlayTrigger-YvJHasJp.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./useFieldComponent-DkAI1nDB.js";import"./FieldError-Ijqs7ZUi.js";import"./FieldError-W7aOon2A.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";import"./useControlledHostValueProps-Bu8T1azZ.js";import"./TextField-jkCrsSbw.js";import"./Form-CCLCpM-d.js";import"./Group-j7hLbASA.js";import"./Input-G799xohA.js";import"./useTextField-BR332WYs.js";import"./useFormReset-ClNM6Kah.js";import"./useFormValidation-CCAHF_BW.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BC7xHqe0.js";import"./remote-BiZ00o_J.js";import"./react-children-utilities-B6QQgBs0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
