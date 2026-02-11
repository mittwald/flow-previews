import{r as h,j as r}from"./iframe-BWSm23JV.js";import{P as m}from"./PasswordCreationField-CnMinN9_.js";import{L as u}from"./Label-T9tt80_8.js";import{B as g}from"./Button-B45r898z.js";import{m as C}from"./IconWarning-R37DsKRA.js";import{C as w}from"./CopyButton-CdQpPtB0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-WPTM_TAt.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./clsx-B-dksMZM.js";import"./index-D0YiHBOl.js";import"./Action-cxW9JZWQ.js";import"./context-DzxYIN56.js";import"./useStatic-B14v8lYB.js";import"./browser-S_Q3Hufb.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./FieldDescription-DaTX6mR9.js";import"./Text-BaJ5HEnd.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./utils-Dla7ZNEN.js";import"./Tooltip-D4bfE97s.js";import"./OverlayArrow-Lv31M_SN.js";import"./useFocus-CrlSoDhl.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./context-4oRtfVxK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CI0bGTjl.js";import"./useControlledState-BdTYoDdO.js";import"./useFocusable-7cwTszGB.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./ContextualHelpTrigger-7Bj_v541.js";import"./Popover-BA8B3sEd.js";import"./useOverlayController-dPOs3tXC.js";import"./OverlayContextProvider-Bxu2XFRl.js";import"./Dialog-uisnl94N.js";import"./Button-DWVSyZOa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_E4YsZw.js";import"./RSPContexts--whDujQs.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";import"./OverlayTrigger-Cn0zy4Sq.js";import"./Heading-0Lq3KVQb.js";import"./Heading-Cs-78oPS.js";import"./useFieldComponent-Cr8cfCaw.js";import"./FieldError-DNnGmqvO.js";import"./FieldError-BA3GdU0H.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";import"./useControlledHostValueProps-BuR1Cm_k.js";import"./TextField-BPKHY_43.js";import"./Form-DKTVNEPJ.js";import"./Group-BVyYtesD.js";import"./Input-Cdu3oBr0.js";import"./useTextField-C3k-FBa_.js";import"./useFormReset-DeveCpy2.js";import"./useFormValidation-C5ZFiF_6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CWXG4qcN.js";import"./remote-DcEXMbRM.js";import"./react-children-utilities-C1v7HlKC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
