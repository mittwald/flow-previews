import{r as h,j as r}from"./iframe-BnHQGzj-.js";import{P as m}from"./PasswordCreationField-Cil89nif.js";import{L as u}from"./Label-u3CIBBS-.js";import{B as g}from"./Button-kOzdzwoL.js";import{m as C}from"./IconWarning-BD5ZgLZv.js";import{C as w}from"./CopyButton-Cd8gn-N1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dg_y_eXk.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./Action-D5FY68jf.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./browser-Byd_T3zS.js";import"./getActionGroupSlot-DFydpqIy.js";import"./FieldDescription-yrYvUz27.js";import"./Text-BWqTdGF3.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./Text-CP9lFNhL.js";import"./utils-B_drgFmA.js";import"./Tooltip-Vhknl-rO.js";import"./OverlayArrow-CU__1Pr_.js";import"./useFocus-BQLqug8q.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BtYlF30D.js";import"./useControlledState-ARGAgX5I.js";import"./useFocusable-CpiznpYH.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./ContextualHelpTrigger-C_Zp-5J3.js";import"./Popover-By64ee4S.js";import"./useOverlayController-nmD6fAp8.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./Dialog-vlYkkLZ8.js";import"./Button-7nIxjvHJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./RSPContexts-DJrv2Up2.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";import"./OverlayTrigger-DgkWH0DW.js";import"./Heading-2AT3piVo.js";import"./Heading-BZTJ56jD.js";import"./useFieldComponent-BKOZgMTQ.js";import"./FieldError-hA7hA6sK.js";import"./FieldError-CfhVGgFS.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";import"./useControlledHostValueProps-C85uCNsj.js";import"./TextField-CmEfXiDD.js";import"./Form-B5QWBDfx.js";import"./Group-ZIuNhF8O.js";import"./Input-DmDHg40n.js";import"./useTextField-D3uZgsWg.js";import"./useFormReset-C2cP98Fi.js";import"./useFormValidation-CJa5Pm36.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DoB6VVvS.js";import"./remote-DzOTiMGq.js";import"./react-children-utilities-MIgKXyfS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
