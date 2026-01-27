import{r as h,j as r}from"./iframe-DcHapM8k.js";import{P as m}from"./PasswordCreationField-Dxnu1AJC.js";import{L as u}from"./Label-C_3MZF40.js";import{B as g}from"./Button-C1DQEdG6.js";import{m as C}from"./IconWarning-8t1q80cl.js";import{C as w}from"./CopyButton-BKC9ZkMn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-FNOw2F.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./clsx-B-dksMZM.js";import"./index-Ba4Wgmch.js";import"./Action-CLgptl7p.js";import"./context-C5BkLhj5.js";import"./useStatic-lCMR7rr_.js";import"./browser-BhJkGPhR.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./FieldDescription-C8ShlXx2.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./utils-BN-Wf9GB.js";import"./Tooltip-w5Xh9PuK.js";import"./OverlayArrow-Ct2arrPt.js";import"./useFocus-ZXD30Rmm.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./context-Camfekg3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CD18I4-6.js";import"./useFocusable-CPQk5Kbw.js";import"./useFocusRing-Dt3gTaal.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./ContextualHelpTrigger-CrP_LZHg.js";import"./Popover-8k6-3DAC.js";import"./useOverlayController-CLiM05Jw.js";import"./OverlayContextProvider-By_DTOub.js";import"./Dialog-gML-GktL.js";import"./Button-DGX0xFqX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DRRwHOXQ.js";import"./RSPContexts-DXTQnhuO.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./OverlayTrigger-2_tOKmYE.js";import"./Heading-CSFiGnXH.js";import"./Heading-DlC7g6iA.js";import"./useFieldComponent-DLXIz4kk.js";import"./FieldError-BzyrakFb.js";import"./FieldError-DeohvbOn.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";import"./useControlledHostValueProps-BzOdOIBK.js";import"./TextField-C4vDdw6V.js";import"./Form-N_ssJC2Q.js";import"./Group-cOoV5f3K.js";import"./Input-_1JxoJ2g.js";import"./useTextField-t09HgXOF.js";import"./useFormReset-DByFRxt8.js";import"./useFormValidation-C5Tej2mU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DeuQI20n.js";import"./remote-CrHpKc5j.js";import"./react-children-utilities-C68MBcPQ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
