import{r as h,j as r}from"./iframe-DGnxviCN.js";import{P as m}from"./PasswordCreationField-BnMrX0CH.js";import{L as u}from"./Label-C_bFUpyc.js";import{B as g}from"./Button-BVsKVkL8.js";import{m as C}from"./IconWarning-B9r0STX6.js";import{C as w}from"./CopyButton-BkMKra3q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjV52Fwj.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./clsx-B-dksMZM.js";import"./index-CLLV6gyd.js";import"./ActionBatch-CX-JwDue.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./browser-Cb_u6_6F.js";import"./getActionGroupSlot-rP5M9435.js";import"./FieldDescription-CXMcujUG.js";import"./Text-VNnveGPv.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./Text-DvHtl8Bn.js";import"./utils-BkfS5ksp.js";import"./Tooltip-KvlfeKwJ.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useFocus--s-Wd8Ep.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./context-UPqYfqWR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bv9AUNti.js";import"./useControlledState-Tnf2yuXg.js";import"./useFocusable-Qpttz7ZN.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./ContextualHelpTrigger-Dt-AN9cE.js";import"./Popover-6gSZV124.js";import"./OverlayContextProvider-DWOAvC95.js";import"./Dialog-4LBd4V1R.js";import"./Button-BPmMTYs3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyY11qHx.js";import"./RSPContexts-DVx2WDHj.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./OverlayTrigger-BRKr18-D.js";import"./Heading-DTe6jOe1.js";import"./Heading-BzIJuxDf.js";import"./useFieldComponent-YlKWY1fY.js";import"./FieldError-D8VjacOs.js";import"./FieldError-er7nowFJ.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";import"./useControlledHostValueProps-BIbkMX3_.js";import"./TextField-BjemnuiU.js";import"./Form-DxH8Icum.js";import"./Group-Bidst4UD.js";import"./Input-BlrdZkUM.js";import"./useTextField-DgN6vDQ1.js";import"./useFormReset-DURLcehp.js";import"./useFormValidation-Dta_Z6Hx.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DowiBEwh.js";import"./remote-B6BjMgpw.js";import"./react-children-utilities-CblTP0Wv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
