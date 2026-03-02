import{r as h,j as r}from"./iframe-Dx38AIDT.js";import{P as m}from"./PasswordCreationField-BlMpHbPB.js";import{L as u}from"./Label-lvpVoRBR.js";import{B as g}from"./Button-Bhwtl7lS.js";import{m as C}from"./IconWarning-tem5fYZU.js";import{C as w}from"./CopyButton-CHOOvFWt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cw331Sxy.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./ActionBatch-B-iA-QhY.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./browser-Bgj4nWuI.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./FieldDescription-BTad89Yx.js";import"./Text-stRMORLN.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./utils-uxa8p5vl.js";import"./Tooltip-DP8HxTlT.js";import"./OverlayArrow-DXkjfcol.js";import"./useFocus-C3KeEXKn.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./context-CRsgLXVa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-XbCssGNL.js";import"./useControlledState-BekZOXin.js";import"./useFocusable-CIjhaoEP.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./ContextualHelpTrigger-CH3CHBRg.js";import"./Popover-CMv0GXnF.js";import"./OverlayContextProvider-tTA2mi55.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./RSPContexts-DnJfGcBy.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./OverlayTrigger-DSgpEliW.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./useFieldComponent-CxTx8kf3.js";import"./FieldError-DY7Z21GR.js";import"./FieldError-Cjk2dDkd.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";import"./useControlledHostValueProps-BgZhJfoJ.js";import"./TextField-CxexmMog.js";import"./Form-CwkZdzbX.js";import"./Group-BjH18wko.js";import"./Input-BQCGNTF8.js";import"./useTextField-DxOU6feS.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CAXp-11u.js";import"./remote-C7_Ru_dB.js";import"./react-children-utilities-dxVRcOy8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
