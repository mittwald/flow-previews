import{r as h,j as r}from"./iframe-Da9Lw8R_.js";import{P as m}from"./PasswordCreationField-DPrSPZrN.js";import{L as u}from"./Label-D7d2SkgN.js";import{B as g}from"./Button-CkcTXATp.js";import{m as C}from"./IconWarning-BYkwpstY.js";import{C as w}from"./CopyButton-wxyUccFa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bM8H28Zu.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./clsx-B-dksMZM.js";import"./index-TT_JC2bB.js";import"./Action-CSMihAu4.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./browser-DDWH8I0V.js";import"./getActionGroupSlot-DWoHNcNE.js";import"./FieldDescription-C0EOWzJH.js";import"./Text-l_fYsQ08.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./utils-Cwd4tFKX.js";import"./Tooltip-F1bzw6B1.js";import"./OverlayArrow-Cf3S1QD1.js";import"./useFocus-BBVXnzgP.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./context-CsdpTyhd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BItT14i_.js";import"./useControlledState-B4YxKAgg.js";import"./useFocusable-CwPW854N.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./ContextualHelpTrigger-BJem8cZf.js";import"./Popover-FxFSsQeG.js";import"./useOverlayController-DXJN5Feb.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./Dialog-Cw1z9AtQ.js";import"./Button-CzbwBi45.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIogNAwh.js";import"./RSPContexts-CqxOCNft.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useEvent-DSYhgwkh.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";import"./OverlayTrigger-BJ63rVtT.js";import"./Heading-p9-3Hmaq.js";import"./Heading-CheJhR1R.js";import"./useFieldComponent-yufHgNqa.js";import"./FieldError-DXoqYbez.js";import"./FieldError-DSdSdK3H.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./useControlledHostValueProps-rJ1Rukac.js";import"./TextField-BMLAakzF.js";import"./Form-D3ZAWear.js";import"./Group-CWa8s-M0.js";import"./Input-inZV5DIC.js";import"./useTextField-oegUv-Jp.js";import"./useFormReset-4DR8Px1h.js";import"./useFormValidation-DjSyrx87.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DXGsR4uF.js";import"./remote-CsFbcl9r.js";import"./react-children-utilities-Cyk0dKBC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
