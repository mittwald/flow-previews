import{r as h,j as r}from"./iframe-9LT5pwxo.js";import{P as m}from"./PasswordCreationField-C7iK2Why.js";import{L as u}from"./Label-Cy0HO6mF.js";import{B as g}from"./Button-DgX4Ha9j.js";import{z as C}from"./IconWarning-BGmK8I3p.js";import{C as w}from"./CopyButton-C7T_wC74.js";import"./index-nuYtCEEu.js";import"./dynamic-Dp02ioFc.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./clsx-B-dksMZM.js";import"./index-B4OxUaac.js";import"./useFieldComponent-FBKhS2uw.js";import"./utils-C12iYS2x.js";import"./Text-cT0V7Crl.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";import"./Group-C-8wTSfb.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocus-CGIGFm0L.js";import"./Input-CuGFAjVN.js";import"./Hidden-Dc5yMvqI.js";import"./TextField-Cg6vRFbo.js";import"./RSPContexts-D4jozd1E.js";import"./Form-PBwv22gS.js";import"./useLabel-D0_ysNiP.js";import"./Label-B9A8CQ6N.js";import"./useTextField-Bgi1f7m8.js";import"./useFormReset-DsyYy3rG.js";import"./useControlledState-B0dx1ah2.js";import"./useFocusable-6Pd0pdJi.js";import"./useFormValidation-gXwoIgM4.js";import"./Action-CxBB9EbS.js";import"./context-CNHQEL1v.js";import"./useStatic-C20s3RtG.js";import"./browser-Be7wxfSs.js";import"./getActionGroupSlot-BSebOatG.js";import"./FieldDescription-BLZvXXGp.js";import"./Text-FZjxGLxv.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Tooltip-C-zhliMg.js";import"./ClearPropsContextView-CturT0aU.js";import"./OverlayArrow-CBGQsLGC.js";import"./ProgressBar-DUkmnmeC.js";import"./context-CZZdPtMN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./ReactAriaControlledValueFix-BvsinBSk.js";import"./ContextualHelpTrigger-Btf8LcVG.js";import"./Popover-BeAbZr2-.js";import"./OverlayContextProvider-BxKLYzMZ.js";import"./Dialog-CLeuoHpB.js";import"./Button-BRQOtLOr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYkWbbQS.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./VisuallyHidden-kbtTP9xl.js";import"./OverlayTrigger-CKLv7_gg.js";import"./ControlledNotification-Dj9ZPYyt.js";import"./Heading-CsMeNISd.js";import"./Heading-BdTxNxt3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-zozdo9rY.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-7jpPXpdG.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
