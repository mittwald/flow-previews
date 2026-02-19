import{r as h,j as r}from"./iframe-ByHSJ7Zj.js";import{P as m}from"./PasswordCreationField-D1Fxeoqd.js";import{L as u}from"./Label-tcy2V_mA.js";import{B as g}from"./Button-DRqw54Mf.js";import{m as C}from"./IconWarning-D57HRYjk.js";import{C as w}from"./CopyButton-Dceu3lBK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8-Mz4LM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./ActionBatch-DAYGGFfY.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./browser-CsRLC16Z.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./FieldDescription-BGXfCMai.js";import"./Text-CE06l-7_.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./utils-AuVRPQNE.js";import"./Tooltip-stz1zpwa.js";import"./OverlayArrow-y5FFWgxm.js";import"./useFocus-DXK20Yfh.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./context-ER57Z7kb.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-lrSptqjQ.js";import"./useControlledState-CZXI0X0f.js";import"./useFocusable-CTHcGGNa.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./ContextualHelpTrigger-DRPtCVWt.js";import"./Popover-D7X1-nqf.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./Dialog-Bv6y7U-F.js";import"./Button-D0UJ2jXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-53w3WrUq.js";import"./RSPContexts-DvjI-Cwg.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";import"./OverlayTrigger-BArWopla.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./useFieldComponent-CBB8cMnJ.js";import"./FieldError-C1ELgHYl.js";import"./FieldError-N78nigrI.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./useControlledHostValueProps-BcSvQjHa.js";import"./TextField-B3HDf383.js";import"./Form-B6nfDOYR.js";import"./Group-D2DTtkcC.js";import"./Input-Cjg2Ef7t.js";import"./useTextField-1pYdfEhT.js";import"./useFormReset-BeZmi33v.js";import"./useFormValidation-BGcU6QC0.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./remote-NqjFlPNq.js";import"./react-children-utilities-B_uH5TcN.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
