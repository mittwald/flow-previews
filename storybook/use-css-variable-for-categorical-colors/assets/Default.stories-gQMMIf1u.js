import{r as M,j as r}from"./iframe-DOyiym2O.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-sSP1XZFW.js";import{L as h}from"./Label-DGNkT8gh.js";import{u as N,F as z,a as U}from"./Form-DPVW4xvM.js";import{s as Y}from"./Action-B1c9MoHY.js";import{B as u}from"./Button-Dhe1yso8.js";import{m as Z}from"./IconWarning-DM4ryx1N.js";import{C as G}from"./CopyButton-CafLPMfZ.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-e9k0WgIs.js";import"./utils-p6TFjs22.js";import"./Text-Db2PSOfB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BsZagJvP.js";import"./Hidden-BJphBd81.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocus-CRPlmaKe.js";import"./TextField-DJtp4_Iq.js";import"./Form-D7si9Qjh.js";import"./useLabel-DjTxglfT.js";import"./Label-gKLM5Ku1.js";import"./useTextField-CDeIHIKC.js";import"./useFormReset-D392FMdG.js";import"./useControlledState-CTI65F-h.js";import"./useFocusable-CF6DJuo2.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-gzY4_mEC.js";import"./FieldDescription-9zebcMyn.js";import"./Text-DNTWXR5k.js";import"./browser-Cgs4Q9ZH.js";import"./EmulatedBoldText-npPiHGdu.js";import"./Tooltip-CSPou86T.js";import"./OverlayArrow-DUzOkRZT.js";import"./ProgressBar-DwMxj3po.js";import"./context-DNMunrTn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./ReactAriaControlledValueFix-DaGJqn9y.js";import"./ContextualHelpTrigger-o_7MZmhl.js";import"./Popover-O9vM2Bhw.js";import"./DialogTriggerView-D4vNWmaM.js";import"./context-y7iGkUpV.js";import"./useStatic-BqyjIn97.js";import"./Dialog-CZhNJUBb.js";import"./Button-lDf0mDtZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-U0v1W6r8.js";import"./RSPContexts-B59Hd7Xy.js";import"./Collection-BIknmaaI.js";import"./CollectionBuilder-MitjRKQw.js";import"./Separator-DGoHVraj.js";import"./SearchField-B3q2UkIK.js";import"./useEvent-DhVC8KrJ.js";import"./SelectionManager-BoGC0shM.js";import"./useCollator-BKrnVFMg.js";import"./FocusScope-BYeNXI2v.js";import"./VisuallyHidden-DEjaPn8D.js";import"./Heading-D47GxrRc.js";import"./Heading-C2y325QX.js";import"./getActionGroupSlot-Cqvvv9Ww.js";import"./LoadingSpinner-egM8r-vP.js";import"./react-children-utilities-6YpS5Y4C.js";import"./onlyText-Cvc9Liuq.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
