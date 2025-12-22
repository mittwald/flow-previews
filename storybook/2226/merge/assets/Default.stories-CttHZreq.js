import{r as h,j as r}from"./iframe-Dq6d4A4K.js";import{P as m}from"./PasswordCreationField-CFyRY2yT.js";import{L as u}from"./Label-B5IUeoBf.js";import{B as g}from"./Button-CRlV5nO0.js";import{n as C}from"./IconWarning-CufYr70B.js";import{C as w}from"./CopyButton-D4NOyh0q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ex2ST8.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./clsx-B-dksMZM.js";import"./index-cJyKvq7H.js";import"./Action-BH5FUwcy.js";import"./context-Cu2JCu7X.js";import"./useStatic-qDMUdwgV.js";import"./browser-DRZjKHqy.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./FieldDescription-YzwMGkaa.js";import"./Text-0vHLnm-v.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./utils-JgkAdQlm.js";import"./Tooltip-D6NdApLO.js";import"./OverlayArrow-CZpwCw1e.js";import"./useFocus-CdRm64Xm.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./context-Dane2eIN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B_V0UpKw.js";import"./useFocusable-SW4CEV0n.js";import"./useFocusRing-HiCcztDi.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./ContextualHelpTrigger-DGzcGapo.js";import"./Popover-Dhm-UcrA.js";import"./useOverlayController-C30vz3f6.js";import"./OverlayContextProvider-CIowSog5.js";import"./Dialog-D4b1JxJ9.js";import"./Button-DJxkILn0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BTTZyaX9.js";import"./RSPContexts-CrxTMHNd.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";import"./OverlayTrigger-Coxo9lqL.js";import"./Heading-fRiF7ARa.js";import"./Heading-jVMpSXwt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-lf4P9InL.js";import"./FieldError-3R6U5-ci.js";import"./FieldError-DP91cGbX.js";import"./useControlledHostValueProps-Dw6orj-f.js";import"./TextField-11xPdt9d.js";import"./Form-q3JpQbyd.js";import"./Group-PxlHAs9-.js";import"./Input-B-OOQ2po.js";import"./useTextField-BWTL19Ek.js";import"./useFormReset-D6HDlpz3.js";import"./useFormValidation-wNB2SuId.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C8xohBci.js";import"./remote-9zlx4mlg.js";import"./react-children-utilities-D-ROuQyk.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
