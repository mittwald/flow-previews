import{r as h,j as r}from"./iframe-BsCnutBU.js";import{L as u}from"./Label-DBiwGOqI.js";import{B as g}from"./Button-PMfVxp4L.js";import"./IconChevronDown-C43PU1K-.js";import{I as C}from"./IconDanger-d9R36P01.js";import{C as w}from"./CopyButton-uyxQRSUV.js";import{P as m}from"./PasswordCreationField-B_koqhcs.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./Label-B_59qcJ5.js";import"./utils-Dcbzlj6n.js";import"./Hidden-gYrC-ftW.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./browser-b7DWXv2S.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-LwvHvQd9.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";import"./IconCopy-CRbgOE99.js";import"./Tooltip-CSrERER2.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./react-children-utilities-D08Ya5xY.js";import"./Action-CDxlZfJH.js";import"./useStatic-BIAK3C1m.js";import"./getActionGroupSlot-D8KutjkD.js";import"./context-bnUckVor.js";import"./dynamic-DlsVuPIo.js";import"./FieldDescription-DXa041T4.js";import"./TranslationProvider-CNnKgITh.js";import"./IconCircleCheck-BN8tu-x2.js";import"./ContextualHelpTrigger-CnmKrex-.js";import"./Popover-B0nFn5So.js";import"./OverlayContextProvider-CIRTZSGG.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./useOverlayController-L26AuVnv.js";import"./OverlayTrigger-Nu9cJS08.js";import"./IconInfo-CEz-z5t5.js";import"./Heading-CS-diEha.js";import"./Heading-D7AMkkFH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DKQov8fN.js";import"./FieldError-CJPS-seQ.js";import"./FieldError-oQwctYYH.js";import"./useControlledHostValueProps-B2GrztKn.js";import"./TextField-B_R29ctY.js";import"./Form-te5EpUcA.js";import"./Group-zOLkyEJm.js";import"./Input-XkH6LSV2.js";import"./useTextField-DPa3Dmxj.js";import"./useFormReset-DwCUeF5J.js";import"./useFormValidation-hrdfW_GO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
