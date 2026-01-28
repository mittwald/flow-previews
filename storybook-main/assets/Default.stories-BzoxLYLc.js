import{r as h,j as r}from"./iframe-lb0QDBc2.js";import{P as m}from"./PasswordCreationField-mxcUmK6L.js";import{L as u}from"./Label-DP_lb_cz.js";import{B as g}from"./Button-juKgyftR.js";import{m as C}from"./IconWarning-BeH6azjz.js";import{C as w}from"./CopyButton-BYY3xU9E.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-oimbFEy9.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./clsx-B-dksMZM.js";import"./index-DLJvSM0l.js";import"./Action-4cKKicYt.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./browser-D6xfswL2.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./FieldDescription-D5GA7Uzb.js";import"./Text-Bvo-yLEA.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./utils-r2dAqIcX.js";import"./Tooltip-DbJSuJ2r.js";import"./OverlayArrow-CyZLGayb.js";import"./useFocus-B48NrLMU.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./context-DKVhGweU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-J18h0CnC.js";import"./useControlledState-BS6Up44I.js";import"./useFocusable-BRnBN5zK.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./ContextualHelpTrigger-BhOnqdhm.js";import"./Popover-C9ioIy3o.js";import"./useOverlayController-DrUwu9jx.js";import"./OverlayContextProvider-kVRdTbI-.js";import"./Dialog-21JmjHkj.js";import"./Button-D3ym-GoV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgYa4G9K.js";import"./RSPContexts-YTE8c3lP.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./OverlayTrigger-DJa2X_ri.js";import"./Heading-Be2qz7j6.js";import"./Heading-BMdu11KH.js";import"./useFieldComponent-DzHSa8uO.js";import"./FieldError-BAOq6bLD.js";import"./FieldError-dmorJJtq.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";import"./useControlledHostValueProps-DOsneGRp.js";import"./TextField-DJs8gWWO.js";import"./Form-DtivvrEr.js";import"./Group-x-kTcwBS.js";import"./Input-CDuEdvXx.js";import"./useTextField-CV_ELvki.js";import"./useFormReset-BIwT2nL6.js";import"./useFormValidation-M5q2KkbC.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-D-Hn99XA.js";import"./remote-HK64Xy28.js";import"./react-children-utilities-CI2FR3kn.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
