import{r as M,j as r}from"./iframe-BKOyO0tU.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DsKFkbgs.js";import{L as P}from"./Label-DvNp2qob.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DlZgNljl.js";import{s as Y}from"./Action-C_4EL_0e.js";import{B as h}from"./Button-BRmnXyIg.js";import{m as Z}from"./IconWarning-WHLX57m9.js";import{C as G}from"./CopyButton-6ii_Sbij.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D2kmkBqC.js";import"./utils-B2BekvYW.js";import"./Text-ACnzImZy.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-iIjIB8eM.js";import"./Hidden-DB9d8bX3.js";import"./useFocusRing-D97-YwB6.js";import"./useFocus-dHggTvNn.js";import"./TextField-tmvkgR0S.js";import"./Form-D-YH0smr.js";import"./useLabel-kfVNblq3.js";import"./Label-Vv3VD8Wn.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./useControlledState-B16HJi6R.js";import"./useFocusable-C3wI1ws-.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Da4EtItW.js";import"./FieldDescription-hDtyIPHR.js";import"./Text-ExzQZ1Qc.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./Tooltip-rzLYDDb0.js";import"./OverlayArrow-CigCDiMF.js";import"./ProgressBar-w7N8Fjyu.js";import"./context-wvutwpZE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./ReactAriaControlledValueFix-BdQg6gA1.js";import"./ContextualHelpTrigger-CidNi76j.js";import"./Popover-Cs1rFuXv.js";import"./DialogTriggerView-D92SRtaq.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";import"./Dialog-BbUqm1un.js";import"./Button-DqwKzt0W.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CfgifMFV.js";import"./RSPContexts-BmPvawj4.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./SearchField-BqOdnuK_.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";import"./Heading-D4sbKPQv.js";import"./Heading-CmuzmpL9.js";import"./useManagedValue-BgvmrikQ.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./LoadingSpinner-B8cx3qaz.js";import"./react-children-utilities-8hyVjSjL.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
