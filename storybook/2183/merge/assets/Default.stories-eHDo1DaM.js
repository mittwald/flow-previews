import{r as h,j as r}from"./iframe-CgWIZppF.js";import{P as m}from"./PasswordCreationField-D0MzTkNb.js";import{L as u}from"./Label-8Ls1PMPy.js";import{B as g}from"./Button-B2z86NVg.js";import{n as C}from"./IconWarning-CJrmQcXC.js";import{C as w}from"./CopyButton-tKwPJz96.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BqY2cEs-.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./clsx-B-dksMZM.js";import"./index-D8vpbAff.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./browser-C8d3FCf4.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./FieldDescription-k5usNxcY.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./utils-CqFMFg3g.js";import"./Tooltip-BSZoAPFZ.js";import"./OverlayArrow-CNLX7-2g.js";import"./useFocus-ClWOKyYK.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./context-DG5uy-SY.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ii3oWk08.js";import"./useFocusable-Dp8viQw7.js";import"./useFocusRing-pEE2Rwro.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./ContextualHelpTrigger-CfC9NVkJ.js";import"./Popover-1Hxb36ee.js";import"./useOverlayController-CUfZ3j8o.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./Dialog-R-LZrA7I.js";import"./Button-C_sZyB84.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoCxa2CI.js";import"./RSPContexts-CAKQ_-J3.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./Heading-CfRE4X5D.js";import"./Heading-DOQpztPl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BZyKlvwh.js";import"./FieldError-Dr7a0W2N.js";import"./FieldError-xtpbDfud.js";import"./useControlledHostValueProps-NWqFGbi9.js";import"./TextField-xfSP_rx8.js";import"./Form-BaHtPP4t.js";import"./Group-C5HUn3mH.js";import"./Input-jwk6Ly15.js";import"./useTextField-CrxwcKhu.js";import"./useFormReset-BEtHvHxA.js";import"./useFormValidation-DKxVhdCK.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-nmzfTpX1.js";import"./remote-DVGHPh_8.js";import"./react-children-utilities-DSPQ1wq0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
