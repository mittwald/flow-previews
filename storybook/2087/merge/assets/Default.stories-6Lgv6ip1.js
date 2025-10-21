import{r as h,j as r}from"./iframe-DwkHntCQ.js";import{P as m}from"./PasswordCreationField-8lw6kFxd.js";import{L as u}from"./Label-IsfDEsPh.js";import{B as g}from"./Button-DN4_LEM9.js";import{l as C}from"./IconWarning-CscgxAB5.js";import{C as w}from"./CopyButton-CSmZFR7l.js";import"./index-nuYtCEEu.js";import"./dynamic-A00wcWEh.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./clsx-B-dksMZM.js";import"./index-Cx9MYi32.js";import"./useFieldComponent-DTLstJQQ.js";import"./utils-Di7WFWpe.js";import"./Text-BtFh1iC6.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";import"./Group-BnJXXyrI.js";import"./useFocusRing-B6zRS2mI.js";import"./utils-BgD92WZP.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocus-GoSUCcJ3.js";import"./Input-CxNU6sM9.js";import"./Hidden-CTKHA4Af.js";import"./TextField-BU5FsIMM.js";import"./RSPContexts-CHr_tkrx.js";import"./Form-DZTCn0e1.js";import"./useLabel-DPc8RWv0.js";import"./Label-CkXLKyn5.js";import"./useTextField-CMn55DJk.js";import"./useFormReset-BUY4HIau.js";import"./useControlledState-DyDKUpf4.js";import"./useFocusable-Bnl-RQKa.js";import"./useFormValidation-D01J8um2.js";import"./Action-BTZgUlHV.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./browser-DfU0u7Y9.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./FieldDescription-DY5ANAML.js";import"./Text-DBgNVic9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Tooltip-BZS-4zpv.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./OverlayArrow-BCGgH0Vq.js";import"./ProgressBar-BJChhODk.js";import"./context-BkqugFd7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./ReactAriaControlledValueFix-DNP-65Ab.js";import"./ContextualHelpTrigger-CzVJho9R.js";import"./Popover-DvylaOgQ.js";import"./useOverlayController-Dk9bMBr8.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./Dialog-Cj1dv_FM.js";import"./Button-BrfRNilt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BCP8B4jj.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./VisuallyHidden-CVpyzdGa.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./ControlledNotification-B20ejBs1.js";import"./Heading-BH424ajP.js";import"./Heading-8J-pRNKz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DG7FFB_1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bd24wSd4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ar={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Kr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Kr as __namedExportsOrder,Ar as default};
