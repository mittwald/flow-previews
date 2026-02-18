import{r as h,j as r}from"./iframe-tDsAeGKm.js";import{P as m}from"./PasswordCreationField-C9LcwZKs.js";import{L as u}from"./Label-B4YMFJ8a.js";import{B as g}from"./Button-jRtlVENb.js";import{m as C}from"./IconWarning-DKvGabEh.js";import{C as w}from"./CopyButton-Cwx46khi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfRao1zO.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./clsx-B-dksMZM.js";import"./index-B9moyWSs.js";import"./ActionBatch-Dcv9mfk6.js";import"./useOverlayController-B76T1UqF.js";import"./useStatic-BTV6Su7X.js";import"./browser-CATpO6nC.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./FieldDescription-DWZekG1M.js";import"./Text-D5NMs6cZ.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Text-B29urVwj.js";import"./utils-DhX5ITDy.js";import"./Tooltip-DuE3VSgT.js";import"./OverlayArrow-dAx307tU.js";import"./useFocus-BJatrcMj.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./context-B8HhXai5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-O-BrOcuV.js";import"./useControlledState-DJUoNOP3.js";import"./useFocusable-Dhs_EAwV.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./ContextualHelpTrigger-Cw42HR-F.js";import"./Popover-Dl9HCW3C.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./Dialog-BchFx3yj.js";import"./Button-DSgsBLqC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DsHBwD0o.js";import"./RSPContexts-1mHRta2c.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./VisuallyHidden-BeYtKSfy.js";import"./OverlayTrigger-e7KCcZDP.js";import"./Heading-B57Tu_dh.js";import"./Heading-DyHmtFkg.js";import"./useFieldComponent-CEijF59K.js";import"./FieldError-CA1wZrT9.js";import"./FieldError-Duxf8Exl.js";import"./AlertText-CRAaEbc-.js";import"./AlertIcon-BN6nSUvJ.js";import"./useControlledHostValueProps-CillDfRs.js";import"./TextField-BokHL5kS.js";import"./Form-DBzv0iBU.js";import"./Group-CGfCWG6F.js";import"./Input-BzgBakC2.js";import"./useTextField-BH11bfwQ.js";import"./useFormReset-Bh0h9BrG.js";import"./useFormValidation-CHyrMCXS.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-cVZxppZv.js";import"./remote-Dyxf39S8.js";import"./react-children-utilities-zZY3JsK_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
