import{r as M,j as r}from"./iframe-QjFTiyQe.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DGDXNq3a.js";import{L as P}from"./Label-poB2Yhtj.js";import{e as K}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BYecuvpb.js";import{s as Y}from"./Action-qyNGi_Md.js";import{B as h}from"./Button-DswPXoPV.js";import{p as Z}from"./IconWarning-I1gVfg4d.js";import{C as G}from"./CopyButton-C5fbZW1V.js";import"./index-Cun1SEai.js";import"./dynamic-BXiQW-1E.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./clsx-B-dksMZM.js";import"./FieldError-BdyL5myA.js";import"./utils-r8e_N1jc.js";import"./Text-C66hVS57.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-P53PcQ1w.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocus-CRsfU1Oq.js";import"./Input-BiYwJspv.js";import"./Hidden-DTf8hiFE.js";import"./TextField-BXpWkB4d.js";import"./context-BV634MuB.js";import"./Form-OD9buFY7.js";import"./useLabel-BzcwXIx3.js";import"./Label-5Cz2mi-i.js";import"./useTextField-Bfk55IMV.js";import"./useFormReset-BGTclNvs.js";import"./useControlledState-Dx1OInf3.js";import"./useFocusable-D3z6GPZp.js";import"./useFormValidation-0HUXiHYd.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-UwL51K-0.js";import"./FieldDescription-BJGpgINQ.js";import"./Text-BZfLsL9o.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Tooltip-BxA-SKnE.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./ProgressBar-gZUBqeyg.js";import"./context-CTF16ofK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./ReactAriaControlledValueFix-y3RmcjqW.js";import"./ContextualHelpTrigger-CPUg1OZp.js";import"./Popover-B3H4bpbb.js";import"./DialogTriggerView-nOYLeOX3.js";import"./context-Be1upz9q.js";import"./useStatic-Dq12R2u8.js";import"./Button-Czs8nreM.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnoQHIlJ.js";import"./RSPContexts-D-dV82T_.js";import"./FocusScope-zGp-W5qB.js";import"./useCollator-CVr4ya_1.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Collection-CqUJc8bm.js";import"./CollectionBuilder-D_prnUUR.js";import"./Separator-C2SfW9_n.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";import"./Heading-B7tG6tmq.js";import"./Heading-CKgYV3oq.js";import"./useManagedValue-Vuh7UfGS.js";import"./getActionGroupSlot-BezXTqeU.js";import"./LoadingSpinner-DWbOqfQP.js";import"./react-children-utilities-CRBk4m16.js";const H=(o=k)=>async e=>{if(!e)return!0;try{const a=await I.fromDeclaration(o).validate(e);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ho={title:"Form Controls/PasswordCreationField",component:i,render:o=>{const[e,s]=M.useState("");return r.jsx(i,{value:e,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...o,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:o=>r.jsxs(i,{...o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const o=I.fromDeclaration(J),e=N({defaultValues:{password:""}});return r.jsxs(z,{form:e,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(o)},name:"password",children:r.jsxs(i,{validationPolicy:o,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:o=>{const[e,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...o,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:e})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Po=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,Po as __namedExportsOrder,ho as default};
