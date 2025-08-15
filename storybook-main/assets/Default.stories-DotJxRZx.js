import{r as M,j as r}from"./iframe-CbwCPhjt.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CyAnj8yG.js";import{L as P}from"./Label-LAkLliwq.js";import{u as N,F as z,a as U}from"./Form-NG31Okbr.js";import{s as Y}from"./Action-C2KK5_kv.js";import{B as h}from"./Button-nOGOhIJH.js";import{m as Z}from"./IconWarning-B6sLHyS3.js";import{C as G}from"./CopyButton-BaCdl8pZ.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-WwADG8x9.js";import"./utils-DoFRGSuI.js";import"./Text-Bo_2a3q0.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DlZG06gX.js";import"./Hidden-fmTjyVQU.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocus-BeWrqrnh.js";import"./TextField-5B8lnaMV.js";import"./Form-8EM0qQv2.js";import"./useLabel-BZwWLEEp.js";import"./Label-9wtzoWil.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./useControlledState-vYcp2K1J.js";import"./useFocusable-BMiIHSO8.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-q3vdaDa_.js";import"./FieldDescription-8zvI-l_0.js";import"./Text-Ci_Uq_zV.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";import"./Tooltip-xzGlcaLF.js";import"./OverlayArrow-CBC8qT36.js";import"./ProgressBar-Boef7pj0.js";import"./context-DGTw6Ntc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./ReactAriaControlledValueFix-w1wi2MQY.js";import"./ContextualHelpTrigger-DbnYS6wG.js";import"./Popover-BGNe2BOX.js";import"./DialogTriggerView-UbA78170.js";import"./context-zAWxkEGj.js";import"./useStatic-CNtjMAIH.js";import"./Dialog-BLGTqvvx.js";import"./Button-DQX_QvYf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B0jvTCtV.js";import"./RSPContexts-CJnpvChB.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./SearchField-WLounB_6.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./useCollator-CAu6FifQ.js";import"./FocusScope-CmGH9Vi6.js";import"./VisuallyHidden-DvTk0uSk.js";import"./Heading-B64E3Y9s.js";import"./Heading-B1iybfVc.js";import"./getActionGroupSlot-B5o4vquU.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./react-children-utilities-DBGSyhWs.js";import"./onlyText-Dn3IfCv1.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
