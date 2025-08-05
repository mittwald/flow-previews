import{r as M,j as r}from"./iframe-BwUhuRm7.js";import{d as I,e as U,P as a,U as k,n as s,r as A}from"./PasswordCreationField-rAOy_yj8.js";import{L as h}from"./Label-Dryy0w3E.js";import{u as K,F as N,a as z}from"./Form-B5VwE1JG.js";import{s as Y}from"./Action-B_OuXMJk.js";import{B as u}from"./Button-DXRAI5C8.js";import{m as Z}from"./IconWarning-DVI2HiM9.js";import{C as G}from"./CopyButton-B7etC6AL.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DsFBc8y3.js";import"./utils-DDoNb5qO.js";import"./Text-CbUcC8Oz.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ZFfwIVE3.js";import"./Hidden-DCcQ90cW.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocus-BdFL2QuQ.js";import"./TextField-CxDkfZto.js";import"./Form-C5mHTKgE.js";import"./useLabel-CJJXcYYW.js";import"./Label-D-Cavg7S.js";import"./useTextField-DDqPPB1t.js";import"./useFormReset-dodywWj-.js";import"./useControlledState-D841p2oi.js";import"./useFocusable-BiRHUtLW.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-ByWvRvE-.js";import"./FieldDescription-BGRxfMiu.js";import"./Text-BBSS7FYM.js";import"./browser-CwFUDHtx.js";import"./EmulatedBoldText-Do_4Bp9I.js";import"./Tooltip-BLz5dVIh.js";import"./OverlayArrow-CKENjgaB.js";import"./ProgressBar-ByXy0FjY.js";import"./context-bUzCuHOu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./ReactAriaControlledValueFix-VGbcub2u.js";import"./ContextualHelpTrigger-o5qWq572.js";import"./Popover-Br1zFO1C.js";import"./DialogTriggerView-BL8MNJX8.js";import"./context-DSL3Ffex.js";import"./useStatic-10Z2anw0.js";import"./Dialog-uD5rPHFv.js";import"./Button-Ds18dV5B.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMqEl6WQ.js";import"./RSPContexts-cnUhnSXF.js";import"./Collection-DeL1dhBj.js";import"./CollectionBuilder-BG3-IUkU.js";import"./Separator-_bTFvR5v.js";import"./SearchField-B_aps_XI.js";import"./useEvent-B7428EMj.js";import"./SelectionManager-DsYBxDUu.js";import"./useCollator-CbeUpY-G.js";import"./FocusScope-3xnL38Zh.js";import"./VisuallyHidden-C84OwjFZ.js";import"./Heading-GXPWlFkJ.js";import"./Heading-D-Wyg3yU.js";import"./getActionGroupSlot-XogBqS__.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./react-children-utilities-CEbS6OvG.js";import"./onlyText-_V39ARs6.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return U(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[A.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=k.fromDeclaration(J),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(z,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
