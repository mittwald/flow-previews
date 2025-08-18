import{r as M,j as r}from"./iframe-BAtUELBR.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-CB076AW_.js";import{L as P}from"./Label-QEHCu_aF.js";import{u as N,F as z,a as U}from"./Form-fruY6vLK.js";import{s as Y}from"./Action-DFFHrQF0.js";import{B as h}from"./Button-BEq1XaV7.js";import{m as Z}from"./IconWarning-h84dHhem.js";import{C as G}from"./CopyButton-D0ZTKBJk.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D0SFQKR_.js";import"./utils-UbQMFgd1.js";import"./Text-j2Uyll_5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BnQz7s-E.js";import"./Hidden-CDb1KA3j.js";import"./useFocusRing-BdUFZX00.js";import"./useFocus-DJUZ2En4.js";import"./TextField-CA7eDuBl.js";import"./Form-D4YUCIIk.js";import"./useLabel-DmioRyAZ.js";import"./Label-DhaMlcU0.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./useControlledState-Cdm8pC1T.js";import"./useFocusable-BuN38nX6.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-C6NpbvhG.js";import"./FieldDescription-DGonepcX.js";import"./Text-DzMLmIhZ.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Tooltip-DpU8YWKj.js";import"./OverlayArrow-CGwoImC3.js";import"./ProgressBar-BZ7qWBUr.js";import"./context-DbLHYHiQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./ReactAriaControlledValueFix-DYRdjwls.js";import"./ContextualHelpTrigger-BHKLfUZp.js";import"./Popover-4D2PTTn1.js";import"./DialogTriggerView-TQtuWl8o.js";import"./context-B7yiaX0P.js";import"./useStatic-D26yqcd1.js";import"./Dialog-CdEVLYW9.js";import"./Button-BiJPJvF0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B88qu-VD.js";import"./RSPContexts-DQlzARDq.js";import"./Collection-DKvh5qnS.js";import"./CollectionBuilder-DOOg8umD.js";import"./Separator-BOj5W9de.js";import"./SearchField-DJD_RJ9_.js";import"./useEvent-DEdGGfK8.js";import"./SelectionManager-pSSWogs3.js";import"./useCollator-CMTT-Cpv.js";import"./FocusScope-CQU9T81i.js";import"./VisuallyHidden-CFnWwY81.js";import"./Heading-WI-2mpz5.js";import"./Heading-ByYwZp8f.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./react-children-utilities-Be0S__k0.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
