import{r as h,j as r}from"./iframe-BgKMnsqP.js";import{P as m}from"./PasswordCreationField-DukKfLEX.js";import{L as u}from"./Label-8eLvO5Vl.js";import{B as g}from"./Button-BtfzhoC2.js";import{m as C}from"./IconWarning-LAZRyVR3.js";import{C as w}from"./CopyButton-CeOQIXt5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-EDiDAp0E.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./ActionBatch-4ndP-n8L.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./browser-CrtXW1Io.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./FieldDescription-DSPaRw4X.js";import"./Text-C3i_8DOD.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Text-DxRa_Q_m.js";import"./utils-DF7rIzyn.js";import"./Tooltip-Cmb-Q3wG.js";import"./OverlayArrow-5gMuSGka.js";import"./useFocus-rZbUMOOr.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./context-bU_PoVUz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Do_SyrKm.js";import"./useControlledState-CIyJs2jp.js";import"./useFocusable-D4mYKpyk.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./ContextualHelpTrigger-BQlCXG2l.js";import"./Popover-DwOIDTsd.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./Dialog-BWmXoaKF.js";import"./Button-CpsY86Gq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BRD_gMdl.js";import"./RSPContexts-DOCQ2POG.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./OverlayTrigger-B2K0MccU.js";import"./Heading-Dr5lCRWs.js";import"./Heading-DVJa8yG2.js";import"./useFieldComponent-BrPuybAK.js";import"./FieldError-C-lZWEzn.js";import"./FieldError-DrPRBP1_.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";import"./useControlledHostValueProps-BQEekCgN.js";import"./TextField-Bep40rlk.js";import"./Form-BeISznmy.js";import"./Group-B1pnNyn-.js";import"./Input-DxGeYMpI.js";import"./useTextField-DgG9YqRb.js";import"./useFormReset-BD4Q_TlS.js";import"./useFormValidation-BuWufY-j.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./remote-BqVO6mjn.js";import"./react-children-utilities-CgeSq7xS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
