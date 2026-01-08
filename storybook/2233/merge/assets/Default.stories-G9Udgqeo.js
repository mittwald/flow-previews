import{r as h,j as r}from"./iframe-BMquwUxp.js";import{P as m}from"./PasswordCreationField-B_l50i42.js";import{L as u}from"./Label-RP2jfdXb.js";import{B as g}from"./Button-DvE0An6z.js";import{o as C}from"./IconWarning-wcTYZTVE.js";import{C as w}from"./CopyButton-QXC3jYd6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3tImXr.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./browser-CBlt42Oy.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./FieldDescription-CjEOnvYA.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./utils-C54becjs.js";import"./Tooltip-BGPyUt4I.js";import"./OverlayArrow-LMfUU-b0.js";import"./useFocus-DaRXVXg_.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-7-yrsk.js";import"./useFocusable-DNP9d3st.js";import"./useFocusRing-CjhJ1DIN.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./ContextualHelpTrigger-DoW90o0C.js";import"./Popover-N4AFYi9M.js";import"./useOverlayController-CAAAYEI-.js";import"./OverlayContextProvider-Box79lc0.js";import"./Dialog-Dx0VK2pV.js";import"./Button-CwpJPQ3S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-RZvczw.js";import"./RSPContexts-BjvY3wPf.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./Heading-DmFdEGik.js";import"./Heading-DxuUq0JW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-7OMeXUSU.js";import"./FieldError-DmIKwRtH.js";import"./FieldError-D0s5eFn1.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";import"./useControlledHostValueProps-D7O5jAV7.js";import"./TextField-KN1Jhhgc.js";import"./Form-i5hQHr5E.js";import"./Group-CqoaeHFC.js";import"./Input-DU1QpXVG.js";import"./useTextField-BJeGxBtu.js";import"./useFormReset-DGUxmLDL.js";import"./useFormValidation-BU69543b.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BPW5hp_J.js";import"./remote-CiXlw4PI.js";import"./react-children-utilities-BxJRVkHq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
