import{r as h,j as r}from"./iframe-1Z6hWL0q.js";import{P as m}from"./PasswordCreationField-D58j9Uzc.js";import{L as u}from"./Label-BLX0X_A7.js";import{B as g}from"./Button-Up8_TRdV.js";import{m as C}from"./IconWarning-CstRa6-6.js";import{C as w}from"./CopyButton-CnUVQJnh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeVErRgL.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./ActionBatch-B4cDzNNZ.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./browser-OyZXUgp8.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./FieldDescription-C0-dYFJA.js";import"./Text-NSg919ow.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./utils-B0Ub4KXD.js";import"./Tooltip-DN_lT4OV.js";import"./OverlayArrow-0_UUlvtG.js";import"./useFocus-MFE9JzzM.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./context-DCww6zBl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-EnMEiTgA.js";import"./useControlledState-DfFBi8JJ.js";import"./useFocusable-BrwqamRV.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./ContextualHelpTrigger-BDR5y7zM.js";import"./Popover-CCF5Rtw1.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./RSPContexts-BZtvqclp.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./OverlayTrigger-RBcMGmOK.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./useFieldComponent-DdzfuZRi.js";import"./FieldError-CSszVQO8.js";import"./FieldError-CZQJbtEC.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";import"./useControlledHostValueProps-BvMdvEJ5.js";import"./TextField-BnTf1_ly.js";import"./Form-DiZWQd7A.js";import"./Group-C0vzpAPe.js";import"./Input-DsXoSrKb.js";import"./useTextField-BR1rOsD2.js";import"./useFormReset-BI-pxd56.js";import"./useFormValidation-B95RxpRV.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B9ElqUFv.js";import"./remote-BXzLQ_GS.js";import"./react-children-utilities-DlmGpg12.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
