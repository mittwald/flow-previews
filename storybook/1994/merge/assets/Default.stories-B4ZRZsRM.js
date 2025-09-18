import{r as M,j as r}from"./iframe-MfQSddZq.js";import{d as k,J as I,P as i,s as t,i as A}from"./PasswordCreationField-DayUZpC5.js";import{L as P}from"./Label-B0eem2YN.js";import{e as J}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as K,F as N,a as z}from"./Form-CW5P6p7s.js";import{s as U}from"./Action-CY1G2yFR.js";import{B as h}from"./Button-CXZWinZX.js";import{m as Y}from"./IconWarning-CP6VaQZL.js";import{C as Z}from"./CopyButton-CXguU_0G.js";import"./PropsContextProvider-YGAsF_lo.js";import"./mergeRefs-D31Pk4Ta.js";import"./index-0BR1sey0.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DZKq6jul.js";import"./utils-CF_tf6Cs.js";import"./Text-CWf2hLST.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BQ9WJhL1.js";import"./Hidden-DKR3rgXU.js";import"./useFocusRing-DF4UiXkf.js";import"./useFocus-CxcaXJfN.js";import"./TextField-D1Wfh07Y.js";import"./Form-DVtgW9Vh.js";import"./useLabel-BGyOt14X.js";import"./Label-DLpcVX-r.js";import"./useTextField-B4Sx1pdV.js";import"./useFormReset-DZNBd5mO.js";import"./useControlledState-C4XOt-mm.js";import"./useFocusable-DPxyYzAu.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-ByuGkvm6.js";import"./FieldDescription-4qMRsNvb.js";import"./Text-UwmO1_LL.js";import"./browser-BU-cRKf1.js";import"./EmulatedBoldText-B3c3-PLP.js";import"./Tooltip-P-r5jA4G.js";import"./OverlayArrow-CjYCja9D.js";import"./ProgressBar-zSuzGCCN.js";import"./context-sxseT2gC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DuRjiXAD.js";import"./ReactAriaControlledValueFix-CBDYRwHU.js";import"./ContextualHelpTrigger-BkVTqVk0.js";import"./Popover-D-Bgp8L1.js";import"./DialogTriggerView-CQyF4Z23.js";import"./context-6MsjwYoY.js";import"./useStatic-BZhX7pn2.js";import"./Dialog-BeFP_b5_.js";import"./Button-Br-9CQSd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bu3yAehE.js";import"./RSPContexts-XbeDUJEH.js";import"./Collection-DIan0_PG.js";import"./CollectionBuilder-DTZJMA-R.js";import"./Separator-CUz3MRZ1.js";import"./SearchField-D_EUMNnm.js";import"./useEvent-yqplpnvs.js";import"./SelectionManager-CN4BV5dR.js";import"./useCollator-DRmYCL8E.js";import"./FocusScope-CMbYg7QE.js";import"./VisuallyHidden-Civfar1x.js";import"./Heading-De15SUL4.js";import"./Heading-CP270fwA.js";import"./useManagedValue-CAhz1Ly9.js";import"./getActionGroupSlot-Db9GcvAo.js";import"./LoadingSpinner-BBIckw2_.js";import"./react-children-utilities-BiapuPXt.js";const G=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return J(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Y,{})})]})},d={render:()=>{const e=I.fromDeclaration(H),o=K({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async s=>{await U(2e3),console.log("submitted",s)},children:[r.jsx(z,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
