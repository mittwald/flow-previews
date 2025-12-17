import{r as h,j as r}from"./iframe-BJ1-yygM.js";import{L as u}from"./Label-bQxZtSdp.js";import{B as g}from"./Button-Cjtrvck7.js";import"./IconChevronDown-CrWkAVaz.js";import{I as C}from"./IconDanger-CYKvK3jT.js";import{C as w}from"./CopyButton-BT0gFB1b.js";import{P as m}from"./PasswordCreationField-fyeVx1sP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./Label-CzmfrLRz.js";import"./utils-CcDDSJ_p.js";import"./Hidden-DoQenIIt.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./Text-DheJl8Kj.js";import"./browser-DT5Kx7EO.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CmT8aojC.js";import"./Button-DhOdN5WZ.js";import"./ProgressBar-M3cNuExw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./IconCopy-Dhpw6UsL.js";import"./Tooltip-CQXc8T3n.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";import"./react-children-utilities-BRDC2sGA.js";import"./Action-BvXzPu3R.js";import"./useStatic-hN62Mrr5.js";import"./getActionGroupSlot-0vgdHqUy.js";import"./context-C5k-fmhI.js";import"./dynamic-80JeIFF7.js";import"./FieldDescription-Rja0j7vU.js";import"./TranslationProvider-B_loSML2.js";import"./IconCircleCheck-BFEG22El.js";import"./ContextualHelpTrigger-UT1RMToZ.js";import"./Popover-BUtdYAK1.js";import"./OverlayContextProvider-Dkf9ZMKi.js";import"./Dialog-e6B9GMJE.js";import"./RSPContexts-50ouH6ts.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useEvent-BqUxelCP.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./useOverlayController-DHl1wDZH.js";import"./OverlayTrigger-5palw4T3.js";import"./IconInfo-D8-cEu7p.js";import"./Heading-D6aYHOG-.js";import"./Heading-CdNRKyim.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CZz1dHQJ.js";import"./FieldError-lhJwSH7g.js";import"./FieldError-6-KO0iYn.js";import"./useControlledHostValueProps-eN6I3MnG.js";import"./TextField-sX1L9nh_.js";import"./Form-BhOz7HsW.js";import"./Group-D63yskOW.js";import"./Input-BS77WJBr.js";import"./useTextField-Cjm7LB6I.js";import"./useFormReset-DyV6pE3E.js";import"./useFormValidation-tUUfdeof.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
