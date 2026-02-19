import{r as h,j as r}from"./iframe-C9fwoqx7.js";import{P as m}from"./PasswordCreationField-DJfEFdw3.js";import{L as u}from"./Label-DUuytyEq.js";import{B as g}from"./Button-C7pOzOnK.js";import{m as C}from"./IconWarning-slnz76yl.js";import{C as w}from"./CopyButton-BwZ0o6j1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY0EsCod.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./clsx-B-dksMZM.js";import"./index-CbFgIt9G.js";import"./ActionBatch-CR9CogXJ.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./browser-B4JTTu9h.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./FieldDescription-DltXYTvv.js";import"./Text-D7jvp7G5.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Text-xqSfQxLT.js";import"./utils-Cx2L-iDs.js";import"./Tooltip-DFjii58-.js";import"./OverlayArrow-DDmkn5_8.js";import"./useFocus-CMKZ5vES.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./context-C2ecxi5G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-s7_3pCWo.js";import"./useControlledState-BJuMvqvK.js";import"./useFocusable-CQiYog1P.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./ContextualHelpTrigger-Dj2UTy1u.js";import"./Popover-BDNR50NM.js";import"./OverlayContextProvider-DAx33Jid.js";import"./Dialog-yhzZwH_k.js";import"./Button-DDn45mdd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-tgKXO9PL.js";import"./RSPContexts-mF4XBTs4.js";import"./Collection-C29JJn0j.js";import"./CollectionBuilder-ta_UQL8r.js";import"./SelectionIndicator-nEc_xgxs.js";import"./Separator-ykHU2h0d.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./VisuallyHidden-1IKUNS-e.js";import"./OverlayTrigger-BodK83ZQ.js";import"./Heading-XseMYyRS.js";import"./Heading-eUAAoI_I.js";import"./useFieldComponent-HwWxBPXP.js";import"./FieldError-v5ZAFD64.js";import"./FieldError-CEVb6xPQ.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./useControlledHostValueProps-BHcv3dRP.js";import"./TextField-BwNjHd4l.js";import"./Form-Dcg-_ctE.js";import"./Group-BetC_vI7.js";import"./Input-DtMnFP30.js";import"./useTextField-B1VR3mtO.js";import"./useFormReset-Bm_Lqolg.js";import"./useFormValidation-B19EocOE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BWPVzhoG.js";import"./remote-B-ZPT6P_.js";import"./react-children-utilities-BvqDOyMf.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
