import{r as h,j as r}from"./iframe-BO07bPAa.js";import{P as m}from"./PasswordCreationField-BLzGt24G.js";import{L as u}from"./Label-D0Lhb5Vq.js";import{B as g}from"./Button-CCtz8EXc.js";import{m as C}from"./IconWarning-ClLv5I07.js";import{C as w}from"./CopyButton-Cu3HmNkM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CShChD8Y.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./clsx-B-dksMZM.js";import"./index-C__iODou.js";import"./Action-CP6j8Viu.js";import"./context-D6FqIPNt.js";import"./useStatic-Dc6GYAIK.js";import"./browser-B0pBncgx.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./FieldDescription-DHxK4kFP.js";import"./Text-CwdryKSs.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./utils-DpF9Snp1.js";import"./Tooltip-B3onYfdr.js";import"./OverlayArrow-BbflWQr7.js";import"./useFocus-ntzScLPi.js";import"./ProgressBar-BUHmhWxP.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./context-DKHz4OX0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DXebh_G-.js";import"./useControlledState-DyIed2bM.js";import"./useFocusable-C66-pRTt.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./ContextualHelpTrigger-CP7IBgN0.js";import"./Popover-U_qJYoDF.js";import"./useOverlayController-3m0quUHh.js";import"./OverlayContextProvider-D038r4mb.js";import"./Dialog-BBC5U6gG.js";import"./Button-CPst5v-a.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UbwEnmrk.js";import"./RSPContexts-BnTR6z_r.js";import"./Collection-BC2XOQqq.js";import"./CollectionBuilder-CRw4EwC7.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./Separator-DdhmoA8S.js";import"./SelectionManager-Chxg5cEr.js";import"./useEvent-D6dqrA9f.js";import"./useCollator-82KNa-4u.js";import"./FocusScope-BA1MxA3e.js";import"./VisuallyHidden-DCYSiy07.js";import"./OverlayTrigger-C8_iNjRX.js";import"./Heading-DF6E_MT5.js";import"./Heading-Dnio4EBF.js";import"./useFieldComponent-B5uAaQ_H.js";import"./FieldError-DlyPLChi.js";import"./FieldError-cxGJZPY3.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";import"./useControlledHostValueProps-Bu3gS6Hi.js";import"./TextField-1eNjwi_7.js";import"./Form-BBekzR8e.js";import"./Group-DG91QlCP.js";import"./Input-Drs8jYRG.js";import"./useTextField-eFQNVRem.js";import"./useFormReset-D6_s6z9R.js";import"./useFormValidation-CRjEiOmE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BTNHBT1C.js";import"./remote-C9jEPRv0.js";import"./react-children-utilities-CbyS1nuy.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
