import{r as h,j as r}from"./iframe-Bqcpbrss.js";import{P as m}from"./PasswordCreationField-B4RoCjNo.js";import{L as u}from"./Label-DkmPPtXy.js";import{B as g}from"./Button-Cnlerii9.js";import{n as C}from"./IconWarning-dEqiOsyE.js";import{C as w}from"./CopyButton-D9KyCvMp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dekqokaj.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./clsx-B-dksMZM.js";import"./index-H5GW8qHY.js";import"./Action-B2JQUsel.js";import"./context-ChzSVWNL.js";import"./useStatic-DxBp64zy.js";import"./browser-C4ue27yU.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./FieldDescription-RQ7xrGTo.js";import"./Text-BTcvwTq1.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./utils-BJedWkRC.js";import"./Tooltip-DurDy4fa.js";import"./OverlayArrow-BNJAVeF8.js";import"./useFocus-BCtAPQqm.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./context-BrwEoz3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BHyXOHwM.js";import"./useFocusable-C3Q_jzXL.js";import"./useFocusRing-tPpareNh.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./ContextualHelpTrigger-mm5vFTwN.js";import"./Popover-BzwM4JMX.js";import"./useOverlayController-b38M5Zqz.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./Dialog-Dpg78GNT.js";import"./Button-DylF7GCR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVO_DkHY.js";import"./RSPContexts-DpyQuSVh.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./OverlayTrigger-BuPKGzUB.js";import"./Heading-BG_QqVK-.js";import"./Heading-BNK1YdHX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CI3p7oBW.js";import"./FieldError-B_AiZFnH.js";import"./FieldError-DLGH1zeP.js";import"./useControlledHostValueProps-DyxO0qOy.js";import"./TextField-DyQPvIto.js";import"./Form-CNSKTjy-.js";import"./Group-CL0L_n-j.js";import"./Input-RoH5kbBf.js";import"./useTextField-DAg6DrtL.js";import"./useFormReset-BuAWhlth.js";import"./useFormValidation-D7KvBPrT.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CCDMAFHO.js";import"./remote-DG6VBXek.js";import"./react-children-utilities-B0AHj6PP.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
