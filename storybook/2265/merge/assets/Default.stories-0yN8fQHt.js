import{r as h,j as r}from"./iframe-CG_BDTJg.js";import{P as m}from"./PasswordCreationField-xYB55mQr.js";import{L as u}from"./Label-eLDtxB0Y.js";import{B as g}from"./Button-BmAaiuIV.js";import{m as C}from"./IconWarning-OVzy7qXj.js";import{C as w}from"./CopyButton-BDHFq2Bm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvnWp_K2.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./Action-CprlfWDd.js";import"./context-CBhRRwo5.js";import"./useStatic-CTCSTBly.js";import"./browser-yLu0BSsR.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./FieldDescription-CpYRZCBv.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./utils-BtbDMhcr.js";import"./Tooltip-B9NT7NEe.js";import"./OverlayArrow-CWZGtBJS.js";import"./useFocus-BQxEMJ7t.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./context-CXt1SSmQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BP00jBlc.js";import"./useFocusable-DFQV4HWE.js";import"./useFocusRing-CaZs-udO.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./ContextualHelpTrigger-DmiF8z41.js";import"./Popover-C0DY4f9z.js";import"./useOverlayController-t3_U_UCZ.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./Dialog-CMl17GR5.js";import"./Button-DIbF_cdk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C5t6ziJ-.js";import"./RSPContexts-dESf_SGO.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";import"./OverlayTrigger-DFacS4RO.js";import"./Heading--5M_y3tK.js";import"./Heading-BH9BsmNO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-UHV4FB79.js";import"./FieldError-DN7cTCYW.js";import"./FieldError-DIhe2pHb.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";import"./useControlledHostValueProps-DF1I2_Rs.js";import"./TextField-9-E4XJ-F.js";import"./Form-LFW5XTCh.js";import"./Group-CxPvNJzw.js";import"./Input-Dsqxq3JD.js";import"./useTextField-DysDvNEv.js";import"./useFormReset-BbxWwIqr.js";import"./useFormValidation-BBj6R535.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DTxDKIsL.js";import"./remote-B2NguZ9L.js";import"./react-children-utilities-OMxrFp-5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
