import{r as h,j as r}from"./iframe-bYrN4iqU.js";import{P as m}from"./PasswordCreationField-BLoe2eI_.js";import{L as u}from"./Label-CPmhF0es.js";import{B as g}from"./Button-BXFpqU-p.js";import{m as C}from"./IconWarning-m_DFVeXI.js";import{C as w}from"./CopyButton-CxGTlA4y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CHbvz_qx.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./Action-BReqqCkr.js";import"./context-CIgtX0DK.js";import"./useStatic-ByHvTm37.js";import"./browser-CHbB-bBA.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./FieldDescription-toQACF4D.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./utils-B3voqzat.js";import"./Tooltip-BZOLJrl9.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useFocus-DIDqk3LI.js";import"./ProgressBar-Df7WbfFD.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./context-Hrlbzros.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D4lo4_Zr.js";import"./useControlledState-hBcxnaS2.js";import"./useFocusable-fXM7Y9pN.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./ContextualHelpTrigger-D2E75LTs.js";import"./Popover-LLtPuoZ9.js";import"./useOverlayController-DrRVhmF6.js";import"./OverlayContextProvider-CcBeb8cT.js";import"./Dialog-CxLv1-pk.js";import"./Button-BmdWdjlP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CHP3pRkH.js";import"./RSPContexts-CblVL1A7.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./OverlayTrigger-Ck0Q03CL.js";import"./Heading-tEMYcZaF.js";import"./Heading-CY9qodVf.js";import"./useFieldComponent-CM1iSrAB.js";import"./FieldError-DELvRCSS.js";import"./FieldError-BBcT2nDa.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";import"./useControlledHostValueProps-BerRKa1k.js";import"./TextField-D0DOtFtH.js";import"./Form-RNfZ8NGW.js";import"./Group-g7yR8ljX.js";import"./Input-DaDcKDBm.js";import"./useTextField-Cf3_UQe0.js";import"./useFormReset-Cb31B_gj.js";import"./useFormValidation-CAwH-_ip.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-jOE_2qaU.js";import"./remote-zHy9wvpL.js";import"./react-children-utilities-DFfxOLWp.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
