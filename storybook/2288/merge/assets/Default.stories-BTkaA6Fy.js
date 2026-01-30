import{r as h,j as r}from"./iframe-K4Kgzs5d.js";import{P as m}from"./PasswordCreationField-DH6J94p3.js";import{L as u}from"./Label-BHhszR2e.js";import{B as g}from"./Button-CLdF1xvY.js";import{m as C}from"./IconWarning-BGpHZy47.js";import{C as w}from"./CopyButton-BEK4EptJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d4gvBHma.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./browser-9MG5lDdh.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./FieldDescription--zl-7alp.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./utils--XC5cWbY.js";import"./Tooltip-DagZ8Kln.js";import"./OverlayArrow-70hjzCbF.js";import"./useFocus-CfhKlOoP.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./context-BHsz5d3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B7VfbIok.js";import"./useControlledState-UcCiEhN3.js";import"./useFocusable-H6UpmrOx.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./ContextualHelpTrigger-NxJaUvUT.js";import"./Popover-B6jJOXre.js";import"./useOverlayController-lRtmjR_K.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./Dialog-D9y6Gm5p.js";import"./Button-B9p48ORM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bsv_-vru.js";import"./RSPContexts-DBQcbxf9.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./OverlayTrigger-B8uZhBMV.js";import"./Heading-DvNGAwaU.js";import"./Heading-BKtqva_S.js";import"./useFieldComponent-XDoLqUAT.js";import"./FieldError-BIdQs2eG.js";import"./FieldError-CDQ9nLxM.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";import"./useControlledHostValueProps-BXlu5ou0.js";import"./TextField-BaGOsx6X.js";import"./Form-BeqJ_QXS.js";import"./Group-BAVjj6lU.js";import"./Input-n3w13r8V.js";import"./useTextField--3HDyD9O.js";import"./useFormReset-Bu0cPn5B.js";import"./useFormValidation-QT1HCjbB.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./remote-DgH_DZKx.js";import"./react-children-utilities-BXss8zWH.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
