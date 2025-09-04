import{r as M,j as r}from"./iframe-Nqcw2rDw.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CC2Uml3F.js";import{L as P}from"./Label-fC6EmrAI.js";import{u as N,F as z,a as U}from"./Form-BleG95QQ.js";import{s as Y}from"./Action-BKSKXcVa.js";import{B as h}from"./Button-Cgaohe9-.js";import{m as Z}from"./IconWarning-B5Ig4VhK.js";import{C as G}from"./CopyButton-DTNR1a1Z.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BpNobjrx.js";import"./utils-Bp1w5lkv.js";import"./Text-CIgQjC5i.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-8CGiAkDp.js";import"./Hidden-CAJLdDr-.js";import"./useFocusRing-CuYhL92s.js";import"./useFocus-C0d_BuOG.js";import"./TextField--xsqEd_p.js";import"./Form-DdlSQ4T5.js";import"./useLabel-DV1Mt0Tl.js";import"./Label-CtCba6z0.js";import"./useTextField-B4dlVx9P.js";import"./useFormReset-CuLrpRbL.js";import"./useControlledState-Cj9ITNGF.js";import"./useFocusable-C3WyBOJs.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CQWwaXuw.js";import"./FieldDescription-CXXfwgnb.js";import"./Text-xc4JCB-X.js";import"./browser-BgnnD3cg.js";import"./EmulatedBoldText-Cwk1IhrY.js";import"./Tooltip-mjU4isco.js";import"./OverlayArrow-Da2mMVHM.js";import"./ProgressBar-Sv3Hk_vO.js";import"./context-Btv9vDKp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./ReactAriaControlledValueFix-DFbBCSJx.js";import"./ContextualHelpTrigger-Cr8JOGL-.js";import"./Popover-CNJM6LCy.js";import"./DialogTriggerView-CFMQIVcR.js";import"./context-v3ONCW42.js";import"./useStatic-CP_9Iese.js";import"./Dialog--HSHBiJO.js";import"./Button-qshs3T0G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLwwvcX7.js";import"./RSPContexts-iQSSy6Xo.js";import"./Collection-Dnpb3Bt1.js";import"./CollectionBuilder-DJE4aqj-.js";import"./Separator-CRfWHhtA.js";import"./SearchField-DVNFC-Ik.js";import"./useEvent-D-ifiSoO.js";import"./SelectionManager-BU8YZ5iT.js";import"./useCollator-SfrY7Omb.js";import"./FocusScope-BuhXHJsl.js";import"./VisuallyHidden-CR5lrquH.js";import"./Heading-DLlnavsX.js";import"./Heading-Bj6_gbh2.js";import"./getActionGroupSlot-s6DAhujQ.js";import"./LoadingSpinner-Bp03oye4.js";import"./react-children-utilities-BXi1-qEl.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
