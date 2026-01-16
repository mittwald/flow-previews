import{r as h,j as r}from"./iframe-DjKJp4LH.js";import{P as m}from"./PasswordCreationField-D8zwwQiB.js";import{L as u}from"./Label-CIoe3s2x.js";import{B as g}from"./Button-BDEZ1Pgg.js";import{m as C}from"./IconWarning-6PZXNPQv.js";import{C as w}from"./CopyButton-C_3_7eAz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cwgd_SYw.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./clsx-B-dksMZM.js";import"./index-PXjpOTa6.js";import"./Action-CS8Seurr.js";import"./context-BJ5dxW4L.js";import"./useStatic-DSbbnRPw.js";import"./browser-DP-AFXYC.js";import"./getActionGroupSlot-BcFDPTef.js";import"./FieldDescription-B7UVP7RU.js";import"./Text-DIX_PQ8a.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./utils-DyC1AhIW.js";import"./Tooltip-CDAIUXPe.js";import"./OverlayArrow-NBjjGcXc.js";import"./useFocus-DfQL19Qh.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./context-CaWPG6rd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7AKSDvs.js";import"./useFocusable-Cypk5WsB.js";import"./useFocusRing-BGVhnkul.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./ContextualHelpTrigger-MEWlKnTL.js";import"./Popover-DZdPgP5E.js";import"./useOverlayController-CN88K5mF.js";import"./OverlayContextProvider-x3mZph6J.js";import"./Dialog-B6ze-qTj.js";import"./Button-DheLTGmH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cba7eTZL.js";import"./RSPContexts-BW0AZj1S.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./VisuallyHidden-BM-dzb4f.js";import"./OverlayTrigger-JCWGSatN.js";import"./Heading-BlHRWoOy.js";import"./Heading-YfRwYxPu.js";import"./useFieldComponent-7yFtRUym.js";import"./FieldError-DkeOn6Iq.js";import"./FieldError-CRskrSrV.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";import"./useControlledHostValueProps-DwkrQ0Ha.js";import"./TextField-DvgqVBTF.js";import"./Form-DzoAzIf2.js";import"./Group-BBLSi45B.js";import"./Input-CKW8JUfL.js";import"./useTextField-B9Zq3G8e.js";import"./useFormReset-BtBZQ9D7.js";import"./useFormValidation-D-rCh5i6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-pyPoMdb7.js";import"./remote-X6dXUxim.js";import"./react-children-utilities-C3_V-br9.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
