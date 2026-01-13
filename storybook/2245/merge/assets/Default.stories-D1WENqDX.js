import{r as h,j as r}from"./iframe-YnzBkBP1.js";import{P as m}from"./PasswordCreationField-B2Q5KrCi.js";import{L as u}from"./Label-F32H6fZQ.js";import{B as g}from"./Button-BvFsSv02.js";import{m as C}from"./IconWarning-CfrgrK5w.js";import{C as w}from"./CopyButton-C8It_VyC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAiG6Vmq.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./clsx-B-dksMZM.js";import"./index-C9L7IfWC.js";import"./Action-DDQNlr1F.js";import"./context-CGFBFC28.js";import"./useStatic-9o3ywd_N.js";import"./browser-Sf85iaAd.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./FieldDescription-2qU2oAnE.js";import"./Text-CErt044E.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./utils-CRkRQkMM.js";import"./Tooltip-B-vVGHNa.js";import"./OverlayArrow--71CUfvh.js";import"./useFocus-CEJfh5Ox.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./context-Dc351FW_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DwL8StHF.js";import"./useFocusable-BIzKoTBr.js";import"./useFocusRing-B9e_t0Os.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./ContextualHelpTrigger-CSmcSCrd.js";import"./Popover-BfimHfgr.js";import"./useOverlayController-BBC78SET.js";import"./OverlayContextProvider-JV42Gzf_.js";import"./Dialog-971pU4tV.js";import"./Button-DfMPCk5A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NgaP4MvP.js";import"./RSPContexts-Mp6syAgQ.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./VisuallyHidden-BsENeWhO.js";import"./OverlayTrigger-B11Ab0Yr.js";import"./Heading-BiUnALLM.js";import"./Heading-ChrBU0Of.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BnDxVRXr.js";import"./FieldError-CkABddBr.js";import"./FieldError-BIVQARwB.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";import"./useControlledHostValueProps-B6-BJ9eH.js";import"./TextField-tjbLvPcx.js";import"./Form-DTh0_D5U.js";import"./Group-BECEQ48t.js";import"./Input-9KD990Lp.js";import"./useTextField-wFMqJwOy.js";import"./useFormReset-3oD77Uyk.js";import"./useFormValidation-MbSolyNi.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-z9BQWCCX.js";import"./remote-psJ_k7Km.js";import"./react-children-utilities-D2pMJJ93.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
