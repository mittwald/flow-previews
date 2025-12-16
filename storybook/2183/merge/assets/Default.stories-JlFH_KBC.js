import{r as h,j as r}from"./iframe-pNOm8Wja.js";import{L as u}from"./Label-DHID5D-l.js";import{B as g}from"./Button-CgV_q1F1.js";import"./IconApp-BiE0s1PO.js";import{I as C}from"./IconDanger-DCkcPuhV.js";import{C as w}from"./CopyButton-S4ALttRc.js";import{P as m}from"./PasswordCreationField-7vuVjY3r.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-lamhxTiw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./ProgressBar-D3icCtAB.js";import"./utils-BknOSkFt.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./browser-CBsMsG9c.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./remote-DYOOxdg2.js";import"./IconCopy-DOsn0duu.js";import"./Tooltip-Bo3xe0Gh.js";import"./Activity-Br43_cfx.js";import"./TranslationProvider-vME1iId0.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-BVN84kR9.js";import"./Action-DvGTA_vq.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./dynamic-CkcNveyu.js";import"./IconCircleCheck-B-uJhcRx.js";import"./ContextualHelpTrigger-DzRPewNO.js";import"./Popover-CQ-IHLDW.js";import"./OverlayTrigger-BL8LsTuM.js";import"./IconInfo-CPi1obw3.js";import"./Heading-mhDH31L5.js";import"./Heading-YerowFDN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-XMIDEUQz.js";import"./FieldError-DA4-4QkZ.js";import"./FieldError-B2TX3Fta.js";import"./useControlledHostValueProps-PtKQ8r5D.js";import"./TextField-Qs4nKFr-.js";import"./Form-BbF0Gc6X.js";import"./Group-D0q_Cf1F.js";import"./Input-CsUDr6Sk.js";import"./useTextField-ByF_LOE7.js";import"./useFormReset-Dc67hovh.js";import"./useFormValidation-DtQ3XmyE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const yr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,yr as __namedExportsOrder,qr as default};
