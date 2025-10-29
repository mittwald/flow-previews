import{r as h,j as r}from"./iframe-BQyHcTNh.js";import{P as m}from"./PasswordCreationField-CPlKyi6M.js";import{L as u}from"./Label-JK740Dk1.js";import{B as g}from"./Button-ieCP1ArV.js";import{z as C}from"./IconWarning-D8COeLpG.js";import{C as w}from"./CopyButton-Cz3KAWhm.js";import"./index-nuYtCEEu.js";import"./dynamic-V8J33Kah.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./Action-Bi6tM7BN.js";import"./context-B5Yt5ZbD.js";import"./useStatic-CIMbf_kn.js";import"./browser-CktdIn7a.js";import"./getActionGroupSlot-DtqoduiB.js";import"./FieldDescription-mxWByT_L.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./utils-CdCPWCHO.js";import"./Tooltip-bUCdMTsN.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./ClearPropsContext-CD4xLCoc.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useFocus-COF7nP05.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./context-BymCJUNL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-TEYDAVm8.js";import"./useFocusable-DJd2VQkc.js";import"./useFocusRing-gNgZcCH8.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./ContextualHelpTrigger-bjuY7Tuo.js";import"./Popover-DSb6ue0f.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./Dialog-CTkyeFiO.js";import"./Button-C2idEpfM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-qWGUTJsN.js";import"./RSPContexts-BtdGc8q9.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./OverlayTrigger-CTujVhSf.js";import"./ControlledNotification-CL-0TnDq.js";import"./Heading-BZf-WkCq.js";import"./Heading-C-OseSB1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-PY6rKwSS.js";import"./useFieldComponent-Cyrlnow6.js";import"./FieldError-AQx_Co0q.js";import"./TextField-D6hfEfzE.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useTextField-0T4qffof.js";import"./useFormReset-DB-Y7LtK.js";import"./useFormValidation-Dr6xiKJA.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CEYsHom-.js";import"./react-children-utilities-BB4ZvnE2.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
