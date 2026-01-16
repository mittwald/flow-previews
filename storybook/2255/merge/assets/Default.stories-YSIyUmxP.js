import{r as h,j as r}from"./iframe-DEsugzBP.js";import{P as m}from"./PasswordCreationField-NznprReQ.js";import{L as u}from"./Label-DyIqFkt_.js";import{B as g}from"./Button-Bh57nksp.js";import{m as C}from"./IconWarning-qDYXGw-D.js";import{C as w}from"./CopyButton-BhhcFDqr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-FU-wbqWq.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./clsx-B-dksMZM.js";import"./index-DvVsbrc7.js";import"./Action-DUjscWwq.js";import"./context-20QbnAW8.js";import"./useStatic-BMQe5ifs.js";import"./browser-DSOUTdOR.js";import"./getActionGroupSlot-d_28ev7h.js";import"./FieldDescription-DsSfVktg.js";import"./Text-CGG2whlc.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./utils-k3goWFVI.js";import"./Tooltip-BQk7L_q7.js";import"./OverlayArrow-CBh5kmtO.js";import"./useFocus-B3AZuBYY.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./context-BA9NBDMH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dcr_irR6.js";import"./useFocusable-Bwqhhmq3.js";import"./useFocusRing-DuZx28fv.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./ContextualHelpTrigger-DurKOjNM.js";import"./Popover-CHiAjpaQ.js";import"./useOverlayController-Bq883NOw.js";import"./OverlayContextProvider-CajcDkAh.js";import"./Dialog-B0UO0Xtu.js";import"./Button-D-exCq-2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CsaWzeZC.js";import"./RSPContexts-BS5BTC1y.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./VisuallyHidden-DVFgokJG.js";import"./OverlayTrigger-CImrZmh1.js";import"./Heading-Di_kcqRZ.js";import"./Heading-B1qRR7lK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-CoV9Rbdv.js";import"./FieldError-D0RH6F7V.js";import"./FieldError-DL7mdN7X.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";import"./useControlledHostValueProps-CB-rODEV.js";import"./TextField-DZ6i9AsT.js";import"./Form-BBNX_R9o.js";import"./Group-LEKqTwAp.js";import"./Input-B5rLIpjG.js";import"./useTextField-D6Qak1On.js";import"./useFormReset-D1Ly9aDH.js";import"./useFormValidation-DCx77s5O.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DJgoXeas.js";import"./remote-Bm53ArvY.js";import"./react-children-utilities-B-Xj5fEX.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
