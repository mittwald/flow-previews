import{r as M,j as r}from"./iframe-CPpiztA9.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-D-h_RTS9.js";import{L as h}from"./Label-BGSD1rhi.js";import{u as N,F as z,a as U}from"./Form-06t4F3b0.js";import{s as Y}from"./Action-Bo4rmNqt.js";import{B as u}from"./Button-C-ub_lVB.js";import{m as Z}from"./IconWarning-DGFg2xah.js";import{C as G}from"./CopyButton-jfQrLrJc.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DNVX5F1U.js";import"./utils-DXg4ziAt.js";import"./Text-D73bWKdR.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BazAvpcu.js";import"./Hidden-bVSOJLMB.js";import"./useFocusRing-ryN7bem9.js";import"./useFocus-f0syXR1u.js";import"./TextField-CdnmB6pT.js";import"./Form-BF7n3RGH.js";import"./useLabel-CbuGYTDm.js";import"./Label-DrzbYkyA.js";import"./useTextField-B-d085GV.js";import"./useFormReset-MeUe0mbs.js";import"./useControlledState-CvPFcFpa.js";import"./useFocusable-BdzC7gBh.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Ci8tQ9GY.js";import"./FieldDescription-kMDhr7Ro.js";import"./Text-B9GDlRIl.js";import"./browser-CCSZxPxO.js";import"./EmulatedBoldText-49ZPQjyJ.js";import"./Tooltip-7jW46ZeN.js";import"./OverlayArrow-p4WTGnf4.js";import"./ProgressBar-BJkoGjLL.js";import"./context-Dtd4A8DJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./ReactAriaControlledValueFix-DjLzjh-3.js";import"./ContextualHelpTrigger-BYUp8aBs.js";import"./Popover-CWZaEHAV.js";import"./DialogTriggerView-jBIZNPKp.js";import"./context-C5LerLhv.js";import"./useStatic-DpS3r3sC.js";import"./Dialog-CUla8htU.js";import"./Button-BpRzT99M.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bn1QFLmx.js";import"./RSPContexts-CFiizNM1.js";import"./Collection-rnaxRpPP.js";import"./CollectionBuilder-B0lIXlwM.js";import"./Separator-CbcELXN4.js";import"./SearchField-BSkiBWnk.js";import"./useEvent-BZyVmUT6.js";import"./SelectionManager-CwCMliWC.js";import"./useCollator-B-f7_yfw.js";import"./FocusScope-mK0EKnGk.js";import"./VisuallyHidden-DQWk5n-D.js";import"./Heading-COPT6b_C.js";import"./Heading-C7g1szTV.js";import"./getActionGroupSlot-Dzp14r5x.js";import"./LoadingSpinner-CgYhtYh1.js";import"./react-children-utilities-CUO2W8uc.js";import"./onlyText-msLOHAzk.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
