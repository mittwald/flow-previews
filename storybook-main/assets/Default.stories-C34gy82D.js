import{r as h,j as r}from"./iframe-DU1OTSEW.js";import{P as m}from"./PasswordCreationField-3ytD1KIt.js";import{L as u}from"./Label-BFsMAETu.js";import{B as g}from"./Button-C02FBbwW.js";import{m as C}from"./IconWarning-BOLd-bsg.js";import{C as w}from"./CopyButton-AEBiyg0_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTXPuCk3.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./clsx-B-dksMZM.js";import"./index-Ben_k6_D.js";import"./ActionBatch-BeODW9YZ.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./browser-B-EQy8Zd.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./FieldDescription-BeeLUpCG.js";import"./Text-BlwSaqXM.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./utils-Dj7KEBV3.js";import"./Tooltip-D4OeMkzp.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useFocus-u6Gylu9g.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./context-MHXBCA58.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-L_sy4AuI.js";import"./useControlledState-C4NYpY3o.js";import"./useFocusable-XjJjjkQd.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./ContextualHelpTrigger-DdNKcdHO.js";import"./Popover-DKS3uTEp.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./Dialog-rIHNVDTB.js";import"./Button-njBxl16I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DCIqPyrL.js";import"./RSPContexts-CELva0rI.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./OverlayTrigger-Owxo0qVZ.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./useFieldComponent-DAmXFBUF.js";import"./FieldError-lAQ6GllT.js";import"./FieldError-C-1FXxCh.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./TextField-Dvb4Cwl8.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useTextField-BJo9NeBV.js";import"./useFormReset-B6aj4tVR.js";import"./useFormValidation-Bnl6yMKM.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./remote-C4J6eDzq.js";import"./react-children-utilities-DEI8WjO8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
