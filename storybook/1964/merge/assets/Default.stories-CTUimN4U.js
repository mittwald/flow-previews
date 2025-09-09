import{r as M,j as r}from"./iframe-CW4eA9k4.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-lt_RSDZs.js";import{L as P}from"./Label-BmbUI49G.js";import{u as N,F as z,a as U}from"./Form-Bh3TNRhF.js";import{s as Y}from"./Action-Bf9Z-Hza.js";import{B as h}from"./Button-BjlFMLDb.js";import{m as Z}from"./IconWarning-D1jj5TJf.js";import{C as G}from"./CopyButton-DvBlRT-C.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DfDNH_Ov.js";import"./utils-LQZW6rX9.js";import"./Text-CUI2zCQ5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-dsIczUwA.js";import"./Hidden-DmXjFFnH.js";import"./useFocusRing-O7qNIesH.js";import"./useFocus-rpK25HP0.js";import"./TextField-B9ZB3AOz.js";import"./Form-Carw_-CN.js";import"./useLabel-CsKDXT_H.js";import"./Label-Bbcp5SCN.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./useControlledState-Dx2k1uzE.js";import"./useFocusable-UDevydpZ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DDMeD0d0.js";import"./FieldDescription-DHRtWdZV.js";import"./Text-Db3UCsEl.js";import"./browser-CS0dj8Dh.js";import"./EmulatedBoldText-Dbwzf73Y.js";import"./Tooltip-CMWvflPa.js";import"./OverlayArrow-92dvWqKB.js";import"./ProgressBar-CmNSRDCs.js";import"./context-DFsoEI_J.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./ReactAriaControlledValueFix-BsA3nL3X.js";import"./ContextualHelpTrigger-DCO6uEmR.js";import"./Popover-BySWrKlF.js";import"./DialogTriggerView-VKpqTSm1.js";import"./context-D5N2lUOa.js";import"./useStatic-DUg3iw8_.js";import"./Dialog-WgwS_B3t.js";import"./Button-LSmOeJqu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Du8ADkCR.js";import"./RSPContexts--2BkcUf2.js";import"./Collection-BBOAX0bv.js";import"./CollectionBuilder-COr3RMXa.js";import"./Separator-DG994JLx.js";import"./SearchField-uV4xHJex.js";import"./useEvent-g2bJgFQA.js";import"./SelectionManager-c5mN7BQ-.js";import"./useCollator-DeJ4YmOD.js";import"./FocusScope-DDrNwogJ.js";import"./VisuallyHidden-DAkOZO38.js";import"./Heading-ukkjVDjs.js";import"./Heading-Bs47TW4c.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./LoadingSpinner-BE9DZA1q.js";import"./react-children-utilities-C8ZLJxGz.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
