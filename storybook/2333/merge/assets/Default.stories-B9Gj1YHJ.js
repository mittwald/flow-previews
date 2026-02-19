import{r as h,j as r}from"./iframe-DQkRMfo_.js";import{P as m}from"./PasswordCreationField-CN5C9WgJ.js";import{L as u}from"./Label-CITwA187.js";import{B as g}from"./Button-CTuc7Sb1.js";import{m as C}from"./IconWarning-D2qqMRrO.js";import{C as w}from"./CopyButton-Bfv6Fhhc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bf6rAVHb.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./clsx-B-dksMZM.js";import"./index-BmRrr2ih.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./browser-BnHwZVCd.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./FieldDescription-BmqjHv9O.js";import"./Text-DZXogYJp.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Text-BXxFgtol.js";import"./utils-Bfb5K-41.js";import"./Tooltip-BgfDz5r2.js";import"./OverlayArrow-CqKSMCIB.js";import"./useFocus-BSyQYzHK.js";import"./ProgressBar-D5_QzmmX.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKmqgaQh.js";import"./context-XfcuIoVT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CrR0o1Yj.js";import"./useControlledState-CA4wGiI1.js";import"./useFocusable-BWtjl4YZ.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./ContextualHelpTrigger-DScCTM_z.js";import"./Popover-C2Sm0PAA.js";import"./OverlayContextProvider-jcPJZwNr.js";import"./Dialog-cFet4L4X.js";import"./Button-BqHvWFWe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8-KGEPi.js";import"./RSPContexts-Bk8qKDL5.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";import"./OverlayTrigger-0AVD2RuP.js";import"./Heading-fqnL9RrB.js";import"./Heading-CDc2BCk7.js";import"./useFieldComponent-DKGKIVkH.js";import"./FieldError-Bk57uQQs.js";import"./FieldError-BDV0g7vQ.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";import"./useControlledHostValueProps-2C9MclVl.js";import"./TextField-CntM8-Yw.js";import"./Form-DMHoM5vs.js";import"./Group-Dmhi8ayL.js";import"./Input-DgbrTWmb.js";import"./useTextField-CluWqEKL.js";import"./useFormReset-CbTvEeV3.js";import"./useFormValidation-Baae3HaH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BfuFQdyU.js";import"./remote-CkmXCgJk.js";import"./react-children-utilities-N2YjBirW.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
