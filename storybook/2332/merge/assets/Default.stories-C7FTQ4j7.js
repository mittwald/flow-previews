import{r as h,j as r}from"./iframe-n3VOiEf5.js";import{P as m}from"./PasswordCreationField-By7GOjCd.js";import{L as u}from"./Label-B5oQkcZ-.js";import{B as g}from"./Button-gwePC8r8.js";import{m as C}from"./IconWarning-BKHoIgIa.js";import{C as w}from"./CopyButton-CIBQTzIF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DgHDUJEW.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./ActionBatch-B7NWJImq.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./browser-DXFXi5M2.js";import"./getActionGroupSlot-CP2KeStW.js";import"./FieldDescription-CP4R52YC.js";import"./Text-CwVjZxCT.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./utils-BTX3Dk-t.js";import"./Tooltip-fP0HPuEf.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useFocus-Di5Kz97s.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./context-DhQskmxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-50iWl84k.js";import"./useControlledState-17a16_5D.js";import"./useFocusable-ZTBPsPh1.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./ContextualHelpTrigger-CBO7ZDYi.js";import"./Popover-BLdDdbLq.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./RSPContexts-DzW0xATd.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./OverlayTrigger-CSrVMpec.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./useFieldComponent-6hUMLoYk.js";import"./FieldError-DRCS1Gz9.js";import"./FieldError-IZ2wmqkG.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";import"./useControlledHostValueProps-DYpQw2Tg.js";import"./TextField-D-W_Q7sn.js";import"./Form-BfOiuDw8.js";import"./Group-DIIOLL_5.js";import"./Input-IuhSVj8_.js";import"./useTextField-CM82iaRH.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BZywMYAM.js";import"./remote-CWx46e_E.js";import"./react-children-utilities-SA2ZqTX3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
