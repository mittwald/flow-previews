import{r as h,j as r}from"./iframe-Cbm1tYQ5.js";import{P as m}from"./PasswordCreationField-CP04R5w8.js";import{L as u}from"./Label-C1u7fixG.js";import{B as g}from"./Button-Cqfz7zcL.js";import{m as C}from"./IconWarning-HRESMERf.js";import{C as w}from"./CopyButton-Bk3Pou9D.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CgrPgLPo.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./clsx-B-dksMZM.js";import"./index-cwYx15Z_.js";import"./ActionBatch-CjHdyiP4.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./browser-BO2LE4a1.js";import"./getActionGroupSlot-Bk49RJtR.js";import"./FieldDescription-Ct8S77_6.js";import"./Text-K6yu7K7n.js";import"./EmulatedBoldText-DOwlcjUH.js";import"./Text-CRfwxtsq.js";import"./utils-CwSfACxU.js";import"./Tooltip-C2QRQqlv.js";import"./OverlayArrow-DLVTOKg_.js";import"./useFocus-DGTwh-gS.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./context-CpUEkiXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-2ds-u5nI.js";import"./useControlledState-CcdBsJdv.js";import"./useFocusable-DfxkJnS0.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./ContextualHelpTrigger-CR8dQst0.js";import"./Popover-DTr9x_xz.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./Dialog-DOWWi4PD.js";import"./Button-DMDpRFJa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./RSPContexts-BN50OY8k.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useEvent-CIGBudko.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";import"./OverlayTrigger-CQGtynqr.js";import"./Heading-DoywAf3I.js";import"./Heading-CJu_lfUD.js";import"./useFieldComponent-BRiGBo1N.js";import"./FieldError-DdEKXl5v.js";import"./FieldError-b__4rZn4.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";import"./useControlledHostValueProps-CPKej2US.js";import"./TextField-qS-l0aOc.js";import"./Form-DE723K-l.js";import"./Group-BVQg3o8h.js";import"./Input-KBjiAAgX.js";import"./useTextField-DOevCIiu.js";import"./useFormReset-DovDq4jf.js";import"./useFormValidation-SL6QRRh_.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CziFUZ0y.js";import"./remote-CNywZcFz.js";import"./react-children-utilities-DRyeSPLu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
