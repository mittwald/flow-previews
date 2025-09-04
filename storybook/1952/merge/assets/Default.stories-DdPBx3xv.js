import{r as M,j as r}from"./iframe-BuQIW6_u.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-oMGgd-Nl.js";import{L as P}from"./Label-_oW49-Il.js";import{u as N,F as z,a as U}from"./Form-BULXkxDJ.js";import{s as Y}from"./Action-NQcD1SkN.js";import{B as h}from"./Button-DlXaalMD.js";import{m as Z}from"./IconWarning-CTHW-5ya.js";import{C as G}from"./CopyButton-DKF2_szn.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CwfU_VRl.js";import"./utils-C3-2IFIX.js";import"./Text-CA4hy8xs.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C2-D-gHZ.js";import"./Hidden-kXch4Bq4.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocus-CJRfh2Zc.js";import"./TextField-B1BJmtCC.js";import"./Form-QX_URUcu.js";import"./useLabel-V7qiuXiw.js";import"./Label-Bj6uOgB2.js";import"./useTextField-ChNo9r-2.js";import"./useFormReset-Cq5VWng9.js";import"./useControlledState-DeMfvYEX.js";import"./useFocusable-5iT1iM-_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Jn80i9Ms.js";import"./FieldDescription-CzXhQYx4.js";import"./Text-8TMWzlfF.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Tooltip-D42lrBvI.js";import"./OverlayArrow-BFcQ4aC2.js";import"./ProgressBar-CnP9HTSN.js";import"./context-DHpT4jQ7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./ReactAriaControlledValueFix-C1hWP_qf.js";import"./ContextualHelpTrigger-TlmloO8I.js";import"./Popover-DFc02vxF.js";import"./DialogTriggerView-5KTKvzk5.js";import"./context-nH1y_ndl.js";import"./useStatic-Cs9s3jvC.js";import"./Dialog-DEmHowc0.js";import"./Button-BKD05Onb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKHC3-jq.js";import"./RSPContexts-CueUa63T.js";import"./Collection-BX_jXMRy.js";import"./CollectionBuilder-kPYqAuhc.js";import"./Separator-D2HmxWfn.js";import"./SearchField-BQcQWlfh.js";import"./useEvent-Cn4un1lG.js";import"./SelectionManager-pzK_YEl4.js";import"./useCollator-QIDMCYGr.js";import"./FocusScope-CbX1YQFz.js";import"./VisuallyHidden-Db59Lmwd.js";import"./Heading-CT_713bG.js";import"./Heading-B-jFBTau.js";import"./getActionGroupSlot-DeOL7iYR.js";import"./LoadingSpinner-BBuxslej.js";import"./react-children-utilities-CbfZ8OFk.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
