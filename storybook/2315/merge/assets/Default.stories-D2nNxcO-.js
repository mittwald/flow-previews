import{r as h,j as r}from"./iframe-BKpTcuej.js";import{P as m}from"./PasswordCreationField-mN0oGrxT.js";import{L as u}from"./Label-sjxWv79d.js";import{B as g}from"./Button-CHR5Lto_.js";import{m as C}from"./IconWarning-8R3XoFcV.js";import{C as w}from"./CopyButton-npHOVt_s.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5pLUzdK.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./clsx-B-dksMZM.js";import"./index-DwEhfHus.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./browser-DdR_cYXU.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./FieldDescription-B8eaQXaP.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Text-_5F14b0c.js";import"./utils-BuTqHWUg.js";import"./Tooltip-cxoOV0-e.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useFocus-C4QXJ0i2.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./context-Bt___W0l.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CL2qG9Ti.js";import"./useControlledState-C61mrJlx.js";import"./useFocusable-8gC31DNg.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./ContextualHelpTrigger-DmwbxD1V.js";import"./Popover-pxlmKNyd.js";import"./useOverlayController-C8fdBT6C.js";import"./OverlayContextProvider-DjenE3bO.js";import"./Dialog-CnIAbR2d.js";import"./Button-WezQgFMH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwvZqs_N.js";import"./RSPContexts-CNLAcvzw.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";import"./OverlayTrigger-C56VcKX9.js";import"./Heading-Dusm-uvD.js";import"./Heading-Bj0wrS_Z.js";import"./useFieldComponent-AXq55mny.js";import"./FieldError-BmJ7-crS.js";import"./FieldError-Bf7-_15k.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./useControlledHostValueProps-BTfwsBK-.js";import"./TextField-CBKTAUDc.js";import"./Form-fml-60gz.js";import"./Group-aKg9TIpc.js";import"./Input-u4H7iO9I.js";import"./useTextField-DFYLeiX4.js";import"./useFormReset-DjxTrJRS.js";import"./useFormValidation-6yUCZE8C.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CSX_cmFV.js";import"./remote-nPMBb6wO.js";import"./react-children-utilities-CYyXx9Nq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
