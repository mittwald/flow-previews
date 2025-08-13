import{r as M,j as r}from"./iframe-BsKdyUUo.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-BFAzEmA9.js";import{L as h}from"./Label-DJsBJ_92.js";import{u as N,F as z,a as U}from"./Form-DOZIRcRr.js";import{s as Y}from"./Action-BpogoZfV.js";import{B as u}from"./Button-QyPw2-70.js";import{m as Z}from"./IconWarning-BNNa1TWi.js";import{C as G}from"./CopyButton-NhgpNgHO.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CHLtNaA2.js";import"./utils-DeHCGthq.js";import"./Text-BeFIQxaH.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dk0IJ4vM.js";import"./Hidden-DrjQVD0p.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocus-BvYTyo5a.js";import"./TextField-DVuykaoA.js";import"./Form-DEii-ghQ.js";import"./useLabel-BowSekYU.js";import"./Label-E4B9ly-I.js";import"./useTextField-BDfBPM-X.js";import"./useFormReset-BCcZ866S.js";import"./useControlledState-BMR5C57X.js";import"./useFocusable-CIlrQQDJ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-IFpwvXo1.js";import"./FieldDescription-B2_iTS1r.js";import"./Text-DM7V5ibr.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";import"./Tooltip-S1Y3uD9Q.js";import"./OverlayArrow-CO3Q51Tz.js";import"./ProgressBar-C4DAHdKI.js";import"./context-NhbPwiu7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./ReactAriaControlledValueFix-DncQW-lX.js";import"./ContextualHelpTrigger-D8geYVZ1.js";import"./Popover-DxBNWdCE.js";import"./DialogTriggerView-u1JI-dwi.js";import"./context-LgmDjMSt.js";import"./useStatic-BdSd4Y0O.js";import"./Dialog-CR91adc_.js";import"./Button-DLwd4SNh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./RSPContexts-DxWJbArM.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./SearchField-DHm90Ej9.js";import"./useEvent-Bb929JbC.js";import"./SelectionManager-bkmIMDCG.js";import"./useCollator-vsGgvR80.js";import"./FocusScope-r24VL_U3.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./Heading-DauAQbMm.js";import"./Heading-K1sGoDUJ.js";import"./getActionGroupSlot-B4-8kfZ1.js";import"./LoadingSpinner-pItv9nzE.js";import"./react-children-utilities-C-_saqZ6.js";import"./onlyText-DiMP90Hp.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
