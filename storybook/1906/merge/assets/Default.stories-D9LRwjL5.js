import{r as h,j as r}from"./iframe-Cwcli8hM.js";import{P as m}from"./PasswordCreationField-C27-MFOm.js";import{L as u}from"./Label-CdIP0Akw.js";import{B as g}from"./Button-I78ZffkB.js";import{m as C}from"./IconWarning-KJvMQc2O.js";import{C as w}from"./CopyButton-DymdT97Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-kiJ_5GPX.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./Action-BmzkYOqA.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./browser-Dim89v3O.js";import"./getActionGroupSlot-DirYDTjy.js";import"./FieldDescription-Cjbk4mgT.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./utils-C3qjWKVL.js";import"./Tooltip-BomQGPOG.js";import"./OverlayArrow-DeAkcNil.js";import"./useFocus-CSHYTGFD.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./context-ChPy2xgW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ClHEyKKa.js";import"./useFocusable-CLuaS2Z4.js";import"./useFocusRing-Dl7LqS86.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./ContextualHelpTrigger-CKX5d9Qh.js";import"./Popover-BCv6ExYf.js";import"./useOverlayController-YjLSX7hV.js";import"./OverlayContextProvider-Br5Omgfk.js";import"./Dialog-q_50MZOU.js";import"./Button-CxQOY8r5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMhi8zJA.js";import"./RSPContexts-BLwT6Sdo.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./VisuallyHidden-BpjAuZe7.js";import"./OverlayTrigger-hzfyObC1.js";import"./Heading-BXqGaPUH.js";import"./Heading-BEUpHugf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DIqLhVln.js";import"./FieldError-C_uRtYKD.js";import"./FieldError-CJJNrBrn.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";import"./useControlledHostValueProps-dmC9QLbU.js";import"./TextField-CSzsaios.js";import"./Form-BXllkstm.js";import"./Group-B4sml9Xm.js";import"./Input-BrN80aSI.js";import"./useTextField-By7tfDpK.js";import"./useFormReset-BDGa5C7A.js";import"./useFormValidation-BcDhKfF3.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-KOoU2K2x.js";import"./remote-wJ26wkpE.js";import"./react-children-utilities-BX7r_k84.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
