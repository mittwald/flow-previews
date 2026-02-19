import{r as h,j as r}from"./iframe-je41IZNf.js";import{P as m}from"./PasswordCreationField-SabAGRe7.js";import{L as u}from"./Label--ERuqbAg.js";import{B as g}from"./Button-CKqcv5FO.js";import{m as C}from"./IconWarning-Bnxn-M7Y.js";import{C as w}from"./CopyButton-CnUQf53z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrtagzWP.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./clsx-B-dksMZM.js";import"./index-DBepN-OD.js";import"./ActionBatch-ChKsIRTP.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./browser-Drae5Vqb.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./FieldDescription-epssNn7d.js";import"./Text-BC-RZ7k4.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./utils-Q4wA2zXG.js";import"./Tooltip-Bh_sgfX0.js";import"./OverlayArrow-7pXV33mr.js";import"./useFocus-YEPBe3OK.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./context-533DYF-u.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DOADtTnm.js";import"./useControlledState-Behjjcy6.js";import"./useFocusable-Ldg9iOHo.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./ContextualHelpTrigger-CD_ouLs2.js";import"./Popover-DIig3rOR.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./RSPContexts-u6z1ubPU.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./OverlayTrigger-Bv_i_Yla.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./useFieldComponent-b8-F_AVa.js";import"./FieldError-BATB6zBo.js";import"./FieldError-MnbTPawu.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";import"./useControlledHostValueProps-BR1UJYKe.js";import"./TextField-D33Qq-YD.js";import"./Form-D8X7JUv8.js";import"./Group-D7ryvxcR.js";import"./Input-U4HmeWQK.js";import"./useTextField-D9CsxYKW.js";import"./useFormReset-BAaFkhxA.js";import"./useFormValidation-DLIHXRbT.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DltTQrQc.js";import"./remote-CVh73cse.js";import"./react-children-utilities-B0HW_H03.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
