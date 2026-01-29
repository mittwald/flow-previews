import{r as h,j as r}from"./iframe-CdVpWnc8.js";import{P as m}from"./PasswordCreationField-BidKbcp7.js";import{L as u}from"./Label-CQQzXuOB.js";import{B as g}from"./Button-BYd_Eo9F.js";import{m as C}from"./IconWarning-Ba9_xFUh.js";import{C as w}from"./CopyButton-C0f7upoo.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./browser-CWGq_9Zm.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./FieldDescription-CO9NCU0r.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./utils-ClIic5nH.js";import"./Tooltip-B9z2q0FS.js";import"./OverlayArrow-CCFRyk0z.js";import"./useFocus-DZX-xW1t.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./context-Bg-StFGN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-dkAGsBkQ.js";import"./useControlledState-B7ztCH5k.js";import"./useFocusable-CzSEJZTE.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./ContextualHelpTrigger-C-FdhOOn.js";import"./Popover-CKAofXvl.js";import"./useOverlayController-BFg7GYyz.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./Dialog-oT8hORp9.js";import"./Button-skPPmItL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCAUNqmr.js";import"./RSPContexts-PfgqXwd-.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./OverlayTrigger-DZLdxrfo.js";import"./Heading-6HXp4W0i.js";import"./Heading-BFrSNe6W.js";import"./useFieldComponent-pH8UQhzW.js";import"./FieldError-0fRgmDO9.js";import"./FieldError-U_T6R5BY.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./useControlledHostValueProps-CZNxzonQ.js";import"./TextField-BwTHsd-m.js";import"./Form-BAj6LeSM.js";import"./Group-B1_lIqzJ.js";import"./Input-CCUGOCeS.js";import"./useTextField-c4bMHwAM.js";import"./useFormReset-D5EHipFr.js";import"./useFormValidation-5isdk9bY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CjZME6JA.js";import"./remote-BheCwFS8.js";import"./react-children-utilities-DxtCh8zv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
