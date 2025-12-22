import{r as h,j as r}from"./iframe-DITmTDde.js";import{P as m}from"./PasswordCreationField-jdqGNwvf.js";import{L as u}from"./Label-DcnJ5Vhi.js";import{B as g}from"./Button-DgKZKMvA.js";import{n as C}from"./IconWarning-FbTim4wC.js";import{C as w}from"./CopyButton-jr4raHW7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BjimB01T.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./clsx-B-dksMZM.js";import"./index-oEm39XqO.js";import"./Action-BJnGojjr.js";import"./context-fizPycLA.js";import"./useStatic-OoNPiP3V.js";import"./browser-wgtkTybB.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./FieldDescription-BGaJf4ya.js";import"./Text-B4ALgTL8.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./utils-C40myb20.js";import"./Tooltip-B6HtOUgJ.js";import"./OverlayArrow-CD7gdoFk.js";import"./useFocus-DrnrNdFb.js";import"./ProgressBar-DNk1ASVc.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./context-CEC4U_pc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D6UlgZp0.js";import"./useFocusable-m8WXVW9y.js";import"./useFocusRing-DXc99t-B.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./ContextualHelpTrigger-DcoizUeG.js";import"./Popover-Zpv4dzR_.js";import"./useOverlayController-D0uk_tci.js";import"./OverlayContextProvider-4GqAJ6zk.js";import"./Dialog-Bmgfq9R9.js";import"./Button-CsPSNcu1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cwz_fpS2.js";import"./RSPContexts-jFJkk-mB.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";import"./OverlayTrigger-D23x4NHr.js";import"./Heading-BikOeUcJ.js";import"./Heading-DTo4uMVU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CR_sI6nz.js";import"./FieldError-CBw2sGOe.js";import"./FieldError-B8qSKLtD.js";import"./useControlledHostValueProps-DAUukQ8V.js";import"./TextField-C51vSSpo.js";import"./Form-C6LPNxyn.js";import"./Group-BcWNK89K.js";import"./Input-tNtxpliI.js";import"./useTextField-Mn5K0qmA.js";import"./useFormReset-vbhoemIT.js";import"./useFormValidation-gmIFw0Kx.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CQhA1l2h.js";import"./remote-BYAMMrVX.js";import"./react-children-utilities-yPv0CPC4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
