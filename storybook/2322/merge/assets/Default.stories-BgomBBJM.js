import{r as h,j as r}from"./iframe-jPI25t47.js";import{P as m}from"./PasswordCreationField-Trr1gLTT.js";import{L as u}from"./Label-CVxkn5sg.js";import{B as g}from"./Button-CMdL10Ys.js";import{m as C}from"./IconWarning-D8uDJDej.js";import{C as w}from"./CopyButton-DzTZT-c4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DcvTJJQa.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./browser-BKdBfXKE.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./FieldDescription-BijM-gJh.js";import"./Text-CzRKl4Rn.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./utils-DssEHlsW.js";import"./Tooltip-UeZq3lYx.js";import"./OverlayArrow-2srpU7pW.js";import"./useFocus-DZAeMhz-.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./context-yJg27e0-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-PgP7-E1A.js";import"./useControlledState-CujVadxA.js";import"./useFocusable-YzLAhItH.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./ContextualHelpTrigger-DHc558Lv.js";import"./Popover-BMY2UlYP.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./RSPContexts-COITpNJr.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./OverlayTrigger-DoiiNK8E.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./useFieldComponent-CHdLkU8r.js";import"./FieldError-DPfGZS1P.js";import"./FieldError-C3mwkvrq.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";import"./useControlledHostValueProps-AQocOlOa.js";import"./TextField-PW0iysUb.js";import"./Form-BeysAUF2.js";import"./Group-CAA0eQzC.js";import"./Input-DUaj7rN4.js";import"./useTextField-BD2R3zQz.js";import"./useFormReset-DGTIvKtn.js";import"./useFormValidation-aAlw1sTR.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DhHtGG23.js";import"./remote-B_as-6Bm.js";import"./react-children-utilities-DbvdOJlU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
