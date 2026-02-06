import{r as h,j as r}from"./iframe-P-BtG9en.js";import{P as m}from"./PasswordCreationField-C6FMRayv.js";import{L as u}from"./Label-P3DTYY4f.js";import{B as g}from"./Button-BDKyvND0.js";import{m as C}from"./IconWarning-NSWHp5YX.js";import{C as w}from"./CopyButton-BjzDoe8E.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./useStatic-CkdzkAMF.js";import"./browser-CAs7Gyq6.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./FieldDescription-DHDLfryo.js";import"./Text-WQ3bdi2b.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./utils-B0ReHH5J.js";import"./Tooltip-BPLrPRyc.js";import"./OverlayArrow-BfX9M7HU.js";import"./useFocus-CaaZ7Vn6.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./context-DgQkEglP.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CySMD5sm.js";import"./useControlledState-CF2gRUje.js";import"./useFocusable-BT9LLfcI.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./ContextualHelpTrigger-BF_HeI6C.js";import"./Popover-mshniZ9g.js";import"./useOverlayController-N6VWZ_a7.js";import"./OverlayContextProvider-c997mKVu.js";import"./Dialog-CXomJO1p.js";import"./Button-CkYmzEte.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DdsYmr0S.js";import"./RSPContexts-Jnosxnes.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./useCollator-Cdxl-D7M.js";import"./FocusScope-DOTGny1g.js";import"./VisuallyHidden-DdvDFx4J.js";import"./OverlayTrigger-C73x-77s.js";import"./Heading-CnpYSlBq.js";import"./Heading-BpHPsioq.js";import"./useFieldComponent-DCdIumPj.js";import"./FieldError-BKtriW0o.js";import"./FieldError-C3DeF1uc.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";import"./useControlledHostValueProps-CU68XwN9.js";import"./TextField-Bc6PZo_9.js";import"./Form-D5TX54v-.js";import"./Group-DbH-9q8J.js";import"./Input-tDUM_w9j.js";import"./useTextField-r4nD2off.js";import"./useFormReset-EHJI2p2K.js";import"./useFormValidation-ePPiHYYq.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CEdiZrnd.js";import"./remote-CHm5B1ZS.js";import"./react-children-utilities-BTO9JeLU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
