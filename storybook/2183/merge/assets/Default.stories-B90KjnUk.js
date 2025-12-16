import{r as h,j as r}from"./iframe-ZqGKWCd-.js";import{P as m}from"./PasswordCreationField-Z4807520.js";import{L as u}from"./Label-CJicQH7Q.js";import{B as g}from"./Button-BZgO5jCY.js";import"./IconChevronDown-DOkopHOS.js";import{I as C}from"./IconDanger-9fNDXdlu.js";import{C as w}from"./CopyButton-BwVKTB5G.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXzH9RDF.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./clsx-B-dksMZM.js";import"./index-BS5rk3Xg.js";import"./FieldDescription-CtBJlXxf.js";import"./Text-fsbk1lYn.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./utils-D141Jr51.js";import"./Tooltip-FniRebUG.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useFocus-DhU9eZJ-.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./context-zCArMZyI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CXUvh1Us.js";import"./useFocusable-BybslKHd.js";import"./useFocusRing-DbADFAxV.js";import"./Action-DfNxqrNn.js";import"./useStatic-CPFMlQst.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./context-C6xdvZ0U.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./TranslationProvider-C8YEdtkF.js";import"./IconCircleCheck-DD0_tb5Y.js";import"./ContextualHelpTrigger-BPjP-atb.js";import"./Popover-DwfGd10d.js";import"./OverlayContextProvider-Dy2hc-Zf.js";import"./Dialog-CUnVff-C.js";import"./Button-CUB1U94R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-_yC0x0cS.js";import"./RSPContexts-SeDUPtJk.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./useOverlayController-vqkxV1o1.js";import"./OverlayTrigger-XTAv7ShH.js";import"./IconInfo-DEicSxyO.js";import"./Heading-DkfgbcZo.js";import"./Heading-Dpt15uKY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-B1bOh1KR.js";import"./FieldError-LLBE4o9B.js";import"./FieldError-D5ElVx7m.js";import"./useControlledHostValueProps-tmC5-mDa.js";import"./TextField-BlpbMoN1.js";import"./Form-CbKBfjBg.js";import"./Group-LIjHZE_9.js";import"./Input-kDKiG0mN.js";import"./useTextField-B0bavF7F.js";import"./useFormReset-L-nmEJr1.js";import"./useFormValidation-EOc_OYLE.js";import"./Label.module-CUYTf9Jc.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./remote-QKtGQrQi.js";import"./IconCopy-BtN1TBnk.js";import"./react-children-utilities-DrJP8T0z.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
