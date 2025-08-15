import{r as M,j as r}from"./iframe-XU38G95a.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DUZLWD7k.js";import{L as P}from"./Label-ClqUqVil.js";import{u as N,F as z,a as U}from"./Form-WYXypPLt.js";import{s as Y}from"./Action-ak2exQl4.js";import{B as h}from"./Button-BRSF3HU2.js";import{m as Z}from"./IconWarning-C4sgFplx.js";import{C as G}from"./CopyButton-Bypl7c8n.js";import"./PropsContextProvider-BGw8zKwk.js";import"./mergeRefs-qz3q4wY-.js";import"./index-C_0HZTPb.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-iHvRLgo5.js";import"./utils-CRMz2C-S.js";import"./Text-BOldZPQm.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CaxTXUah.js";import"./Hidden-CmYs0ax8.js";import"./useFocusRing-_ts8IeVv.js";import"./useFocus-BcwSg9Gz.js";import"./TextField-OEkZHrb0.js";import"./Form-BwQPNTC6.js";import"./useLabel-DWzTJ_60.js";import"./Label-B-D8nJqg.js";import"./useTextField-DczSeHlH.js";import"./useFormReset-CGohrCOb.js";import"./useControlledState-D-ouz_Ia.js";import"./useFocusable-bB4ldgF4.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DDQ8jatw.js";import"./FieldDescription-HGpWW5AZ.js";import"./Text-BiCu62_D.js";import"./browser-DzHUdCJ5.js";import"./EmulatedBoldText-DgdtlBmQ.js";import"./Tooltip-viBvY1bX.js";import"./OverlayArrow-DHjXAVGD.js";import"./ProgressBar-B_1vEsN7.js";import"./context-DoEtjPsM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CmG678Ry.js";import"./ReactAriaControlledValueFix-CzL8RpSI.js";import"./ContextualHelpTrigger-DwC5jMT-.js";import"./Popover-B2HVaTEw.js";import"./DialogTriggerView-C6cdj0HA.js";import"./context-C_3J_Isg.js";import"./useStatic-IEgx7F5P.js";import"./Dialog-WotfotBD.js";import"./Button-DXKMbIig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmxXsmze.js";import"./RSPContexts-Dggqaxhp.js";import"./Collection-PyKyE3xx.js";import"./CollectionBuilder-BF5rDR9u.js";import"./Separator-DvLdq-tR.js";import"./SearchField-C9T5dJPC.js";import"./useEvent-BbdxCe-3.js";import"./SelectionManager-C40pIXC_.js";import"./useCollator-C7gGvaqP.js";import"./FocusScope-ng_yE7d5.js";import"./VisuallyHidden-DU3qZR-S.js";import"./Heading-DBS9KkyH.js";import"./Heading-DmSbkR1e.js";import"./getActionGroupSlot-CNBLHpLc.js";import"./LoadingSpinner-BHQyVil0.js";import"./react-children-utilities-kagIyaBA.js";import"./onlyText-ozFLWP9E.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
