import{r as h,j as r}from"./iframe-CgV0BA21.js";import{P as m}from"./PasswordCreationField-UDjpzycR.js";import{L as u}from"./Label-Bxuf1S0W.js";import{B as g}from"./Button-CNT8DxS9.js";import{l as C}from"./IconWarning-Cjg_6qhe.js";import{C as w}from"./CopyButton-BVUe6uMB.js";import"./index-nuYtCEEu.js";import"./dynamic-BuNxxpAs.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./clsx-B-dksMZM.js";import"./index-LOR_5P9o.js";import"./useFieldComponent-D1IKYPO_.js";import"./utils-BtxgbS4l.js";import"./Text-DoKxmv7q.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";import"./Group-BkfrkqlC.js";import"./useFocusRing-D4YLibcx.js";import"./useFocus-DCA5O52l.js";import"./Input-CWgJEKQk.js";import"./Hidden-jMQa5TyR.js";import"./TextField-BCrL9C4z.js";import"./RSPContexts-B0Fd51Ht.js";import"./Form-Co57238C.js";import"./useLabel-B3KDK_sh.js";import"./Label-CttY7hce.js";import"./useTextField-bAvx5s3l.js";import"./useFormReset-DmIBBfXo.js";import"./useControlledState-REzwF7fx.js";import"./useFocusable-CmuVkcp6.js";import"./useFormValidation-AnXxOg_8.js";import"./Action-DZ2Xrd6d.js";import"./context-CRjcTZWJ.js";import"./useStatic-BN9Sd72d.js";import"./browser-BkNcCpiL.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./FieldDescription-CQY0EwbT.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Tooltip-CUNaUHGg.js";import"./ClearPropsContextView-k4P5ol-4.js";import"./OverlayArrow-B-9LgXoP.js";import"./ProgressBar-Buubgbe8.js";import"./context-DHnf2uKc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./ReactAriaControlledValueFix-Du2y8LR1.js";import"./ContextualHelpTrigger-BuK9V5Ns.js";import"./Popover-CzgnrOjG.js";import"./useOverlayController-DHYUmg62.js";import"./OverlayContextProvider-DUFKTZaq.js";import"./Dialog-BuxTXh7Q.js";import"./Button-DxfThd7-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dh998neg.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./OverlayTrigger-BQrHQUPN.js";import"./ControlledNotification-Dx7XpGvC.js";import"./Heading--VfPtVyJ.js";import"./Heading-CdcvmK3e.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DilwxyV8.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CAf9aLu0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
