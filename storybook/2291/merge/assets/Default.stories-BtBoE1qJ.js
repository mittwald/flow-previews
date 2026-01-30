import{r as h,j as r}from"./iframe-BIoFjWpr.js";import{P as m}from"./PasswordCreationField-BtzUOH5l.js";import{L as u}from"./Label-D-wfWBos.js";import{B as g}from"./Button-60lZfz3H.js";import{m as C}from"./IconWarning-EC1k16Yv.js";import{C as w}from"./CopyButton-JPn5ytW5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BzebB2lX.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./clsx-B-dksMZM.js";import"./index-h2cI_GQ2.js";import"./Action-CpJIOnVf.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./browser-BAGCYS_p.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./FieldDescription-CmT-44YL.js";import"./Text-Dw86EjFX.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./utils-DZ7CVsEQ.js";import"./Tooltip-C9gBBqKv.js";import"./OverlayArrow-BK2hFoQS.js";import"./useFocus-CQPopARV.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./context-CeBhVpDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C05eNqGk.js";import"./useControlledState-A9PECuda.js";import"./useFocusable-CwNae-cD.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./ContextualHelpTrigger-JoEqeQ00.js";import"./Popover-BZLukQkr.js";import"./useOverlayController-OHHrE_gT.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./Dialog-khxuiED6.js";import"./Button-9bxiqwiQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Uox4pFjd.js";import"./RSPContexts-TtAa_5CI.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";import"./OverlayTrigger-DP9QTZiV.js";import"./Heading-CdczJAyy.js";import"./Heading-DvZsP83m.js";import"./useFieldComponent-DpF862rt.js";import"./FieldError-CY5Rdgwt.js";import"./FieldError-3U-LgGLS.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";import"./useControlledHostValueProps-DbQDLAPx.js";import"./TextField-D2l0jW9W.js";import"./Form-BlXCmAsm.js";import"./Group-kc9AGw0Y.js";import"./Input-D2aCw11E.js";import"./useTextField-BXYStOBz.js";import"./useFormReset-DTiYdK4X.js";import"./useFormValidation-5Xewoqko.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B_0T51TC.js";import"./remote-CdlQwHLV.js";import"./react-children-utilities-DvI8SjR5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
