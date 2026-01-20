import{r as h,j as r}from"./iframe-BB26x0WO.js";import{P as m}from"./PasswordCreationField-BYEaj7Dx.js";import{L as u}from"./Label-Dkznuq9f.js";import{B as g}from"./Button-BTY4YrG_.js";import{m as C}from"./IconWarning-xtBRgQwR.js";import{C as w}from"./CopyButton-tyf2GuJk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-iWxR2zWf.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./clsx-B-dksMZM.js";import"./index-CQcoQf9d.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./useStatic-CBwNmb4h.js";import"./browser-CM4yKXDn.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./FieldDescription-C9tQ8Z1l.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./utils-B0cjT-cu.js";import"./Tooltip-DC_51GpP.js";import"./OverlayArrow-DRxGu_ip.js";import"./useFocus-BTahgc6b.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./context-CFwMSK2D.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bi3RtZ50.js";import"./useFocusable-BCoGMlTE.js";import"./useFocusRing-3NylsfEU.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./ContextualHelpTrigger-BP0XAwci.js";import"./Popover-Bk5Shd0d.js";import"./useOverlayController-CrgCUZX_.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./Dialog-rd60ApeF.js";import"./Button-CmW95qcG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgIl3AW_.js";import"./RSPContexts-DeiYbaO6.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./OverlayTrigger-CBbEoXQd.js";import"./Heading-DjuXjgcE.js";import"./Heading-CYNLL9tG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-uqIFFsha.js";import"./FieldError-EbPb3FIT.js";import"./FieldError-BdEQwJOQ.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";import"./useControlledHostValueProps-xsHz9TIR.js";import"./TextField-XAmj3fUL.js";import"./Form-D-p_8RL3.js";import"./Group-N-95shQ7.js";import"./Input-CX7n_Ikd.js";import"./useTextField-DyIHjJ7R.js";import"./useFormReset-DftD3Tx4.js";import"./useFormValidation-CSSQUpRU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-jG3qv65g.js";import"./remote-BOIRgCVv.js";import"./react-children-utilities-CwQWrOKU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
