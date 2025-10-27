import{r as h,j as r}from"./iframe-DoVgBQr5.js";import{P as m}from"./PasswordCreationField-DBwPj5j4.js";import{L as u}from"./Label-B_iGOO1o.js";import{B as g}from"./Button-2cUDiMZd.js";import{l as C}from"./IconWarning-BITNguYJ.js";import{C as w}from"./CopyButton-DGcvFQEL.js";import"./index-nuYtCEEu.js";import"./dynamic-DslUBYil.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./clsx-B-dksMZM.js";import"./index-CnXLT15x.js";import"./useFieldComponent-Dl5zd8_u.js";import"./utils-BUNxWnYj.js";import"./Text-BnwT6LTw.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-NLX1q1W1.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./Group-DUVw5f5J.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocus-DgyX4ANK.js";import"./Input-CUJOOTLM.js";import"./Hidden-VhCLrHg5.js";import"./TextField-rHpyngO3.js";import"./RSPContexts-DwowBXaw.js";import"./Form-ISVWAvzv.js";import"./useLabel-Dokwxw5N.js";import"./Label-8ulleTCg.js";import"./useTextField-BLEB3qS9.js";import"./useFormReset-DOuAY3sG.js";import"./useControlledState-JsyFwj7N.js";import"./useFocusable-CYiqpOWe.js";import"./useFormValidation-BBVxENjx.js";import"./Action-5AgtWQtu.js";import"./context-C0oFmp5D.js";import"./useStatic-DVOn0oZR.js";import"./browser-CTr_Jj6j.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./FieldDescription-CycJT4it.js";import"./Text-DarT3iBq.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Tooltip-C0w1TLqB.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./OverlayArrow-F14P5UPi.js";import"./ProgressBar-i7FI2__w.js";import"./context-DKZO50eL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./ReactAriaControlledValueFix-B9MjC7lr.js";import"./ContextualHelpTrigger-Ce_DywJT.js";import"./Popover-23BYXG6-.js";import"./useOverlayController-CaB8twj3.js";import"./OverlayContextProvider-D10wv2mp.js";import"./Dialog-BOL4Q97z.js";import"./Button-Cf2Tt4tQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMEqlp6n.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";import"./OverlayTrigger-CMoG14I4.js";import"./ControlledNotification-zc0ciOkv.js";import"./Heading-B-ZtrlSM.js";import"./Heading-BDk_Xo8S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CAjxBzvX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BjGFLica.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
