import{r as h,j as r}from"./iframe-Cz8_C8zY.js";import{P as m}from"./PasswordCreationField-CnNbpAXW.js";import{L as u}from"./Label-gR0Y05hv.js";import{B as g}from"./Button-D15OVnQK.js";import{n as C}from"./IconWarning-DLbRRuK1.js";import{C as w}from"./CopyButton-BoHYxnaD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeA3emBk.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./clsx-B-dksMZM.js";import"./index-SrORw6vN.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./useStatic-DFVrJYQp.js";import"./browser-B6rfwAqc.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./FieldDescription-D3ZeP19z.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./utils-BAKlH2Lm.js";import"./Tooltip-DAZCrBh9.js";import"./OverlayArrow-CwaEkqIl.js";import"./useFocus-DFbFm1Xx.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./context-VkDhZA-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C0o23ioH.js";import"./useFocusable-CJ-4fYj7.js";import"./useFocusRing-BDmU1dd9.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./ContextualHelpTrigger-ByumiQKP.js";import"./Popover-BRwT-TU7.js";import"./useOverlayController-BjnNyR7e.js";import"./OverlayContextProvider-DHHLRya5.js";import"./Dialog-DK4i5yRx.js";import"./Button-7cKgwoPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcZz-lB5.js";import"./RSPContexts-CQQaQyDU.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";import"./OverlayTrigger-KjIeYBhC.js";import"./Heading-4iah9onY.js";import"./Heading-DjrC0KPL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent--MNREdev.js";import"./FieldError-CEw8HJGt.js";import"./FieldError-B254xHCi.js";import"./useControlledHostValueProps-D5L-E0rU.js";import"./TextField-DW-FA0T0.js";import"./Form-Bv3CSU0e.js";import"./Group-CFuZraH7.js";import"./Input-MUdQf2Tz.js";import"./useTextField-B_xw08pL.js";import"./useFormReset-CSPeTQLr.js";import"./useFormValidation-DBiWbYgf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ClQMAkzE.js";import"./remote-D3nX27fk.js";import"./react-children-utilities-B_1L6MyS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
