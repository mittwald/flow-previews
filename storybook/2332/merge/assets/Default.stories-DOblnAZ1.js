import{r as h,j as r}from"./iframe-DewKgIpk.js";import{P as m}from"./PasswordCreationField-CswZxpwa.js";import{L as u}from"./Label-DtIMFOsj.js";import{B as g}from"./Button-DK1DwTQu.js";import{m as C}from"./IconWarning-CrJxptLM.js";import{C as w}from"./CopyButton-COfRT57X.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7D0Ds_bm.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./clsx-B-dksMZM.js";import"./index-BPUeLBAn.js";import"./ActionBatch-aysWcgWo.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./browser-D8jMTJt0.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./FieldDescription-skgZIegf.js";import"./Text-CAhyjFWz.js";import"./EmulatedBoldText-DxGIr34d.js";import"./Text-CIY7d5XG.js";import"./utils-CUPQPHYu.js";import"./Tooltip-CLZzy25R.js";import"./OverlayArrow-C0FkFBtp.js";import"./useFocus-ChnOBFmm.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./context-DymIffM8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DiJDuYpp.js";import"./useControlledState-AVItU9lZ.js";import"./useFocusable-DVz_n5zl.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./ContextualHelpTrigger-C0KWDT-M.js";import"./Popover-NNrICePK.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./Dialog-BgAnH5cc.js";import"./Button-DrtrHFmq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./RSPContexts-CJFisqoy.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./OverlayTrigger-CV6rtyLj.js";import"./Heading-Bsg56Dmn.js";import"./Heading-Bhkk33xY.js";import"./useFieldComponent-D7thqSXy.js";import"./FieldError-B3PY7-i2.js";import"./FieldError-BKx1r64I.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";import"./useControlledHostValueProps-mMjKsrzf.js";import"./TextField-DogNmrGL.js";import"./Form-CIigNYkb.js";import"./Group-BwRkGpTi.js";import"./Input-BM_jCh0C.js";import"./useTextField-CayEBnIr.js";import"./useFormReset-w2Qnh74g.js";import"./useFormValidation-CdyRJz3a.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CskkGazD.js";import"./remote-B1GLKgHd.js";import"./react-children-utilities-Bz_bJJDN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
