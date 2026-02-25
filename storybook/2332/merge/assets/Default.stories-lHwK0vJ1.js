import{r as h,j as r}from"./iframe-CFTqgbub.js";import{P as m}from"./PasswordCreationField-BazjhtVi.js";import{L as u}from"./Label-GwGXhrLq.js";import{B as g}from"./Button-DYo4uywI.js";import{m as C}from"./IconWarning-BmBcYBZE.js";import{C as w}from"./CopyButton-yKMY0F1w.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-GrVhUXuF.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./clsx-B-dksMZM.js";import"./index-B_-FfeBA.js";import"./ActionBatch-D8GPDYy5.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./browser-DzYF9AGw.js";import"./getActionGroupSlot-B6jQShKX.js";import"./FieldDescription-WAwKPsRK.js";import"./Text-DGb4Yj-N.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./utils-B4tY5r2S.js";import"./Tooltip-DJu3FJXh.js";import"./OverlayArrow-5aYILyU8.js";import"./useFocus-BOeBkWuf.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./context-DrUKb0cF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Ck0KvK0z.js";import"./useControlledState-SUsbXgrM.js";import"./useFocusable-Dm8xzBfk.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./ContextualHelpTrigger-D3bXfaql.js";import"./Popover-CFUr0FGw.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./Dialog-BnZ8dnOj.js";import"./Button-BKBgz7xZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./RSPContexts-CFURB7yy.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./Heading-439pSAMO.js";import"./Heading-D2J3_q6l.js";import"./useFieldComponent-CbaMz5aY.js";import"./FieldError-CYjuAiBI.js";import"./FieldError-DNv3qA2U.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./useControlledHostValueProps-BuQGKxFM.js";import"./TextField-CeJo-LsO.js";import"./Form-XRNm8_rd.js";import"./Group-DV5U8v9N.js";import"./Input-7Pv0YxOe.js";import"./useTextField-CcrA4Fls.js";import"./useFormReset-BbhAN2Ls.js";import"./useFormValidation-BPzjnfej.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./remote-BlniWp0j.js";import"./react-children-utilities-BMGswwLc.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
