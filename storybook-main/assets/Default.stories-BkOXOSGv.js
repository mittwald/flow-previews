import{r as h,j as r}from"./iframe-C_XCETJ4.js";import{P as m}from"./PasswordCreationField-dAxeYY_H.js";import{L as u}from"./Label-C05Lio9F.js";import{B as g}from"./Button-BRKehz01.js";import{m as C}from"./IconWarning-D8ZYq2sU.js";import{C as w}from"./CopyButton-B1_Ji0qq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjbOT4dP.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./ActionBatch-TqepIOEV.js";import"./context-BzuZVooY.js";import"./useStatic-CKCyvBOK.js";import"./browser-BQl26QHV.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./FieldDescription-9KiMe7M1.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./utils-Bso2FrGw.js";import"./Tooltip-CR3Bs1Gb.js";import"./OverlayArrow-DucIvLHR.js";import"./useFocus-D-vzktAn.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./context-CpOW4Kl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dl1uWSge.js";import"./useControlledState-CeDypDyB.js";import"./useFocusable-CMVXl80p.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./ContextualHelpTrigger-BTXbHtgR.js";import"./Popover-Cr2hibE5.js";import"./useOverlayController-C6c2wWeg.js";import"./OverlayContextProvider-Ben69tTv.js";import"./Dialog-BbJdb0zX.js";import"./Button-DIlWiE4j.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-xR971w.js";import"./RSPContexts-PVsy4Zek.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./OverlayTrigger-lTtRcte7.js";import"./Heading-42b9lNh5.js";import"./Heading-Cm7wIRHP.js";import"./useFieldComponent-K9rhjMxn.js";import"./FieldError-Cv_CJ9jj.js";import"./FieldError-5QFQIGqn.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";import"./useControlledHostValueProps-sh2cWMdB.js";import"./TextField-BDy93HHg.js";import"./Form-Bpra3FZF.js";import"./Group-BtgHmZ3N.js";import"./Input-54bUd5Aj.js";import"./useTextField-DD8e8EGD.js";import"./useFormReset-CmrFi5aC.js";import"./useFormValidation-CsbIfaDX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-dY4_o8YP.js";import"./remote-BBIBCAlv.js";import"./react-children-utilities-BQ-9M5CC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
