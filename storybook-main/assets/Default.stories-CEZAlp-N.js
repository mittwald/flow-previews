import{r as M,j as r}from"./iframe-BGMqIB5E.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-Djnu2w-V.js";import{L as P}from"./Label-ayGMhYtP.js";import{u as N,F as z,a as U}from"./Form-DAcLY11p.js";import{s as Y}from"./Action-l33eddTn.js";import{B as h}from"./Button-BFNUJ6Pn.js";import{m as Z}from"./IconWarning-mDCCMBSQ.js";import{C as G}from"./CopyButton-DYyI_JsL.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-ClTlFvX2.js";import"./utils-DSJ2fpWd.js";import"./Text-BM4jLh1h.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Cwbp1Rxy.js";import"./Hidden-BlXCfqaN.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocus-DimIAfL3.js";import"./TextField-B67QJCcl.js";import"./Form-DIhLFb81.js";import"./useLabel-DEWKGCco.js";import"./Label-CQRoenrp.js";import"./useTextField-0bIYzpQ5.js";import"./useFormReset-CGt1BQBC.js";import"./useControlledState-CyFiZ_AX.js";import"./useFocusable-DsCZ72OQ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bx7u0ZLw.js";import"./FieldDescription-De5Izbk0.js";import"./Text-CM0LFMBt.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";import"./Tooltip-Dam5ktVQ.js";import"./OverlayArrow-BCKhjmtK.js";import"./ProgressBar-D-EmigOC.js";import"./context-C9jpkMPH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./ReactAriaControlledValueFix-Co2OD18X.js";import"./ContextualHelpTrigger-CyMyfR4v.js";import"./Popover-C0n8OrmN.js";import"./DialogTriggerView-DGq9KeX3.js";import"./context-FbZS6Lb6.js";import"./useStatic-ERGKGHTj.js";import"./Dialog-hZ8yeQT4.js";import"./Button-C2r7IuQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DciW20d_.js";import"./RSPContexts-W4yDCNDw.js";import"./Collection-CCbdzQqw.js";import"./CollectionBuilder-CvszDNI1.js";import"./Separator-DQBycTyN.js";import"./SearchField-BGYYvbmv.js";import"./useEvent-CUMNl0wi.js";import"./SelectionManager-Ci5onPc0.js";import"./useCollator-CDcEI0Bz.js";import"./FocusScope-DJHRiFNO.js";import"./VisuallyHidden-C_NToHIT.js";import"./Heading-Cd14u_S6.js";import"./Heading-C0F57RmY.js";import"./getActionGroupSlot-CZh9r0M7.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./react-children-utilities-CMiqp-q2.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
