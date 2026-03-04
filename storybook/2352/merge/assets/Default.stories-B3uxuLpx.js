import{r as h,j as r}from"./iframe-CwpToEZy.js";import{P as m}from"./PasswordCreationField-Du6J8s2s.js";import{L as u}from"./Label-BX1OHHkE.js";import{B as g}from"./Button-Cw2xgR_6.js";import{m as C}from"./IconWarning-BRui_VYo.js";import{C as w}from"./CopyButton-BP7stzfC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfOleVAa.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./ActionBatch-DcvnwnMD.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./browser-DhIaf7O7.js";import"./getActionGroupSlot-DtR43x--.js";import"./FieldDescription-64izSUV5.js";import"./Text-DRk3V-Fm.js";import"./EmulatedBoldText-YNefbpnq.js";import"./Text-Cb4d8n7F.js";import"./utils-3nROwXn_.js";import"./Tooltip-DZc5NzeP.js";import"./OverlayArrow-Df1wGHjd.js";import"./useFocus-BFSvAolX.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./context-DWVDZDUv.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CJeIxJct.js";import"./useControlledState-BvlK1ysl.js";import"./useFocusable-ixEZOImu.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./ContextualHelpTrigger-BIxnxNcf.js";import"./Popover-BSakkrK3.js";import"./OverlayContextProvider-CBORYkOm.js";import"./Dialog-CQ_DXP4m.js";import"./Button-CuwTmUjn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./RSPContexts-DAz7wbZz.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./OverlayTrigger-Dh_IH1hG.js";import"./Heading-BXHG1LZb.js";import"./Heading-CAz3skDU.js";import"./useFieldComponent-CneqxYGw.js";import"./FieldError-P_YSxT2d.js";import"./FieldError-BoYVEB6S.js";import"./AlertText-B3iqZ-8C.js";import"./AlertIcon-DEQIepDy.js";import"./useControlledHostValueProps-DFisVnNH.js";import"./TextField-DdZox5rD.js";import"./Form-Di0COYqU.js";import"./Group-CMfRs64V.js";import"./Input-Nsfgb7CY.js";import"./useTextField-UBSbKfTG.js";import"./useFormReset-BARG9uBg.js";import"./useFormValidation-pFRcrJM7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CN3jmE_K.js";import"./remote-DRomu556.js";import"./react-children-utilities-BOSWx44x.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
