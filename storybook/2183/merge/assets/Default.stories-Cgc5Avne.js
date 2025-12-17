import{r as h,j as r}from"./iframe-D2Ryv2XM.js";import{L as u}from"./Label-Dm7SPIiB.js";import{B as g}from"./Button-0ymElbGx.js";import"./IconApp-D72ec8J0.js";import{I as C}from"./IconDanger-DUFERqG9.js";import{C as w}from"./CopyButton-BvHmZB4a.js";import{P as m}from"./PasswordCreationField-pQC5rs-w.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Label-BRB94mKh.js";import"./utils-BqLZYyR8.js";import"./Hidden-BS4L5nhJ.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./browser-k7JOs1GI.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-c0PQzJc6.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./IconCopy-C8yz61C0.js";import"./Tooltip-qSVReDLI.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./react-children-utilities-BYiyDc3c.js";import"./Action-P2r8aGEo.js";import"./useStatic-Dp5ohCc9.js";import"./getActionGroupSlot-W54WmM0W.js";import"./context-FPyrczIP.js";import"./dynamic-CYMBERZG.js";import"./FieldDescription-CYrFJZP5.js";import"./TranslationProvider-CMU4tGmG.js";import"./IconCircleCheck-V25Lv6Jk.js";import"./ContextualHelpTrigger-ateKbOBp.js";import"./Popover-DUxHcx38.js";import"./OverlayContextProvider-B2OZPBTA.js";import"./Dialog-Dv3Dn_KI.js";import"./RSPContexts-B-8XijCb.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./useOverlayController--hBRUqQr.js";import"./OverlayTrigger-Bw08bMtJ.js";import"./IconInfo-DLzcvNiF.js";import"./Heading-DXhz_H9M.js";import"./Heading-DRwXALuA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-w9ZrCArw.js";import"./FieldError-Df9KKLMS.js";import"./FieldError-CWHVrlnl.js";import"./useControlledHostValueProps-BpR4WfzB.js";import"./TextField-dqp2wQe0.js";import"./Form-HDxy_CB-.js";import"./Group-ONole-Nc.js";import"./Input-B6UkKbKT.js";import"./useTextField-5tyHJfNY.js";import"./useFormReset-BscIah2r.js";import"./useFormValidation-DGXgC3JE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
