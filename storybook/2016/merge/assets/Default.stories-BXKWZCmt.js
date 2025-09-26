import{r as M,j as r}from"./iframe-QYa5fCvd.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CMTQnte3.js";import{L as P}from"./Label-REb55_aV.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-DcoODqVz.js";import{s as Y}from"./Action-BQI9QTKN.js";import{B as h}from"./Button-DtEggira.js";import{q as Z}from"./IconWarning-DEqdDiS_.js";import{C as G}from"./CopyButton-YFRkPZ71.js";import"./dynamic-BhpRGc-9.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./clsx-B-dksMZM.js";import"./FieldError-BGtuYqZa.js";import"./utils-lb8KrrIv.js";import"./Text-BD3o8xQb.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BKMRBfUs.js";import"./Hidden-Py6KbP61.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocus-D2QZKYlR.js";import"./TextField-DYh5UApz.js";import"./Form-BOiG0M1T.js";import"./useLabel-DR9sPTrv.js";import"./Label-fRERrzCf.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./useControlledState-Bu1M14oY.js";import"./useFocusable-DEca05gc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DIhpKsfz.js";import"./FieldDescription-qfycfnRL.js";import"./Text-D98HT4db.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Tooltip-DdW_BUs2.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./ProgressBar-BeUyRfom.js";import"./context-BsMul4n4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./ReactAriaControlledValueFix-C2f91eDD.js";import"./ContextualHelpTrigger-KBGMBb1y.js";import"./Popover-BojVT5-a.js";import"./DialogTriggerView-DucWr1Mr.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./Button-u3ZYuRRI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKI1i-pB.js";import"./RSPContexts-uNufUlk-.js";import"./FocusScope-ByQquqFt.js";import"./useCollator-EfErOZQE.js";import"./VisuallyHidden-B3sifiz6.js";import"./Collection-DAGhelkx.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Separator-CsR4K24c.js";import"./SearchField-BY7ftgY4.js";import"./useEvent-D3g7XMTk.js";import"./SelectionManager-yhE4bEMZ.js";import"./Heading-Dho9wAM0.js";import"./Heading-ghp5YyKn.js";import"./useManagedValue-DZE8M0n3.js";import"./getActionGroupSlot-8GawWr3Y.js";import"./LoadingSpinner-DKDkxF6a.js";import"./react-children-utilities-CjhE_PVt.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
