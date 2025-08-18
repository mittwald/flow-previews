import{r as M,j as r}from"./iframe-ANbYZxYh.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-C_hKZscn.js";import{L as P}from"./Label-BNGIQ-CZ.js";import{u as N,F as z,a as U}from"./Form-CUUGX5XA.js";import{s as Y}from"./Action-BWJuvjrq.js";import{B as h}from"./Button-BrOgS8k0.js";import{m as Z}from"./IconWarning-DS7IkYNL.js";import{C as G}from"./CopyButton-i6HePIL_.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-8FwQObi_.js";import"./utils-Cy_MvyB4.js";import"./Text-DtPhrSvp.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BbZVKWqc.js";import"./Hidden-CKPTgp3M.js";import"./useFocusRing-CdWhuOPm.js";import"./useFocus-TkuOvp2H.js";import"./TextField-Cq94faz6.js";import"./Form-BzuKHEmj.js";import"./useLabel-BSgApQcW.js";import"./Label-DHVn08UY.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./useControlledState-qP1KlDsL.js";import"./useFocusable-Do5j3Niz.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CknxTZ0z.js";import"./FieldDescription-BZEk77xv.js";import"./Text-M71Ue6Ol.js";import"./browser-DiQDtMf4.js";import"./EmulatedBoldText-D7XMT75r.js";import"./Tooltip-BtxY0jn9.js";import"./OverlayArrow-DdhXoA2p.js";import"./ProgressBar-D0pevNPv.js";import"./context-C29UMt2a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./ReactAriaControlledValueFix-Dcoh4pDk.js";import"./ContextualHelpTrigger-DiJk3pxg.js";import"./Popover-DMYIjMJ2.js";import"./DialogTriggerView--0vIXGZw.js";import"./context-XBkMChDn.js";import"./useStatic-C8P39Z3X.js";import"./Dialog-DAXXYblm.js";import"./Button-pW7XEr-A.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-YyV1OQc2.js";import"./RSPContexts-BF3izYoh.js";import"./Collection-CGyTBmm7.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Separator-C5R7VkmP.js";import"./SearchField-CA0soI3_.js";import"./useEvent-C-0WgXZh.js";import"./SelectionManager-CqcRxmrm.js";import"./useCollator-CfSYVQsJ.js";import"./FocusScope-DrloOZeI.js";import"./VisuallyHidden-Dkqu2xa7.js";import"./Heading-HyKLii1m.js";import"./Heading-wmOcPSW7.js";import"./getActionGroupSlot-3JUuJVM4.js";import"./LoadingSpinner-BalYmqav.js";import"./react-children-utilities-DTbVe1_M.js";import"./onlyText-D3sE1ED2.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
