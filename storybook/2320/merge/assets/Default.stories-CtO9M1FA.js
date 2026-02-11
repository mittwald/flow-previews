import{r as h,j as r}from"./iframe-BRGIT6aC.js";import{P as m}from"./PasswordCreationField-CWMOUDfa.js";import{L as u}from"./Label-DYHgdjdj.js";import{B as g}from"./Button-CQ_f9ZVl.js";import{m as C}from"./IconWarning-7xibGY50.js";import{C as w}from"./CopyButton-C5Xzx1ON.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJEA9S0A.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./browser-BYxlW31W.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./FieldDescription-BhKmM-2J.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./utils-D-ssFu49.js";import"./Tooltip-X6ocOn_f.js";import"./OverlayArrow-DKDxu5eo.js";import"./useFocus-Dz-IuM4k.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./context-C5al0DRJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B_bORcJM.js";import"./useControlledState-C2xaeP2Y.js";import"./useFocusable-Bmr3Drft.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./ContextualHelpTrigger-DxD9VKZc.js";import"./Popover-D5tJ855F.js";import"./useOverlayController-BV2mbNRJ.js";import"./OverlayContextProvider-BehX_G0U.js";import"./Dialog-Bn341bnD.js";import"./Button-BCc16_FM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CGLZGzkl.js";import"./RSPContexts-C-qF17sW.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./OverlayTrigger-DrqrLZow.js";import"./Heading-CNwpEC1p.js";import"./Heading-er7MPh1O.js";import"./useFieldComponent-CMRD4Pyo.js";import"./FieldError-BPfKA2u4.js";import"./FieldError-f7o5-LTX.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";import"./useControlledHostValueProps-BPfEHTeU.js";import"./TextField-C-kYnaGH.js";import"./Form-97YOGsKi.js";import"./Group-COVCD_be.js";import"./Input-CEj_QPsV.js";import"./useTextField-BXyTAsaB.js";import"./useFormReset-CXZmek7W.js";import"./useFormValidation-D-IfNlYy.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BjEAsOxv.js";import"./remote-B0Hk_38y.js";import"./react-children-utilities-F5WiA4al.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
