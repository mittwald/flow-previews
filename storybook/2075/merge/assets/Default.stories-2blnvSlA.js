import{r as h,j as r}from"./iframe-C9dYfgSf.js";import{P as m}from"./PasswordCreationField-DK8mglmP.js";import{L as u}from"./Label-huPJyomh.js";import{B as g}from"./Button-RNpKkVK8.js";import{z as C}from"./IconWarning-fVXPK3i1.js";import{C as w}from"./CopyButton-kFt2-fFK.js";import"./index-nuYtCEEu.js";import"./dynamic-4HLWwwwW.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./clsx-B-dksMZM.js";import"./index-DbMX5jmM.js";import"./useFieldComponent-Br5YSvi-.js";import"./utils-CO6LnGLR.js";import"./Text-CQ7Fwsu6.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./Group-DC27XkzE.js";import"./useFocusRing-29NBTIcT.js";import"./useFocus-xkgg1n29.js";import"./Input-B4cpKRwG.js";import"./Hidden-C5ZQOCSQ.js";import"./TextField-Cfjxq2lC.js";import"./RSPContexts-BkJpVpLi.js";import"./Form-CYcFTCJ6.js";import"./useLabel-DpM9fuaR.js";import"./Label-HJzRYjqm.js";import"./useTextField-fnhO15Be.js";import"./useFormReset-CCon2GTP.js";import"./useControlledState-DlEEU1a1.js";import"./useFocusable-U5sjNWcc.js";import"./useFormValidation-cSt72451.js";import"./Action-BrSPa5cY.js";import"./context-BXzGXLkM.js";import"./useStatic-BaiCJrRH.js";import"./browser-CNYhznL3.js";import"./getActionGroupSlot-CRNg2W87.js";import"./FieldDescription-aE3p3Nfy.js";import"./Text-DeJ4PaiG.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Tooltip-3RuYs7ja.js";import"./ClearPropsContextView-DPeL6MiY.js";import"./OverlayArrow-CkkZdON1.js";import"./ProgressBar-BM6quT-y.js";import"./context-iM_q7ty8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./ReactAriaControlledValueFix-1U2pzmCq.js";import"./ContextualHelpTrigger-D4dj3D_t.js";import"./Popover-JI_LEAD1.js";import"./OverlayContextProvider-CZ-NaAce.js";import"./Dialog-W7ChNaVu.js";import"./Button-CD1zJvoj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlhdQGL7.js";import"./Collection-BLbQf80v.js";import"./CollectionBuilder-tXiCZVVh.js";import"./SelectionIndicator-BcmkxpDt.js";import"./Separator-j1ISyAzV.js";import"./SelectionManager-jzyqiCAr.js";import"./useEvent-D_pA9wfR.js";import"./useCollator-C7M5jLo1.js";import"./FocusScope-BDFIEW4R.js";import"./VisuallyHidden-Ck6pQyeO.js";import"./OverlayTrigger-CgW4dBKa.js";import"./ControlledNotification-CQYIBWNV.js";import"./Heading-Bk9PzEEg.js";import"./Heading-D3uq54pF.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-znAKCBZ4.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DDIQ3dza.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
