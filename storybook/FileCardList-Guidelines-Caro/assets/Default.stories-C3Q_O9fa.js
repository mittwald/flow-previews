import{r as M,j as r}from"./iframe-BBgxZ9_Z.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BNLVCeEG.js";import{L as h}from"./Label-CMgPNz6D.js";import{u as N,F as z,a as U}from"./Form-DGi1ZX7v.js";import{s as Y}from"./Action-DpyN5NaX.js";import{B as u}from"./Button-B-lzkDqv.js";import{m as Z}from"./IconWarning-8HHOdEAt.js";import{C as G}from"./CopyButton-CQQE-oLc.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-W_6exYVC.js";import"./utils-MwuRBPAU.js";import"./Text-D0NxCgiz.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-ChejVHkC.js";import"./Hidden-k-QU5_bv.js";import"./useFocusRing-LpVKnpiI.js";import"./useFocus-BbdsXgPj.js";import"./TextField-DQ00G_WY.js";import"./Form-CxmcAuRx.js";import"./useLabel-CtD9pvoh.js";import"./Label-Di9QaZZ3.js";import"./useTextField-QvIlaKbq.js";import"./useFormReset-BmT_Xdgp.js";import"./useControlledState-DynQBW6H.js";import"./useFocusable-CfVMEKsh.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-3nUx1gE4.js";import"./FieldDescription-BJC8XRIJ.js";import"./Text-DGcNKUf7.js";import"./browser-XdNXsdMD.js";import"./EmulatedBoldText-Bf9Yi8oc.js";import"./Tooltip-BUSgP7vr.js";import"./OverlayArrow-CFHpk9vq.js";import"./ProgressBar-DwujBMLa.js";import"./context-1V9oDOBq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./ReactAriaControlledValueFix-Cp0bYGN5.js";import"./ContextualHelpTrigger-BgxA42Fh.js";import"./Popover-DIVeWh25.js";import"./DialogTriggerView-DMvHVVad.js";import"./context-D62hB718.js";import"./useStatic-C_mBRxHK.js";import"./Dialog-DclGznPM.js";import"./Button-CYTZuBnH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTZ5yxFT.js";import"./RSPContexts-3v3yZrnH.js";import"./Collection-yBxX2uBM.js";import"./CollectionBuilder-Cikntfcr.js";import"./Separator-DwoBWJxO.js";import"./SearchField-D1XEYmSH.js";import"./useEvent-CAp5Jueq.js";import"./SelectionManager-DEhn8O5H.js";import"./useCollator--BNdDS58.js";import"./FocusScope-CjT2Rvcj.js";import"./VisuallyHidden-DzvMb3_B.js";import"./Heading-Bdm7kJ9W.js";import"./Heading-B8IOml0A.js";import"./getActionGroupSlot-Ct403QjR.js";import"./LoadingSpinner-AMSMSqlY.js";import"./react-children-utilities-BaBsVT7-.js";import"./onlyText-Uxm5UjAM.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
