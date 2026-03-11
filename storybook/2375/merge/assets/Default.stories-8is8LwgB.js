import{r as h,j as r}from"./iframe-C0EFV5oe.js";import{P as m}from"./PasswordCreationField-CLXRxfgt.js";import{L as u}from"./Label-Ca7Q5rd0.js";import{B as g}from"./Button-BqN-Pb_Z.js";import{m as C}from"./IconWarning-Xp-mdAXG.js";import{C as w}from"./CopyButton-kWjzUydm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNPsW2Gv.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./clsx-B-dksMZM.js";import"./index-CT8mMXvE.js";import"./ActionBatch-BKp4oeCQ.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./browser-yoNZwNd3.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./FieldDescription-CAwmr8EY.js";import"./Text-DOyzWtc3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./utils-BH6nMpvt.js";import"./Tooltip-BAmScinP.js";import"./OverlayArrow-DU6ABYYb.js";import"./useFocus-Kf_jHJpa.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./context-8WtOcV7b.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DMB6fTXa.js";import"./useControlledState-BnTyVv5N.js";import"./useFocusable-DZVtVQHs.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./ContextualHelpTrigger-BHCCNkYo.js";import"./Popover-CLY6HSe2.js";import"./OverlayContextProvider-CfXne1yD.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./RSPContexts-DN9Cbb61.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./useFieldComponent-Becw-9Qv.js";import"./FieldError-Dy7dJdZa.js";import"./FieldError-nKMDp4j0.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./TextField-BnbwKeD9.js";import"./Form-3Jlnd_L4.js";import"./Group-Dyn9y5wI.js";import"./Input-CtJ2Z6MU.js";import"./useTextField-B-A7vPtw.js";import"./useFormReset-D0RWbzMx.js";import"./useFormValidation-CCqKlLu6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-AXwRYWdI.js";import"./remote-CJHR20lz.js";import"./react-children-utilities-CdPy9zB7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
